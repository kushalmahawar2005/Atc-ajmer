/**
 * Shared channel for opening the exam-series modal from anywhere on the page
 * (e.g. the "Register Online Now" CTA on the home page enroll banner).
 */
export const EXAM_BANNER_OPEN_EVENT = "atc:open-exam-banner";

export function openExamBanner() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EXAM_BANNER_OPEN_EVENT));
}
