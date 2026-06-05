import Link from "next/link";
import {
  Smartphone, Laptop, Tablet, Watch, Tv, Zap, Gamepad2, Camera, Wifi, Package,
} from "lucide-react";

const CATEGORIES = [
  { label: "Mobile", slug: "smartphones", Icon: Smartphone },
  { label: "Laptop", slug: "computing", Icon: Laptop },
  { label: "Tablet", slug: "tablets", Icon: Tablet },
  { label: "Watch", slug: "wearables", Icon: Watch },
  { label: "Television", slug: "tv-audio", Icon: Tv },
  { label: "Appliances", slug: "appliances", Icon: Zap },
  { label: "Gaming", slug: "gaming", Icon: Gamepad2 },
  { label: "Photography", slug: "photography", Icon: Camera },
  { label: "Routers", slug: "routers", Icon: Wifi },
  { label: "Accessories", slug: "accessories", Icon: Package },
];

export default function CategoryCircles() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-6">
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 md:gap-5">
        {CATEGORIES.map(({ label, slug, Icon }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#ADBBDA] group-hover:border-[#3D52A0] bg-[#EDE8F5] group-hover:bg-[#3D52A0] flex items-center justify-center transition-colors">
              <Icon size={24} className="text-[#3D52A0] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#3D52A0] text-center leading-tight">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
