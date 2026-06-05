"use client";
import { useState } from "react";
import { Star, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const MY_REVIEWS = [
  { id: "1", product: "Apple iPhone 17 Pro", slug: "apple-iphone-17-pro", rating: 5, body: "Incredible camera upgrades. The periscope telephoto is insane. Best iPhone ever.", date: "01 Jun 2026", approved: true },
  { id: "2", product: "Samsung Galaxy S25 Ultra", slug: "samsung-galaxy-s25-ultra", rating: 4, body: "Great device, slightly too big for one-hand use but the S-Pen is handy for notes.", date: "29 May 2026", approved: true },
];

const UNREVIEWED = [
  { id: "o3", product: "Apple Watch Ultra 2", slug: "apple-watch-ultra-2", orderId: "APM-1003" },
  { id: "o4", product: "MacBook Pro 14\" M4 Pro", slug: "macbook-pro-14-m4-pro", orderId: "APM-1004" },
];

function Stars({ n, size = 14 }: { n: number; size?: number }) {
  return (
    <span className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={size} className={i <= n ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </span>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <span className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
        >
          <Star size={20} className={(hover || value) >= i ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
        </button>
      ))}
    </span>
  );
}

export default function AccountReviewsPage() {
  const [reviews, setReviews] = useState(MY_REVIEWS);
  const [writing, setWriting] = useState<string | null>(null);
  const [draft, setDraft] = useState({ rating: 0, body: "" });

  const remove = (id: string) => setReviews(rs => rs.filter(r => r.id !== id));
  const submit = (item: typeof UNREVIEWED[0]) => {
    if (!draft.rating) return;
    setReviews(rs => [...rs, { id: item.id, product: item.product, slug: item.slug, rating: draft.rating, body: draft.body, date: "Today", approved: false }]);
    setWriting(null);
    setDraft({ rating: 0, body: "" });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-6">My Reviews</h1>

      {reviews.length > 0 && (
        <div className="space-y-4 mb-8">
          <h2 className="font-bold text-gray-600 text-sm">Published Reviews</h2>
          {reviews.map(r => (
            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <Link href={`/product/${r.slug}`} className="text-sm font-bold text-gray-800 hover:text-[#3D52A0]">{r.product}</Link>
                  <div className="flex items-center gap-3 mt-1">
                    <Stars n={r.rating} />
                    <span className="text-xs text-gray-400">{r.date}</span>
                    {r.approved ? (
                      <span className="text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Approved</span>
                    ) : (
                      <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Pending</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{r.body}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button className="p-1.5 text-gray-400 hover:text-[#3D52A0] hover:bg-[#EDE8F5] rounded-lg"><Edit size={13} /></button>
                  <button onClick={() => remove(r.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={13} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {UNREVIEWED.filter(u => !reviews.find(r => r.id === u.id)).length > 0 && (
        <div>
          <h2 className="font-bold text-gray-600 text-sm mb-3">Items Awaiting Your Review</h2>
          <div className="space-y-3">
            {UNREVIEWED.filter(u => !reviews.find(r => r.id === u.id)).map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                {writing === item.id ? (
                  <div>
                    <p className="font-bold text-sm text-gray-800 mb-3">{item.product}</p>
                    <div className="mb-3">
                      <label className="text-xs font-semibold text-gray-500 block mb-1">Your Rating *</label>
                      <StarPicker value={draft.rating} onChange={n => setDraft(d => ({ ...d, rating: n }))} />
                    </div>
                    <div className="mb-4">
                      <label className="text-xs font-semibold text-gray-500 block mb-1">Review</label>
                      <textarea
                        rows={3}
                        value={draft.body}
                        onChange={e => setDraft(d => ({ ...d, body: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#3D52A0] resize-none"
                        placeholder="Share your experience…"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => submit(item)} className="bg-[#3D52A0] hover:bg-[#7091E6] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
                        Submit Review
                      </button>
                      <button onClick={() => setWriting(null)} className="border border-gray-200 text-gray-600 text-sm px-5 py-2 rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href={`/product/${item.slug}`} className="text-sm font-bold text-gray-800 hover:text-[#3D52A0]">{item.product}</Link>
                      <p className="text-xs text-gray-400 mt-0.5">Order {item.orderId}</p>
                    </div>
                    <button
                      onClick={() => { setWriting(item.id); setDraft({ rating: 0, body: "" }); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#3D52A0] bg-[#EDE8F5] hover:bg-[#ADBBDA] px-3 py-2 rounded-lg transition-colors"
                    >
                      <Star size={13} /> Write Review
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {reviews.length === 0 && UNREVIEWED.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Star size={36} className="mx-auto text-[#ADBBDA] mb-3" />
          <p>No reviews yet. Purchase a product to leave a review.</p>
        </div>
      )}
    </div>
  );
}
