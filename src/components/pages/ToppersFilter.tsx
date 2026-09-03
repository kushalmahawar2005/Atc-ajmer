"use client";

import { useEffect, useRef, useState } from "react";
import type { ExamGroup } from "@/lib/selections-data";

/** Sticky search bar that jumps to an exam section, plus the scroll-top button. */
export default function ToppersFilter({ groups }: { groups: ExamGroup[] }) {
  const [query, setQuery] = useState("");
  const [dropOpen, setDropOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [stuck, setStuck] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const visible = groups.filter((group) =>
    group.title.toLowerCase().includes(query.toLowerCase().trim()),
  );

  useEffect(() => {
    const onScroll = () => {
      const headerH = document.querySelector("header")?.offsetHeight ?? 78;
      const top = barRef.current?.getBoundingClientRect().top ?? 0;
      setStuck(top <= headerH + 1);
      setShowTop(window.pageYOffset > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!dropOpen) return;
    const onDocClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setDropOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [dropOpen]);

  /* The header and the sticky bar both cover the top of the viewport, so the
     jump target is offset by their live heights. */
  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = document.querySelector("header")?.offsetHeight ?? 78;
    const chrome = headerH + (barRef.current?.offsetHeight ?? 0);
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - chrome - 16,
      behavior: "smooth",
    });
  }

  function pick(group: ExamGroup) {
    scrollToSection(group.id);
    setQuery(group.title);
    setDropOpen(false);
    setActiveIdx(-1);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!visible.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIdx((index) => Math.min(index + 1, visible.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIdx((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && activeIdx >= 0) {
      pick(visible[activeIdx]);
    } else if (event.key === "Escape") {
      setDropOpen(false);
      setActiveIdx(-1);
    }
  }

  return (
    <>
      <div className={`tg-filter${stuck ? " is-stuck" : ""}`} ref={barRef}>
        <span className="tg-filter-label">🔍 Jump to Exam :</span>
        <div className="tg-search-wrap" ref={wrapRef}>
          <i className="fas fa-search tg-search-icon" aria-hidden="true" />
          <input
            type="text"
            className="tg-search-input"
            placeholder="Search exam group (e.g. RAS 2021, IAS 2024)…"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onFocus={() => setDropOpen(true)}
            onChange={(event) => {
              setQuery(event.target.value);
              setDropOpen(true);
              setActiveIdx(-1);
            }}
            onKeyDown={onKeyDown}
          />
          <ul className={`tg-dropdown${dropOpen && visible.length ? " open" : ""}`}>
            {visible.map((group, index) => (
              <li
                key={group.id}
                className={index === activeIdx ? "is-active" : undefined}
                onMouseDown={(event) => {
                  event.preventDefault();
                  pick(group);
                }}
              >
                {group.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className={`tg-scroll-top${showTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  );
}
