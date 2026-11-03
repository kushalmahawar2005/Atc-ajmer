"use client";

import { useCallback, useEffect, useState } from "react";

type InstallPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * Shared "install as app" state. The browser fires `beforeinstallprompt` only
 * once per page load, so it is captured at module level and every Install
 * button (header, mobile menu, home banner) reuses the same event.
 */
let deferredPrompt: InstallPrompt | null = null;
let installedFlag = false;
const listeners = new Set<() => void>();
let wired = false;

function notify() {
  listeners.forEach((listener) => listener());
}

function wire() {
  if (wired || typeof window === "undefined") return;
  wired = true;
  installedFlag =
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event as InstallPrompt;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    installedFlag = true;
    deferredPrompt = null;
    notify();
  });
}

export function useInstallApp() {
  const [, setTick] = useState(0);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    wire();
    const listener = () => setTick((tick) => tick + 1);
    listeners.add(listener);
    listener();
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const install = useCallback(async () => {
    const prompt = deferredPrompt;
    if (!prompt) {
      // No native prompt available (iPhone Safari, Firefox, or already shown):
      // show the manual steps popup every time the button is pressed.
      setShowSteps(true);
      return;
    }
    deferredPrompt = null;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch {
      // Prompt was closed or already used.
    }
    notify();
  }, []);

  const isIos = typeof navigator !== "undefined" && /iphone|ipad|ipod/i.test(navigator.userAgent);

  return {
    installed: installedFlag,
    install,
    showSteps,
    closeSteps: () => setShowSteps(false),
    isIos,
  };
}
