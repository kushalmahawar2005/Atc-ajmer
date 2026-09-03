"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { coursePlans } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, int, required, revalidateFor, text } from "@/lib/admin/crud";

/** Blank number fields stay NULL so the card simply omits that line. */
function optionalInt(formData: FormData, key: string) {
  return text(formData, key) ? int(formData, key) : null;
}

function values(formData: FormData) {
  return {
    courseSlug: required(formData, "courseSlug"),
    groupLabel: text(formData, "groupLabel"),
    title: required(formData, "title"),
    description: text(formData, "description"),
    fees: optionalInt(formData, "fees"),
    oneTimePayment: optionalInt(formData, "oneTimePayment"),
    feeNote: text(formData, "feeNote"),
    mode: text(formData, "mode"),
    sortOrder: int(formData, "sortOrder"),
    active: bool(formData, "active"),
  };
}

/** Every course page reads this table, so refresh the whole courses tree. */
function refresh(slug: string) {
  revalidateFor("/admin/course-plans", ["/courses", `/courses/${slug}`]);
}

export async function savePlan(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const data = values(formData);
  if (!data.courseSlug || !data.title) return;

  if (Number.isFinite(id) && id > 0) {
    await db.update(coursePlans).set(data).where(eq(coursePlans.id, id));
  } else {
    await db.insert(coursePlans).values(data);
  }

  refresh(data.courseSlug);
}

export async function deletePlan(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  const [row] = await db.select().from(coursePlans).where(eq(coursePlans.id, id)).limit(1);
  await db.delete(coursePlans).where(eq(coursePlans.id, id));
  refresh(row?.courseSlug ?? "");
}
