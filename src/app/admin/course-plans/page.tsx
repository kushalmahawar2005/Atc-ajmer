import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { coursePlans } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deletePlan, savePlan } from "./actions";

export const metadata: Metadata = { title: "Course Plans & Fees" };
export const dynamic = "force-dynamic";

const INR = new Intl.NumberFormat("en-IN");

const fields: Field[] = [
  { name: "courseSlug", label: "Course page slug", placeholder: "ias-foundation", required: true, half: true },
  { name: "title", label: "Plan title", required: true, half: true },
  { name: "groupLabel", label: "Group heading", placeholder: "Offline / Classroom Courses", half: true },
  { name: "mode", label: "Mode", placeholder: "Offline / Classroom", half: true },
  { name: "fees", label: "Fees (₹)", type: "number", half: true },
  { name: "oneTimePayment", label: "One-time payment (₹)", type: "number", half: true },
  { name: "feeNote", label: "Fee note", placeholder: "GST Included in the Fees", half: true },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "description", label: "Description", type: "textarea" },
  { name: "active", label: "Show on the website", type: "checkbox" },
];

export default async function CoursePlansPage() {
  const session = await requireAdmin();
  const rows = await db
    .select()
    .from(coursePlans)
    .orderBy(asc(coursePlans.courseSlug), asc(coursePlans.sortOrder));

  return (
    <AdminShell
      session={session}
      title="Course Plans & Fees"
      subtitle="Every priced card on the course and test-series pages. Edit a fee here and the website updates."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All plans</div>
          <ResourceForm action={savePlan} fields={fields} addLabel="Add plan" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">No plans yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Course page</th>
                  <th>Plan</th>
                  <th>Fees</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <InlineEditRow
                    key={row.id}
                    id={row.id}
                    columns={6}
                    fields={fields}
                    values={row}
                    saveAction={savePlan}
                    deleteAction={deletePlan}
                    cells={
                      <>
                        <td className="adm-nowrap adm-muted">
                          {row.courseSlug}
                          <div className="adm-muted">{row.groupLabel ?? "—"}</div>
                        </td>
                        <td>
                          <strong>{row.title}</strong>
                          <div className="adm-muted">#{row.sortOrder}</div>
                        </td>
                        <td className="adm-nowrap">
                          {row.fees === null ? "—" : `₹${INR.format(row.fees)}`}
                          {row.oneTimePayment !== null && (
                            <div className="adm-muted">
                              One-time ₹{INR.format(row.oneTimePayment)}
                            </div>
                          )}
                        </td>
                        <td className="adm-nowrap">{row.mode ?? "—"}</td>
                        <td>
                          <span
                            className={`adm-badge ${row.active ? "adm-badge-on" : "adm-badge-off"}`}
                          >
                            {row.active ? "Live" : "Hidden"}
                          </span>
                        </td>
                      </>
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
