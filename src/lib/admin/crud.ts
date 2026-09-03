import { revalidatePath } from "next/cache";

/** Trim a text field, returning null for blanks so the DB stores NULL. */
export function text(formData: FormData, key: string): string | null {
  const value = formData.get(key);
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed || null;
}

export function required(formData: FormData, key: string): string {
  return text(formData, key) ?? "";
}

export function int(formData: FormData, key: string, fallback = 0): number {
  const value = Number(formData.get(key));
  return Number.isFinite(value) ? value : fallback;
}

export function bool(formData: FormData, key: string): boolean {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

/** Refresh the admin list and the public pages that read the same rows. */
export function revalidateFor(adminPath: string, publicPaths: string[] = []) {
  revalidatePath(adminPath);
  revalidatePath("/admin");
  for (const path of publicPaths) revalidatePath(path);
}
