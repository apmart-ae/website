export const metadata = { title: "Privacy Policy — APMART.AE" };

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        {[
          ["1. Information We Collect", "We collect information you provide directly (name, email, phone, address), information generated during purchases (order history, payment method type — never full card numbers), and technical data (IP address, browser type, device) via cookies and analytics."],
          ["2. How We Use Your Information", "We use your data to process orders and payments, send order confirmations and delivery updates via email and WhatsApp, personalise your shopping experience, send promotional emails (you may unsubscribe at any time), and improve our website and services."],
          ["3. Payment Data", "We do not store card numbers. All payment processing is handled by Stripe (PCI-DSS Level 1 certified) and PayTabs. We only store a token reference for subscription or recurring use."],
          ["4. Data Sharing", "We do not sell your personal data. We share data only with essential service providers: DHL and Aramex (delivery), Stripe and PayTabs (payments), Resend (transactional email), Google Analytics (anonymised usage data)."],
          ["5. Data Retention", "We retain your account data for as long as your account is active. Order history is retained for 7 years as required by UAE commercial law. You may request deletion of non-mandatory data at any time."],
          ["6. Cookies", "We use essential cookies (session, cart), functional cookies (preferences), and analytical cookies (Google Analytics). You can manage cookie preferences via your browser settings. Disabling essential cookies will affect cart and checkout functionality."],
          ["7. Your Rights", "Under UAE data protection law, you have the right to access, correct, or delete your personal data. To exercise these rights, email privacy@apmart.ae. We will respond within 10 business days."],
          ["8. Security", "We use HTTPS encryption, access controls, and regular security audits to protect your data. Despite these measures, no system is completely secure."],
          ["9. Contact", "For privacy enquiries: privacy@apmart.ae or +971 4 200 0000 (attn: Data Protection)."],
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
