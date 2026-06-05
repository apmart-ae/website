export const metadata = { title: "Warranty — APMART.AE" };

export default function WarrantyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Warranty</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">UAE Manufacturer Warranty</h2>
          <p>All products sold on APMART.AE are covered by the UAE/GCC manufacturer warranty. The warranty period varies by brand and product category:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-xs">
              <thead className="bg-[#F7F8FC] text-gray-500 uppercase tracking-wide">
                <tr>
                  {["Brand","Category","Warranty Period"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Apple","All products","1 year (AppleCare+ extends to 2–3 yrs)"],
                  ["Samsung","Smartphones / Tablets","1 year"],
                  ["Samsung","Appliances","2 years"],
                  ["Dell","Laptops / Monitors","1 year (ProSupport upgradeable)"],
                  ["Sony","All products","1 year"],
                  ["All Others","Electronics","1 year"],
                ].map(([b,c,w]) => (
                  <tr key={`${b}-${c}`} className="hover:bg-[#F7F8FC]">
                    <td className="px-4 py-2.5 font-medium text-gray-800">{b}</td>
                    <td className="px-4 py-2.5">{c}</td>
                    <td className="px-4 py-2.5 font-semibold text-[#3D52A0]">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">What's Covered</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manufacturing defects in materials or workmanship.</li>
            <li>Hardware failures under normal use conditions.</li>
            <li>Battery defects (capacity below 80% within warranty period for Apple).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">What's Not Covered</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Physical damage (drops, cracks, liquid damage).</li>
            <li>Damage from unauthorised repair or modification.</li>
            <li>Normal wear and tear.</li>
            <li>Consumable parts (batteries after warranty period, stylus tips, etc.).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">How to Claim</h2>
          <p>To make a warranty claim, contact us via WhatsApp or email with your order number and a description of the issue. We will arrange assessment and liaise with the brand service centre on your behalf.</p>
        </section>
      </div>
    </main>
  );
}
