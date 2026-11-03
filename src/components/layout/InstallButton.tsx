"use client";

import { createPortal } from "react-dom";
import { useInstallApp } from "@/lib/use-install-app";

/** Install App button with a "how to install" popup for browsers without a native prompt. */
export default function InstallButton({
  className,
  onDone,
}: {
  className?: string;
  onDone?: () => void;
}) {
  const { installed, install, showSteps, closeSteps, isIos } = useInstallApp();
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
              <p>
                {isIos
                  ? "Tap the Share button in Safari, then choose “Add to Home Screen”."
                  : "Open your browser menu (⋮) and choose “Install app” or “Add to Home screen”."}
              </p>
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
