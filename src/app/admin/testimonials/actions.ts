"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, int, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/"];

function values(formData: FormData) {
  const kind = (text(formData, "kind") ?? "student").toLowerCase();
  return {
    // Anything that isn't "faculty" lands in the student group.
    kind: kind === "faculty" ? "faculty" : "student",
    name: required(formData, "name"),
    role: text(formData, "role"),
    quote: required(formData, "quote"),
    photoUrl: text(formData, "photoUrl"),
    sortOrder: int(formData, "sortOrder"),
    active: bool(formData, "active"),
  };
}

export async function saveTestimonial(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.name || !data.quote) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(testimonials).set(data).where(eq(testimonials.id, id));
  } else {
    await db.insert(testimonials).values(data);
  }

  revalidateFor("/admin/testimonials", PUBLIC_PATHS);
}

export async function deleteTestimonial(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(testimonials).where(eq(testimonials.id, id));
  revalidateFor("/admin/testimonials", PUBLIC_PATHS);
}
