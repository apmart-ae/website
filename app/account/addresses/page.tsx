"use client";
import { useState } from "react";
import { Plus, Edit, Trash2, MapPin } from "lucide-react";

const ADDRESSES = [
  {
    id: "1",
    label: "Home",
    name: "Ahmed Al Mansouri",
    line1: "Villa 12, Street 5, Jumeirah 1",
    line2: "",
    city: "Dubai",
    emirate: "Dubai",
    country: "UAE",
    phone: "+971 50 111 2233",
    isDefault: true,
  },
  {
    id: "2",
    label: "Office",
    name: "Ahmed Al Mansouri",
    line1: "Office 801, Business Bay Tower",
    line2: "Business Bay",
    city: "Dubai",
    emirate: "Dubai",
    country: "UAE",
    phone: "+971 4 200 0000",
    isDefault: false,
  },
];

const EMIRATES = ["Abu Dhabi","Dubai","Sharjah","Ajman","Umm Al Quwain","Ras Al Khaimah","Fujairah"];

export default function AccountAddressesPage() {
  const [addresses, setAddresses] = useState(ADDRESSES);
  const [showForm, setShowForm] = useState(false);

  const remove = (id: string) => setAddresses(as => as.filter(a => a.id !== id));
  const setDefault = (id: string) => setAddresses(as => as.map(a => ({ ...a, isDefault: a.id === id })));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Saved Addresses</h1>
        <button
          onClick={() => setShowForm(v => !v)}
          className="flex items-center gap-2 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={15} /> Add Address
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">New Address</h2>
          <div className="grid grid-cols-2 gap-4">
            {[["Label","text","e.g. Home, Office"],["Full Name","text",""],["Phone","tel",""],["Address Line 1","text",""],["Address Line 2","text","(optional)"],["City","text",""]].map(([label, type, placeholder]) => (
              <div key={label}>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
                <input type={type} placeholder={placeholder as string} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]" />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Emirate</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
                {EMIRATES.map(e => <option key={e}>{e}</option>)}
              </select>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 mt-4 cursor-pointer">
            <input type="checkbox" className="accent-[#3D52A0]" />
            Set as default address
          </label>
          <div className="flex gap-3 mt-4">
            <button className="bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors">
              Save Address
            </button>
            <button onClick={() => setShowForm(false)} className="border border-gray-200 text-gray-600 text-sm px-6 py-2.5 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {addresses.map(a => (
          <div key={a.id} className={`bg-white rounded-2xl border p-5 ${a.isDefault ? "border-[#3D52A0]" : "border-gray-100"}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#3D52A0]" />
                <span className="font-bold text-sm text-gray-800">{a.label}</span>
                {a.isDefault && (
                  <span className="text-[11px] font-semibold text-[#3D52A0] bg-[#EDE8F5] px-2 py-0.5 rounded-full">Default</span>
                )}
              </div>
              <div className="flex gap-1.5">
                <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg">
                  <Edit size={13} />
                </button>
                <button onClick={() => remove(a.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{a.name}</p>
            <p className="text-sm text-gray-500 mt-0.5">{a.line1}</p>
            {a.line2 && <p className="text-sm text-gray-500">{a.line2}</p>}
            <p className="text-sm text-gray-500">{a.city}, {a.emirate}, {a.country}</p>
            <p className="text-sm text-gray-500 mt-0.5">{a.phone}</p>
            {!a.isDefault && (
              <button
                onClick={() => setDefault(a.id)}
                className="mt-3 text-xs text-[#3D52A0] font-semibold hover:underline"
              >
                Set as default
              </button>
            )}
          </div>
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <MapPin size={32} className="mx-auto mb-3 text-[#ADBBDA]" />
          <p>No saved addresses yet.</p>
        </div>
      )}
    </div>
  );
}
