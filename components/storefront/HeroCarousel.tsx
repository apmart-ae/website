"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    img: "/assets/banners/weekend_deals_jun_2026_d.jpg",
    imgMobile: "/assets/banners/weekend_deals_jun_2026_m.jpg",
    href: "/search?tag=deals",
  },
  {
    id: 2,
    img: "/assets/banners/summer_2026_deals_d.jpg",
    imgMobile: "/assets/banners/summer_2026_deals_m.jpg",
    href: "/search?tag=summer",
  },
  {
    id: 3,
    img: "/assets/banners/macbook_pro_14_d.png",
    imgMobile: "/assets/banners/macbook_pro_14_m.png",
    href: "/category/computing",
  },
  {
    id: 4,
    img: "/assets/banners/nothing_4a_pro_smarphones_banner.jpg",
    imgMobile: "/assets/banners/nothing_4a_pro_smarphones_banner.jpg",
    href: "/category/smartphones",
  },
  {
    id: 5,
    img: "/assets/banners/xiaomi_17t_d.png",
    imgMobile: "/assets/banners/xiaomi_17t_m.png",
    href: "/category/smartphones",
  },
  {
    id: 6,
    img: "/assets/banners/huawei_nova_15_max_d.png",
    imgMobile: "/assets/banners/huawei_nova_15_max_m.png",
    href: "/category/smartphones",
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
    <div className="relative overflow-hidden rounded-xl mx-4 md:mx-0 aspect-[16/5] min-h-[180px] max-h-[420px]">
      {SLIDES.map((slide, i) => (
        <a
          key={slide.id}
          href={slide.href}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 block",
            i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Desktop image */}
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover hidden sm:block"
            draggable={false}
          />
          {/* Mobile image */}
          <img
            src={slide.imgMobile}
            alt=""
            className="w-full h-full object-cover sm:hidden"
            draggable={false}
          />
        </a>
      ))}

      {/* Controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur rounded-full p-1.5 text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur rounded-full p-1.5 text-white transition-colors">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn("h-1.5 rounded-full transition-all", i === idx ? "w-5 bg-white" : "w-1.5 bg-white/50")}
          />
        ))}
      </div>
    </div>
  );
}
