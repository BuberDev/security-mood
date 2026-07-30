import type { Product } from "@/lib/site-data";

const SHOPIFY_STOREFRONT_URL = "https://security-mood.myshopify.com";
const SHOPIFY_HOST_PATTERN = /(^|\.)myshopify\.com$/i;
const SHOPIFY_CART_PATH_PATTERN = /^\/cart\/(\d+):(\d+)$/;

export function getShopifyProductUrl(_handle: string, variantId: string, quantity = 1) {
  const url = new URL(`/cart/${variantId}:${Math.max(1, Math.trunc(quantity))}`, SHOPIFY_STOREFRONT_URL);

  return url.toString();
}

export function isShopifyCommerceUrl(url: string) {
  try {
    return SHOPIFY_HOST_PATTERN.test(new URL(url).hostname);
  } catch {
    return false;
  }
}

// Rewrites the quantity segment of an existing Shopify cart permalink (e.g. from a bulk-pricing tier pick).
export function withCartQuantity(shopifyCartUrl: string, quantity: number) {
  try {
    const url = new URL(shopifyCartUrl);
    const match = url.pathname.match(SHOPIFY_CART_PATH_PATTERN);
    if (!match) {
      return shopifyCartUrl;
    }

    url.pathname = `/cart/${match[1]}:${Math.max(1, Math.trunc(quantity))}`;
    return url.toString();
  } catch {
    return shopifyCartUrl;
  }
}

export type BulkPricingTier = {
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  savingsPct: number;
  mostPopular: boolean;
};

const BULK_TIER_DISCOUNTS = [
  { quantity: 1, savingsPct: 0, mostPopular: false },
  { quantity: 2, savingsPct: 10, mostPopular: true },
  { quantity: 3, savingsPct: 15, mostPopular: false },
] as const;

// Only meaningful for real-cart (Shopify) destinations — never used for Amazon affiliate links.
export function getBulkPricingTiers(unitPrice: number): BulkPricingTier[] {
  return BULK_TIER_DISCOUNTS.map(({ quantity, savingsPct, mostPopular }) => {
    const discountedUnitPrice = unitPrice * (1 - savingsPct / 100);
    return {
      quantity,
      unitPrice: Math.round(discountedUnitPrice * 100) / 100,
      totalPrice: Math.round(discountedUnitPrice * quantity * 100) / 100,
      savingsPct,
      mostPopular,
    };
  });
}

export function getCommerceCtaLabel(product: Pick<Product, "amazonUrl">, amazonLabel = "Check on Amazon") {
  return isShopifyCommerceUrl(product.amazonUrl) ? "Go to checkout" : amazonLabel;
}
