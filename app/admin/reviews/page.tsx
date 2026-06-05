"use client";
import { useState } from "react";
import { Star, Check, Trash2, Eye } from "lucide-react";

const REVIEWS = [
  { id: "1", product: "Apple iPhone 17 Pro", customer: "Ahmed Al Mansouri", rating: 5, body: "Incredible camera upgrades. The periscope telephoto is insane. Best iPhone ever.", approved: true,  date: "01 Jun 2026" },
  { id: "2", product: "Samsung Galaxy S25 Ultra", customer: "Raj Patel", rating: 4, body: "Great device, slightly too big for one-hand use but the S-Pen is handy for notes.", approved: true,  date: "29 May 2026" },
  { id: "3", product: "MacBook Pro 14\" M4 Pro", customer: "Sarah Johnson", rating: 5, body: "Unreal battery life. 12+ hours of real work. Fast, silent, beautiful display.", approved: false, date: "27 May 2026" },
  { id: "4", product: "Apple Watch Ultra 2", customer: "Fatima Al Zaabi", rating: 3, body: "Good watch but very bulky for daily wear. Great for sports though.", approved: false, date: "25 May 2026" },
  { id: "5", product: "Dell XPS 15", customer: "Omar Khalid", rating: 4, body: "Fast for work. Gets a bit warm during heavy use but nothing alarming.", approved: true,  date: "22 May 2026" },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={12} className={i <= n ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </span>
  );
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(REVIEWS);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

  const approve = (id: string) => setReviews(rs => rs.map(r => r.id === id ? { ...r, approved: true } : r));
  const remove  = (id: string) => setReviews(rs => rs.filter(r => r.id !== id));

  const visible = reviews.filter(r =>
    filter === "all" ? true : filter === "pending" ? !r.approved : r.approved
  );

  const pending  = reviews.filter(r => !r.approved).length;
  const approved = reviews.filter(r =>  r.approved).length;

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">Reviews</h1>

      <div className="flex gap-3 mb-5">
        {(["all", "pending", "approved"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors capitalize ${
              filter === f
                ? "bg-[#3D52A0] text-white border-[#3D52A0]"
                : "border-gray-200 text-gray-600 hover:border-[#3D52A0]"
            }`}
          >
            {f === "all" ? `All (${reviews.length})` : f === "pending" ? `Pending (${pending})` : `Approved (${approved})`}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {visible.map(r => (
          <div key={r.id} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <Stars n={r.rating} />
                  <span className="text-xs font-bold text-gray-800">{r.customer}</span>
                  <span className="text-xs text-gray-400">on</span>
                  <span className="text-xs font-medium text-[#3D52A0] truncate">{r.product}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {!r.approved && (
                  <button
                    onClick={() => approve(r.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Check size={13} /> Approve
                  </button>
                )}
                {r.approved && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                    <Check size={11} /> Approved
                  </span>
                )}
                <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg">
                  <Eye size={14} />
                </button>
                <button
                  onClick={() => remove(r.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {visible.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">No reviews in this filter.</div>
        )}
      </div>
    </div>
  );
}
