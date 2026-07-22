"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {lang === "bm" ? "Sesuatu tidak kena" : "Something went wrong"}
        </h2>
        <p className="text-white/50 mb-8 text-sm leading-relaxed">
          {lang === "bm"
            ? "Ralat tidak dijangka berlaku. Cuba muat semula halaman."
            : "An unexpected error occurred. Try refreshing the page."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            {lang === "bm" ? "Cuba Lagi" : "Try again"}
          </button>
          <Link
            href="/"
            className="border border-white/15 text-white/70 hover:bg-white/5 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            {lang === "bm" ? "Ke Laman Utama" : "Go home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
