// Creates or updates an admin account.
//   node scripts/create-admin.mjs <email> <password> [name] [role]
import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
import { readFileSync } from "node:fs";
import pg from "pg";

const scrypt = promisify(scryptCallback);

// Minimal .env.local reader so this script needs no extra dependency.
for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
}

const [email, password, name = "Administrator", role = "admin"] = process.argv.slice(2);
if (!email || !password) {
  console.error("Usage: node scripts/create-admin.mjs <email> <password> [name] [role]");
  process.exit(1);
}
if (password.length < 8) {
  console.error("Password must be at least 8 characters.");
  process.exit(1);
}

const salt = randomBytes(16);
const key = await scrypt(password, salt, 64);
const hash = `scrypt$${salt.toString("hex")}$${key.toString("hex")}`;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});

await pool.query(
  `INSERT INTO admin_users (email, name, password_hash, role)
   VALUES ($1, $2, $3, $4)
   ON CONFLICT (email) DO UPDATE
     SET name = EXCLUDED.name,
         password_hash = EXCLUDED.password_hash,
         role = EXCLUDED.role,
         active = true`,
  [email.toLowerCase(), name, hash, role],
);

console.log(`Admin account ready: ${email} (${role})`);
await pool.end();
