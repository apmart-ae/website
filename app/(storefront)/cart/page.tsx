"use client";
import { useCart } from "@/lib/cart";
import { formatAed } from "@/lib/utils";
import { Minus, Plus, Trash2, ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { VAT_RATE, FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function CartPage() {
  const { items, updateQty, removeItem, total, count } = useCart();
  const subtotal = total();
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 25;
  const vat = Math.round((subtotal + shipping) * VAT_RATE);
  const grandTotal = subtotal + shipping + vat;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1280px] px-4 py-16 flex flex-col items-center text-center">
        <ShoppingBag size={56} className="text-[#ADBBDA] mb-4" />
        <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Browse our products and add something to your cart.</p>
        <Link href="/" className="bg-[#3D52A0] hover:bg-[#7091E6] text-white font-semibold px-8 py-3 rounded-xl transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      <h1 className="text-lg font-bold text-[#3D52A0] mb-6">Shopping Cart ({count()} items)</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Items */}
        <div className="lg:col-span-2 space-y-3">
          {items.map(item => (
            <div key={item.variantId} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-4">
              <Link href={`/product/${item.slug}`} className="shrink-0">
                <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-contain rounded-xl bg-[#F7F8FC]" />
              </Link>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-[#8697C4] uppercase">{item.brand}</p>
                <Link href={`/product/${item.slug}`} className="text-sm font-medium text-gray-800 hover:text-[#3D52A0] line-clamp-2">{item.title}</Link>
                <p className="text-xs text-gray-400 mt-0.5">
                  {[item.color, item.storage, item.ram].filter(Boolean).join(" · ")}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden">
                    <button onClick={() => updateQty(item.variantId, item.qty - 1)} className="px-2.5 py-1 hover:bg-[#EDE8F5] text-[#3D52A0]"><Minus size={13} /></button>
                    <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.variantId, item.qty + 1)} className="px-2.5 py-1 hover:bg-[#EDE8F5] text-[#3D52A0]"><Plus size={13} /></button>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-[#3D52A0]">{formatAed(item.priceAed * item.qty)}</p>
                    <button onClick={() => removeItem(item.variantId)} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={15} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 h-fit sticky top-24">
          <h2 className="font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({count()} items)</span>
              <span>{formatAed(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="text-green-600 font-medium">FREE</span> : formatAed(shipping)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>VAT (5%)</span>
              <span>{formatAed(vat)}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t pt-2 mt-2 text-gray-900">
              <span>Total</span>
              <span className="text-[#3D52A0]">{formatAed(grandTotal)}</span>
            </div>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-[#7091E6] bg-[#EDE8F5] rounded-lg px-3 py-2 mb-4">
              Add {formatAed(FREE_SHIPPING_THRESHOLD - subtotal)} more for FREE shipping
            </p>
          )}
          <Link href="/checkout" className="block w-full bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold py-3 rounded-xl text-center transition-colors">
            Proceed to Checkout <ChevronRight size={16} className="inline" />
          </Link>
          <Link href="/" className="block w-full text-center text-xs text-[#7091E6] hover:underline mt-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
