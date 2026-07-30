"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/security_mood_logo.png"
import {
  Mail,
  Phone,
  MapPin,
  Camera,
  Pin,
  Play,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import Image from "next/image";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

function NewsletterSignup() {
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
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div id="footer-newsletter" className="scroll-mt-24 border-b border-white/15 pb-10 mb-10 text-center">
      <h3 className="font-heading text-2xl text-text-primary md:text-3xl">Subscribe to our emails</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
        Be the first to know about new buying guides and gear picks.
      </p>

      {status === "success" ? (
        <p className="mx-auto mt-5 flex max-w-md items-center justify-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-3 text-sm font-semibold text-accent-gold">
          <Check className="size-4" aria-hidden="true" />
          You&apos;re subscribed — check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-5 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
            {status !== "loading" && <ArrowRight className="size-4" aria-hidden="true" />}
          </button>
        </form>
      )}

      {status === "error" && <p className="mt-3 text-sm text-red-400">{errorMessage}</p>}
    </div>
  );
}

function HoverFooter() {
  const footerLinks = [
    {
      title: "Discover",
      links: [
        { label: "Home Fortification", href: "/blog?category=home-security" },
        { label: "Personal Safety", href: "/blog?category=personal-safety" },
        { label: "Digital Defense", href: "/blog?category=cyber-shield" },
        { label: "Survival & Prep", href: "/blog?category=emergency-prep" },
      ],
    },
    {
      title: "Shop & Support",
      links: [
        { label: "Amazon Favorites", href: "/favorites" },
        { label: "Latest Articles", href: "/blog" },
        { label: "Newsletter", href: "#footer-newsletter", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-accent-gold" aria-hidden="true" />,
      text: "hello@securitymood.com",
      href: "mailto:hello@securitymood.com",
    },
    {
      icon: <Phone size={18} className="text-accent-gold" aria-hidden="true" />,
      text: "+1 (415) 555-0198",
      href: "tel:+14155550198",
    },
    {
      icon: <MapPin size={18} className="text-accent-gold" aria-hidden="true" />,
      text: "San Francisco, California",
    },
  ];

  const socialLinks = [
    { icon: <Pin size={20} />, label: "Pinterest", href: "https://www.pinterest.com/search/pins/?q=Security%20Mood" },
    { icon: <Camera size={20} />, label: "Instagram", href: "https://www.instagram.com/explore/search/keyword/?q=securitymood" },
    { icon: <Play size={20} />, label: "YouTube", href: "https://www.youtube.com/results?search_query=Security+Mood+preparedness" },
  ];

  return (
    <footer className="relative mx-4 mb-6 mt-10 h-fit overflow-hidden rounded-3xl border border-white/10 bg-black/35 backdrop-blur-xl md:mx-8">
      <div className="relative z-40 mx-auto max-w-7xl p-8 md:p-14">
        <NewsletterSignup />

        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Image src={Logo} className="w-8 md:w-10 opacity-80 rounded-full" alt="logo" />

              <span className="font-heading text-3xl text-text-primary">Security Mood</span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Professional security and preparedness platform curated to help you build a hardened perimeter with battle-tested gear and operational protocols.
            </p>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent-gold">
              <Sparkles className="size-4" aria-hidden="true" />
              Hardened defense. Total readiness.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-text-primary">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link href={link.href} className="text-text-secondary transition-colors hover:text-accent-gold">
                      {link.label}
                    </Link>
                    {link.pulse ? (
                      <span className="absolute right-[-10px] top-0 h-2 w-2 animate-pulse rounded-full bg-accent-gold" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-text-primary">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-accent-gold">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-white/15" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <div className="flex space-x-6 text-text-secondary">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-gold"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center text-text-secondary md:text-left">
            &copy; {new Date().getFullYear()} Security Mood. All rights reserved.
          </p>
        </div>
      </div>

      <div className="-mb-36 -mt-52 hidden h-[30rem] lg:flex">
        <TextHoverEffect text="Security" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
