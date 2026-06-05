import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  variantId: string;
  productId: string;
  slug: string;
  title: string;
  brand: string;
  sku: string;
  color?: string;
  storage?: string;
  ram?: string;
  imageUrl: string;
  priceAed: number;
  qty: number;
  weightKg: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQty: (variantId: string, qty: number) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((s) => {
          const existing = s.items.find(i => i.variantId === item.variantId);
          if (existing) {
            return { items: s.items.map(i => i.variantId === item.variantId ? { ...i, qty: i.qty + item.qty } : i) };
          }
          return { items: [...s.items, item] };
        }),

      removeItem: (variantId) =>
        set((s) => ({ items: s.items.filter(i => i.variantId !== variantId) })),

      updateQty: (variantId, qty) =>
        set((s) => ({
          items: qty <= 0
            ? s.items.filter(i => i.variantId !== variantId)
            : s.items.map(i => i.variantId === variantId ? { ...i, qty } : i),
        })),

      clear: () => set({ items: [] }),

      total: () => get().items.reduce((sum, i) => sum + i.priceAed * i.qty, 0),

      count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    { name: "apmart-cart" }
  )
);
