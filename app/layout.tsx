import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { generateOrganizationJsonLd, toJsonLd } from "@/lib/seo";
import { products, siteMeta } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://securitymood.com"),
  title: {
    default: "Security Mood | Home Security Products & Preparedness Gear",
    template: "%s | Security Mood",
  },
  description: siteMeta.description,
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
    title: "Security Mood | Home Security Products & Preparedness Gear",
    description: siteMeta.description,
    url: "https://securitymood.com",
    siteName: "Security Mood",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Mood | Home Security Products & Preparedness Gear",
    description: siteMeta.description,
    creator: "@securitymood",
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
  alternates: {
    canonical: "https://securitymood.com",
    languages: {
      "en-US": "https://securitymood.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background-primary text-text-primary antialiased">
        <SiteHeader searchProducts={products} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
