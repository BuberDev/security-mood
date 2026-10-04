import { z } from "zod";

import type { Locale } from "@/lib/i18n/config";
import type { Article, CategoryId } from "@/lib/site-data";

const localizedTextSchema = z.object({
  en: z.string().min(1),
  pl: z.string().min(1),
});

const sourceSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(3),
  publisher: z.string().min(2),
  url: z.string().url().startsWith("https://"),
  publishedAt: z.string().date().optional(),
  accessedAt: z.string().date(),
});

const tableSchema = z.object({
  headers: z.array(z.string().min(1)).min(2).max(5),
  rows: z.array(z.array(z.string().min(1)).min(2).max(5)).min(1),
});

const sectionImageSchema = z.object({
  src: z.string().startsWith("/images/blog/"),
  alt: z.string().min(15).max(180),
  caption: z.string().min(20).max(240),
});

const sectionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  heading: z.string().min(8),
  answer: z.string().min(80),
  paragraphs: z.array(z.string().min(60)).min(1),
  bullets: z.array(z.string().min(20)).optional(),
  table: tableSchema.optional(),
  image: sectionImageSchema.optional(),
  sourceIds: z.array(z.string()).min(1),
  productId: z.string().optional(),
});

const localeArticleSchema = z.object({
  title: z.string().min(20).max(110),
  excerpt: z.string().min(80).max(240),
  heroAlt: z.string().min(15).max(180),
  quickAnswer: z.string().min(180).max(560),
  keyTakeaways: z.array(z.string().min(30)).min(3).max(6),
  methodology: z.string().min(120),
  sections: z.array(sectionSchema).min(4),
  faq: z
    .array(z.object({ question: z.string().min(15), answer: z.string().min(80) }))
    .min(3)
    .max(8),
  sources: z.array(sourceSchema).min(3),
});

export const editorialArticleSchema = z.object({
  version: z.literal(1),
  topicKey: z.string().regex(/^[a-z0-9-]+$/),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  status: z.literal("published"),
  categoryId: z.enum(["home-security", "personal-safety", "cyber-shield", "emergency-prep"]),
  publishedAt: z.string().date(),
  updatedAt: z.string().date(),
  heroImage: z.string().startsWith("/"),
  author: z.object({
    name: z.string().min(3),
    role: localizedTextSchema,
    credentials: localizedTextSchema,
  }),
  internalLinks: z
    .array(z.object({ href: z.string().startsWith("/"), label: localizedTextSchema }))
    .min(3),
  productIds: z.array(z.string()).min(1).max(4),
  locales: z.object({ en: localeArticleSchema, pl: localeArticleSchema }),
});

export type EditorialArticle = z.infer<typeof editorialArticleSchema>;
export type EditorialLocaleContent = EditorialArticle["locales"][Locale];

export function getEditorialLocale(article: EditorialArticle, locale: Locale) {
  return article.locales[locale];
}

export function toArticleCard(article: EditorialArticle, locale: Locale): Article {
  const content = getEditorialLocale(article, locale);
  const wordCount = content.sections.reduce(
    (count, section) =>
      count +
      [section.answer, ...section.paragraphs, ...(section.bullets ?? [])].join(" ").split(/\s+/).length,
    0
  );

  return {
    slug: article.slug,
    title: content.title,
    excerpt: content.excerpt,
    intro: content.quickAnswer,
    heroImage: article.heroImage,
    heroAlt: content.heroAlt,
    categoryId: article.categoryId as CategoryId,
    readTime: `${Math.max(4, Math.ceil(wordCount / 210))} min read`,
    publishedAt: article.publishedAt,
    pinHook: content.keyTakeaways[0],
    sections: content.sections.map((section) => ({
      id: section.id,
      title: section.heading,
      copy: section.answer,
      productId: section.productId ?? article.productIds[0],
    })),
  };
}
