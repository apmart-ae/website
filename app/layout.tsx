import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "APMART.AE – Electronics Store UAE", template: "%s | APMART.AE" },
  description: "Shop the latest mobiles, tablets, laptops, wearables, TVs & appliances in UAE. Fast delivery, extended warranty, COD available.",
  keywords: ["electronics", "UAE", "mobiles", "laptops", "tablets", "appliances", "APMART"],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://apmart.ae",
    siteName: "APMART.AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
