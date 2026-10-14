import { spawn } from "node:child_process";
import { appendFileSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

import { isApprovedPrimarySource } from "./sources";

const TIMEOUT_MS = 15 * 60 * 1000;
const MONTHLY_CAP_USD = 1;
const ARTICLE_CAP_USD = 0.05;
const LEDGER_PATH = join(homedir(), "Library", "Application Support", "CopyWritter", "deepseek-ledger.jsonl");
const SEARCH_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

type ProcessResult = { stdout: string; stderr: string };
type LedgerEntry = { ts: string; project: string; slot?: string; step: string; model: string; costUsd: number };

function runProcess(command: string, args: string[], cwd: string): Promise<ProcessResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, detached: true, stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => { stdout += chunk; });
    child.stderr.on("data", (chunk: string) => { stderr += chunk; });
    const timeout = setTimeout(() => {
      timedOut = true;
      if (child.pid) process.kill(-child.pid, "SIGTERM");
      setTimeout(() => {
        if (child.pid) {
          try { process.kill(-child.pid, "SIGKILL"); } catch { /* process already exited */ }
        }
      }, 5_000).unref();
    }, TIMEOUT_MS);
    child.on("error", (error) => { clearTimeout(timeout); reject(error); });
    child.on("close", (code) => {
      clearTimeout(timeout);
      if (timedOut) reject(new Error(`${command} przekroczył limit 15 minut.`));
      else if (code !== 0) reject(new Error(stderr || stdout || `${command} zakończył się kodem ${code}.`));
      else resolve({ stdout, stderr });
    });
  });
}

function parseJsonFence(text: string): unknown {
  const match = text.match(/```json\s*\n([\s\S]*?)\n```/i);
  if (!match) throw new Error("Claude Code nie zwrócił structured_output ani bloku ```json.");
  return JSON.parse(match[1]);
}

function ledgerEntries(): LedgerEntry[] {
  try {
    return readFileSync(LEDGER_PATH, "utf8").split("\n").filter(Boolean).flatMap((line) => {
      try {
        const entry = JSON.parse(line) as LedgerEntry;
        return typeof entry.costUsd === "number" && typeof entry.ts === "string" ? [entry] : [];
      } catch { return []; }
    });
  } catch { return []; }
}

function warsawMonth(value: string | Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw", year: "numeric", month: "2-digit" }).format(new Date(value));
}

function spendFor(entries: LedgerEntry[], slot: string) {
  const month = warsawMonth(new Date());
  return {
    monthly: entries.filter((entry) => warsawMonth(entry.ts) === month).reduce((sum, entry) => sum + entry.costUsd, 0),
    article: entries.filter((entry) => entry.project === "security-mood" && entry.slot === slot).reduce((sum, entry) => sum + entry.costUsd, 0),
  };
}

function recordSpend(entry: Omit<LedgerEntry, "ts">) {
  mkdirSync(dirname(LEDGER_PATH), { recursive: true });
  appendFileSync(LEDGER_PATH, `${JSON.stringify({ ts: new Date().toISOString(), ...entry })}\n`, { encoding: "utf8", mode: 0o600 });
}

function assertBudget(monthly: number, article: number, additionalUsd: number) {
  if (monthly + additionalUsd > MONTHLY_CAP_USD) throw new Error("DeepSeek zablokowany: miesięczny limit 1 USD zostałby przekroczony.");
  if (article + additionalUsd > ARTICLE_CAP_USD) throw new Error("DeepSeek zablokowany: limit 0,05 USD na artykuł zostałby przekroczony.");
}

async function searchSources(query: string, apiKey: string) {
  const response = await fetch(SEARCH_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek/deepseek-v4.1-flash",
      plugins: [{ id: "web", engine: "exa", max_results: 8 }],
      messages: [{ role: "user", content: `Wyszukaj aktualne źródła pierwotne do artykułu: ${query}. Zwróć dla każdego wynik [tytuł](URL) i krótkie streszczenie.` }],
    }),
    signal: AbortSignal.timeout(120_000),
  });
  if (!response.ok) throw new Error(`OpenRouter search zwrócił HTTP ${response.status}.`);
  const data = await response.json() as {
    choices?: { message?: { content?: string; annotations?: { url_citation?: { url?: string; title?: string } }[] } }[];
    usage?: { cost?: number };
  };
  const message = data.choices?.[0]?.message;
  const seen = new Set<string>();
  const sources = (message?.annotations ?? []).flatMap(({ url_citation: citation }) => {
    if (!citation?.url || seen.has(citation.url)) return [];
    seen.add(citation.url);
    try {
      if (!isApprovedPrimarySource(citation.url)) return [];
      return [{ url: citation.url, title: citation.title ?? "", summary: "" }];
    } catch { return []; }
  });
  return { sources, summary: message?.content ?? "", costUsd: data.usage?.cost ?? 0.007 };
}

async function runDeepSeek(prompt: string, schema: Record<string, unknown>, sources: Awaited<ReturnType<typeof searchSources>>, apiKey: string, slot: string, budget: { monthly: number; article: number }) {
  const context = sources.sources.map((source) => `- ${source.title}: ${source.url}`).join("\n");
  const fullPrompt = `${prompt}\n\nPrimary sources to use (cite factual claims against these URLs):\n${context}\n\nSearch notes:\n${sources.summary}\n\nReturn valid JSON matching this schema exactly:\n${JSON.stringify(schema)}`;
  const estimatedInputTokens = fullPrompt.length;
  const maxOutputTokens = 12_000;
  const estimatedDeepseekCost = estimatedInputTokens * 0.3 / 1_000_000 + maxOutputTokens * 1.2 / 1_000_000;
  assertBudget(budget.monthly, budget.article, estimatedDeepseekCost);

  const response = await fetch(DEEPSEEK_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek-flash",
      thinking: { type: "disabled" },
      response_format: { type: "json_object" },
      max_tokens: maxOutputTokens,
      messages: [{ role: "user", content: fullPrompt }],
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`DeepSeek API zwróciło HTTP ${response.status}.`);
  const data = await response.json() as {
    choices?: { message?: { content?: string } }[];
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("DeepSeek API nie zwróciło treści artykułu.");
  const inputTokens = data.usage?.prompt_tokens ?? 0;
  const outputTokens = data.usage?.completion_tokens ?? 0;
  const costUsd = inputTokens * 0.3 / 1_000_000 + outputTokens * 1.2 / 1_000_000;
  recordSpend({ project: "security-mood", slot, step: "article-generation", model: "deepseek-flash", costUsd });
  if (budget.monthly + costUsd > MONTHLY_CAP_USD || budget.article + costUsd > ARTICLE_CAP_USD) {
    throw new Error("DeepSeek zablokowany: rzeczywisty koszt przekroczyłby limit budżetu.");
  }
  return JSON.parse(content) as unknown;
}

export async function generateArticleJson(options: {
  codexArgs: string[];
  cwd: string;
  outputPath: string;
  prompt: string;
  schema: Record<string, unknown>;
  slot: string;
}): Promise<unknown> {
  try {
    await runProcess("codex", options.codexArgs, options.cwd);
    if (!readFileSync(options.outputPath, "utf8")) throw new Error("Codex nie utworzył structured output.");
    return JSON.parse(readFileSync(options.outputPath, "utf8")) as unknown;
  } catch (error) {
    rmSync(options.outputPath, { force: true });
    console.warn(`Codex zawiódł; przechodzę do Claude Code: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const result = await runProcess("claude", [
      "-p", options.prompt,
      "--output-format", "json",
      "--permission-mode", "dontAsk",
      "--max-turns", "40",
      "--allowedTools", "WebSearch,WebFetch",
      "--json-schema", JSON.stringify(options.schema),
    ], options.cwd);
    const response = JSON.parse(result.stdout) as { is_error?: boolean; structured_output?: unknown; result?: string };
    if (response.is_error) throw new Error(response.result ?? "Claude Code zwrócił is_error.");
    return response.structured_output ?? parseJsonFence(response.result ?? "");
  } catch (error) {
    console.warn(`Claude Code zawiódł; DeepSeek może być użyty jako płatny zapas: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (process.env.ALLOW_PAID_LLM_FALLBACK !== "true") throw new Error("Codex i Claude Code zawiodły, a płatny fallback jest wyłączony.");
  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  const openRouterKey = process.env.OPENROUTER_API_KEY;
  if (!deepseekKey || !openRouterKey) throw new Error("Brak kluczy API wymaganych przez płatny fallback DeepSeek.");

  const current = ledgerEntries();
  const initialBudget = spendFor(current, options.slot);
  assertBudget(initialBudget.monthly, initialBudget.article, 0.007);
  const search = await searchSources(options.prompt.slice(0, 1600), openRouterKey);
  recordSpend({ project: "security-mood", slot: options.slot, step: "article-search", model: "deepseek/deepseek-v4.1-flash", costUsd: search.costUsd });
  const afterSearch = spendFor(ledgerEntries(), options.slot);
  assertBudget(afterSearch.monthly, afterSearch.article, 0);
  if (search.sources.length < 3) throw new Error(`DeepSeek przerwany przed płatnym generowaniem: tylko ${search.sources.length} zatwierdzonych źródeł.`);
  return runDeepSeek(options.prompt, options.schema, search, deepseekKey, options.slot, afterSearch);
}
