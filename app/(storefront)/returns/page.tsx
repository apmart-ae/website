export const metadata = { title: "Returns & Refunds — APMART.AE" };

export default function ReturnsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Returns & Refunds</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="bg-[#EDE8F5] rounded-2xl p-5">
          <p className="font-bold text-[#3D52A0] mb-1">15-Day Return Window</p>
          <p>Return any unused, sealed product within 15 days of delivery for a full refund to your original payment method.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Eligibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Item must be in original, unused condition with all original packaging.</li>
            <li>All accessories, manuals, and warranty cards must be included.</li>
            <li>Product must not have been activated (for SIM-based devices).</li>
            <li>Items marked "Final Sale" or "Non-Returnable" are excluded.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Defective Products</h2>
          <p>If your product is defective on arrival, contact us within 7 days. We will arrange free collection and send a replacement or process a full refund within 5–7 business days.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">How to Return</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Log in and go to <strong>My Orders</strong>.</li>
            <li>Select the order and click <strong>Request Return</strong>.</li>
            <li>Select a reason and submit. You'll receive a return label within 24 hours.</li>
            <li>Pack securely and drop off at any DHL or Aramex service point, or we'll arrange collection.</li>
            <li>Refund is processed within 5–7 business days of receiving the item.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Refund Methods</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Card / Online payment:</strong> Refunded to original card within 5–7 business days.</li>
            <li><strong>Cash on Delivery:</strong> Refunded via bank transfer within 7–10 business days.</li>
            <li><strong>Store credit:</strong> Instant if you prefer credit for future orders.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
