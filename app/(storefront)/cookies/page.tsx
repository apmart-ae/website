export const metadata = { title: "Cookie Policy — APMART.AE" };

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Cookie Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">What Are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your browsing experience. Cookies cannot run programmes or deliver viruses to your device.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-3">Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-xs">
              <thead className="bg-[#F7F8FC] text-gray-500 uppercase tracking-wide">
                <tr>
                  {["Type", "Purpose", "Can be disabled?"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Essential", "Session management, cart state, login authentication. Required for core functionality.", "No — site won't work without them"],
                  ["Functional", "Language preference, region settings, saved addresses.", "Yes — via browser settings"],
                  ["Analytical", "Anonymised usage data via Google Analytics. Helps us understand how users navigate the site.", "Yes — via browser settings"],
                  ["Marketing", "Third-party advertising cookies (e.g. Meta Pixel) to show relevant ads on external platforms.", "Yes — via browser settings or opt-out links"],
                ].map(([type, purpose, disable]) => (
                  <tr key={type} className="hover:bg-[#F7F8FC]">
                    <td className="px-4 py-2.5 font-semibold text-[#3D52A0]">{type}</td>
                    <td className="px-4 py-2.5">{purpose}</td>
                    <td className="px-4 py-2.5">{disable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Third-Party Cookies</h2>
          <p>Some cookies are placed by third-party services that appear on our pages — including Google Analytics, Meta (Facebook), and payment providers. We do not control these cookies. Each third party has its own privacy and cookie policy, which we encourage you to review independently.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">How to Manage Cookies</h2>
          <p className="mb-2">You can control and delete cookies through your browser settings. Here are instructions for common browsers:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data.</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data.</li>
            <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data.</li>
          </ul>
          <p className="mt-2 text-gray-400 text-xs">Note: Disabling essential cookies will prevent core features like the shopping cart and checkout from functioning correctly.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our website after changes are posted means you accept the updated policy.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Contact</h2>
          <p>For questions about our use of cookies, contact us at <strong>privacy@apmart.ae</strong> or <strong>+971 52 505 3425</strong>.</p>
        </section>

      </div>
    </main>
  );
}
