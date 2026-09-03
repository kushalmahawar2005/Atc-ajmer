import { and, asc, desc, eq, gte, lte, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
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
  if (filter === "qualified") conditions.push(eq(enquiries.qualified, true));
  if (filter === "new") conditions.push(eq(enquiries.handled, false));
  if (filter === "handled") conditions.push(eq(enquiries.handled, true));
  if (from) conditions.push(gte(enquiries.createdAt, new Date(from)));
  // `to` is a plain date, so include the whole of that day.
  if (to) conditions.push(lte(enquiries.createdAt, new Date(`${to}T23:59:59.999Z`)));

  const query = db.select().from(enquiries).$dynamic();
  const rows = await (conditions.length > 0 ? query.where(and(...conditions)) : query).orderBy(
    order(enquiries.createdAt),
  );

  const csv = toCsv(
    ["ID", "Name", "Email", "Phone", "Course", "Message", "Source", "Qualified", "Handled", "Received"],
    rows.map((row) => [
      row.id,
      row.fullName,
      row.email,
      row.phone,
      row.course,
      row.message,
      row.source,
      row.qualified ? "Yes" : "No",
      row.handled ? "Yes" : "No",
      row.createdAt.toISOString(),
    ]),
  );

  const stamp = new Date().toISOString().slice(0, 10);
  return csvResponse(`enquiries-${filter ?? "all"}-${stamp}.csv`, csv);
}
