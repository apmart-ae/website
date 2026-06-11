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
    db.brand.upsert({ where: { slug: "anker" },   update: { logoUrl: "/brand/logos/Anker.png" },   create: { name: "Anker",     slug: "anker",     logoUrl: "/brand/logos/Anker.png"    } }),
    db.brand.upsert({ where: { slug: "belkin" },  update: { logoUrl: "/brand/logos/Belkin.png" },  create: { name: "Belkin",    slug: "belkin",    logoUrl: "/brand/logos/Belkin.png"   } }),
    db.brand.upsert({ where: { slug: "jbl" },     update: { logoUrl: "/brand/logos/JBL.png" },     create: { name: "JBL",       slug: "jbl",       logoUrl: "/brand/logos/JBL.png"      } }),
    db.brand.upsert({ where: { slug: "garmin" },  update: { logoUrl: "/brand/logos/Garmin.png" },  create: { name: "Garmin",    slug: "garmin",    logoUrl: "/brand/logos/Garmin.png"   } }),
    db.brand.upsert({ where: { slug: "lenovo" },  update: { logoUrl: "/brand/logos/Lenovo.png" },  create: { name: "Lenovo",    slug: "lenovo",    logoUrl: "/brand/logos/Lenovo.png"   } }),
    db.brand.upsert({ where: { slug: "msi" },    update: { logoUrl: "/brand/logos/Msi.jpg" },     create: { name: "MSI",       slug: "msi",       logoUrl: "/brand/logos/Msi.jpg"      } }),
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

    // ── More Smartphones ─────────────────────────────────────────────────────
    {
      title: "Nothing Phone 3a",
      slug: "nothing-phone-3a",
      description: "Glyph Interface 2.0, Snapdragon 7s Gen 3, 50MP camera, 5000mAh battery.",
      brandId: B.nothing, categoryId: SC.smartphones,
      attributes: { ram: "8GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.77"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/nothing-phone-3a/white.jpg", "/products/nothing-phone-3a/black.jpg", "/products/nothing-phone-3a/white-512.jpg"],
      variants: [
        { sku: "NP3-256-WHITE", storage: "256GB", color: "White", priceAed: 1349, compareAtAed: 1449, stock: 30, weightKg: 0.190, isDefault: true },
        { sku: "NP3-512-BLACK", storage: "512GB", color: "Black", priceAed: 1549, stock: 20, weightKg: 0.190 },
      ],
    },
    {
      title: "Honor Magic 8 Pro 5G",
      slug: "honor-magic8pro-5g",
      description: "Snapdragon 8 Elite, 50MP triple Falcon camera, MagicOS 9, 5200mAh silicon-carbon battery.",
      brandId: B.honor, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.8"', os: "Android 15" },
      tags: ["new", "flagship"],
      images: ["/products/honor-magic8pro/black.jpg", "/products/honor-magic8pro/gold.jpg", "/products/honor-magic8pro/cyan.jpg", "/products/honor-magic8pro/gold-1tb.jpg"],
      variants: [
        { sku: "HM8P-512-BLK", storage: "512GB", color: "Midnight Black", ram: "12GB", priceAed: 3299, compareAtAed: 3799, stock: 18, weightKg: 0.220, isDefault: true },
        { sku: "HM8P-512-GLD", storage: "512GB", color: "Emerald Gold",   ram: "12GB", priceAed: 3299, stock: 12, weightKg: 0.220 },
        { sku: "HM8P-512-CYN", storage: "512GB", color: "Ocean Cyan",     ram: "12GB", priceAed: 3299, stock: 10, weightKg: 0.220 },
        { sku: "HM8P-1TB-GLD", storage: "1TB",   color: "Emerald Gold",   ram: "16GB", priceAed: 3999, stock: 6, weightKg: 0.220 },
      ],
    },
    {
      title: "Honor X9d 5G",
      slug: "honor-x9d-5g",
      description: "MediaTek Dimensity 7025, 108MP main camera, 5800mAh battery, 6.78\" AMOLED display.",
      brandId: B.honor, categoryId: SC.smartphones,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "108MP", screenSize: '6.78"', os: "Android 14" },
      tags: ["new"],
      images: ["/products/honor-x9d/black.jpg", "/products/honor-x9d/green.jpg", "/products/honor-x9d/gold.jpg"],
      variants: [
        { sku: "HX9D-256-BLK", storage: "256GB", color: "Midnight Black", priceAed: 849,  compareAtAed: 999,  stock: 30, weightKg: 0.193, isDefault: true },
        { sku: "HX9D-256-GRN", storage: "256GB", color: "Forest Green",   priceAed: 849,  stock: 25, weightKg: 0.193 },
        { sku: "HX9D-256-GLD", storage: "256GB", color: "Sunrise Gold",   priceAed: 849,  stock: 20, weightKg: 0.193 },
      ],
    },
    {
      title: "Honor X8d",
      slug: "honor-x8d",
      description: "MediaTek Helio G91, 108MP main camera, 5330mAh battery, 6.8\" 90Hz display.",
      brandId: B.honor, categoryId: SC.smartphones,
      attributes: { ram: "8GB", sim: "Dual SIM 4G", camera: "108MP", screenSize: '6.8"', os: "Android 14" },
      tags: [],
      images: ["/products/honor-x8d/gray.jpg"],
      variants: [
        { sku: "HX8D-256-GRY", storage: "256GB", color: "Titanium Gray", priceAed: 649, compareAtAed: 749, stock: 35, weightKg: 0.185, isDefault: true },
      ],
    },
    {
      title: "Honor X6c 4G",
      slug: "honor-x6c",
      description: "MediaTek Helio G85, 50MP main camera, 5200mAh battery, 6.7\" 90Hz display.",
      brandId: B.honor, categoryId: SC.smartphones,
      attributes: { ram: "6GB", sim: "Dual SIM 4G", camera: "50MP", screenSize: '6.7"', os: "Android 14" },
      tags: [],
      images: ["/products/honor-x6c/cyan-128.jpg", "/products/honor-x6c/cyan-256.jpg", "/products/honor-x6c/white.jpg"],
      variants: [
        { sku: "HX6C-128-CYN", storage: "128GB", color: "Cyan Lake",      priceAed: 429, compareAtAed: 499, stock: 40, weightKg: 0.183, isDefault: true },
        { sku: "HX6C-256-CYN", storage: "256GB", color: "Cyan Lake",      priceAed: 499, stock: 30, weightKg: 0.183 },
        { sku: "HX6C-256-WHT", storage: "256GB", color: "Starry White",   priceAed: 499, stock: 25, weightKg: 0.183 },
      ],
    },
    {
      title: "OPPO Reno 13 5G",
      slug: "oppo-reno13-5g",
      description: "MediaTek Dimensity 8350, 50MP AI portrait camera, 80W SUPERVOOC charge, 6.59\" AMOLED.",
      brandId: B.oppo, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.59"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/oppo-reno13/white.jpg"],
      variants: [
        { sku: "RN13-512-WHT", storage: "512GB", color: "Lava White",   priceAed: 1699, compareAtAed: 1899, stock: 20, weightKg: 0.175, isDefault: true },
        { sku: "RN13-512-BLK", storage: "512GB", color: "Marble Black", priceAed: 1699, stock: 15, weightKg: 0.175 },
      ],
    },
    {
      title: "OPPO Reno 15F 5G",
      slug: "oppo-reno15f-5g",
      description: "Snapdragon 6 Gen 4, 50MP AI camera, 80W SUPERVOOC, 6.67\" AMOLED 120Hz display.",
      brandId: B.oppo, categoryId: SC.smartphones,
      attributes: { ram: "12GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.67"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/oppo-reno15f/aurblue.jpg", "/products/oppo-reno15f/twiblue.jpg", "/products/oppo-reno15f/white.jpg"],
      variants: [
        { sku: "RN15F-256-AURB", storage: "256GB", color: "Aurora Blue",   priceAed: 1299, compareAtAed: 1499, stock: 25, weightKg: 0.177, isDefault: true },
        { sku: "RN15F-256-TWIB", storage: "256GB", color: "Twilight Blue",  priceAed: 1299, stock: 20, weightKg: 0.177 },
        { sku: "RN15F-256-WHT",  storage: "256GB", color: "Pearl White",    priceAed: 1299, stock: 18, weightKg: 0.177 },
      ],
    },
    {
      title: "Samsung Galaxy A56 5G",
      slug: "samsung-galaxy-a56-5g",
      description: "Exynos 1580, 50MP OIS main camera, 5000mAh, 6.7\" AMOLED 120Hz — awesome all-rounder.",
      brandId: B.samsung, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "8GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.7"', os: "Android 15" },
      tags: ["new", "bestseller"],
      images: ["/products/samsung-galaxy-a56/gray.jpg", "/products/samsung-galaxy-a56/lilac.jpg", "/products/samsung-galaxy-a56/icyblue.jpg"],
      variants: [
        { sku: "A56-128-GRY",  storage: "128GB", color: "Awesome Gray",     priceAed: 1399, compareAtAed: 1599, stock: 40, weightKg: 0.198, isDefault: true },
        { sku: "A56-128-LIL",  storage: "128GB", color: "Awesome Lilac",    priceAed: 1399, stock: 35, weightKg: 0.198 },
        { sku: "A56-128-ICY",  storage: "128GB", color: "Awesome Icy Blue", priceAed: 1399, stock: 30, weightKg: 0.198 },
        { sku: "A56-256-GRY",  storage: "256GB", color: "Awesome Gray",     priceAed: 1599, stock: 20, weightKg: 0.198 },
      ],
    },
    {
      title: "Samsung Galaxy A36 5G",
      slug: "samsung-galaxy-a36-5g",
      description: "Snapdragon 6 Gen 3, 50MP main camera, 5000mAh, 6.66\" AMOLED 120Hz FHD+.",
      brandId: B.samsung, categoryId: SC.smartphones,
      attributes: { ram: "8GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.66"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/samsung-galaxy-a36/gray.jpg", "/products/samsung-galaxy-a36/lilac.jpg"],
      variants: [
        { sku: "A36-128-GRY", storage: "128GB", color: "Awesome Gray",  priceAed: 1099, compareAtAed: 1299, stock: 45, weightKg: 0.193, isDefault: true },
        { sku: "A36-128-LIL", storage: "128GB", color: "Awesome Lilac", priceAed: 1099, stock: 35, weightKg: 0.193 },
        { sku: "A36-256-GRY", storage: "256GB", color: "Awesome Gray",  priceAed: 1249, stock: 25, weightKg: 0.193 },
      ],
    },
    {
      title: "Samsung Galaxy A26 5G",
      slug: "samsung-galaxy-a26-5g",
      description: "Exynos 850, 50MP main camera, 5000mAh, 6.7\" Super AMOLED 120Hz — great value.",
      brandId: B.samsung, categoryId: SC.smartphones,
      attributes: { ram: "6GB", sim: "Dual SIM 5G", camera: "50MP", screenSize: '6.7"', os: "Android 15" },
      tags: ["new"],
      images: ["/products/samsung-galaxy-a26/lilac.jpg"],
      variants: [
        { sku: "A26-128-LIL", storage: "128GB", color: "Awesome Lilac", priceAed: 849, compareAtAed: 999, stock: 50, weightKg: 0.188, isDefault: true },
        { sku: "A26-128-BLK", storage: "128GB", color: "Awesome Black", priceAed: 849, stock: 40, weightKg: 0.188 },
      ],
    },
    {
      title: "Huawei Nova Y73i",
      slug: "huawei-nova-y73i",
      description: "Octa-core processor, 50MP triple camera, 6000mAh battery, 6.75\" 90Hz display.",
      brandId: B.huawei, categoryId: SC.smartphones,
      attributes: { ram: "8GB", sim: "Dual SIM 4G", camera: "50MP", screenSize: '6.75"', os: "EMUI 13" },
      tags: [],
      images: ["/products/huawei-nova/nova1.jpg", "/products/huawei-nova/nova2.jpg"],
      variants: [
        { sku: "NY73I-128-BLK", storage: "128GB", color: "Midnight Black", priceAed: 499, compareAtAed: 599, stock: 35, weightKg: 0.195, isDefault: true },
        { sku: "NY73I-128-GRN", storage: "128GB", color: "Emerald Green",  priceAed: 499, stock: 25, weightKg: 0.195 },
      ],
    },
    {
      title: "Huawei Pura 70 4G",
      slug: "huawei-pura70",
      description: "Kirin 9010, 50MP Leica variable aperture camera, HarmonyOS 4, ultra-slim design.",
      brandId: B.huawei, categoryId: SC.smartphones, isFeatured: true,
      attributes: { ram: "12GB", sim: "Nano SIM 4G", camera: "50MP", screenSize: '6.8"', os: "HarmonyOS 4" },
      tags: ["flagship"],
      images: ["/products/huawei-pura70/black.jpg", "/products/huawei-pura70/green.jpg"],
      variants: [
        { sku: "P70-256-BLK", storage: "256GB", color: "Black",         priceAed: 2499, compareAtAed: 2799, stock: 12, weightKg: 0.207, isDefault: true },
        { sku: "P70-256-GRN", storage: "256GB", color: "Emerald Green", priceAed: 2499, stock: 8, weightKg: 0.207 },
      ],
    },

    // ── More Tablets ──────────────────────────────────────────────────────────
    {
      title: "Samsung Galaxy Tab S10 FE 5G",
      slug: "samsung-galaxy-tab-s10fe",
      description: "Exynos 1580, 10.9\" LCD 90Hz, S Pen included, 8000mAh battery, IP68 rated.",
      brandId: B.samsung, categoryId: SC.tablets, isFeatured: true,
      attributes: { ram: "8GB", storage: "256GB", screenSize: '10.9"', os: "Android 15" },
      tags: ["new", "s-pen"],
      images: ["/products/samsung-tab-s10fe/gray.jpg", "/products/samsung-tab-s10fe/blue.jpg"],
      variants: [
        { sku: "TS10FE-256-GRY", storage: "256GB", color: "Graphite", priceAed: 1899, compareAtAed: 2099, stock: 20, weightKg: 0.545, isDefault: true },
        { sku: "TS10FE-256-BLU", storage: "256GB", color: "Navy Blue", priceAed: 1899, stock: 15, weightKg: 0.545 },
      ],
    },
    {
      title: "Samsung Galaxy Tab A9+",
      slug: "samsung-galaxy-tab-a9plus",
      description: "Snapdragon 695, 11\" 90Hz TFT display, quad speakers, 7040mAh battery.",
      brandId: B.samsung, categoryId: SC.tablets,
      attributes: { ram: "8GB", storage: "128GB", screenSize: '11"', os: "Android 13" },
      tags: ["bestseller"],
      images: ["/products/samsung-tab-a9plus/gray.jpg", "/products/samsung-tab-a9plus/silver.jpg"],
      variants: [
        { sku: "TA9P-128-GRY", storage: "128GB", color: "Graphite", priceAed: 999,  compareAtAed: 1199, stock: 30, weightKg: 0.480, isDefault: true },
        { sku: "TA9P-128-SLV", storage: "128GB", color: "Silver",   priceAed: 999,  stock: 25, weightKg: 0.480 },
        { sku: "TA9P-128-5G",  storage: "128GB", color: "Graphite (5G)", priceAed: 1149, stock: 15, weightKg: 0.485 },
      ],
    },
    {
      title: "Samsung Galaxy Tab A9",
      slug: "samsung-galaxy-tab-a9",
      description: "Helio G99, 8.7\" LCD 60Hz, 5100mAh battery — compact and affordable.",
      brandId: B.samsung, categoryId: SC.tablets,
      attributes: { ram: "4GB", storage: "64GB", screenSize: '8.7"', os: "Android 13" },
      tags: [],
      images: ["/products/samsung-tab-a9/gray.jpg", "/products/samsung-tab-a9/silver.jpg"],
      variants: [
        { sku: "TA9-64-GRY",  storage: "64GB",  color: "Graphite", priceAed: 699, compareAtAed: 799, stock: 35, weightKg: 0.374, isDefault: true },
        { sku: "TA9-128-SLV", storage: "128GB", color: "Silver",   priceAed: 849, stock: 25, weightKg: 0.374 },
      ],
    },
    {
      title: 'Apple iPad Air 11" M2',
      slug: "apple-ipad-air-m2-11",
      description: "M2 chip, 11\" Liquid Retina display, Apple Intelligence, Wi-Fi 6E, USB-C.",
      brandId: B.apple, categoryId: SC.tablets, isFeatured: true,
      attributes: { ram: "8GB", storage: "128GB", screenSize: '11"', os: "iPadOS 18" },
      tags: ["new", "flagship"],
      images: ["/products/ipad-air-m2/01bc2cec5b271baa6396_1.jpg", "/products/ipad-air-m2/838f7cc68aa090f4ad67_1.jpg", "/products/ipad-air-m2/8a9b56f279f138b807f2_1.jpg"],
      variants: [
        { sku: "IPAM2-128-BLU", storage: "128GB", color: "Blue",      priceAed: 2499, stock: 20, weightKg: 0.462, isDefault: true },
        { sku: "IPAM2-256-BLU", storage: "256GB", color: "Blue",      priceAed: 2999, stock: 15, weightKg: 0.462 },
        { sku: "IPAM2-256-SLV", storage: "256GB", color: "Starlight", priceAed: 2999, stock: 12, weightKg: 0.462 },
      ],
    },
    {
      title: 'Apple iPad mini 7',
      slug: "apple-ipad-mini-7",
      description: "A17 Pro chip, 8.3\" Liquid Retina display, Apple Intelligence, USB-C, ultra-portable.",
      brandId: B.apple, categoryId: SC.tablets,
      attributes: { ram: "8GB", storage: "128GB", screenSize: '8.3"', os: "iPadOS 18" },
      tags: ["new"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=iPad+mini+7"],
      variants: [
        { sku: "IPMINI7-128-BLU", storage: "128GB", color: "Blue",        priceAed: 1999, stock: 25, weightKg: 0.293, isDefault: true },
        { sku: "IPMINI7-256-BLU", storage: "256GB", color: "Blue",        priceAed: 2399, stock: 15, weightKg: 0.293 },
        { sku: "IPMINI7-256-SPC", storage: "256GB", color: "Space Gray",  priceAed: 2399, stock: 12, weightKg: 0.293 },
      ],
    },
    {
      title: 'Huawei MatePad Pro 13.2"',
      slug: "huawei-matepad-pro-132",
      description: "Kirin 9010, 13.2\" OLED 144Hz display, M-Pencil 3rd gen, HarmonyOS 4.",
      brandId: B.huawei, categoryId: SC.tablets, isFeatured: true,
      attributes: { ram: "12GB", storage: "256GB", screenSize: '13.2"', os: "HarmonyOS 4" },
      tags: ["flagship"],
      images: ["/products/huawei-matepad-pro/022f051b9dcef40d6038_1.jpg", "/products/huawei-matepad-pro/465a36aeaf61c0ce35ec_1.jpg"],
      variants: [
        { sku: "MPRO132-256-GRY", storage: "256GB", color: "Space Gray",   priceAed: 2999, compareAtAed: 3499, stock: 10, weightKg: 0.580, isDefault: true },
        { sku: "MPRO132-512-BLK", storage: "512GB", color: "Jet Black",    priceAed: 3499, stock: 6, weightKg: 0.580 },
      ],
    },

    // ── More Laptops ──────────────────────────────────────────────────────────
    {
      title: 'Apple MacBook Air 13" M4',
      slug: "macbook-air-13-m4",
      description: "M4 chip, 13.6\" Liquid Retina display, 18-hour battery, fanless, Apple Intelligence.",
      brandId: B.apple, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", storage: "256GB", screenSize: '13.6"', os: "macOS Sequoia" },
      tags: ["new", "macos", "laptop"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=MacBook+Air+M4+13"],
      variants: [
        { sku: "MBA13M4-16-256-MID", ram: "16GB", storage: "256GB", color: "Midnight",   priceAed: 4699, stock: 20, weightKg: 1.240, isDefault: true },
        { sku: "MBA13M4-16-512-SLV", ram: "16GB", storage: "512GB", color: "Silver",     priceAed: 5499, stock: 15, weightKg: 1.240 },
        { sku: "MBA13M4-24-512-SLV", ram: "24GB", storage: "512GB", color: "Silver",     priceAed: 6299, stock: 10, weightKg: 1.240 },
        { sku: "MBA13M4-24-1T-SLV",  ram: "24GB", storage: "1TB",   color: "Sky Blue",   priceAed: 7199, stock: 6, weightKg: 1.240 },
      ],
    },
    {
      title: 'Apple MacBook Air 15" M4',
      slug: "macbook-air-15-m4",
      description: "M4 chip, 15.3\" Liquid Retina display, 18-hour battery, six-speaker sound, Apple Intelligence.",
      brandId: B.apple, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "256GB", screenSize: '15.3"', os: "macOS Sequoia" },
      tags: ["new", "macos", "laptop"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=MacBook+Air+M4+15"],
      variants: [
        { sku: "MBA15M4-16-256-MID", ram: "16GB", storage: "256GB", color: "Midnight",  priceAed: 5699, stock: 15, weightKg: 1.510, isDefault: true },
        { sku: "MBA15M4-16-512-SLV", ram: "16GB", storage: "512GB", color: "Silver",    priceAed: 6499, stock: 10, weightKg: 1.510 },
        { sku: "MBA15M4-24-512-SKY", ram: "24GB", storage: "512GB", color: "Sky Blue",  priceAed: 7299, stock: 6, weightKg: 1.510 },
      ],
    },
    {
      title: "Lenovo IdeaPad 5 Pro 16",
      slug: "lenovo-ideapad5pro",
      description: "AMD Ryzen 7 8845HS, 16GB LPDDR5x, 512GB SSD, 16\" 2.5K IPS 120Hz, Windows 11.",
      brandId: B.lenovo, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '16"', os: "Windows 11" },
      tags: ["windows", "laptop"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=IdeaPad+5+Pro"],
      variants: [
        { sku: "IP5PRO-16-512-GRY", ram: "16GB", storage: "512GB", color: "Arctic Gray", priceAed: 3499, compareAtAed: 4199, stock: 12, weightKg: 1.85, isDefault: true },
        { sku: "IP5PRO-32-1T-GRY",  ram: "32GB", storage: "1TB",   color: "Arctic Gray", priceAed: 4299, stock: 8, weightKg: 1.85 },
      ],
    },

    // ── More Smart Watches ────────────────────────────────────────────────────
    {
      title: "Samsung Galaxy Watch Ultra",
      slug: "samsung-galaxy-watch-ultra",
      description: "Titanium case, 47mm, Exynos W1000, advanced health monitoring, 60-hour battery.",
      brandId: B.samsung, categoryId: SC["smart-watches"], isFeatured: true,
      attributes: { screenSize: "47mm", material: "Titanium" },
      tags: ["flagship", "new"],
      images: ["/products/samsung-galaxy-watch-ultra/black.jpg", "/products/samsung-galaxy-watch-ultra/silver.jpg"],
      variants: [
        { sku: "GWU-47-BLK", color: "Black Titanium",  priceAed: 2499, compareAtAed: 2799, stock: 15, weightKg: 0.060, isDefault: true },
        { sku: "GWU-47-SLV", color: "White Titanium",  priceAed: 2499, stock: 12, weightKg: 0.060 },
        { sku: "GWU-47-GRY", color: "Gray Titanium",   priceAed: 2499, stock: 10, weightKg: 0.060 },
      ],
    },
    {
      title: "Apple Watch Series 10",
      slug: "apple-watch-series-10",
      description: "Thinnest Apple Watch ever, S10 chip, larger display, crash detection, faster charging.",
      brandId: B.apple, categoryId: SC["smart-watches"],
      attributes: { screenSize: "46mm" },
      tags: ["new"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Apple+Watch+Series+10"],
      variants: [
        { sku: "AW10-42-PINK",    color: "Pink / Light Blush",    priceAed: 1499, stock: 30, weightKg: 0.036, isDefault: true },
        { sku: "AW10-42-SILVER",  color: "Silver / Blue",         priceAed: 1499, stock: 25, weightKg: 0.036 },
        { sku: "AW10-46-BLACK",   color: "Black / Black",         priceAed: 1699, stock: 20, weightKg: 0.041 },
        { sku: "AW10-46-GOLD",    color: "Gold / Stone",          priceAed: 1699, stock: 15, weightKg: 0.041 },
      ],
    },
    {
      title: "Garmin Forerunner 265",
      slug: "garmin-forerunner-265",
      description: "AMOLED display, HRV status, training readiness, race predictor, GPS, 13-day battery.",
      brandId: B.garmin, categoryId: SC["smart-watches"],
      attributes: { screenSize: "46mm" },
      tags: ["fitness"],
      images: ["https://placehold.co/600x600/EDE8F5/3D52A0?text=Garmin+FR265"],
      variants: [
        { sku: "FR265-46-BLK", color: "Black",  priceAed: 1699, compareAtAed: 1899, stock: 15, weightKg: 0.049, isDefault: true },
        { sku: "FR265-46-WHT", color: "White",  priceAed: 1699, stock: 10, weightKg: 0.049 },
      ],
    },

    // ── Earbuds & Headphones ──────────────────────────────────────────────────
    {
      title: "Samsung Galaxy Buds 4 Pro",
      slug: "samsung-galaxy-buds4-pro",
      description: "Intelligent ANC, 360° Audio, dual driver, 29-hour total battery with case.",
      brandId: B.samsung, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["new", "bestseller"],
      images: ["/products/galaxy-buds4-pro/black.jpg"],
      variants: [
        { sku: "GB4P-BLK", color: "Graphite", priceAed: 899,  compareAtAed: 1099, stock: 30, weightKg: 0.054, isDefault: true },
        { sku: "GB4P-WHT", color: "White",    priceAed: 899,  stock: 25, weightKg: 0.054 },
      ],
    },
    {
      title: "Samsung Galaxy Buds 4",
      slug: "samsung-galaxy-buds4",
      description: "AI-powered noise cancellation, three-mic system, 30-hour total playback with case.",
      brandId: B.samsung, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["new"],
      images: ["/products/galaxy-buds4/black.jpg"],
      variants: [
        { sku: "GB4-BLK", color: "Graphite", priceAed: 599, compareAtAed: 699, stock: 35, weightKg: 0.048, isDefault: true },
        { sku: "GB4-WHT", color: "White",    priceAed: 599, stock: 30, weightKg: 0.048 },
      ],
    },
    {
      title: "Huawei FreeCLip 2",
      slug: "huawei-freeclip-2",
      description: "Open-ear design, dual-driver sound, ANC, 36-hour battery, IPX54, ultra-comfortable.",
      brandId: B.huawei, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["new"],
      images: ["/products/huawei-freeclip2/black.jpg", "/products/huawei-freeclip2/blue.jpg", "/products/huawei-freeclip2/white.jpg"],
      variants: [
        { sku: "FCC2-BLK", color: "Black",  priceAed: 799, compareAtAed: 899, stock: 20, weightKg: 0.038, isDefault: true },
        { sku: "FCC2-BLU", color: "Blue",   priceAed: 799, stock: 15, weightKg: 0.038 },
        { sku: "FCC2-WHT", color: "White",  priceAed: 799, stock: 15, weightKg: 0.038 },
      ],
    },
    {
      title: "JBL Tune Flex 2",
      slug: "jbl-tune-flex-2",
      description: "Open-fit earbuds, JBL Pure Bass sound, 32-hour battery, IPX5 waterproof, Bluetooth 5.3.",
      brandId: B.jbl, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: [],
      images: ["/products/jbl-tune-flex2/black.jpg"],
      variants: [
        { sku: "TFLX2-BLK", color: "Black", priceAed: 349, compareAtAed: 449, stock: 40, weightKg: 0.044, isDefault: true },
        { sku: "TFLX2-WHT", color: "White", priceAed: 349, stock: 30, weightKg: 0.044 },
      ],
    },

    // ── Accessories ───────────────────────────────────────────────────────────
    {
      title: "Anker 65W GaN Nano Charger",
      slug: "anker-65w-gan-charger",
      description: "65W compact GaN USB-C charger, charges laptop + phone simultaneously, foldable plug.",
      brandId: B.anker, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["bestseller"],
      images: ["/products/accessories/chargers/anker-30w.png"],
      variants: [
        { sku: "AK-65W-BLK", color: "Black", priceAed: 129, compareAtAed: 159, stock: 60, weightKg: 0.088, isDefault: true },
        { sku: "AK-65W-WHT", color: "White", priceAed: 129, stock: 50, weightKg: 0.088 },
      ],
    },
    {
      title: "Samsung 45W Super Fast Charger 2.0",
      slug: "samsung-45w-charger",
      description: "USB-C Super Fast Charging 2.0, 45W, compatible with Galaxy S and Z series.",
      brandId: B.samsung, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: [],
      images: ["/products/accessories/chargers/samsung-45w.jpg"],
      variants: [
        { sku: "SAM-45W-BLK", color: "Black", priceAed: 99, compareAtAed: 129, stock: 80, weightKg: 0.075, isDefault: true },
      ],
    },
    {
      title: "Belkin MagSafe 2-in-1 Wireless Charger",
      slug: "belkin-magsafe-2in1-wireless",
      description: "15W MagSafe charger for iPhone + Apple Watch, Qi2 certified, foldable design.",
      brandId: B.belkin, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["new"],
      images: ["/products/accessories/chargers/belkin-wireless-2in1.jpg", "/products/accessories/chargers/belkin-wireless-white.jpg"],
      variants: [
        { sku: "BLK-2IN1-BLK", color: "Black", priceAed: 349, compareAtAed: 399, stock: 25, weightKg: 0.210, isDefault: true },
        { sku: "BLK-2IN1-WHT", color: "White", priceAed: 349, stock: 20, weightKg: 0.210 },
      ],
    },
    {
      title: "Belkin BoostCharge Power Bank 20,000mAh",
      slug: "belkin-powerbank-20000",
      description: "20,000mAh, 30W USB-C PD, USB-A port, dual-device charging, passes airline regulations.",
      brandId: B.belkin, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: ["bestseller"],
      images: ["/products/accessories/power-banks/belkin-20k-black.jpg", "/products/accessories/power-banks/belkin-20k-pink.jpg", "/products/accessories/power-banks/belkin-20k-teal.jpg"],
      variants: [
        { sku: "BLK-PB20-BLK",  color: "Black", priceAed: 229, compareAtAed: 279, stock: 40, weightKg: 0.445, isDefault: true },
        { sku: "BLK-PB20-PINK", color: "Pink",  priceAed: 229, stock: 30, weightKg: 0.445 },
        { sku: "BLK-PB20-TEAL", color: "Teal",  priceAed: 229, stock: 25, weightKg: 0.445 },
      ],
    },
    {
      title: "Belkin BoostCharge Power Bank 30,000mAh",
      slug: "belkin-powerbank-30000",
      description: "30,000mAh, 30W USB-C PD, two USB-A ports, charges 3 devices simultaneously.",
      brandId: B.belkin, categoryId: SC["mobile-accessories"],
      attributes: {},
      tags: [],
      images: ["/products/accessories/power-banks/belkin-30k-black.jpg"],
      variants: [
        { sku: "BLK-PB30-BLK", color: "Black", priceAed: 299, compareAtAed: 349, stock: 25, weightKg: 0.680, isDefault: true },
      ],
    },
    // ── Co-Pilot AI Laptops (eros.ae) ────────────────────────────────────────
    {
      title: "Microsoft Surface Pro 12 (2025)",
      slug: "microsoft-surface-pro-12",
      description: "Snapdragon X Plus, 16GB RAM, 512GB SSD, 12\" 2.2K touchscreen LCD, Copilot+ AI, all-day battery.",
      brandId: B.microsoft, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '12"', os: "Windows 11" },
      tags: ["new", "copilot", "windows", "laptop"],
      images: ["/products/copilot-laptops/ms-ep2-40222_1_.jpg"],
      variants: [
        { sku: "SPR12-16-512-PLAT", ram: "16GB", storage: "512GB", color: "Platinum", priceAed: 3999, stock: 15, weightKg: 0.895, isDefault: true },
      ],
    },
    {
      title: 'Microsoft Surface Laptop 13" (2025)',
      slug: "microsoft-surface-laptop-13-2025",
      description: "Snapdragon X Plus, 16GB RAM, 13\" touchscreen, Copilot+ AI, all-day battery, fast charging.",
      brandId: B.microsoft, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", screenSize: '13"', os: "Windows 11" },
      tags: ["new", "copilot", "windows", "laptop"],
      images: ["/products/copilot-laptops/ms-ep2-37032_1_.jpg", "/products/copilot-laptops/ms-ep2-31657_1_.jpg"],
      variants: [
        { sku: "SL13-16-256-PLAT", ram: "16GB", storage: "256GB", color: "Platinum", priceAed: 3699, stock: 20, weightKg: 1.297, isDefault: true },
        { sku: "SL13-16-512-PLAT", ram: "16GB", storage: "512GB", color: "Platinum", priceAed: 3999, stock: 15, weightKg: 1.297 },
      ],
    },
    {
      title: "ASUS Vivobook S14 Copilot+",
      slug: "asus-vivobook-s14-copilot",
      description: "Intel Core i5-210H, 16GB RAM, 512GB SSD, 14\" WUXGA IPS, slim AI laptop with Windows 11.",
      brandId: B.asus, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["windows", "laptop", "copilot"],
      images: ["/products/copilot-laptops/0280eab59b299d5f73f8_1.jpg"],
      variants: [
        { sku: "VSS14-16-512-BLU", ram: "16GB", storage: "512GB", color: "Quiet Blue", priceAed: 2799, compareAtAed: 2999, stock: 18, weightKg: 1.394, isDefault: true },
      ],
    },
    {
      title: 'Lenovo Yoga 7 14" OLED Copilot+',
      slug: "lenovo-yoga-7-oled",
      description: "Intel Core Ultra 7-256V, 16GB RAM, 512GB SSD, 14\" OLED 2.8K 120Hz, premium convertible.",
      brandId: B.lenovo, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["new", "windows", "laptop", "copilot", "oled"],
      images: ["/products/copilot-laptops/a2e67f74e174562db157_1.jpg"],
      variants: [
        { sku: "YG7-16-512-GRY", ram: "16GB", storage: "512GB", color: "Storm Gray", priceAed: 4199, compareAtAed: 4299, stock: 12, weightKg: 1.480, isDefault: true },
      ],
    },
    {
      title: 'Lenovo Yoga 7 2-in-1 14" Copilot+',
      slug: "lenovo-yoga-7-2in1",
      description: "Intel Core Ultra 7-155U, 16GB RAM, 512GB SSD, 14\" 2.8K Touch, 360° convertible.",
      brandId: B.lenovo, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["windows", "laptop", "copilot"],
      images: ["/products/copilot-laptops/4c40e834c3707e9cead6_1.jpg"],
      variants: [
        { sku: "YG72IN1-16-512-GRY", ram: "16GB", storage: "512GB", color: "Storm Gray", priceAed: 3799, compareAtAed: 3999, stock: 15, weightKg: 1.595, isDefault: true },
      ],
    },
    {
      title: 'Lenovo IdeaPad Slim 3 15" Gen 10',
      slug: "lenovo-ideapad-slim3-15",
      description: "Intel Core i5-13420H, 16GB RAM, 512GB SSD, 15.3\" WUXGA IPS, Windows 11 — reliable everyday laptop.",
      brandId: B.lenovo, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '15.3"', os: "Windows 11" },
      tags: ["windows", "laptop"],
      images: ["/products/copilot-laptops/8ec39f39a120e63ed9a5_1.jpg"],
      variants: [
        { sku: "IPS3-16-512-GRY", ram: "16GB", storage: "512GB", color: "Arctic Gray", priceAed: 2299, compareAtAed: 2499, stock: 22, weightKg: 1.625, isDefault: true },
      ],
    },
    {
      title: 'Lenovo LOQ 15" Gen 3 Gaming',
      slug: "lenovo-loq-15-gen3",
      description: "Intel Core i5-12600HX, RTX 3050 6GB, 16GB RAM, 512GB SSD, 15\" FHD 144Hz IPS gaming display.",
      brandId: B.lenovo, categoryId: SC["gaming-laptops"],
      attributes: { ram: "16GB", storage: "512GB", screenSize: '15"', os: "Windows 11", gpu: "RTX 3050" },
      tags: ["gaming", "windows", "laptop"],
      images: ["/products/copilot-laptops/40bc0b3a0a6a6f74a8fe_1.jpg"],
      variants: [
        { sku: "LOQ15-16-512-GRY", ram: "16GB", storage: "512GB", color: "Luna Gray", priceAed: 3049, compareAtAed: 3299, stock: 15, weightKg: 2.380, isDefault: true },
      ],
    },
    {
      title: "MSI Modern 14 Copilot+",
      slug: "msi-modern-14",
      description: "Intel Core i5-1334U, 16GB RAM, 512GB SSD, 14\" FHD IPS, ultra-slim business laptop.",
      brandId: B.msi, categoryId: SC.laptops,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["windows", "laptop"],
      images: ["/products/copilot-laptops/52ba6e892c76649ae8c8_1.jpg"],
      variants: [
        { sku: "MOD14-16-512-GRY", ram: "16GB", storage: "512GB", color: "Classic Gray", priceAed: 2199, stock: 20, weightKg: 1.400, isDefault: true },
      ],
    },
    {
      title: "HP Laptop 15 Core 5",
      slug: "hp-laptop-15-fd0325ne",
      description: "Intel Core 5-120U, 24GB RAM, 512GB SSD, 15.6\" FHD IPS, Windows 11 — great everyday performance.",
      brandId: B.hp, categoryId: SC.laptops,
      attributes: { ram: "24GB", storage: "512GB", screenSize: '15.6"', os: "Windows 11" },
      tags: ["windows", "laptop"],
      images: ["/products/copilot-laptops/1c0519f3f397e07d5e20_1.png"],
      variants: [
        { sku: "HP15FD-24-512-SLV", ram: "24GB", storage: "512GB", color: "Natural Silver", priceAed: 2599, stock: 25, weightKg: 1.690, isDefault: true },
      ],
    },
    {
      title: "Lenovo Yoga Book 9 2-in-1",
      slug: "lenovo-yoga-book-9",
      description: "Intel Core Ultra 7-255H, 32GB RAM, 1TB SSD, 14\" dual OLED display — innovative dual-screen convertible.",
      brandId: B.lenovo, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "32GB", storage: "1TB", screenSize: '14"', os: "Windows 11" },
      tags: ["new", "windows", "laptop", "oled", "premium"],
      images: ["/products/copilot-laptops/2d11e9c3b106191dfca6_1.jpg"],
      variants: [
        { sku: "YB9-32-1T-TEAL", ram: "32GB", storage: "1TB", color: "Tidal Teal", priceAed: 8699, compareAtAed: 8999, stock: 6, weightKg: 1.400, isDefault: true },
      ],
    },
    {
      title: 'HP OmniBook 5 Flip 14" Copilot+',
      slug: "hp-omnibook-5-flip",
      description: "Intel Core i7-150U, 16GB RAM, 512GB SSD, 14\" 2K Touch OLED, 360° flip design, Copilot+ AI.",
      brandId: B.hp, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["new", "windows", "laptop", "copilot", "oled"],
      images: ["/products/copilot-laptops/3009c7d49cd671bb22dc_1.jpg"],
      variants: [
        { sku: "OB5F-16-512-SLV", ram: "16GB", storage: "512GB", color: "Moonlight Silver", priceAed: 3899, compareAtAed: 4299, stock: 12, weightKg: 1.740, isDefault: true },
      ],
    },
    {
      title: 'HP OmniBook 3 15" Copilot+',
      slug: "hp-omnibook-3-15",
      description: "AMD Ryzen AI 5-340, 24GB RAM, 512GB SSD, 15.6\" FHD IPS, AI-powered Copilot+ PC.",
      brandId: B.hp, categoryId: SC.laptops,
      attributes: { ram: "24GB", storage: "512GB", screenSize: '15.6"', os: "Windows 11" },
      tags: ["new", "windows", "laptop", "copilot"],
      images: ["/products/copilot-laptops/daf34694d2eb3c484011_1.jpg"],
      variants: [
        { sku: "OB3-24-512-SLV", ram: "24GB", storage: "512GB", color: "Moonlight Silver", priceAed: 2849, compareAtAed: 3099, stock: 18, weightKg: 1.590, isDefault: true },
      ],
    },
    {
      title: "Microsoft Surface Pro 11 Copilot+",
      slug: "microsoft-surface-pro-11",
      description: "Snapdragon X Elite, 16GB RAM, 512GB SSD, 13\" 2880×1920 display, detachable keyboard, Copilot+ AI.",
      brandId: B.microsoft, categoryId: SC.laptops, isFeatured: true,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '13"', os: "Windows 11" },
      tags: ["new", "copilot", "windows", "laptop", "flagship"],
      images: ["/products/copilot-laptops/vtkeytveetke_1_.jpg"],
      variants: [
        { sku: "SPR11-16-512-PLAT", ram: "16GB", storage: "512GB", color: "Platinum", priceAed: 6599, stock: 10, weightKg: 0.894, isDefault: true },
        { sku: "SPR11-32-1T-PLAT",  ram: "32GB", storage: "1TB",   color: "Platinum", priceAed: 8499, stock: 5,  weightKg: 0.894 },
      ],
    },

    // ── Windows Laptops (eros.ae) ─────────────────────────────────────────────
    {
      title: "ASUS Vivobook S 14 Flip AMD",
      slug: "asus-vivobook-s14-flip-amd",
      description: "AMD Ryzen 5-7430U, 8GB RAM, 512GB SSD, 14\" WUXGA 60Hz touchscreen, 360° convertible, Windows 11 Home.",
      brandId: B.asus, categoryId: SC.laptops,
      attributes: { ram: "8GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["windows", "laptop", "2-in-1"],
      images: ["/products/windows-laptops/4b3b555ec76207aff5d44b77b21a9565-hi.jpg"],
      variants: [
        { sku: "VBS14F-AMD-8-512-BLU", ram: "8GB", storage: "512GB", color: "Quiet Blue", priceAed: 2299, stock: 18, weightKg: 1.500, isDefault: true },
      ],
    },
    {
      title: "ASUS Vivobook S 14 Flip Intel",
      slug: "asus-vivobook-s14-flip-intel",
      description: "Intel Core i5-1335U, 8GB RAM, 512GB SSD, 14\" WUXGA IPS 60Hz touchscreen, 360° convertible, Windows 11 Home.",
      brandId: B.asus, categoryId: SC.laptops,
      attributes: { ram: "8GB", storage: "512GB", screenSize: '14"', os: "Windows 11" },
      tags: ["windows", "laptop", "2-in-1"],
      images: ["/products/windows-laptops/71sxxp7jwkl._ac_sl1500__1_.jpg"],
      variants: [
        { sku: "VBS14F-I5-8-512-SLV", ram: "8GB", storage: "512GB", color: "Cool Silver", priceAed: 2499, stock: 15, weightKg: 1.500, isDefault: true },
      ],
    },
    {
      title: "ASUS Vivobook 15",
      slug: "asus-vivobook-15",
      description: "Intel Core i5-1240U, 8GB RAM, 512GB SSD, 15.6\" FHD 1920×1080, Intel UHD Graphics, Windows 11 Home.",
      brandId: B.asus, categoryId: SC.laptops,
      attributes: { ram: "8GB", storage: "512GB", screenSize: '15.6"', os: "Windows 11" },
      tags: ["windows", "laptop"],
      images: ["/products/windows-laptops/71we_msl9-l._ac_sl1500__1.jpg"],
      variants: [
        { sku: "VB15-I5-8-512-SLV", ram: "8GB", storage: "512GB", color: "Cool Silver", priceAed: 2299, stock: 20, weightKg: 1.650, isDefault: true },
      ],
    },
    {
      title: "MSI Thin 15 B13UC Gaming",
      slug: "msi-thin-15-b13uc",
      description: "Intel Core i7-13620H, 16GB RAM, 512GB SSD, 15.6\" FHD 144Hz IPS, NVIDIA GeForce RTX 3050 4GB, Windows 11.",
      brandId: B.msi, categoryId: SC["gaming-laptops"], isFeatured: true,
      attributes: { ram: "16GB", storage: "512GB", screenSize: '15.6"', os: "Windows 11", gpu: "RTX 3050 4GB" },
      tags: ["gaming", "windows", "laptop", "pc"],
      images: ["/products/windows-laptops/9s7-16r831-2610_3_.jpg"],
      variants: [
        { sku: "THIN15-I7-16-512-BLK", ram: "16GB", storage: "512GB", color: "Cosmos Gray", priceAed: 3499, stock: 12, weightKg: 1.860, isDefault: true },
      ],
    },

    {
      title: "Samsung Galaxy Tab S9 FE",
      slug: "samsung-galaxy-tab-s9fe",
      description: "Exynos 1380, 10.9\" TFT 90Hz, S Pen included, IP68, 8000mAh battery.",
      brandId: B.samsung, categoryId: SC.tablets,
      attributes: { ram: "6GB", storage: "128GB", screenSize: '10.9"', os: "Android 14" },
      tags: ["s-pen"],
      images: ["/products/samsung-tab-s9fe/gray.jpg", "/products/samsung-tab-s9fe/silver.jpg"],
      variants: [
        { sku: "TS9FE-128-GRY", storage: "128GB", color: "Graphite",  priceAed: 1399, compareAtAed: 1599, stock: 25, weightKg: 0.523, isDefault: true },
        { sku: "TS9FE-128-SLV", storage: "128GB", color: "Silver",    priceAed: 1399, stock: 20, weightKg: 0.523 },
        { sku: "TS9FE-256-GRY", storage: "256GB", color: "Graphite",  priceAed: 1599, stock: 12, weightKg: 0.523 },
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
