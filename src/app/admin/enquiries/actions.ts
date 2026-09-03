"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";

export async function toggleHandled(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const handled = formData.get("handled") === "true";
  if (!Number.isFinite(id)) return;

  await db.update(enquiries).set({ handled }).where(eq(enquiries.id, id));
  revalidatePath("/admin/enquiries");
  revalidatePath("/admin");
}

export async function toggleQualified(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const qualified = formData.get("qualified") === "true";
  if (!Number.isFinite(id)) return;

  await db.update(enquiries).set({ qualified }).where(eq(enquiries.id, id));
  revalidatePath("/admin/enquiries");
  revalidatePath("/admin");
}

export async function deleteEnquiry(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(enquiries).where(eq(enquiries.id, id));
  revalidatePath("/admin/enquiries");
  revalidatePath("/admin");
}
