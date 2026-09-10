import { and, eq } from "drizzle-orm";
import { coursePlans } from "../src/db/schema";
import { confirmedCoursePlans } from "../src/lib/course-fees";

/** Targeted, repeatable fee update. Preview by default; --apply writes in one transaction. */
async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log("tsx --env-file=.env.local scripts/update-course-fees.ts [--apply]");
    return;
  }
  if (args.some((arg) => arg !== "--apply")) throw new Error("Unknown option. Use --help.");
  const apply = args.includes("--apply");
  const { db, pool } = await import("../src/db/index");
  try {
    await db.transaction(async (tx) => {
      let updated = 0;
      for (const plan of confirmedCoursePlans) {
        const matches = await tx.select().from(coursePlans).where(and(
          eq(coursePlans.courseSlug, plan.courseSlug),
          eq(coursePlans.title, plan.title),
          eq(coursePlans.mode, plan.mode),
        ));
        if (matches.length > 1) throw new Error(`Ambiguous plan: ${plan.courseSlug} / ${plan.title}. No changes committed.`);
        if (!matches.length) {
          console.log(`Missing; skipped: ${plan.courseSlug} / ${plan.title}`);
          continue;
        }
        const current = matches[0];
        if (current.fees === plan.fees && current.oneTimePayment === plan.oneTimePayment && current.feeNote === plan.feeNote) continue;
        console.log(`${apply ? "Update" : "Preview"}: ${plan.courseSlug} / ${plan.title}: fee ${current.fees} → ${plan.fees}; one-time ${current.oneTimePayment ?? "none"} → ${plan.oneTimePayment ?? "none"}; ${plan.feeNote}`);
        if (apply) await tx.update(coursePlans).set({
          fees: plan.fees,
          oneTimePayment: plan.oneTimePayment,
          feeNote: plan.feeNote,
        }).where(eq(coursePlans.id, current.id));
        updated += 1;
      }
      console.log(`${updated} plan(s) ${apply ? "updated" : "would change; re-run with --apply to save"}.`);
    });
  } finally {
    await pool.end();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Course fee update failed.");
  process.exitCode = 1;
});
