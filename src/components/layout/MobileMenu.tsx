"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SELECTIONS_HREF,
  mainNav,
} from "@/lib/navigation";
import styles from "./MobileMenu.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onSwitchToHindi: () => void;
};

export default function MobileMenu({ open, onClose, onSwitchToHindi }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Lock body scroll while the panel is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={onClose}
      />

      <div
        id="mobile-menu"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.head}>
          <Link href="/" className={styles.logo} onClick={onClose}>
            <Image
              src="/images/atc-logo.png"
              alt="ATC logo"
              width={1254}
              height={1254}
              style={{ height: 40, width: "auto" }}
            />
          </Link>
          <button
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={onClose}
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.contact}>
          <i className={`fas fa-phone ${styles.contactIcon}`} aria-hidden="true" />
          {PHONE_PRIMARY} &nbsp;|&nbsp; {PHONE_SECONDARY}
          <br />
          <button
            type="button"
            className={styles.langBtn}
            onClick={() => {
              onSwitchToHindi();
              onClose();
            }}
          >
            हिंदी में पढ़ें →
          </button>
        </div>

        <ul className={styles.navList}>
          {mainNav.map((item) => {
            const label = item.mobileLabel ?? item.label;

            if (!item.children) {
              return (
                <li key={label}>
                  <Link href={item.href ?? "/"} onClick={onClose}>
                    {label}
                  </Link>
                </li>
              );
            }

            const isOpen = openSection === label;

            return (
              <li key={label}>
                <button
                  type="button"
                  className={`${styles.subToggle} ${isOpen ? styles.subToggleActive : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenSection(isOpen ? null : label)}
                >
                  {label}
                  <span className={styles.subArrow}>▾</span>
                </button>
                <ul className={`${styles.sub} ${isOpen ? styles.subOpen : ""}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      {child.external ? (
                        <a href={child.href} target="_blank" rel="noopener noreferrer">
                          {child.label}
                        </a>
                      ) : (
                        <Link href={child.href} onClick={onClose}>
                          {child.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <Link href={SELECTIONS_HREF} className={styles.appBtn} onClick={onClose}>
          <i className="fas fa-trophy" aria-hidden="true" /> View Our Past Selections
        </Link>
      </div>
    </>
  );
}
