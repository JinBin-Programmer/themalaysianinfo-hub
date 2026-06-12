"use client";

import { useState, useMemo } from "react";
import { calculateIncomeZakat, calculateSavingsZakat } from "../_lib/zakat";
import ZakatArticle from "./ZakatArticle";
import AdBanner from "@/components/AdBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

type ZakatTab = "income" | "savings";

const INCOME_PRESETS = [3000, 4000, 5000, 7000, 10000, 15000];
const SAVINGS_PRESETS = [10000, 25000, 50000, 100000, 200000];

export default function ZakatContent() {
  const [tab, setTab] = useState<ZakatTab>("income");
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [customIncome, setCustomIncome] = useState("");
  const [dependents, setDependents] = useState(0);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [savings, setSavings] = useState(30000);
  const [customSavings, setCustomSavings] = useState("");
  const { lang } = useLanguage();

  const effectiveIncome = parseFloat(customIncome) || monthlyIncome;
  const effectiveSavings = parseFloat(customSavings) || savings;

  const incomeResult = useMemo(
    () => calculateIncomeZakat(effectiveIncome, dependents, otherDeductions),
    [effectiveIncome, dependents, otherDeductions],
  );
  const savingsResult = useMemo(
    () => calculateSavingsZakat(effectiveSavings),
    [effectiveSavings],
  );

  const t = {
    bm: {
      title: "🌙 Kalkulator Zakat Malaysia",
      subtitle: "Kira zakat pendapatan dan simpanan anda",
      incomeTab: "Zakat Pendapatan", savingsTab: "Zakat Simpanan",
      monthlyIncome: "Gaji Kasar Sebulan (RM)",
      savingsLabel: "Jumlah Simpanan (RM)",
      customPlaceholder: "Masukkan jumlah lain",
      dependents: "Bilangan Tanggungan (isteri/suami + anak)",
      otherDed: "Potongan lain (RM/bulan)",
      zakatDue: "Zakat Wajib Dibayar",
      monthlyZakat: "bulan",
      notEligible: "Tidak Wajib Zakat",
      eligible: "Wajib Zakat ✓",
      breakdown: "Pecahan Pengiraan",
      grossAnnual: "Pendapatan Kasar Setahun",
      epfDed: "Tolak EPF (11%)",
      necessities: "Tolak Tanggungan & Keperluan",
      netEligible: "Pendapatan Bersih Layak Zakat",
      nisab: "Nisab (had minimum)",
      rate: "Kadar Zakat",
      savingsRow: "Jumlah Simpanan",
      payZakat: "Bayar zakat di laman web Majlis Agama Islam Negeri anda",
      disclaimer: "* Anggaran. Nisab RM22,000/tahun (semak dengan majlis agama negeri anda). Kadar zakat 2.5%.",
    },
    en: {
      title: "🌙 Malaysia Zakat Calculator",
      subtitle: "Calculate your income and savings zakat obligation",
      incomeTab: "Income Zakat", savingsTab: "Savings Zakat",
      monthlyIncome: "Monthly Gross Salary (RM)",
      savingsLabel: "Total Savings (RM)",
      customPlaceholder: "Enter other amount",
      dependents: "Number of Dependents (spouse + children)",
      otherDed: "Other deductions (RM/month)",
      zakatDue: "Zakat Due",
      monthlyZakat: "month",
      notEligible: "Not Obligatory",
      eligible: "Zakat Obligatory ✓",
      breakdown: "Calculation Breakdown",
      grossAnnual: "Annual Gross Income",
      epfDed: "Less EPF (11%)",
      necessities: "Less Necessities & Dependents",
      netEligible: "Net Eligible Zakat Income",
      nisab: "Nisab (minimum threshold)",
      rate: "Zakat Rate",
      savingsRow: "Total Savings",
      payZakat: "Pay your zakat at your state Islamic Council website",
      disclaimer: "* Estimate. Nisab RM22,000/year (verify with your state religious council). Zakat rate 2.5%.",
    },
  };
  const s = t[lang];

  const isEligible = tab === "income" ? incomeResult.isEligible : savingsResult.isEligible;
  const zakatAmount = tab === "income" ? incomeResult.zakatAmount : savingsResult.zakatAmount;

  return (
    <div>
      <div className="hero-bg" style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #0f2027 100%)" }}>
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Tabs */}
          <div className="animate-in delay-1 flex gap-2">
            {(["income", "savings"] as const).map(tp => (
              <button key={tp} onClick={() => setTab(tp)}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-colors ${tab === tp ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                {tp === "income" ? s.incomeTab : s.savingsTab}
              </button>
            ))}
          </div>

          {/* Income inputs */}
          {tab === "income" && (
            <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.monthlyIncome}</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {INCOME_PRESETS.map(p => (
                    <button key={p} onClick={() => { setMonthlyIncome(p); setCustomIncome(""); }}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${monthlyIncome === p && !customIncome ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      RM {p.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input type="number" placeholder={s.customPlaceholder} value={customIncome}
                  onChange={e => setCustomIncome(e.target.value)}
                  className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.dependents}</label>
                <div className="flex gap-2 flex-wrap">
                  {[0, 1, 2, 3, 4, 5].map(n => (
                    <button key={n} onClick={() => setDependents(n)}
                      className={`w-10 h-10 rounded-xl border text-sm font-bold transition-colors ${dependents === n ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      {n === 5 ? "5+" : n}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.otherDed}</label>
                <input type="number" placeholder="0" value={otherDeductions || ""}
                  onChange={e => setOtherDeductions(parseFloat(e.target.value) || 0)}
                  className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
              </div>
            </div>
          )}

          {/* Savings inputs */}
          {tab === "savings" && (
            <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.savingsLabel}</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {SAVINGS_PRESETS.map(p => (
                    <button key={p} onClick={() => { setSavings(p); setCustomSavings(""); }}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${savings === p && !customSavings ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      RM {p.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input type="number" placeholder={s.customPlaceholder} value={customSavings}
                  onChange={e => setCustomSavings(e.target.value)}
                  className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
              </div>
            </div>
          )}

          {/* Result banner */}
          <div className={`animate-in delay-2 rounded-2xl p-6 text-center border ${isEligible ? "bg-gradient-to-br from-green-600/30 to-green-900/20 border-green-500/30" : "bg-white/5 border-white/10"}`}>
            <div className={`text-xs uppercase tracking-wider mb-1 ${isEligible ? "text-green-300/70" : "text-white/40"}`}>
              {isEligible ? s.eligible : s.notEligible}
            </div>
            {isEligible ? (
              <>
                <div className="text-5xl font-black text-white">{RM(zakatAmount)}</div>
                <div className="text-sm text-white/40 mt-1">{s.zakatDue} · 2.5%</div>
                {tab === "income" && (
                  <div className="mt-2 text-yellow-300 font-semibold text-sm">
                    {RM(incomeResult.monthlyZakat)} / {s.monthlyZakat}
                  </div>
                )}
              </>
            ) : (
              <div className="text-white/40 text-base mt-2">
                {lang === "bm" ? "Pendapatan / simpanan di bawah nisab RM22,000" : "Below nisab threshold of RM22,000"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-5 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white">{s.breakdown}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {tab === "income" ? (
                <>
                  {[
                    { label: s.grossAnnual,  val: RM(incomeResult.grossAnnual),           cls: "text-white font-bold" },
                    { label: s.epfDed,        val: `−${RM(incomeResult.epfDeduction)}`,    cls: "text-red-300" },
                    { label: s.necessities,   val: `−${RM(incomeResult.necessitiesDeduction)}`, cls: "text-red-300" },
                    { label: s.netEligible,   val: RM(incomeResult.netEligible),           cls: "text-yellow-300 font-bold" },
                    { label: s.nisab,         val: RM(incomeResult.nisab),                 cls: "text-white/40" },
                    { label: s.rate,          val: "2.5%",                                 cls: "text-white/40" },
                  ].map(row => (
                    <tr key={row.label} className="hover:bg-white/5">
                      <td className="px-5 py-3 text-white/70">{row.label}</td>
                      <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {[
                    { label: s.savingsRow, val: RM(savingsResult.savings), cls: "text-white font-bold" },
                    { label: s.nisab,      val: RM(savingsResult.nisab),   cls: "text-white/40" },
                    { label: s.rate,       val: "2.5%",                    cls: "text-white/40" },
                  ].map(row => (
                    <tr key={row.label} className="hover:bg-white/5">
                      <td className="px-5 py-3 text-white/70">{row.label}</td>
                      <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                    </tr>
                  ))}
                </>
              )}
              <tr className="bg-green-600/10">
                <td className="px-5 py-3 text-white font-bold">{s.zakatDue}</td>
                <td className="px-5 py-3 text-right text-green-300 font-mono font-black text-lg">
                  {RM(zakatAmount)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-glass rounded-2xl p-4 text-center">
          <p className="text-sm text-yellow-300/70">🕌 {s.payZakat}</p>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <ZakatArticle />
      </div>
    </div>
  );
}
