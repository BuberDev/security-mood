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
    title: "Smart Home Camera Setup",
    hook: "A simple camera-first upgrade for apartments and front-door visibility.",
    campaign: "home-fortress",
    target: { type: "product", productId: "outdoor-security-camera" },
  },
  {
    id: "birdie-alarm-safety",
    title: "Personal Safety Alarm",
    hook: "A compact everyday carry alarm for commuting and late-night confidence.",
    campaign: "urban-edc",
    target: { type: "product", productId: "personal-safety-alarm" },
  },
  {
    id: "door-bar-reinforcement",
    title: "Door Security Bar",
    hook: "A no-drill way to reinforce apartment and hotel doors fast.",
    campaign: "home-fortress",
    target: { type: "product", productId: "door-security-bar" },
  },
  {
    id: "yubikey-login-protection",
    title: "Hardware Security Key",
    hook: "A physical key that locks down your online accounts.",
    campaign: "cyber-shield",
    target: { type: "product", productId: "hardware-security-key" },
  },
  {
    id: "solar-radio-readiness",
    title: "Emergency Weather Radio",
    hook: "Solar, crank, and USB power for outages and severe weather.",
    campaign: "emergency-ready",
    target: { type: "product", productId: "solar-emergency-radio" },
  },
  {
    id: "lifestraw-water-prep",
    title: "Personal Water Filter",
    hook: "A lightweight water filter for travel, camping, and emergencies.",
    campaign: "emergency-ready",
    target: { type: "product", productId: "water-filtration-straw" },
  },
  {
    id: "faraday-bag-privacy",
    title: "Faraday Bag Privacy",
    hook: "Signal-blocking storage for phones, fobs, and trackers.",
    campaign: "cyber-shield",
    target: { type: "product", productId: "faraday-bag" },
  },
  {
    id: "emergency-food-stockpile",
    title: "Prepper Guide",
    hook: "A long-term survival guide for food, storage, and readiness planning.",
    campaign: "emergency-ready",
    target: { type: "product", productId: "emergency-food-supply" },
  },
  {
    id: "crisis-readiness-kit",
    title: "First Aid Kit",
    hook: "A waterproof medical kit for a fast emergency response plan.",
    campaign: "crisis-readiness",
    target: { type: "product", productId: "first-aid-kit" },
  },
  {
    id: "bug-out-bag-essentials",
    title: "Emergency Blanket Set",
    hook: "Compact thermal blankets for vehicle kits and evacuation bags.",
    campaign: "crisis-readiness",
    target: { type: "product", productId: "emergency-blanket-set" },
  },
  {
    id: "shelter-in-place-kit",
    title: "Smart Door Lock",
    hook: "Fingerprint access and Wi-Fi control for stronger home entry security.",
    campaign: "home-fortress",
    target: { type: "product", productId: "smart-door-lock" },
  },
  {
    id: "vehicle-emergency-kit",
    title: "Driveway Alarm Sensor",
    hook: "Early warning for driveways, gates, and other perimeter entry points.",
    campaign: "emergency-ready",
    target: { type: "product", productId: "outdoor-motion-alarm" },
  },
  {
    id: "apartment-window-alarms",
    title: "Window Alarm Kit",
    hook: "A fast, renter-friendly alarm upgrade for windows and patio doors.",
    campaign: "home-fortress",
    target: { type: "product", productId: "window-alarm-kit" },
  },
  {
    id: "travel-wallet-rfid",
    title: "RFID Wallet",
    hook: "A slim wallet that helps block skimming and digital pickpocketing.",
    campaign: "cyber-shield",
    target: { type: "product", productId: "rfid-wallet" },
  },
  {
    id: "blackout-power-backup",
    title: "Emergency Radio Backup",
    hook: "Keep communication and light available when the power goes out.",
    campaign: "emergency-ready",
    target: { type: "product", productId: "solar-emergency-radio" },
  },
  {
    id: "edc-safety-night-commute",
    title: "EDC Flashlight",
    hook: "A tiny keychain light for everyday carry and quick visibility.",
    campaign: "urban-edc",
    target: { type: "product", productId: "tactical-flashlight" },
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
