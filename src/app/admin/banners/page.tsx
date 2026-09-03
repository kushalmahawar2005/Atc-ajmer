import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { banners } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteBanner, saveBanner } from "./actions";

export const metadata: Metadata = { title: "Banners" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "title", label: "Title", half: true },
  { name: "imageUrl", label: "Image URL", placeholder: "/images/slider/slider1.jpeg", required: true, half: true },
  { name: "linkUrl", label: "Link URL", placeholder: "/courses", half: true },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "active", label: "Active", type: "checkbox" },
];

export default async function Page() {
  const session = await requireAdmin();
  const rows = await db.select().from(banners).orderBy(asc(banners.sortOrder));

  return (
    <AdminShell
      session={session}
      title="Banners"
      subtitle="Slides shown in the home page hero carousel."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All entries</div>
          <ResourceForm action={saveBanner} fields={fields} addLabel="Add entry" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">Nothing here yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Link</th>
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
                    saveAction={saveBanner}
                    deleteAction={deleteBanner}
                    cells={
                      <>
                        <td className="adm-muted">{row.sortOrder}</td>
                        <td><strong>{row.title ?? "Untitled"}</strong></td>
                        <td className="adm-muted">{row.imageUrl}</td>
                        <td className="adm-muted">{row.linkUrl ?? "—"}</td>
                        <td><span className={`adm-badge ${row.active ? "adm-badge-on" : "adm-badge-off"}`}>{row.active ? "Active" : "Hidden"}</span></td>
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
