import { Package, MapPin, Heart, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  { href: "/account/orders",    Icon: Package, label: "My Orders",   desc: "Track & manage orders" },
  { href: "/account/addresses", Icon: MapPin,  label: "Addresses",   desc: "Saved delivery addresses" },
  { href: "/account/wishlist",  Icon: Heart,   label: "Wishlist",    desc: "Saved products" },
  { href: "/account/reviews",   Icon: Star,    label: "Reviews",     desc: "Your product reviews" },
];

export default function AccountPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#3D52A0] mb-6">My Account</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {QUICK_LINKS.map(({ href, Icon, label, desc }) => (
          <Link key={href} href={href} className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#3D52A0] hover:shadow-card transition-all flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EDE8F5] group-hover:bg-[#3D52A0] flex items-center justify-center transition-colors">
              <Icon size={20} className="text-[#3D52A0] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#3D52A0]" />
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="font-bold text-gray-700 mb-4 text-sm">Profile Details</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[["Full Name",""], ["Email",""], ["Phone",""]].map(([label]) => (
            <div key={label} className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">{label}</label>
              <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
            </div>
          ))}
        </div>
        <button className="mt-4 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
