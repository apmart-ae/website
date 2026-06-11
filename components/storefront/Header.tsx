"use client";
import Link from "next/link";
import { Search, MapPin, User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NAV_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import CartIcon from "./CartIcon";

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");

  const doSearch = (q: string) => {
    const trimmed = q.trim();
    if (trimmed) router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main header row */}
      <div className="mx-auto max-w-[1280px] px-4 py-3 flex items-center gap-4">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-1.5 text-gray-600"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.png" alt="APMART.AE" className="h-12 w-auto" />
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-2xl mx-auto hidden sm:block">
          <div className="flex rounded-lg border-2 border-[#3D52A0] overflow-hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && doSearch(searchQuery)}
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button
              onClick={() => doSearch(searchQuery)}
              className="bg-[#3D52A0] px-5 py-2 text-white hover:bg-[#7091E6] transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-3 ml-auto lg:ml-0">
          <Link href="/account/orders" className="hidden md:flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#3D52A0] px-2 py-1.5">
            <MapPin size={18} />
            <span className="hidden lg:block">Stores</span>
          </Link>
          <Link href="/account" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#3D52A0] px-2 py-1.5">
            <User size={18} />
            <span className="hidden lg:block">Sign In</span>
          </Link>
          <CartIcon />
        </div>
      </div>

      {/* Mobile search */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex rounded-lg border-2 border-[#3D52A0] overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={mobileQuery}
            onChange={e => setMobileQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && doSearch(mobileQuery)}
            className="flex-1 px-3 py-2 text-sm outline-none"
          />
          <button onClick={() => doSearch(mobileQuery)} className="bg-[#3D52A0] px-4 py-2 text-white">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-[1280px] px-4">
          <ul className="flex items-center">
            {NAV_CATEGORIES.map((cat) => (
              <li key={cat.slug} className="group relative">
                <Link
                  href={`/category/${cat.slug}`}
                  className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#3D52A0] whitespace-nowrap"
                >
                  {cat.label}
                  {cat.sub.length > 0 && <ChevronDown size={13} className="mt-0.5 group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Mega menu */}
                {cat.sub.length > 0 && (
                  <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-xl rounded-b-xl border border-gray-100 min-w-[640px] z-50 p-5 gap-6">
                    {cat.sub.map((sub) => (
                      <div key={sub.slug} className="min-w-[150px]">
                        <Link
                          href={`/category/${sub.slug}`}
                          className="block text-xs font-semibold text-[#3D52A0] uppercase tracking-wide mb-2 hover:underline"
                        >
                          {sub.label}
                        </Link>
                        {"items" in sub && Array.isArray(sub.items) && (
                          <ul className="space-y-1">
                            {sub.items.map((item: { label: string; href: string }) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-xs text-gray-600 hover:text-[#3D52A0]"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <ul className="divide-y divide-gray-100">
            {NAV_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#EDE8F5] hover:text-[#3D52A0]"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
