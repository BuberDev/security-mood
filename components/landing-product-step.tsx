import { ArrowRight, Check, Star, TrendingUp } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { Card } from "@/components/ui/card";
import { getAffiliateRoute } from "@/lib/affiliate";
import { getProductProof, type Product } from "@/lib/site-data";

type LandingProductStepProps = {
  product: Product;
  stepNumber: number;
  stepLabel: string;
};

export function LandingProductStep({ product, stepNumber, stepLabel }: LandingProductStepProps) {
  const proof = getProductProof(product.id);

  return (
    <Card className="overflow-hidden border-white/12 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold/60">
      <div className="grid gap-5 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-gold">Step {stepNumber}</p>
            <h3 className="mt-2 font-heading text-2xl leading-tight text-text-primary">{stepLabel}</h3>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.14em] text-text-secondary">
            <Star className="size-3.5 fill-accent-gold text-accent-gold" aria-hidden="true" />
            {proof.rating.toFixed(1)}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium text-text-primary">{product.name}</p>
          <p className="text-sm text-text-secondary">{product.benefit}</p>
        </div>

        <ul className="space-y-2">
          {proof.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
              <Check className="mt-0.5 size-4 shrink-0 text-accent-gold" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
          <span className="text-xs uppercase tracking-[0.14em] text-text-secondary">{proof.reviews}</span>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-accent-gold">
            <TrendingUp className="size-3.5" aria-hidden="true" />
            {proof.socialProof}
          </span>
        </div>

        <CTAButton
          href={getAffiliateRoute(product.id, "landing-step")}
          label="Check current listing"
          className="w-full"
        />

        <p className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
          See why this belongs in the kit
          <ArrowRight className="size-4" aria-hidden="true" />
        </p>
      </div>
    </Card>
  );
}
