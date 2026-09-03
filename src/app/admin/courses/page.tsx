import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { courses } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteCourse, saveCourse } from "./actions";

export const metadata: Metadata = { title: "Courses" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, half: true },
  { name: "slug", label: "Slug", placeholder: "ias-foundation", required: true, half: true },
  { name: "titleHi", label: "Title (Hindi)", half: true },
  { name: "category", label: "Category", placeholder: "foundation", half: true },
  { name: "imageUrl", label: "Image URL", placeholder: "/images/ias-foundation.jpeg", half: true },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "summary", label: "Summary", type: "textarea" },
  { name: "summaryHi", label: "Summary (Hindi)", type: "textarea" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default async function CoursesPage() {
  const session = await requireAdmin();
  const rows = await db.select().from(courses).orderBy(asc(courses.sortOrder));

  return (
    <AdminShell
      session={session}
      title="Courses"
      subtitle="Drives the course grid on the home page and the courses listing."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All courses</div>
          <ResourceForm action={saveCourse} fields={fields} addLabel="Add course" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">No courses yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Category</th>
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
                    saveAction={saveCourse}
                    deleteAction={deleteCourse}
                    cells={
                      <>
                        <td className="adm-muted">{row.sortOrder}</td>
                        <td>
                          <strong>{row.title}</strong>
                          {row.summary && (
                            <div className="adm-muted" style={{ maxWidth: 360 }}>
                              {row.summary.slice(0, 110)}
                              {row.summary.length > 110 ? "…" : ""}
                            </div>
                          )}
                        </td>
                        <td className="adm-nowrap adm-muted">{row.slug}</td>
                        <td className="adm-nowrap">{row.category ?? "—"}</td>
                        <td>
                          <span
                            className={`adm-badge ${row.published ? "adm-badge-on" : "adm-badge-off"}`}
                          >
                            {row.published ? "Published" : "Draft"}
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
