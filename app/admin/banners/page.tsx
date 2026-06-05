"use client";
import { useState } from "react";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";

const BANNERS = [
  { id: "1", title: "iPhone 17 Pro Launch",     image: "/banners/iphone17.jpg",  link: "/category/smartphones", position: "hero",    active: true,  order: 1 },
  { id: "2", title: "Summer Sale — Up to 40%",  image: "/banners/summer.jpg",    link: "/category/laptops",     position: "hero",    active: true,  order: 2 },
  { id: "3", title: "MacBook Pro M4",            image: "/banners/macbook.jpg",   link: "/product/macbook-pro-14-m4-pro", position: "hero", active: true, order: 3 },
  { id: "4", title: "Promo Strip — Free Ship",   image: "",                       link: "/category/appliances",  position: "promo",   active: true,  order: 1 },
  { id: "5", title: "Wearables Banner",          image: "/banners/watch.jpg",     link: "/category/smart-watches", position: "mid",   active: false, order: 1 },
];

const POSITIONS = ["hero", "promo", "mid", "sidebar"];

export default function AdminBannersPage() {
  const [showForm, setShowForm] = useState(false);
  const [banners, setBanners] = useState(BANNERS);

  const toggle = (id: string) =>
    setBanners(bs => bs.map(b => b.id === id ? { ...b, active: !b.active } : b));
  const remove = (id: string) =>
    setBanners(bs => bs.filter(b => b.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Banners</h1>
        <button
          onClick={() => setShowForm(v => !v)}
          className="flex items-center gap-2 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={15} /> New Banner
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <h2 className="font-bold text-gray-700 mb-4">New Banner</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Title</label>
              <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" placeholder="e.g. Summer Sale" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Image URL</label>
              <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" placeholder="/banners/example.jpg" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Link</label>
              <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" placeholder="/category/smartphones" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Position</label>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                {POSITIONS.map(p => <option key={p} className="capitalize">{p}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Sort Order</label>
              <input type="number" defaultValue={1} className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
            </div>
          </div>
          <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#3D52A0] cursor-pointer transition-colors">
            <p className="text-sm text-gray-500">Drop banner image here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">Recommended: 1440×540 px, max 2 MB</p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors">
              Save Banner
            </button>
            <button onClick={() => setShowForm(false)} className="border border-gray-200 text-gray-600 text-sm px-6 py-2.5 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-5 py-3 text-left">Preview</th>
              <th className="px-5 py-3 text-left">Title</th>
              <th className="px-5 py-3 text-left">Position</th>
              <th className="px-5 py-3 text-left">Link</th>
              <th className="px-5 py-3 text-left">Order</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {banners.map(b => (
              <tr key={b.id} className="hover:bg-[#F7F8FC]">
                <td className="px-5 py-3.5">
                  <div className="w-20 h-12 bg-[#EDE8F5] rounded-lg flex items-center justify-center overflow-hidden">
                    {b.image ? (
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] text-[#8697C4]">No image</span>
                    )}
                  </div>
                </td>
                <td className="px-5 py-3.5 font-medium text-gray-800">{b.title}</td>
                <td className="px-5 py-3.5">
                  <span className="capitalize text-xs font-semibold bg-[#EDE8F5] text-[#3D52A0] px-2 py-1 rounded">{b.position}</span>
                </td>
                <td className="px-5 py-3.5 text-[#7091E6] text-xs font-mono">{b.link}</td>
                <td className="px-5 py-3.5 text-gray-600">{b.order}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${b.active ? "text-green-600 bg-green-50" : "text-gray-400 bg-gray-100"}`}>
                    {b.active ? "Active" : "Hidden"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggle(b.id)}
                      className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg"
                      title={b.active ? "Hide" : "Show"}
                    >
                      {b.active ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <button
                      onClick={() => remove(b.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
