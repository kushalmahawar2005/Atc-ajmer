"use client";

import { useEffect, useState } from "react";

type InstallPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * "Install App" button. Chrome/Edge/Android install the site as a web app with
 * one tap; browsers that cannot (iPhone Safari, Firefox) get the manual steps.
 * Hidden once the site is already running as an installed app.
 */
export default function InstallApp() {
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null);
  const [installed, setInstalled] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) setInstalled(true);

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPrompt(event as InstallPrompt);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  async function install() {
    if (!prompt) {
      setShowSteps((open) => !open);
      return;
    }
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch {
      // Prompt was closed or already used; fall through.
    }
    setPrompt(null);
  }

  const isIos = typeof navigator !== "undefined" && /iphone|ipad|ipod/i.test(navigator.userAgent);

  return (
    <section className="install-banner" aria-label="Install the ATC app">
      <div className="install-banner-icon" aria-hidden="true">
        <i className="fas fa-mobile-screen-button" />
      </div>
      <div className="install-banner-text">
        <h2>Get the ATC App</h2>
        <p>Install on your phone or computer. Opens like an app, with quick access to courses, test series and study material.</p>
        {showSteps && (
          <p className="install-banner-steps" role="status">
            {isIos
              ? "Tap the Share button in Safari, then choose “Add to Home Screen”."
              : "Open your browser menu (⋮) and choose “Install app” or “Add to Home screen”."}
          </p>
        )}
      </div>
      <button type="button" className="install-banner-btn" onClick={() => void install()}>
        <i className="fas fa-download" aria-hidden="true" /> Install App
      </button>
    </section>
  );
}
