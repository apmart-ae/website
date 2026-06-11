export const metadata = { title: "Privacy Policy — APMART.AE" };

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        {[
          [
            "1. Information We Collect",
            "We collect information you provide directly (name, email, phone number, delivery address), information generated during purchases (order history, payment method type — we never store full card numbers), and technical data (IP address, browser type, device identifier) via cookies and analytics tools.",
          ],
          [
            "2. How We Use Your Information",
            "We use your data to process and fulfil orders, send order confirmations and delivery updates via email and WhatsApp, personalise your shopping experience, send promotional emails and offers (you may unsubscribe at any time), conduct market research, and improve our website and services.",
          ],
          [
            "3. Payment Data",
            "We do not store your card numbers. All payment processing is handled by PCI-DSS certified payment gateways. We only retain a token reference for repeat or recurring payment use. Transaction information such as billing address and payment method type is retained for legal and dispute resolution purposes.",
          ],
          [
            "4. Cookies",
            "We use essential cookies (session management, cart), functional cookies (language and preference settings), and analytical cookies (Google Analytics — anonymised). You can manage cookie preferences via your browser settings. Disabling essential cookies will affect cart and checkout functionality. Third-party providers may also place cookies on our site, which we do not control.",
          ],
          [
            "5. Information Sharing",
            "We do not sell your personal data. We share data only with essential service providers: delivery partners (DHL, Aramex), payment processors, transactional email providers, and anonymised analytics platforms. We may share data with corporate affiliates to prevent fraud. Disclosure may also occur when legally required or to enforce our Terms of Use.",
          ],
          [
            "6. Data Retention",
            "We retain your account data for as long as your account is active. Order history is retained for 7 years as required by UAE commercial law. You may request deletion of non-mandatory data at any time by emailing privacy@apmart.ae.",
          ],
          [
            "7. Your Rights",
            "Under UAE data protection regulations, you have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, email privacy@apmart.ae. We will respond within 10 business days.",
          ],
          [
            "8. Security",
            "We use HTTPS encryption, strict access controls, and regular security reviews to protect your data. Despite these measures, no internet system is completely secure. Our liability for cyber incidents beyond our reasonable control is limited to the value of the transaction.",
          ],
          [
            "9. Third-Party Services",
            "Payment processors and other third-party services have their own privacy policies. We encourage you to review these independently, as different data protection laws and jurisdictions may apply.",
          ],
          [
            "10. Contact",
            "For privacy enquiries or to exercise your rights, contact our Privacy Compliance team at privacy@apmart.ae or +971 52 505 3425.",
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
