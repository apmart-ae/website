import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const FOOTER_LINKS = {
  Company: [
    { label: "About APMART", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Stores", href: "/stores" },
  ],
  "Customer Service": [
    { label: "Extended Warranty", href: "/warranty" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#11131A] text-gray-300 pt-12 pb-6 mt-12">
      {/* Newsletter */}
      <div className="bg-[#3D52A0] py-8 -mt-12 mb-10">
        <div className="mx-auto max-w-[1280px] px-4 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="text-white">
            <p className="font-bold text-lg">You First</p>
            <p className="text-sm text-blue-200">Signup to get our latest offers before everybody else</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 flex-1 max-w-xl w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 rounded-lg text-sm text-gray-800 outline-none"
            />
            <input
              type="tel"
              placeholder="+971 Phone number"
              className="flex-1 sm:max-w-[180px] px-4 py-2.5 rounded-lg text-sm text-gray-800 outline-none"
            />
            <button className="bg-[#7091E6] hover:bg-white hover:text-[#3D52A0] text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap">
              JOIN
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <img src="/brand/logo.svg" alt="APMART.AE" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Your trusted electronics destination in UAE. Authorized reseller of top global brands with fast delivery and expert service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-500 hover:text-[#7091E6] text-xs font-semibold">FB</a>
              <a href="#" className="text-gray-500 hover:text-[#7091E6] text-xs font-semibold">IG</a>
              <a href="#" className="text-gray-500 hover:text-[#7091E6] text-xs font-semibold">TT</a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">{section}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-gray-500 hover:text-[#7091E6] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
          <a href="mailto:info@apmart.ae" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#7091E6]">
            <Mail size={14} /> info@apmart.ae
          </a>
          <a href="tel:+97142000000" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#7091E6]">
            <Phone size={14} /> +971 4 200 0000
          </a>
          <p className="ml-auto text-xs text-gray-600">© {new Date().getFullYear()} APMART.AE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
