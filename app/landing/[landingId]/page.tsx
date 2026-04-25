import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { LandingAudienceMatrix } from "@/components/landing-audience-matrix";
import { LandingDecisionStrip } from "@/components/landing-decision-strip";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { LandingProductStep } from "@/components/landing-product-step";
import { LandingValueLadder } from "@/components/landing-value-ladder";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { getAffiliateRoute } from "@/lib/affiliate";
import { generateBreadcrumbsJsonLd, generateFaqJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import {
  getArticlesBySlugs,
  getCategoryById,
  getLandingPageBySlug,
  getLandingPages,
  getProductsByIds,
  siteMeta,
} from "@/lib/site-data";

type LandingPageProps = {
  params: Promise<{ landingId: string }>;
};

export async function generateStaticParams() {
  return getLandingPages().map((page) => ({ landingId: page.slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { landingId } = await params;
  const page = getLandingPageBySlug(landingId);

  if (!page) {
    return {
      title: "Landing Page Not Found",
    };
  }

  return {
    title: `${page.title} | Security Mood`,
    description: page.description,
    alternates: {
      canonical: `/landing/${page.slug}`,
    },
    keywords: [page.title, page.categoryId, "Amazon affiliate landing page", ...siteMeta.keywords],
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/landing/${page.slug}`,
      images: [{ url: page.heroImage, width: 1200, height: 630, alt: page.heroAlt }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.heroImage],
    },
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { landingId } = await params;
  const page = getLandingPageBySlug(landingId);

  if (!page) {
    notFound();
  }

  const category = getCategoryById(page.categoryId);
  const products = getProductsByIds(page.featuredProductIds);
  const articles = getArticlesBySlugs(page.supportingArticleSlugs);
  const priorityOrder = page.priorityOrder ?? [];
  const audiencePaths = page.audiencePaths ?? [];

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Landing Pages", item: "/landing" },
    { name: page.title, item: `/landing/${page.slug}` },
  ]);

  const faqJsonLd = generateFaqJsonLd(page.faqs);

  const landingJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.title,
    description: page.description,
    url: toAbsoluteUrl(`/landing/${page.slug}`),
    isPartOf: {
      "@type": "WebSite",
      "@id": toAbsoluteUrl("/#website"),
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(page.heroImage),
    },
    mainEntity: products.map((product) => ({
      "@type": "Product",
      name: product.name,
      url: toAbsoluteUrl(`/favorites/${product.id}`),
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
        dangerouslySetInnerHTML={{ __html: toJsonLd(landingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="relative h-[58vh] min-h-[460px]">
          <Image src={page.heroImage} alt={page.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative -mt-40 pb-14">
          <div className="max-w-4xl rounded-[2.5rem] border border-white/12 bg-black/70 p-8 backdrop-blur-sm md:p-10">
            {category ? <Badge>{category.name}</Badge> : null}
            <Badge variant="subtle" className="ml-2">
              {page.eyebrow}
            </Badge>
            <h1 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">{page.intro}</p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-text-secondary">
              <span>{page.readTime}</span>
              <span>{page.publishedAt}</span>
              <span>{page.pinHook}</span>
            </div>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-accent-gold">Best for</p>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary md:text-base">
                {page.bestFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            {page.priorityOrder?.length ? (
              <div className="mt-5 rounded-2xl border border-white/15 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-accent-gold">Start here</p>
                <ol className="mt-3 space-y-2 text-sm text-text-secondary md:text-base">
                  {page.priorityOrder.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent-gold">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton
                href={products[0] ? getAffiliateRoute(products[0].id, "landing-hero") : "/favorites"}
                label="Start with Step 1"
              />
              <CTAButton href="/favorites" label="Shop the Kit" variant="secondary" />
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-b border-white/10 py-10 md:py-12">
        <Container>
          <InlineCtaPanel
            eyebrow="Fast Path"
            title="Start with the first essential, then finish the kit in order"
            description="This page is designed to keep the decision simple: open step 1, follow the sequence, and only then browse the supporting guides if you need more context."
            primaryHref={products[0] ? getAffiliateRoute(products[0].id, "landing-fast-path") : "/favorites"}
            primaryLabel="Open Step 1"
            secondaryHref="/favorites"
            secondaryLabel="See Full Kit"
          />
        </Container>
      </Section>

      <Section className="border-b border-white/10">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Quick Decision</p>
            <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
              Buy the first three essentials in order
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              This is the shortest route from interest to purchase. If you only want the essentials, start here and
              move down the list only if you need the rest of the kit.
            </p>
          </div>

          <LandingDecisionStrip products={products} labels={priorityOrder} />

          <div className="mt-12 mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Value Ladder</p>
            <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
              Choose the path that matches your urgency
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              If you want the simplest start, pick the first item. If you want better balance, use the middle path.
              If you want full coverage, complete the full kit.
            </p>
          </div>

          <LandingValueLadder
            products={products}
            items={[
              {
                title: "Fastest path to readiness",
                description: "The easiest first buy if you want a quick win and a simple entry point.",
              },
              {
                title: "Best overall balance",
                description: "The option that usually gives the strongest mix of usefulness and coverage.",
              },
              {
                title: "Complete preparedness kit",
                description: "The full set for people who want every layer in place before the next disruption.",
              },
            ]}
          />

          {audiencePaths.length ? (
            <>
              <div className="mt-12 mb-10 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Who this is for</p>
                <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
                  Pick the path that matches your household
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Different buyers need different first moves. Choose the option that best fits your space, budget,
                  and urgency.
                </p>
              </div>

              <LandingAudienceMatrix cards={audiencePaths} />
            </>
          ) : null}

          <div className="mt-12 mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Featured Products</p>
            <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
              Curated picks for this exact intent
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              These products are selected to reduce friction, answer the query fast, and keep the path to Amazon
              simple.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {products.map((product, index) => (
              <LandingProductStep
                key={product.id}
                product={product}
                stepNumber={index + 1}
                stepLabel={priorityOrder[index] ?? product.benefit}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="atmosphere-surface border-b border-white/10">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Supportive Guides</p>
            <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
              Read the guides that reinforce the buying decision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Supporting articles keep visitors engaged and help turn interest into a more confident click.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl text-text-primary md:text-4xl">
              Questions buyers ask before they click
            </h2>
          </div>

          <div className="grid gap-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-heading text-xl text-text-primary">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>

          <InlineCtaPanel
            className="mt-10"
            eyebrow="Ready to shop?"
            title="Use this page as your quick buying shortcut"
            description="Compare the essentials, review the supporting guides, and move to Amazon once you know the product fits your need."
            primaryHref="/favorites"
            primaryLabel="Browse All Favorites"
            secondaryHref="/landing"
            secondaryLabel="See All Landing Pages"
          />
        </Container>
      </Section>
    </>
  );
}
