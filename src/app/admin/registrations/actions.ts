"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { examRegistrations } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";

export async function toggleRegistrationHandled(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const handled = formData.get("handled") === "true";
  if (!Number.isFinite(id)) return;

  await db.update(examRegistrations).set({ handled }).where(eq(examRegistrations.id, id));
  revalidatePath("/admin/registrations");
}

export async function deleteRegistration(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(examRegistrations).where(eq(examRegistrations.id, id));
  revalidatePath("/admin/registrations");
}
