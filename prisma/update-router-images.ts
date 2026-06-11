import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import path from "path";
import { config } from "dotenv";

config({ path: path.join(import.meta.dirname, "../.env") });

const pool = new Pool({ connectionString: process.env.DIRECT_URL! });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter } as any);

const updates: { slug: string; url: string }[] = [
  { slug: "tp-link-archer-be900",    url: "/products/routers/tp-link-be900.jpg" },
  { slug: "tp-link-deco-xe75-pro",   url: "/products/routers/tp-link-deco-xe75-pro.png" },
  { slug: "netgear-nighthawk-rs700s",url: "/products/routers/netgear-rs700s.jpg" },
  { slug: "tp-link-re815xe",         url: "/products/routers/tp-link-re815xe.png" },
  { slug: "asus-zenwifi-pro-et12",   url: "/products/routers/asus-zenwifi-et12.jpg" },
];

async function main() {
  for (const { slug, url } of updates) {
    const product = await db.product.findUnique({ where: { slug }, select: { id: true } });
    if (!product) { console.log(`NOT FOUND: ${slug}`); continue; }

    await db.productImage.updateMany({
      where: { productId: product.id },
      data: { url },
    });
    console.log(`✔ ${slug} → ${url}`);
  }
}

main().catch(console.error).finally(() => db.$disconnect());
