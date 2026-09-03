"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { bool, required, revalidateFor, text } from "@/lib/admin/crud";
import { hashPassword } from "@/lib/admin/password";

/** Only full admins may manage accounts; editors can still edit content. */
async function requireOwner() {
  const session = await requireAdmin();
  if (session.role !== "admin") throw new Error("Only admins can manage accounts.");
  return session;
}

export async function saveUser(formData: FormData) {
  await requireOwner();

  const id = Number(formData.get("id"));
  const email = required(formData, "email").toLowerCase();
  const name = required(formData, "name");
  const role = text(formData, "role") ?? "editor";
  const active = bool(formData, "active");
  const password = text(formData, "password");

  if (!email || !name) return;

  if (Number.isFinite(id) && id > 0) {
    await db
      .update(adminUsers)
      .set({
        email,
        name,
        role,
        active,
        // Leave the stored hash alone unless a new password was typed.
        ...(password ? { passwordHash: await hashPassword(password) } : {}),
      })
      .where(eq(adminUsers.id, id));
  } else {
    if (!password || password.length < 8) return;
    await db.insert(adminUsers).values({
      email,
      name,
      role,
      active,
      passwordHash: await hashPassword(password),
    });
  }

  revalidateFor("/admin/users");
}

export async function deleteUser(formData: FormData) {
  const session = await requireOwner();

  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;
  // Deleting your own account would lock you out mid-session.
  if (id === session.id) return;

  await db.delete(adminUsers).where(eq(adminUsers.id, id));
  revalidateFor("/admin/users");
}
