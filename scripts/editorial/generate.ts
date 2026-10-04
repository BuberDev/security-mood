import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
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
  return `Create one publication-ready Security Mood research article as JSON only.

Topic: ${topic.titleEn} / ${topic.titlePl}
Topic key and slug: ${topic.topicKey}
Category: ${topic.categoryId}
Search intent: ${topic.intent}
Publication and update date: ${today}

Research current primary sources with WebSearch and WebFetch before writing. Use at least four reachable sources from standards bodies or public agencies (for example NIST, CISA, ENISA, CERT.PL, FBI, FTC, FEMA/Ready.gov, Europol, FIDO Alliance or OWASP). Never invent a source, statistic, credential, quote, product capability or URL. Assign every factual section at least one sourceId.

Write complete, natural English and Polish versions. Each language must contain at least 900 substantive words, a 40–70 word direct quick answer, 4–6 clear sections whose answer paragraph can stand alone in AI search results, 3–6 key takeaways, 3–6 FAQs, a comparison table where useful, and a transparent methodology note. Prefer concrete checklists, decision criteria, limitations and recovery steps over generic advice.

Use Security Mood Research Desk as author name. The role is Security and resilience editorial team / Redakcja bezpieczeństwa i odporności. Credentials must state that guidance is source-reviewed, not imply certifications or lab tests. Use /images/blog/cyber_shield_guide.svg for cyber topics, /images/blog/home_security_audit.svg for home security when available, and otherwise an existing /images/blog SVG path.

Add at least three relevant internal links selected from /blog, /favorites, /landing and existing Security Mood article or product paths. Include only genuinely relevant product IDs. For digital account protection, hardware-security-key is allowed. Avoid fear-based selling and do not turn the article into an advert.

Return data conforming exactly to the supplied JSON schema. All URLs must be HTTPS, all dates YYYY-MM-DD, version must be 1, status must be published.`;
}

function parseClaudeResult(output: string): unknown {
  const envelope = JSON.parse(output) as { structured_output?: unknown; result?: string };
  if (envelope.structured_output) return envelope.structured_output;
  if (envelope.result) return JSON.parse(envelope.result);
  return envelope;
}

function main() {
  assertCleanMainBranch();
  const topic = selectTopic();
  const schema = JSON.stringify(z.toJSONSchema(editorialArticleSchema));
  const args = ["--print", "--output-format", "json", "--json-schema", schema, "--allowedTools", "WebSearch,WebFetch", "--permission-mode", "dontAsk", "--no-session-persistence"];
  if (process.env.CLAUDE_MODEL) args.push("--model", process.env.CLAUDE_MODEL);
  args.push(buildPrompt(topic));

  console.log(`Researching and drafting: ${topic.titlePl}`);
  const result = spawnSync("claude", args, { cwd: projectRoot, encoding: "utf8", maxBuffer: 20 * 1024 * 1024, timeout: 12 * 60 * 1000 });
  if (result.status !== 0) throw new Error(result.stderr || `Claude exited with ${result.status}`);
  const article = editorialArticleSchema.parse(parseClaudeResult(result.stdout));
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
}

try {
  main();
} catch (error: unknown) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
