import type { Metadata } from "next";
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
import { PremiumProductsSection } from "@/components/sections/premium-products-section";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import { HiShieldCheck, HiLockClosed } from "react-icons/hi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsShieldLockFill, BsFingerprint } from "react-icons/bs";
import { RiServerFill, RiKey2Fill } from "react-icons/ri";
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
      {/* -mt pulls the hero behind the header, pt compensates to keep text centered */}
      <section className="relative isolate min-h-[100vh] -mt-[4.5rem] md:-mt-[6rem] pt-[4.5rem] md:pt-[6rem] overflow-hidden border-b border-white/10 bg-[#000000]">
        
        {/* Full-width Ambient Radar Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none overflow-hidden">
          {/* Radar scaled massively to serve as a grid/texture across the whole screen */}
          <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.5] md:scale-[3.5]" />
          
          {/* Orbiting Icons - Positioned far from the center text */}
          <div className="absolute top-[15%] left-[10%] md:left-[20%]">
            <IconContainer text="Threat Detection" delay={0.2} icon={<HiShieldCheck className="h-8 w-8 text-amber-500" />} />
          </div>
          <div className="absolute top-[20%] right-[10%] md:right-[20%]">
            <IconContainer delay={0.4} text="Access Control" icon={<BsFingerprint className="h-8 w-8 text-amber-500" />} />
          </div>
          <div className="absolute bottom-[20%] left-[15%] md:left-[25%]">
            <IconContainer text="Data Encryption" delay={0.3} icon={<BsShieldLockFill className="h-8 w-8 text-amber-500" />} />
          </div>
          <div className="absolute bottom-[25%] right-[15%] md:right-[25%]">
            <IconContainer text="Server Hardening" delay={0.5} icon={<RiServerFill className="h-8 w-8 text-amber-500" />} />
          </div>
          <div className="absolute top-[50%] left-[5%] hidden md:block">
            <IconContainer text="Zero Trust" delay={0.6} icon={<HiLockClosed className="h-8 w-8 text-amber-500" />} />
          </div>
          <div className="absolute top-[60%] right-[5%] hidden md:block">
            <IconContainer text="Vulnerability Scans" delay={0.8} icon={<AiFillSafetyCertificate className="h-8 w-8 text-amber-500" />} />
          </div>
        </div>

        {/* Foreground Content - Centered and Optimized */}
        <Container className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center pointer-events-none">
          <FadeIn className="max-w-4xl flex flex-col items-center space-y-8 pointer-events-auto rounded-[3rem] bg-white/[0.04] p-8 sm:p-14 backdrop-blur-3xl border border-white/10 shadow-2xl relative">
            <Badge className="relative z-10 bg-amber-500/10 border-amber-500/20 text-amber-500 px-4 py-1.5 backdrop-blur-md uppercase tracking-widest text-xs">
              Crisis-Ready Affiliate Guides
            </Badge>
            
            <h1 className="relative z-10 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] font-medium mix-blend-plus-lighter">
              Professional Grade <br className="hidden sm:block" />
              <span className="text-slate-300">Crisis Readiness.</span>
            </h1>
            
            <p className="relative z-10 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-md">
              Layer your home security and prepare for the unexpected with battle-tested gear. No noise, just the absolute essentials.
            </p>
            
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
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

      <PremiumProductsSection />

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
                detailsHref={`/favorites/${product.id}`}
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
