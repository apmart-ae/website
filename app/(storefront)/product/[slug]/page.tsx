import ProductDetailClient from "./ProductDetailClient";

const DEMO_PRODUCT = {
  id: "1",
  title: "Samsung Galaxy S25 Ultra 5G",
  slug: "samsung-galaxy-s25-ultra",
  brand: "Samsung",
  rating: 4.7,
  reviewCount: 284,
  images: [
    "/products/samsung-s25-ultra.jpg",
    "/products/samsung-s25.jpg",
    "/products/samsung-s25-ultra.jpg",
  ],
  variants: [
    { id: "v1", sku: "S25U-256-GRAY",  storage: "256GB", color: "Titanium Gray",  priceAed: 3999, compareAtAed: 5099, stock: 24, weightKg: 0.218 },
    { id: "v2", sku: "S25U-512-GRAY",  storage: "512GB", color: "Titanium Gray",  priceAed: 4499, compareAtAed: null, stock: 12, weightKg: 0.218 },
    { id: "v3", sku: "S25U-1TB-BLACK", storage: "1TB",   color: "Titanium Black", priceAed: 5199, compareAtAed: 6599, stock: 8,  weightKg: 0.218 },
  ],
  specs: [
    ["Display",   '6.9" QHD+ Dynamic AMOLED 2X, 120Hz'],
    ["Processor", "Snapdragon 8 Elite"],
    ["RAM",       "12GB"],
    ["Storage",   "256GB / 512GB / 1TB"],
    ["Camera",    "200MP Main + 50MP Periscope + 10MP Telephoto"],
    ["Battery",   "5000mAh, 45W Fast Charging, 15W Wireless"],
    ["OS",        "Android 15, One UI 7"],
    ["5G",        "Yes"],
    ["Dimensions","163.4 × 79.9 × 8.9 mm"],
    ["Weight",    "218g"],
  ] as [string, string][],
  description: "The most powerful Galaxy smartphone ever. Features the Snapdragon 8 Elite processor, a 200MP adaptive quad camera system, and the integrated S Pen. Experience AI-powered Galaxy intelligence.",
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: DEMO_PRODUCT.title,
    description: DEMO_PRODUCT.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClient product={DEMO_PRODUCT} />;
}
