import ProductCard, { type ProductCardData } from "@/components/storefront/ProductCard";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const DEMO: ProductCardData[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Demo Product ${i + 1} – High Performance Model`,
  slug: `demo-product-${i + 1}`,
  priceAed: 999 + i * 200,
  compareAtAed: i % 3 === 0 ? 1299 + i * 200 : undefined,
  imageUrl: `https://placehold.co/400x400/EDE8F5/3D52A0?text=Product+${i + 1}`,
  brand: ["Apple", "Samsung", "Huawei", "Dell"][i % 4],
}));

const FILTERS = [
  { label: "Brand", options: ["Apple", "Samsung", "Huawei", "Dell", "ASUS", "Sony"] },
  { label: "Price", options: ["Under AED 500", "AED 500–1,000", "AED 1,000–3,000", "Above AED 3,000"] },
  { label: "RAM", options: ["4GB", "6GB", "8GB", "12GB", "16GB", "32GB"] },
  { label: "Storage", options: ["64GB", "128GB", "256GB", "512GB", "1TB"] },
  { label: "Color", options: ["Black", "White", "Silver", "Gold", "Blue"] },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
        <Link href="/" className="hover:text-[#3D52A0]">Home</Link>
        <ChevronRight size={13} />
        <span className="text-[#3D52A0] font-medium">{title}</span>
      </nav>

      <div className="flex gap-6">
        {/* Sidebar filters — hidden on mobile */}
        <aside className="hidden md:block w-52 shrink-0">
          <div className="sticky top-24 space-y-5">
            <p className="font-bold text-sm text-[#3D52A0] flex items-center gap-2">
              <SlidersHorizontal size={15} /> Refine By
            </p>
            {FILTERS.map(f => (
              <div key={f.label}>
                <p className="text-xs font-semibold text-gray-700 mb-2">{f.label}</p>
                <ul className="space-y-1.5">
                  {f.options.map(o => (
                    <li key={o}>
                      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-[#3D52A0]">
                        <input type="checkbox" className="accent-[#3D52A0]" />
                        {o}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-[#3D52A0]">{title}</h1>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">{DEMO.length} products</span>
              <select className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 outline-none focus:border-[#3D52A0]">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {DEMO.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map(n => (
              <button key={n} className={`w-8 h-8 rounded-lg text-xs font-semibold ${n === 1 ? "bg-[#3D52A0] text-white" : "bg-[#EDE8F5] text-[#3D52A0] hover:bg-[#ADBBDA]"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
