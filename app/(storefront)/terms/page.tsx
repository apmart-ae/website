export const metadata = { title: "Terms & Conditions â€” APMART.AE" };

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Terms & Conditions</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        {[
          ["1. Acceptance of Terms", "By accessing or placing an order on APMART.AE, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website."],
          ["2. Products & Pricing", "All prices are displayed in UAE Dirhams (AED) and include 5% UAE VAT. Prices may change without notice. We reserve the right to cancel orders placed at an incorrect price."],
          ["3. Orders & Payment", "An order confirmation email constitutes acceptance of your order. We accept Visa, Mastercard, PayTabs, and Cash on Delivery (COD) for eligible orders. Payment is due at the time of order."],
          ["4. Delivery", "Delivery times are estimates and not guaranteed. Risk of loss passes to the customer upon delivery. See our Shipping Policy for full details."],
          ["5. Returns & Refunds", "Returns are subject to our Returns Policy. We reserve the right to refuse returns that do not meet our policy criteria."],
          ["6. Intellectual Property", "All content on this website including text, images, logos, and UI elements is the property of APMART.AE and may not be reproduced without written permission."],
          ["7. Limitation of Liability", "APMART.AE is not liable for any indirect, incidental, or consequential damages arising from the use of this site or its products beyond the purchase price of the product."],
          ["8. Governing Law", "These Terms are governed by the laws of the UAE and the Emirate of Dubai. Any disputes shall be subject to the exclusive jurisdiction of Dubai courts."],
          ["9. Changes to Terms", "We reserve the right to modify these Terms at any time. Continued use of the website following changes constitutes acceptance of the updated Terms."],
          ["10. Contact", "For any questions regarding these Terms, contact us at legal@apmart.ae or +971 52 505 3425."],
        ].map(([title, body]) => (
          <section key={title as string}>
            <h2 className="font-bold text-gray-800 mb-1">{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
