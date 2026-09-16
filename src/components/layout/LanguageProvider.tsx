"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import { applyHindi, restoreEnglish } from "@/lib/i18n/translator";

export type Lang = "en" | "hi";

type LanguageContextValue = {
  lang: Lang;
  busy: boolean;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "atc_page_lang";

/**
 * The chosen language lives in sessionStorage so it survives navigation, and
 * is read through useSyncExternalStore so the server render (always English)
 * and the client stay in agreement.
 */
const langStore = {
  listeners: new Set<() => void>(),
  subscribe(listener: () => void) {
    langStore.listeners.add(listener);
    return () => langStore.listeners.delete(listener);
  },
  getSnapshot(): Lang {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "hi" ? "hi" : "en";
    } catch {
      return "en";
    }
  },
  getServerSnapshot(): Lang {
    return "en";
  },
  set(lang: Lang) {
    try {
      if (lang === "hi") sessionStorage.setItem(STORAGE_KEY, "hi");
      else sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Preference just won't survive a reload.
    }
    for (const listener of langStore.listeners) listener();
  },
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** Session cache so re-visiting a page never pays for the same request twice. */
function cacheKey(text: string) {
  return `sb_hi_${text}`;
}

async function fetchMissing(texts: string[]): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  const needed: string[] = [];

  for (const text of texts) {
    let cached: string | null = null;
    try {
      cached = sessionStorage.getItem(cacheKey(text));
    } catch {
      // Storage unavailable (private mode) — just fetch it.
    }
    if (cached) result[text] = cached;
    else needed.push(text);
  }

  if (needed.length === 0) return result;

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang: "hi", texts: needed }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = (await response.json()) as { translations?: (string | null)[] };
    needed.forEach((text, index) => {
      const hindi = data.translations?.[index];
      if (!hindi) return;
      result[text] = hindi;
      try {
        sessionStorage.setItem(cacheKey(text), hindi);
      } catch {
        // Nothing to do — it just costs one more request next time.
      }
    });
  } catch (error) {
    // Untranslated text stays English rather than breaking the page.
    console.warn("[i18n] translation request failed:", error);
  }

  return result;
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot,
  );
  const [busy, setBusy] = useState(false);
  const pathname = usePathname();
  const translatedPath = useRef<string | null>(null);

  // Translate on switch, and again after each client-side navigation.
  useEffect(() => {
    if (lang !== "hi") {
      translatedPath.current = null;
      return;
    }
    if (translatedPath.current === pathname) return;

    let cancelled = false;
    setBusy(true);

    // One frame's delay lets the new route finish painting before we walk it.
    const timer = setTimeout(() => {
      applyHindi(fetchMissing).finally(() => {
        if (!cancelled) {
          translatedPath.current = pathname;
          setBusy(false);
        }
      });
    }, 60);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lang, pathname]);

  const setLang = useCallback((next: Lang) => {
    if (next === "en") restoreEnglish();
    langStore.set(next);
  }, []);

  const value = useMemo(() => ({ lang, busy, setLang }), [lang, busy, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
