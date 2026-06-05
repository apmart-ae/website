import Link from "next/link";
import { User, Package, MapPin, Heart, Star, LogOut } from "lucide-react";
import UtilityBar from "@/components/storefront/UtilityBar";
import Header from "@/components/storefront/Header";
import Footer from "@/components/storefront/Footer";

const ACCOUNT_NAV = [
  { href: "/account",           Icon: User,    label: "My Profile"  },
  { href: "/account/orders",    Icon: Package, label: "Orders"      },
  { href: "/account/addresses", Icon: MapPin,  label: "Addresses"   },
  { href: "/account/wishlist",  Icon: Heart,   label: "Wishlist"    },
  { href: "/account/reviews",   Icon: Star,    label: "My Reviews"  },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UtilityBar />
      <Header />
      <div className="mx-auto max-w-[1280px] px-4 py-8 flex gap-6">
        <aside className="hidden md:block w-52 shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b bg-[#EDE8F5]">
              <div className="w-10 h-10 rounded-full bg-[#3D52A0] text-white flex items-center justify-center font-bold text-sm mb-2">A</div>
              <p className="text-sm font-semibold text-[#3D52A0]">My Account</p>
            </div>
            <nav className="p-2">
              {ACCOUNT_NAV.map(({ href, Icon, label }) => (
                <Link key={href} href={href} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-[#EDE8F5] hover:text-[#3D52A0] transition-colors">
                  <Icon size={15} /> {label}
                </Link>
              ))}
              <button className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors mt-1">
                <LogOut size={15} /> Sign Out
              </button>
            </nav>
          </div>
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
      <Footer />
    </>
  );
}
