import { NextResponse } from "next/server";
import { getSiteState } from "@/lib/site-status";

export const dynamic = "force-dynamic";

/**
 * Polled by the "under development" page so every open screen starts the
 * launch countdown together. `now` lets clients correct for clock drift.
 */
export async function GET() {
  const state = await getSiteState({ fresh: true });
  return NextResponse.json(
    { ...state, now: Date.now() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
