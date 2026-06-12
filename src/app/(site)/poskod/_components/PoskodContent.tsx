"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { lookupPostcode } from "../_lib/postcode";
import AdBanner from "@/components/AdBanner";
import PoskodArticle from "./PoskodArticle";

export default function PoskodContent() {
  const { lang } = useLanguage();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ state: string; stateEn: string; town: string; townEn: string } | null | "not-found">(null);

  const t = {
    bm: {
      title: "📮 Semak Poskod Malaysia",
      subtitle: "Masukkan poskod 5 digit untuk mengetahui negeri dan bandar",
      placeholder: "cth: 47810",
      checkBtn: "Semak",
      stateLabel: "Negeri", townLabel: "Bandar / Kawasan",
      notFound: "Poskod tidak dijumpai. Pastikan 5 digit yang betul.",
      popular: "Poskod Popular",
      disclaimer: "Data poskod adalah untuk rujukan. Sila semak Pos Malaysia untuk maklumat tepat.",
    },
    en: {
      title: "📮 Malaysia Postcode Checker",
      subtitle: "Enter a 5-digit postcode to find the state and city",
      placeholder: "e.g. 47810",
      checkBtn: "Check",
      stateLabel: "State", townLabel: "City / Area",
      notFound: "Postcode not found. Make sure it is a valid 5-digit code.",
      popular: "Popular Postcodes",
      disclaimer: "Postcode data is for reference. Please check Pos Malaysia for accurate information.",
    },
  };
  const s = t[lang];

  const check = (code?: string) => {
    const val = code ?? input;
    const res = lookupPostcode(val);
    setResult(res ?? "not-found");
    if (code) setInput(code);
  };

  const popular = [
    { code: "50000", label: "KL City" },
    { code: "47810", label: "PJ" },
    { code: "47500", label: "Subang Jaya" },
    { code: "40150", label: "Shah Alam" },
    { code: "10000", label: "Georgetown" },
    { code: "80000", label: "JB" },
    { code: "30000", label: "Ipoh" },
    { code: "93000", label: "Kuching" },
  ];

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
        <div className="text-center space-y-2 animate-in">
          <h1 className="text-3xl font-black text-white">{s.title}</h1>
          <p className="text-white/50 text-sm">{s.subtitle}</p>
        </div>

        <div className="card-glass rounded-2xl p-6 space-y-4 animate-in delay-1">
          <div className="flex gap-3">
            <input type="text" inputMode="numeric" maxLength={5} value={input}
              onChange={e => setInput(e.target.value.replace(/\D/g, "").slice(0, 5))}
              onKeyDown={e => e.key === "Enter" && check()}
              placeholder={s.placeholder}
              className="flex-1 bg-white/10 border border-white/20 text-white text-2xl font-mono rounded-xl px-4 py-4 placeholder:text-white/30 focus:outline-none focus:border-yellow-400 text-center tracking-widest" />
            <button onClick={() => check()}
              className="px-6 py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
              {s.checkBtn}
            </button>
          </div>

          <div>
            <p className="text-xs text-white/30 mb-2">{s.popular}:</p>
            <div className="flex flex-wrap gap-2">
              {popular.map(p => (
                <button key={p.code} onClick={() => check(p.code)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-colors">
                  {p.code} {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {result === "not-found" && (
          <div className="card-glass rounded-2xl p-4 text-red-300 text-sm text-center animate-in">{s.notFound}</div>
        )}

        {result && result !== "not-found" && (
          <div className="card-glass rounded-2xl p-6 space-y-4 animate-in">
            <div className="text-center">
              <div className="text-yellow-400 font-black text-5xl font-mono tracking-widest mb-2">{input.padStart(5,"0")}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center card-glass rounded-xl p-4">
                <div className="text-white/40 text-xs mb-2">📍 {s.stateLabel}</div>
                <div className="text-white font-bold">{lang === "bm" ? result.state : result.stateEn}</div>
              </div>
              <div className="text-center card-glass rounded-xl p-4">
                <div className="text-white/40 text-xs mb-2">🏙️ {s.townLabel}</div>
                <div className="text-white font-bold">{lang === "bm" ? result.town : result.townEn}</div>
              </div>
            </div>
          </div>
        )}

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <PoskodArticle />

        <p className="text-white/30 text-xs text-center">{s.disclaimer}</p>
      </div>
    </div>
  );
}
