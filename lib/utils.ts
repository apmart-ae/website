import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAed(amount: number | string) {
  const n = typeof amount === "string" ? parseFloat(amount) : amount;
  return `AED ${n.toLocaleString("en-AE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function discountPct(price: number, compareAt: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}
