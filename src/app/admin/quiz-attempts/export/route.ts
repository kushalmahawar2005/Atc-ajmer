import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { quizAttempts } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { csvResponse, toCsv } from "@/lib/admin/csv";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  await requireAdmin();

  const params = new URL(request.url).searchParams;
  const filter = params.get("filter");
  const from = params.get("from");
  const to = params.get("to");
  const order = params.get("order") === "asc" ? asc : desc;

  const conditions: SQL[] = [];
  if (filter === "new") conditions.push(eq(quizAttempts.handled, false));
  if (filter === "handled") conditions.push(eq(quizAttempts.handled, true));
  if (from) conditions.push(gte(quizAttempts.createdAt, new Date(from)));
  if (to) conditions.push(lte(quizAttempts.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const query = db.select().from(quizAttempts).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query).orderBy(
    order(quizAttempts.createdAt),
  );

  const csv = toCsv(
    ["ID", "Name", "Mobile", "Email", "Quiz date", "Quiz", "Score", "Attempted", "Handled", "Taken"],
    rows.map((row) => [
      row.id,
      row.name,
      row.phone,
      row.email,
      row.quizDate,
      row.quizTitle,
      `${row.correct}/5`,
      row.attempted,
      row.handled ? "Yes" : "No",
      row.createdAt.toISOString(),
    ]),
  );

  const stamp = new Date().toISOString().slice(0, 10);
  return csvResponse(`quiz-leads-${stamp}.csv`, csv);
}
