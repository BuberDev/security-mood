import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import { products } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PremiumProductsSectionProps = {
  className?: string;
};

export function PremiumProductsSection({ className }: PremiumProductsSectionProps) {
  // Get our newly added premium dropshipping products
  const premiumProductIds = ["biometric-smart-lock", "mini-spy-camera-4k", "anti-theft-smart-backpack"];
  const premiumProducts = products.filter(p => premiumProductIds.includes(p.id));

  return (
    <Section id="premium-products" className={cn("bg-black border-y border-accent-gold/20 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-gold/5 to-black pointer-events-none" />
      <Container className="relative z-10 py-16 md:py-24">
        <Heading
          eyebrow="Premium Security Gear"
          title="Exclusive Dropshipping Best-Sellers"
          description="Invest in the highest quality, military-grade security equipment. Limited stock available."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {premiumProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featuredBadge={index === 0 ? "Best Seller" : "Trending"}
              ctaLabel="Check In Store"
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/favorites" label="View All Premium Gear" variant="secondary" />
        </div>
      </Container>
    </Section>
  );
}
