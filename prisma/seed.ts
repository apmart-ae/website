import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter } as any);

async function main() {
  console.log("🌱 Seeding APMART.AE...");

  // ── Brands ─────────────────────────────────────────────────────────────────
  const brands = await Promise.all([
    db.brand.upsert({ where: { slug: "apple" },    update: {}, create: { name: "Apple",     slug: "apple",     logoUrl: "/brand/logos/apple.svg"    } }),
    db.brand.upsert({ where: { slug: "samsung" },  update: {}, create: { name: "Samsung",   slug: "samsung",   logoUrl: "/brand/logos/samsung.svg"  } }),
    db.brand.upsert({ where: { slug: "huawei" },   update: {}, create: { name: "Huawei",    slug: "huawei",    logoUrl: "/brand/logos/huawei.svg"   } }),
    db.brand.upsert({ where: { slug: "dell" },     update: {}, create: { name: "Dell",      slug: "dell",      logoUrl: "/brand/logos/dell.svg"     } }),
    db.brand.upsert({ where: { slug: "asus" },     update: {}, create: { name: "ASUS",      slug: "asus",      logoUrl: "/brand/logos/asus.svg"     } }),
    db.brand.upsert({ where: { slug: "microsoft" },update: {}, create: { name: "Microsoft", slug: "microsoft", logoUrl: "/brand/logos/microsoft.svg"} }),
    db.brand.upsert({ where: { slug: "sony" },     update: {}, create: { name: "Sony",      slug: "sony",      logoUrl: "/brand/logos/sony.svg"     } }),
    db.brand.upsert({ where: { slug: "nothing" },  update: {}, create: { name: "Nothing",   slug: "nothing",   logoUrl: "/brand/logos/nothing.svg"  } }),
    db.brand.upsert({ where: { slug: "xiaomi" },   update: {}, create: { name: "Xiaomi",    slug: "xiaomi",    logoUrl: "/brand/logos/xiaomi.svg"   } }),
    db.brand.upsert({ where: { slug: "hp" },       update: {}, create: { name: "HP",        slug: "hp",        logoUrl: "/brand/logos/hp.svg"       } }),
  ]);

  const B: Record<string, string> = Object.fromEntries(brands.map(b => [b.slug, b.id]));

  // ── Categories (top-level) ─────────────────────────────────────────────────
  const cats = await Promise.all([
    db.category.upsert({ where: { slug: "mobiles-tablets" }, update: {}, create: { name: "Mobiles & Tablets", slug: "mobiles-tablets", sortOrder: 1 } }),
    db.category.upsert({ where: { slug: "wearables" },       update: {}, create: { name: "Wearables & Smart Watches", slug: "wearables", sortOrder: 2 } }),
    db.category.upsert({ where: { slug: "tv-audio" },        update: {}, create: { name: "TV & Audio",    slug: "tv-audio",     sortOrder: 3 } }),
    db.category.upsert({ where: { slug: "appliances" },      update: {}, create: { name: "Appliances",    slug: "appliances",   sortOrder: 4 } }),
    db.category.upsert({ where: { slug: "computing" },       update: {}, create: { name: "Computing",     slug: "computing",    sortOrder: 5 } }),
    db.category.upsert({ where: { slug: "gaming" },          update: {}, create: { name: "Gaming",        slug: "gaming",       sortOrder: 6 } }),
    db.category.upsert({ where: { slug: "photography" },     update: {}, create: { name: "Photography",   slug: "photography",  sortOrder: 7 } }),
    db.category.upsert({ where: { slug: "accessories" },     update: {}, create: { name: "Accessories",   slug: "accessories",  sortOrder: 8 } }),
  ]);

  const C: Record<string, string> = Object.fromEntries(cats.map(c => [c.slug, c.id]));

  // ── Sub-categories ─────────────────────────────────────────────────────────
  const subCats = await Promise.all([
    db.category.upsert({ where: { slug: "smartphones" },  update: {}, create: { name: "Smartphones",  slug: "smartphones",  parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "tablets" },      update: {}, create: { name: "Tablets",      slug: "tablets",      parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "smart-watches" },update: {}, create: { name: "Smart Watches",slug: "smart-watches",parentId: C["wearables"]       } }),
    db.category.upsert({ where: { slug: "laptops" },      update: {}, create: { name: "Laptops",      slug: "laptops",      parentId: C["computing"]       } }),
    db.category.upsert({ where: { slug: "monitors" },     update: {}, create: { name: "Monitors",     slug: "monitors",     parentId: C["computing"]       } }),
  ]);

  const SC: Record<string, string> = Object.fromEntries(subCats.map(c => [c.slug, c.id]));

  // ── Products ───────────────────────────────────────────────────────────────
  const PLACEHOLDER = (text: string) => `https://placehold.co/600x600/EDE8F5/3D52A0?text=${encodeURIComponent(text)}`;

  const products = [
    // ---- Smartphones ----
    {
      title: "Samsung Galaxy S25 Ultra 5G",
      slug: "samsung-galaxy-s25-ultra",
      description: "The ultimate Galaxy experience with Snapdragon 8 Elite, 200MP camera system, and integrated S Pen.",
      brandId: B.samsung, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '6.9"', os: "Android 15" },
      tags: ["bestseller", "5g", "flagship"],
      images: [PLACEHOLDER("S25 Ultra"), PLACEHOLDER("S25 Ultra Back")],
      variants: [
        { sku: "S25U-256-GRAY",  storage: "256GB", color: "Titanium Gray",  priceAed: 3999, compareAtAed: 5099, stock: 24, weightKg: 0.218 },
        { sku: "S25U-512-GRAY",  storage: "512GB", color: "Titanium Gray",  priceAed: 4499, stock: 12, weightKg: 0.218 },
        { sku: "S25U-1TB-BLACK", storage: "1TB",   color: "Titanium Black", priceAed: 5199, compareAtAed: 6599, stock: 8, weightKg: 0.218, isDefault: false },
      ],
    },
    {
      title: "Apple iPhone 17 Pro",
      slug: "apple-iphone-17-pro",
      description: "Titanium. A19 Pro chip. Ultra-resolution Camera system. All-new design.",
      brandId: B.apple, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Nano-SIM + eSIM", camera: "48MP", screenSize: '6.3"', os: "iOS 19" },
      tags: ["new", "flagship", "authorized"],
      images: [PLACEHOLDER("iPhone 17 Pro")],
      variants: [
        { sku: "IP17P-256-NT",  storage: "256GB", color: "Natural Titanium", priceAed: 4699, stock: 30, weightKg: 0.187, isDefault: true },
        { sku: "IP17P-512-BT",  storage: "512GB", color: "Black Titanium",   priceAed: 5299, stock: 18, weightKg: 0.187 },
        { sku: "IP17P-1TB-WT",  storage: "1TB",   color: "White Titanium",   priceAed: 6199, stock: 6,  weightKg: 0.187 },
      ],
    },
    {
      title: "Nothing Phone 3a Pro",
      slug: "nothing-phone-3a-pro",
      description: "Glyph Interface 3.0, triple camera, 5000mAh battery. Design that speaks.",
      brandId: B.nothing, categoryId: SC.smartphones,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.7"' },
      tags: ["new"],
      images: [PLACEHOLDER("Nothing 3a Pro")],
      variants: [
        { sku: "NP3A-256-GRAY", storage: "256GB", color: "Dark Gray", priceAed: 1749, compareAtAed: 1849, stock: 20, weightKg: 0.201, isDefault: true },
      ],
    },
    {
      title: "Huawei Mate X6 4G Foldable",
      slug: "huawei-mate-x6",
      description: "Ultra-slim foldable with Kirin 9020 and 50MP Leica triple camera.",
      brandId: B.huawei, categoryId: SC.smartphones,
      attributes: { ram: "12GB", sim: "Nano SIM", camera: "50MP", screenSize: '7.93"' },
      tags: ["foldable"],
      images: [PLACEHOLDER("Mate X6")],
      variants: [
        { sku: "MX6-512-RED",   storage: "512GB", color: "Nebula Red",    priceAed: 1599, compareAtAed: 1699, stock: 10, weightKg: 0.239, isDefault: true },
        { sku: "MX6-512-BLACK", storage: "512GB", color: "Phantom Black", priceAed: 1599, stock: 8, weightKg: 0.239 },
      ],
    },
    {
      title: "Xiaomi 15 Ultra",
      slug: "xiaomi-15-ultra",
      description: "Leica Summilux optics, Snapdragon 8 Elite, 6000mAh battery with 90W HyperCharge.",
      brandId: B.xiaomi, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "16GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '6.73"' },
      tags: ["flagship", "camera"],
      images: [PLACEHOLDER("Xiaomi 15 Ultra")],
      variants: [
        { sku: "MI15U-512-WHITE", storage: "512GB", color: "White", priceAed: 3299, compareAtAed: 3799, stock: 15, weightKg: 0.224, isDefault: true },
        { sku: "MI15U-1TB-BLACK", storage: "1TB",   color: "Black", priceAed: 3799, stock: 8, weightKg: 0.224 },
      ],
    },

    // ---- Tablets ----
    {
      title: "Apple iPad Pro 13\" M4",
      slug: "apple-ipad-pro-13-m4",
      description: "Impossibly thin. Remarkably powerful. M4 chip with Apple Intelligence.",
      brandId: B.apple, categoryId: SC.tablets, isFeatured: true,
      attributes: { storage: "256GB", screenSize: '13"', os: "iPadOS 18" },
      tags: ["new", "flagship"],
      images: [PLACEHOLDER("iPad Pro M4")],
      variants: [
        { sku: "IPADP13-256-SL", storage: "256GB", color: "Silver", priceAed: 5999, stock: 12, weightKg: 0.579, isDefault: true },
        { sku: "IPADP13-512-SL", storage: "512GB", color: "Silver", priceAed: 6999, stock: 8, weightKg: 0.579 },
        { sku: "IPADP13-1TB-BK", storage: "1TB",   color: "Space Black", priceAed: 8999, stock: 4, weightKg: 0.579 },
      ],
    },

    // ---- Smart Watches ----
    {
      title: "Apple Watch Ultra 2",
      slug: "apple-watch-ultra-2",
      description: "The most rugged, capable Apple Watch ever. Titanium. 60-hour battery.",
      brandId: B.apple, categoryId: SC["smart-watches"], isFeatured: true,
      attributes: { screenSize: "49mm", material: "Titanium" },
      tags: ["flagship"],
      images: [PLACEHOLDER("Watch Ultra 2")],
      variants: [
        { sku: "AWU2-49-NT", color: "Natural Titanium", priceAed: 3799, stock: 20, weightKg: 0.061, isDefault: true },
        { sku: "AWU2-49-BT", color: "Black Titanium",   priceAed: 3799, stock: 15, weightKg: 0.061 },
      ],
    },
    {
      title: "Samsung Galaxy Watch 7",
      slug: "samsung-galaxy-watch-7",
      description: "Advanced BioActive Sensor, sleep apnea detection, sapphire crystal display.",
      brandId: B.samsung, categoryId: SC["smart-watches"],
      attributes: { screenSize: "44mm" },
      tags: ["bestseller"],
      images: [PLACEHOLDER("Galaxy Watch 7")],
      variants: [
        { sku: "GW7-44-SILVER", color: "Titanium Silver", priceAed: 1299, compareAtAed: 1499, stock: 25, weightKg: 0.033, isDefault: true },
        { sku: "GW7-44-CREAM",  color: "Cream",           priceAed: 1299, compareAtAed: 1499, stock: 18, weightKg: 0.033 },
      ],
    },
    {
      title: "Huawei Watch GT 5 Pro",
      slug: "huawei-watch-gt5-pro",
      description: "Titanium case, 14-day battery, ECG monitoring, AMOLED display.",
      brandId: B.huawei, categoryId: SC["smart-watches"],
      attributes: { screenSize: "46mm", material: "Titanium" },
      images: [PLACEHOLDER("GT 5 Pro")],
      variants: [
        { sku: "GT5P-46-TI", color: "Titanium Gray", priceAed: 1199, compareAtAed: 1399, stock: 20, weightKg: 0.054, isDefault: true },
      ],
    },

    // ---- Laptops ----
    {
      title: 'Apple MacBook Pro 14" M4 Pro',
      slug: "macbook-pro-14-m4-pro",
      description: "M4 Pro chip with 14-core CPU, 20-core GPU. Liquid Retina XDR display.",
      brandId: B.apple, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "24GB", storage: "512GB", screenSize: '14"', os: "macOS Sequoia" },
      tags: ["flagship", "new"],
      images: [PLACEHOLDER("MacBook Pro M4")],
      variants: [
        { sku: "MBP14-24-512-SB", ram: "24GB", storage: "512GB", color: "Space Black", priceAed: 8499, stock: 10, weightKg: 1.555, isDefault: true },
        { sku: "MBP14-24-1T-SL",  ram: "24GB", storage: "1TB",   color: "Silver",      priceAed: 9999, stock: 6, weightKg: 1.555 },
      ],
    },
    {
      title: "Dell XPS 15",
      slug: "dell-xps-15",
      description: "Intel Core Ultra 9, OLED display, RTX 4060 graphics. Premium performance laptop.",
      brandId: B.dell, categoryId: SC.laptops,
      attributes: { ram: "32GB", storage: "1TB", screenSize: '15.6"', os: "Windows 11" },
      tags: ["premium"],
      images: [PLACEHOLDER("Dell XPS 15")],
      variants: [
        { sku: "XPS15-32-1T-SL", ram: "32GB", storage: "1TB", color: "Platinum Silver", priceAed: 7299, compareAtAed: 8499, stock: 8, weightKg: 1.86, isDefault: true },
      ],
    },
    {
      title: "ASUS ROG Zephyrus G16",
      slug: "asus-rog-zephyrus-g16",
      description: "AMD Ryzen 9, RTX 4080, 240Hz display. The ultimate gaming laptop.",
      brandId: B.asus, categoryId: SC.laptops,
      attributes: { ram: "32GB", storage: "1TB", screenSize: '16"', gpu: "RTX 4080", os: "Windows 11" },
      tags: ["gaming"],
      images: [PLACEHOLDER("ROG Zephyrus G16")],
      variants: [
        { sku: "ROGZ16-32-1T-BK", ram: "32GB", storage: "1TB", color: "Eclipse Gray", priceAed: 9999, compareAtAed: 11999, stock: 5, weightKg: 1.85, isDefault: true },
      ],
    },
    {
      title: "Microsoft Surface Laptop 7",
      slug: "surface-laptop-7",
      description: "Snapdragon X Elite, Copilot+ AI features, 22-hour battery, stunning 2K display.",
      brandId: B.microsoft, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '13.8"', os: "Windows 11" },
      tags: ["new", "copilot"],
      images: [PLACEHOLDER("Surface Laptop 7")],
      variants: [
        { sku: "SL7-16-512-PLAT", ram: "16GB", storage: "512GB", color: "Platinum", priceAed: 5299, stock: 12, weightKg: 1.34, isDefault: true },
        { sku: "SL7-32-1T-PLAT",  ram: "32GB", storage: "1TB",   color: "Platinum", priceAed: 6999, stock: 6, weightKg: 1.34 },
      ],
    },
    {
      title: "HP Spectre x360 14",
      slug: "hp-spectre-x360-14",
      description: "Intel Core Ultra 7, 2-in-1 convertible, OLED touch display, pen included.",
      brandId: B.hp, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "1TB", screenSize: '14"', os: "Windows 11" },
      tags: ["premium", "2-in-1"],
      images: [PLACEHOLDER("Spectre x360")],
      variants: [
        { sku: "SPX14-16-1T-NIGHTFALL", ram: "16GB", storage: "1TB", color: "Nightfall Black", priceAed: 6499, compareAtAed: 7299, stock: 8, weightKg: 1.41, isDefault: true },
      ],
    },
  ];

  for (const p of products) {
    const { images, variants, ...productData } = p;
    const existing = await db.product.findUnique({ where: { slug: productData.slug } });
    if (existing) { console.log(`  skip: ${productData.slug}`); continue; }

    const created = await db.product.create({
      data: {
        ...productData,
        images: { create: images.map((url, i) => ({ url, sortOrder: i })) },
      },
    });

    for (const v of variants as any[]) {
      await db.variant.create({
        data: {
          productId: created.id,
          sku: v.sku,
          ram: v.ram ?? null,
          storage: v.storage ?? null,
          color: v.color ?? null,
          priceAed: v.priceAed,
          compareAtAed: v.compareAtAed ?? null,
          stock: v.stock,
          weightKg: v.weightKg,
          isDefault: v.isDefault ?? false,
        },
      });
    }
    console.log(`  ✔ ${created.slug}`);
  }

  console.log("✅ Seed complete.");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
