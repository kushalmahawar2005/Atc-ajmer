"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { banners } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, int, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/"];

function values(formData: FormData) {
  return {
    title: text(formData, "title"),
    imageUrl: required(formData, "imageUrl"),
    linkUrl: text(formData, "linkUrl"),
    sortOrder: int(formData, "sortOrder"),
    active: bool(formData, "active"),
  };
}

export async function saveBanner(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.imageUrl) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(banners).set(data).where(eq(banners.id, id));
  } else {
    await db.insert(banners).values(data);
  }

  revalidateFor("/admin/banners", PUBLIC_PATHS);
}

export async function deleteBanner(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(banners).where(eq(banners.id, id));
  revalidateFor("/admin/banners", PUBLIC_PATHS);
}
