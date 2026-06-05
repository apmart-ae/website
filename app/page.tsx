import UtilityBar from "@/components/storefront/UtilityBar";
import Header from "@/components/storefront/Header";
import Footer from "@/components/storefront/Footer";
import HeroCarousel from "@/components/storefront/HeroCarousel";
import CategoryCircles from "@/components/storefront/CategoryCircles";
import TrustBadges from "@/components/storefront/TrustBadges";
import ProductCard, { type ProductCardData } from "@/components/storefront/ProductCard";
import Link from "next/link";

const SMARTPHONES: ProductCardData[] = [
  { id: "1", title: "Samsung Galaxy S25 Ultra 5G – 12GB RAM 256GB Storage", slug: "samsung-galaxy-s25-ultra", priceAed: 3999, compareAtAed: 5099, imageUrl: "/products/samsung-s25-ultra.jpg", brand: "Samsung" },
  { id: "2", title: "Apple iPhone 17 Pro – 12GB RAM 256GB Storage", slug: "apple-iphone-17-pro", priceAed: 4699, imageUrl: "/products/iphone-17-pro.jpg", brand: "Apple", badge: "Auth. Reseller" },
  { id: "3", title: "Samsung Galaxy S25 Ultra 5G – 12GB RAM 1TB", slug: "samsung-galaxy-s25-ultra-1tb", priceAed: 5199, compareAtAed: 6599, imageUrl: "/products/samsung-s25.jpg", brand: "Samsung" },
  { id: "4", title: "Nothing Phone 3a Pro – 12GB RAM 256GB Gray", slug: "nothing-phone-3a-pro", priceAed: 1749, compareAtAed: 1849, imageUrl: "/products/nothing-phone-3a-pro.jpg", brand: "Nothing" },
  { id: "5", title: "Huawei Mate X6 4G – 12GB RAM 512GB Nebula Red", slug: "huawei-mate-x6", priceAed: 1599, compareAtAed: 1699, imageUrl: "/products/huawei-mate-x6.jpg", brand: "Huawei" },
];

const LAPTOPS: ProductCardData[] = [
  { id: "6", title: 'Apple MacBook Pro 14" M4 – 16GB 512GB Space Black', slug: "macbook-pro-14-m4", priceAed: 6499, imageUrl: "/products/macbook-pro-14-m4.jpg", brand: "Apple", badge: "New" },
  { id: "7", title: "HP OmniBook Ultra 15 – Core Ultra 9 32GB 1TB", slug: "hp-omnibook-ultra-15", priceAed: 7299, compareAtAed: 8499, imageUrl: "/assets/products/hp-ob-3-15-fn0005ne_4_.jpg", brand: "HP" },
  { id: "8", title: "HP OMEN 16 – RTX 4080 32GB 1TB", slug: "hp-omen-16", priceAed: 9999, compareAtAed: 11999, imageUrl: "/assets/products/hp-omen16-u1003ne_1_.jpg", brand: "HP" },
  { id: "9", title: "HP OmniBook 5F 14 – Snapdragon X Plus 16GB 512GB", slug: "hp-omnibook-5f-14", priceAed: 5299, imageUrl: "/assets/products/hp-ob-5f-14fp0002_4_.jpg", brand: "HP" },
];

const WEARABLES: ProductCardData[] = [
  { id: "10", title: "Samsung Galaxy Watch 7 – 44mm Titanium Silver", slug: "samsung-galaxy-watch-7", priceAed: 1299, compareAtAed: 1499, imageUrl: "/products/samsung-galaxy-watch7.jpg", brand: "Samsung" },
  { id: "11", title: "Apple Watch Ultra 2 – 49mm Titanium Natural", slug: "apple-watch-ultra-2", priceAed: 3799, imageUrl: "/products/apple-watch-ultra-2.jpg", brand: "Apple" },
  { id: "12", title: "Huawei Watch GT 5 Pro – 46mm Titanium", slug: "huawei-watch-gt5-pro", priceAed: 1199, compareAtAed: 1399, imageUrl: "/products/samsung-galaxy-watch7.jpg", brand: "Huawei" },
  { id: "13", title: "Samsung Galaxy Ring – Size 7 Titanium Black", slug: "samsung-galaxy-ring-7", priceAed: 999, imageUrl: "/products/apple-watch-ultra-2.jpg", brand: "Samsung" },
];

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base md:text-lg font-bold text-[#3D52A0]">{title}</h2>
      <Link href={href} className="text-xs font-semibold text-[#7091E6] hover:underline">See All →</Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="mx-auto max-w-[1280px] pt-4 pb-2">
          <HeroCarousel />
        </div>

        {/* Category circles */}
        <CategoryCircles />

        {/* Promo banners */}
        <div className="mx-auto max-w-[1280px] px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: "/assets/banners/dreame_jun_2026_offers_thumbnail.jpg", href: "/search?brand=dreame" },
            { img: "/assets/banners/krome_summer_thumbnail.jpg", href: "/search?tag=krome" },
            { img: "/assets/banners/tech_offers_d_2.png", href: "/search?tag=deals" },
          ].map(({ img, href }) => (
            <a key={img} href={href} className="rounded-xl overflow-hidden h-28 block hover:opacity-90 transition-opacity">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </a>
          ))}
        </div>

        {/* Trust badges */}
        <TrustBadges />

        {/* Smartphones */}
        <section className="mx-auto max-w-[1280px] px-4 py-6">
          <SectionHeader title="Smartphones" href="/category/smartphones" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {SMARTPHONES.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* MacBook Banner */}
        <div className="mx-auto max-w-[1280px] px-4 py-2">
          <div className="rounded-xl bg-[#11131A] text-white p-8 md:p-12 flex flex-col items-center text-center">
            <p className="text-xs font-semibold text-[#7091E6] mb-2 uppercase tracking-widest">Laptops & Tablets</p>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-1">MacBook Pro 14″</h3>
            <p className="text-lg md:text-xl font-light text-[#8697C4] mb-3">SUPERCHARGED by M4.</p>
            <p className="text-sm text-gray-400 mb-6">Starting from AED 6,499</p>
            <Link href="/category/computing" className="bg-[#7091E6] hover:bg-[#3D52A0] text-white font-semibold px-8 py-2.5 rounded-lg transition-colors text-sm">
              Shop MacBooks
            </Link>
          </div>
        </div>

        {/* Laptops */}
        <section className="mx-auto max-w-[1280px] px-4 py-6">
          <SectionHeader title="Laptops & Computing" href="/category/computing" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {LAPTOPS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* Wearables */}
        <section className="mx-auto max-w-[1280px] px-4 py-6">
          <SectionHeader title="Wearables & Smart Watches" href="/category/wearables" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {WEARABLES.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </main>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/971420000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-3.5 shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </>
  );
}
