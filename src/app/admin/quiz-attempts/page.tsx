import type { Metadata } from "next";
import { Suspense } from "react";
import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import DeleteButton from "@/components/admin/DeleteButton";
import ListToolbar from "@/components/admin/ListToolbar";
import { db } from "@/db";
import { quizAttempts } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteAttempt, toggleHandled } from "./actions";

export const metadata: Metadata = { title: "Quiz Leads" };
export const dynamic = "force-dynamic";

const TABS = [
  { key: undefined, label: "All" },
  { key: "new", label: "New" },
  { key: "handled", label: "Handled" },
];

export default async function QuizAttemptsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; from?: string; to?: string; order?: string }>;
}) {
  const session = await requireAdmin();
  const { filter, from, to, order } = await searchParams;

  const conditions: SQL[] = [];
  if (filter === "new") conditions.push(eq(quizAttempts.handled, false));
  if (filter === "handled") conditions.push(eq(quizAttempts.handled, true));
  if (from) conditions.push(gte(quizAttempts.createdAt, new Date(from)));
  if (to) conditions.push(lte(quizAttempts.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const direction = order === "asc" ? asc : desc;
  const query = db.select().from(quizAttempts).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query)
    .orderBy(direction(quizAttempts.createdAt))
    .limit(500);

  return (
    <AdminShell
      session={session}
      title="Quiz Leads"
      subtitle="Everyone who submitted a daily quiz, with the details they gave."
    >
      <div className="adm-panel">
        <div className="adm-panel-head">
          <Suspense fallback={null}>
            <ListToolbar basePath="/admin/quiz-attempts" paramName="filter" tabs={TABS} />
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
                  <th>Quiz</th>
                  <th>Score</th>
                  <th>Taken</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <strong>{row.name}</strong>
                      <div className="adm-muted">
                        <a href={`tel:${row.phone}`}>{row.phone}</a>
                      </div>
                      {row.email && (
                        <div className="adm-muted">
                          <a href={`mailto:${row.email}`}>{row.email}</a>
                        </div>
                      )}
                    </td>
                    <td style={{ maxWidth: 260 }}>
                      {row.quizTitle}
                      <div className="adm-muted">{row.quizDate}</div>
                    </td>
                    <td className="adm-nowrap">
                      <strong>{row.correct}/5</strong>
                      <div className="adm-muted">{row.attempted} attempted</div>
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
                    </td>
                    <td>
                      <div className="adm-actions">
                        <form action={toggleHandled}>
                          <input type="hidden" name="id" value={row.id} />
                          <input type="hidden" name="handled" value={String(!row.handled)} />
                          <button type="submit" className="adm-btn adm-btn-ghost adm-btn-sm">
                            {row.handled ? "Mark new" : "Mark handled"}
                          </button>
                        </form>
                        <DeleteButton action={deleteAttempt} id={row.id} />
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
