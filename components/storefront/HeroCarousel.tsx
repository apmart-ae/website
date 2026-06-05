"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    title: "Weekend Deals",
    subtitle: "Up to 50% OFF",
    cta: "Shop Now",
    href: "/search?tag=deals",
    bg: "from-[#3D52A0] to-[#7091E6]",
    accent: "#EDE8F5",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Explore the Latest Tech",
    cta: "Discover More",
    href: "/search?tag=new",
    bg: "from-[#11131A] to-[#3D52A0]",
    accent: "#7091E6",
  },
  {
    id: 3,
    title: "Authorized Reseller",
    subtitle: "Genuine Products • Full Warranty",
    cta: "Browse All",
    href: "/",
    bg: "from-[#7091E6] to-[#3D52A0]",
    accent: "#EDE8F5",
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIdx(i => (i + 1) % SLIDES.length);

  return (
    <div className="relative overflow-hidden rounded-xl mx-4 md:mx-0 aspect-[3/1] min-h-[200px] max-h-[420px]">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 flex items-center bg-gradient-to-r transition-opacity duration-700",
            slide.bg,
            i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="px-10 md:px-16 text-white">
            <p className="text-sm font-semibold mb-1 opacity-80" style={{ color: slide.accent }}>{slide.subtitle}</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">{slide.title}</h2>
            <a
              href={slide.href}
              className="inline-block bg-white text-[#3D52A0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#EDE8F5] transition-colors text-sm"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-1.5 text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-1.5 text-white transition-colors">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn("h-1.5 rounded-full transition-all", i === idx ? "w-5 bg-white" : "w-1.5 bg-white/40")}
          />
        ))}
      </div>
    </div>
  );
}
