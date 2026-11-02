import { eq } from "drizzle-orm";
import { db } from "@/db";
import { siteSettings } from "@/db/schema";

const SITE_LIVE_KEY = "site_live";
/** How long one server instance trusts its last read before asking again. */
const CACHE_MS = 5_000;
/** The proxy runs on every page view, so never let a slow database hold it up. */
const QUERY_TIMEOUT_MS = 2_000;
/** Length of the launch countdown shown on every screen. */
export const LAUNCH_COUNTDOWN_MS = 10_000;

/**
 * `site_live` holds "false", "true", or the ISO time a launch was scheduled
 * for. Keeping it in one row means the countdown and the moment the site opens
 * can never disagree.
 */
export type SiteState = { live: boolean; launchAt: number | null };

let cached: { value: string | null; readAt: number } | null = null;

function toState(value: string | null | undefined, now = Date.now()): SiteState {
  if (value === "true") return { live: true, launchAt: null };
  const launchAt = value ? Date.parse(value) : Number.NaN;
  if (!Number.isNaN(launchAt)) return { live: now >= launchAt, launchAt };
  return { live: false, launchAt: null };
}

function withTimeout<T>(promise: Promise<T>, ms: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timed out")), ms)),
  ]);
}

async function readValue() {
  const [row] = await withTimeout(
    db.select().from(siteSettings).where(eq(siteSettings.key, SITE_LIVE_KEY)),
    QUERY_TIMEOUT_MS,
  );
  return row?.value ?? null;
}

async function writeValue(value: string) {
  await db
    .insert(siteSettings)
    .values({ key: SITE_LIVE_KEY, value })
    .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date() } });
  cached = { value, readAt: Date.now() };
}

/**
 * Current launch state. MAINTENANCE_MODE=off forces the site open regardless
 * of the database, so it never depends on the switch once launch is over. If
 * the database cannot be reached, the last known value is kept, so a hiccup
 * never flips a live site back to the "under development" page.
 */
export async function getSiteState({ fresh = false } = {}): Promise<SiteState> {
  if (process.env.MAINTENANCE_MODE === "off") return { live: true, launchAt: null };
  if (!fresh && cached && Date.now() - cached.readAt < CACHE_MS) return toState(cached.value);

  try {
    const value = await readValue();
    cached = { value, readAt: Date.now() };
    return toState(value);
  } catch (error) {
    console.error("[site-status] could not read site_live:", error);
    return toState(cached?.value);
  }
}

/** Whether the public website is open to visitors right now. */
export async function isSiteLive() {
  return (await getSiteState()).live;
}

/**
 * Starts the launch: every screen counts down and the site opens to everyone
 * when it reaches zero. Pressing again while a launch is under way, or after
 * the site is live, changes nothing.
 */
export async function scheduleLaunch() {
  const state = await getSiteState({ fresh: true });
  if (state.live || state.launchAt) return state;
  const launchAt = Date.now() + LAUNCH_COUNTDOWN_MS;
  await writeValue(new Date(launchAt).toISOString());
  return toState(new Date(launchAt).toISOString());
}

/** Shows the "under development" page again and cancels any countdown. */
export async function setSiteOffline() {
  await writeValue("false");
}
