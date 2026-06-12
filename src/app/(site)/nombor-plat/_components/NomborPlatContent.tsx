"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { decodePlate, STATE_LIST } from "../_lib/plate";
import AdBanner from "@/components/AdBanner";
import NomborPlatArticle from "./NomborPlatArticle";

export default function NomborPlatContent() {
  const { lang } = useLanguage();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ state: string; stateEn: string; district?: string; flag: string } | null | "not-found">(null);

  const t = {
    bm: {
      title: "🚗 Semak Nombor Plat",
      subtitle: "Ketahui negeri dan kawasan dari nombor plat kereta Malaysia",
      placeholder: "Masukkan nombor plat (cth: WA1234B)",
      check: "Semak Plat",
      stateLabel: "Negeri", districtLabel: "Kawasan/Daerah",
      notFound: "Nombor plat tidak dikenali. Cuba format lain.",
      refTitle: "Senarai Kod Plat Negeri",
      disclaimer: "⚠️ Alat ini mengenal pasti negeri dari kod plat sahaja. Untuk maklumat pemilik, sejarah kemalangan, atau status JPJ — sila gunakan portal rasmi JPJ.",
      jpjPortal: "Portal Rasmi JPJ",
    },
    en: {
      title: "🚗 Car Plate Decoder",
      subtitle: "Find the state and region from a Malaysian car plate number",
      placeholder: "Enter plate number (e.g. WA1234B)",
      check: "Decode Plate",
      stateLabel: "State", districtLabel: "District/Area",
      notFound: "Plate number not recognised. Try a different format.",
      refTitle: "State Plate Code Reference",
      disclaimer: "⚠️ This tool identifies the state from plate code only. For owner info, accident history, or JPJ status — use the official JPJ portal.",
      jpjPortal: "Official JPJ Portal",
    },
  };
  const s = t[lang];

  const handleCheck = () => {
    const res = decodePlate(input);
    setResult(res ?? "not-found");
  };

  const formatPlate = (v: string) => v.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {/* Input */}
      <div className="card-glass rounded-2xl p-6 space-y-4 animate-in delay-1">
        <input
          type="text"
          value={input}
          onChange={e => setInput(formatPlate(e.target.value))}
          placeholder={s.placeholder}
          onKeyDown={e => e.key === "Enter" && handleCheck()}
          className="w-full bg-white/10 border border-white/20 text-white text-2xl font-mono rounded-xl px-4 py-4 placeholder:text-white/30 focus:outline-none focus:border-yellow-400 text-center tracking-widest uppercase"
        />
        <button onClick={handleCheck}
          className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
          {s.check}
        </button>
      </div>

      {/* Result */}
      {result === "not-found" && (
        <div className="card-glass rounded-2xl p-4 text-red-300 text-sm text-center animate-in">
          {s.notFound}
        </div>
      )}

      {result && result !== "not-found" && (
        <div className="space-y-3 animate-in">
          {/* Plate display */}
          <div className="card-glass rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="bg-yellow-400 text-black font-black text-3xl font-mono px-8 py-4 rounded-xl tracking-widest shadow-lg">
              {input}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="text-center">
                <div className="text-white/40 text-xs mb-1">{s.stateLabel}</div>
                <div className="text-4xl mb-1">{result.flag}</div>
                <div className="text-white font-bold">{lang === "bm" ? result.state : result.stateEn}</div>
              </div>
              {result.district && (
                <div className="text-center">
                  <div className="text-white/40 text-xs mb-1">{s.districtLabel}</div>
                  <div className="text-3xl mb-1">📍</div>
                  <div className="text-white font-bold">{result.district}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* JPJ disclaimer */}
      <div className="card-glass rounded-2xl p-4 space-y-3 animate-in delay-2">
        <p className="text-white/40 text-xs">{s.disclaimer}</p>
        <a href="https://www.jpj.gov.my" target="_blank" rel="noopener noreferrer"
          className="block w-full py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-bold text-center hover:bg-blue-600/30 transition-colors">
          🔗 {s.jpjPortal}: jpj.gov.my ↗
        </a>
      </div>

      <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

      {/* State reference */}
      <div className="card-glass rounded-2xl p-5 animate-in delay-3">
        <h2 className="text-white font-bold text-sm mb-3">{s.refTitle}</h2>
        <div className="grid grid-cols-2 gap-2">
          {STATE_LIST.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className="text-lg">{item.flag}</span>
              <div>
                <div className="text-white/70">{item.state}</div>
                <div className="text-white/30">{item.prefixes.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

      {/* Rich editorial content + FAQ */}
      <NomborPlatArticle />
    </div>
  );
}
