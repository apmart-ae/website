"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";

const WISHLIST = [
  { id: "1", slug: "apple-iphone-17-pro", title: "Apple iPhone 17 Pro 256GB Desert Titanium", price: 4999, compareAt: 5499, image: "/products/iphone-17-pro.jpg", category: "Smartphones", inStock: true },
  { id: "2", slug: "samsung-galaxy-s25-ultra", title: "Samsung Galaxy S25 Ultra 512GB Titanium Black", price: 4699, compareAt: 4999, image: "/products/samsung-s25-ultra.jpg", category: "Smartphones", inStock: true },
  { id: "3", slug: "macbook-pro-14-m4-pro", title: 'MacBook Pro 14" M4 Pro 512GB Space Black', price: 8499, compareAt: 0, image: "/products/macbook-pro-14-m4.jpg", category: "Laptops", inStock: false },
  { id: "4", slug: "apple-watch-ultra-2", title: "Apple Watch Ultra 2 49mm Titanium", price: 3799, compareAt: 4199, image: "/products/apple-watch-ultra-2.jpg", category: "Wearables", inStock: true },
];

export default function AccountWishlistPage() {
  const [items, setItems] = useState(WISHLIST);
  const remove = (id: string) => setItems(is => is.filter(i => i.id !== id));

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">Wishlist</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={40} className="mx-auto text-[#ADBBDA] mb-3" />
          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
          <Link href="/" className="inline-block bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(item => {
            const disc = item.compareAt > 0 ? Math.round(100 - (item.price / item.compareAt) * 100) : 0;
            return (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                <div className="relative">
                  <div className="h-44 bg-[#EDE8F5] flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain p-4" />
                    ) : (
                      <span className="text-[#8697C4] text-xs">No image</span>
                    )}
                  </div>
                  {disc > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                      -{disc}%
                    </span>
                  )}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">Out of Stock</span>
                    </div>
                  )}
                  <button
                    onClick={() => remove(item.id)}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-[#8697C4] font-medium mb-0.5">{item.category}</p>
                  <Link href={`/product/${item.slug}`} className="text-sm font-medium text-gray-800 hover:text-[#3D52A0] line-clamp-2 leading-snug block">
                    {item.title}
                  </Link>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-bold text-[#3D52A0]">AED {item.price.toLocaleString()}</span>
                    {item.compareAt > 0 && (
                      <span className="text-xs text-gray-400 line-through">AED {item.compareAt.toLocaleString()}</span>
                    )}
                  </div>
                  <button
                    disabled={!item.inStock}
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-[#3D52A0] hover:bg-[#7091E6] disabled:bg-gray-200 disabled:cursor-not-allowed text-white disabled:text-gray-400 text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart size={13} />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
