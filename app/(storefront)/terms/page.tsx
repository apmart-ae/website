export const metadata = { title: "Terms & Conditions — APMART.AE" };

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Terms & Conditions</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        {[
          [
            "1. Acceptance of Terms",
            "By accessing or placing an order on APMART.AE, you agree to be bound by these Terms & Conditions and all applicable UAE laws. If you do not agree, please do not use our website.",
          ],
          [
            "2. About APMART.AE",
            "APMART.AE is an authorised electronics retailer operating in the UAE. The website is operated by APMART Electronics LLC. All products are sourced from authorised distributors and carry genuine UAE/GCC manufacturer warranties.",
          ],
          [
            "3. Products & Pricing",
            "All prices are displayed in UAE Dirhams (AED) and are inclusive of 5% UAE VAT. Prices may change without prior notice. We reserve the right to cancel orders placed at an incorrect price and issue a full refund. Product images are for illustration purposes and may differ slightly from the actual product.",
          ],
          [
            "4. Orders & Payment",
            "An order confirmation email with a unique reference number constitutes acceptance of your order. We accept Visa, Mastercard, Tabby, Tamara, and Cash on Delivery (COD) for eligible orders under AED 1,000. Payment is due at the time of placing the order.",
          ],
          [
            "5. Delivery",
            "Delivery times are estimates and are not guaranteed. Risk of loss passes to the customer upon successful delivery. We deliver within UAE geographical limits. See our Shipping & Delivery Policy for full details.",
          ],
          [
            "6. Installation",
            "Most products include complimentary delivery and installation. For certain large appliances, a nominal installation fee may apply. Requirements for specific product installations are available on the relevant product pages.",
          ],
          [
            "7. Returns & Refunds",
            "Returns are subject to our Returns, Refund, Exchange & Cancellation Policy. Products must be returned in original condition within 15 days of delivery. We reserve the right to refuse returns that do not meet our policy criteria.",
          ],
          [
            "8. Warranty",
            "All products sold on APMART.AE carry the UAE manufacturer warranty. The extended warranty and accidental damage protection plans offered by APMART.AE are subject to separate terms as outlined in our Warranty Policy.",
          ],
          [
            "9. Intellectual Property",
            "All content on this website — including text, images, logos, design, and UI elements — is the property of APMART.AE and may not be reproduced, distributed, or used without express written permission.",
          ],
          [
            "10. Limitation of Liability",
            "APMART.AE is not liable for any indirect, incidental, or consequential damages arising from use of this website or its products, beyond the purchase price of the relevant product. We have limited liability for cyber incidents beyond our reasonable control.",
          ],
          [
            "11. Privacy",
            "Use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
          ],
          [
            "12. Governing Law",
            "These Terms are governed by the laws of the UAE and the Emirate of Dubai. Any disputes shall be resolved under the exclusive jurisdiction of the Dubai courts.",
          ],
          [
            "13. Changes to Terms",
            "We reserve the right to modify these Terms at any time. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.",
          ],
          [
            "14. Contact",
            "For any questions regarding these Terms, contact us at info@apmart.ae or +971 52 505 3425.",
          ],
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
