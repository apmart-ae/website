import { db } from "@/lib/db";
import type { ProductCardData } from "@/components/storefront/ProductCard";
import SearchContent from "./SearchContent";

async function fetchResults(q: string): Promise<ProductCardData[]> {
  if (!q.trim()) {
    const products = await db.product.findMany({
      where: { isActive: true },
      include: {
        brand: { select: { name: true } },
        images: { orderBy: { sortOrder: "asc" }, take: 1 },
        variants: { where: { isDefault: true }, take: 1 },
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      take: 60,
    });
    return products.map(toCard);
  }

  // Normalize words: strip non-alphanumeric chars (removes +, &, etc.)
  const words = q.trim()
    .split(/\s+/)
    .map(w => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(w => w.length > 1);

  if (words.length === 0) {
    const products = await db.product.findMany({
      where: { isActive: true },
      include: {
        brand: { select: { name: true } },
        images: { orderBy: { sortOrder: "asc" }, take: 1 },
        variants: { where: { isDefault: true }, take: 1 },
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      take: 60,
    });
    return products.map(toCard);
  }

  const products = await db.product.findMany({
    where: {
      isActive: true,
      AND: words.map(w => ({
        OR: [
          { title:       { contains: w, mode: "insensitive" } },
          { description: { contains: w, mode: "insensitive" } },
          { brand: { name: { contains: w, mode: "insensitive" } } },
          { tags: { has: w.toLowerCase() } },
        ],
      })),
    },
    include: {
      brand: { select: { name: true } },
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { where: { isDefault: true }, take: 1 },
    },
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    take: 100,
  });

  return products.map(toCard);
}

function toCard(p: any): ProductCardData {
  return {
    id: p.id,
    title: p.title,
    slug: p.slug,
    priceAed: Number(p.variants[0]?.priceAed ?? 0),
    compareAtAed: p.variants[0]?.compareAtAed ? Number(p.variants[0].compareAtAed) : undefined,
    imageUrl: p.images[0]?.url ?? `https://placehold.co/400x400/EDE8F5/3D52A0?text=${encodeURIComponent(p.title)}`,
    brand: p.brand.name,
    badge: p.tags.includes("new") ? "New" : p.tags.includes("bestseller") ? "Bestseller" : undefined,
    variantId: p.variants[0]?.id,
    sku: p.variants[0]?.sku,
    weightKg: p.variants[0]?.weightKg ? Number(p.variants[0].weightKg) : 0.3,
  };
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = await fetchResults(q);

  return <SearchContent initialQuery={q} initialResults={results} />;
}
