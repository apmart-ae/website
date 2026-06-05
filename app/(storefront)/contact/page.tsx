"use client";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">We're here to help — reach us any way you prefer.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-bold text-gray-700 mb-5">Send a Message</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">First Name</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Last Name</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Email</label>
              <input type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Subject</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                <option>Order Enquiry</option>
                <option>Product Question</option>
                <option>Return / Refund</option>
                <option>Warranty Claim</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Message</label>
              <textarea rows={5} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0] resize-none" />
            </div>
            <button className="w-full bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold py-3 rounded-xl transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-5">
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: ["+971 4 200 0000", "Sun–Thu 9am–7pm GST"],
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              lines: ["+971 55 000 0000", "Quick replies · 9am–10pm daily"],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["info@apmart.ae", "We reply within 4 business hours"],
            },
            {
              icon: MapPin,
              title: "Showroom",
              lines: ["Unit 14, Dubai Silicon Oasis", "Dubai, UAE · Open Sun–Fri 10am–8pm"],
            },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#EDE8F5] rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#3D52A0]" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm mb-0.5">{title}</p>
                {lines.map(l => <p key={l} className="text-sm text-gray-500">{l}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
