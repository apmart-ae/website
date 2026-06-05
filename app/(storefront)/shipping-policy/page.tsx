export const metadata = { title: "Shipping Policy — APMART.AE" };

export default function ShippingPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Shipping Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Delivery Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-xs">
              <thead className="bg-[#F7F8FC] text-gray-500 uppercase tracking-wide">
                <tr>
                  {["Service","Coverage","Estimated Time","Cost"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Same-Day Express","Dubai only","Within 4–6 hours","AED 25"],
                  ["DHL Next-Day","UAE-wide","Next business day","AED 35"],
                  ["Aramex Standard","UAE-wide","1–2 business days","AED 20"],
                  ["Free Shipping","UAE-wide","1–2 business days","Free for orders ≥ AED 500"],
                  ["Click & Collect","Dubai Silicon Oasis","Ready in 2 hours","Free"],
                ].map(([s,c,t,p]) => (
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
          <p>Orders placed before 2:00 PM GST (Sun–Thu) are dispatched the same day. Orders placed after this cut-off or on Fri–Sat are processed the next business day.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">International Shipping</h2>
          <p>We currently ship within the UAE only. International shipping is coming soon. If you are ordering from outside the UAE, please contact us for a custom quote.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Tracking</h2>
          <p>A tracking number and link are sent to your email and WhatsApp once your order is dispatched. You can also track orders from your account dashboard.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Failed Delivery</h2>
          <p>If delivery is unsuccessful, the courier will make one additional attempt. After two failed attempts, your order is returned to our warehouse and we will contact you to re-arrange delivery. A re-delivery fee may apply.</p>
        </section>
      </div>
    </main>
  );
}
