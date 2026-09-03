import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

declare global {
  var __sbPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Copy .env.example to .env.local.");
  }

  return new Pool({
    connectionString,
    // Hostinger's managed Postgres terminates idle sockets fairly aggressively.
    max: Number(process.env.DATABASE_POOL_MAX ?? 10),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  });
}

// Reuse the pool across HMR reloads in dev so we don't leak connections.
const pool = global.__sbPool ?? createPool();
if (process.env.NODE_ENV !== "production") global.__sbPool = pool;

export const db = drizzle(pool, { schema });
export { pool, schema };
