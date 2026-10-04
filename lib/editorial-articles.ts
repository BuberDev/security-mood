import "server-only";

import fs from "node:fs";
import path from "node:path";

import type { Locale } from "@/lib/i18n/config";
import {
  editorialArticleSchema,
  toArticleCard,
  type EditorialArticle,
} from "@/lib/editorial-article";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function readArticleFile(fileName: string): EditorialArticle {
  const filePath = path.join(articlesDirectory, fileName);
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  return editorialArticleSchema.parse(parsed);
}

export function getEditorialArticles(): EditorialArticle[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map(readArticleFile)
    .filter((article) => article.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getEditorialArticle(slug: string) {
  return getEditorialArticles().find((article) => article.slug === slug);
}

export function getEditorialArticleCards(locale: Locale) {
  return getEditorialArticles().map((article) => toArticleCard(article, locale));
}
