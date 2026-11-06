/**
 * Coordination between the festival offer popup (shown the moment the site
 * opens) and the exam-series modal (which auto-opens a few seconds later).
 * The exam modal waits until the offer popup has been closed so the two
 * never stack on top of each other.
 */
export const PROMO_POPUP_CLOSED_EVENT = "atc:promo-popup-closed";
export const PROMO_POPUP_OPEN_ATTR = "data-promo-open";

/** Diwali offer: registrations up to and including 20 Nov 2026 (IST). */
export const DIWALI_OFFER_ENDS_AT = new Date("2026-11-21T00:00:00+05:30").getTime();

export function isPromoPopupOpen() {
  return typeof document !== "undefined" && document.body.hasAttribute(PROMO_POPUP_OPEN_ATTR);
}
