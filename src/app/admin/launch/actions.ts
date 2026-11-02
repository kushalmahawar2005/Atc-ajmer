"use server";

import { requireAdmin } from "@/lib/admin/auth";
import { scheduleLaunch, setSiteOffline, type SiteState } from "@/lib/site-status";

export type LaunchResult = { ok: true; state: SiteState; now: number } | { ok: false; message: string };

/** Starts the 10-second countdown on every screen; the site opens at zero. */
export async function launchSite(): Promise<LaunchResult> {
  await requireAdmin();
  try {
    const state = await scheduleLaunch();
    return { ok: true, state, now: Date.now() };
  } catch (error) {
    console.error("[launch] could not schedule the launch:", error);
    return { ok: false, message: "Could not reach the database. Please press the button again." };
  }
}

/** Puts the "under development" page back up, in case something goes wrong. */
export async function takeSiteOffline(): Promise<{ ok: boolean }> {
  await requireAdmin();
  try {
    await setSiteOffline();
    return { ok: true };
  } catch (error) {
    console.error("[launch] could not take the site offline:", error);
    return { ok: false };
  }
}
