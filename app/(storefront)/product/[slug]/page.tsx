import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCcw, ChevronRight } from "lucide-react";
import Link from "next/link";
import { formatAed } from "@/lib/utils";

const DEMO_PRODUCT = {
  title: "Samsung Galaxy S25 Ultra 5G",
  brand: "Samsung",
  priceAed: 3999,
  compareAtAed: 5099,
  rating: 4.7,
  reviewCount: 284,
  images: [
    "https://placehold.co/600x600/EDE8F5/3D52A0?text=Front",
    "https://placehold.co/600x600/EDE8F5/3D52A0?text=Back",
    "https://placehold.co/600x600/EDE8F5/3D52A0?text=Side",
  ],
  variants: [
    { ram: "12GB", storage: "256GB", color: "Titanium Gray", priceAed: 3999 },
    { ram: "12GB", storage: "512GB", color: "Titanium Gray", priceAed: 4499 },
    { ram: "12GB", storage: "1TB", color: "Titanium Black", priceAed: 5199 },
  ],
  specs: [
    ["Display", "6.9\" QHD+ Dynamic AMOLED 2X, 120Hz"],
    ["Processor", "Snapdragon 8 Elite"],
    ["RAM", "12GB"],
    ["Storage", "256GB / 512GB / 1TB"],
    ["Camera", "200MP Main + 50MP Periscope + 10MP Telephoto"],
    ["Battery", "5000mAh, 45W Fast Charging, 15W Wireless"],
    ["OS", "Android 15, One UI 7"],
    ["5G", "Yes"],
  ],
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const pct = Math.round(((DEMO_PRODUCT.compareAtAed - DEMO_PRODUCT.priceAed) / DEMO_PRODUCT.compareAtAed) * 100);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
        <Link href="/" className="hover:text-[#3D52A0]">Home</Link>
        <ChevronRight size={13} />
        <Link href="/category/smartphones" className="hover:text-[#3D52A0]">Smartphones</Link>
        <ChevronRight size={13} />
        <span className="text-[#3D52A0] font-medium truncate max-w-[200px]">{DEMO_PRODUCT.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div>
          <div className="rounded-2xl bg-[#F7F8FC] aspect-square flex items-center justify-center mb-3 overflow-hidden">
            <img src={DEMO_PRODUCT.images[0]} alt={DEMO_PRODUCT.title} className="w-3/4 h-3/4 object-contain" />
          </div>
          <div className="flex gap-2">
            {DEMO_PRODUCT.images.map((img, i) => (
              <div key={i} className="w-16 h-16 rounded-xl border-2 border-gray-200 hover:border-[#3D52A0] cursor-pointer overflow-hidden bg-[#F7F8FC] flex items-center justify-center">
                <img src={img} alt="" className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-xs font-semibold text-[#8697C4] uppercase tracking-wide mb-1">{DEMO_PRODUCT.brand}</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug">{DEMO_PRODUCT.title}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={13} className={i < Math.floor(DEMO_PRODUCT.rating) ? "fill-[#7091E6] text-[#7091E6]" : "text-gray-300"} />
              ))}
            </div>
            <span className="text-xs text-gray-500">{DEMO_PRODUCT.rating} ({DEMO_PRODUCT.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-2xl font-extrabold text-[#3D52A0]">{formatAed(DEMO_PRODUCT.priceAed)}</span>
            <span className="text-sm text-gray-400 line-through">{formatAed(DEMO_PRODUCT.compareAtAed)}</span>
            <span className="badge-sale">{pct}% OFF</span>
          </div>

          {/* Variants */}
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-700 mb-2">Storage / Color</p>
            <div className="flex flex-wrap gap-2">
              {DEMO_PRODUCT.variants.map((v, i) => (
                <button key={i} className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${i === 0 ? "border-[#3D52A0] bg-[#EDE8F5] text-[#3D52A0]" : "border-gray-200 text-gray-600 hover:border-[#3D52A0]"}`}>
                  {v.storage} {v.color}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="border border-gray-200 hover:border-[#3D52A0] text-gray-500 hover:text-[#3D52A0] p-3 rounded-xl transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Delivery info */}
          <div className="space-y-2 border border-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Truck size={15} className="text-[#3D52A0]" /> Free delivery on orders above AED 500
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Shield size={15} className="text-[#3D52A0]" /> Official warranty included
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <RefreshCcw size={15} className="text-[#3D52A0]" /> 15-day hassle-free returns
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-10">
        <h2 className="text-base font-bold text-[#3D52A0] mb-4">Specifications</h2>
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          {DEMO_PRODUCT.specs.map(([key, val], i) => (
            <div key={key} className={`grid grid-cols-2 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-[#F7F8FC]" : "bg-white"}`}>
              <span className="font-medium text-gray-700">{key}</span>
              <span className="text-gray-600">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
