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
              className="flex-1 px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-200 outline-none bg-transparent border border-white/40 focus:border-white transition-colors"
            />
            <input
              type="tel"
              placeholder="+971 Phone number"
              className="flex-1 sm:max-w-[180px] px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-200 outline-none bg-transparent border border-white/40 focus:border-white transition-colors"
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
            <img src="/logo.png" alt="APMART.AE" className="h-10 w-auto mb-4" />
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Your trusted electronics destination in UAE. Authorized reseller of top global brands with fast delivery and expert service.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7091E6] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7091E6] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7091E6] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
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
          <a href="https://wa.me/971525053425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#7091E6]">
            <Phone size={14} /> +971 52 505 3425
          </a>
          <p className="ml-auto text-xs text-gray-600">© {new Date().getFullYear()} APMART.AE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
