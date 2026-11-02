"use client";

import { openExamBanner } from "@/lib/exam-banner";

/** Reopens the test series popup, which otherwise appears once per session. */
export default function RegisterFloat() {
  return (
    <button type="button" className="register-float" onClick={openExamBanner}>
      <i className="fas fa-pen-to-square" aria-hidden="true" /> Register
    </button>
  );
}
