"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { quizAttempts } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";

export async function toggleHandled(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const handled = formData.get("handled") === "true";
  if (!Number.isFinite(id)) return;

  await db.update(quizAttempts).set({ handled }).where(eq(quizAttempts.id, id));
  revalidatePath("/admin/quiz-attempts");
  revalidatePath("/admin");
}

export async function deleteAttempt(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(quizAttempts).where(eq(quizAttempts.id, id));
  revalidatePath("/admin/quiz-attempts");
  revalidatePath("/admin");
}
