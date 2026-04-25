import { ArrowRight } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { Card } from "@/components/ui/card";
import { getAffiliateRoute } from "@/lib/affiliate";
import { type Product } from "@/lib/site-data";

type LadderItem = {
  title: string;
  description: string;
};

type LandingValueLadderProps = {
  products: Product[];
  items: LadderItem[];
};

export function LandingValueLadder({ products, items }: LandingValueLadderProps) {
  if (products.length === 0) {
    return null;
  }

  const spotlightProducts = products.slice(0, 3);

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {spotlightProducts.map((product, index) => (
        <Card key={product.id} className="border-white/12 bg-white/[0.02] p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-gold">
            {index === 0 ? "Fastest start" : index === 1 ? "Best balance" : "Full coverage"}
          </p>
          <h3 className="mt-2 font-heading text-2xl leading-tight text-text-primary">
            {items[index]?.title ?? product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {items[index]?.description ?? product.benefit}
          </p>
          <div className="mt-4">
            <CTAButton
              href={getAffiliateRoute(product.id, "landing-value-ladder")}
              label="Choose this option"
            />
          </div>
          <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
            Fits a different budget and urgency level
            <ArrowRight className="size-4" aria-hidden="true" />
          </p>
        </Card>
      ))}
    </div>
  );
}
