"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartIcon() {
  const count = useCart(s => s.count());
  return (
    <Link href="/cart" className="relative flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#3D52A0] px-2 py-1.5">
      <ShoppingCart size={20} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#3D52A0] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
      <span className="hidden lg:block">Cart</span>
    </Link>
  );
}
