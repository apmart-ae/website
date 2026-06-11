import path from "path";
import { config } from "dotenv";
config({ path: path.join(import.meta.dirname, "../.env") });

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DIRECT_URL! });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter } as any);

const updates = [
  { slug: "asus-vivobook-s14-flip-amd",   url: "/products/windows-laptops/asus-vivobook-s14-flip.jpg" },
  { slug: "asus-vivobook-s14-flip-intel",  url: "/products/windows-laptops/asus-vivobook-s14-flip.jpg" },
  { slug: "asus-vivobook-15",             url: "/products/windows-laptops/asus-vivobook-15.jpg" },
  { slug: "msi-thin-15-b13uc",            url: "/products/windows-laptops/9s7-16r831-2610_3_.jpg" },
];

async function main() {
  for (const { slug, url } of updates) {
    const product = await db.product.findUnique({ where: { slug }, select: { id: true } });
    if (!product) { console.log(`NOT FOUND: ${slug}`); continue; }
    await db.productImage.updateMany({ where: { productId: product.id }, data: { url } });
    console.log(`✔ ${slug} → ${url}`);
  }
}

main().catch(console.error).finally(() => db.$disconnect());
