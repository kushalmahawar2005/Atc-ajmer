import type { Metadata } from "next";
import { asc, desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { selections } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteSelection, saveSelection } from "./actions";

export const metadata: Metadata = { title: "Selections" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "studentName", label: "Student name", required: true, half: true },
  { name: "exam", label: "Exam", placeholder: "RAS", required: true, half: true },
  { name: "year", label: "Year", type: "number", required: true, half: true },
  { name: "rank", label: "Rank", type: "number", half: true },
  { name: "photoUrl", label: "Photo URL", placeholder: "/images/selections/name.jpg" },
];

export default async function Page() {
  const session = await requireAdmin();
  const rows = await db.select().from(selections).orderBy(desc(selections.year), asc(selections.rank));

  return (
    <AdminShell
      session={session}
      title="Selections"
      subtitle="Toppers shown in the gallery on /about/selections."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All entries</div>
          <ResourceForm action={saveSelection} fields={fields} addLabel="Add entry" />
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">Nothing here yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Exam</th>
                  <th>Year</th>
                  <th>Rank</th>
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
                    saveAction={saveSelection}
                    deleteAction={deleteSelection}
                    cells={
                      <>
                        <td><strong>{row.studentName}</strong></td>
                        <td className="adm-nowrap">{row.exam}</td>
                        <td>{row.year}</td>
                        <td>{row.rank ?? "—"}</td>
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
