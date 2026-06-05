"use client";
import { useState } from "react";
import { Plus, Trash2, Upload } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  const [variants, setVariants] = useState([{ sku: "", color: "", storage: "", ram: "", price: "", compareAt: "", stock: "" }]);

  const addVariant = () => setVariants(v => [...v, { sku: "", color: "", storage: "", ram: "", price: "", compareAt: "", stock: "" }]);
  const removeVariant = (i: number) => setVariants(v => v.filter((_, j) => j !== i));

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/products" className="text-sm text-[#7091E6] hover:underline">← Products</Link>
        <span className="text-gray-400">/</span>
        <h1 className="text-xl font-bold text-gray-800">New Product</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Basic info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-700 mb-4 text-sm">Product Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Title *</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" placeholder="e.g. Samsung Galaxy S25 Ultra 5G" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Slug *</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0] font-mono" placeholder="samsung-galaxy-s25-ultra" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Description</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0] resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Brand *</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                    <option>Select brand…</option>
                    {["Apple","Samsung","Huawei","Dell","ASUS","Microsoft","Sony","Nothing","Xiaomi","HP"].map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Category *</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                    <option>Select category…</option>
                    {["Smartphones","Tablets","Smart Watches","Laptops","Monitors","Appliances","Gaming","Photography"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-700 mb-4 text-sm">Product Images</h2>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#3D52A0] transition-colors cursor-pointer">
              <Upload size={28} className="text-[#ADBBDA] mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">Drop images here or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB each</p>
            </div>
          </div>

          {/* Variants */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-700 text-sm">Variants</h2>
              <button onClick={addVariant} className="flex items-center gap-1.5 text-xs text-[#7091E6] font-semibold hover:underline">
                <Plus size={13} /> Add Variant
              </button>
            </div>
            <div className="space-y-4">
              {variants.map((v, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 relative">
                  {variants.length > 1 && (
                    <button onClick={() => removeVariant(i)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[["SKU *","sku"], ["Color","color"], ["Storage","storage"], ["RAM","ram"], ["Price (AED) *","price"], ["Compare At (AED)","compareAt"], ["Stock *","stock"]].map(([label, field]) => (
                      <div key={field}>
                        <label className="text-[11px] font-semibold text-gray-500 block mb-1">{label}</label>
                        <input className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs outline-none focus:border-[#3D52A0]" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="font-bold text-gray-700 mb-4 text-sm">Status</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[#3D52A0]" />
                Active (visible in store)
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="accent-[#3D52A0]" />
                Featured on homepage
              </label>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="font-bold text-gray-700 mb-4 text-sm">Attributes (for filters)</h2>
            <div className="space-y-3">
              {["screenSize", "sim", "camera", "os"].map(attr => (
                <div key={attr}>
                  <label className="text-xs font-semibold text-gray-500 block mb-1 capitalize">{attr.replace(/([A-Z])/g, ' $1')}</label>
                  <input className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs outline-none focus:border-[#3D52A0]" />
                </div>
              ))}
            </div>
          </div>
          <button className="w-full bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold py-3 rounded-xl transition-colors">
            Save Product
          </button>
          <Link href="/admin/products" className="block w-full text-center text-sm text-gray-500 hover:text-gray-700">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
