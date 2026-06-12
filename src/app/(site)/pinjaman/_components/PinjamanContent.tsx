"use client";

import { useState, useMemo } from "react";
import { calculateReducingBalance, calculateFlatRate } from "../_lib/loan";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import PinjamanArticle from "./PinjamanArticle";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

type LoanType = "home" | "car" | "personal";

const PRESETS: Record<LoanType, number[]> = {
  home: [200000, 350000, 500000, 700000, 1000000],
  car: [50000, 80000, 100000, 150000, 200000],
  personal: [10000, 20000, 30000, 50000, 100000],
};
const TENURES: Record<LoanType, number[]> = {
  home: [10, 15, 20, 25, 30, 35],
  car: [5, 7, 9],
  personal: [1, 2, 3, 5, 7, 10],
};
const DEFAULTS: Record<LoanType, { amount: number; rate: number; tenure: number }> = {
  home:     { amount: 350000, rate: 4.5, tenure: 30 },
  car:      { amount: 80000,  rate: 2.7, tenure: 7  },
  personal: { amount: 20000,  rate: 10,  tenure: 5  },
};
const RATE_RANGE: Record<LoanType, [number, number]> = {
  home:     [3,   7],
  car:      [1.5, 5],
  personal: [5,   18],
};

export default function PinjamanContent() {
  const [loanType, setLoanType] = useState<LoanType>("home");
  const [amount, setAmount] = useState(350000);
  const [customAmount, setCustomAmount] = useState("");
  const [rate, setRate] = useState(4.5);
  const [tenure, setTenure] = useState(30);
  const { lang } = useLanguage();

  const effectiveAmount = parseFloat(customAmount) || amount;

  const result = useMemo(() => {
    if (loanType === "car") return calculateFlatRate(effectiveAmount, rate, tenure);
    return calculateReducingBalance(effectiveAmount, rate, tenure);
  }, [loanType, effectiveAmount, rate, tenure]);

  const handleLoanType = (t: LoanType) => {
    setLoanType(t);
    setCustomAmount("");
    const d = DEFAULTS[t];
    setAmount(d.amount);
    setRate(d.rate);
    setTenure(d.tenure);
  };

  const t = {
    bm: {
      title: "🏦 Kalkulator Pinjaman Malaysia",
      subtitle: "Kira ansuran bulanan pinjaman rumah, kereta & peribadi",
      home: "Rumah", car: "Kereta", personal: "Peribadi",
      amount: "Jumlah Pinjaman (RM)",
      customPlaceholder: "Masukkan jumlah lain",
      rate: "Kadar Faedah (%/tahun)",
      flatNote: "Kadar rata (flat rate)", reducingNote: "Baki berkurangan",
      tenure: "Tempoh Pinjaman",
      years: "tahun",
      monthly: "Ansuran Bulanan",
      totalPayment: "Jumlah Bayaran", totalInterest: "Jumlah Faedah",
      principal: "Prinsipal", interestRatio: "Nisbah Faedah",
      disclaimer: "* Anggaran sahaja. Semak dengan bank untuk kadar dan terma sebenar.",
    },
    en: {
      title: "🏦 Malaysia Loan Calculator",
      subtitle: "Calculate monthly installments for home, car & personal loans",
      home: "Home", car: "Car", personal: "Personal",
      amount: "Loan Amount (RM)",
      customPlaceholder: "Enter other amount",
      rate: "Interest Rate (%/year)",
      flatNote: "Flat rate", reducingNote: "Reducing balance",
      tenure: "Loan Tenure",
      years: "years",
      monthly: "Monthly Installment",
      totalPayment: "Total Payment", totalInterest: "Total Interest",
      principal: "Principal", interestRatio: "Interest Ratio",
      disclaimer: "* Estimates only. Verify actual rates and terms with your bank.",
    },
  };
  const s = t[lang];
  const [rateMin, rateMax] = RATE_RANGE[loanType];

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Loan type */}
          <div className="animate-in delay-1 flex gap-2">
            {(["home", "car", "personal"] as const).map(type => (
              <button key={type} onClick={() => handleLoanType(type)}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-colors ${loanType === type ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                {s[type]}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Amount */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.amount}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {PRESETS[loanType].map(p => (
                  <button key={p} onClick={() => { setAmount(p); setCustomAmount(""); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${amount === p && !customAmount ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p.toLocaleString()}
                  </button>
                ))}
              </div>
              <input type="number" placeholder={s.customPlaceholder} value={customAmount}
                onChange={e => setCustomAmount(e.target.value)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>

            {/* Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-white/50 uppercase tracking-wider">{s.rate}</label>
                <span className="text-yellow-400 font-black text-lg">{rate.toFixed(1)}%</span>
              </div>
              <input type="range" min={rateMin} max={rateMax} step={0.1} value={rate}
                onChange={e => setRate(parseFloat(e.target.value))}
                className="w-full accent-yellow-400" />
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>{rateMin}%</span>
                <span className="text-white/40">{loanType === "car" ? s.flatNote : s.reducingNote}</span>
                <span>{rateMax}%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.tenure}</label>
              <div className="flex gap-2 flex-wrap">
                {TENURES[loanType].map(y => (
                  <button key={y} onClick={() => setTenure(y)}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${tenure === y ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {y} {s.years}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-blue-600/30 to-blue-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-blue-300/70 uppercase tracking-wider mb-1">{s.monthly}</div>
            <div className="text-5xl font-black text-white">{RM(result.monthlyPayment)}</div>
            <div className="text-sm text-white/40 mt-1">
              {tenure} {s.years} · {RM(effectiveAmount)} @ {rate.toFixed(1)}%
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
                { label: s.principal,      val: RM(result.principal),     cls: "text-white font-bold" },
                { label: s.totalInterest,  val: RM(result.totalInterest), cls: "text-red-300" },
                { label: s.totalPayment,   val: RM(result.totalPayment),  cls: "text-yellow-300 font-bold" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/70">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
              <tr className="hover:bg-white/5">
                <td className="px-5 py-3 text-white/70">{s.interestRatio}</td>
                <td className="px-5 py-3 text-right font-mono text-orange-300 font-semibold">
                  {result.interestToLoanRatio.toFixed(1)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual ratio bar */}
        <div className="card-glass rounded-2xl p-5">
          <div className="flex text-xs text-white/50 justify-between mb-2">
            <span>{s.principal}</span>
            <span>{s.totalInterest}</span>
          </div>
          <div className="h-4 rounded-full bg-white/10 overflow-hidden flex">
            <div className="bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${(result.principal / result.totalPayment) * 100}%` }} />
            <div className="bg-red-400 h-full flex-1" />
          </div>
          <div className="flex text-xs text-white/40 justify-between mt-1">
            <span>{((result.principal / result.totalPayment) * 100).toFixed(1)}%</span>
            <span>{((result.totalInterest / result.totalPayment) * 100).toFixed(1)}%</span>
          </div>
        </div>

        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <PinjamanArticle />
      </div>
    </div>
  );
}
