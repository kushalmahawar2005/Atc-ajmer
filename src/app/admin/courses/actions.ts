"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { courses } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, int, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/", "/courses"];

function values(formData: FormData) {
  return {
    slug: required(formData, "slug"),
    title: required(formData, "title"),
    titleHi: text(formData, "titleHi"),
    summary: text(formData, "summary"),
    summaryHi: text(formData, "summaryHi"),
    imageUrl: text(formData, "imageUrl"),
    category: text(formData, "category"),
    sortOrder: int(formData, "sortOrder"),
    published: bool(formData, "published"),
    updatedAt: new Date(),
  };
}

export async function saveCourse(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.slug || !data.title) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(courses).set(data).where(eq(courses.id, id));
  } else {
    await db.insert(courses).values(data);
  }

  revalidateFor("/admin/courses", PUBLIC_PATHS);
}

export async function deleteCourse(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(courses).where(eq(courses.id, id));
  revalidateFor("/admin/courses", PUBLIC_PATHS);
}
