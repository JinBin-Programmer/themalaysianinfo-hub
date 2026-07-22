"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const popularTools = [
  { href: "/petrol", icon: "⛽", bm: "Harga Petrol", en: "Petrol Prices" },
  { href: "/kwsp", icon: "🏦", bm: "Kalkulator KWSP", en: "EPF Calculator" },
  { href: "/gaji-bersih", icon: "💰", bm: "Gaji Bersih", en: "Net Salary" },
  { href: "/cukai-pendapatan", icon: "🧾", bm: "Cukai Pendapatan", en: "Income Tax" },
  { href: "/solat", icon: "🕌", bm: "Waktu Solat", en: "Prayer Times" },
  { href: "/panduan", icon: "📚", bm: "Panduan", en: "Guides" },
];

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-8xl font-black text-red-600 leading-none">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">
          {lang === "bm" ? "Halaman Tidak Dijumpai" : "Page Not Found"}
        </h1>
        <p className="mt-3 text-white/50 max-w-md">
          {lang === "bm"
            ? "Maaf, kami tidak dapat mencari halaman yang anda cari. Mungkin ia telah dipindahkan atau URL tidak tepat."
            : "Sorry, we couldn't find the page you were looking for. It may have been moved or the URL might be incorrect."}
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {lang === "bm" ? "Kembali ke Laman Utama" : "Back to Home"}
        </Link>

        <div className="mt-16 w-full max-w-2xl">
          <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
            {lang === "bm" ? "Alatan Popular" : "Popular Tools"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-3 card-glass rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-red-500/40 transition-colors"
              >
                <span className="text-xl">{tool.icon}</span>
                {lang === "bm" ? tool.bm : tool.en}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
