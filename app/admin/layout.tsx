import Link from "next/link";
import {
  LayoutDashboard, Package, ShoppingBag, Users, Tag, Settings,
  BarChart2, Image, Star, ChevronRight, LogOut,
} from "lucide-react";

const ADMIN_NAV = [
  { href: "/admin",              Icon: LayoutDashboard, label: "Dashboard"  },
  { href: "/admin/products",     Icon: Package,         label: "Products"   },
  { href: "/admin/orders",       Icon: ShoppingBag,     label: "Orders"     },
  { href: "/admin/customers",    Icon: Users,           label: "Customers"  },
  { href: "/admin/coupons",      Icon: Tag,             label: "Coupons"    },
  { href: "/admin/banners",      Icon: Image,           label: "Banners"    },
  { href: "/admin/reviews",      Icon: Star,            label: "Reviews"    },
  { href: "/admin/reports",      Icon: BarChart2,       label: "Reports"    },
  { href: "/admin/settings",     Icon: Settings,        label: "Settings"   },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#F7F8FC]">
      {/* Sidebar */}
      <aside className="w-56 bg-[#11131A] text-gray-300 flex flex-col shrink-0">
        <div className="p-5 border-b border-white/10">
          <img src="/brand/logo.svg" alt="APMART Admin" className="h-8 w-auto brightness-0 invert" />
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Admin Panel</p>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {ADMIN_NAV.map(({ href, Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <Icon size={15} /> {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-white/5 transition-colors">
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">APMART.AE Admin</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-7 h-7 rounded-full bg-[#3D52A0] text-white flex items-center justify-center font-bold">A</span>
            Admin
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
