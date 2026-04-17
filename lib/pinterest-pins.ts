import {
  getArticleBySlug,
  getCategoryById,
  getProductById,
  type CategoryId,
} from "@/lib/site-data";

type PinTarget =
  | { type: "article"; slug: string }
  | { type: "product"; productId: string }
  | { type: "category"; categoryId: CategoryId }
  | { type: "favorites" };

export type PinterestPin = {
  id: string;
  title: string;
  campaign: string;
  target: PinTarget;
};

export const pinterestPins: PinterestPin[] = [
  {
    id: "outdoor-camera-security",
    title: "Ultra-HD Solar Outdoor Camera",
    campaign: "home-fortress",
    target: { type: "product", productId: "outdoor-security-camera" },
  },
  {
    id: "birdie-alarm-safety",
    title: "Personal safety alarm for solo travel",
    campaign: "urban-edc",
    target: { type: "product", productId: "personal-safety-alarm" },
  },
  {
    id: "door-bar-reinforcement",
    title: "Heavy-duty door security bar",
    campaign: "home-fortress",
    target: { type: "product", productId: "door-security-bar" },
  },
  {
    id: "yubikey-login-protection",
    title: "Hardware security key for digital accounts",
    campaign: "cyber-shield",
    target: { type: "product", productId: "hardware-security-key" },
  },
  {
    id: "solar-radio-readiness",
    title: "SOS Solar Hand Crank Radio",
    campaign: "emergency-ready",
    target: { type: "product", productId: "solar-emergency-radio" },
  },
  {
    id: "lifestraw-water-prep",
    title: "Emergency water filtration straw",
    campaign: "emergency-ready",
    target: { type: "product", productId: "water-filtration-straw" },
  },
  {
    id: "faraday-bag-privacy",
    title: "Total RF shielding Faraday bag",
    campaign: "cyber-shield",
    target: { type: "article", slug: "digital-privacy-building-your-cyber-shield" },
  },
  {
    id: "emergency-food-stockpile",
    title: "72-Hour emergency food supply",
    campaign: "emergency-ready",
    target: { type: "product", productId: "emergency-food-supply" },
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

  const product = getProductById(target.productId);
  return product ? `/favorites/${product.id}` : "/favorites";
}
