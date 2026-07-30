import Image from "next/image";
import { Check, Star, TrendingUp } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { LocalizedLink } from "@/components/localized-link";
import { T } from "@/components/translated-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getAffiliateRoute } from "@/lib/affiliate";
import { getCommerceCtaLabel } from "@/lib/commerce";
import { getProductProof, type Product, type TopPickBadge } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  featuredBadge?: TopPickBadge;
  urgencyOverride?: string;
  ctaLabel?: string;
  detailsHref?: string;
  detailsLabel?: string;
};

export function ProductCard({
  product,
  compact = false,
  featuredBadge,
  urgencyOverride,
  ctaLabel,
  detailsHref,
  detailsLabel,
}: ProductCardProps) {
  const proof = getProductProof(product.id);
  const highlights = proof.highlights.slice(0, compact ? 2 : 3);
  const detailsAriaLabel = detailsLabel ?? "View details";

  const body = (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge>
          <T text={featuredBadge ?? product.trustSignal} />
        </Badge>
        <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-text-secondary">
          <Star className="size-3.5 fill-accent-gold text-accent-gold" aria-hidden="true" />
          {proof.rating.toFixed(1)}
        </span>
      </div>

      <h3 className={compact ? "font-heading text-xl leading-tight" : "font-heading text-2xl leading-tight"}>
        <T text={product.name} />
      </h3>

      <p className="text-sm text-text-secondary">
        <T text={product.benefit} />
      </p>

      <ul className="space-y-2" aria-label="Product benefits">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
            <Check className="mt-0.5 size-4 shrink-0 text-accent-gold" aria-hidden="true" />
            <span>
              <T text={highlight} />
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
        <span className="text-xs uppercase tracking-[0.14em] text-text-secondary">
          <T text={proof.reviews} />
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-accent-gold">
          <TrendingUp className="size-3.5" aria-hidden="true" />
          <T text={urgencyOverride ?? proof.socialProof} />
        </span>
      </div>

      {!compact ? (
        <p className="text-sm leading-relaxed text-text-secondary">
          <T text={product.description} />
        </p>
      ) : null}
    </div>
  );

  return (
    <Card
      className={cn(
        "overflow-hidden border-white/12 bg-white/[0.02] transition-all duration-300",
        detailsHref ? "hover:-translate-y-1 hover:border-accent-gold/45" : "transition-colors"
      )}
    >
      <div className={compact ? "grid gap-4 p-4" : "grid gap-5 p-5 md:p-6"}>
        {detailsHref ? (
          <LocalizedLink
            href={detailsHref}
            className="group block rounded-[1.25rem] outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary"
            aria-label={`${detailsAriaLabel} for ${product.name}`}
          >
            <div className="space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 25vw"}
                  className="object-top object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              {body}
            </div>
          </LocalizedLink>
        ) : (
          <>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 25vw"}
                className="object-top object-cover"
              />
            </div>
            {body}
          </>
        )}

        <CTAButton
          href={getAffiliateRoute(product.id, "product-card")}
          label={ctaLabel ?? getCommerceCtaLabel(product, compact ? "View on Amazon" : "Check on Amazon")}
          className="w-full"
        />
      </div>
    </Card>
  );
}
