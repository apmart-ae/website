import { NextRequest, NextResponse } from "next/server";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export const dynamic = "force-dynamic";

export interface ShippingOption {
  id:         string;
  carrier:    string;
  service:    string;
  priceAed:   number;
  etaDays:    string;
  isFree:     boolean;
}

export async function POST(req: NextRequest) {
  const { country, totalAed } = await req.json();

  const options: ShippingOption[] = [];
  const free = totalAed >= FREE_SHIPPING_THRESHOLD;

  if (country === "AE") {
    options.push({ id: "aramex-same-day", carrier: "Aramex", service: "Same Day Delivery",  priceAed: 50, etaDays: "Same day",        isFree: false });
    options.push({ id: "aramex-express",  carrier: "Aramex", service: "Express (1-2 days)", priceAed: 25, etaDays: "1–2 business days", isFree: false });
    if (free) options.push({ id: "free-standard", carrier: "APMART", service: "Free Standard",      priceAed: 0,  etaDays: "3–5 business days", isFree: true  });
    options.push({ id: "cod",             carrier: "",        service: "Cash on Delivery",   priceAed: 0,  etaDays: "3–5 business days", isFree: true, ...(totalAed >= 1000 ? { disabled: true } : {}) } as any);
  } else {
    options.push({ id: "dhl-express",    carrier: "DHL",    service: "DHL Express",          priceAed: 75, etaDays: "2–4 business days", isFree: false });
    options.push({ id: "aramex-intl",    carrier: "Aramex", service: "Aramex International", priceAed: 55, etaDays: "3–5 business days", isFree: false });
    if (free) options.push({ id: "free-intl", carrier: "APMART", service: "Free International",   priceAed: 0,  etaDays: "7–10 business days", isFree: true });
  }

  return NextResponse.json({ options });
}
