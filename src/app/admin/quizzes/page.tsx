import { desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import QuizEditor from "@/components/quiz/QuizEditor";
import { requireAdmin } from "@/lib/admin/auth";
import { db } from "@/db";
import { dailyQuizzes } from "@/db/schema";
import "@/styles/quiz.css";
export const dynamic = "force-dynamic";
export default async function Page() {
  const session = await requireAdmin();
  const rows = await db
    .select()
    .from(dailyQuizzes)
    .orderBy(desc(dailyQuizzes.quizDate));
  return (
    <AdminShell
      session={session}
      title="Daily Quiz"
      subtitle="Create five questions for each day. Save drafts, edit answers, or unpublish using the Publish checkbox."
    >
      <details className="adm-panel">
        <summary>Add a quiz</summary>
        <QuizEditor />
      </details>
      {rows.map((q) => (
        <details className="adm-panel" key={q.id}>
          <summary>
            {q.quizDate} · {q.title} ·{" "}
            {q.published ? "Published / scheduled" : "Draft"}
          </summary>
          <QuizEditor quiz={q} />
        </details>
      ))}
    </AdminShell>
  );
}
