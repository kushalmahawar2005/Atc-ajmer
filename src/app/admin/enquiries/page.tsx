import type { Metadata } from "next";
import { Suspense } from "react";
import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import DeleteButton from "@/components/admin/DeleteButton";
import ListToolbar from "@/components/admin/ListToolbar";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteEnquiry, toggleHandled, toggleQualified } from "./actions";

export const metadata: Metadata = { title: "Enquiries" };
export const dynamic = "force-dynamic";

const TABS = [
  { key: undefined, label: "All" },
  { key: "new", label: "New" },
  { key: "qualified", label: "Qualified" },
  { key: "handled", label: "Handled" },
];

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; from?: string; to?: string; order?: string }>;
}) {
  const session = await requireAdmin();
  const { filter, from, to, order } = await searchParams;

  const conditions: SQL[] = [];
  if (filter === "qualified") conditions.push(eq(enquiries.qualified, true));
  if (filter === "new") conditions.push(eq(enquiries.handled, false));
  if (filter === "handled") conditions.push(eq(enquiries.handled, true));
  if (from) conditions.push(gte(enquiries.createdAt, new Date(from)));
  if (to) conditions.push(lte(enquiries.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const direction = order === "asc" ? asc : desc;
  const query = db.select().from(enquiries).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query)
    .orderBy(direction(enquiries.createdAt))
    .limit(500);

  return (
    <AdminShell
      session={session}
      title="Enquiries"
      subtitle="Submissions from the website's Enquire Now form."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <Suspense fallback={null}>
            <ListToolbar basePath="/admin/enquiries" paramName="filter" tabs={TABS} />
          </Suspense>
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">Nothing matches these filters.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Course</th>
                  <th>Message</th>
                  <th>Received</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <strong>{row.fullName}</strong>
                      <div className="adm-muted">
                        <a href={`mailto:${row.email}`}>{row.email}</a>
                      </div>
                      <div className="adm-muted">
                        <a href={`tel:${row.phone}`}>{row.phone}</a>
                      </div>
                    </td>
                    <td className="adm-nowrap">{row.course ?? "—"}</td>
                    <td style={{ maxWidth: 300 }}>
                      {row.message || <span className="adm-muted">—</span>}
                    </td>
                    <td className="adm-nowrap adm-muted">
                      {row.createdAt.toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="adm-nowrap">
                      <span className={`adm-badge ${row.handled ? "adm-badge-off" : "adm-badge-new"}`}>
                        {row.handled ? "Handled" : "New"}
                      </span>
                      {row.qualified && (
                        <div style={{ marginTop: 4 }}>
                          <span className="adm-badge adm-badge-on">Qualified</span>
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="adm-actions">
                        <form action={toggleQualified}>
                          <input type="hidden" name="id" value={row.id} />
                          <input type="hidden" name="qualified" value={String(!row.qualified)} />
                          <button type="submit" className="adm-btn adm-btn-ghost adm-btn-sm">
                            {row.qualified ? "Unqualify" : "Qualify"}
                          </button>
                        </form>
                        <form action={toggleHandled}>
                          <input type="hidden" name="id" value={row.id} />
                          <input type="hidden" name="handled" value={String(!row.handled)} />
                          <button type="submit" className="adm-btn adm-btn-ghost adm-btn-sm">
                            {row.handled ? "Mark new" : "Mark handled"}
                          </button>
                        </form>
                        <DeleteButton action={deleteEnquiry} id={row.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
