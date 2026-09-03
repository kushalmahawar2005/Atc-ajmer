"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { batches } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, int, required, revalidateFor, text } from "@/lib/admin/crud";

const PUBLIC_PATHS = ["/"];

function values(formData: FormData) {
  return {
    name: required(formData, "name"),
    startsOn: required(formData, "startsOn"),
    mode: text(formData, "mode"),
    sortOrder: int(formData, "sortOrder"),
    active: bool(formData, "active"),
  };
}

export async function saveBatch(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.name || !data.startsOn) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(batches).set(data).where(eq(batches.id, id));
  } else {
    await db.insert(batches).values(data);
  }

  revalidateFor("/admin/batches", PUBLIC_PATHS);
}

export async function deleteBatch(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await db.delete(batches).where(eq(batches.id, id));
  revalidateFor("/admin/batches", PUBLIC_PATHS);
}
