"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What is APMART.AE and who operates it?",
    a: "APMART.AE is an authorised online electronics and home appliance retailer based in the UAE. We offer the latest consumer electronics, computing, mobile devices, and accessories from top global brands — all with genuine UAE warranty.",
  },
  {
    q: "Are all products on APMART.AE genuine?",
    a: "Yes. Every product is sourced directly from authorised brand distributors or official regional importers. We do not sell grey-market or refurbished items unless clearly labelled.",
  },
  {
    q: "How do I place an order?",
    a: "Browse the site, add items to your cart, and proceed to checkout. You can create an account for a faster experience or check out as a guest. You'll receive an order confirmation email with a unique reference number.",
  },
  {
    q: "How do I know my order is confirmed?",
    a: "You'll receive an order confirmation email with an exclusive order number immediately after placing your order. This reference number should be used in all communications with our support team.",
  },
  {
    q: "Do products come with UAE warranty?",
    a: "Yes. All products include a UAE/GCC manufacturer warranty. Duration varies by brand — typically 1 year for electronics and up to 2 years for certain brands. Warranty cards are included in the box.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa and Mastercard via secure online payment, and Cash on Delivery (COD) for orders under AED 1,000 within the UAE. Installment plans are also available via Tabby or Tamara (4 interest-free payments) for eligible orders.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. All transactions are processed over HTTPS with SSL encryption. We do not store your full card details — payment processing is handled by PCI-DSS certified payment gateways.",
  },
  {
    q: "How fast is delivery?",
    a: "Same-day delivery is available in Dubai for orders placed before 2 PM. UAE-wide next-day delivery is available via courier. Orders above AED 500 qualify for free standard shipping (1–2 business days).",
  },
  {
    q: "Does APMART.AE offer installation?",
    a: "Yes, most products include free delivery and installation. Our trained technicians will set up the product at your preferred location. Some large appliances may require scheduling — our team will coordinate with you.",
  },
  {
    q: "Can I pick up my order from your showroom?",
    a: "Yes! Click & Collect is available from our Dubai Silicon Oasis showroom. Select 'Collect in Store' at checkout. Orders are usually ready within 2 hours. Bring your confirmation email and a valid photo ID.",
  },
  {
    q: "Can I return a product?",
    a: "Yes. You have 15 days from delivery to return an unopened, sealed product for a full refund. For defective items, contact us within 7 days for a free collection and replacement or refund. See our Returns Policy for full details.",
  },
  {
    q: "Can I cancel my order?",
    a: "Orders can be cancelled at no cost before dispatch. Contact us immediately via WhatsApp at +971 52 505 3425. If already dispatched, simply refuse the delivery or return it using our standard returns process.",
  },
  {
    q: "Can the delivered product differ from what I ordered?",
    a: "We take great care to ensure accuracy, but please verify your products against your confirmation email upon delivery. If there is any discrepancy, contact us within 7 days and we will resolve it promptly.",
  },
  {
    q: "What if I don't receive my order?",
    a: "You'll receive status updates via email and SMS. If your order hasn't arrived within the expected timeframe, contact our customer care team via WhatsApp (+971 52 505 3425) or email (info@apmart.ae) during business hours.",
  },
  {
    q: "Do you offer installment plans?",
    a: "Yes. We offer 0% installment on eligible purchases via Tabby and Tamara (split into 4 payments). Bank installment plans are also available for purchases over AED 1,000 via major UAE banks.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link via email and WhatsApp. You can also track from your account dashboard under 'My Orders'.",
  },
  {
    q: "Can my billing and shipping addresses differ?",
    a: "Yes. You may use separate billing and shipping addresses. A valid photo ID (preferably Emirates ID) matching the delivery address may be requested by our courier at the time of delivery.",
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
