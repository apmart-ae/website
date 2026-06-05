import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { VAT_RATE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-05-28.basil" as any });
    const session = await auth();
    const body = await req.json();
    const { items, shippingAed = 0 } = body;

    const subtotal: number = items.reduce((s: number, i: any) => s + i.priceAed * i.qty, 0);
    const vat = Math.round((subtotal + shippingAed) * VAT_RATE);
    const totalAed = subtotal + shippingAed + vat;

    const intent = await stripe.paymentIntents.create({
      amount: Math.round(totalAed * 100),
      currency: "aed",
      automatic_payment_methods: { enabled: true },
      metadata: { userId: (session?.user as any)?.id ?? "guest" },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
