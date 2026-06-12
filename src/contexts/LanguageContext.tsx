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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("bm");

  // Restore saved language preference across pages
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tmi-lang");
      if (stored === "bm" || stored === "en") setLang(stored);
    } catch {}
  }, []);

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
