import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tran_ref, cart_id, payment_result } = body;

    if (payment_result?.response_status === "A") {
      // Payment approved — update order to PAID
      console.log("PayTabs payment approved:", tran_ref, "order:", cart_id);
      // TODO: db.order.update({ where: { number: cart_id }, data: { status: "PAID", paymentRef: tran_ref } })
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
