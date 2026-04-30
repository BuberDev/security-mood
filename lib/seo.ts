import { SITE_URL, absoluteUrl } from "./site";

export function toAbsoluteUrl(path: string) {
  return absoluteUrl(path);
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function generateBreadcrumbsJsonLd(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.item),
    })),
  };
}

export function generateFaqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": toAbsoluteUrl("/#organization"),
    name: "Security Mood",
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@securitymood.com",
      availableLanguage: ["en", "pl"],
    },
  };
}

export function generateReviewJsonLd(product: {
  name: string;
  ratingValue: number;
  reviewCount: number;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: product.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.ratingValue,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: product.author || "Security Protocol Specialist",
    },
  };
}
