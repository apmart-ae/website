import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { VAT_RATE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const profileId = process.env.PAYTABS_PROFILE_ID;
    const serverKey  = process.env.PAYTABS_SERVER_KEY;
    const host       = process.env.PAYTABS_REGION_HOST ?? "https://secure.paytabs.com";
    if (!profileId || !serverKey) return NextResponse.json({ error: "PayTabs not configured" }, { status: 500 });

    const session = await auth();
    const body = await req.json();
    const { items, shippingAed = 0, orderNumber, customer } = body;

    const subtotal: number = items.reduce((s: number, i: any) => s + i.priceAed * i.qty, 0);
    const vat = Math.round((subtotal + shippingAed) * VAT_RATE);
    const totalAed = subtotal + shippingAed + vat;

    const origin = req.headers.get("origin") ?? "https://apmart.ae";

    const res = await fetch(`${host}/payment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: serverKey },
      body: JSON.stringify({
        profile_id: Number(profileId),
        tran_type: "sale",
        tran_class: "ecom",
        cart_id: orderNumber,
        cart_currency: "AED",
        cart_amount: totalAed,
        cart_description: `APMART order ${orderNumber}`,
        customer_details: customer,
        callback: `${origin}/api/webhooks/paytabs`,
        return: `${origin}/checkout/paytabs/return`,
      }),
    });

    const data = await res.json();
    if (!data.redirect_url) return NextResponse.json({ error: data.message ?? "PayTabs error" }, { status: 502 });

    return NextResponse.json({ url: data.redirect_url, tranRef: data.tran_ref });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
