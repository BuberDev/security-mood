import type { Metadata } from "next";
import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { TopPicksSection } from "@/components/sections/top-picks-section";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { generateBreadcrumbsJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import {
  articles,
  categories,
  getCategoryById,
  getTopPicksByCategory,
  isCategoryId,
  sortArticlesByPriority,
  siteMeta,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home Security, Crisis Readiness & Emergency Guides | Security Mood",
  description:
    "Explore high-intent guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.",
  alternates: {
    canonical: "/blog",
  },
  keywords: ["security protocols", "preparedness guides", "home safety audit", "home security products", ...siteMeta.keywords],
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

function getSelectedCategory(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const filters = await searchParams;
  const selectedCategoryId = getSelectedCategory(filters.category);
  const selectedCategory =
    selectedCategoryId && isCategoryId(selectedCategoryId)
      ? getCategoryById(selectedCategoryId)
      : undefined;
  const quickStartRoutes = [
    {
      label: "Crisis Prep",
      title: "Crisis readiness kit",
      description: "Start with the 72-hour essentials, backup power, and home readiness layers.",
      href: "/landing/crisis-readiness-kit",
    },
    {
      label: "Evacuation",
      title: "Bug out bag essentials",
      description: "Build the first evacuation bag with water, warmth, and communication basics.",
      href: "/landing/bug-out-bag-essentials",
    },
    {
      label: "Home Lockdown",
      title: "Shelter-in-place kit",
      description: "Add door, window, and backup power upgrades for staying safer indoors.",
      href: "/landing/shelter-in-place-kit",
    },
  ];

  const visibleArticles = selectedCategory
    ? sortArticlesByPriority(articles.filter((article) => article.categoryId === selectedCategory.id))
    : sortArticlesByPriority(articles);

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Guides", item: "/blog" },
    ...(selectedCategory
      ? [{ name: selectedCategory.name, item: `/blog?category=${selectedCategory.id}` }]
      : []),
  ]);
  const quickStartJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quick Start Preparedness Paths",
    description: "Fast entry points for the highest-intent preparedness landing pages.",
    itemListElement: quickStartRoutes.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: toAbsoluteUrl(route.href),
      name: route.title,
    })),
  };

  const categoryPicks = selectedCategory ? getTopPicksByCategory(selectedCategory.id) : [];
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: selectedCategory ? `${selectedCategory.name} Guides` : "Security Mood Guides",
    url: toAbsoluteUrl(
      selectedCategory ? `/blog?category=${selectedCategory.id}` : "/blog"
    ),
    hasPart: visibleArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: toAbsoluteUrl(`/blog/${article.slug}`),
      datePublished: article.publishedAt,
      articleSection: article.categoryId,
      image: toAbsoluteUrl(article.heroImage),
    })),
    publisher: {
      "@type": "Organization",
      name: "Security Mood",
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/security_mood_logo.png"),
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Security Mood",
      url: toAbsoluteUrl("/"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(quickStartJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(blogJsonLd) }}
      />
      <Section className="border-b border-white/10 pb-14 pt-16 md:pt-20">
        <Container>
          <Heading
            eyebrow="Security Mood Guides"
            title="Battle-tested guides for home security, crisis readiness, and emergency response"
            description="Search-friendly articles with clear transformation hooks, trust signals, and soft product CTAs for outages, unrest, and everyday preparedness."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                !selectedCategory
                  ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                  : "border-white/20 text-text-secondary hover:text-text-primary"
              )}
            >
              All Articles
            </Link>

            {categories.map((category) => {
              const isActive = selectedCategory?.id === category.id;

              return (
                <Link
                  key={category.id}
                  href={`/blog?category=${category.id}`}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                      : "border-white/20 text-text-secondary hover:text-text-primary"
                  )}
              >
                {category.name}
              </Link>
            );
          })}
          </div>

          {selectedCategory ? (
            <div className="mt-8 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <Badge>{selectedCategory.name}</Badge>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{selectedCategory.description}</p>
            </div>
          ) : null}

          {!selectedCategory ? (
            <>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {quickStartRoutes.map((route) => (
                  <Card key={route.label} className="border-white/12 bg-white/[0.02] p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">{route.label}</p>
                    <h3 className="mt-3 font-heading text-2xl text-text-primary">{route.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{route.description}</p>
                    <div className="mt-5">
                      <CTAButton href={route.href} label="Open this path" />
                    </div>
                  </Card>
                ))}
              </div>

              <InlineCtaPanel
                className="mt-10"
                eyebrow="Need quick product wins?"
                title="Open a guide, then compare the top picks in one flow"
                description="Readers convert more confidently when they read one focused guide first, then step into a landing page with a tighter emergency or security intent."
                primaryHref="/landing"
                primaryLabel="View Landing Pages"
                secondaryHref="/favorites"
                secondaryLabel="View Amazon Favorites"
              />
            </>
          ) : null}

          {selectedCategory && categoryPicks.length > 0 ? (
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-heading text-3xl text-text-primary">
                    Essential {selectedCategory.name} Favorites
                  </h2>
                  <p className="mt-2 text-text-secondary">
                    Direct Amazon links to the highest-rated picks for this protocol.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categoryPicks.map((item) => (
                  <ProductCard
                    key={item.product.id}
                    product={item.product}
                    compact
                    featuredBadge={item.badge}
                    ctaLabel="View on Amazon"
                  />
                ))}
              </div>
            </div>
          ) : null}
          </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10">
            <h2 className="font-heading text-3xl text-text-primary">
              {selectedCategory ? `${selectedCategory.name} Guides` : "Latest Security Guides"}
            </h2>
            <p className="mt-2 text-text-secondary">
              Step-by-step preparedness instructions for your home, travel, and crisis planning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <TopPicksSection className="pt-0" />
    </>
  );
}
