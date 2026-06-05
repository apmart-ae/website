import { Shield, Truck, HeadphonesIcon, Award } from "lucide-react";

export const metadata = { title: "About Us — APMART.AE" };

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#3D52A0] mb-3">About APMART.AE</h1>
      <p className="text-gray-500 text-lg mb-10">Dubai's trusted destination for genuine electronics since 2019.</p>

      <div className="prose prose-gray max-w-none mb-12">
        <p>APMART.AE was founded in Dubai with a simple mission: give residents of the UAE access to the world's best electronics at fair, transparent prices — with service that matches the product quality.</p>
        <p>We stock smartphones, laptops, tablets, wearables, and home appliances from the world's leading brands including Apple, Samsung, Sony, Dell, Huawei, and more. Every product is 100% genuine, covered by UAE manufacturer warranty, and eligible for our hassle-free 15-day return policy.</p>
        <p>From our warehouse in Jebel Ali, we offer same-day delivery across Dubai and next-day delivery to Abu Dhabi, Sharjah, and the wider UAE through our DHL and Aramex partnerships.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Shield, title: "100% Genuine", body: "Every product sourced directly from authorised distributors." },
          { icon: Truck, title: "Fast Delivery", body: "Same-day Dubai delivery. Next-day UAE-wide via DHL & Aramex." },
          { icon: HeadphonesIcon, title: "24/7 Support", body: "WhatsApp, call, or email — real humans, not bots." },
          { icon: Award, title: "UAE Warranty", body: "Full manufacturer warranty on all products sold." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-[#EDE8F5] rounded-2xl p-5 text-center">
            <Icon size={28} className="text-[#3D52A0] mx-auto mb-2" />
            <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{body}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
        <h2 className="font-bold text-xl text-gray-800 mb-2">Our Numbers</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[["50,000+", "Happy Customers"], ["200+", "Brands Stocked"], ["99.2%", "Positive Feedback"]].map(([n, l]) => (
            <div key={l}>
              <p className="text-2xl font-extrabold text-[#3D52A0]">{n}</p>
              <p className="text-sm text-gray-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
