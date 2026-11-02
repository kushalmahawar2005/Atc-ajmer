import { and, eq } from "drizzle-orm";
import { coursePlans } from "../src/db/schema";

const AVAILABLE_SOON_RAS = "Test Series will be available soon";
const IAS_TEST_GROUP = "IAS Prelims / Mains Offline Test Series";

/** Cards retired from the public pages. Deactivated, not deleted, so admins can restore them. */
const retired = [
  { courseSlug: "ras-foundation", title: "RAS Foundation Recorded" },
  { courseSlug: "rajasthan-psi", title: "RAS Prelims Live Course" },
];

const edits = [
  {
    courseSlug: "ias-foundation",
    title: "Optional Subject - PSIR",
    set: {
      description: "Optional Subject PSIR (Political Science & International Relations) for IAS",
    },
  },
  {
    courseSlug: "ias-test-series",
    title: "IAS Mains Offline Test Series",
    set: { groupLabel: IAS_TEST_GROUP },
  },
  {
    courseSlug: "ias-test-series",
    title: "IAS Mains Online Test Series",
    set: { title: "IAS Prelims Offline Test Series", groupLabel: IAS_TEST_GROUP },
  },
  // Keep the online group after the three offline RAS boxes.
  { courseSlug: "ras-foundation", title: "RAS Foundation - Online", set: { sortOrder: 4 } },
  { courseSlug: "ras-foundation", title: "RAS Prelims Live from Classroom", set: { sortOrder: 5 } },
];

const RAS_OFFLINE_GROUP = "Offline / Classroom Courses for RAS Foundation";
const FIVE_MONTH_FEE_NOTE = "GST Included in the Fees · Duration: 5 months";

const additions: (typeof coursePlans.$inferInsert)[] = [
  {
    courseSlug: "ras-foundation",
    groupLabel: RAS_OFFLINE_GROUP,
    title: "RAS Prelims Course",
    description: "Exclusive Classroom batch for the preparation of RAS Prelims Exam",
    fees: 35000,
    feeNote: FIVE_MONTH_FEE_NOTE,
    mode: "Offline / Classroom",
    sortOrder: 2,
  },
  {
    courseSlug: "ras-foundation",
    groupLabel: RAS_OFFLINE_GROUP,
    title: "RAS Mains Course",
    description: "Exclusive Classroom batch for the preparation of RAS Mains Exam",
    fees: 60000,
    oneTimePayment: 55000,
    feeNote: FIVE_MONTH_FEE_NOTE,
    mode: "Offline / Classroom",
    sortOrder: 3,
  },
  {
    courseSlug: "ras-test-series",
    groupLabel: "RAS Prelims / Mains Test Series",
    title: "RAS Prelims Test Series",
    description: AVAILABLE_SOON_RAS,
    feeNote: null,
    sortOrder: 1,
  },
  {
    courseSlug: "ras-test-series",
    groupLabel: "RAS Prelims / Mains Test Series",
    title: "RAS Mains Test Series",
    description: AVAILABLE_SOON_RAS,
    feeNote: null,
    sortOrder: 2,
  },
  {
    courseSlug: "psi-test-series",
    groupLabel: "Rajasthan PSI Test Series",
    title: "PSI Test Series",
    description: "Available Soon",
    feeNote: null,
    sortOrder: 1,
  },
];

/**
 * Applies the client's course-card corrections to an existing database.
 * Preview by default; --apply writes in one transaction. Safe to re-run.
 */
async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log("tsx --env-file=<env file> scripts/apply-plan-corrections.ts [--apply]");
    return;
  }
  if (args.some((arg) => arg !== "--apply")) throw new Error("Unknown option. Use --help.");
  const apply = args.includes("--apply");
  const { db, pool } = await import("../src/db/index");
  const verb = apply ? "Applied" : "Preview";

  const find = (tx: Pick<typeof db, "select">, courseSlug: string, title: string) =>
    tx
      .select()
      .from(coursePlans)
      .where(and(eq(coursePlans.courseSlug, courseSlug), eq(coursePlans.title, title)));

  try {
    await db.transaction(async (tx) => {
      let changes = 0;

      for (const plan of retired) {
        for (const row of await find(tx, plan.courseSlug, plan.title)) {
          if (!row.active) continue;
          console.log(`${verb}: deactivate ${plan.courseSlug} / ${plan.title}`);
          if (apply) {
            await tx.update(coursePlans).set({ active: false }).where(eq(coursePlans.id, row.id));
          }
          changes += 1;
        }
      }

      for (const edit of edits) {
        const rows = await find(tx, edit.courseSlug, edit.title);
        if (rows.length > 1) {
          throw new Error(`Ambiguous plan: ${edit.courseSlug} / ${edit.title}. No changes committed.`);
        }
        const [row] = rows;
        if (!row) {
          console.log(`Not found; skipped: ${edit.courseSlug} / ${edit.title}`);
          continue;
        }
        const differs = Object.entries(edit.set).some(
          ([key, value]) => row[key as keyof typeof row] !== value,
        );
        if (!differs) continue;
        console.log(`${verb}: update ${edit.courseSlug} / ${edit.title}: ${JSON.stringify(edit.set)}`);
        if (apply) {
          await tx.update(coursePlans).set(edit.set).where(eq(coursePlans.id, row.id));
        }
        changes += 1;
      }

      for (const plan of additions) {
        if ((await find(tx, plan.courseSlug, plan.title)).length > 0) continue;
        console.log(`${verb}: add ${plan.courseSlug} / ${plan.title}`);
        if (apply) await tx.insert(coursePlans).values(plan);
        changes += 1;
      }

      console.log(`${changes} change(s) ${apply ? "saved" : "pending; re-run with --apply to save"}.`);
    });
  } finally {
    await pool.end();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Plan corrections failed.");
  process.exitCode = 1;
});
