import { ArrowRight } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { Card } from "@/components/ui/card";
import { getAffiliateRoute } from "@/lib/affiliate";
import { getProductById } from "@/lib/site-data";

type AudienceCard = {
  label: string;
  description: string;
  productId: string;
};

type LandingAudienceMatrixProps = {
  cards: AudienceCard[];
};

export function LandingAudienceMatrix({ cards }: LandingAudienceMatrixProps) {
  if (cards.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {cards.map((card) => {
        const product = getProductById(card.productId);

        if (!product) {
          return null;
        }

        return (
          <Card key={card.label} className="border-white/12 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-gold">{card.label}</p>
            <h3 className="mt-2 font-heading text-2xl leading-tight text-text-primary">{product.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>
            <div className="mt-4">
              <CTAButton href={getAffiliateRoute(product.id, "landing-audience-matrix")} label="See this option" />
            </div>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
              Matches a specific buyer type
              <ArrowRight className="size-4" aria-hidden="true" />
            </p>
          </Card>
        );
      })}
    </div>
  );
}
