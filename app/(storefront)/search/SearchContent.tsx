"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard, { type ProductCardData } from "@/components/storefront/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

const ALL_PRODUCTS: ProductCardData[] = [
  { id: "1",  title: "Samsung Galaxy S25 Ultra 5G – 12GB 256GB",     slug: "samsung-galaxy-s25-ultra",   priceAed: 3999, compareAtAed: 5099, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=S25+Ultra",   brand: "Samsung"   },
  { id: "2",  title: "Apple iPhone 17 Pro – 256GB Natural Titanium",  slug: "apple-iphone-17-pro",         priceAed: 4699,                    imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=iPhone+17",  brand: "Apple",    badge: "New" },
  { id: "3",  title: "Nothing Phone 3a Pro – 12GB 256GB",             slug: "nothing-phone-3a-pro",        priceAed: 1749, compareAtAed: 1849, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Nothing+3a", brand: "Nothing"   },
  { id: "4",  title: "Huawei Mate X6 Foldable – 512GB",              slug: "huawei-mate-x6",              priceAed: 1599, compareAtAed: 1699, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Mate+X6",    brand: "Huawei"    },
  { id: "5",  title: "Xiaomi 15 Ultra – 16GB 512GB",                  slug: "xiaomi-15-ultra",             priceAed: 3299, compareAtAed: 3799, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Mi15+Ultra", brand: "Xiaomi"    },
  { id: "6",  title: 'Apple MacBook Pro 14" M4 Pro – 24GB 512GB',    slug: "macbook-pro-14-m4-pro",       priceAed: 8499,                    imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=MacBook+M4", brand: "Apple",    badge: "New" },
  { id: "7",  title: "Dell XPS 15 – Core Ultra 9 32GB RTX4060",      slug: "dell-xps-15",                 priceAed: 7299, compareAtAed: 8499, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=XPS+15",     brand: "Dell"      },
  { id: "8",  title: "ASUS ROG Zephyrus G16 – RTX4080 32GB",         slug: "asus-rog-zephyrus-g16",       priceAed: 9999, compareAtAed:11999, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=ROG+G16",    brand: "ASUS"      },
  { id: "9",  title: "Microsoft Surface Laptop 7 – 16GB 512GB",      slug: "surface-laptop-7",            priceAed: 5299,                    imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Surface+7",  brand: "Microsoft" },
  { id: "10", title: "Apple Watch Ultra 2 – 49mm Titanium",           slug: "apple-watch-ultra-2",         priceAed: 3799,                    imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Watch+Ultra",brand: "Apple"     },
  { id: "11", title: "Samsung Galaxy Watch 7 – 44mm",                 slug: "samsung-galaxy-watch-7",      priceAed: 1299, compareAtAed: 1499, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Watch+7",    brand: "Samsung"   },
  { id: "12", title: "HP Spectre x360 14 – 16GB 1TB OLED",           slug: "hp-spectre-x360-14",          priceAed: 6499, compareAtAed: 7299, imageUrl: "https://placehold.co/400x400/EDE8F5/3D52A0?text=Spectre",    brand: "HP"        },
];

const SORT_OPTIONS = [
  { value: "default",    label: "Default"           },
  { value: "price-asc",  label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "discount",   label: "Biggest Discount"  },
];

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [query,  setQuery]  = useState(initial);
  const [sort,   setSort]   = useState("default");
  const [brands, setBrands] = useState<string[]>([]);

  const allBrands = [...new Set(ALL_PRODUCTS.map(p => p.brand!))].sort();

  const filtered = ALL_PRODUCTS
    .filter(p =>
      (!query || p.title.toLowerCase().includes(query.toLowerCase()) || p.brand?.toLowerCase().includes(query.toLowerCase())) &&
      (brands.length === 0 || brands.includes(p.brand!))
    )
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

  const toggleBrand = (b: string) => setBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

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
            placeholder="Search products, brands…"
            className="flex-1 text-sm outline-none"
          />
          {query && <button onClick={() => setQuery("")}><X size={14} className="text-gray-400" /></button>}
        </div>
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
            {query ? (
              <><span className="font-semibold text-gray-800">{filtered.length}</span> results for &quot;{query}&quot;</>
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
