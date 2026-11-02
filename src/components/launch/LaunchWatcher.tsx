"use client";

import { useCallback, useEffect, useState } from "react";
import LaunchShow from "./LaunchShow";

const POLL_MS = 2_000;

type Status = { live: boolean; launchAt: number | null; now: number };

/**
 * Sits on the "under development" page. When the launch is pressed from the
 * admin panel (on any device), it plays the countdown here too and then
 * reloads into the live website.
 */
export default function LaunchWatcher() {
  const [launch, setLaunch] = useState<{ launchAt: number; clockOffset: number } | null>(null);

  useEffect(() => {
    if (launch) return;
    let stopped = false;

    const check = async () => {
      try {
        const response = await fetch("/api/site-status", { cache: "no-store" });
        if (!response.ok || stopped) return;
        const status = (await response.json()) as Status;
        if (status.launchAt) {
          setLaunch({ launchAt: status.launchAt, clockOffset: status.now - Date.now() });
        } else if (status.live) {
          window.location.reload();
        }
      } catch {
        // Offline for a moment: the next poll tries again.
      }
    };

    void check();
    const timer = setInterval(check, POLL_MS);
    return () => {
      stopped = true;
      clearInterval(timer);
    };
  }, [launch]);

  const showSite = useCallback(() => window.location.reload(), []);

  if (!launch) return null;
  return <LaunchShow launchAt={launch.launchAt} clockOffset={launch.clockOffset} onFinished={showSite} />;
}
