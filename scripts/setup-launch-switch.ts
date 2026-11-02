import { eq, sql } from "drizzle-orm";
import { siteSettings } from "../src/db/schema";

/**
 * Prepares a database for the /admin/launch switch: creates the site_settings
 * table (same SQL as drizzle/0005_site_settings.sql) and records the site as
 * not live yet. Preview by default; --apply writes. Safe to re-run, and never
 * changes the switch once it exists.
 */
async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log("tsx --env-file=<env file> scripts/setup-launch-switch.ts [--apply]");
    return;
  }
  if (args.some((arg) => arg !== "--apply")) throw new Error("Unknown option. Use --help.");
  const apply = args.includes("--apply");
  const { db, pool } = await import("../src/db/index");

  try {
    const { rows } = await db.execute<{ exists: boolean }>(
      sql`select to_regclass('public.site_settings') is not null as exists`,
    );
    const tableExists = rows[0]?.exists === true;

    if (tableExists) {
      const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, "site_live"));
      console.log(`site_settings table exists. site_live = ${row?.value ?? "(not set, treated as false)"}`);
      if (!row && apply) {
        await db.insert(siteSettings).values({ key: "site_live", value: "false" });
        console.log("Applied: site_live = false");
      }
      return;
    }

    console.log(`${apply ? "Applied" : "Preview"}: create site_settings table and set site_live = false`);
    if (!apply) {
      console.log("Re-run with --apply to save.");
      return;
    }
    await db.transaction(async (tx) => {
      await tx.execute(sql`
        CREATE TABLE IF NOT EXISTS "site_settings" (
          "key" varchar(64) PRIMARY KEY NOT NULL,
          "value" text NOT NULL,
          "updated_at" timestamp with time zone DEFAULT now() NOT NULL
        )
      `);
      await tx.insert(siteSettings).values({ key: "site_live", value: "false" }).onConflictDoNothing();
    });
    console.log("Done. The website stays on the under-development page until launched.");
  } finally {
    await pool.end();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Launch switch setup failed.");
  process.exitCode = 1;
});
