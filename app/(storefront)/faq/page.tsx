import FaqAccordion from "./FaqAccordion";

export const metadata = { title: "FAQ — APMART.AE" };

export default function FaqPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-500 mb-8">Everything you need to know about shopping at APMART.AE.</p>
      <FaqAccordion />
    </main>
  );
}
