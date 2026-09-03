import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { studyMaterials } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteItem, saveItem } from "./actions";

export const metadata: Metadata = { title: "Study Material" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, half: true },
  { name: "slug", label: "Slug", placeholder: "ncert-class-6-history", required: true, half: true },
  { name: "category", label: "Category", placeholder: "NCERT", required: true, half: true },
  { name: "language", label: "Language", placeholder: "en", half: true },
  { name: "fileUrl", label: "File URL", placeholder: "/download/file.pdf" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default async function Page() {
  const session = await requireAdmin();
  const rows = await db.select().from(studyMaterials).orderBy(desc(studyMaterials.createdAt));

  return (
    <AdminShell
      session={session}
      title="Study Material"
      subtitle="Downloadable PDFs listed under the Study Material pages."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All entries</div>
          <ResourceForm action={saveItem} fields={fields} addLabel="Add entry" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">Nothing here yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Language</th>
                  <th>File</th>
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
                    saveAction={saveItem}
                    deleteAction={deleteItem}
                    cells={
                      <>
                        <td><strong>{row.title}</strong><div className="adm-muted">{row.slug}</div></td>
                        <td className="adm-nowrap">{row.category}</td>
                        <td className="adm-nowrap">{row.language}</td>
                        <td className="adm-muted">{row.fileUrl ?? "—"}</td>
                        <td><span className={`adm-badge ${row.published ? "adm-badge-on" : "adm-badge-off"}`}>{row.published ? "Published" : "Draft"}</span></td>
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
