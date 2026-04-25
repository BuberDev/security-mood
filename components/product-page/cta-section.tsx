import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";

type CTASectionProps = {
  ctaHref: string;
};

export function CTASection({ ctaHref }: CTASectionProps) {
  return (
    <Section className="border-t border-white/10 py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">Compare the current Amazon listing</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            Check reviews, availability, and shipping before you decide. The current listing is the fastest way to confirm fit.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton href={ctaHref} label="View on Amazon" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
