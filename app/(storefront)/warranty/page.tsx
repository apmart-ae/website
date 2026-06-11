export const metadata = { title: "Extended Warranty — APMART.AE" };

export default function WarrantyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Extended Warranty</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

        <section className="bg-[#EDE8F5] rounded-2xl p-5">
          <p className="font-bold text-[#3D52A0] mb-1">Protection Beyond the Manufacturer Warranty</p>
          <p>APMART.AE Extended Warranty kicks in after your manufacturer warranty expires, covering mechanical and electrical defects across the GCC region — so you're covered for years, not just the first year.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-3">Extended Warranty Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-xs">
              <thead className="bg-[#F7F8FC] text-gray-500 uppercase tracking-wide">
                <tr>
                  {["Plan","Coverage Period","Max Repair Turnaround","Total Loss Deduction"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["1-Year Plan","After manufacturer warranty","21 days","10% depreciation"],
                  ["2-Year Plan","After manufacturer warranty","21 days","25% depreciation"],
                  ["3-Year Plan","After manufacturer warranty","21 days","35% depreciation"],
                ].map(([p, c, t, d]) => (
                  <tr key={p} className="hover:bg-[#F7F8FC]">
                    <td className="px-4 py-2.5 font-semibold text-[#3D52A0]">{p}</td>
                    <td className="px-4 py-2.5">{c}</td>
                    <td className="px-4 py-2.5">{t}</td>
                    <td className="px-4 py-2.5">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-3">Manufacturer Warranty by Brand</h2>
          <div className="overflow-x-auto">
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
                  ["Samsung","Home Appliances","2 years"],
                  ["Lenovo / ASUS / MSI","Laptops","1 year"],
                  ["Sony","All products","1 year"],
                  ["All Others","Consumer Electronics","1 year"],
                ].map(([b, c, w]) => (
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
            <li>Free repairs including spare parts and labour.</li>
            <li>Mechanical and electrical defects under normal use conditions.</li>
            <li>Coverage across UAE and GCC region.</li>
            <li>Maximum repair turnaround of 21 days.</li>
            <li>Total loss compensation (with applicable depreciation deductions).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">What's Not Covered</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Physical or liquid damage, misuse, or abuse.</li>
            <li>Consumable parts — batteries, ink cartridges, belts, stylus tips.</li>
            <li>Accessories, virus repair, and software issues.</li>
            <li>Intentional or unintentional device damage.</li>
            <li>Fire, natural disasters, theft, or device loss.</li>
            <li>Repairs carried out at unauthorised service centres.</li>
            <li>Devices with altered or removed serial numbers.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Accidental Damage Protection</h2>
          <p className="mb-3">Our optional Accidental Damage Protection add-on covers your device from the day of purchase for one full year (UAE only).</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>One repair or replacement per covered component.</li>
            <li>All repairs carried out at an authorised service centre.</li>
            <li>Customer co-pay: 20–25% of repair cost (depending on purchase date).</li>
            <li>Total loss compensation at 20–25% depreciation rate.</li>
          </ul>
          <p className="text-xs text-gray-400">Note: Normal wear, cosmetic defects, negligence, theft, natural disasters, power fluctuations, and data recovery are excluded.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">How to Make a Claim</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Contact us via WhatsApp or email at <strong>info@apmart.ae</strong> with your order number.</li>
            <li>Describe the fault — attach photos or a short video if possible.</li>
            <li>Our team arranges collection and assessment within 1–2 business days.</li>
            <li>Repairs are completed at an authorised service centre within 21 days.</li>
            <li>Device is returned to you or replaced if beyond economic repair.</li>
          </ol>
        </section>

      </div>
    </main>
  );
}
