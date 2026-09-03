"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { studyMaterials } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/content"];

function values(formData: FormData) {
  return {
    title: required(formData, "title"),
    slug: required(formData, "slug"),
    category: required(formData, "category"),
    language: text(formData, "language") ?? "en",
    fileUrl: text(formData, "fileUrl"),
    published: bool(formData, "published"),
  };
}

export async function saveItem(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.title || !data.slug || !data.category) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(studyMaterials).set(data).where(eq(studyMaterials.id, id));
  } else {
    await db.insert(studyMaterials).values(data);
  }

  revalidateFor("/admin/study-materials", PUBLIC_PATHS);
}

export async function deleteItem(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(studyMaterials).where(eq(studyMaterials.id, id));
  revalidateFor("/admin/study-materials", PUBLIC_PATHS);
}
