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
    db.brand.upsert({ where: { slug: "apple" },    update: { logoUrl: "/brand/logos/Apple.jpg" },    create: { name: "Apple",     slug: "apple",     logoUrl: "/brand/logos/Apple.jpg"    } }),
    db.brand.upsert({ where: { slug: "samsung" },  update: { logoUrl: "/brand/logos/Samsung.jpg" },  create: { name: "Samsung",   slug: "samsung",   logoUrl: "/brand/logos/Samsung.jpg"  } }),
    db.brand.upsert({ where: { slug: "huawei" },   update: { logoUrl: "/brand/logos/Huawei.png" },   create: { name: "Huawei",    slug: "huawei",    logoUrl: "/brand/logos/Huawei.png"   } }),
    db.brand.upsert({ where: { slug: "dell" },     update: { logoUrl: "/brand/logos/Dell.jpg" },     create: { name: "Dell",      slug: "dell",      logoUrl: "/brand/logos/Dell.jpg"     } }),
    db.brand.upsert({ where: { slug: "asus" },     update: { logoUrl: "/brand/logos/Asus.jpg" },     create: { name: "ASUS",      slug: "asus",      logoUrl: "/brand/logos/Asus.jpg"     } }),
    db.brand.upsert({ where: { slug: "microsoft" },update: { logoUrl: "/brand/logos/Microsoft.jpg" },create: { name: "Microsoft", slug: "microsoft", logoUrl: "/brand/logos/Microsoft.jpg"} }),
    db.brand.upsert({ where: { slug: "sony" },     update: { logoUrl: "/brand/logos/Sony.jpg" },     create: { name: "Sony",      slug: "sony",      logoUrl: "/brand/logos/Sony.jpg"     } }),
    db.brand.upsert({ where: { slug: "nothing" },  update: { logoUrl: "/brand/logos/Nothing.jpg" },  create: { name: "Nothing",   slug: "nothing",   logoUrl: "/brand/logos/Nothing.jpg"  } }),
    db.brand.upsert({ where: { slug: "xiaomi" },   update: { logoUrl: "/brand/logos/Xiaomi.jpg" },   create: { name: "Xiaomi",    slug: "xiaomi",    logoUrl: "/brand/logos/Xiaomi.jpg"   } }),
    db.brand.upsert({ where: { slug: "hp" },       update: { logoUrl: "/brand/logos/HP.jpg" },       create: { name: "HP",        slug: "hp",        logoUrl: "/brand/logos/HP.jpg"       } }),
    db.brand.upsert({ where: { slug: "honor" },    update: { logoUrl: "/brand/logos/Honor.jpg" },    create: { name: "Honor",     slug: "honor",     logoUrl: "/brand/logos/Honor.jpg"    } }),
    db.brand.upsert({ where: { slug: "oppo" },     update: { logoUrl: "/brand/logos/Oppo.jpg" },     create: { name: "OPPO",      slug: "oppo",      logoUrl: "/brand/logos/Oppo.jpg"     } }),
    db.brand.upsert({ where: { slug: "tp-link" },  update: { logoUrl: "/brand/logos/TP-Link.png" },  create: { name: "TP-Link",   slug: "tp-link",   logoUrl: "/brand/logos/TP-Link.png"  } }),
    db.brand.upsert({ where: { slug: "netgear" },  update: { logoUrl: "/brand/logos/Netgear.png" },  create: { name: "Netgear",   slug: "netgear",   logoUrl: "/brand/logos/Netgear.png"  } }),
    db.brand.upsert({ where: { slug: "ubiquiti" }, update: { logoUrl: "/brand/logos/Ubiquiti.png" }, create: { name: "Ubiquiti",  slug: "ubiquiti",  logoUrl: "/brand/logos/Ubiquiti.png" } }),
    db.brand.upsert({ where: { slug: "razer" },    update: { logoUrl: "/brand/logos/Razer.png" },    create: { name: "Razer",     slug: "razer",     logoUrl: "/brand/logos/Razer.png"    } }),
  ]);

  const B: Record<string, string> = Object.fromEntries(brands.map(b => [b.slug, b.id]));

  // ── Categories (top-level) ─────────────────────────────────────────────────
  const cats = await Promise.all([
    db.category.upsert({ where: { slug: "mobiles-tablets" }, update: {}, create: { name: "Mobiles & Tablets",        slug: "mobiles-tablets", sortOrder: 1 } }),
    db.category.upsert({ where: { slug: "wearables" },       update: {}, create: { name: "Wearables & Smart Watches",slug: "wearables",        sortOrder: 2 } }),
    db.category.upsert({ where: { slug: "computing" },       update: {}, create: { name: "Computing",                slug: "computing",        sortOrder: 3 } }),
    db.category.upsert({ where: { slug: "routers" },         update: {}, create: { name: "Routers",                  slug: "routers",          sortOrder: 4 } }),
    db.category.upsert({ where: { slug: "gaming" },          update: {}, create: { name: "Gaming",                   slug: "gaming",           sortOrder: 5 } }),
    db.category.upsert({ where: { slug: "accessories" },     update: {}, create: { name: "Accessories",              slug: "accessories",      sortOrder: 6 } }),
    db.category.upsert({ where: { slug: "tv-audio" },        update: {}, create: { name: "TV & Audio",               slug: "tv-audio",         sortOrder: 7 } }),
    db.category.upsert({ where: { slug: "appliances" },      update: {}, create: { name: "Appliances",               slug: "appliances",       sortOrder: 8 } }),
    db.category.upsert({ where: { slug: "photography" },     update: {}, create: { name: "Photography",              slug: "photography",      sortOrder: 9 } }),
  ]);

  const C: Record<string, string> = Object.fromEntries(cats.map(c => [c.slug, c.id]));

  // ── Sub-categories ─────────────────────────────────────────────────────────
  const subCats = await Promise.all([
    // Mobiles & Tablets
    db.category.upsert({ where: { slug: "smartphones" },             update: {}, create: { name: "Smartphones",          slug: "smartphones",             sortOrder: 1, parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "tablets" },                 update: {}, create: { name: "Tablets",              slug: "tablets",                 sortOrder: 2, parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "foldables" },               update: {}, create: { name: "Foldables",            slug: "foldables",               sortOrder: 3, parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "trending-devices" },        update: {}, create: { name: "Trending Devices",     slug: "trending-devices",        sortOrder: 4, parentId: C["mobiles-tablets"] } }),
    db.category.upsert({ where: { slug: "mobile-accessories" },      update: {}, create: { name: "Accessories",          slug: "mobile-accessories",      sortOrder: 5, parentId: C["mobiles-tablets"] } }),
    // Wearables
    db.category.upsert({ where: { slug: "smart-watches" },           update: {}, create: { name: "Smart Watches",        slug: "smart-watches",           sortOrder: 1, parentId: C["wearables"] } }),
    db.category.upsert({ where: { slug: "fitness-tracker" },         update: {}, create: { name: "Fitness Trackers",     slug: "fitness-tracker",         sortOrder: 2, parentId: C["wearables"] } }),
    db.category.upsert({ where: { slug: "vr-headset" },              update: {}, create: { name: "VR Headsets",          slug: "vr-headset",              sortOrder: 3, parentId: C["wearables"] } }),
    db.category.upsert({ where: { slug: "wearable-accessories" },    update: {}, create: { name: "Accessories",          slug: "wearable-accessories",    sortOrder: 4, parentId: C["wearables"] } }),
    // Computing
    db.category.upsert({ where: { slug: "laptops" },                 update: {}, create: { name: "Laptops",              slug: "laptops",                 sortOrder: 1, parentId: C["computing"] } }),
    db.category.upsert({ where: { slug: "monitors" },                update: {}, create: { name: "Monitors",             slug: "monitors",                sortOrder: 2, parentId: C["computing"] } }),
    db.category.upsert({ where: { slug: "computers" },               update: {}, create: { name: "Computers",            slug: "computers",               sortOrder: 3, parentId: C["computing"] } }),
    db.category.upsert({ where: { slug: "printers-scanners" },       update: {}, create: { name: "Printers & Scanners",  slug: "printers-scanners",       sortOrder: 4, parentId: C["computing"] } }),
    db.category.upsert({ where: { slug: "computing-accessories" },   update: {}, create: { name: "Accessories",          slug: "computing-accessories",   sortOrder: 5, parentId: C["computing"] } }),
    // Routers
    db.category.upsert({ where: { slug: "wifi-routers" },            update: {}, create: { name: "Wi-Fi Routers",        slug: "wifi-routers",            sortOrder: 1, parentId: C["routers"] } }),
    db.category.upsert({ where: { slug: "mesh-systems" },            update: {}, create: { name: "Mesh Systems",         slug: "mesh-systems",            sortOrder: 2, parentId: C["routers"] } }),
    db.category.upsert({ where: { slug: "range-extenders" },         update: {}, create: { name: "Range Extenders",      slug: "range-extenders",         sortOrder: 3, parentId: C["routers"] } }),
    // Gaming
    db.category.upsert({ where: { slug: "gaming-consoles" },         update: {}, create: { name: "Gaming Consoles",      slug: "gaming-consoles",         sortOrder: 1, parentId: C["gaming"] } }),
    db.category.upsert({ where: { slug: "gaming-laptops" },          update: {}, create: { name: "Gaming Laptops",       slug: "gaming-laptops",          sortOrder: 2, parentId: C["gaming"] } }),
    db.category.upsert({ where: { slug: "gaming-accessories" },      update: {}, create: { name: "Gaming Accessories",   slug: "gaming-accessories",      sortOrder: 3, parentId: C["gaming"] } }),
    db.category.upsert({ where: { slug: "gaming-headsets" },         update: {}, create: { name: "Gaming Headsets",      slug: "gaming-headsets",         sortOrder: 4, parentId: C["gaming"] } }),
    // Accessories
    db.category.upsert({ where: { slug: "mobile-tablet-accessories" },update: {}, create: { name: "Mobile & Tablet",    slug: "mobile-tablet-accessories",sortOrder: 1, parentId: C["accessories"] } }),
    db.category.upsert({ where: { slug: "computing-accessories-top" },update: {}, create: { name: "Computing",          slug: "computing-accessories-top",sortOrder: 2, parentId: C["accessories"] } }),
    db.category.upsert({ where: { slug: "tv-audio-accessories" },    update: {}, create: { name: "TV & Audio",          slug: "tv-audio-accessories",    sortOrder: 3, parentId: C["accessories"] } }),
    db.category.upsert({ where: { slug: "escooter-accessories" },    update: {}, create: { name: "eScooter",            slug: "escooter-accessories",    sortOrder: 4, parentId: C["accessories"] } }),
  ]);

  const SC: Record<string, string> = Object.fromEntries(subCats.map(c => [c.slug, c.id]));

  // ── Products ───────────────────────────────────────────────────────────────
  const products = [
    // ── Smartphones ──────────────────────────────────────────────────────────
    {
      title: "Samsung Galaxy S25 Ultra 5G",
      slug: "samsung-galaxy-s25-ultra",
      description: "The ultimate Galaxy experience with Snapdragon 8 Elite, 200MP camera system, and integrated S Pen.",
      brandId: B.samsung, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '6.9"', os: "Android 15" },
      tags: ["bestseller", "5g", "flagship"],
      images: [
        "/products/samsung-s25-series/sms938bzkimeaw_1_.jpg",
        "/products/samsung-s25-series/sms938bzbimeaw_1_.jpg",
        "/products/samsung-s25-series/sms938bzgimeaw-pr7_1_.jpg",
        "/products/samsung-s25-ultra.jpg",
      ],
      variants: [
        { sku: "S25U-256-GRAY",  storage: "256GB", color: "Titanium Gray",    priceAed: 3999, compareAtAed: 5099, stock: 24, weightKg: 0.218, isDefault: true },
        { sku: "S25U-512-BLACK", storage: "512GB", color: "Titanium Black",   priceAed: 4499, stock: 12, weightKg: 0.218 },
        { sku: "S25U-1TB-BLUE",  storage: "1TB",   color: "Titanium Blue",    priceAed: 5199, compareAtAed: 6599, stock: 8, weightKg: 0.218 },
      ],
    },
    {
      title: "Samsung Galaxy S26",
      slug: "samsung-galaxy-s26",
      description: "Next-gen Galaxy with Exynos 2600, 50MP ProVisual Engine, and AI-powered photography.",
      brandId: B.samsung, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.2"', os: "Android 16" },
      tags: ["new", "5g", "flagship"],
      images: [
        "/products/samsung-s26/S26_Black.jpg",
        "/products/samsung-s26/S26_Sky_blue.jpg",
        "/products/samsung-s26/sm-s942_galaxys26_front_black_251128_1_.jpg",
        "/products/samsung-s26/sm-s942_galaxys26_front_skyblue_251128_4_.jpg",
      ],
      variants: [
        { sku: "S26-256-BLACK",   storage: "256GB", color: "Phantom Black",  priceAed: 3299, compareAtAed: 3599, stock: 30, weightKg: 0.162, isDefault: true },
        { sku: "S26-256-BLUE",    storage: "256GB", color: "Sky Blue",       priceAed: 3299, stock: 25, weightKg: 0.162 },
        { sku: "S26-512-VIOLET",  storage: "512GB", color: "Cobalt Violet",  priceAed: 3799, stock: 15, weightKg: 0.162 },
      ],
    },
    {
      title: "Samsung Galaxy S26 Ultra",
      slug: "samsung-galaxy-s26-ultra",
      description: "The most powerful Galaxy ever. Snapdragon 8 Elite, 200MP quad camera, integrated S Pen.",
      brandId: B.samsung, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '6.9"', os: "Android 16" },
      tags: ["new", "flagship", "s-pen"],
      images: [
        "/products/samsung-s26/sm-s948_galaxys26ultra_front_black_251120_1.jpg",
        "/products/samsung-s26/sm-s948_galaxys26ultra_front_skyblue_251114.jpg",
        "/products/samsung-s26/S26_Ultra_Purple.jpg",
        "/products/samsung-s26/sm-s948_galaxys26ultra_front_white_251120.jpg",
      ],
      variants: [
        { sku: "S26U-256-BLACK",   storage: "256GB", color: "Phantom Black",  priceAed: 4799, compareAtAed: 5299, stock: 20, weightKg: 0.218, isDefault: true },
        { sku: "S26U-512-BLUE",    storage: "512GB", color: "Sky Blue",       priceAed: 5299, stock: 12, weightKg: 0.218 },
        { sku: "S26U-1TB-VIOLET",  storage: "1TB",   color: "Cobalt Violet",  priceAed: 5999, stock: 8, weightKg: 0.218 },
      ],
    },
    {
      title: "Apple iPhone 17 Pro",
      slug: "apple-iphone-17-pro",
      description: "Titanium. A19 Pro chip. Ultra-resolution Camera system with all-new Tetraprism telephoto.",
      brandId: B.apple, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Nano-SIM + eSIM", camera: "48MP", screenSize: '6.3"', os: "iOS 19" },
      tags: ["new", "flagship", "authorized"],
      images: [
        "/products/iphone-17/iphone_17_pro_listing.png",
        "/products/iphone-17-pro.jpg",
      ],
      variants: [
        { sku: "IP17P-256-NT",  storage: "256GB", color: "Natural Titanium", priceAed: 4699, stock: 30, weightKg: 0.187, isDefault: true },
        { sku: "IP17P-512-BT",  storage: "512GB", color: "Black Titanium",   priceAed: 5299, stock: 18, weightKg: 0.187 },
        { sku: "IP17P-1TB-WT",  storage: "1TB",   color: "White Titanium",   priceAed: 6199, stock: 6,  weightKg: 0.187 },
      ],
    },
    {
      title: "Apple iPhone 17 Pro Max",
      slug: "apple-iphone-17-pro-max",
      description: "The biggest, most powerful iPhone. A19 Pro chip, 6.9\" Super Retina XDR, 5x optical zoom.",
      brandId: B.apple, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Nano-SIM + eSIM", camera: "48MP", screenSize: '6.9"', os: "iOS 19" },
      tags: ["new", "flagship", "authorized"],
      images: [
        "/products/iphone-17/iphone_17_pro_max_listing.png",
      ],
      variants: [
        { sku: "IP17PM-256-DT",  storage: "256GB", color: "Desert Titanium", priceAed: 5499, stock: 25, weightKg: 0.218, isDefault: true },
        { sku: "IP17PM-512-NT",  storage: "512GB", color: "Natural Titanium", priceAed: 6199, stock: 15, weightKg: 0.218 },
        { sku: "IP17PM-1TB-BT",  storage: "1TB",   color: "Black Titanium",   priceAed: 7299, stock: 8,  weightKg: 0.218 },
      ],
    },
    {
      title: "Apple iPhone 17",
      slug: "apple-iphone-17",
      description: "A18 chip. Advanced dual-camera system. Ceramic Shield front. Aluminum design.",
      brandId: B.apple, categoryId: SC.smartphones,
      attributes: { ram: "8GB", sim: "Nano-SIM + eSIM", camera: "48MP", screenSize: '6.1"', os: "iOS 19" },
      tags: ["new", "authorized"],
      images: [
        "/products/iphone-17/iphone_17_listing.png",
      ],
      variants: [
        { sku: "IP17-128-PINK",  storage: "128GB", color: "Pink",  priceAed: 3199, stock: 40, weightKg: 0.170, isDefault: true },
        { sku: "IP17-256-BLACK", storage: "256GB", color: "Black", priceAed: 3699, stock: 30, weightKg: 0.170 },
        { sku: "IP17-512-WHITE", storage: "512GB", color: "White", priceAed: 4199, stock: 15, weightKg: 0.170 },
      ],
    },
    {
      title: "Apple iPhone 17 Air",
      slug: "apple-iphone-17-air",
      description: "The thinnest iPhone ever. 6.6mm profile, A18 chip, 48MP camera, all-day battery.",
      brandId: B.apple, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "8GB", sim: "Nano-SIM + eSIM", camera: "48MP", screenSize: '6.6"', os: "iOS 19" },
      tags: ["new", "ultra-thin"],
      images: [
        "/products/iphone-17/iphone_17_air_listing.png",
      ],
      variants: [
        { sku: "IP17A-256-SAND",  storage: "256GB", color: "Desert Sand", priceAed: 3999, stock: 25, weightKg: 0.145, isDefault: true },
        { sku: "IP17A-512-WHITE", storage: "512GB", color: "Starlight",   priceAed: 4499, stock: 18, weightKg: 0.145 },
      ],
    },
    {
      title: "Samsung Galaxy Z Fold 7",
      slug: "samsung-galaxy-z-fold7",
      description: "Ultra-thin foldable with Snapdragon 8 Elite, 200MP camera and Galaxy AI features.",
      brandId: B.samsung, categoryId: SC.foldables, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '7.9"', os: "Android 16" },
      tags: ["new", "foldable", "flagship"],
      images: [
        "/products/samsung-fold7/smf966bzkemeawpr5_1_.jpg",
        "/products/samsung-fold7/smf966bzkdmeaw-pr5_1_.jpg",
        "/products/samsung-fold7/smf966bzsdmeaw-pr5_1_.jpg",
        "/products/samsung-fold7/smf966bdbdmeaw-pr5_6__1.jpg",
      ],
      variants: [
        { sku: "ZF7-256-BLACK",  storage: "256GB", color: "Phantom Black",  priceAed: 6999, compareAtAed: 7599, stock: 15, weightKg: 0.239, isDefault: true },
        { sku: "ZF7-512-SILVER", storage: "512GB", color: "Icy Silver",     priceAed: 7799, stock: 8, weightKg: 0.239 },
      ],
    },
    {
      title: "Samsung Galaxy Z Flip 7",
      slug: "samsung-galaxy-z-flip7",
      description: "Compact flip foldable with FlexWindow AI, 50MP camera, Snapdragon 8 Elite.",
      brandId: B.samsung, categoryId: SC.foldables,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.7"', os: "Android 16" },
      tags: ["new", "foldable"],
      images: [
        "/products/samsung-fold7/smf761bzwemeaw-pr5_eros_jul2025_1_.jpg",
        "/products/samsung-fold7/smf761bzkemeaw-pr5-eros_july_2025_9_.jpg",
        "/products/samsung-fold7/smf766bdbemeawpr5_1_.jpg",
      ],
      variants: [
        { sku: "ZFL7-256-MINT",  storage: "256GB", color: "Mint",  priceAed: 3999, compareAtAed: 4299, stock: 20, weightKg: 0.188, isDefault: true },
        { sku: "ZFL7-256-BLACK", storage: "256GB", color: "Black", priceAed: 3999, stock: 15, weightKg: 0.188 },
        { sku: "ZFL7-256-BLUE",  storage: "256GB", color: "Blue",  priceAed: 3999, stock: 12, weightKg: 0.188 },
      ],
    },
    {
      title: "Nothing Phone 3a Pro",
      slug: "nothing-phone-3a-pro",
      description: "Glyph Interface 3.0, triple camera, 5000mAh battery. Design that speaks.",
      brandId: B.nothing, categoryId: SC.smartphones,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.7"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/nothing-phone-3a-pro.jpg", "/products/nothing-phone-3a-pro.png"],
      variants: [
        { sku: "NP3A-256-GRAY", storage: "256GB", color: "Dark Gray", priceAed: 1749, compareAtAed: 1849, stock: 20, weightKg: 0.201, isDefault: true },
      ],
    },
    {
      title: "Huawei Mate X6 4G Foldable",
      slug: "huawei-mate-x6",
      description: "Ultra-slim foldable with Kirin 9020 and 50MP Leica triple camera.",
      brandId: B.huawei, categoryId: SC.foldables,
      attributes: { ram: "12GB", sim: "Nano SIM", camera: "50MP", screenSize: '7.93"', os: "HarmonyOS 4" },
      tags: ["foldable"],
      images: ["/products/huawei-mate-x6.jpg"],
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
      attributes: { ram: "16GB", sim: "Dual SIM 5G", camera: "200MP", screenSize: '6.73"', os: "Android 15" },
      tags: ["flagship", "camera"],
      images: ["/products/xiaomi-15-ultra.jpg"],
      variants: [
        { sku: "MI15U-512-WHITE", storage: "512GB", color: "White", priceAed: 3299, compareAtAed: 3799, stock: 15, weightKg: 0.224, isDefault: true },
        { sku: "MI15U-1TB-BLACK", storage: "1TB",   color: "Black", priceAed: 3799, stock: 8, weightKg: 0.224 },
      ],
    },

    // ── Tablets ───────────────────────────────────────────────────────────────
    {
      title: 'Apple iPad Pro 13" M4',
      slug: "apple-ipad-pro-13-m4",
      description: "Impossibly thin. Remarkably powerful. M4 chip with Apple Intelligence.",
      brandId: B.apple, categoryId: SC.tablets, isFeatured: true,
      attributes: { storage: "256GB", screenSize: '13"', os: "iPadOS 18" },
      tags: ["new", "flagship"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=iPad+Pro+M4"],
      variants: [
        { sku: "IPADP13-256-SL", storage: "256GB", color: "Silver",      priceAed: 5999, stock: 12, weightKg: 0.579, isDefault: true },
        { sku: "IPADP13-512-SL", storage: "512GB", color: "Silver",      priceAed: 6999, stock: 8, weightKg: 0.579 },
        { sku: "IPADP13-1TB-BK", storage: "1TB",   color: "Space Black", priceAed: 8999, stock: 4, weightKg: 0.579 },
      ],
    },

    // ── Smart Watches ─────────────────────────────────────────────────────────
    {
      title: "Apple Watch Ultra 2",
      slug: "apple-watch-ultra-2",
      description: "The most rugged, capable Apple Watch ever. Titanium. 60-hour battery.",
      brandId: B.apple, categoryId: SC["smart-watches"], isFeatured: true,
      attributes: { screenSize: "49mm", material: "Titanium" },
      tags: ["flagship"],
      images: ["/products/apple-watch-ultra-2.jpg"],
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
      images: ["/products/samsung-galaxy-watch7.jpg"],
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
      tags: [],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=GT+5+Pro"],
      variants: [
        { sku: "GT5P-46-TI", color: "Titanium Gray", priceAed: 1199, compareAtAed: 1399, stock: 20, weightKg: 0.054, isDefault: true },
      ],
    },

    // ── Laptops ───────────────────────────────────────────────────────────────
    {
      title: 'Apple MacBook Pro 14" M4 Pro',
      slug: "macbook-pro-14-m4-pro",
      description: "M4 Pro chip with 14-core CPU, 20-core GPU. Liquid Retina XDR display.",
      brandId: B.apple, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "24GB", storage: "512GB", screenSize: '14"', os: "macOS Sequoia" },
      tags: ["flagship", "new"],
      images: ["/products/macbook-pro-14-m4.jpg"],
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
      images: ["/products/dell-xps-15.png"],
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
      images: ["/products/asus-rog-zephyrus-g16.jpg"],
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
      images: ["/products/microsoft-surface-laptop-7.png"],
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
      images: ["/products/hp-spectre-x360.png"],
      variants: [
        { sku: "SPX14-16-1T-NIGHTFALL", ram: "16GB", storage: "1TB", color: "Nightfall Black", priceAed: 6499, compareAtAed: 7299, stock: 8, weightKg: 1.41, isDefault: true },
      ],
    },

    // ── Routers ───────────────────────────────────────────────────────────────
    {
      title: "TP-Link Archer BE900 Wi-Fi 7 Router",
      slug: "tp-link-archer-be900",
      description: "World's first Wi-Fi 7 router with 24 Gbps tri-band speed, 16 antennas, and multi-link operation.",
      brandId: B["tp-link"], categoryId: SC["wifi-routers"], isFeatured: true,
      attributes: { ram: "2GB", os: "Wi-Fi 7 (802.11be)" },
      tags: ["new", "wifi7", "flagship"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=TP-Link+BE900"],
      variants: [
        { sku: "BE900-WHT", color: "White", priceAed: 1999, compareAtAed: 2399, stock: 15, weightKg: 1.8, isDefault: true },
      ],
    },
    {
      title: "TP-Link Deco XE75 Pro Mesh Wi-Fi 6E",
      slug: "tp-link-deco-xe75-pro",
      description: "Tri-band Mesh Wi-Fi 6E, 6 Gbps speed, covers up to 650 m² with 3-pack.",
      brandId: B["tp-link"], categoryId: SC["mesh-systems"], isFeatured: true,
      attributes: { ram: "512MB", os: "Wi-Fi 6E (802.11ax)" },
      tags: ["bestseller", "mesh"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Deco+XE75+Pro"],
      variants: [
        { sku: "DXE75-3PK-WHT", color: "White (3-pack)", priceAed: 1299, compareAtAed: 1599, stock: 20, weightKg: 1.5, isDefault: true },
        { sku: "DXE75-2PK-WHT", color: "White (2-pack)", priceAed: 949,  stock: 25, weightKg: 1.0 },
      ],
    },
    {
      title: "Netgear Nighthawk RS700S Wi-Fi 7",
      slug: "netgear-nighthawk-rs700s",
      description: "Quad-band Wi-Fi 7, 19.4 Gbps, 12-stream, 10G WAN port, multi-gig LAN.",
      brandId: B.netgear, categoryId: SC["wifi-routers"],
      attributes: { ram: "2GB", os: "Wi-Fi 7 (802.11be)" },
      tags: ["new", "wifi7"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Nighthawk+RS700S"],
      variants: [
        { sku: "RS700S-BLK", color: "Black", priceAed: 2499, compareAtAed: 2999, stock: 10, weightKg: 2.1, isDefault: true },
      ],
    },
    {
      title: "TP-Link RE815XE Wi-Fi 6E Range Extender",
      slug: "tp-link-re815xe",
      description: "Tri-band Wi-Fi 6E range extender, 9.6 Gbps, 6 GHz band support.",
      brandId: B["tp-link"], categoryId: SC["range-extenders"],
      attributes: { os: "Wi-Fi 6E (802.11ax)" },
      tags: [],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=RE815XE"],
      variants: [
        { sku: "RE815XE-WHT", color: "White", priceAed: 449, compareAtAed: 549, stock: 30, weightKg: 0.4, isDefault: true },
      ],
    },
    {
      title: "ASUS ZenWiFi Pro ET12 Mesh",
      slug: "asus-zenwifi-pro-et12",
      description: "Tri-band Wi-Fi 6E mesh system, 11 Gbps, AI roaming, covers 750 m².",
      brandId: B.asus, categoryId: SC["mesh-systems"],
      attributes: { ram: "1GB", os: "Wi-Fi 6E (802.11ax)" },
      tags: [],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=ZenWiFi+ET12"],
      variants: [
        { sku: "ET12-2PK-WHT", color: "White (2-pack)", priceAed: 1799, compareAtAed: 2199, stock: 12, weightKg: 1.4, isDefault: true },
      ],
    },

    // ── Gaming ────────────────────────────────────────────────────────────────
    {
      title: "Sony PlayStation 5 Slim",
      slug: "sony-playstation-5-slim",
      description: "PS5 Slim — 30% smaller, same powerful custom AMD CPU/GPU, 1TB SSD, 4K 120fps gaming.",
      brandId: B.sony, categoryId: SC["gaming-consoles"], isFeatured: true,
      attributes: { storage: "1TB", os: "PlayStation OS" },
      tags: ["bestseller", "console"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=PS5+Slim"],
      variants: [
        { sku: "PS5-SLIM-DISC",     color: "White (Disc Edition)",    storage: "1TB", priceAed: 1799, compareAtAed: 1999, stock: 20, weightKg: 2.6, isDefault: true },
        { sku: "PS5-SLIM-DIGITAL",  color: "White (Digital Edition)", storage: "1TB", priceAed: 1499, stock: 15, weightKg: 2.2 },
      ],
    },
    {
      title: "Microsoft Xbox Series X",
      slug: "microsoft-xbox-series-x",
      description: "Most powerful Xbox ever. 12 teraflops GPU, 1TB NVMe SSD, 4K 120fps, Quick Resume.",
      brandId: B.microsoft, categoryId: SC["gaming-consoles"], isFeatured: true,
      attributes: { storage: "1TB", os: "Xbox OS" },
      tags: ["console", "flagship"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Xbox+Series+X"],
      variants: [
        { sku: "XBX-1T-BLK", color: "Carbon Black", storage: "1TB", priceAed: 1699, compareAtAed: 1899, stock: 18, weightKg: 4.45, isDefault: true },
      ],
    },
    {
      title: "Sony PlayStation 5 Pro",
      slug: "sony-playstation-5-pro",
      description: "PS5 Pro — 45% faster GPU rendering, PlayStation Spectral Super Resolution (PSSR), 2TB SSD.",
      brandId: B.sony, categoryId: SC["gaming-consoles"], isFeatured: true,
      attributes: { storage: "2TB", os: "PlayStation OS" },
      tags: ["new", "flagship", "console"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=PS5+Pro"],
      variants: [
        { sku: "PS5-PRO-WHT", color: "White", storage: "2TB", priceAed: 2799, stock: 12, weightKg: 3.1, isDefault: true },
      ],
    },
    {
      title: "Razer Blade 16 Gaming Laptop",
      slug: "razer-blade-16",
      description: "Intel Core i9-14900HX, RTX 4090, 240Hz OLED display, 32GB DDR5 — the ultimate gaming laptop.",
      brandId: B.razer, categoryId: SC["gaming-laptops"], isFeatured: true,
      attributes: { ram: "32GB", storage: "2TB", screenSize: '16"', gpu: "RTX 4090", os: "Windows 11" },
      tags: ["gaming", "flagship"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Razer+Blade+16"],
      variants: [
        { sku: "RB16-32-2T-BLK", ram: "32GB", storage: "2TB", color: "Black", priceAed: 15999, compareAtAed: 17999, stock: 5, weightKg: 2.1, isDefault: true },
      ],
    },
    {
      title: "Sony WH-1000XM5 Wireless Headset",
      slug: "sony-wh1000xm5",
      description: "Industry-leading noise cancellation, 30-hour battery, multipoint connection, perfect for gaming and music.",
      brandId: B.sony, categoryId: SC["gaming-headsets"],
      attributes: {},
      tags: ["bestseller"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=WH-1000XM5"],
      variants: [
        { sku: "XM5-BLK", color: "Black",  priceAed: 1249, compareAtAed: 1499, stock: 30, weightKg: 0.25, isDefault: true },
        { sku: "XM5-SLV", color: "Silver", priceAed: 1249, stock: 20, weightKg: 0.25 },
      ],
    },
    {
      title: "Razer BlackShark V2 Pro Gaming Headset",
      slug: "razer-blackshark-v2-pro",
      description: "THX Spatial Audio, 70-hour battery, HyperClear Supercardioid mic, wireless gaming headset.",
      brandId: B.razer, categoryId: SC["gaming-headsets"],
      attributes: {},
      tags: ["gaming"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=BlackShark+V2+Pro"],
      variants: [
        { sku: "BSV2P-BLK", color: "Black", priceAed: 799, compareAtAed: 999, stock: 25, weightKg: 0.32, isDefault: true },
        { sku: "BSV2P-WHT", color: "White", priceAed: 799, stock: 20, weightKg: 0.32 },
      ],
    },
  ];

  for (const p of products) {
    const { images, variants, ...productData } = p;
    const existing = await db.product.findUnique({ where: { slug: productData.slug } });

    if (existing) {
      // Update images if they're still placeholders
      const existingImages = await db.productImage.findMany({ where: { productId: existing.id } });
      const hasPlaceholder = existingImages.some(i => i.url.includes("placehold.co"));
      if (hasPlaceholder) {
        await db.productImage.deleteMany({ where: { productId: existing.id } });
        await db.productImage.createMany({ data: images.map((url, i) => ({ productId: existing.id, url, sortOrder: i })) });
        console.log(`  ↻ updated images: ${productData.slug}`);
      } else {
        console.log(`  skip: ${productData.slug}`);
      }
      continue;
    }

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
