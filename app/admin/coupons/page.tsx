"use client";
import { useState } from "react";
import { Plus, Edit, Trash2, Copy } from "lucide-react";

const COUPONS = [
  { id: "1", code: "WELCOME20", type: "percent", value: 20, minOrder: 200,  uses: 45,  maxUses: 100, active: true,  expires: "31 Dec 2026" },
  { id: "2", code: "SAVE100",   type: "fixed",   value: 100, minOrder: 500, uses: 12,  maxUses: 50,  active: true,  expires: "30 Jun 2026" },
  { id: "3", code: "FLASH50",   type: "percent", value: 50, minOrder: 1000, uses: 200, maxUses: 200, active: false, expires: "01 Jun 2026" },
];

export default function AdminCouponsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Coupons</h1>
        <button onClick={() => setShowForm(v => !v)} className="flex items-center gap-2 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
          <Plus size={15} /> New Coupon
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <h2 className="font-bold text-gray-700 mb-4">New Coupon</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[["Code","text","e.g. SUMMER20"], ["Type","select",""], ["Value","number",""], ["Min Order (AED)","number",""], ["Max Uses","number",""], ["Expires","date",""]].map(([label, type]) => (
              <div key={label} className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500">{label}</label>
                {type === "select" ? (
                  <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                    <option value="percent">Percentage (%)</option>
                    <option value="fixed">Fixed (AED)</option>
                  </select>
                ) : (
                  <input type={type} className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <button className="bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors">Save Coupon</button>
            <button onClick={() => setShowForm(false)} className="border border-gray-200 text-gray-600 text-sm px-6 py-2.5 rounded-lg hover:bg-gray-50">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-5 py-3 text-left">Code</th>
              <th className="px-5 py-3 text-left">Type</th>
              <th className="px-5 py-3 text-left">Value</th>
              <th className="px-5 py-3 text-left">Min Order</th>
              <th className="px-5 py-3 text-left">Usage</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Expires</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {COUPONS.map(c => (
              <tr key={c.id} className="hover:bg-[#F7F8FC]">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#3D52A0] text-xs bg-[#EDE8F5] px-2 py-1 rounded">{c.code}</span>
                    <button className="text-gray-400 hover:text-[#3D52A0]"><Copy size={12} /></button>
                  </div>
                </td>
                <td className="px-5 py-3.5 capitalize text-gray-600">{c.type}</td>
                <td className="px-5 py-3.5 font-semibold">{c.type === "percent" ? `${c.value}%` : `AED ${c.value}`}</td>
                <td className="px-5 py-3.5 text-gray-600">AED {c.minOrder}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5 w-20">
                      <div className="bg-[#3D52A0] h-1.5 rounded-full" style={{ width: `${Math.min(100, (c.uses / (c.maxUses || 1)) * 100)}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">{c.uses}/{c.maxUses}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.active ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                    {c.active ? "Active" : "Expired"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-gray-500 text-xs">{c.expires}</td>
                <td className="px-5 py-3.5 flex gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg"><Edit size={14} /></button>
                  <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
