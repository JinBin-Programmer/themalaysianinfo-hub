"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchTo = (l: "bm" | "en") => {
    setLang(l); // instant UI feedback, no flash of the old language
    try {
      localStorage.setItem("tmi-lang", l);
    } catch {}

    // Reflect the choice in the URL too, so the server renders (and Google
    // can index) the matching language for this exact page.
    const params = new URLSearchParams(searchParams.toString());
    if (l === "en") params.set("lang", "en");
    else params.delete("lang");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="flex bg-white/8 border border-white/10 rounded-full p-0.5 text-sm font-semibold">
      {(["bm", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
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
