import { redirect } from "next/navigation";
import { getSession, type AdminSession } from "./session";

/** Use in every admin server component and action that touches data. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}
