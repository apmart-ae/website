import { Plus, Search, Edit, Trash2, Upload } from "lucide-react";
import Link from "next/link";

const DEMO_PRODUCTS = [
  { id: "1", title: "Samsung Galaxy S25 Ultra 5G", brand: "Samsung", category: "Smartphones", price: "AED 3,999", stock: 24, status: "Active" },
  { id: "2", title: "Apple iPhone 17 Pro", brand: "Apple", category: "Smartphones", price: "AED 4,699", stock: 30, status: "Active" },
  { id: "3", title: 'Apple MacBook Pro 14" M4 Pro', brand: "Apple", category: "Laptops", price: "AED 8,499", stock: 10, status: "Active" },
  { id: "4", title: "Dell XPS 15", brand: "Dell", category: "Laptops", price: "AED 7,299", stock: 8, status: "Active" },
  { id: "5", title: "Apple Watch Ultra 2", brand: "Apple", category: "Smart Watches", price: "AED 3,799", stock: 20, status: "Active" },
];

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Products</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50">
            <Upload size={15} /> Import CSV
          </button>
          <Link href="/admin/products/new" className="flex items-center gap-2 bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
            <Plus size={15} /> Add Product
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1 max-w-sm">
          <Search size={15} className="text-gray-400" />
          <input placeholder="Search products…" className="text-sm outline-none flex-1" />
        </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
          <option>All Categories</option>
          <option>Smartphones</option>
          <option>Laptops</option>
          <option>Smart Watches</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0]">
          <option>All Brands</option>
          <option>Apple</option>
          <option>Samsung</option>
          <option>Dell</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F7F8FC] text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-5 py-3 text-left">Product</th>
              <th className="px-5 py-3 text-left">Brand</th>
              <th className="px-5 py-3 text-left">Category</th>
              <th className="px-5 py-3 text-left">Price</th>
              <th className="px-5 py-3 text-left">Stock</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {DEMO_PRODUCTS.map(p => (
              <tr key={p.id} className="hover:bg-[#F7F8FC]">
                <td className="px-5 py-3.5 font-medium text-gray-800 max-w-[240px] truncate">{p.title}</td>
                <td className="px-5 py-3.5 text-gray-600">{p.brand}</td>
                <td className="px-5 py-3.5 text-gray-600">{p.category}</td>
                <td className="px-5 py-3.5 font-semibold text-[#3D52A0]">{p.price}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold ${p.stock < 5 ? "text-red-600" : p.stock < 15 ? "text-amber-600" : "text-green-600"}`}>
                    {p.stock} units
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-green-600 bg-green-50">{p.status}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/products/${p.id}`} className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg transition-colors">
                      <Edit size={14} />
                    </Link>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
