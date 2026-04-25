import type { MetadataRoute } from "next";

import { articles, landingPages, products } from "@/lib/site-data";

const SITE_URL = "https://securitymood.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/favorites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/landing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.78,
    },
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/favorites/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  const landingRoutes = landingPages.map((page) => ({
    url: `${SITE_URL}/landing/${page.slug}`,
    lastModified: new Date(page.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.76,
  }));

  return [...staticRoutes, ...articleRoutes, ...productRoutes, ...landingRoutes];
}
