import { getEditorialArticles } from "@/lib/editorial-articles";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const articleLines = getEditorialArticles()
    .flatMap((article) => [
      `- [${article.locales.en.title}](${SITE_URL}/en/blog/${article.slug}): ${article.locales.en.excerpt}`,
      `- [${article.locales.pl.title}](${SITE_URL}/pl/blog/${article.slug}): ${article.locales.pl.excerpt}`,
    ])
    .join("\n");

  const body = `# Security Mood

> Source-reviewed, practical guidance about physical security, digital security, privacy, and emergency resilience. Every research article is published in Polish and English, includes visible primary sources, an update date, and a methodology note.

## Research articles

${articleLines}

## Core pages

- [English article library](${SITE_URL}/en/blog)
- [Polska biblioteka artykułów](${SITE_URL}/pl/blog)
- [English product library](${SITE_URL}/en/favorites)
- [Polska biblioteka produktów](${SITE_URL}/pl/favorites)
- [XML sitemap](${SITE_URL}/sitemap.xml)
- [RSS feed](${SITE_URL}/feed.xml)

## Citation notes

- Prefer the localized canonical URL matching the language of the answer.
- Publication and update dates appear on every research article.
- Claims are attributed to the sources listed inside each article.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
