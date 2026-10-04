import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { z } from "zod";

import { editorialArticleSchema, type EditorialArticle } from "../../lib/editorial-article";

type PlanItem = {
  topicKey: string;
  categoryId: EditorialArticle["categoryId"];
  titleEn: string;
  titlePl: string;
  intent: string;
};

const projectRoot = path.resolve(import.meta.dirname, "../..");
const contentDirectory = path.join(projectRoot, "content", "articles");
const planPath = path.join(projectRoot, "content", "editorial-plan.json");

function run(command: string, args: string[], options: { stdio?: "inherit" | "pipe" } = {}) {
  return execFileSync(command, args, { cwd: projectRoot, encoding: "utf8", stdio: options.stdio ?? "pipe" });
}

function assertCleanMainBranch() {
  if (run("git", ["branch", "--show-current"]).trim() !== "main") throw new Error("Publisher only runs on main.");
  if (run("git", ["status", "--porcelain"]).trim()) throw new Error("Publisher requires a clean working tree.");
}

function selectTopic(): PlanItem {
  const plan = JSON.parse(fs.readFileSync(planPath, "utf8")) as PlanItem[];
  const used = new Set(
    fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".json")).map((file) => {
      const raw = JSON.parse(fs.readFileSync(path.join(contentDirectory, file), "utf8")) as { topicKey: string };
      return raw.topicKey;
    })
  );
  const requested = process.env.ARTICLE_TOPIC_KEY;
  const topic = requested ? plan.find((item) => item.topicKey === requested) : plan.find((item) => !used.has(item.topicKey));
  if (!topic) throw new Error(requested ? `Unknown or unavailable topic: ${requested}` : "Editorial plan is exhausted. Add reviewed topics before publishing again.");
  if (used.has(topic.topicKey)) throw new Error(`Topic was already published: ${topic.topicKey}`);
  return topic;
}

function buildPrompt(topic: PlanItem) {
  const today = new Date().toISOString().slice(0, 10);
  const productIdsByCategory: Record<EditorialArticle["categoryId"], string[]> = {
    "home-security": ["biometric-smart-lock", "mini-spy-camera-4k", "outdoor-security-camera", "smart-door-lock", "door-security-bar", "portable-safe", "outdoor-motion-alarm", "solar-motion-light", "window-alarm-kit", "door-wedge-alarm"],
    "personal-safety": ["anti-theft-smart-backpack", "personal-safety-alarm", "tactical-pen", "pepper-spray-gel", "rfid-wallet", "tactical-flashlight"],
    "cyber-shield": ["hardware-security-key", "faraday-bag", "webcam-covers", "privacy-screen", "hidden-camera-detector", "rfid-passport-wallet"],
    "emergency-prep": ["solar-emergency-radio", "water-filtration-straw", "emergency-food-supply", "first-aid-kit", "fire-starter-set", "emergency-blanket-set", "portable-power-station", "emergency-car-kit"],
  };
  return `Create one publication-ready Security Mood research article as JSON only.

Topic: ${topic.titleEn} / ${topic.titlePl}
Topic key and slug: ${topic.topicKey}
Category: ${topic.categoryId}
Search intent: ${topic.intent}
Publication and update date: ${today}

Research current primary sources with WebSearch and WebFetch before writing. Use at least four reachable sources from standards bodies or public agencies (for example NIST, CISA, ENISA, CERT.PL, FBI, FTC, FEMA/Ready.gov, Europol, FIDO Alliance or OWASP). Never invent a source, statistic, credential, quote, product capability or URL. Assign every factual section at least one sourceId.

Write complete, natural English and Polish versions. Each language must contain at least 900 substantive words, a 40–70 word direct quick answer, 4–6 clear sections whose answer paragraph can stand alone in AI search results, 3–6 key takeaways, 3–6 FAQs, a comparison table where useful, and a transparent methodology note. Prefer concrete checklists, decision criteria, limitations and recovery steps over generic advice.

Use Security Mood Research Desk as author name. The role is Security and resilience editorial team / Redakcja bezpieczeństwa i odporności. Credentials must state that guidance is source-reviewed, not imply certifications or lab tests. Use /images/blog/cyber_shield_guide.svg for cyber topics, /images/blog/home_security_audit.svg for home security when available, and otherwise an existing /images/blog SVG path.

Add at least three relevant internal links selected from /blog, /favorites, /landing and existing Security Mood article or product paths. Select 1–3 genuinely relevant productIds from this exact category allowlist: ${productIdsByCategory[topic.categoryId].join(", ")}. The productIds array must never be empty, and every section-level productId must come from the same allowlist. Avoid fear-based selling and do not turn the article into an advert.

Return data conforming exactly to the supplied JSON schema. All URLs must be HTTPS, all dates YYYY-MM-DD, version must be 1, status must be published.`;
}

const unsupportedStructuredOutputKeywords = new Set([
  "format",
  "starts_with",
  "minLength",
  "maxLength",
  "minItems",
  "maxItems",
  "pattern",
]);

function toStructuredOutputSchema(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(toStructuredOutputSchema);
  if (!value || typeof value !== "object") return value;

  const result = Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key]) => !unsupportedStructuredOutputKeywords.has(key))
      .map(([key, nestedValue]) => [key, toStructuredOutputSchema(nestedValue)])
  );

  if (result.properties && typeof result.properties === "object") {
    const properties = result.properties as Record<string, unknown>;
    const originallyRequired = new Set(Array.isArray(result.required) ? result.required as string[] : []);
    for (const [key, propertySchema] of Object.entries(properties)) {
      if (!originallyRequired.has(key)) {
        properties[key] = { anyOf: [propertySchema, { type: "null" }] };
      }
    }
    result.required = Object.keys(properties);
    result.additionalProperties = false;
  }

  return result;
}

function removeNullProperties(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(removeNullProperties);
  if (!value || typeof value !== "object") return value;

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([, nestedValue]) => nestedValue !== null)
      .map(([key, nestedValue]) => [key, removeNullProperties(nestedValue)])
  );
}

function main() {
  assertCleanMainBranch();
  const topic = selectTopic();
  const schemaObject = toStructuredOutputSchema(
    z.toJSONSchema(editorialArticleSchema)
  ) as Record<string, unknown>;
  delete schemaObject.$schema;
  const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "security-mood-publisher-"));
  const schemaPath = path.join(temporaryDirectory, "article-schema.json");
  const outputPath = path.join(temporaryDirectory, "article.json");
  fs.writeFileSync(schemaPath, JSON.stringify(schemaObject));

  const args = [
    "--search",
    "exec",
    "--ephemeral",
    "--sandbox",
    "read-only",
    "--ignore-user-config",
    "--ignore-rules",
    "--output-schema",
    schemaPath,
    "--output-last-message",
    outputPath,
    "--color",
    "never",
  ];
  if (process.env.CODEX_MODEL) args.push("--model", process.env.CODEX_MODEL);
  args.push(buildPrompt(topic));

  console.log(`Researching and drafting: ${topic.titlePl}`);
  const result = spawnSync("codex", args, { cwd: projectRoot, encoding: "utf8", maxBuffer: 20 * 1024 * 1024, timeout: 20 * 60 * 1000 });
  try {
    if (result.status !== 0) throw new Error(result.stderr || result.stdout || `Codex exited with ${result.status}`);
    if (!fs.existsSync(outputPath)) throw new Error(`Codex did not create structured output.\n${result.stderr}\n${result.stdout}`);
    const generatedOutput = JSON.parse(fs.readFileSync(outputPath, "utf8")) as unknown;
    const article = editorialArticleSchema.parse(removeNullProperties(generatedOutput));
    if (article.topicKey !== topic.topicKey || article.slug !== topic.topicKey || article.categoryId !== topic.categoryId) throw new Error("Generated article does not match the selected editorial topic.");

    const destination = path.join(contentDirectory, `${article.slug}.json`);
    if (fs.existsSync(destination)) throw new Error(`Refusing to overwrite ${destination}`);
    fs.writeFileSync(destination, `${JSON.stringify(article, null, 2)}\n`, { flag: "wx" });

    let committed = false;

    try {
      run("npm", ["run", "articles:validate", "--", "--network"], { stdio: "inherit" });
      run("npm", ["run", "lint"], { stdio: "inherit" });
      run("npm", ["run", "build"], { stdio: "inherit" });
      if (process.env.PUBLISH !== "true") {
        console.log(`Draft validated at content/articles/${article.slug}.json. Review it, then commit it or run with PUBLISH=true.`);
        return;
      }
      run("git", ["add", `content/articles/${article.slug}.json`]);
      run("git", ["commit", "-m", `content: publish ${article.slug}`], { stdio: "inherit" });
      committed = true;
      run("git", ["push", "origin", "main"], { stdio: "inherit" });
      console.log(`Published ${article.slug} through the Git/Vercel pipeline.`);
    } catch (error) {
      if (!committed) fs.rmSync(destination, { force: true });
      throw error;
    }
  } finally {
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
  }
}

try {
  main();
} catch (error: unknown) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
