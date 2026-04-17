import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { FadeIn } from "@/components/motion/fade-in";
import { NewsletterBlock } from "@/components/newsletter-block";
import { ProductCard } from "@/components/product-card";
import { RoutineSection } from "@/components/sections/routine-section";
import { TopPicksSection } from "@/components/sections/top-picks-section";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { generateBreadcrumbsJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import { categories, getAmazonFavorites, getFeaturedArticles, siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Security Protocols & Preparedness Gear | Security Mood",
  description:
    "Master your home and personal security with curated protocols, battle-tested gear guides, and high-conversion survival essentials. Your trusted guide to safety.",
  keywords: [...siteMeta.keywords, ...siteMeta.plKeywords],
  alternates: {
    canonical: "/",
  },
};

const trustSignals = [
  {
    label: "Monthly Strategists",
    value: "50K+",
    icon: Sparkles,
  },
  {
    label: "Equipment Reliability",
    value: "4.9/5",
    icon: ShieldCheck,
  },
  {
    label: "Secure Deployments",
    value: "15K+",
    icon: TrendingUp,
  },
];

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const favorites = getAmazonFavorites();

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
  ]);

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": toAbsoluteUrl("/#organization"),
        name: siteMeta.name,
        url: toAbsoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: toAbsoluteUrl("/security_mood_logo.png"),
          width: 600,
          height: 600,
        },
        sameAs: [
          "https://pinterest.com/securitymood",
          "https://instagram.com/securitymood",
        ],
      },
      {
        "@type": "WebSite",
        "@id": toAbsoluteUrl("/#website"),
        name: siteMeta.name,
        url: toAbsoluteUrl("/"),
        description: siteMeta.description,
        publisher: { "@id": toAbsoluteUrl("/#organization") },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        name: "Featured Security Protocols",
        description: "Latest operational guides for home and personal safety.",
        itemListElement: featuredArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: toAbsoluteUrl(`/blog/${article.slug}`),
          name: article.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(homeJsonLd) }}
      />
      <section className="relative isolate min-h-[85vh] overflow-hidden border-b border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2200&q=80"
          alt="Modern secure home exterior with smart lighting and surveillance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <Container className="relative flex min-h-[85vh] items-end pb-20 pt-28 md:pb-24">
          <FadeIn className="max-w-3xl space-y-8">
            <Badge>Designed for High-Intent Preparedness</Badge>
            <h1 className="font-heading text-5xl leading-[1.05] text-text-primary sm:text-6xl md:text-7xl">
              Hardened security protocols that turn vulnerability into total peace of mind.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">{siteMeta.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/blog" label="Explore Security Protocols" />
              <CTAButton href="/favorites" label="Shop Deployment Gear" variant="secondary" />
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="border-b border-white/10 py-8 md:py-10">
        <Container>
          <ul className="grid gap-3 md:grid-cols-3" aria-label="Trust signals">
            {trustSignals.map((item) => (
              <li key={item.label} className="rounded-2xl border border-white/12 bg-white/[0.02] px-4 py-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent-gold">
                  <item.icon className="size-4" aria-hidden="true" />
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-text-primary">{item.value}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <TopPicksSection />

      <Section id="categories" className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
        <Container>
          <Heading
            eyebrow="Operational Categories"
            title="Layer your defense with specialized gear and protocols"
            description="From perimeter hardening to digital shielding, our categories are structured for rapid response and tactical clarity."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <InlineCtaPanel
            className="mt-12"
            eyebrow="Initial Deployment?"
            title="Start with one protocol, then scale your gear as your profile grows"
            description="Strategic preparedness begins with a single layer. Benchmark your home with our audit guides and deploy gear only where gaps exist."
            primaryHref="/blog"
            primaryLabel="See Deployment Guides"
            secondaryHref="/favorites"
            secondaryLabel="Explore All Essentials"
          />
        </Container>
      </Section>

      <Section id="featured-articles" className="atmosphere-surface [content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
        <Container>
          <Heading
            eyebrow="Operational Guides"
            title="Battle-tested security routines for home and personal safety"
            description="Exhaustive, high-performing protocols structured for those who prioritize readiness."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <RoutineSection />

      <Section id="amazon-favorites" className="[content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
        <Container>
          <Heading
            eyebrow="Deployment-Ready Gear"
            title="Curated field essentials with proven field reliability"
            description="Professional-grade upgrades chosen for durability, effectiveness, and rapid deployment."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {favorites.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                compact
                urgencyOverride={index < 2 ? "High-demand essential" : undefined}
              />
            ))}
          </div>

          <InlineCtaPanel
            className="mt-12"
            eyebrow="Prepare for tomorrow"
            title="Maintain your readiness momentum while essentials are in stock"
            description="Review your field kit now, compare deployment options, and secure your baseline before supply chains shift."
            primaryHref="/favorites"
            primaryLabel="Browse Gear Collections"
            secondaryHref="/blog"
            secondaryLabel="Review All Protocols"
          />
        </Container>
      </Section>

      <NewsletterBlock />
    </>
  );
}
