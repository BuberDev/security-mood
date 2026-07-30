# Product page redesign — design spec

Date: 2026-07-30

## Background

The user shared a screenshot of a professional single-product sales page
("Sentinel Slide Pro" bedside gun safe, TactiBag-style) and asked for the
Security Mood product page to be reorganized into similar high-converting
sections, at a top professional quality bar.

Investigation found the codebase actually has **two separate product-page
templates**, serving two different commerce models:

1. **`/shop/[productId]`** (`components/shop/shop-product-sales.tsx`,
   data in `lib/shop-data.ts`) — a rich, already-built sales page (gallery,
   buy box, trust strip, before/after, comparison table, benefit cards,
   how-to-use, reviews with breakdown, FAQ, guarantee, sticky bar, related
   products). All 4 products here point to either an Amazon affiliate
   redirect (`/go/[productId]`) or a curated internal guide page. There is
   **no real cart** — a click leaves the site for a single external listing.

2. **`/favorites/[productId]`** (generic components in
   `components/product-page/*`, data in `lib/site-data.ts`) — a simpler,
   category-templated editorial page shared by all 26 products. Three of
   those products (`biometric-smart-lock`, `mini-spy-camera-4k`,
   `anti-theft-smart-backpack`) are **real dropshipping products** on the
   user's own Shopify store (`security-mood.myshopify.com`), reached via a
   static Shopify cart permalink (`lib/commerce.ts:getShopifyProductUrl`,
   `/cart/{variantId}:1`, quantity hardcoded to 1).

This distinction matters because the reference screenshot's "Buy 1 / Buy 2
(Most Popular) / Buy 3" bulk-pricing buy box only makes sense where a real
cart exists. Showing tiered pricing against a single external Amazon link
would misrepresent what the buyer actually gets at checkout.

A sibling project by the same developer, `lux-aura-care` (a further-along
build off the same original scaffold — same file names, same design
tokens), already ships a production Shopify commerce layer. It was reviewed
for patterns worth reusing:

- A quantity stepper (+/− with live subtotal) rather than fixed discount
  tier cards, backed by a full Shopify Storefront API `cartCreate`
  checkout route with a legacy `/cart/add.js` fallback, stock-level
  checking, and locale/country handling.
- A `BundleCard` cross-sell component (icon+badge header, small image grid
  of included items, single CTA) used for multi-product bundle upsells.
- CSS custom-property design tokens (`--accent-gold`, `--text-secondary`,
  etc.) already defined in `security-mood`'s own `globals.css` and used
  correctly elsewhere (e.g. `product-hero.tsx`), but **not** used in
  `shop-product-sales.tsx`, which hardcodes hex values via inline `style`
  props instead — a maintainability gap worth fixing while in the file.

Decisions already confirmed with the user:
- Keep the existing dark/gold "Security Mood" visual identity — no theme
  change.
- Do not add quantity/bundle pricing to Amazon-affiliate products.
- Reuse only the rating/review data that already exists — no new invented
  stats (sold counts, % recommend, "#1 rated") or fabricated reviewer
  photos.
- For the 3 real dropshipping products: add a Buy 1 / Buy 2 / Buy 3
  quantity buy box with **10% off at 2, 15% off at 3** (user-specified).
- Full authority delegated to the developer (this document) for the
  remaining implementation choices, informed by the `lux-aura-care`
  reference above.

## Scope

### Part A — `/shop/[productId]` (Amazon-affiliate + curated-guide products)

No commerce-model changes. Visual/structural upgrades only, all sourced
from data that already exists on `ShopProduct`:

1. **Quick-glance feature strip** in the buy box: a 2×2 icon+label grid
   built from the first four entries of `product.benefits`, mirroring the
   reference's "Unlocks in 0.2s / Charges your phone" style highlight
   badges.
2. **Featured review quote card**: surfaces the existing single review
   (`reviewsData[product.id]`, author + short excerpt) directly in the buy
   box, under the CTA — reusing data already in the file, nothing new
   invented.
3. **"Frequently paired with" cross-sell**: a compact two-item card block
   using the already-computed `related` products, visually modeled on
   `lux-aura-care`'s `BundleCard` (icon header, small image grid) but
   worded honestly as related individual picks — not an "add both to
   cart" bundle, since two separate Amazon links can't merge into one
   order.
4. **Token cleanup**: replace hardcoded hex colors and inline `style`
   props in `shop-product-sales.tsx` with the project's existing Tailwind
   design tokens (`text-accent-gold`, `text-text-secondary`, `Badge`,
   `Card`) so the file matches the conventions used everywhere else in the
   codebase. Same visual colors, cleaner implementation — not a redesign.
5. CTA stays a single "Buy Now" button — no quantity tiers here.

### Part B — Dropship quantity-tier buy box (`/favorites/[productId]`)

Adds real, functioning bulk-quantity checkout for the 3 Shopify-backed
products only — rendered conditionally via the existing
`isShopifyCommerceUrl(product.amazonUrl)` check, so Amazon-affiliate
products on the same shared template are completely unaffected.

Chosen approach: keep the reference's tier-card UI (higher-converting,
already-approved discount economics) but wire it through the **existing,
lightweight static cart-permalink mechanism** already in
`lib/commerce.ts`, rather than porting `lux-aura-care`'s full Storefront
API checkout route. Reasoning: that heavier flow requires a Shopify
Storefront API access token and store-specific configuration that isn't
confirmed to exist for `security-mood.myshopify.com`, and is
disproportionate engineering for what's being asked. Shopify's native cart
permalink format (`/cart/{variantId}:{quantity}`) already supports
arbitrary quantity with zero extra infrastructure — the current code just
hardcodes `1`.

1. **`lib/commerce.ts`**: extend `getShopifyProductUrl(handle, variantId,
   quantity = 1)` to build `/cart/{variantId}:{quantity}`.
2. **`lib/commerce.ts`**: add a pure helper, e.g.
   `getBulkPricingTiers(unitPrice: number)`, returning 3 tiers (qty 1/2/3)
   with per-unit price, total, and savings %, using the approved 10%
   (qty 2) / 15% (qty 3) discounts. Pure function of price — so any
   current or future Shopify-backed product qualifies automatically, no
   per-product hardcoding.
3. **New component** `components/product-page/quantity-tier-buy-box.tsx`
   (client component): 3 selectable cards (Buy 1 / Buy 2 "Most Popular" /
   Buy 3 — Most Popular on the middle tier, matching both the reference
   screenshot and standard price-anchoring convention), each showing
   unit price, total, and savings badge; a single CTA below that links to
   `getShopifyProductUrl(handle, variantId, selectedQty)`.
4. **`components/product-page/product-hero.tsx`** (or the page composing
   it): render `QuantityTierBuyBox` instead of the plain `CTAButton` only
   when `isShopifyCommerceUrl(product.amazonUrl)`; unchanged otherwise.

### Explicitly out of scope

- No visual theme change (stays dark/gold).
- No invented stats (sold counts, % recommend, "#1 rated" claims).
- No fabricated reviewer photos.
- No porting of `lux-aura-care`'s Storefront API checkout route, stock
  lookup, or locale/country handling — flagged as a possible future
  enhancement if live stock validation becomes a priority, not part of
  this pass.

## Files touched

- `components/shop/shop-product-sales.tsx` (Part A additions + token
  cleanup)
- `lib/commerce.ts` (quantity-aware cart URL + bulk pricing helper)
- `components/product-page/quantity-tier-buy-box.tsx` (new)
- `components/product-page/product-hero.tsx` (conditional render)

## Testing

- Manual walkthrough of `/shop/[productId]` for all 4 products (visual
  check of new buy-box sections, no regressions in existing sections).
- Manual walkthrough of `/favorites/[productId]` for the 3 Shopify
  products (tier selection updates price/CTA correctly, CTA lands on the
  right Shopify cart URL/quantity) and at least one Amazon-affiliate
  product (confirms unchanged behavior).
- `npm run lint` and `npm run build` before calling this done.
