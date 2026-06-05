"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Are all products on APMART.AE genuine?",
    a: "Yes. Every product is sourced directly from authorised brand distributors or official regional importers. We do not sell grey-market or refurbished products unless clearly labelled.",
  },
  {
    q: "Do products come with UAE warranty?",
    a: "Yes, all products include a UAE manufacturer warranty. Duration varies by brand — typically 1 year for electronics and 2 years for Apple products. Warranty cards are included in the box.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa & Mastercard via Stripe, PayTabs (Apple Pay, Samsung Pay, card), and Cash on Delivery for orders under AED 1,000 within UAE.",
  },
  {
    q: "How fast is delivery?",
    a: "Same-day delivery is available in Dubai for orders placed before 2 PM. UAE-wide next-day delivery via DHL Express or Aramex. Orders above AED 500 qualify for free standard shipping.",
  },
  {
    q: "Can I return a product?",
    a: "Yes. You have 15 days from delivery to return an unopened product for a full refund. For opened products, returns are accepted within 7 days if the item is defective. See our Returns Policy for full details.",
  },
  {
    q: "Do you offer installment plans?",
    a: "We offer 0% installment on eligible purchases via select UAE bank credit cards. Tabby and Tamara Buy Now Pay Later options are coming soon.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link via email and WhatsApp. You can also track it from your account dashboard under 'My Orders'.",
  },
  {
    q: "Can I pick up my order from your showroom?",
    a: "Yes! Click & Collect is available from our Dubai Silicon Oasis showroom. Select 'Collect in store' at checkout. Orders are usually ready within 2 hours.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-gray-800 text-sm pr-4">{q}</span>
        <ChevronDown size={16} className={`text-[#3D52A0] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 px-6">
      {FAQS.map(f => <Item key={f.q} {...f} />)}
    </div>
  );
}
