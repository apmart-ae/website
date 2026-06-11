"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard, { type ProductCardData } from "@/components/storefront/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

const SORT_OPTIONS = [
  { value: "default",    label: "Default"           },
  { value: "price-asc",  label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "discount",   label: "Biggest Discount"  },
];

interface Props {
  initialQuery: string;
  initialResults: ProductCardData[];
}

export default function SearchContent({ initialQuery, initialResults }: Props) {
  const router = useRouter();
  const [query,  setQuery]  = useState(initialQuery);
  const [sort,   setSort]   = useState("default");
  const [brands, setBrands] = useState<string[]>([]);

  const allBrands = [...new Set(initialResults.map(p => p.brand!))].sort();

  const filtered = initialResults
    .filter(p => brands.length === 0 || brands.includes(p.brand!))
    .sort((a, b) => {
      if (sort === "price-asc")  return a.priceAed - b.priceAed;
      if (sort === "price-desc") return b.priceAed - a.priceAed;
      if (sort === "discount") {
        const da = a.compareAtAed ? a.compareAtAed - a.priceAed : 0;
        const db = b.compareAtAed ? b.compareAtAed - b.priceAed : 0;
        return db - da;
      }
      return 0;
    });

  const doSearch = () => {
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  const toggleBrand = (b: string) =>
    setBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      {/* Search bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex flex-1 items-center gap-2 border-2 border-[#3D52A0] rounded-xl px-4 py-2.5 max-w-xl">
          <Search size={16} className="text-[#8697C4] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && doSearch()}
            placeholder="Search products, brands…"
            className="flex-1 text-sm outline-none"
          />
          {query && <button onClick={() => { setQuery(""); router.push("/search"); }}><X size={14} className="text-gray-400" /></button>}
        </div>
        <button
          onClick={doSearch}
          className="bg-[#3D52A0] text-white px-5 rounded-xl text-sm font-medium hover:bg-[#7091E6] transition-colors"
        >
          Search
        </button>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]"
        >
          {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="flex gap-6">
        {/* Brand filter sidebar */}
        <aside className="hidden md:block w-44 shrink-0">
          <p className="font-bold text-sm text-[#3D52A0] flex items-center gap-2 mb-3">
            <SlidersHorizontal size={14} /> Filter by Brand
          </p>
          <ul className="space-y-2">
            {allBrands.map(b => (
              <li key={b}>
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#3D52A0]">
                  <input
                    type="checkbox"
                    checked={brands.includes(b)}
                    onChange={() => toggleBrand(b)}
                    className="accent-[#3D52A0]"
                  />
                  {b}
                </label>
              </li>
            ))}
          </ul>
          {brands.length > 0 && (
            <button onClick={() => setBrands([])} className="mt-3 text-xs text-[#7091E6] hover:underline">
              Clear filters
            </button>
          )}
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 mb-4">
            {initialQuery ? (
              <><span className="font-semibold text-gray-800">{filtered.length}</span> results for &quot;{initialQuery}&quot;</>
            ) : (
              <><span className="font-semibold text-gray-800">{filtered.length}</span> products</>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Search size={48} className="text-[#ADBBDA] mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No products found</p>
              <p className="text-sm text-gray-400 mt-1">Try a different search term or clear filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
