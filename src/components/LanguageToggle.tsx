"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex bg-white/8 border border-white/10 rounded-full p-0.5 text-sm font-semibold">
      {(["bm", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            lang === l ? "bg-red-600 text-white shadow-sm" : "text-white/50 hover:text-white/80"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
