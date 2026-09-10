import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { coursePlans } from "@/db/schema";
import { confirmedCoursePlans } from "@/lib/course-fees";

const INR = new Intl.NumberFormat("en-IN");

/**
 * Renders the priced plan cards for one course page, straight from the
 * `course_plans` table so fees can be changed from the admin panel.
 */
export default async function CoursePlans({ slug }: { slug: string }) {
  let plans: (typeof coursePlans.$inferSelect)[] = [];

  try {
    plans = await db
      .select()
      .from(coursePlans)
      .where(and(eq(coursePlans.courseSlug, slug), eq(coursePlans.active, true)))
      .orderBy(asc(coursePlans.sortOrder));
  } catch {
    console.error(`[course-plans] database unavailable for ${slug}; using confirmed fees.`);
    plans = confirmedCoursePlans
      .filter((plan) => plan.courseSlug === slug)
      .map((plan, index) => ({ ...plan, id: -(index + 1), active: true }));
  }

  if (plans.length === 0) return null;

  // Preserve the order groups first appear in, so sortOrder controls layout.
  const groups: { label: string | null; plans: typeof plans }[] = [];
  for (const plan of plans) {
    const last = groups[groups.length - 1];
    if (last && last.label === plan.groupLabel) last.plans.push(plan);
    else groups.push({ label: plan.groupLabel, plans: [plan] });
  }

  return (
    <>
      {groups.map((group) => (
        <div key={group.label ?? "ungrouped"}>
          {group.label && (
            <>
              <div className="new">
                <h3>{group.label}</h3>
              </div>
              <br />
            </>
          )}

          <div className="containerbx">
            {group.plans.map((plan) => (
              <div className="boxbx" key={plan.id}>
                <div className="title-barbx">{plan.title}</div>
                <div className="contentbx">
                  {plan.description}
                  {plan.description && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                  {plan.fees !== null && (
                    <>
                      <b>Fees : Rs {INR.format(plan.fees)} </b>
                      <br />
                    </>
                  )}
                  {plan.feeNote && (
                    <>
                      {plan.feeNote}
                      <br />
                    </>
                  )}
                  {plan.oneTimePayment !== null && (
                    <>
                      One Time Payment :- {INR.format(plan.oneTimePayment)}/-
                      <br />
                    </>
                  )}
                  {plan.mode && <b>Mode : {plan.mode}</b>}
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}
