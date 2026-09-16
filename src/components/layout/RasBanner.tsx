"use client";

import { useCallback, useEffect, useState } from "react";
import { examOrder, examSeries, type ExamKey } from "@/lib/exam-series";
import { EXAM_BANNER_OPEN_EVENT } from "@/lib/exam-banner";

const DISMISS_KEY = "atcExamBanner2026Closed";
const OPEN_DELAY_MS = 6000;

type Status = "idle" | "sending" | "ok" | "error";

/**
 * Centred modal promo for the offline test series. It opens by itself a few
 * seconds into the first visit, and on demand when any CTA fires
 * EXAM_BANNER_OPEN_EVENT. The three exams are isolated: switching tabs swaps
 * the copy, centres and the exam the form registers for.
 */
export default function ExamSeriesBanner() {
  const [open, setOpen] = useState(false);
  const [exam, setExam] = useState<ExamKey>("ras");
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const series = examSeries[exam];

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // The banner simply reappears next visit.
    }
  }, []);

  // Auto-open once per session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // Private mode / blocked storage: just show the banner.
    }
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Open on demand from any CTA on the page.
  useEffect(() => {
    const onOpen = () => {
      setShowForm(true);
      setStatus("idle");
      setMessage("");
      setOpen(true);
    };
    window.addEventListener(EXAM_BANNER_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(EXAM_BANNER_OPEN_EVENT, onOpen);
  }, []);

  // Escape to close + lock the page behind the modal.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, dismiss]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/exam-registration", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { success: boolean; message: string };

      setStatus(result.success ? "ok" : "error");
      setMessage(result.message);
      if (result.success) form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div
      className={`ras-modal-overlay${open ? " open" : ""}`}
      onClick={dismiss}
      aria-hidden={!open}
    >
      <div
        className="ras-banner"
        role="dialog"
        aria-modal="true"
        aria-label={`${series.title} ${series.year} Test Series`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="ras-banner-close" aria-label="Close banner" onClick={dismiss}>
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <div className="ras-banner-head">
          <span className="ras-banner-badge">
            <i className="fas fa-bolt" aria-hidden="true" /> New Launch
          </span>
          <h3 className="ras-banner-title">
            {series.title} <span>{series.year}</span>
          </h3>
          <p className="ras-banner-subtitle">{series.subtitle}</p>

          <div className="ras-banner-date">
            <i className="far fa-calendar-check" aria-hidden="true" />
            <span>
              Starts <strong>{series.startsOn}</strong>
            </span>
          </div>
        </div>

        {/* Exam switcher — each tab is a separate series and a separate record. */}
        <div className="ras-exam-tabs" role="tablist" aria-label="Choose exam">
          {examOrder.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={key === exam}
              className={`ras-exam-tab${key === exam ? " is-active" : ""}`}
              onClick={() => {
                setExam(key);
                setStatus("idle");
                setMessage("");
              }}
            >
              {examSeries[key].label}
            </button>
          ))}
        </div>

        <div className="ras-banner-body">
          <div className="ras-banner-section">
            <div className="ras-banner-section-head">
              <i className="fas fa-star" aria-hidden="true" /> What You Get
            </div>
            <ul className="ras-feature-grid">
              {series.features.map((feature) => (
                <li key={feature.label} className={feature.wide ? "ras-feature-wide" : undefined}>
                  <i className={feature.icon} aria-hidden="true" /> {feature.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="ras-banner-section">
            <div className="ras-banner-section-head">
              <i className="fas fa-map-marker-alt" aria-hidden="true" /> Test Centres
            </div>
            <div className="ras-centres">
              {series.centres.map((centre) => (
                <span key={centre}>{centre}</span>
              ))}
            </div>
          </div>

          {showForm && (
            <form className="ras-reg-form" onSubmit={handleSubmit}>
              <input type="hidden" name="exam" value={exam} />

              {message && (
                <div className={`ras-reg-msg${status === "ok" ? " is-ok" : " is-err"}`}>
                  {message}
                </div>
              )}

              <label className="ras-reg-field">
                <span>Name</span>
                <input name="name" required maxLength={160} placeholder="Your full name" />
              </label>

              <label className="ras-reg-field">
                <span>Father&apos;s Name</span>
                <input
                  name="fatherName"
                  required
                  maxLength={160}
                  placeholder="Father's full name"
                />
              </label>

              <label className="ras-reg-field">
                <span>Mobile Number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  placeholder="+91 98765 43210"
                />
              </label>

              <label className="ras-reg-field">
                <span>Place</span>
                <input name="place" required maxLength={160} placeholder="City / town" />
              </label>

              <label className="ras-reg-field">
                <span>Preferred Centre</span>
                <select name="centre" defaultValue="">
                  <option value="">Select a centre</option>
                  {series.centres.map((centre) => (
                    <option key={centre} value={centre}>
                      {centre}
                    </option>
                  ))}
                </select>
              </label>

              <div style={{ display: "none" }}>
                <input type="text" name="website" defaultValue="" tabIndex={-1} />
              </div>

              <button type="submit" className="ras-banner-btn" disabled={status === "sending"}>
                <i className="fas fa-paper-plane" aria-hidden="true" />{" "}
                {status === "sending" ? "Submitting…" : "Submit Registration"}
              </button>
            </form>
          )}
        </div>

        {!showForm && (
          <div className="ras-banner-cta">
            <button className="ras-banner-btn" onClick={() => setShowForm(true)}>
              <i className="fas fa-pen-to-square" aria-hidden="true" /> Register Now
            </button>
            <span className="ras-banner-cta-note">Limited seats per centre</span>
          </div>
        )}
      </div>
    </div>
  );
}
