"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LaunchShow, { LAUNCH_HEADING, LAUNCH_SUBHEADING } from "@/components/launch/LaunchShow";
import type { SiteState } from "@/lib/site-status";
import { launchSite, takeSiteOffline } from "./actions";

type Phase = "ready" | "sending" | "counting" | "live";

/**
 * The launch remote. Press it on a phone; the countdown runs here and on every
 * screen showing the "under development" page, and the site opens at zero.
 */
export default function LaunchConsole({ initial, now }: { initial: SiteState; now: number }) {
  const [phase, setPhase] = useState<Phase>(
    initial.live ? "live" : initial.launchAt ? "counting" : "ready",
  );
  const [launch, setLaunch] = useState(() =>
    initial.launchAt ? { launchAt: initial.launchAt, clockOffset: now - Date.now() } : null,
  );
  const [error, setError] = useState("");
  const [confirmOffline, setConfirmOffline] = useState(false);

  async function startLaunch() {
    setPhase("sending");
    setError("");
    const result = await launchSite().catch(() => null);
    if (!result || !result.ok) {
      setError(result?.message ?? "Could not reach the server. Please press the button again.");
      setPhase("ready");
      return;
    }
    if (result.state.launchAt && !result.state.live) {
      setLaunch({ launchAt: result.state.launchAt, clockOffset: result.now - Date.now() });
      setPhase("counting");
    } else {
      setPhase("live");
    }
  }

  const finished = useCallback(() => setPhase("live"), []);

  async function goOffline() {
    const result = await takeSiteOffline().catch(() => ({ ok: false }));
    if (result.ok) {
      setConfirmOffline(false);
      setLaunch(null);
      setPhase("ready");
    } else {
      setError("Could not take the site offline. Please try again.");
    }
  }

  if (phase === "counting" && launch) {
    return <LaunchShow launchAt={launch.launchAt} clockOffset={launch.clockOffset} onFinished={finished} />;
  }

  return (
    <main className="launch-screen">
      <div className="launch-card">
        <Image
          src="/images/atc-logo.png"
          alt="ATC Ajmer"
          width={140}
          height={140}
          priority
          className="launch-logo"
        />
        <h1 className="launch-heading">{LAUNCH_HEADING}</h1>
        <p className="launch-subheading">{LAUNCH_SUBHEADING}</p>

        {(phase === "ready" || phase === "sending") && (
          <>
            <button
              type="button"
              className="launch-button"
              onClick={() => void startLaunch()}
              disabled={phase === "sending"}
            >
              <i className="fas fa-rocket" aria-hidden="true" />{" "}
              {phase === "sending" ? "Starting…" : "Launch Website"}
            </button>
            {error && (
              <p className="launch-error" role="alert">
                {error}
              </p>
            )}
          </>
        )}

        {phase === "live" && (
          <>
            <p className="launch-live">🎉 Website is Live! 🎉</p>
            <div className="launch-admin">
              <Link href="/" className="launch-link">
                Open the website
              </Link>
              {confirmOffline ? (
                <>
                  <span>Show the &quot;under development&quot; page again?</span>
                  <button type="button" className="launch-danger" onClick={() => void goOffline()}>
                    Yes, take it offline
                  </button>
                  <button type="button" className="launch-link" onClick={() => setConfirmOffline(false)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" className="launch-link" onClick={() => setConfirmOffline(true)}>
                  Take website offline
                </button>
              )}
            </div>
            {error && <p className="launch-error">{error}</p>}
          </>
        )}
      </div>
    </main>
  );
}
