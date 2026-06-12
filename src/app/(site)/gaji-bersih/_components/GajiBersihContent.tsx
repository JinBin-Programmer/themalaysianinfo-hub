"use client";

import { useState, useMemo } from "react";
import { calculateSalary } from "../_lib/salary";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import GajiBersihArticle from "./GajiBersihArticle";

const RM = (n: number) => `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const SALARY_PRESETS = [2000, 3000, 4000, 5000, 6000, 8000, 10000, 15000];

export default function GajiBersihContent() {
  const [gross, setGross] = useState(5000);
  const [customGross, setCustomGross] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [spouseWorking, setSpouseWorking] = useState(true);
  const [numChildren, setNumChildren] = useState(0);
  const { lang } = useLanguage();

  const effectiveGross = parseFloat(customGross) || gross;
  const result = useMemo(() => calculateSalary({ gross: effectiveGross, isMarried, spouseWorking, numChildren }), [effectiveGross, isMarried, spouseWorking, numChildren]);

  const t = {
    bm: {
      title: "💰 Kalkulator Gaji Bersih Malaysia",
      subtitle: "Kira gaji bersih selepas potongan EPF, SOCSO, EIS & Cukai Pendapatan",
      grossLabel: "Gaji Kasar Sebulan (RM)",
      customPlaceholder: "Masukkan gaji lain",
      maritalLabel: "Status Perkahwinan",
      single: "Bujang",
      married: "Berkahwin",
      spouseLabel: "Pasangan bekerja?",
      yes: "Ya",
      no: "Tidak",
      childrenLabel: "Bilangan Anak (bawah 18)",
      netLabel: "Gaji Bersih Sebulan",
      breakdown: "Pecahan Potongan",
      grossRow: "Gaji Kasar",
      epfRow: "EPF / KWSP (11%)",
      socsoRow: "SOCSO / Perkeso (0.5%)",
      eisRow: "EIS / SIP (0.2%)",
      pcbRow: "Cukai Pendapatan (PCB)",
      totalDed: "Jumlah Potongan",
      netRow: "Gaji Bersih",
      employerTitle: "Caruman Majikan (tidak dipotong dari gaji anda)",
      epfEmployer: "EPF Majikan",
      socsoEmployer: "SOCSO Majikan",
      eisEmployer: "EIS Majikan",
      annualTitle: "Ringkasan Tahunan",
      annualGross: "Gaji Kasar Setahun",
      annualTax: "Cukai Pendapatan Setahun",
      annualNet: "Gaji Bersih Setahun",
      taxableIncome: "Pendapatan Bercukai (Anggaran)",
      effectiveRate: "Kadar Cukai Efektif",
      reliefsApplied: "Pelepasan Cukai Digunakan",
      personalRelief: "Pelepasan Peribadi",
      epfRelief: "Pelepasan EPF",
      spouseRelief: "Pelepasan Pasangan",
      childRelief: "Pelepasan Anak",
      disclaimer: "* Anggaran berdasarkan kadar EPF, SOCSO, EIS & PCB semasa. Untuk rujukan sahaja — semak dengan majikan atau LHDN.",
    },
    en: {
      title: "💰 Malaysia Take-Home Salary Calculator",
      subtitle: "Calculate net pay after EPF, SOCSO, EIS & Income Tax deductions",
      grossLabel: "Monthly Gross Salary (RM)",
      customPlaceholder: "Enter other amount",
      maritalLabel: "Marital Status",
      single: "Single",
      married: "Married",
      spouseLabel: "Spouse working?",
      yes: "Yes",
      no: "No",
      childrenLabel: "Number of Children (under 18)",
      netLabel: "Monthly Take-Home Pay",
      breakdown: "Deduction Breakdown",
      grossRow: "Gross Salary",
      epfRow: "EPF / KWSP (11%)",
      socsoRow: "SOCSO / Perkeso (0.5%)",
      eisRow: "EIS / SIP (0.2%)",
      pcbRow: "Income Tax (PCB)",
      totalDed: "Total Deductions",
      netRow: "Net Take-Home Pay",
      employerTitle: "Employer Contributions (not deducted from your pay)",
      epfEmployer: "Employer EPF",
      socsoEmployer: "Employer SOCSO",
      eisEmployer: "Employer EIS",
      annualTitle: "Annual Summary",
      annualGross: "Annual Gross",
      annualTax: "Annual Income Tax",
      annualNet: "Annual Net Pay",
      taxableIncome: "Taxable Income (Estimate)",
      effectiveRate: "Effective Tax Rate",
      reliefsApplied: "Tax Reliefs Applied",
      personalRelief: "Personal Relief",
      epfRelief: "EPF Relief",
      spouseRelief: "Spouse Relief",
      childRelief: "Child Relief",
      disclaimer: "* Estimates based on current EPF, SOCSO, EIS & PCB rates. For reference only — verify with your employer or LHDN.",
    },
  };
  const s = t[lang];

  const epfRelief = Math.min(result.epfEmployee * 12, 4000);
  const spouseRelief = isMarried && !spouseWorking ? 4000 : 0;
  const childRelief = numChildren * 2000;

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">
          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Input card */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Gross salary presets */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.grossLabel}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {SALARY_PRESETS.map(p => (
                  <button key={p} onClick={() => { setGross(p); setCustomGross(""); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${gross === p && !customGross ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p.toLocaleString()}
                  </button>
                ))}
              </div>
              <input type="number" placeholder={s.customPlaceholder} value={customGross}
                onChange={e => setCustomGross(e.target.value)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>

            {/* Marital status */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.maritalLabel}</label>
              <div className="flex gap-2">
                {([false, true] as const).map(m => (
                  <button key={String(m)} onClick={() => setIsMarried(m)}
                    className={`text-sm px-4 py-2 rounded-xl border transition-colors ${isMarried === m ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {m ? s.married : s.single}
                  </button>
                ))}
              </div>
            </div>

            {/* Spouse working — only if married */}
            {isMarried && (
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.spouseLabel}</label>
                <div className="flex gap-2">
                  {([true, false] as const).map(w => (
                    <button key={String(w)} onClick={() => setSpouseWorking(w)}
                      className={`text-sm px-4 py-2 rounded-xl border transition-colors ${spouseWorking === w ? "bg-blue-500 border-blue-400 text-white font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      {w ? s.yes : s.no}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Children */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.childrenLabel}</label>
              <div className="flex gap-2 flex-wrap">
                {[0,1,2,3,4,5].map(n => (
                  <button key={n} onClick={() => setNumChildren(n)}
                    className={`w-10 h-10 rounded-xl border text-sm font-bold transition-colors ${numChildren === n ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {n === 5 ? "5+" : n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Net salary result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-green-600/30 to-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-green-300/70 uppercase tracking-wider mb-1">{s.netLabel}</div>
            <div className="text-5xl font-black text-white">{RM(result.netSalary)}</div>
            <div className="text-sm text-white/40 mt-1">
              {RM(result.gross)} → {RM(result.netSalary)} &nbsp;·&nbsp;
              {((result.netSalary / result.gross) * 100).toFixed(1)}% take-home
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-5 bg-[#0a0a0a]">

        {/* Deduction table */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white">{s.breakdown}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.grossRow,  val: result.gross,          cls: "text-white font-bold", prefix: "" },
                { label: s.epfRow,    val: result.epfEmployee,     cls: "text-red-300",         prefix: "−" },
                { label: s.socsoRow,  val: result.socsoEmployee,   cls: "text-red-300",         prefix: "−" },
                { label: s.eisRow,    val: result.eisEmployee,     cls: "text-red-300",         prefix: "−" },
                { label: s.pcbRow,    val: result.pcb,             cls: "text-red-300",         prefix: "−" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/70">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>
                    {row.prefix}{RM(row.val)}
                  </td>
                </tr>
              ))}
              <tr className="bg-white/5 font-bold">
                <td className="px-5 py-3 text-white/50 text-xs uppercase tracking-wider">{s.totalDed}</td>
                <td className="px-5 py-3 text-right text-red-400 font-mono">−{RM(result.totalDeductions)}</td>
              </tr>
              <tr className="bg-green-600/10">
                <td className="px-5 py-3 text-white font-bold">{s.netRow}</td>
                <td className="px-5 py-3 text-right text-green-300 font-mono font-black text-lg">{RM(result.netSalary)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Employer contributions */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-white/10 text-sm font-semibold text-white/60">{s.employerTitle}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.epfEmployer,   val: result.epfEmployer,   rate: result.gross <= 5000 ? "13%" : "12%" },
                { label: s.socsoEmployer, val: result.socsoEmployer, rate: "1.75%" },
                { label: s.eisEmployer,   val: result.eisEmployer,   rate: "0.2%" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/70">{row.label} <span className="text-white/30">({row.rate})</span></td>
                  <td className="px-5 py-3 text-right text-blue-300 font-mono font-semibold">{RM(row.val)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Annual summary */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white">{s.annualTitle}</div>
          <div className="grid grid-cols-2 gap-0 divide-x divide-white/10">
            {[
              { label: s.annualGross,    val: RM(result.gross * 12),  cls: "text-white" },
              { label: s.annualNet,      val: RM(result.annualNet),   cls: "text-green-300" },
              { label: s.annualTax,      val: RM(result.annualTax),   cls: "text-red-300" },
              { label: s.effectiveRate,  val: `${result.effectiveTaxRate.toFixed(2)}%`, cls: "text-yellow-300" },
            ].map(item => (
              <div key={item.label} className="px-5 py-4 border-b border-white/5">
                <div className="text-xs text-white/40 mb-1">{item.label}</div>
                <div className={`font-black text-lg ${item.cls}`}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax reliefs */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-white/10 text-sm font-semibold text-white/60">{s.reliefsApplied}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.personalRelief, val: 9000 },
                { label: s.epfRelief,      val: epfRelief },
                { label: s.spouseRelief,   val: spouseRelief, skip: !isMarried || spouseWorking },
                { label: s.childRelief,    val: childRelief,  skip: numChildren === 0 },
              ].filter(r => !r.skip).map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/70">{row.label}</td>
                  <td className="px-5 py-3 text-right text-blue-300 font-mono font-semibold">{RM(row.val)}</td>
                </tr>
              ))}
              <tr className="bg-white/5 text-xs">
                <td className="px-5 py-3 text-white/50 uppercase tracking-wider">{s.taxableIncome}</td>
                <td className="px-5 py-3 text-right text-white/70 font-mono">{RM(result.taxableIncome)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <GajiBersihArticle />
      </div>
    </div>
  );
}
