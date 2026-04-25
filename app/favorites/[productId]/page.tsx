import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BenefitList } from "@/components/product-page/benefit-list";
import { BenefitStrip } from "@/components/product-page/benefit-strip";
import { Container } from "@/components/container";
import { FAQSection } from "@/components/product-page/faq-section";
import { CTASection } from "@/components/product-page/cta-section";
import { InlineCtaPanel } from "@/components/inline-cta-panel";
import { ProblemSolution } from "@/components/product-page/problem-solution";
import { ProductHero } from "@/components/product-page/product-hero";
import { RelatedProducts } from "@/components/product-page/related-products";
import { RoutineSection } from "@/components/product-page/routine-section";
import { SocialProof } from "@/components/product-page/social-proof";
import { Section } from "@/components/section";
import { getAffiliateRoute } from "@/lib/affiliate";
import { getProductPageContent } from "@/lib/product-page-content";
import { generateBreadcrumbsJsonLd, toAbsoluteUrl, toJsonLd } from "@/lib/seo";
import { getProductById, getProductProof, products, siteMeta, type Product } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Security Mood Favorites`,
    description: product.benefit,
    alternates: {
      canonical: `/favorites/${product.id}`,
    },
    keywords: [product.categoryId, product.name, "security favorite", "Amazon product guide", ...siteMeta.keywords],
    openGraph: {
      title: `${product.name} | Security Mood Favorites`,
      description: product.benefit,
      url: `/favorites/${product.id}`,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.imageAlt }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Security Mood Favorites`,
      description: product.benefit,
      images: [product.image],
    },
  };
}

function getRelatedProducts(currentProduct: Product) {
  const sameCategory = products.filter(
    (product) => product.id !== currentProduct.id && product.categoryId === currentProduct.categoryId
  );

  if (sameCategory.length >= 4) {
    return sameCategory.slice(0, 4);
  }

  const fallbackProducts = products.filter(
    (product) => product.id !== currentProduct.id && product.categoryId !== currentProduct.categoryId
  );

  return [...sameCategory, ...fallbackProducts].slice(0, 4);
}

function getRecommendedPath(product: Product) {
  if (product.categoryId === "home-security") {
    return {
      href: "/landing/shelter-in-place-kit",
      label: "See the matching home kit",
      description:
        "If this is part of your home defense layer, the shelter-in-place page shows the next products in order.",
    };
  }

  if (product.categoryId === "personal-safety") {
    return {
      href: "/landing/solo-travel-edc-safety",
      label: "See the matching safety kit",
      description:
        "If you're buying this for everyday carry or travel, the EDC page shows the simplest follow-up gear.",
    };
  }

  if (product.categoryId === "cyber-shield") {
    return {
      href: "/landing/travel-privacy-kit",
      label: "See the matching privacy kit",
      description:
        "If you want the broader privacy stack, the travel privacy page organizes the rest of the setup.",
    };
  }

  return {
    href: "/landing/crisis-readiness-kit",
    label: "See the matching preparedness kit",
    description:
      "If you're building a broader emergency setup, the crisis readiness page shows the next essential layers.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const proof = getProductProof(product.id);
  const content = getProductPageContent(product, proof);
  const relatedProducts = getRelatedProducts(product);
  const recommendedPath = getRecommendedPath(product);

  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Favorites", item: "/favorites" },
    { name: product.name, item: `/favorites/${product.id}` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": toAbsoluteUrl(`/favorites/${product.id}#product`),
        name: product.name,
        description: product.description,
        image: [toAbsoluteUrl(product.image)],
        brand: {
          "@type": "Brand",
          "@id": toAbsoluteUrl("/#organization"),
          name: "Security Mood",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: proof.rating,
          reviewCount: Number.parseInt(proof.reviews.replace(/[^\d]/g, ""), 10) || 1000,
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: proof.rating,
          },
          author: {
            "@type": "Person",
            name: "Security Mood Editorial",
          },
        },
        isRelatedTo: relatedProducts.map((related) => ({
          "@type": "Product",
          name: related.name,
          url: toAbsoluteUrl(`/favorites/${related.id}`),
        })),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          url: toAbsoluteUrl(`/go/${product.id}`),
          seller: {
            "@id": toAbsoluteUrl("/#organization"),
          },
        },
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
        dangerouslySetInnerHTML={{ __html: toJsonLd(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqJsonLd) }}
      />
      <ProductHero
        product={product}
        proof={proof}
        emotionalHook={content.emotionalHook}
        bestFor={content.bestFor}
        keyBenefits={content.heroBenefits}
      />
      <Section className="border-b border-white/10 py-10 md:py-12">
        <Container>
          <InlineCtaPanel
            eyebrow="Fastest next step"
            title="Want the full kit around this product?"
            description={recommendedPath.description}
            primaryHref={recommendedPath.href}
            primaryLabel={recommendedPath.label}
            secondaryHref="/blog"
            secondaryLabel="Read the matching guides"
          />
        </Container>
      </Section>
      <BenefitStrip items={content.quickBenefits} />
      <ProblemSolution
        headline={content.problemHeadline}
        problemParagraph={content.problemParagraph}
        solutionParagraph={content.solutionParagraph}
        ctaHref={getAffiliateRoute(product.id, "product-problem-solution")}
      />
      <BenefitList items={content.detailedBenefits} />
      <RoutineSection
        title={content.ritualTitle}
        steps={content.ritualSteps}
        ctaHref={getAffiliateRoute(product.id, "product-routine")}
      />
      <FAQSection title={`Questions people ask before buying ${product.name}`} items={content.faqs} />
      <SocialProof
        headline={content.socialHeadline}
        socialLine={content.socialProofLine}
        ratingLabel={content.socialRatingLabel}
        reviews={proof.reviews}
        ctaHref={getAffiliateRoute(product.id, "product-social-proof")}
      />
      <RelatedProducts products={relatedProducts} />
      <CTASection ctaHref={getAffiliateRoute(product.id, "product-final-cta")} />
    </>
  );
}
