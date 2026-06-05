import { Search, Eye, Ban } from "lucide-react";

const CUSTOMERS = [
  { id: "1", name: "Ahmed Al Mansouri", email: "ahmed@email.com",  phone: "+971 50 111 2233", orders: 12, spent: 48200, plan: "regular", joined: "Jan 2026" },
  { id: "2", name: "Sarah Johnson",     email: "sarah@email.com",  phone: "+971 55 222 3344", orders: 5,  spent: 18750, plan: "regular", joined: "Feb 2026" },
  { id: "3", name: "Raj Patel",         email: "raj@email.com",    phone: "+971 50 333 4455", orders: 23, spent: 92100, plan: "vip",     joined: "Oct 2025" },
  { id: "4", name: "Fatima Al Zaabi",   email: "fatima@email.com", phone: "+971 56 444 5566", orders: 8,  spent: 25400, plan: "regular", joined: "Mar 2026" },
];

export default function AdminCustomersPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">Customers</h1>
      <div className="flex gap-3 mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1 max-w-sm">
          <Search size={15} className="text-gray-400" />
          <input placeholder="Search by name, email, phone…" className="text-sm outline-none flex-1" />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-5 py-3 text-left">Customer</th>
              <th className="px-5 py-3 text-left">Phone</th>
              <th className="px-5 py-3 text-left">Orders</th>
              <th className="px-5 py-3 text-left">Total Spent</th>
              <th className="px-5 py-3 text-left">Segment</th>
              <th className="px-5 py-3 text-left">Joined</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {CUSTOMERS.map(c => (
              <tr key={c.id} className="hover:bg-[#F7F8FC]">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.email}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-600 text-xs">{c.phone}</td>
                <td className="px-5 py-3.5 font-semibold text-gray-700">{c.orders}</td>
                <td className="px-5 py-3.5 font-bold text-[#3D52A0]">AED {c.spent.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.plan === "vip" ? "text-amber-700 bg-amber-100" : "text-gray-600 bg-gray-100"}`}>
                    {c.plan === "vip" ? "VIP" : "Regular"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-gray-500 text-xs">{c.joined}</td>
                <td className="px-5 py-3.5 flex gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg"><Eye size={14} /></button>
                  <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Ban size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
