import type { Metadata } from "next";
import Image from "next/image";
import { Star, Check, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { Container } from "@/components/container";
import { LocalizedLink } from "@/components/localized-link";
import { T } from "@/components/translated-text";
import { getLocalizedAlternates } from "@/lib/i18n/path";
import { getRequestLocale } from "@/lib/i18n/request";
import { translateText } from "@/lib/i18n/messages";
import { getCatalogShopProducts } from "@/lib/shop-data";

const shopProducts = getCatalogShopProducts();

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const title = translateText(locale, "Shop Preparedness Gear | Security Mood");
  const description = translateText(
    locale,
    "High-end crisis preparedness gear, EMP shields, and tactical flashlights. Security essentials for your home. Free US delivery."
  );

  return {
    title,
    description,
    alternates: getLocalizedAlternates("/shop", locale),
    openGraph: {
      title,
      description: translateText(locale, "Security essentials for your home. Free US delivery."),
      url: "/shop",
      type: "website",
    },
  };
}

const guarantees = [
  { icon: Truck, label: "Free US Delivery", sub: "3–5 business days" },
  { icon: ShieldCheck, label: "30-Day Guarantee", sub: "Full refund, no questions" },
  { icon: RotateCcw, label: "Easy Returns", sub: "Hassle-free process" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen" style={{ background: "#000000" }}>

      {/* Hero */}
      <section className="border-b border-white/10 py-20 text-center px-4">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#c9a96e" }}>
            <T text="Crisis Prep · Security" />
          </p>
          <h1
            className="text-4xl md:text-6xl font-semibold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <T text="Your Essential Gear" />
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "#a8a8a8" }}>
            <T text="Professional-grade security products for when you need them most." />
          </p>
        </Container>
      </section>

      {/* Guarantees */}
      <section className="border-b border-white/10 py-6">
        <Container>
          <ul className="grid grid-cols-3 gap-4">
            {guarantees.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex flex-col items-center text-center gap-1">
                <Icon className="size-5 mb-1" style={{ color: "#c9a96e" }} />
                <span className="text-xs font-semibold text-white">
                  <T text={label} />
                </span>
                <span className="text-[11px]" style={{ color: "#a8a8a8" }}>
                  <T text={sub} />
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 px-4">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {shopProducts.map((product) => {
              const cardClassName =
                "group block rounded-2xl border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-300";
              const cardStyle = { background: "rgb(255 255 255 / 0.02)" };
              const cardContent = (
                <>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "#c9a96e", color: "#000" }}
                    >
                      <T text={product.badge} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        <T text={product.name} />
                      </h2>
                      <p className="text-sm" style={{ color: "#a8a8a8" }}>
                        <T text={product.tagline} />
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-3.5"
                            style={{
                              fill: i < Math.floor(product.rating) ? "#c9a96e" : "transparent",
                              color: "#c9a96e",
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs" style={{ color: "#a8a8a8" }}>
                        {product.rating} ({product.reviews} <T text="reviews" />)
                      </span>
                    </div>

                    {/* Benefits preview */}
                    <ul className="space-y-1.5">
                      {product.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#a8a8a8" }}>
                          <Check className="size-3.5 mt-0.5 shrink-0" style={{ color: "#c9a96e" }} />
                          <T text={b} />
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    {product.price > 0 ? (
                      <div className="flex items-baseline gap-3 pt-1">
                        <span className="text-2xl font-bold text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm line-through" style={{ color: "#a8a8a8" }}>
                          ${product.compareAtPrice.toFixed(2)}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgb(201 169 110 / 0.15)", color: "#c9a96e" }}>
                          -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                        </span>
                      </div>
                    ) : (
                      <div className="pt-1 text-sm font-semibold" style={{ color: "#c9a96e" }}>
                        <T text="Curated buying guide" />
                      </div>
                    )}

                    <div
                      className="w-full text-center py-3 rounded-xl text-sm font-semibold text-black transition-opacity group-hover:opacity-90"
                      style={{ background: "#c9a96e" }}
                    >
                      <T text={product.price > 0 ? "Buy Now →" : "Open Checklist →"} />
                    </div>
                  </div>
                </>
              );

              if (product.price > 0) {
                return (
                  <a
                    key={product.id}
                    href={product.shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={cardClassName}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <LocalizedLink
                  key={product.id}
                  href={product.shopifyUrl}
                  className={cardClassName}
                  style={cardStyle}
                >
                  {cardContent}
                </LocalizedLink>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-t border-white/10 py-12 px-4">
        <Container>
          <p
            className="text-center text-lg font-medium mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#fff" }}
          >
            <T text="Why families trust our gear" />
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {[
              { stat: "94%", label: "felt safer after installation" },
              { stat: "24 hours", label: "average time to a fully secured home" },
              { stat: "12K+", label: "happy customers across the US" },
            ].map(({ stat, label }) => (
              <div key={stat} className="space-y-1">
                <p className="text-3xl font-bold" style={{ color: "#c9a96e" }}>{stat}</p>
                <p className="text-sm" style={{ color: "#a8a8a8" }}>
                  <T text={label} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
