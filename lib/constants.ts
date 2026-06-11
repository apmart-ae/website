export const SITE_NAME = "APMART.AE";
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://apmart.ae";
export const VAT_RATE = 0.05; // UAE VAT 5%
export const COD_MAX_AED = 1000;
export const FREE_SHIPPING_THRESHOLD = 500; // AED

export const NAV_CATEGORIES = [
  {
    label: "Mobiles & Tablets",
    slug: "mobiles-tablets",
    sub: [
      {
        label: "Smart Phones",
        slug: "smartphones",
        items: [
          { label: "iPhone",      href: "/search?q=iphone" },
          { label: "Android",     href: "/search?q=android" },
          { label: "HarmonyOS",   href: "/search?q=harmonyos" },
        ],
      },
      {
        label: "Tablets",
        slug: "tablets",
        items: [
          { label: "iPads",           href: "/search?q=ipad" },
          { label: "Android",         href: "/search?q=android+tablet" },
          { label: "Huawei Matepad",  href: "/search?q=matepad" },
        ],
      },
      {
        label: "Trending Devices",
        slug: "trending-devices",
        items: [
          { label: "iPhone 17 Series",                   href: "/search?q=iphone+17" },
          { label: "Samsung Galaxy Fold7 & Flip7 Series", href: "/search?q=galaxy+fold7" },
          { label: "Samsung Galaxy S26 Series",          href: "/search?q=galaxy+s26" },
          { label: "Samsung Galaxy S25 Series",          href: "/search?q=galaxy+s25" },
          { label: "Samsung Galaxy A Series",            href: "/search?q=galaxy+a+series" },
        ],
      },
      {
        label: "Accessories",
        slug: "mobile-accessories",
        items: [
          { label: "Cases & Pouches",  href: "/search?q=cases" },
          { label: "Screen Guard",     href: "/search?q=screen+guard" },
          { label: "Battery & Charger", href: "/search?q=charger" },
          { label: "Power Banks",      href: "/search?q=power+bank" },
          { label: "Adapter",          href: "/search?q=adapter" },
          { label: "Headphones",       href: "/search?q=headphones" },
        ],
      },
    ],
  },
  {
    label: "Wearables & Smart Watches",
    slug: "wearables",
    sub: [
      { label: "Smart Watches", slug: "smart-watches" },
      { label: "Fitness Tracker", slug: "fitness-tracker" },
      { label: "VR Headset", slug: "vr-headset" },
      { label: "Accessories", slug: "wearable-accessories" },
    ],
  },
  {
    label: "Computing",
    slug: "computing",
    sub: [
      {
        label: "Computers",
        slug: "laptops",
        items: [
          { label: "Windows Laptops",  href: "/search?q=windows+laptop" },
          { label: "Copilot+ PCs",     href: "/search?q=copilot" },
          { label: "MacBooks",         href: "/search?q=macos" },
          { label: "Gaming Laptops",   href: "/category/gaming-laptops" },
          { label: "Monitors",         href: "/category/monitors" },
        ],
      },
      { label: "Printers & Scanners", slug: "printers-scanners" },
      { label: "Tablets",             slug: "tablets" },
      {
        label: "Accessories",
        slug: "computing-accessories",
        items: [
          { label: "Mouse & Keyboard", href: "/search?q=mouse+keyboard" },
          { label: "Headsets",         href: "/search?q=headset" },
          { label: "Data Hubs",        href: "/search?q=hub" },
        ],
      },
    ],
  },
  { label: "Routers", slug: "routers", sub: [] },
  { label: "Gaming", slug: "gaming", sub: [] },
  {
    label: "Accessories",
    slug: "accessories",
    sub: [
      { label: "Mobile & Tablet", slug: "mobile-tablet-accessories" },
      { label: "Computing",       slug: "computing-accessories-top" },
      { label: "TV & Audio",      slug: "tv-audio-accessories" },
      { label: "eScooter",        slug: "escooter-accessories" },
    ],
  },
];

export const UTILITY_BAR_ITEMS = [
  "Extended warranty for extra peace of mind",
  "Hassle-free returns for your convenience",
  "24-hour delivery & installation",
  "Cash on delivery for orders below AED 1,000",
  "Worldwide shipping available",
];

export const TRUST_BADGES = [
  { icon: "percent", title: "0% Interest", sub: "Buy Now Pay Later" },
  { icon: "shield", title: "Extended Warranty", sub: "Extra peace of mind" },
  { icon: "refresh", title: "Easy Returns", sub: "Hassle-free policy" },
  { icon: "clock", title: "24h Delivery", sub: "& Installation" },
];
