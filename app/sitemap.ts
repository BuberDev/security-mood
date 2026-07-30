import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { localizePathname } from "@/lib/i18n/path";
import { articles, landingPages, products } from "@/lib/site-data";
import { SITE_URL } from "@/lib/site";

function localizedEntry(
  pathname: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}${localizePathname(pathname, locale)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((altLocale) => [altLocale, `${SITE_URL}${localizePathname(pathname, altLocale)}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    ...localizedEntry("/", now, "weekly", 1),
    ...localizedEntry("/blog", now, "daily", 0.9),
    ...localizedEntry("/favorites", now, "weekly", 0.8),
    ...localizedEntry("/landing", now, "weekly", 0.78),
  ];

  const articleRoutes = articles.flatMap((article) =>
    localizedEntry(`/blog/${article.slug}`, new Date(article.publishedAt), "monthly", 0.75)
  );

  const productRoutes = products.flatMap((product) =>
    localizedEntry(`/favorites/${product.id}`, now, "weekly", 0.72)
  );

  const landingRoutes = landingPages.flatMap((page) =>
    localizedEntry(`/landing/${page.slug}`, new Date(page.publishedAt), "monthly", 0.76)
  );

  return [...staticRoutes, ...articleRoutes, ...productRoutes, ...landingRoutes];
}
