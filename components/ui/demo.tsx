"use client";

import Link from "next/link";
import Logo from "@/public/security_mood_logo.png"
import {
  Mail,
  Phone,
  MapPin,
  Camera,
  Pin,
  Play,
  Sparkles,
} from "lucide-react";

import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import Image from "next/image";

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
        { label: "Newsletter", href: "#newsletter", pulse: true },
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
    { icon: <Pin size={20} />, label: "Pinterest", href: "#" },
    { icon: <Camera size={20} />, label: "Instagram", href: "#" },
    { icon: <Play size={20} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="relative mx-4 mb-6 mt-10 h-fit overflow-hidden rounded-3xl border border-white/10 bg-black/35 backdrop-blur-xl md:mx-8">
      <div className="relative z-40 mx-auto max-w-7xl p-8 md:p-14">
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
