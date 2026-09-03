"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { selections } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { int, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/about/selections"];

function values(formData: FormData) {
  return {
    studentName: required(formData, "studentName"),
    exam: required(formData, "exam"),
    year: int(formData, "year"),
    // Blank rank stays NULL rather than becoming a literal 0.
    rank: text(formData, "rank") ? int(formData, "rank") : null,
    photoUrl: text(formData, "photoUrl"),
  };
}

export async function saveSelection(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.studentName || !data.exam) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(selections).set(data).where(eq(selections.id, id));
  } else {
    await db.insert(selections).values(data);
  }

  revalidateFor("/admin/selections", PUBLIC_PATHS);
}

export async function deleteSelection(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(selections).where(eq(selections.id, id));
  revalidateFor("/admin/selections", PUBLIC_PATHS);
}
