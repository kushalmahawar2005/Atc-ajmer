"use client";

import { CONTACT } from "@/lib/contact";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const COURSE_OPTIONS = [
  { value: "IAS", label: "IAS Foundation" },
  { value: "RAS", label: "RAS Foundation" },
  { value: "PSI", label: "Rajasthan PSI" },
  { value: "Interview", label: "IAS / RAS Interview" },
];

export default function EnquireDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    if (window.matchMedia("(max-width: 768px)").matches) {
      onClose();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { success: boolean; message: string };

      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const msgClass =
    status === "success" ? "eq-msg success" : status === "error" ? "eq-msg error" : "eq-msg";

  return (
    <>
      <div
        className={`eq-overlay${open ? " open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`eq-drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Enquire Now"
      >
        <div className="eq-drawer-head">
          <div className="eq-drawer-head-row">
            <div>
              <div className="eq-drawer-title">Enquire Now</div>
              <div className="eq-drawer-subtitle">
                Fill in your details — we&apos;ll call you back shortly
              </div>
            </div>
            <button className="eq-drawer-close" onClick={onClose} aria-label="Close">
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="eq-drawer-body">
          <button className="eq-form-close" onClick={onClose} aria-label="Close form">
            <i className="fas fa-times" aria-hidden="true" />
          </button>

          <div className={msgClass}>{message}</div>

          <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className="eq-form-group">
              <label className="eq-form-label">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="eq-input"
                placeholder="Your full name"
                required
                maxLength={100}
              />
            </div>

            <div className="eq-form-group">
              <label className="eq-form-label">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                className="eq-input"
                placeholder="you@example.com"
                required
                maxLength={150}
              />
            </div>

            <div className="eq-form-group">
              <label className="eq-form-label">
                Phone Number <span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="eq-input"
                placeholder="+91 98765 43210"
                required
                maxLength={30}
              />
            </div>

            <div className="eq-form-group">
              <label className="eq-form-label">
                Course Interested In <span>*</span>
              </label>
              <select name="subject" className="eq-select" required defaultValue="">
                <option value="">Select a Course</option>
                {COURSE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="eq-form-group">
              <label className="eq-form-label">Message / Requirement</label>
              <textarea
                name="requirement"
                className="eq-textarea"
                placeholder="Any specific questions or requirements..."
                maxLength={2000}
              />
            </div>

            {/* Honeypot (anti-spam) */}
            <div style={{ display: "none" }}>
              <input type="text" name="website" defaultValue="" tabIndex={-1} />
            </div>

            <button
              type="submit"
              className={`eq-submit-btn${status === "sending" ? " loading" : ""}`}
              disabled={status === "sending"}
            >
              <span className="eq-btn-text">
                <i className="fas fa-paper-plane" aria-hidden="true" /> &nbsp;Send Enquiry
              </span>
              <span className="eq-spinner" />
            </button>
          </form>

          <div className="eq-contact-strip">
            <strong>Prefer to call?</strong>
            <br />
            📞 <a href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a> &nbsp;|&nbsp;{" "}
            <a href={CONTACT.phones[1].href}>{CONTACT.phones[1].label}</a>
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
