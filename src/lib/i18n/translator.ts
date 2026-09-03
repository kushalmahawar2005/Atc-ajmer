import { hindiDictionary } from "./dictionary";

/** Containers whose text is site content. Everything else is left alone. */
const ROOT_SELECTOR = ".site-shell";

/** Elements whose text must never change: code, form values, icons, scripts. */
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "IFRAME",
  "SVG",
  "PATH",
  "INPUT",
  "TEXTAREA",
]);

/** Phone numbers, prices, dates and other strings that read the same either way. */
const NON_TRANSLATABLE = /^[\s\d+\-–—/.,:()₹%|·•→←↗❮❯×✓]*$/;

type Entry = { node: Text; original: string; key: string; lead: string; trail: string };

/**
 * Lookup key for a text node: non-breaking spaces (from `&nbsp;` in the
 * markup) collapse to ordinary spaces so dictionary keys can be written
 * normally, and runs of whitespace collapse to one.
 */
function normalize(text: string) {
  return text.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

/** Dictionary keyed the same way lookups are, so spacing never causes a miss. */
const normalizedDictionary = new Map(
  Object.entries(hindiDictionary).map(([english, hindi]) => [normalize(english), hindi]),
);

/** Rebuild a node's value, keeping its original leading/trailing whitespace. */
function withPadding(entry: Entry, replacement: string) {
  return entry.lead + replacement + entry.trail;
}

let captured: Entry[] = [];

function shouldSkip(node: Text) {
  let el = node.parentElement;
  while (el) {
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.dataset.noTranslate !== undefined) return true;
    el = el.parentElement;
  }
  return false;
}

/** Walk the page once and remember every translatable text node plus its English. */
export function collectTextNodes(): Entry[] {
  const root = document.querySelector(ROOT_SELECTOR) ?? document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const entries: Entry[] = [];

  let node = walker.nextNode() as Text | null;
  while (node) {
    const text = node.nodeValue ?? "";
    if (text.trim().length > 1 && !NON_TRANSLATABLE.test(text) && !shouldSkip(node)) {
      entries.push({
        node,
        original: text,
        key: normalize(text),
        lead: text.slice(0, text.length - text.trimStart().length),
        trail: text.slice(text.trimEnd().length),
      });
    }
    node = walker.nextNode() as Text | null;
  }

  captured = entries;
  return entries;
}

/**
 * Swap in Hindi. Dictionary hits apply immediately; whatever is left is handed
 * to `fetchMissing` (the API) and applied when it resolves.
 */
export async function applyHindi(
  fetchMissing: (texts: string[]) => Promise<Record<string, string>>,
) {
  const entries = collectTextNodes();
  const pending = new Set<string>();

  for (const entry of entries) {
    const hit = normalizedDictionary.get(entry.key);
    if (hit) {
      entry.node.nodeValue = withPadding(entry, hit);
    } else {
      pending.add(entry.key);
    }
  }

  if (pending.size === 0) return;

  const translated = await fetchMissing([...pending]);
  for (const entry of entries) {
    const hindi = translated[entry.key];
    if (hindi && entry.node.isConnected) {
      entry.node.nodeValue = withPadding(entry, hindi);
    }
  }
}

/** Put every captured node back to the English it had before translating. */
export function restoreEnglish() {
  for (const entry of captured) {
    // A node detached by a React re-render is simply skipped.
    if (entry.node.isConnected) entry.node.nodeValue = entry.original;
  }
  captured = [];
}
