"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { calcTax, RM } from "../_lib/tax";
import CukaiPendapatanArticle from "./CukaiPendapatanArticle";

interface Reliefs {
  self: number;
  spouse: number;
  children: number;
  epf: number;
  medInsurance: number;
  lifeInsurance: number;
  education: number;
  lifestyle: number;
  parentsMedical: number;
}

const DEFAULT_RELIEFS: Reliefs = {
  self: 9000,
  spouse: 0,
  children: 0,
  epf: 0,
  medInsurance: 0,
  lifeInsurance: 0,
  education: 0,
  lifestyle: 0,
  parentsMedical: 0,
};

export default function CukaiPendapatanContent() {
  const { lang } = useLanguage();
  const [income, setIncome] = useState("");
  const [reliefs, setReliefs] = useState<Reliefs>(DEFAULT_RELIEFS);
  const [result, setResult] = useState<{ chargeableIncome: number; tax: number; effectiveRate: number; monthlyPCB: number } | null>(null);

  const t = {
    bm: {
      title: "🧾 Kalkulator Cukai Pendapatan",
      subtitle: "Kira cukai pendapatan peribadi Malaysia YA2024/2025",
      incomeLabel: "Pendapatan Kasar Setahun (RM)",
      incomePlaceholder: "cth: 60000",
      reliefTitle: "Relief Peribadi",
      self: "Diri sendiri & keluarga", spouseLabel: "Relief pasangan (tiada pendapatan)",
      childrenLabel: "Bilangan anak (RM2,000/anak)", epfLabel: "Caruman KWSP (max RM4,000)",
      lifeInsLabel: "Insurans hayat (max RM3,000)", medInsLabel: "Insurans perubatan (max RM3,000)",
      eduLabel: "Pendidikan diri (max RM7,000)", lifestyleLabel: "Gaya hidup (max RM2,500)",
      parentsLabel: "Perubatan ibu bapa (max RM8,000)",
      calcBtn: "Kira Cukai",
      chargeableIncome: "Pendapatan Bercukai", annualTax: "Cukai Setahun",
      effectiveRate: "Kadar Efektif", monthlyPCB: "PCB Bulanan (anggaran)",
      brackets: "Kadar Cukai 2024",
      disclaimer: "Anggaran sahaja. Untuk pengiraan tepat, rujuk MyTax LHDN.",
    },
    en: {
      title: "🧾 Income Tax Calculator",
      subtitle: "Calculate Malaysia personal income tax YA2024/2025",
      incomeLabel: "Annual Gross Income (RM)",
      incomePlaceholder: "e.g. 60000",
      reliefTitle: "Personal Reliefs",
      self: "Self & family", spouseLabel: "Spouse relief (no income)",
      childrenLabel: "Number of children (RM2,000/child)", epfLabel: "EPF contribution (max RM4,000)",
      lifeInsLabel: "Life insurance (max RM3,000)", medInsLabel: "Medical insurance (max RM3,000)",
      eduLabel: "Self-education (max RM7,000)", lifestyleLabel: "Lifestyle (max RM2,500)",
      parentsLabel: "Parents medical (max RM8,000)",
      calcBtn: "Calculate Tax",
      chargeableIncome: "Chargeable Income", annualTax: "Annual Tax",
      effectiveRate: "Effective Rate", monthlyPCB: "Monthly PCB (estimate)",
      brackets: "2024 Tax Brackets",
      disclaimer: "Estimates only. For accurate calculations, refer to LHDN MyTax.",
    },
  };
  const s = t[lang];

  const totalReliefs =
    reliefs.self +
    reliefs.spouse +
    reliefs.children * 2000 +
    Math.min(reliefs.epf, 4000) +
    Math.min(reliefs.lifeInsurance, 3000) +
    Math.min(reliefs.medInsurance, 3000) +
    Math.min(reliefs.education, 7000) +
    Math.min(reliefs.lifestyle, 2500) +
    Math.min(reliefs.parentsMedical, 8000);

  const calculate = () => {
    const gross = parseFloat(income) || 0;
    const chargeableIncome = Math.max(0, gross - totalReliefs);
    const tax = calcTax(chargeableIncome);
    const effectiveRate = gross > 0 ? (tax / gross) * 100 : 0;
    const monthlyPCB = Math.round(tax / 12);
    setResult({ chargeableIncome, tax, effectiveRate, monthlyPCB });
  };

  const inp = (label: string, value: number, onChange: (v: number) => void, max?: number) => (
    <div className="flex items-center justify-between gap-3">
      <label className="text-white/60 text-sm flex-1">{label} {max ? <span className="text-white/30 text-xs">(max RM{max.toLocaleString()})</span> : ""}</label>
      <input type="number" value={value || ""} onChange={e => onChange(Math.min(parseFloat(e.target.value) || 0, max ?? Infinity))}
        className="w-28 bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-yellow-400 text-right" />
    </div>
  );

  const BRACKETS_DISPLAY = [
    ["RM 0 – RM 5,000", "0%"], ["RM 5,001 – RM 20,000", "1%"],
    ["RM 20,001 – RM 35,000", "3%"], ["RM 35,001 – RM 50,000", "8%"],
    ["RM 50,001 – RM 70,000", "13%"], ["RM 70,001 – RM 100,000", "21%"],
    ["RM 100,001 – RM 400,000", "24%"], ["RM 400,001 – RM 600,000", "24.5%"],
    ["RM 600,001 – RM 1,000,000", "25%"], ["Melebihi RM 1,000,000", "26%"],
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {/* Income input */}
      <div className="card-glass rounded-2xl p-5 space-y-3 animate-in delay-1">
        <label className="text-xs text-white/50 uppercase tracking-wider">{s.incomeLabel}</label>
        <div className="flex items-center gap-2">
          <span className="text-white/40 font-bold">RM</span>
          <input type="number" value={income} onChange={e => setIncome(e.target.value)}
            placeholder={s.incomePlaceholder}
            className="flex-1 bg-white/10 border border-white/20 text-white text-xl rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      {/* Reliefs */}
      <div className="card-glass rounded-2xl p-5 space-y-3 animate-in delay-2">
        <h2 className="text-white font-bold text-sm">{s.reliefTitle}</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">{s.self}</span>
          <span className="text-white font-bold">RM 9,000</span>
        </div>
        <div className="space-y-2 border-t border-white/10 pt-3">
          <div className="flex items-center justify-between gap-3">
            <label className="text-white/60 text-sm flex-1">{s.spouseLabel}</label>
            <input type="checkbox" onChange={e => setReliefs(r => ({ ...r, spouse: e.target.checked ? 4000 : 0 }))}
              className="w-4 h-4 accent-yellow-400" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label className="text-white/60 text-sm flex-1">{s.childrenLabel}</label>
            <input type="number" min={0} max={10} value={reliefs.children || ""}
              onChange={e => setReliefs(r => ({ ...r, children: Math.min(parseInt(e.target.value) || 0, 10) }))}
              className="w-20 bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-yellow-400 text-right" />
          </div>
          {inp(s.epfLabel, reliefs.epf, v => setReliefs(r => ({ ...r, epf: v })), 4000)}
          {inp(s.lifeInsLabel, reliefs.lifeInsurance, v => setReliefs(r => ({ ...r, lifeInsurance: v })), 3000)}
          {inp(s.medInsLabel, reliefs.medInsurance, v => setReliefs(r => ({ ...r, medInsurance: v })), 3000)}
          {inp(s.eduLabel, reliefs.education, v => setReliefs(r => ({ ...r, education: v })), 7000)}
          {inp(s.lifestyleLabel, reliefs.lifestyle, v => setReliefs(r => ({ ...r, lifestyle: v })), 2500)}
          {inp(s.parentsLabel, reliefs.parentsMedical, v => setReliefs(r => ({ ...r, parentsMedical: v })), 8000)}
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-sm">
          <span className="text-white/50">Jumlah Relief / Total Relief</span>
          <span className="text-yellow-400 font-bold">RM {totalReliefs.toLocaleString()}</span>
        </div>
      </div>

      <button onClick={calculate}
        className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors animate-in delay-3">
        {s.calcBtn}
      </button>

      {/* Result */}
      {result && (
        <div className="space-y-3 animate-in">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: s.chargeableIncome, value: `RM ${RM(result.chargeableIncome)}`, color: "text-white" },
              { label: s.annualTax, value: `RM ${RM(result.tax)}`, color: "text-yellow-400" },
              { label: s.effectiveRate, value: `${result.effectiveRate.toFixed(2)}%`, color: "text-blue-400" },
              { label: s.monthlyPCB, value: `RM ${RM(result.monthlyPCB)}`, color: "text-green-400" },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-2xl p-4 text-center">
                <div className="text-white/40 text-xs mb-1">{item.label}</div>
                <div className={`${item.color} font-black text-lg`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tax brackets table */}
      <div className="card-glass rounded-2xl p-5 animate-in delay-4">
        <h2 className="text-white font-bold text-sm mb-3">{s.brackets}</h2>
        <div className="space-y-1">
          {BRACKETS_DISPLAY.map(([range, rate], i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-white/50">{range}</span>
              <span className="text-yellow-400 font-bold">{rate}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-white/30 text-xs text-center">{s.disclaimer}</p>

      {/* Rich editorial content + FAQ */}
      <CukaiPendapatanArticle />
    </div>
  );
}
