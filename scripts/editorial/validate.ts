import fs from "node:fs";
import path from "node:path";

import { editorialArticleSchema, type EditorialArticle } from "../../lib/editorial-article";
import { products } from "../../lib/site-data";

const projectRoot = path.resolve(import.meta.dirname, "../..");
const contentDirectory = path.join(projectRoot, "content", "articles");
const approvedPrimaryHosts = new Set([
  "cisa.gov", "www.cisa.gov", "nist.gov", "www.nist.gov", "pages.nist.gov",
  "fbi.gov", "www.fbi.gov", "ready.gov", "www.ready.gov", "fema.gov", "www.fema.gov",
  "ftc.gov", "www.ftc.gov", "enisa.europa.eu", "www.enisa.europa.eu", "europol.europa.eu",
  "www.europol.europa.eu", "cert.pl", "www.cert.pl", "gov.pl", "www.gov.pl",
  "fidoalliance.org", "www.fidoalliance.org", "owasp.org", "www.owasp.org",
]);

function wordCount(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function validateEditorialRules(article: EditorialArticle) {
  const failures: string[] = [];
  const productIds = new Set(products.map((product) => product.id));

  if (!article.productIds.every((id) => productIds.has(id))) failures.push("contains an unknown productId");
  if (new Date(article.updatedAt) < new Date(article.publishedAt)) failures.push("updatedAt precedes publishedAt");

  for (const locale of ["en", "pl"] as const) {
    const content = article.locales[locale];
    const sourceIds = new Set(content.sources.map((source) => source.id));
    const prose = [content.quickAnswer, content.methodology, ...content.sections.flatMap((section) => [section.answer, ...section.paragraphs, ...(section.bullets ?? [])]), ...content.faq.flatMap((item) => [item.question, item.answer])].join(" ");
    if (wordCount(prose) < 700) failures.push(`${locale} has fewer than 700 words`);
    if (new Set(content.sources.map((source) => source.url)).size < 3) failures.push(`${locale} has fewer than 3 unique sources`);
    if (!content.sources.every((source) => approvedPrimaryHosts.has(new URL(source.url).hostname))) failures.push(`${locale} contains a source outside the primary-source allowlist`);
    for (const section of content.sections) {
      if (!section.sourceIds.every((id) => sourceIds.has(id))) failures.push(`${locale}/${section.id} references an unknown source`);
    }
  }

  if (failures.length) throw new Error(`${article.slug}:\n- ${failures.join("\n- ")}`);
}

async function verifySources(article: EditorialArticle) {
  const urls = [...new Set(Object.values(article.locales).flatMap((locale) => locale.sources.map((source) => source.url)))];
  for (const url of urls) {
    const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15_000), headers: { "User-Agent": "SecurityMoodEditorialValidator/1.0" } });
    if (!response.ok) throw new Error(`Source check failed (${response.status}): ${url}`);
  }
}

async function main() {
  const files = fs.readdirSync(contentDirectory).filter((fileName) => fileName.endsWith(".json"));
  if (!files.length) throw new Error("No editorial article files found.");

  for (const fileName of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(contentDirectory, fileName), "utf8")) as unknown;
    const article = editorialArticleSchema.parse(raw);
    if (`${article.slug}.json` !== fileName) throw new Error(`${fileName}: filename must match slug`);
    validateEditorialRules(article);
    if (process.argv.includes("--network")) await verifySources(article);
    console.log(`✓ ${article.slug} (${article.locales.en.sources.length} EN sources, ${article.locales.pl.sources.length} PL sources)`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
