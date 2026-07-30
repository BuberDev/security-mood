import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";

import { I18nProvider } from "@/components/i18n-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getRequestLocale } from "@/lib/i18n/request";
import { getLocalizedAlternates } from "@/lib/i18n/path";
import { localizeContent, translateText } from "@/lib/i18n/messages";
import { generateOrganizationJsonLd, toJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { products, siteMeta } from "@/lib/site-data";

import "./globals.css";

const TITLE = "Security Mood | Home Security Products & Preparedness Gear";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const title = translateText(locale, TITLE);
  const description = translateText(locale, siteMeta.description);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | Security Mood",
    },
    description,
    keywords: [...siteMeta.keywords, ...siteMeta.plKeywords],
    authors: [{ name: "Security Mood Editorial Team" }],
    creator: "Security Mood",
    publisher: "Security Mood",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "Security Mood",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      type: "website",
      images: [
        {
          url: "/social_media_banner.png",
          width: 1200,
          height: 630,
          alt: "Security Mood social media banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@securitymood",
      images: ["/social_media_banner.png"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: getLocalizedAlternates("/", locale),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const organizationJsonLd = generateOrganizationJsonLd();
  const searchProducts = localizeContent(locale, products);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background-primary text-text-primary antialiased">
        <I18nProvider locale={locale}>
          <SiteHeader searchProducts={searchProducts} />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
