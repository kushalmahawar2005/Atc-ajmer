import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteTestimonial, saveTestimonial } from "./actions";

export const metadata: Metadata = { title: "Testimonials" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "name", label: "Name", required: true, half: true },
  { name: "kind", label: "Group (faculty or student)", placeholder: "student", half: true },
  { name: "role", label: "Role / rank", placeholder: "RAS 2024, Rank 6", half: true },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "photoUrl", label: "Photo URL", placeholder: "/images/selections/name.jpg" },
  { name: "quote", label: "Quote", type: "textarea", required: true },
  { name: "active", label: "Show on the website", type: "checkbox" },
];

export default async function TestimonialsPage() {
  const session = await requireAdmin();
  const rows = await db
    .select()
    .from(testimonials)
    .orderBy(asc(testimonials.kind), asc(testimonials.sortOrder));

  return (
    <AdminShell
      session={session}
      title="Testimonials"
      subtitle="Shown on the home page in two tabs the visitor swaps between: faculty and students."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All testimonials</div>
          <ResourceForm action={saveTestimonial} fields={fields} addLabel="Add testimonial" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">
            No testimonials yet — the section stays hidden until you add one.
          </div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Person</th>
                  <th>Quote</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <InlineEditRow
                    key={row.id}
                    id={row.id}
                    columns={5}
                    fields={fields}
                    values={row}
                    saveAction={saveTestimonial}
                    deleteAction={deleteTestimonial}
                    cells={
                      <>
                        <td>
                          <span className="adm-badge adm-badge-new">
                            {row.kind === "faculty" ? "Faculty" : "Student"}
                          </span>
                        </td>
                        <td>
                          <strong>{row.name}</strong>
                          <div className="adm-muted">{row.role ?? "—"}</div>
                        </td>
                        <td style={{ maxWidth: 380 }}>
                          {row.quote.slice(0, 140)}
                          {row.quote.length > 140 ? "…" : ""}
                        </td>
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
