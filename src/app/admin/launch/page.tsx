import type { Metadata } from "next";
import { requireAdmin } from "@/lib/admin/auth";
import { getSiteState } from "@/lib/site-status";
import LaunchConsole from "./LaunchConsole";

export const metadata: Metadata = { title: "Website Launch" };
export const dynamic = "force-dynamic";

/**
 * The launch remote (meant for a phone). Pressing the button starts a
 * 10-second countdown here and on every screen showing the "under
 * development" page, and opens the website to everyone at zero.
 */
export default async function LaunchPage() {
  await requireAdmin();
  const { state, now } = await readLaunchState();

  return <LaunchConsole initial={state} now={now} />;
}

/** Server time travels with the state so the phone can sync its countdown. */
async function readLaunchState() {
  const state = await getSiteState({ fresh: true });
  return { state, now: Date.now() };
}
