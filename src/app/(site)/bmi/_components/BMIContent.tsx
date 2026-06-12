"use client";

import { useState, useMemo } from "react";
import { calculateBMI, lbsToKg, ftInToCm } from "../_lib/bmi";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import BMIArticle from "./BMIArticle";

const BMI_SCALE = [
  { label: "Kurus / Underweight", labelEn: "Underweight", max: 18.5, color: "bg-blue-500" },
  { label: "Normal",              labelEn: "Normal",       max: 23,   color: "bg-green-500" },
  { label: "Berlebihan / Overweight", labelEn: "Overweight", max: 25, color: "bg-yellow-500" },
  { label: "Obes I",              labelEn: "Obese I",      max: 30,   color: "bg-orange-500" },
  { label: "Obes II",             labelEn: "Obese II",     max: 99,   color: "bg-red-500" },
];

export default function BMIContent() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [lbs, setLbs] = useState(143);
  const [ft, setFt] = useState(5);
  const [inch, setInch] = useState(5);
  const { lang } = useLanguage();

  const weightKg = unit === "metric" ? weight : lbsToKg(lbs);
  const heightCm = unit === "metric" ? height : ftInToCm(ft, inch);

  const result = useMemo(() => calculateBMI(weightKg, heightCm), [weightKg, heightCm]);

  const bmiPercent = Math.min(100, Math.max(0, ((result.bmi - 10) / 30) * 100));

  const t = {
    bm: {
      title: "🏋️ Kalkulator BMI Malaysia",
      subtitle: "Kira Indeks Jisim Badan anda dengan piawai Asia-Pasifik WHO",
      metric: "Metrik (kg/cm)", imperial: "Imperial (lbs/ft)",
      weight: "Berat", height: "Tinggi",
      yourBMI: "BMI Anda",
      category: "Kategori",
      idealRange: "Berat Ideal",
      tolose: "turunkan", togain: "naikkan",
      kg: "kg", cm: "cm", lbs: "lbs", ft: "kaki", inch: "inci",
      note: "* Berdasarkan piawai BMI Asia-Pasifik WHO. BMI adalah panduan umum sahaja.",
      diffMsg: (diff: number, dir: string) =>
        `${dir === "lose" ? "Turunkan" : "Naikkan"} ${diff.toFixed(1)} kg untuk mencapai berat ideal`,
      idealMsg: "Tahniah! Berat anda dalam lingkungan ideal.",
    },
    en: {
      title: "🏋️ Malaysia BMI Calculator",
      subtitle: "Calculate your Body Mass Index using WHO Asia-Pacific standards",
      metric: "Metric (kg/cm)", imperial: "Imperial (lbs/ft)",
      weight: "Weight", height: "Height",
      yourBMI: "Your BMI",
      category: "Category",
      idealRange: "Ideal Weight",
      tolose: "lose", togain: "gain",
      kg: "kg", cm: "cm", lbs: "lbs", ft: "ft", inch: "in",
      note: "* Based on WHO Asia-Pacific BMI standards. BMI is a general guide only.",
      diffMsg: (diff: number, dir: string) =>
        `${dir === "lose" ? "Lose" : "Gain"} ${diff.toFixed(1)} kg to reach ideal weight`,
      idealMsg: "Great! Your weight is within the ideal range.",
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
            <div className="flex justify-center gap-2 mt-3">
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-0.5">
                {(["metric","imperial"] as const).map(u => (
                  <button key={u} onClick={() => setUnit(u)}
                    className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors ${unit === u ? "bg-blue-500 text-white" : "text-white/60 hover:text-white"}`}>
                    {u === "metric" ? "kg/cm" : "lbs/ft"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {unit === "metric" ? (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider">{s.weight}</label>
                    <span className="text-yellow-400 font-black text-lg">{weight} {s.kg}</span>
                  </div>
                  <input type="range" min={30} max={200} step={1} value={weight} onChange={e => setWeight(+e.target.value)} className="w-full accent-yellow-400" />
                  <div className="flex justify-between text-xs text-white/30 mt-1"><span>30 kg</span><span>200 kg</span></div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider">{s.height}</label>
                    <span className="text-yellow-400 font-black text-lg">{height} {s.cm}</span>
                  </div>
                  <input type="range" min={100} max={220} step={1} value={height} onChange={e => setHeight(+e.target.value)} className="w-full accent-yellow-400" />
                  <div className="flex justify-between text-xs text-white/30 mt-1"><span>100 cm</span><span>220 cm</span></div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider">{s.weight}</label>
                    <span className="text-yellow-400 font-black text-lg">{lbs} {s.lbs}</span>
                  </div>
                  <input type="range" min={66} max={440} step={1} value={lbs} onChange={e => setLbs(+e.target.value)} className="w-full accent-yellow-400" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.height}</label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-white/50 mb-1"><span>{s.ft}</span><span>{ft}</span></div>
                      <input type="range" min={3} max={7} step={1} value={ft} onChange={e => setFt(+e.target.value)} className="w-full accent-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-white/50 mb-1"><span>{s.inch}</span><span>{inch}</span></div>
                      <input type="range" min={0} max={11} step={1} value={inch} onChange={e => setInch(+e.target.value)} className="w-full accent-yellow-400" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Result */}
          <div className={`animate-in delay-2 rounded-2xl p-6 text-center border ${result.bmi >= 18.5 && result.bmi < 23 ? "bg-gradient-to-br from-green-600/30 to-green-900/20 border-green-500/30" : "bg-gradient-to-br from-white/10 to-white/5 border-white/15"}`}>
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{s.yourBMI}</div>
            <div className={`text-6xl font-black ${result.colorClass}`}>{result.bmi.toFixed(1)}</div>
            <div className={`text-xl font-bold mt-1 ${result.colorClass}`}>
              {lang === "bm" ? result.categoryMs : result.categoryEn}
            </div>
            <div className="text-sm text-white/40 mt-2">
              {result.weightDiffDir === "ideal"
                ? s.idealMsg
                : s.diffMsg(result.weightDiff, result.weightDiffDir)}
            </div>
          </div>
        </div>
      </div>

      {/* Scale + Breakdown */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-5 bg-[#0a0a0a]">

        {/* BMI scale bar */}
        <div className="card-glass rounded-2xl p-5">
          <div className="text-xs text-white/40 uppercase tracking-wider mb-3">BMI Scale (Asia-Pacific WHO)</div>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
            {BMI_SCALE.map((s, i) => (
              <div key={i} className={`${s.color} flex-1`} />
            ))}
          </div>
          <div className="relative mt-2 h-4">
            <div className="absolute w-0.5 h-4 bg-white rounded-full transition-all duration-300"
              style={{ left: `${bmiPercent}%`, transform: "translateX(-50%)" }} />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {BMI_SCALE.map((sc, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-white/50">
                <span className={`w-2.5 h-2.5 rounded-full ${sc.color}`} />
                {lang === "bm" ? sc.label : sc.labelEn} {i < BMI_SCALE.length - 1 ? `< ${sc.max}` : `≥ 30`}
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.yourBMI,     val: result.bmi.toFixed(2),                        cls: `font-black text-lg ${result.colorClass}` },
                { label: s.idealRange,  val: `${result.idealMin.toFixed(1)} – ${result.idealMax.toFixed(1)} kg`, cls: "text-green-300" },
                { label: lang === "bm" ? "Berat semasa" : "Current weight", val: `${weightKg.toFixed(1)} kg`, cls: "text-white" },
                { label: lang === "bm" ? "Tinggi semasa" : "Current height", val: `${heightCm.toFixed(1)} cm`, cls: "text-white" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/60">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.note}</p>

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <BMIArticle />
      </div>
    </div>
  );
}
