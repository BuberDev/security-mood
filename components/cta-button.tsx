"use client";

import { ArrowUpRight } from "lucide-react";

import { LocalizedLink } from "@/components/localized-link";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "ghost";
  className?: string;
};

export function CTAButton({ href, label, variant = "default", className }: CTAButtonProps) {
  const { text } = useI18n();
  const isOutbound = href.startsWith("http") || href.startsWith("/go/");

  if (isOutbound) {
    return (
      <Button asChild size="lg" variant={variant} className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer sponsored">
          {text(label)}
          <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
        </a>
      </Button>
    );
  }

  return (
    <Button asChild size="lg" variant={variant} className={className}>
      <LocalizedLink href={href}>
        {text(label)}
        <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
      </LocalizedLink>
    </Button>
  );
}
