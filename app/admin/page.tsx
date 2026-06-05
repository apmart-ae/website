import { TrendingUp, ShoppingBag, Users, Package, ArrowUpRight } from "lucide-react";

const KPI_CARDS = [
  { label: "Revenue (MTD)",    value: "AED 184,230", change: "+18%", Icon: TrendingUp,  color: "bg-[#EDE8F5] text-[#3D52A0]" },
  { label: "Orders (MTD)",     value: "247",          change: "+12%", Icon: ShoppingBag, color: "bg-blue-50    text-blue-600"  },
  { label: "New Customers",    value: "89",           change: "+9%",  Icon: Users,       color: "bg-green-50   text-green-600" },
  { label: "Products Active",  value: "1,248",        change: "+5",   Icon: Package,     color: "bg-amber-50   text-amber-600" },
];

const RECENT_ORDERS = [
  { id: "APM-2026-000247", customer: "Ahmed Al Mansouri", total: "AED 4,699", status: "PAID",       date: "Today 14:32" },
  { id: "APM-2026-000246", customer: "Sarah Johnson",     total: "AED 3,999", status: "PROCESSING", date: "Today 11:15" },
  { id: "APM-2026-000245", customer: "Raj Patel",         total: "AED 8,499", status: "SHIPPED",    date: "Yesterday"   },
  { id: "APM-2026-000244", customer: "Fatima Al Zaabi",   total: "AED 1,299", status: "DELIVERED",  date: "Jun 3"       },
];

const STATUS_COLORS: Record<string, string> = {
  PAID:        "text-green-600 bg-green-50",
  PROCESSING:  "text-blue-600 bg-blue-50",
  SHIPPED:     "text-[#3D52A0] bg-[#EDE8F5]",
  DELIVERED:   "text-green-700 bg-green-100",
  CANCELLED:   "text-red-600 bg-red-50",
};

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {KPI_CARDS.map(({ label, value, change, Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-semibold text-green-600">
                <ArrowUpRight size={13} />{change}
              </span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
          <h2 className="font-bold text-gray-700 text-sm">Recent Orders</h2>
          <a href="/admin/orders" className="text-xs text-[#7091E6] font-semibold hover:underline">View All →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3 text-left">Order</th>
                <th className="px-5 py-3 text-left">Customer</th>
                <th className="px-5 py-3 text-left">Total</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {RECENT_ORDERS.map(order => (
                <tr key={order.id} className="hover:bg-[#F7F8FC] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#3D52A0]">{order.id}</td>
                  <td className="px-5 py-3.5 text-gray-700">{order.customer}</td>
                  <td className="px-5 py-3.5 font-semibold">{order.total}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[order.status] ?? ""}`}>{order.status}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
