"use client";

import { useState, useMemo } from "react";
import { calculatePTPTN, suggestedPayment } from "../_lib/ptptn";
import { useLanguage } from "@/contexts/LanguageContext";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const LOAN_PRESETS = [10000, 15000, 20000, 30000, 40000, 50000];

export default function PTPTNCalculator() {
  const [loanAmount, setLoanAmount] = useState(20000);
  const [customLoan, setCustomLoan] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(3000);
  const [customPayment, setCustomPayment] = useState("");
  const { lang } = useLanguage();

  const effectiveLoan = parseFloat(customLoan) || loanAmount;
  const suggested = useMemo(() => suggestedPayment(monthlyIncome, effectiveLoan), [monthlyIncome, effectiveLoan]);
  const monthlyPayment = parseFloat(customPayment) || suggested;
  const result = useMemo(() => calculatePTPTN(effectiveLoan, monthlyPayment), [effectiveLoan, monthlyPayment]);

  const t = {
    bm: {
      title: "🎓 Kalkulator PTPTN",
      subtitle: "Kira bayaran balik pinjaman PTPTN anda",
      loanAmount: "Jumlah Pinjaman PTPTN (RM)",
      income: "Gaji Bulanan (untuk cadangan bayaran)",
      customPayment: "Bayaran bulanan (RM)",
      suggested: "Cadangan",
      customLoanPh: "Masukkan jumlah pinjaman",
      monthlyPayment: "Bayaran Bulanan",
      totalToPay: "Jumlah Bayaran",
      serviceCharge: "Caj Perkhidmatan (1%)",
      yearsToPayOff: "Tempoh Bayaran",
      years: "tahun",
      months: "bulan",
      disclaimer: "* PTPTN mengenakan caj perkhidmatan 1% setahun (bukan faedah/riba) atas baki tertunggak. Anggaran sahaja.",
      payNow: "Bayar PTPTN di: www.ptptn.gov.my",
      incomeBrackets: "Pendapatan & Cadangan Bayaran",
    },
    en: {
      title: "🎓 PTPTN Repayment Calculator",
      subtitle: "Calculate your PTPTN study loan repayment",
      loanAmount: "PTPTN Loan Amount (RM)",
      income: "Monthly Salary (for payment suggestion)",
      customPayment: "Monthly payment (RM)",
      suggested: "Suggested",
      customLoanPh: "Enter loan amount",
      monthlyPayment: "Monthly Payment",
      totalToPay: "Total to Pay",
      serviceCharge: "Service Charge (1%/year)",
      yearsToPayOff: "Repayment Period",
      years: "years",
      months: "months",
      disclaimer: "* PTPTN charges 1% annual service charge (not interest/riba) on outstanding balance. Estimate only.",
      payNow: "Pay PTPTN at: www.ptptn.gov.my",
      incomeBrackets: "Income & Suggested Payments",
    },
  };
  const s = t[lang];

  const INCOME_PRESETS = [1500, 2000, 3000, 4000, 5000, 7000];

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Inputs */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Loan amount */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.loanAmount}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {LOAN_PRESETS.map(p => (
                  <button key={p} onClick={() => { setLoanAmount(p); setCustomLoan(""); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${loanAmount === p && !customLoan ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p.toLocaleString()}
                  </button>
                ))}
              </div>
              <input type="number" placeholder={s.customLoanPh} value={customLoan}
                onChange={e => setCustomLoan(e.target.value)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>

            {/* Income for suggestion */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.income}</label>
              <div className="flex flex-wrap gap-2">
                {INCOME_PRESETS.map(p => (
                  <button key={p} onClick={() => setMonthlyIncome(p)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${monthlyIncome === p ? "bg-blue-600 border-blue-500 text-white font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom payment override */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                {s.customPayment} <span className="text-yellow-400">({s.suggested}: RM {suggested})</span>
              </label>
              <input type="number" placeholder={`${suggested}`} value={customPayment}
                onChange={e => setCustomPayment(e.target.value)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>
          </div>

          {/* Result banner */}
          <div className="animate-in delay-2 bg-gradient-to-br from-indigo-600/30 to-indigo-900/20 border border-indigo-500/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-indigo-300/70 uppercase tracking-wider mb-1">{s.totalToPay}</div>
            <div className="text-5xl font-black text-white">{RM(result.totalToPay)}</div>
            <div className="text-sm text-white/40 mt-1">
              {RM(monthlyPayment)}/{lang === "bm" ? "bulan" : "mo"} · {result.years} {s.years}
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-5 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: lang === "bm" ? "Jumlah pinjaman"   : "Loan amount",          val: RM(result.loanAmount),          cls: "text-white font-bold" },
                { label: s.serviceCharge,                                                val: RM(result.totalServiceCharge),  cls: "text-red-300" },
                { label: s.totalToPay,                                                   val: RM(result.totalToPay),          cls: "text-yellow-300 font-bold" },
                { label: s.monthlyPayment,                                               val: RM(monthlyPayment),             cls: "text-white" },
                { label: s.yearsToPayOff,  val: `${result.years} ${s.years} (${result.months} ${s.months})`, cls: "text-blue-300" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/60">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-glass rounded-2xl p-4 text-center">
          <p className="text-sm text-blue-300/70">🎓 {s.payNow}</p>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>
      </div>
    </div>
  );
}
