import {
  getArticleBySlug,
  getCategoryById,
  getLandingPageBySlug,
  getProductById,
  type CategoryId,
} from "@/lib/site-data";

type PinTarget =
  | { type: "article"; slug: string }
  | { type: "product"; productId: string }
  | { type: "category"; categoryId: CategoryId }
  | { type: "landing"; slug: string }
  | { type: "favorites" };

export type PinterestPin = {
  id: string;
  title: string;
  hook: string;
  campaign: string;
  target: PinTarget;
};

export const pinterestPins: PinterestPin[] = [
  {
    id: "outdoor-camera-security",
    title: "Renter-Friendly Home Security Upgrades",
    hook: "Fast upgrades that improve apartment security without drilling.",
    campaign: "home-fortress",
    target: { type: "landing", slug: "home-security-renters" },
  },
  {
    id: "birdie-alarm-safety",
    title: "Solo Travel Safety Kit",
    hook: "A compact EDC setup for commuting, flights, and late-night confidence.",
    campaign: "urban-edc",
    target: { type: "landing", slug: "solo-travel-edc-safety" },
  },
  {
    id: "door-bar-reinforcement",
    title: "No-Drill Apartment Security",
    hook: "Door and window protection that works for rentals and short-term stays.",
    campaign: "home-fortress",
    target: { type: "landing", slug: "home-security-renters" },
  },
  {
    id: "yubikey-login-protection",
    title: "Travel Privacy Kit",
    hook: "RFID protection, hidden camera checks, and document security in one setup.",
    campaign: "cyber-shield",
    target: { type: "landing", slug: "travel-privacy-kit" },
  },
  {
    id: "solar-radio-readiness",
    title: "Backup Power for Outages",
    hook: "Know what to charge first when the grid goes down.",
    campaign: "emergency-ready",
    target: { type: "landing", slug: "power-outage-readiness" },
  },
  {
    id: "lifestraw-water-prep",
    title: "Emergency Readiness Essentials",
    hook: "Backup power, comms, and vehicle-ready gear for calm response.",
    campaign: "emergency-ready",
    target: { type: "landing", slug: "power-outage-readiness" },
  },
  {
    id: "faraday-bag-privacy",
    title: "Hotel Privacy Check",
    hook: "A quick arrival routine for rentals and hotel rooms.",
    campaign: "cyber-shield",
    target: { type: "landing", slug: "travel-privacy-kit" },
  },
  {
    id: "emergency-food-stockpile",
    title: "Portable Power Station Guide",
    hook: "Turn outage panic into a clear backup-power plan.",
    campaign: "emergency-ready",
    target: { type: "landing", slug: "power-outage-readiness" },
  },
  {
    id: "crisis-readiness-kit",
    title: "Crisis Readiness Kit",
    hook: "Blackouts, civil unrest, and evacuation essentials in one clean prep list.",
    campaign: "crisis-readiness",
    target: { type: "landing", slug: "crisis-readiness-kit" },
  },
  {
    id: "bug-out-bag-essentials",
    title: "Bug Out Bag Essentials",
    hook: "The first evacuation bag to build when you need a simple 72-hour plan.",
    campaign: "crisis-readiness",
    target: { type: "landing", slug: "bug-out-bag-essentials" },
  },
  {
    id: "shelter-in-place-kit",
    title: "Shelter-in-Place Kit",
    hook: "A home-first prep list for outages, storms, and civil unrest.",
    campaign: "home-fortress",
    target: { type: "landing", slug: "shelter-in-place-kit" },
  },
  {
    id: "vehicle-emergency-kit",
    title: "Emergency Vehicle Kit",
    hook: "A trunk-ready setup for winter, road closures, and evacuation.",
    campaign: "emergency-ready",
    target: { type: "landing", slug: "emergency-vehicle-kit" },
  },
  {
    id: "apartment-window-alarms",
    title: "Best Window Alarms for Apartments",
    hook: "The simplest apartment security upgrade you can install tonight.",
    campaign: "home-fortress",
    target: { type: "landing", slug: "home-security-renters" },
  },
  {
    id: "travel-wallet-rfid",
    title: "RFID Passport Wallet Checklist",
    hook: "A cleaner way to keep passports, cards, and boarding passes together.",
    campaign: "cyber-shield",
    target: { type: "landing", slug: "travel-privacy-kit" },
  },
  {
    id: "blackout-power-backup",
    title: "Blackout Backup Power Plan",
    hook: "The first devices to keep charged when the lights go out.",
    campaign: "emergency-ready",
    target: { type: "landing", slug: "power-outage-readiness" },
  },
  {
    id: "edc-safety-night-commute",
    title: "Everyday Carry Safety Kit",
    hook: "A simple urban safety kit for commuters and solo travelers.",
    campaign: "urban-edc",
    target: { type: "landing", slug: "solo-travel-edc-safety" },
  },
];

export function getPinterestPinById(pinId: string) {
  return pinterestPins.find((pin) => pin.id === pinId);
}

export function resolvePinTargetHref(target: PinTarget) {
  if (target.type === "favorites") {
    return "/favorites";
  }

  if (target.type === "article") {
    const article = getArticleBySlug(target.slug);
    return article ? `/blog/${article.slug}` : "/blog";
  }

  if (target.type === "category") {
    const category = getCategoryById(target.categoryId);
    return category ? `/blog?category=${category.id}` : "/blog";
  }

  if (target.type === "landing") {
    const landingPage = getLandingPageBySlug(target.slug);
    return landingPage ? `/landing/${landingPage.slug}` : "/landing";
  }

  const product = getProductById(target.productId);
  return product ? `/favorites/${product.id}` : "/favorites";
}
