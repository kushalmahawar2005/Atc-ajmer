// Diagnoses the production database connection.
//   node scripts/db-doctor.mjs
// Reads .env.local when present; real environment variables win.
import { existsSync, readFileSync } from "node:fs";
import pg from "pg";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
  }
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Add it to the hosting panel's environment variables.");
  process.exit(1);
}

// Never print the password back out.
let target = "unparseable";
try {
  const parsed = new URL(url);
  target = `${parsed.hostname}:${parsed.port || 5432}${parsed.pathname} as ${parsed.username}`;
} catch {}

console.log(`DATABASE_URL   -> ${target}`);
console.log(`DATABASE_SSL   -> ${process.env.DATABASE_SSL ?? "(unset)"}`);
console.log(`ADMIN_SESSION_SECRET -> ${process.env.ADMIN_SESSION_SECRET ? "set" : "MISSING"}`);

const pool = new pg.Pool({
  connectionString: url,
  connectionTimeoutMillis: 10_000,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});

try {
  const { rows } = await pool.query("select current_database() as db, current_user as who");
  console.log(`\nConnected OK: ${rows[0].db} as ${rows[0].who}`);
} catch (error) {
  console.error(`\nConnection FAILED: ${error.code ?? "no code"} — ${error.message}`);
  await pool.end();
  process.exit(1);
}

try {
  const { rows } = await pool.query("select count(*)::int as n from admin_users");
  console.log(`admin_users table exists, ${rows[0].n} row(s).`);
  if (rows[0].n === 0) {
    console.log("No accounts yet — run: npm run admin:create -- <email> <password> 'Name' admin");
  }
} catch (error) {
  if (error.code === "42P01") {
    console.error("admin_users table is MISSING — migrations have not run. Run: npm run db:migrate");
  } else {
    console.error(`admin_users check failed: ${error.code ?? "no code"} — ${error.message}`);
  }
}

await pool.end();
