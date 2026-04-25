import type { Metadata } from "next";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { pinterestPins, resolvePinTargetHref } from "@/lib/pinterest-pins";

export const metadata: Metadata = {
  title: "Pinterest Link Map",
  description: "Internal map of Pinterest deep links and their website destinations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PinMapPage() {
  const quickLaunchPins = pinterestPins.filter((pin) =>
    [
      "crisis-readiness-kit",
      "bug-out-bag-essentials",
      "shelter-in-place-kit",
    ].includes(pin.id)
  );

  return (
    <Section className="pb-16 pt-16 md:pt-20">
      <Container>
        <Heading
          eyebrow="Pinterest Ops"
          title="Pin deep-link map"
          description="Use these URLs as your Pin destination links. Each link adds Pinterest UTM tags and stores attribution in cookies."
        />

        <div className="mt-10 rounded-[2rem] border border-accent-gold/30 bg-accent-gold/10 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">Top converting routes</p>
          <h2 className="mt-3 font-heading text-3xl text-text-primary">Fastest paths to the highest-intent kits</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
            These are the best destinations for crisis, evacuation, and home lockdown traffic because they match a
            narrow emergency intent with a clear shopping sequence.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {quickLaunchPins.map((pin) => {
              const destination = resolvePinTargetHref(pin.target);

              return (
                <CTAButton
                  key={pin.id}
                  href={destination}
                  label={pin.title}
                  variant="secondary"
                />
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {pinterestPins.map((pin) => {
            const pinPath = `/pin/${pin.id}`;
            const destination = resolvePinTargetHref(pin.target);

            return (
              <article
                key={pin.id}
                className="rounded-2xl border border-white/12 bg-white/[0.02] p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{pin.campaign}</Badge>
                  <span className="text-xs uppercase tracking-[0.14em] text-accent-gold">
                    {pin.id}
                  </span>
                </div>

                <h2 className="mt-3 font-heading text-2xl">{pin.title}</h2>
                <p className="mt-2 max-w-3xl text-sm text-text-secondary">
                  {pin.hook}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Destination: <code>{destination}</code>
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Pin URL: <code>{pinPath}</code>
                </p>
                <div className="mt-4">
                  <CTAButton href={destination} label="Open destination" />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
