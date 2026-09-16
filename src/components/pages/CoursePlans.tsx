import { getCoursePlans, type CoursePlan } from "@/lib/course-plans";

const INR = new Intl.NumberFormat("en-IN");

/** Renders the priced plan cards for one course page. */
export default async function CoursePlans({ slug }: { slug: string }) {
  const plans = await getCoursePlans(slug);

  if (plans.length === 0) return null;

  // Preserve the order groups first appear in, so sortOrder controls layout.
  const groups: { label: string | null; plans: CoursePlan[] }[] = [];
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
