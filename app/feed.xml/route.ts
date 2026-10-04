import { getEditorialArticles } from "@/lib/editorial-articles";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export function GET() {
  const articles = getEditorialArticles();
  const items = articles
    .flatMap((article) =>
      (["pl", "en"] as const).map((locale) => {
        const content = article.locales[locale];
        const url = `${SITE_URL}/${locale}/blog/${article.slug}`;
        return `
    <item>
      <title>${escapeXml(content.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(content.excerpt)}</description>
      <pubDate>${new Date(`${article.publishedAt}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(article.categoryId)}</category>
      <language>${locale}</language>
    </item>`;
      })
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Security Mood Research</title>
    <link>${SITE_URL}/en/blog</link>
    <description>Source-reviewed physical and digital security guidance.</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
