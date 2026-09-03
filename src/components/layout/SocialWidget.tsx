"use client";

import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/home-content";

export default function SocialWidget() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDocumentClick = (event: MouseEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="social-widget" ref={widgetRef}>
      <button
        className="social-toggle-btn"
        aria-label="Connect with us on social media"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}
      >
        <i className={open ? "fas fa-times" : "fas fa-share-alt"} aria-hidden="true" />
        <span className="soc-btn-text">Social Links</span>
      </button>

      <div className={`social-links-panel${open ? " open" : ""}`} aria-hidden={!open}>
        {socialLinks.map((social) => (
          <a
            key={social.key}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`soc-link ${social.key}`}
            title={social.title}
          >
            <i className={social.icon} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
