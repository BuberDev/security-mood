import type { Product } from "@/lib/site-data";

const SHOPIFY_STOREFRONT_URL = "https://security-mood.myshopify.com";
const SHOPIFY_HOST_PATTERN = /(^|\.)myshopify\.com$/i;

export function getShopifyProductUrl(_handle: string, variantId: string) {
  const url = new URL(`/cart/${variantId}:1`, SHOPIFY_STOREFRONT_URL);

  return url.toString();
}

export function isShopifyCommerceUrl(url: string) {
  try {
    return SHOPIFY_HOST_PATTERN.test(new URL(url).hostname);
  } catch {
    return false;
  }
}

export function getCommerceCtaLabel(product: Pick<Product, "amazonUrl">, amazonLabel = "Check on Amazon") {
  return isShopifyCommerceUrl(product.amazonUrl) ? "Go to checkout" : amazonLabel;
}
