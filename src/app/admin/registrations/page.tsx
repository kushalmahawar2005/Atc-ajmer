import type { Metadata } from "next";
import { Suspense } from "react";
import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import DeleteButton from "@/components/admin/DeleteButton";
import ListToolbar from "@/components/admin/ListToolbar";
import { db } from "@/db";
import { examRegistrations } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { isExamKey } from "@/lib/exam-series";
import { deleteRegistration, toggleRegistrationHandled } from "./actions";

export const metadata: Metadata = { title: "Test Series Registrations" };
export const dynamic = "force-dynamic";

const TABS = [
  { key: undefined, label: "All exams" },
  { key: "ras", label: "RAS" },
  { key: "ias", label: "IAS" },
  { key: "psi", label: "PSI" },
];

export default async function RegistrationsPage({
  searchParams,
}: {
  searchParams: Promise<{ exam?: string; from?: string; to?: string; order?: string }>;
}) {
  const session = await requireAdmin();
  const { exam, from, to, order } = await searchParams;

  const conditions: SQL[] = [];
  if (exam && isExamKey(exam)) conditions.push(eq(examRegistrations.exam, exam));
  if (from) conditions.push(gte(examRegistrations.createdAt, new Date(from)));
  if (to) conditions.push(lte(examRegistrations.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const direction = order === "asc" ? asc : desc;
  const query = db.select().from(examRegistrations).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query)
    .orderBy(direction(examRegistrations.createdAt))
    .limit(500);

  return (
    <AdminShell
      session={session}
      title="Test Series Registrations"
      subtitle="Registrations from the RAS / IAS / PSI offline test-series banner. Each exam is kept separate."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <Suspense fallback={null}>
            <ListToolbar basePath="/admin/registrations" paramName="exam" tabs={TABS} />
          </Suspense>
        </div>

        {rows.length === 0 ? (
          <div className="adm-empty">No registrations match these filters.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Exam</th>
                  <th>Candidate</th>
                  <th>Mobile</th>
                  <th>Place</th>
                  <th>Centre</th>
                  <th>Registered</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span className="adm-badge adm-badge-new">{row.exam.toUpperCase()}</span>
                    </td>
                    <td>
                      <strong>{row.name}</strong>
                      <div className="adm-muted">S/o, D/o {row.fatherName}</div>
                    </td>
                    <td className="adm-nowrap">
                      <a href={`tel:${row.phone}`}>{row.phone}</a>
                    </td>
                    <td className="adm-nowrap">{row.place}</td>
                    <td className="adm-nowrap">{row.centre ?? "—"}</td>
                    <td className="adm-nowrap adm-muted">
                      {row.createdAt.toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td>
                      <span className={`adm-badge ${row.handled ? "adm-badge-off" : "adm-badge-new"}`}>
                        {row.handled ? "Contacted" : "New"}
                      </span>
                    </td>
                    <td>
                      <div className="adm-actions">
                        <form action={toggleRegistrationHandled}>
                          <input type="hidden" name="id" value={row.id} />
                          <input type="hidden" name="handled" value={String(!row.handled)} />
                          <button type="submit" className="adm-btn adm-btn-ghost adm-btn-sm">
                            {row.handled ? "Mark new" : "Mark contacted"}
                          </button>
                        </form>
                        <DeleteButton action={deleteRegistration} id={row.id} />
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
