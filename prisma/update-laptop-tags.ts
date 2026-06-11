import path from "path";
import { config } from "dotenv";
config({ path: path.join(import.meta.dirname, "../.env") });

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DIRECT_URL! });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter } as any);

async function main() {
  // Add "pc" tag to all laptop / computing products that have "windows" or "macos" or "copilot" tags
  const laptops = await db.product.findMany({
    where: {
      OR: [
        { tags: { has: "windows" } },
        { tags: { has: "copilot" } },
        { tags: { has: "macos" } },
        { tags: { has: "laptop" } },
      ],
    },
    select: { id: true, slug: true, tags: true },
  });

  for (const p of laptops) {
    const newTags = [...new Set([...p.tags, "pc", "laptop"])];
    await db.product.update({ where: { id: p.id }, data: { tags: newTags } });
    console.log(`✔ ${p.slug} → [${newTags.join(", ")}]`);
  }

  console.log(`\nUpdated ${laptops.length} products.`);
}

main().catch(console.error).finally(() => db.$disconnect());
