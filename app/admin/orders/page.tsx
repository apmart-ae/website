import { Search, Filter, Eye, RefreshCcw } from "lucide-react";
import Link from "next/link";

const ORDERS = [
  { id: "APM-2026-000247", customer: "Ahmed Al Mansouri", email: "ahmed@email.com", total: 4699, items: 1, status: "PAID",       method: "Stripe",  date: "06 Jun 2026" },
  { id: "APM-2026-000246", customer: "Sarah Johnson",     email: "sarah@email.com", total: 3999, items: 1, status: "PROCESSING", method: "PayTabs", date: "06 Jun 2026" },
  { id: "APM-2026-000245", customer: "Raj Patel",         email: "raj@email.com",   total: 8499, items: 2, status: "SHIPPED",    method: "Stripe",  date: "05 Jun 2026" },
  { id: "APM-2026-000244", customer: "Fatima Al Zaabi",   email: "fatima@email.com",total: 1299, items: 1, status: "DELIVERED",  method: "COD",     date: "03 Jun 2026" },
  { id: "APM-2026-000243", customer: "John Smith",        email: "john@email.com",  total: 5199, items: 1, status: "CANCELLED",  method: "Stripe",  date: "01 Jun 2026" },
];

const STATUS_COLORS: Record<string, string> = {
  PENDING:    "text-gray-600 bg-gray-100",
  PAID:       "text-green-600 bg-green-50",
  PROCESSING: "text-blue-600 bg-blue-50",
  SHIPPED:    "text-[#3D52A0] bg-[#EDE8F5]",
  DELIVERED:  "text-green-700 bg-green-100",
  CANCELLED:  "text-red-600 bg-red-50",
  REFUNDED:   "text-orange-600 bg-orange-50",
};

const STATUSES = ["All", "PENDING", "PAID", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED", "REFUNDED"];

export default function AdminOrdersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Orders</h1>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1 max-w-sm">
          <Search size={15} className="text-gray-400" />
          <input placeholder="Search order ID, customer…" className="text-sm outline-none flex-1" />
        </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
          {STATUSES.map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
          <option>All payment methods</option>
          <option>Stripe</option>
          <option>PayTabs</option>
          <option>COD</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3 text-left">Order</th>
                <th className="px-5 py-3 text-left">Customer</th>
                <th className="px-5 py-3 text-left">Total</th>
                <th className="px-5 py-3 text-left">Payment</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ORDERS.map(o => (
                <tr key={o.id} className="hover:bg-[#F7F8FC]">
                  <td className="px-5 py-3.5 font-medium text-[#3D52A0]">{o.id}</td>
                  <td className="px-5 py-3.5">
                    <p className="text-gray-800 font-medium">{o.customer}</p>
                    <p className="text-xs text-gray-400">{o.email}</p>
                  </td>
                  <td className="px-5 py-3.5 font-semibold">AED {o.total.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-gray-600 text-xs">{o.method}</td>
                  <td className="px-5 py-3.5">
                    <select className={`text-xs font-semibold px-2.5 py-1 rounded-full border-0 outline-none cursor-pointer ${STATUS_COLORS[o.status] ?? ""}`} defaultValue={o.status}>
                      {["PENDING","PAID","PROCESSING","SHIPPED","DELIVERED","CANCELLED","REFUNDED"].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{o.date}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg transition-colors" title="View order">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" title="Refund">
                        <RefreshCcw size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
