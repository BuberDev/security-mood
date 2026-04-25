import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getCategoryById, type LandingPage } from "@/lib/site-data";

type LandingPageCardProps = {
  page: LandingPage;
};

export function LandingPageCard({ page }: LandingPageCardProps) {
  const category = getCategoryById(page.categoryId);

  return (
    <Card className="group overflow-hidden border-white/12 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold/60">
      <Link href={`/landing/${page.slug}`} className="block p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{page.eyebrow}</Badge>
          <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-text-secondary">
            <Target className="size-3.5" aria-hidden="true" />
            {category?.name ?? page.categoryId}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-2xl leading-tight text-text-primary">{page.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{page.excerpt ?? page.description}</p>

        <div className="mt-5 space-y-2">
          <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">Priority order</p>
          {page.priorityOrder?.slice(0, 3).map((item) => (
            <p key={item} className="text-sm text-text-secondary">
              • {item}
            </p>
          )) ?? page.bestFor.slice(0, 3).map((item) => (
            <p key={item} className="text-sm text-text-secondary">
              • {item}
            </p>
          ))}
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-accent-gold">
          Open landing page
          <ArrowRight className="size-4" aria-hidden="true" />
        </p>
      </Link>
    </Card>
  );
}
