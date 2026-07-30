"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { getAffiliateRoute } from "@/lib/affiliate";
import { getBulkPricingTiers } from "@/lib/commerce";
import type { Product } from "@/lib/site-data";

type QuantityTierBuyBoxProps = {
  product: Product;
  placement: string;
};

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function QuantityTierBuyBox({ product, placement }: QuantityTierBuyBoxProps) {
  const tiers = getBulkPricingTiers(product.price ?? 0);
  const defaultTier = tiers.find((tier) => tier.mostPopular) ?? tiers[0];
  const [selectedQuantity, setSelectedQuantity] = useState(defaultTier.quantity);

  const selectedTier = tiers.find((tier) => tier.quantity === selectedQuantity) ?? tiers[0];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Choose quantity">
        {tiers.map((tier) => {
          const isSelected = tier.quantity === selectedQuantity;

          return (
            <button
              key={tier.quantity}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedQuantity(tier.quantity)}
              className={`relative flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-center transition-all duration-300 ${
                isSelected
                  ? "border-accent-gold bg-accent-gold/10 shadow-[0_0_14px_rgba(201,169,110,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              {tier.mostPopular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-gold px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <span className="text-xs font-bold uppercase tracking-wide text-text-primary">
                Buy {tier.quantity}
              </span>
              <span className="text-sm font-extrabold text-accent-gold">
                {formatPrice(tier.unitPrice)}
                <span className="text-[10px] font-medium text-text-secondary">/ea</span>
              </span>
              {tier.savingsPct > 0 ? (
                <span className="text-[10px] font-bold text-accent-gold/80">Save {tier.savingsPct}%</span>
              ) : (
                <span className="text-[10px] text-text-secondary">Standard price</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-xs text-text-secondary">
        <span>
          Subtotal ({selectedTier.quantity} {selectedTier.quantity === 1 ? "piece" : "pieces"})
        </span>
        <span className="text-sm font-extrabold text-text-primary">{formatPrice(selectedTier.totalPrice)}</span>
      </div>

      <CTAButton
        href={getAffiliateRoute(product.id, placement, selectedTier.quantity)}
        label={`Go to checkout — ${formatPrice(selectedTier.totalPrice)}`}
        className="w-full"
      />

      <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-text-secondary">
        <ShieldCheck className="size-3.5 text-accent-gold" aria-hidden="true" />
        <span>Secure checkout on our store</span>
      </div>
    </div>
  );
}
