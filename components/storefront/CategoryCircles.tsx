import Link from "next/link";

const CATEGORIES = [
  { label: "Mobile", slug: "smartphones",     img: "/assets/categories/Mobile.jpg" },
  { label: "Laptop", slug: "computing",        img: "/assets/categories/Laptop.jpg" },
  { label: "Tablet", slug: "tablets",          img: "/assets/categories/Tablet.jpg" },
  { label: "Watch",  slug: "wearables",        img: "/assets/categories/Watch.jpg" },
  { label: "Gaming", slug: "gaming",           img: "/assets/categories/Gaming.jpg" },
  { label: "Routers",slug: "routers",          img: "/assets/categories/Audio.jpg" },
  { label: "Accessories", slug: "accessories", img: "/assets/categories/Accessories.jpg" },
];

export default function CategoryCircles() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-6">
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 md:gap-5">
        {CATEGORIES.map(({ label, slug, img }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#ADBBDA] group-hover:border-[#3D52A0] overflow-hidden bg-[#EDE8F5] transition-colors">
              <img
                src={img}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#3D52A0] text-center leading-tight">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
