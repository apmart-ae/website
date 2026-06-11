import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await db.product.findUnique({
    where: { slug },
    select: { title: true, description: true },
  });
  if (!product) return { title: "Product Not Found" };
  return { title: product.title, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = await db.product.findUnique({
    where: { slug },
    include: {
      brand: { select: { name: true } },
      category: { select: { name: true, slug: true } },
      images: { orderBy: { sortOrder: "asc" } },
      variants: { orderBy: [{ isDefault: "desc" }, { priceAed: "asc" }] },
      reviews: { where: { approved: true }, orderBy: { createdAt: "desc" }, take: 5, include: { user: { select: { name: true } } } },
    },
  });

  if (!product) notFound();

  const attrs = product.attributes as Record<string, string>;

  const specs: [string, string][] = [
    attrs.screenSize  ? ["Display",   attrs.screenSize]    : null,
    attrs.os          ? ["OS",        attrs.os]            : null,
    attrs.ram         ? ["RAM",       attrs.ram]           : null,
    attrs.camera      ? ["Camera",    attrs.camera]        : null,
    attrs.sim         ? ["SIM",       attrs.sim]           : null,
    attrs.material    ? ["Material",  attrs.material]      : null,
    attrs.gpu         ? ["GPU",       attrs.gpu]           : null,
  ].filter(Boolean) as [string, string][];

  const data = {
    id: product.id,
    title: product.title,
    slug: product.slug,
    brand: product.brand.name,
    category: product.category.name,
    categorySlug: product.category.slug,
    rating: product.rating,
    reviewCount: product.reviewCount,
    description: product.description,
    images: product.images.map(i => i.url),
    specs,
    variants: product.variants.map(v => ({
      id: v.id,
      sku: v.sku,
      color: v.color ?? undefined,
      storage: v.storage ?? undefined,
      ram: v.ram ?? undefined,
      priceAed: Number(v.priceAed),
      compareAtAed: v.compareAtAed ? Number(v.compareAtAed) : null,
      stock: v.stock,
      weightKg: Number(v.weightKg),
      isDefault: v.isDefault,
    })),
  };

  return <ProductDetailClient product={data} />;
}
