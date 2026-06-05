import Link from "next/link";
import { Heart } from "lucide-react";
import { formatAed, discountPct, cn } from "@/lib/utils";

export interface ProductCardData {
  id: string;
  title: string;
  slug: string;
  priceAed: number;
  compareAtAed?: number;
  imageUrl: string;
  brand?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
}

export default function ProductCard({ product }: { product: ProductCardData }) {
  const pct = product.compareAtAed ? discountPct(product.priceAed, product.compareAtAed) : 0;

  return (
    <div className="product-card group relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col">
      {/* Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
        {pct > 0 && <span className="badge-sale">{pct}% OFF</span>}
        {product.badge && (
          <span className="bg-[#7091E6] text-white text-[10px] font-bold px-2 py-0.5 rounded">{product.badge}</span>
        )}
      </div>

      {/* Wishlist */}
      <button className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/80 text-gray-400 hover:text-[#3D52A0] opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart size={15} />
      </button>

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block aspect-square overflow-hidden bg-gray-50 p-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        {product.brand && (
          <p className="text-[10px] font-semibold text-[#8697C4] uppercase tracking-wide mb-1">{product.brand}</p>
        )}
        <Link href={`/product/${product.slug}`} className="text-xs sm:text-sm font-medium text-gray-800 hover:text-[#3D52A0] line-clamp-2 leading-snug flex-1">
          {product.title}
        </Link>

        <div className="mt-2 flex items-end justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-[#3D52A0]">{formatAed(product.priceAed)}</p>
            {product.compareAtAed && (
              <p className="text-[11px] text-gray-400 line-through">{formatAed(product.compareAtAed)}</p>
            )}
          </div>
          <button className="shrink-0 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
