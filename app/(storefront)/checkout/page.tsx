"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatAed } from "@/lib/utils";
import { VAT_RATE, FREE_SHIPPING_THRESHOLD, COD_MAX_AED } from "@/lib/constants";
import { CreditCard, Truck, CheckCircle, ChevronRight } from "lucide-react";

type Step = "address" | "shipping" | "payment" | "review";

export default function CheckoutPage() {
  const { items, total, count, clear } = useCart();
  const [step, setStep] = useState<Step>("address");
  const [shippingMethod, setShippingMethod] = useState("dhl-express");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [ordered, setOrdered] = useState(false);

  const subtotal = total();
  const shippingAed = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 35;
  const vat = Math.round((subtotal + shippingAed) * VAT_RATE);
  const grandTotal = subtotal + shippingAed + vat;
  const codEligible = grandTotal < COD_MAX_AED;

  const STEPS: Step[] = ["address", "shipping", "payment", "review"];

  if (ordered) {
    return (
      <div className="mx-auto max-w-[600px] px-4 py-16 text-center">
        <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
        <p className="text-sm text-gray-500 mb-6">Thank you for your order. You'll receive a confirmation email shortly.</p>
        <a href="/" className="bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-8 py-3 rounded-xl transition-colors inline-block">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2 shrink-0">
            <div className={`flex items-center gap-2 ${STEPS.indexOf(step) >= i ? "text-[#3D52A0]" : "text-gray-400"}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${STEPS.indexOf(step) >= i ? "border-[#3D52A0] bg-[#3D52A0] text-white" : "border-gray-300"}`}>{i + 1}</div>
              <span className="text-sm font-medium capitalize">{s}</span>
            </div>
            {i < STEPS.length - 1 && <ChevronRight size={16} className="text-gray-300" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form area */}
        <div className="lg:col-span-2">
          {/* Address */}
          {step === "address" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-[#3D52A0] mb-5 flex items-center gap-2"><Truck size={18} /> Delivery Address</h2>
              <div className="grid grid-cols-2 gap-4">
                {[["Full Name","text",""], ["Phone",  "tel",""], ["Email","email",""], ["Company (optional)","text",""]].map(([label, type]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600">{label}</label>
                    <input type={type} className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                  </div>
                ))}
                <div className="col-span-2 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600">Address Line 1</label>
                  <input type="text" className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600">City</label>
                  <input type="text" className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600">Emirate / State</label>
                  <select className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]">
                    {["Dubai","Abu Dhabi","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain"].map(e => <option key={e}>{e}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600">Country</label>
                  <select className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]">
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Kuwait</option>
                    <option>Qatar</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <button onClick={() => setStep("shipping")} className="mt-6 bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Continue to Shipping
              </button>
            </div>
          )}

          {/* Shipping */}
          {step === "shipping" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-[#3D52A0] mb-5">Shipping Method</h2>
              <div className="space-y-3">
                {[
                  { id: "dhl-express", label: "DHL Express", sub: "1–3 business days", price: 35 },
                  { id: "aramex-standard", label: "Aramex Standard", sub: "3–5 business days", price: 20 },
                  { id: "free-standard", label: "Free Shipping", sub: "5–7 business days", price: 0, disabled: subtotal < FREE_SHIPPING_THRESHOLD },
                ].map(opt => (
                  <label key={opt.id} className={`flex items-center justify-between border-2 rounded-xl px-4 py-3 cursor-pointer transition-colors ${shippingMethod === opt.id ? "border-[#3D52A0] bg-[#EDE8F5]" : "border-gray-200 hover:border-[#ADBBDA]"} ${opt.disabled ? "opacity-40 cursor-not-allowed" : ""}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shipping" value={opt.id} checked={shippingMethod === opt.id} onChange={() => !opt.disabled && setShippingMethod(opt.id)} className="accent-[#3D52A0]" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{opt.label}</p>
                        <p className="text-xs text-gray-500">{opt.sub}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-[#3D52A0]">{opt.price === 0 ? "FREE" : formatAed(opt.price)}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("address")} className="border border-[#3D52A0] text-[#3D52A0] font-bold px-6 py-3 rounded-xl hover:bg-[#EDE8F5] transition-colors">Back</button>
                <button onClick={() => setStep("payment")} className="bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-8 py-3 rounded-xl transition-colors">Continue to Payment</button>
              </div>
            </div>
          )}

          {/* Payment */}
          {step === "payment" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-[#3D52A0] mb-5 flex items-center gap-2"><CreditCard size={18} /> Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: "stripe",   label: "Credit / Debit Card",     sub: "Visa, Mastercard, Amex — secured by Stripe" },
                  { id: "paytabs",  label: "PayTabs — Cards & Local",  sub: "PayTabs PT2, supports local UAE methods" },
                  ...(codEligible ? [{ id: "cod", label: "Cash on Delivery", sub: `Available for orders under ${formatAed(COD_MAX_AED)} within UAE` }] : []),
                ].map(opt => (
                  <label key={opt.id} className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 cursor-pointer transition-colors ${paymentMethod === opt.id ? "border-[#3D52A0] bg-[#EDE8F5]" : "border-gray-200 hover:border-[#ADBBDA]"}`}>
                    <input type="radio" name="payment" value={opt.id} checked={paymentMethod === opt.id} onChange={() => setPaymentMethod(opt.id)} className="accent-[#3D52A0]" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{opt.label}</p>
                      <p className="text-xs text-gray-500">{opt.sub}</p>
                    </div>
                  </label>
                ))}
              </div>
              {paymentMethod === "stripe" && (
                <div className="mt-4 rounded-xl border border-[#ADBBDA] bg-[#F7F8FC] p-4">
                  <p className="text-xs text-gray-500 mb-3">Card details (secured by Stripe — card data never touches our servers)</p>
                  <div className="space-y-3">
                    <input placeholder="Card number" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                    <div className="grid grid-cols-2 gap-3">
                      <input placeholder="MM / YY" className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                      <input placeholder="CVV" className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                    </div>
                    <input placeholder="Name on card" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#3D52A0]" />
                  </div>
                </div>
              )}
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("shipping")} className="border border-[#3D52A0] text-[#3D52A0] font-bold px-6 py-3 rounded-xl hover:bg-[#EDE8F5] transition-colors">Back</button>
                <button onClick={() => setStep("review")} className="bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold px-8 py-3 rounded-xl transition-colors">Review Order</button>
              </div>
            </div>
          )}

          {/* Review */}
          {step === "review" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-[#3D52A0] mb-5">Review & Place Order</h2>
              <div className="space-y-2 mb-6">
                {items.map(item => (
                  <div key={item.variantId} className="flex gap-3 py-2 border-b border-gray-50 last:border-0">
                    <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-lg object-contain bg-[#F7F8FC]" />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-700 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-400">Qty: {item.qty} · {[item.color, item.storage].filter(Boolean).join(" / ")}</p>
                    </div>
                    <span className="text-sm font-bold text-[#3D52A0] shrink-0">{formatAed(item.priceAed * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setStep("payment")} className="border border-[#3D52A0] text-[#3D52A0] font-bold px-6 py-3 rounded-xl hover:bg-[#EDE8F5] transition-colors">Back</button>
                <button
                  onClick={() => { clear(); setOrdered(true); }}
                  className="flex-1 bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Place Order · {formatAed(grandTotal)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Summary sidebar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 h-fit sticky top-24">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Order Summary</h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>{formatAed(subtotal)}</span></div>
            <div className="flex justify-between text-gray-600"><span>Shipping</span><span>{shippingAed === 0 ? <span className="text-green-600">FREE</span> : formatAed(shippingAed)}</span></div>
            <div className="flex justify-between text-gray-600"><span>VAT (5%)</span><span>{formatAed(vat)}</span></div>
            <div className="flex justify-between font-bold text-[#3D52A0] border-t pt-2 mt-1">
              <span>Total</span><span>{formatAed(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
