"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { verifyPassword } from "@/lib/admin/password";
import { clearSessionCookie, setSessionCookie } from "@/lib/admin/session";

export type FormState = { error?: string; ok?: string };

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  let user;
  try {
    [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  } catch (error) {
    console.error("Admin login lookup failed:", error);
    return { error: "Could not reach the database. Try again." };
  }

  // Same message either way, so the form never confirms which emails exist.
  if (!user || !user.active || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "Invalid email or password." };
  }

  await db
    .update(adminUsers)
    .set({ lastLoginAt: new Date() })
    .where(eq(adminUsers.id, user.id));

  await setSessionCookie({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  redirect("/admin");
}

export async function logout() {
  await clearSessionCookie();
  revalidatePath("/admin");
  redirect("/admin/login");
}
