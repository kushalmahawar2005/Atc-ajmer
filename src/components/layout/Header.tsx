"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SELECTIONS_HREF,
  mainNav,
} from "@/lib/navigation";
import { useLanguage } from "./LanguageProvider";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, busy, setLang } = useLanguage();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="ATC — home">
            <Image
              src="/images/atc-logo.png"
              alt="ATC logo"
              width={1254}
              height={1254}
              priority
              style={{ height: 58, width: "auto" }}
            />
          </Link>

          <div className={styles.contact}>
            <span>
              <i className="fas fa-phone" aria-hidden="true" /> {PHONE_PRIMARY} |{" "}
              {PHONE_SECONDARY}
            </span>
          </div>

          <button
            type="button"
            className={styles.navToggle}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className={styles.toggleLabel}>Menu</span>
            <span className={styles.toggleBars}>
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className={styles.right}>
            <div className={styles.langWrap} title="Switch page language">
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
                aria-label="English"
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <span className={styles.langSep}>|</span>
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "hi" ? styles.langBtnActive : ""}`}
                aria-label="हिंदी में पढ़ें"
                onClick={() => setLang("hi")}
              >
                हिं
              </button>
              {/* Mirrors the live site's "AI अनुवाद" note beside the toggle. */}
              <span
                className={styles.langNote}
                data-no-translate
                style={{ display: lang === "hi" ? "inline" : "none" }}
              >
                {busy ? "अनुवाद हो रहा है…" : "AI अनुवाद"}
              </span>
            </div>

            <ul className={styles.nav}>
              {mainNav.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label} className={styles.navItem}>
                      <Link href={item.href ?? "/"} className={styles.navLink}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className={`${styles.navItem} ${styles.dropdown}`}>
                    <button type="button" className={styles.navLink}>
                      {item.label} <span className={styles.navArrow}>▾</span>
                    </button>
                    <ul className={styles.dropdownMenu}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          {child.external ? (
                            <a href={child.href} target="_blank" rel="noopener noreferrer">
                              {child.label}
                            </a>
                          ) : (
                            <Link href={child.href}>{child.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>

            <Link href={SELECTIONS_HREF} className={styles.downloadBtn}>
              <i className="fas fa-trophy" aria-hidden="true" /> View Our Past Selections
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSwitchToHindi={() => setLang("hi")}
      />
    </>
  );
}
