"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SiteFooter() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 py-8 text-center text-xs text-white/25 space-y-3">
      <div className="flex items-center justify-center gap-2 text-white/50 font-semibold text-sm">
        <div className="w-6 h-6 rounded-lg bg-red-600/80 flex items-center justify-center text-[10px] font-black text-white">MY</div>
        <span>The Malaysian Info</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-white/40">
        <Link href="/" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Laman Utama" : "Home"}</Link>
        <span className="text-white/15">·</span>
        <Link href="/panduan" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Panduan" : "Guides"}</Link>
        <span className="text-white/15">·</span>
        <Link href="/about" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Tentang" : "About"}</Link>
        <span className="text-white/15">·</span>
        <Link href="/contact" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Hubungi" : "Contact"}</Link>
        <span className="text-white/15">·</span>
        <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Dasar Privasi" : "Privacy Policy"}</Link>
        <span className="text-white/15">·</span>
        <Link href="/terms" className="hover:text-white/70 transition-colors">{lang === "bm" ? "Terma" : "Terms"}</Link>
      </div>

      <p className="text-white/20 text-[11px]">
        {lang === "bm"
          ? `Semua maklumat adalah untuk rujukan sahaja. · © ${year} The Malaysian Info`
          : `All information is for reference only. · © ${year} The Malaysian Info`}
      </p>
    </footer>
  );
}
