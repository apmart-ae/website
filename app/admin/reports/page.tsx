import { TrendingUp, ShoppingBag, Users, BarChart2, Download } from "lucide-react";

const MONTHLY = [
  { month: "Jan", revenue: 142000, orders: 198 },
  { month: "Feb", revenue: 158000, orders: 215 },
  { month: "Mar", revenue: 175000, orders: 240 },
  { month: "Apr", revenue: 169000, orders: 228 },
  { month: "May", revenue: 184000, orders: 247 },
  { month: "Jun", revenue: 201000, orders: 263, partial: true },
];

const TOP_PRODUCTS = [
  { title: "Apple iPhone 17 Pro",       revenue: 94700, units: 19, category: "Smartphones" },
  { title: "Samsung Galaxy S25 Ultra",  revenue: 83900, units: 21, category: "Smartphones" },
  { title: 'MacBook Pro 14" M4 Pro',    revenue: 67900, units:  8, category: "Laptops"     },
  { title: "Apple Watch Ultra 2",       revenue: 45500, units: 12, category: "Wearables"   },
  { title: "Dell XPS 15",               revenue: 36400, units:  5, category: "Laptops"     },
];

export default function AdminReportsPage() {
  const maxRev = Math.max(...MONTHLY.map(m => m.revenue));
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Reports</h1>
        <button className="flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50">
          <Download size={15} /> Export CSV
        </button>
      </div>

      {/* Revenue bar chart */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-gray-700 mb-5 flex items-center gap-2"><TrendingUp size={16} className="text-[#3D52A0]" /> Monthly Revenue (AED)</h2>
        <div className="flex items-end gap-3 h-40">
          {MONTHLY.map(m => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
              <p className="text-[10px] font-bold text-[#3D52A0]">{(m.revenue / 1000).toFixed(0)}k</p>
              <div
                className={`w-full rounded-t-lg ${m.partial ? "bg-[#ADBBDA]" : "bg-[#3D52A0]"}`}
                style={{ height: `${(m.revenue / maxRev) * 100}%` }}
              />
              <p className="text-[10px] text-gray-500">{m.month}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">* Jun 2026 is partial month</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top products */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 flex items-center gap-2"><ShoppingBag size={15} className="text-[#3D52A0]" /> Top Products by Revenue</h2>
          <div className="space-y-3">
            {TOP_PRODUCTS.map((p, i) => (
              <div key={p.title} className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 w-4">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-800 truncate">{p.title}</p>
                  <p className="text-[11px] text-gray-400">{p.units} units · {p.category}</p>
                </div>
                <p className="text-xs font-bold text-[#3D52A0] shrink-0">AED {(p.revenue / 1000).toFixed(1)}k</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 flex items-center gap-2"><BarChart2 size={15} className="text-[#3D52A0]" /> Revenue by Category</h2>
          <div className="space-y-3">
            {[
              { label: "Smartphones", pct: 48, color: "#3D52A0" },
              { label: "Laptops",     pct: 28, color: "#7091E6" },
              { label: "Wearables",   pct: 14, color: "#8697C4" },
              { label: "Appliances",  pct: 6,  color: "#ADBBDA" },
              { label: "Other",       pct: 4,  color: "#EDE8F5" },
            ].map(c => (
              <div key={c.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600 font-medium">{c.label}</span>
                  <span className="font-bold" style={{ color: c.color }}>{c.pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 rounded-full" style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
