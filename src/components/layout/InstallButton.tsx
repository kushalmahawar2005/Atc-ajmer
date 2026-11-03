"use client";

import { createPortal } from "react-dom";
import { useInstallApp, type InstallPlatform } from "@/lib/use-install-app";

type Step = { icon: string; text: React.ReactNode };

const STEPS: Record<InstallPlatform, Step[]> = {
  ios: [
    { icon: "fas fa-arrow-up-from-bracket", text: <>Tap the <strong>Share</strong> button at the bottom of Safari</> },
    { icon: "fas fa-square-plus", text: <>Scroll down and tap <strong>Add to Home Screen</strong></> },
    { icon: "fas fa-check", text: <>Tap <strong>Add</strong>. The ATC app appears on your home screen</> },
  ],
  "mac-safari": [
    { icon: "fas fa-bars", text: <>Open the <strong>File</strong> menu in Safari</> },
    { icon: "fas fa-square-plus", text: <>Click <strong>Add to Dock</strong></> },
    { icon: "fas fa-check", text: <>Click <strong>Add</strong>. The ATC app opens from your Dock</> },
  ],
  other: [
    { icon: "fas fa-ellipsis-vertical", text: <>Open your browser menu <strong>(⋮)</strong></> },
    { icon: "fas fa-download", text: <>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong></> },
    { icon: "fas fa-check", text: <>Confirm. The ATC app appears on your device</> },
  ],
};

/** Install App button with a "how to install" popup for browsers without a native prompt. */
export default function InstallButton({
  className,
  onDone,
}: {
  className?: string;
  onDone?: () => void;
}) {
  const { installed, install, showSteps, closeSteps, platform } = useInstallApp();
  if (installed) return null;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          void install();
          onDone?.();
        }}
      >
        <i className="fas fa-download" aria-hidden="true" /> Install App
      </button>
      {showSteps &&
        createPortal(
          <div className="install-steps-overlay" onClick={closeSteps}>
            <div
              className="install-steps-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Install the ATC app"
              onClick={(event) => event.stopPropagation()}
            >
              <button className="install-steps-close" aria-label="Close" onClick={closeSteps}>
                <i className="fas fa-times" aria-hidden="true" />
              </button>
              <h3>Install the ATC App</h3>
              <ol className="install-steps-list">
                {STEPS[platform].map((step, index) => (
                  <li key={index}>
                    <span className="install-steps-num">{index + 1}</span>
                    <i className={step.icon} aria-hidden="true" />
                    <span>{step.text}</span>
                  </li>
                ))}
              </ol>
              <button type="button" className="install-steps-ok" onClick={closeSteps}>
                Got it
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
