import { Package, Truck, CheckCircle, Clock, XCircle } from "lucide-react";
import Link from "next/link";

const STATUS_MAP: Record<string, { label: string; color: string; Icon: any }> = {
  PAID:        { label: "Paid",       color: "text-green-600  bg-green-50",   Icon: CheckCircle },
  PROCESSING:  { label: "Processing", color: "text-blue-600   bg-blue-50",    Icon: Clock       },
  SHIPPED:     { label: "Shipped",    color: "text-[#3D52A0]  bg-[#EDE8F5]",  Icon: Truck       },
  DELIVERED:   { label: "Delivered",  color: "text-green-700  bg-green-100",  Icon: CheckCircle },
  CANCELLED:   { label: "Cancelled",  color: "text-red-600    bg-red-50",     Icon: XCircle     },
};

const DEMO_ORDERS = [
  { id: "APM-2026-000012", status: "SHIPPED", date: "2026-06-01", total: 4699, items: 1, product: "Apple iPhone 17 Pro – Natural Titanium 256GB" },
  { id: "APM-2026-000009", status: "DELIVERED", date: "2026-05-25", total: 3999, items: 1, product: "Samsung Galaxy S25 Ultra 5G – 256GB" },
  { id: "APM-2026-000003", status: "PROCESSING", date: "2026-05-10", total: 8499, items: 2, product: "MacBook Pro 14\" M4 + Apple Watch Ultra 2" },
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#3D52A0] mb-6">My Orders</h1>
      {DEMO_ORDERS.length === 0 ? (
        <div className="text-center py-16">
          <Package size={48} className="text-[#ADBBDA] mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {DEMO_ORDERS.map(order => {
            const { label, color, Icon } = STATUS_MAP[order.status] ?? STATUS_MAP.PROCESSING;
            return (
              <div key={order.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-bold text-sm text-gray-800">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</p>
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>
                    <Icon size={12} /> {label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-1">{order.product}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[#3D52A0]">AED {order.total.toLocaleString()}</p>
                  <Link href={`/account/orders/${order.id}`} className="text-xs text-[#7091E6] font-semibold hover:underline">
                    View Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
