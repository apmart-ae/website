"use client";
import { UTILITY_BAR_ITEMS } from "@/lib/constants";

export default function UtilityBar() {
  const doubled = [...UTILITY_BAR_ITEMS, ...UTILITY_BAR_ITEMS];
  return (
    <div className="bg-[#3D52A0] text-white text-xs py-1.5 overflow-hidden">
      <div className="flex ticker-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 shrink-0">• {item}</span>
        ))}
      </div>
    </div>
  );
}
