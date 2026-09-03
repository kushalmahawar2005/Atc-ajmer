import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { examRegistrations } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { csvResponse, toCsv } from "@/lib/admin/csv";
import { isExamKey } from "@/lib/exam-series";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  await requireAdmin();

  const params = new URL(request.url).searchParams;
  const exam = params.get("exam");
  const from = params.get("from");
  const to = params.get("to");
  const order = params.get("order") === "asc" ? asc : desc;

  const conditions: SQL[] = [];
  if (exam && isExamKey(exam)) conditions.push(eq(examRegistrations.exam, exam));
  if (from) conditions.push(gte(examRegistrations.createdAt, new Date(from)));
  if (to) conditions.push(lte(examRegistrations.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const query = db.select().from(examRegistrations).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query).orderBy(
    order(examRegistrations.createdAt),
  );

  const csv = toCsv(
    ["ID", "Exam", "Name", "Father's Name", "Mobile", "Place", "Centre", "Handled", "Registered"],
    rows.map((row) => [
      row.id,
      row.exam.toUpperCase(),
      row.name,
      row.fatherName,
      row.phone,
      row.place,
      row.centre,
      row.handled ? "Yes" : "No",
      row.createdAt.toISOString(),
    ]),
  );

  const stamp = new Date().toISOString().slice(0, 10);
  return csvResponse(`registrations-${exam ?? "all"}-${stamp}.csv`, csv);
}
