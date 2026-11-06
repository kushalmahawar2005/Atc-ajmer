"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { openExamBanner } from "@/lib/exam-banner";
import {
  DIWALI_OFFER_ENDS_AT,
  PROMO_POPUP_CLOSED_EVENT,
  PROMO_POPUP_OPEN_ATTR,
} from "@/lib/promo-popup";
import offerBanner from "../../../public/images/offers/diwali-offer-2026.png";

const DISMISS_KEY = "atcDiwaliOffer2026Closed";
const OPEN_DELAY_MS = 500;

/**
 * Diwali discount banner that pops up as soon as the website opens.
 * Clicking the banner opens the registration form; the cross (or Escape /
 * backdrop click) closes it and lets the visitor continue to the site.
 * Shows once per browser session and stops appearing after the offer ends.
 */
export default function DiwaliOfferPopup() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    document.body.removeAttribute(PROMO_POPUP_OPEN_ATTR);
    window.dispatchEvent(new Event(PROMO_POPUP_CLOSED_EVENT));
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Blocked storage: the popup just shows again on the next visit.
    }
  }, []);

  useEffect(() => {
    if (Date.now() >= DIWALI_OFFER_ENDS_AT) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // Private mode / blocked storage: show the popup.
    }
    // Mark it as pending immediately so the exam modal knows to wait.
    document.body.setAttribute(PROMO_POPUP_OPEN_ATTR, "");
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => {
      clearTimeout(timer);
      document.body.removeAttribute(PROMO_POPUP_OPEN_ATTR);
    };
  }, []);

  // Escape to close + lock page scroll behind the popup.
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

  return (
    <div
      className={`offer-popup-overlay${open ? " open" : ""}`}
      onClick={dismiss}
      aria-hidden={!open}
    >
      <div
        className="offer-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Diwali discount: 10% off RAS Mains and RAS Foundation Course on registration up to 20 November 2026"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="offer-popup-close" aria-label="Close offer" onClick={dismiss}>
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="offer-popup-link"
          aria-label="Register now for the Diwali discount"
          onClick={() => {
            dismiss();
            openExamBanner();
          }}
        >
          <Image
            src={offerBanner}
            alt="Diwali discount: 10% off RAS Mains and RAS Foundation Course on registration up to 20 November 2026. Enroll now."
            sizes="(max-width: 1000px) 100vw, 960px"
            priority
            placeholder="blur"
          />
        </button>
      </div>
    </div>
  );
}
