import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { batches } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteBatch, saveBatch } from "./actions";

export const metadata: Metadata = { title: "Batches" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "name", label: "Name", required: true, half: true },
  { name: "startsOn", label: "Starts on", placeholder: "11 August 2026", required: true, half: true },
  { name: "mode", label: "Mode", placeholder: "Offline / Online", half: true },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "active", label: "Active", type: "checkbox" },
];

export default async function Page() {
  const session = await requireAdmin();
  const rows = await db.select().from(batches).orderBy(asc(batches.sortOrder));

  return (
    <AdminShell
      session={session}
      title="Batches"
      subtitle="Drives the “Admissions Open — New Batches” block on the home page."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All entries</div>
          <ResourceForm action={saveBatch} fields={fields} addLabel="Add entry" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">Nothing here yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Name</th>
                  <th>Starts on</th>
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
                    saveAction={saveBatch}
                    deleteAction={deleteBatch}
                    cells={
                      <>
                        <td className="adm-muted">{row.sortOrder}</td>
                        <td><strong>{row.name}</strong></td>
                        <td className="adm-nowrap">{row.startsOn}</td>
                        <td>{row.mode ?? "—"}</td>
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
