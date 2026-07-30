import { NextResponse, type NextRequest } from "next/server";

import {
  buildAmazonAffiliateUrl,
  getTrafficContextFromSearchParams,
} from "@/lib/affiliate";
import { TRACKING_COOKIES, sanitizeTrackingValue } from "@/lib/tracking";

type GoRouteContext = {
  params: Promise<{ productId: string }>;
};

export async function GET(request: NextRequest, context: GoRouteContext) {
  const { productId } = await context.params;
  const searchContext = getTrafficContextFromSearchParams(request.nextUrl.searchParams);

  const source =
    searchContext.source ??
    sanitizeTrackingValue(request.cookies.get(TRACKING_COOKIES.source)?.value, 40) ??
    "website";
  const campaign =
    searchContext.campaign ??
    sanitizeTrackingValue(request.cookies.get(TRACKING_COOKIES.campaign)?.value, 60);
  const pinId =
    searchContext.pinId ??
    sanitizeTrackingValue(request.cookies.get(TRACKING_COOKIES.pinId)?.value, 80);

  const rawQuantity = Number(request.nextUrl.searchParams.get("qty"));
  const quantity = Number.isFinite(rawQuantity)
    ? Math.max(1, Math.min(10, Math.trunc(rawQuantity)))
    : undefined;

  const destination = buildAmazonAffiliateUrl(productId, { source, campaign, pinId }, quantity);

  if (!destination) {
    return NextResponse.redirect(new URL("/favorites", request.url), 307);
  }

  return NextResponse.redirect(destination, 307);
}
