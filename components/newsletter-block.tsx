"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export function NewsletterBlock() {
  const { text } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || text("Something went wrong. Please try again."));
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage(text("Something went wrong. Please try again."));
    }
  }

  return (
    <Section id="newsletter" className="[content-visibility:auto] [contain-intrinsic-size:1px_520px]">
      <Container>
        <div className="rounded-[2rem] border border-accent-gold/40 bg-background-secondary px-6 py-12 text-background-primary md:px-10 md:py-14">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background-primary/70">
                <Sparkles className="size-4" aria-hidden="true" />
                {text("Protocol Intel")}
              </p>
              <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
                {text("Join the list for one tactical protocol and three quality deployment picks every week.")}
              </h2>
              <p className="text-sm text-background-primary/70">
                {text("Built for preparedness enthusiasts who want hardened routines they will actually use.")}
              </p>
            </div>

            {status === "success" ? (
              <p className="flex items-center gap-2 rounded-2xl border border-background-primary/20 bg-white/40 px-4 py-3 text-sm font-semibold text-background-primary">
                <Check className="size-4 shrink-0" aria-hidden="true" />
                {text("You're subscribed — check your inbox.")}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" aria-label={text("Newsletter signup")}>
                <label htmlFor="protocol-intel-email" className="sr-only">
                  {text("Email address")}
                </label>
                <Input
                  id="protocol-intel-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={text("Enter your email")}
                  className="border-background-primary/20 bg-white text-background-primary placeholder:text-background-primary/55"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-background-primary text-text-primary hover:brightness-110"
                >
                  {status === "loading" ? text("Subscribing…") : text("Subscribe")}
                </Button>
                {status === "error" && <p className="text-xs text-red-700">{errorMessage}</p>}
                <p className="text-xs text-background-primary/65">{text("No spam. Weekly only. Unsubscribe anytime.")}</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
