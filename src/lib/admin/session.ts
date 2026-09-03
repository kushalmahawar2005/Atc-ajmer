import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "sba_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

export type AdminSession = {
  id: number;
  email: string;
  name: string;
  role: string;
};

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value) {
    throw new Error("ADMIN_SESSION_SECRET is not set. See .env.example.");
  }
  return value;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

/** Cookie value: `<base64url(json)>.<hmac>` — signed, not encrypted. */
export function serializeSession(session: AdminSession) {
  const body = { ...session, exp: Date.now() + MAX_AGE_SECONDS * 1000 };
  const payload = Buffer.from(JSON.stringify(body)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function parseSession(value: string | undefined): AdminSession | null {
  if (!value) return null;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;

  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;

  try {
    const body = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof body.exp !== "number" || body.exp < Date.now()) return null;
    return { id: body.id, email: body.email, name: body.name, role: body.role };
  } catch {
    return null;
  }
}

export async function getSession() {
  const store = await cookies();
  return parseSession(store.get(SESSION_COOKIE)?.value);
}

export async function setSessionCookie(session: AdminSession) {
  const store = await cookies();
  store.set(SESSION_COOKIE, serializeSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete({ name: SESSION_COOKIE, path: "/admin" });
}
