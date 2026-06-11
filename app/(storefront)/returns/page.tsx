export const metadata = { title: "Returns, Refunds & Exchanges — APMART.AE" };

export default function ReturnsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Refund, Return, Exchange & Cancellation</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

        <section className="bg-[#EDE8F5] rounded-2xl p-5">
          <p className="font-bold text-[#3D52A0] mb-1">15-Day Hassle-Free Returns</p>
          <p>Return any unused, sealed product within 15 days of delivery for a full refund to your original payment method — no questions asked.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Return Eligibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Item must be in original, unused condition with all original packaging intact.</li>
            <li>All accessories, manuals, and warranty cards must be included.</li>
            <li>Product must not have been activated (for SIM-based or registered devices).</li>
            <li>Items marked "Final Sale" or "Non-Returnable" are not eligible.</li>
            <li>Opened software, digital downloads, and hygiene items cannot be returned.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Defective or Incorrect Items</h2>
          <p>If your product arrives defective or is different from what you ordered, contact us within <strong>7 days of delivery</strong>. We will arrange free collection and either send a replacement or process a full refund within 5–7 business days.</p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Exchange Policy</h2>
          <p className="mb-2">Exchanges are accepted within 15 days for a different colour, size, or model of equal or greater value (difference is charged). To request an exchange:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Contact us via WhatsApp or email with your order number and the item you'd like instead.</li>
            <li>Return the original product in its original condition — we'll collect it for free.</li>
            <li>Once received and inspected, the replacement is dispatched within 1–2 business days.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">How to Return</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Log in and go to <strong>My Orders</strong>.</li>
            <li>Select the order and click <strong>Request Return</strong>.</li>
            <li>Choose a reason and submit — you'll receive a return label within 24 hours.</li>
            <li>Pack securely and hand it to our courier (we'll schedule free collection).</li>
            <li>Refund is processed within 5–7 business days of receiving the item.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Order Cancellation</h2>
          <p className="mb-2">Orders can be cancelled <strong>before dispatch</strong> at no cost. Once dispatched, the standard return process applies.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To cancel, contact us immediately via WhatsApp at +971 52 505 3425.</li>
            <li>If cancelled before dispatch: full refund within 1–2 business days.</li>
            <li>If the order has already shipped: return it upon delivery and a refund will be issued once received.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Refund Methods</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Card / Online payment:</strong> Refunded to original card within 5–7 business days.</li>
            <li><strong>Cash on Delivery:</strong> Refunded via bank transfer within 7–10 business days.</li>
            <li><strong>Store credit:</strong> Instant — available for future orders on APMART.AE.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-base mb-2">Return Courier Charges</h2>
          <p>Return courier charges may apply depending on the reason for return. Our customer care team will inform you of any applicable charges before proceeding. Returns due to our error (wrong item, defective on arrival) are always collected free of charge.</p>
        </section>

      </div>
    </main>
  );
}
