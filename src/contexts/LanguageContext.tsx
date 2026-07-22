"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "bm" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bm",
  setLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang = "bm",
}: {
  children: ReactNode;
  /** Server-determined locale (from the ?lang= URL param via middleware) — keeps SSR output for crawlers in sync with the requested URL. */
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  // On pages without an explicit ?lang= param, fall back to the visitor's
  // last saved preference (client-side UX only — never overrides an
  // explicit URL-driven initialLang, so SSR/crawled content stays correct).
  useEffect(() => {
    if (initialLang !== "bm") return;
    try {
      const stored = localStorage.getItem("tmi-lang");
      if (stored === "en") setLang(stored);
    } catch {}
  }, [initialLang]);

  const update = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem("tmi-lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: update }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
