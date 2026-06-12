"use client";

import { useState, useMemo } from "react";
import { UNITS, convert } from "../_lib/conversions";
import type { Category } from "../_lib/conversions";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import KonversiArticle from "./KonversiArticle";

const CATEGORIES: { key: Category; labelMs: string; labelEn: string; icon: string }[] = [
  { key: "length",      labelMs: "Panjang",      labelEn: "Length",      icon: "📏" },
  { key: "weight",      labelMs: "Berat",        labelEn: "Weight",      icon: "⚖️" },
  { key: "temperature", labelMs: "Suhu",         labelEn: "Temperature", icon: "🌡️" },
  { key: "volume",      labelMs: "Isipadu",      labelEn: "Volume",      icon: "🧪" },
  { key: "area",        labelMs: "Luas",         labelEn: "Area",        icon: "▭" },
];

export default function KonversiContent() {
  const { lang } = useLanguage();
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");

  const units = UNITS[category];
  const numValue = parseFloat(value) || 0;
  const result = useMemo(() => convert(numValue, fromUnit, toUnit, category), [numValue, fromUnit, toUnit, category]);

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const u = UNITS[cat];
    setFromUnit(u[0].key);
    setToUnit(u[1]?.key ?? u[0].key);
    setValue("1");
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const fmt = (n: number) => {
    if (Math.abs(n) >= 1000) return n.toLocaleString("en-MY", { maximumFractionDigits: 4 });
    if (Math.abs(n) < 0.0001 && n !== 0) return n.toExponential(4);
    return n.toLocaleString("en-MY", { maximumFractionDigits: 6, minimumFractionDigits: 0 });
  };

  const t = {
    bm: { title: "📏 Penukar Unit", subtitle: "Tukar unit ukuran dengan mudah", from: "Dari", to: "Kepada", swap: "Tukar", allConversions: "Semua Penukaran" },
    en: { title: "📏 Unit Converter", subtitle: "Convert units of measurement easily", from: "From", to: "To", swap: "Swap", allConversions: "All Conversions" },
  };
  const s = t[lang];

  // All conversions from the "from" unit
  const allResults = useMemo(() =>
    units.map(u => ({ unit: u, result: convert(numValue, fromUnit, u.key, category) })),
    [numValue, fromUnit, category, units],
  );

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Category tabs */}
          <div className="animate-in delay-1 flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button key={cat.key} onClick={() => handleCategoryChange(cat.key)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-bold transition-colors ${category === cat.key ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                {cat.icon} {lang === "bm" ? cat.labelMs : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            {/* Value input */}
            <div>
              <input type="number" value={value} onChange={e => setValue(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-2xl font-black focus:outline-none focus:border-yellow-400" />
            </div>

            {/* From / To selects */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-1">{s.from}</label>
                <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {units.map(u => <option key={u.key} value={u.key} className="bg-gray-900">
                    {lang === "bm" ? u.labelMs : u.label} ({u.key})
                  </option>)}
                </select>
              </div>
              <button onClick={swap} className="mt-5 p-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white font-bold transition-colors">⇄</button>
              <div className="flex-1">
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-1">{s.to}</label>
                <select value={toUnit} onChange={e => setToUnit(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {units.map(u => <option key={u.key} value={u.key} className="bg-gray-900">
                    {lang === "bm" ? u.labelMs : u.label} ({u.key})
                  </option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-cyan-600/30 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6 text-center">
            <div className="text-sm text-cyan-300/70 mb-1">{value} {fromUnit} =</div>
            <div className="text-5xl font-black text-white break-all">{fmt(result)}</div>
            <div className="text-xl text-cyan-300 font-bold mt-1">{toUnit}</div>
          </div>
        </div>
      </div>

      {/* All conversions table + article */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white text-sm">{s.allConversions}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {allResults.map(({ unit, result: r }) => (
                <tr key={unit.key} className={`hover:bg-white/5 ${unit.key === fromUnit ? "bg-yellow-500/10" : ""}`}>
                  <td className="px-5 py-2.5 text-white/60">{lang === "bm" ? unit.labelMs : unit.label}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-semibold text-white">{fmt(r)} <span className="text-white/40 text-xs">{unit.key}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <KonversiArticle />
      </div>
    </div>
  );
}
