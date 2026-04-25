import type { Metadata } from "next";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { generateBreadcrumbsJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import { getCategoryById, getFavoritesCollections, siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Amazon Security Favorites & Safety Collections | Security Mood",
  description:
    "Explore curated Amazon security favorites, crisis readiness gear, blackout prep tools, privacy gear, and emergency preparedness products selected for high-intent shoppers.",
  alternates: {
    canonical: "/favorites",
  },
  keywords: ["preparedness favorites", "amazon security finds", "operational essentials", "travel safety gear", ...siteMeta.keywords],
};

export default function FavoritesPage() {
  const collections = getFavoritesCollections();
  const quickStartRoutes = [
    {
      label: "Crisis Prep",
      title: "Crisis readiness kit",
      description: "Start with the 72-hour essentials and backup power layers first.",
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
      description: "Add the door, window, and backup power upgrades for indoor readiness.",
      href: "/landing/shelter-in-place-kit",
    },
  ];

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Favorites", item: "/favorites" },
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

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shop the Pinterest Feed",
    description: "Curated collections of home security, privacy, and emergency readiness products.",
    url: toAbsoluteUrl("/favorites"),
    hasPart: collections.flatMap((col) =>
      col.products.map((p) => ({
        "@type": "Product",
        name: p.name,
        url: toAbsoluteUrl(`/favorites/${p.id}`),
        image: toAbsoluteUrl(p.image),
      }))
    ),
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
        dangerouslySetInnerHTML={{ __html: toJsonLd(collectionJsonLd) }}
      />
      <Section className="border-b border-white/10 pb-12 pt-16 md:pt-20">
        <Container>
          <Heading
            eyebrow="Shop Favorites"
            title="The Security Mood Field Collection"
            description="The essential home security, crisis readiness, privacy, and emergency products currently driving our best-converting collections."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/landing" label="Shop by Need" variant="secondary" />
            <CTAButton href="/" label="Back to Home" variant="ghost" />
          </div>

          <InlineCtaPanel
            className="mt-10"
            eyebrow="Pinterest Favorites"
            title="Pick one routine, shop the essentials, and start your reset tonight"
            description="We focus on quality over quantity. Start with the collection that matches your immediate goal and move into a landing page that answers the exact emergency or security intent."
            primaryHref="/landing"
            primaryLabel="See Landing Pages"
            secondaryHref="/blog"
            secondaryLabel="See Routine Guides"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
        </Container>
      </Section>

      {collections.map((collection, collectionIndex) => {
        const category = getCategoryById(collection.categoryId);

        return (
          <Section
            key={collection.id}
            className={collectionIndex % 2 === 0 ? "atmosphere-surface [content-visibility:auto] [contain-intrinsic-size:1px_1200px]" : "[content-visibility:auto] [contain-intrinsic-size:1px_1200px]"}
          >
            <Container>
              <div className="mb-8 max-w-3xl space-y-4">
                {category ? <Badge>{category.name}</Badge> : null}
                <h2 className="font-heading text-3xl leading-tight md:text-4xl">{collection.title}</h2>
                <p className="leading-relaxed text-text-secondary">{collection.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {collection.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    compact
                    ctaLabel="View on Amazon"
                    detailsHref={`/favorites/${product.id}`}
                  />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
