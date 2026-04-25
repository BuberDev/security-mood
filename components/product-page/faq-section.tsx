import { HelpCircle } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  items: FAQItem[];
};

export function FAQSection({ title, items }: FAQSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section className="[content-visibility:auto] [contain-intrinsic-size:1px_680px]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-gold">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.question} className="rounded-3xl border border-white/12 bg-white/[0.02] p-6">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent-gold">
                <HelpCircle className="size-4" aria-hidden="true" />
                Question
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-tight">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
