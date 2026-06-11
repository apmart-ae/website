import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join(import.meta.dirname, "prisma/schema.prisma"),
  migrate: {
    adapter: async (env) => {
      const { PrismaPg } = await import("@prisma/adapter-pg");
      const { Pool } = await import("pg");
      const pool = new Pool({ connectionString: env.DIRECT_URL });
      return new PrismaPg(pool);
    },
  },
});
