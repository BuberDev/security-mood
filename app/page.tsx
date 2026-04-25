import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/heading";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { LandingPageCard } from "@/components/landing-page-card";
import { FadeIn } from "@/components/motion/fade-in";
import { NewsletterBlock } from "@/components/newsletter-block";
import { ProductCard } from "@/components/product-card";
import { RoutineSection } from "@/components/sections/routine-section";
import { TopPicksSection } from "@/components/sections/top-picks-section";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { generateBreadcrumbsJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import { categories, getAmazonFavorites, getFeaturedArticles, getLandingPages, siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home Security & Crisis Preparedness Products | Security Mood",
  description:
    "Discover home security products, crisis preparedness gear, blackout essentials, personal safety tools, cyber privacy equipment, and emergency readiness favorites.",
  keywords: [...siteMeta.keywords, ...siteMeta.plKeywords],
  alternates: {
    canonical: "/",
  },
};

const trustSignals = [
  {
    label: "Preparedness Kits",
    value: "72-Hour",
    icon: Sparkles,
  },
  {
    label: "Gear Confidence",
    value: "4.9/5",
    icon: ShieldCheck,
  },
  {
    label: "Actionable Layers",
    value: "3 Steps",
    icon: TrendingUp,
  },
];

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const favorites = getAmazonFavorites();
  const landingPages = getLandingPages();
  const quickStartRoutes = [
    {
      label: "Renters",
      title: "Apartment-friendly home security",
      description: "Start with renter-safe upgrades, window protection, and low-friction security layers.",
      href: "/landing/home-security-renters",
    },
    {
      label: "Homeowners",
      title: "Full crisis readiness kit",
      description: "Build a stronger baseline with blackout prep, water, power, and home defense layers.",
      href: "/landing/crisis-readiness-kit",
    },
    {
      label: "Families",
      title: "Shelter-in-place plan",
      description: "Get the essentials for long-duration readiness, evacuation, and household coordination.",
      href: "/landing/shelter-in-place-kit",
    },
  ];
  const crisisPages = landingPages.filter((page) =>
    ["crisis-readiness-kit", "bug-out-bag-essentials", "shelter-in-place-kit"].includes(page.slug)
  );
  const otherPages = landingPages.filter((page) => !crisisPages.some((crisisPage) => crisisPage.slug === page.slug));

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
        name: "Featured Security Guides",
        description: "Latest guides for home security, privacy, and emergency readiness.",
        itemListElement: featuredArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: toAbsoluteUrl(`/blog/${article.slug}`),
          name: article.title,
        })),
      },
      {
        "@type": "ItemList",
        name: "Quick Start Paths",
        description: "Fast routes to the most relevant preparedness landing pages.",
        itemListElement: quickStartRoutes.map((route, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: toAbsoluteUrl(route.href),
          name: route.title,
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
            <Badge>Crisis-Ready Affiliate Guides</Badge>
            <h1 className="font-heading text-5xl leading-[1.05] text-text-primary sm:text-6xl md:text-7xl">
              Build a safer home, a stronger kit, and a faster exit plan before the next crisis.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Security Mood helps readers buy the right products for home security, blackout readiness, evacuation,
              and emergency preparedness without the noise.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/landing/crisis-readiness-kit" label="Start Crisis Prep" />
              <CTAButton href="/landing" label="View Prep Kits" variant="secondary" />
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

      <Section className="border-b border-white/10 py-10 md:py-12">
        <Container>
          <Heading
            eyebrow="Choose Your Starting Point"
            title="Pick the path that matches your household"
            description="These quick routes reduce choice overload and send readers straight to the kit that fits their situation best."
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

      <Section className="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
        <Container>
          <Heading
            eyebrow="Crisis Preparedness"
            title="Start with the 72-hour kit, then layer your home and vehicle readiness"
            description="These pages are the fastest path to practical preparedness: one page for the kit, one for the house, one for evacuation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {crisisPages.map((page) => (
              <LandingPageCard key={page.slug} page={page} />
            ))}
          </div>

          <InlineCtaPanel
            className="mt-12"
            eyebrow="Most Important First"
            title="If you only build one thing this week, build the crisis kit first"
            description="A clear 72-hour plan, a home lockdown layer, and an evacuation bag are easier to buy when they are presented as a sequence."
            primaryHref="/landing/crisis-readiness-kit"
            primaryLabel="Open Crisis Kit"
            secondaryHref="/landing/bug-out-bag-essentials"
            secondaryLabel="Open Evacuation Kit"
          />
        </Container>
      </Section>

      <TopPicksSection />

      <Section id="categories" className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
        <Container>
            <Heading
              eyebrow="Operational Categories"
              title="Layer your defense with specialized gear and crisis-prep protocols"
              description="From perimeter hardening to blackout readiness and evacuation prep, our categories are structured for rapid response and practical clarity."
            />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <InlineCtaPanel
            className="mt-12"
            eyebrow="Initial Deployment?"
            title="Start with one protocol, then scale your gear as your needs grow"
            description="Strategic preparedness begins with a single layer. Benchmark your home with our audit guides and deploy gear only where gaps exist, especially before outages or disruptive events."
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
            title="Battle-tested guides for home security and crisis readiness"
            description="Exhaustive, high-performing protocols structured for blackouts, unrest, and everyday preparedness."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="landing-pages" className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
        <Container>
          <Heading
            eyebrow="Additional Prep Kits"
            title="Focused pages built to convert a specific preparedness need"
            description="These are the supporting pages to send search and Pinterest traffic to when you want a cleaner match between emergency intent, content, and purchase intent."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherPages.map((page) => (
              <LandingPageCard key={page.slug} page={page} />
            ))}
          </div>
        </Container>
      </Section>

      <RoutineSection />

      <Section id="amazon-favorites" className="[content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
        <Container>
          <Heading
            eyebrow="Deployment-Ready Gear"
            title="Curated field essentials with proven readiness value"
            description="Professional-grade upgrades chosen for durability, effectiveness, and the fastest path to a more prepared home."
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
            secondaryLabel="Review All Guides"
          />
        </Container>
      </Section>

      <NewsletterBlock />
    </>
  );
}
