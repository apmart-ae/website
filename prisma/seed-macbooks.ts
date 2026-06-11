import path from "path";
import { config } from "dotenv";
config({ path: path.join(import.meta.dirname, "../.env") });

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DIRECT_URL! });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter } as any);

const PRODUCTS = [
  {
    title: "Apple MacBook Pro 14-inch M5 (2025)",
    slug: "apple-macbook-pro-14-m5-2025",
    description: "The most powerful MacBook Pro ever. M5 chip with 10-core CPU and 10-core GPU, 16GB unified memory, 512GB SSD. ProMotion XDR display with up to 1,000 nits brightness. Space Black finish.",
    tags: ["new", "macos", "laptop", "pc", "macbook", "pro", "apple"],
    attributes: { chip: "Apple M5", cpu: "10-core", gpu: "10-core", ram: "16GB", storage: "512GB SSD", display: '14" Liquid Retina XDR', color: "Space Black", os: "macOS" },
    image: "/products/macbooks/macbook-pro-14-m5-space-black.jpg",
    priceAed: 6499, compareAtAed: 6899,
    sku: "MBP14-M5-16-512-SB",
    weightKg: 1.55,
  },
  {
    title: "Apple MacBook Air 13-inch M5",
    slug: "apple-macbook-air-13-m5",
    description: "Supercharged by M5 chip with 10-core CPU and 8-core GPU. 16GB unified memory, 512GB SSD, and a stunning 13.6-inch Liquid Retina display. Available in Sky Blue.",
    tags: ["new", "macos", "laptop", "pc", "macbook", "air", "apple"],
    attributes: { chip: "Apple M5", cpu: "10-core", gpu: "8-core", ram: "16GB", storage: "512GB SSD", display: '13.6" Liquid Retina', color: "Sky Blue", os: "macOS" },
    image: "/products/macbooks/macbook-air-13-m5-sky-blue.jpg",
    priceAed: 4599, compareAtAed: null,
    sku: "MBA13-M5-16-512-SB",
    weightKg: 1.24,
  },
  {
    title: "Apple MacBook Air 13-inch M4 24GB Midnight",
    slug: "apple-macbook-air-13-m4-midnight",
    description: "MacBook Air with M4 chip, 10-core CPU and 10-core GPU, 24GB unified memory, 512GB SSD. Ultra-thin design with 13.6-inch Liquid Retina display. Midnight finish.",
    tags: ["macos", "laptop", "pc", "macbook", "air", "apple"],
    attributes: { chip: "Apple M4", cpu: "10-core", gpu: "10-core", ram: "24GB", storage: "512GB SSD", display: '13.6" Liquid Retina', color: "Midnight", os: "macOS" },
    image: "/products/macbooks/macbook-air-13-m4-midnight.jpg",
    priceAed: 4499, compareAtAed: 5679,
    sku: "MBA13-M4-24-512-MN",
    weightKg: 1.24,
  },
  {
    title: "Apple MacBook Air 13-inch M4 Silver",
    slug: "apple-macbook-air-13-m4-silver",
    description: "MacBook Air with M4 chip, 10-core CPU and 10-core GPU, 24GB unified memory, 512GB SSD. All-day battery life, MagSafe charging, and a stunning 13.6-inch Liquid Retina display. Silver finish.",
    tags: ["macos", "laptop", "pc", "macbook", "air", "apple"],
    attributes: { chip: "Apple M4", cpu: "10-core", gpu: "10-core", ram: "24GB", storage: "512GB SSD", display: '13.6" Liquid Retina', color: "Silver", os: "macOS" },
    image: "/products/macbooks/macbook-air-13-m4-silver.jpg",
    priceAed: 4499, compareAtAed: 5679,
    sku: "MBA13-M4-24-512-SL",
    weightKg: 1.24,
  },
  {
    title: "Apple MacBook Air 15-inch M4 Sky Blue",
    slug: "apple-macbook-air-15-m4-sky-blue",
    description: "The world's best consumer laptop in a larger 15.3-inch Liquid Retina display. M4 chip, 10-core CPU and 10-core GPU, 16GB unified memory, 256GB SSD. Sky Blue finish.",
    tags: ["macos", "laptop", "pc", "macbook", "air", "apple"],
    attributes: { chip: "Apple M4", cpu: "10-core", gpu: "10-core", ram: "16GB", storage: "256GB SSD", display: '15.3" Liquid Retina', color: "Sky Blue", os: "macOS" },
    image: "/products/macbooks/macbook-air-15-m4-sky-blue.jpg",
    priceAed: 4999, compareAtAed: null,
    sku: "MBA15-M4-16-256-SB",
    weightKg: 1.51,
  },
  {
    title: "Apple MacBook Air 15-inch M4 512GB Midnight",
    slug: "apple-macbook-air-15-m4-midnight",
    description: "Big display. Powerful M4 chip. MacBook Air 15-inch with 10-core CPU and 10-core GPU, 16GB unified memory, 512GB SSD, and a gorgeous 15.3-inch Liquid Retina display. Midnight finish.",
    tags: ["macos", "laptop", "pc", "macbook", "air", "apple"],
    attributes: { chip: "Apple M4", cpu: "10-core", gpu: "10-core", ram: "16GB", storage: "512GB SSD", display: '15.3" Liquid Retina', color: "Midnight", os: "macOS" },
    image: "/products/macbooks/macbook-air-15-m4-midnight.jpg",
    priceAed: 5839, compareAtAed: null,
    sku: "MBA15-M4-16-512-MN",
    weightKg: 1.51,
  },
];

async function main() {
  // Ensure Apple brand exists
  const apple = await db.brand.upsert({
    where: { slug: "apple" },
    update: { logoUrl: "/brand/logos/Apple.jpg" },
    create: { name: "Apple", slug: "apple", logoUrl: "/brand/logos/Apple.jpg" },
  });

  // Ensure laptops sub-category exists under computing
  const computing = await db.category.findUnique({ where: { slug: "computing" } });
  if (!computing) throw new Error("computing category not found — run main seed first");

  const laptopsCat = await db.category.upsert({
    where: { slug: "laptops" },
    update: {},
    create: { name: "Laptops", slug: "laptops", sortOrder: 1, parentId: computing.id },
  });

  let added = 0;
  for (const p of PRODUCTS) {
    const existing = await db.product.findUnique({ where: { slug: p.slug } });
    if (existing) {
      console.log(`  skip (exists): ${p.slug}`);
      continue;
    }

    await db.product.create({
      data: {
        title: p.title,
        slug: p.slug,
        description: p.description,
        brandId: apple.id,
        categoryId: laptopsCat.id,
        isActive: true,
        isFeatured: false,
        attributes: p.attributes as any,
        tags: p.tags,
        images: {
          create: [{ url: p.image, sortOrder: 0 }],
        },
        variants: {
          create: [{
            sku: p.sku,
            priceAed: p.priceAed,
            compareAtAed: p.compareAtAed ?? undefined,
            stock: 15,
            weightKg: p.weightKg,
            isDefault: true,
          }],
        },
      },
    });

    console.log(`  ✔ ${p.title} — AED ${p.priceAed}`);
    added++;
  }

  console.log(`\nDone. Added ${added} / ${PRODUCTS.length} MacBook products.`);
}

main().catch(console.error).finally(() => db.$disconnect());
