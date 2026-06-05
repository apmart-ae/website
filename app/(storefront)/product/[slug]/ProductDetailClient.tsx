"use client";
import { useState } from "react";
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCcw, ChevronRight, Check, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { formatAed, discountPct } from "@/lib/utils";
import { useCart } from "@/lib/cart";

interface Variant {
  id: string; sku: string; storage?: string; color?: string; ram?: string;
  priceAed: number; compareAtAed: number | null; stock: number; weightKg: number;
}
interface Product {
  id: string; title: string; slug: string; brand: string; rating: number;
  reviewCount: number; images: string[]; variants: Variant[];
  specs: [string, string][]; description: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeVar, setActiveVar] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const variant = product.variants[activeVar];
  const pct = variant.compareAtAed ? discountPct(variant.priceAed, variant.compareAtAed) : 0;

  const handleAddToCart = () => {
    addItem({
      variantId: variant.id,
      productId: product.id,
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      sku: variant.sku,
      color: variant.color,
      storage: variant.storage,
      ram: variant.ram,
      imageUrl: product.images[0],
      priceAed: variant.priceAed,
      qty,
      weightKg: variant.weightKg,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 flex-wrap">
        <Link href="/" className="hover:text-[#3D52A0]">Home</Link>
        <ChevronRight size={12} />
        <Link href="/category/smartphones" className="hover:text-[#3D52A0]">Smartphones</Link>
        <ChevronRight size={12} />
        <span className="text-[#3D52A0] font-medium truncate">{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
        {/* Gallery */}
        <div>
          <div className="rounded-2xl bg-[#F7F8FC] aspect-square flex items-center justify-center mb-3 overflow-hidden border border-gray-100">
            <img
              src={product.images[activeImg]}
              alt={product.title}
              className="w-3/4 h-3/4 object-contain transition-opacity duration-200"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-16 flex-shrink-0 rounded-xl border-2 overflow-hidden bg-[#F7F8FC] flex items-center justify-center transition-colors ${i === activeImg ? "border-[#3D52A0]" : "border-gray-200 hover:border-[#8697C4]"}`}
              >
                <img src={img} alt="" className="w-10 h-10 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div>
          <p className="text-xs font-bold text-[#8697C4] uppercase tracking-widest mb-1">{product.brand}</p>
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-2">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} className={i <= Math.round(product.rating) ? "fill-[#7091E6] text-[#7091E6]" : "text-gray-200"} />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-2xl font-extrabold text-[#3D52A0]">{formatAed(variant.priceAed)}</span>
            {variant.compareAtAed && (
              <span className="text-sm text-gray-400 line-through">{formatAed(variant.compareAtAed)}</span>
            )}
            {pct > 0 && <span className="badge-sale">{pct}% OFF</span>}
          </div>

          {/* Stock */}
          <p className={`text-xs font-semibold mb-4 ${variant.stock > 5 ? "text-green-600" : variant.stock > 0 ? "text-amber-500" : "text-red-500"}`}>
            {variant.stock > 5 ? "✓ In Stock" : variant.stock > 0 ? `Only ${variant.stock} left!` : "Out of Stock"}
          </p>

          {/* Variant selector */}
          <div className="mb-5">
            <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Storage / Variant</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v, i) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVar(i)}
                  className={`px-3.5 py-2 rounded-xl border-2 text-xs font-semibold transition-colors ${
                    i === activeVar
                      ? "border-[#3D52A0] bg-[#EDE8F5] text-[#3D52A0]"
                      : "border-gray-200 text-gray-600 hover:border-[#8697C4]"
                  }`}
                >
                  {[v.storage, v.color].filter(Boolean).join(" · ")}
                  <span className="block text-[10px] mt-0.5 font-normal">{formatAed(v.priceAed)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Qty + CTA */}
          <div className="flex gap-3 mb-5">
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3.5 py-3 hover:bg-[#EDE8F5] text-[#3D52A0] transition-colors">
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm font-bold">{qty}</span>
              <button onClick={() => setQty(q => Math.min(variant.stock, q + 1))} className="px-3.5 py-3 hover:bg-[#EDE8F5] text-[#3D52A0] transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={variant.stock === 0}
              className={`flex-1 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-[#3D52A0] hover:bg-[#7091E6] text-white disabled:opacity-40"
              }`}
            >
              {added ? <><Check size={17} /> Added!</> : <><ShoppingCart size={17} /> Add to Cart</>}
            </button>
            <button className="border border-gray-200 hover:border-[#3D52A0] text-gray-400 hover:text-[#3D52A0] p-3 rounded-xl transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#F7F8FC] p-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Truck size={14} className="text-[#3D52A0] shrink-0" />
              Free delivery on orders above AED 500 · DHL / Aramex
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Shield size={14} className="text-[#3D52A0] shrink-0" />
              Official manufacturer warranty included
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <RefreshCcw size={14} className="text-[#3D52A0] shrink-0" />
              15-day hassle-free returns policy
            </div>
          </div>
        </div>
      </div>

      {/* Description + Specs tabs */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-base font-bold text-[#3D52A0] mb-3">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#3D52A0] mb-3">Specifications</h2>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            {product.specs.map(([key, val], i) => (
              <div key={key} className={`grid grid-cols-2 px-4 py-2.5 text-sm ${i % 2 === 0 ? "bg-[#F7F8FC]" : "bg-white"}`}>
                <span className="font-semibold text-gray-700">{key}</span>
                <span className="text-gray-600">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
