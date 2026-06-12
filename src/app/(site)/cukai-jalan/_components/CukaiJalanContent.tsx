"use client";

import { useState, useMemo } from "react";
import { calculateRoadTax } from "../_lib/roadtax";
import type { Region, VehicleType } from "../_lib/roadtax";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import CukaiJalanArticle from "./CukaiJalanArticle";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const CAR_CC_PRESETS = [1000, 1300, 1500, 1600, 1800, 2000, 2500];
const MOTO_CC_PRESETS = [125, 150, 200, 250, 400];

export default function CukaiJalanContent() {
  const { lang } = useLanguage();
  const [vehicleType, setVehicleType] = useState<VehicleType>("car");
  const [region, setRegion] = useState<Region>("peninsular");
  const [cc, setCc] = useState(1500);
  const [customCc, setCustomCc] = useState("");

  const effectiveCc = parseInt(customCc) || cc;
  const result = useMemo(() => calculateRoadTax(effectiveCc, vehicleType, region), [effectiveCc, vehicleType, region]);

  const presets = vehicleType === "car" ? CAR_CC_PRESETS : MOTO_CC_PRESETS;

  const t = {
    bm: {
      title: "🚗 Kalkulator Cukai Jalan",
      subtitle: "Semak kadar cukai jalan / road tax kenderaan anda",
      car: "Kereta", motorcycle: "Motosikal",
      peninsular: "Semenanjung Malaysia", sabahsarawak: "Sabah / Sarawak",
      engineCC: "Kapasiti Enjin (CC)",
      customPlaceholder: "Masukkan CC lain",
      region: "Wilayah",
      vehicle: "Jenis Kenderaan",
      annualTax: "Cukai Jalan Setahun",
      sixMonth: "6 Bulan",
      approxNote: "* Anggaran untuk >2000cc. Semak kadar tepat di MyEG atau JPJ.",
      disclaimer: "* Kadar untuk kenderaan persendirian. Kenderaan komersial, OKU, atau antik berbeza. Semak dengan JPJ.",
    },
    en: {
      title: "🚗 Malaysia Road Tax Calculator",
      subtitle: "Check your vehicle road tax / cukai jalan rate",
      car: "Car", motorcycle: "Motorcycle",
      peninsular: "Peninsular Malaysia", sabahsarawak: "Sabah / Sarawak",
      engineCC: "Engine Capacity (CC)",
      customPlaceholder: "Enter other CC",
      region: "Region",
      vehicle: "Vehicle Type",
      annualTax: "Annual Road Tax",
      sixMonth: "6 Months",
      approxNote: "* Approximate for >2000cc. Check exact rate at MyEG or JPJ.",
      disclaimer: "* Rates for private vehicles. Commercial, OKU, or antique vehicles differ. Verify with JPJ.",
    },
  };
  const s = t[lang];

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Vehicle + Region */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.vehicle}</label>
              <div className="flex gap-2">
                {(["car","motorcycle"] as const).map(v => (
                  <button key={v} onClick={() => { setVehicleType(v); setCc(v === "car" ? 1500 : 150); setCustomCc(""); }}
                    className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-colors ${vehicleType === v ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                    {v === "car" ? s.car : s.motorcycle}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.region}</label>
              <div className="flex gap-2">
                {(["peninsular","sabahsarawak"] as const).map(r => (
                  <button key={r} onClick={() => setRegion(r)}
                    className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-colors ${region === r ? "bg-blue-600 border-blue-500 text-white" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                    {r === "peninsular" ? s.peninsular : s.sabahsarawak}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.engineCC}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {presets.map(p => (
                  <button key={p} onClick={() => { setCc(p); setCustomCc(""); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${cc === p && !customCc ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {p}cc
                  </button>
                ))}
              </div>
              <input type="number" placeholder={s.customPlaceholder} value={customCc}
                onChange={e => setCustomCc(e.target.value)}
                className="w-40 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-blue-600/30 to-blue-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-blue-300/70 uppercase tracking-wider mb-1">{s.annualTax}</div>
            <div className="text-5xl font-black text-white">{RM(result.annualTax)}</div>
            <div className="text-sm text-white/40 mt-1">
              {effectiveCc}cc · {vehicleType === "car" ? s.car : s.motorcycle} · {region === "peninsular" ? s.peninsular : s.sabahsarawak}
            </div>
            {result.isApprox && (
              <div className="mt-2 text-xs text-yellow-400/70">{s.approxNote}</div>
            )}
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-5 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.annualTax,   val: RM(result.annualTax),   cls: "text-blue-300 font-black text-lg" },
                { label: s.sixMonth,    val: RM(result.sixMonthTax), cls: "text-white/70" },
                { label: lang === "bm" ? "Kapasiti enjin" : "Engine capacity", val: `${effectiveCc} cc`, cls: "text-white" },
                { label: lang === "bm" ? "Wilayah" : "Region",   val: region === "peninsular" ? s.peninsular : s.sabahsarawak, cls: "text-white" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/60">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Renew reminder */}
        <div className="card-glass rounded-2xl p-4 text-center">
          <p className="text-sm text-yellow-300/70">
            💡 {lang === "bm" ? "Renew cukai jalan di MyEG, JPJ, atau Pejabat Pos" : "Renew road tax at MyEG, JPJ counters, or Post Office"}
          </p>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <CukaiJalanArticle />
      </div>
    </div>
  );
}
