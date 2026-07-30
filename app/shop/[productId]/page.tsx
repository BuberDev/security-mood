import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getCatalogShopProducts, getShopProductById } from "@/lib/shop-data";
import { ShopProductSales } from "@/components/shop/shop-product-sales";

type Props = { params: Promise<{ productId: string }> };

export async function generateStaticParams() {
  return getCatalogShopProducts().map((p) => ({ productId: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = getShopProductById(productId);
  if (!product || product.hideFromShopCatalog) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Security Mood Shop`,
    description: product.description,
    alternates: { canonical: `/shop/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/shop/${product.id}`,
      images: [{ url: product.image, alt: product.imageAlt }],
      type: "website",
    },
  };
}

export default async function ShopProductPage({ params }: Props) {
  const { productId } = await params;
  const product = getShopProductById(productId);
  if (!product) notFound();

  // Canonical page for these lives at /favorites/[productId] instead.
  if (product.hideFromShopCatalog) {
    redirect(`/favorites/${productId}`);
  }

  const related = getCatalogShopProducts().filter((p) => p.id !== product.id).slice(0, 2);

  return <ShopProductSales product={product} related={related} />;
}
