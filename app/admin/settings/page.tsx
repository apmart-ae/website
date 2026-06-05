"use client";
export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Store settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">Store Settings</h2>
          <div className="space-y-4">
            {[["Store Name","APMART.AE"],["Store Email","info@apmart.ae"],["Store Phone","+971 4 200 0000"],["Currency","AED"],["VAT Rate (%)","5"]].map(([label, val]) => (
              <div key={label}>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
                <input defaultValue={val} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            ))}
          </div>
        </div>

        {/* Payment settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">Payment Gateways</h2>
          <div className="space-y-4">
            {[["Stripe Secret Key","sk_live_***"],["Stripe Webhook Secret","whsec_***"],["PayTabs Profile ID",""],["PayTabs Server Key",""],["COD Max Order (AED)","1000"]].map(([label, val]) => (
              <div key={label}>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
                <input defaultValue={val} type={label.includes("Key") || label.includes("Secret") ? "password" : "text"} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            ))}
          </div>
        </div>

        {/* Shipping settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">Shipping</h2>
          <div className="space-y-4">
            {[["Free Shipping Threshold (AED)","500"],["DHL API Key",""],["Aramex Account Number",""],["Warehouse City","Dubai"],["Warehouse Country Code","AE"]].map(([label, val]) => (
              <div key={label}>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
                <input defaultValue={val} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            ))}
          </div>
        </div>

        {/* Email settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">Email (Resend)</h2>
          <div className="space-y-4">
            {[["Resend API Key",""],["From Email","orders@apmart.ae"],["From Name","APMART.AE"]].map(([label, val]) => (
              <div key={label}>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
                <input defaultValue={val} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="mt-6 bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-8 py-3 rounded-xl transition-colors">
        Save All Settings
      </button>
    </div>
  );
}
