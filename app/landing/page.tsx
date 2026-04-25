import type { Metadata } from "next";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { LandingPageCard } from "@/components/landing-page-card";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { generateBreadcrumbsJsonLd, toJsonLd } from "@/lib/seo";
import { getLandingPages, siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Crisis Preparedness Landing Pages | Security Mood",
  description:
    "Focused landing pages for crisis readiness, blackout prep, evacuation kits, renters, travelers, and high-intent Amazon shoppers.",
  alternates: {
    canonical: "/landing",
  },
  keywords: [
    "crisis preparedness landing pages",
    "amazon affiliate landing pages",
    "blackout prep",
    "evacuation kit",
    "security buying guides",
    ...siteMeta.keywords,
  ],
};

export default function LandingIndexPage() {
  const landingPages = getLandingPages();
  const priorityLandingOrder = [
    "crisis-readiness-kit",
    "bug-out-bag-essentials",
    "shelter-in-place-kit",
    "emergency-vehicle-kit",
    "power-outage-readiness",
    "blackout-home-security-plan",
    "home-security-renters",
    "travel-privacy-kit",
    "solo-travel-edc-safety",
  ];
  const sortedLandingPages = [...landingPages].sort((a, b) => {
    const aIndex = priorityLandingOrder.indexOf(a.slug);
    const bIndex = priorityLandingOrder.indexOf(b.slug);

    if (aIndex === -1 && bIndex === -1) {
      return a.title.localeCompare(b.title);
    }

    if (aIndex === -1) {
      return 1;
    }

    if (bIndex === -1) {
      return -1;
    }

    return aIndex - bIndex;
  });
  const quickStartRoutes = [
    {
      label: "Crisis Prep",
      title: "Crisis readiness kit",
      description: "Start with 72-hour essentials, backup power, and home readiness layers.",
      href: "/landing/crisis-readiness-kit",
    },
    {
      label: "Evacuation",
      title: "Bug out bag essentials",
      description: "Build the first bag fast with water, warmth, and communication basics.",
      href: "/landing/bug-out-bag-essentials",
    },
    {
      label: "Home Lockdown",
      title: "Shelter-in-place kit",
      description: "Strengthen the home with door, window, and backup power upgrades.",
      href: "/landing/shelter-in-place-kit",
    },
  ];

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Landing Pages", item: "/landing" },
  ]);
  const quickStartJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quick Start Preparedness Paths",
    description: "Fast entry points for the highest-intent preparedness landing pages.",
    itemListElement: quickStartRoutes.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: route.href,
      name: route.title,
    })),
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
      <Section className="border-b border-white/10 pb-14 pt-16 md:pt-20">
        <Container>
          <Heading
            eyebrow="Preparedness Pages"
            title="Landing pages built for crisis readiness and high-intent search traffic"
            description="Each page answers one emergency or security intent clearly, which usually means less bounce and stronger click-through to Amazon."
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

          <InlineCtaPanel
            className="mt-10"
            eyebrow="Why these pages work"
            title="A narrow emergency intent is easier to monetize than a broad audience"
            description="People searching for blackout prep or crisis readiness usually want one quick answer. These pages match that expectation with focused product bundles, supporting guides, and clear shopping paths."
            primaryHref="/favorites"
            primaryLabel="Browse All Favorites"
            secondaryHref="/blog"
            secondaryLabel="Read All Guides"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sortedLandingPages.map((page) => (
              <LandingPageCard key={page.slug} page={page} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
