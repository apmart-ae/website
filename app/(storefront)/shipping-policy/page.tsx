export const metadata = { title: "Shipping & Delivery Policy — APMART.AE" };

export default function ShippingPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Shipping & Delivery Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

        <section className="bg-[#EDE8F5] rounded-2xl p-5">
          <p className="font-bold text-[#3D52A0] mb-1">24-Hour Delivery & Installation Across UAE</p>
          <p>We offer next-day delivery and professional installation across the UAE. Free shipping on all orders over AED 500.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-3">Delivery Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-xs">
              <thead className="bg-[#F7F8FC] text-gray-500 uppercase tracking-wide">
                <tr>
                  {["Service", "Coverage", "Estimated Time", "Cost"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Same-Day Express", "Dubai only", "Within 4–6 hours", "AED 25"],
                  ["Next-Day Delivery", "UAE-wide", "Next business day", "AED 35"],
                  ["Standard Delivery", "UAE-wide", "1–2 business days", "AED 20"],
                  ["Free Shipping", "UAE-wide", "1–2 business days", "Free on orders ≥ AED 500"],
                  ["Click & Collect", "Dubai Silicon Oasis showroom", "Ready in 2 hours", "Free"],
                ].map(([s, c, t, p]) => (
                  <tr key={s} className="hover:bg-[#F7F8FC]">
                    <td className="px-4 py-2.5 font-medium text-gray-800">{s}</td>
                    <td className="px-4 py-2.5">{c}</td>
                    <td className="px-4 py-2.5">{t}</td>
                    <td className="px-4 py-2.5 font-semibold text-[#3D52A0]">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Order Processing</h2>
          <p>Orders placed before <strong>2:00 PM GST (Sun–Thu)</strong> are dispatched the same day. Orders placed after this cut-off or on Fri–Sat are processed the next business day. You will receive an order confirmation email with a reference number immediately after placing your order.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Delivery & Installation</h2>
          <p className="mb-2">Most products are delivered with free installation by our trained technicians. For large appliances and TVs, our team will unbox, position, and set up the product at your preferred location. Some installations may require a nominal charge — this will be communicated at checkout.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Please ensure a responsible adult is present at the delivery address.</li>
            <li>A valid photo ID (preferably Emirates ID) may be required at the time of delivery.</li>
            <li>Billing and shipping addresses may differ.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Payment Options</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cash on Delivery (COD)</strong> available for orders under AED 1,000.</li>
            <li><strong>Visa / Mastercard</strong> via secure online payment.</li>
            <li><strong>0% installment plans</strong> via Tabby or Tamara (4 interest-free payments).</li>
            <li>Bank installment plans available for purchases over AED 1,000 via major UAE banks.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Order Tracking</h2>
          <p>Once your order ships, a tracking number and link are sent to your email and WhatsApp. You can also track your order from your account dashboard under <strong>My Orders</strong>.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Failed Delivery</h2>
          <p>If delivery is unsuccessful, the courier will make one additional attempt. After two failed attempts, your order is returned to our warehouse and we will contact you to re-arrange. A re-delivery fee may apply.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Click & Collect</h2>
          <p>Select "Collect in Store" at checkout to pick up from our Dubai Silicon Oasis showroom. Orders are ready within 2 hours and held for 3 days. Please bring your order confirmation and a valid photo ID.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Contact</h2>
          <p>For shipping enquiries: <strong>info@apmart.ae</strong> or WhatsApp <strong>+971 52 505 3425</strong>. Our team is available Sun–Thu 9am–7pm GST.</p>
        </section>

      </div>
    </main>
  );
}
