"use client";

import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SiteNav() {
  const { lang } = useLanguage();
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-lg font-black text-white shadow-lg shadow-red-900/40">
            MY
          </div>
          <div>
            <div className="font-extrabold text-white text-base leading-tight tracking-tight">The Malaysian Info</div>
            <div className="text-white/35 text-[10px] leading-none">
              {lang === "bm" ? "Portal Maklumat Malaysia" : "Malaysia Information Hub"}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:inline-flex text-sm font-medium text-white/55 hover:text-white transition-colors"
          >
            {lang === "bm" ? "Semua Alatan" : "All Tools"}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
