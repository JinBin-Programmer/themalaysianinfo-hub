"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import { calculateKWSP } from "../_lib/kwsp";
import KWSPArticle from "./KWSPArticle";

const RM = (n: number) => `RM ${Math.round(n).toLocaleString("en-MY")}`;

const SALARY_PRESETS = [2000, 3000, 4000, 5000, 7000, 10000];

export default function KWSPContent() {
  const { lang } = useLanguage();

  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(55);
  const [salary, setSalary] = useState(4000);
  const [balance] = useState(20000);
  const [customBalance, setCustomBalance] = useState("");
  const [dividend, setDividend] = useState(5.5);

  const effectiveBalance = parseFloat(customBalance.replace(/,/g, "")) || balance;
  const result = useMemo(
    () => calculateKWSP(currentAge, retirementAge, salary, effectiveBalance, dividend),
    [currentAge, retirementAge, salary, effectiveBalance, dividend],
  );

  const t = {
    bm: {
      title: "🏦 Kalkulator KWSP / EPF",
      subtitle: "Anggaran simpanan KWSP anda semasa bersara",
      currentAge: "Umur Sekarang",
      retirementAge: "Umur Bersara",
      salary: "Gaji Kasar Bulanan (RM)",
      balance: "Baki KWSP Semasa (RM)",
      dividend: "Dividen KWSP (%/tahun)",
      totalAtRetirement: "Anggaran Baki Semasa Bersara",
      monthlyPayout: "Anggaran Sara Hidup Bulanan",
      yr20: "20 tahun", yr25: "25 tahun",
      yearsLeft: "Tahun tinggal",
      breakdown: "Pecahan",
      empContrib: "Caruman Pekerja (11%)",
      erContrib: "Caruman Majikan (12-13%)",
      totalMonthly: "Jumlah Caruman Bulanan",
      totalContrib: "Jumlah Caruman",
      dividendEarned: "Anggaran Dividen",
      disclaimer: "* Anggaran berdasarkan dividen KWSP tahunan yang dipilih. Dividen sebenar bergantung pada prestasi KWSP. Semak penyata KWSP anda di i-Akaun.",
    },
    en: {
      title: "🏦 EPF / KWSP Calculator",
      subtitle: "Estimate your EPF savings at retirement",
      currentAge: "Current Age",
      retirementAge: "Retirement Age",
      salary: "Monthly Gross Salary (RM)",
      balance: "Current EPF Balance (RM)",
      dividend: "EPF Dividend (%/year)",
      totalAtRetirement: "Estimated Balance at Retirement",
      monthlyPayout: "Estimated Monthly Withdrawal",
      yr20: "over 20 years", yr25: "over 25 years",
      yearsLeft: "Years remaining",
      breakdown: "Breakdown",
      empContrib: "Employee Contribution (11%)",
      erContrib: "Employer Contribution (12-13%)",
      totalMonthly: "Total Monthly Contribution",
      totalContrib: "Total Contributed",
      dividendEarned: "Estimated Dividends",
      disclaimer: "* Estimates based on selected annual dividend rate. Actual EPF dividends vary. Check your statement at i-Akaun.",
    },
  };
  const s = t[lang];

  return (
    <div>
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Age sliders */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-white/50 uppercase tracking-wider">{s.currentAge}</label>
                  <span className="text-yellow-400 font-black">{currentAge}</span>
                </div>
                <input type="range" min={18} max={60} value={currentAge} onChange={e => setCurrentAge(+e.target.value)} className="w-full accent-yellow-400" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-white/50 uppercase tracking-wider">{s.retirementAge}</label>
                  <span className="text-yellow-400 font-black">{retirementAge}</span>
                </div>
                <input type="range" min={Math.max(currentAge + 1, 45)} max={70} value={retirementAge} onChange={e => setRetirementAge(+e.target.value)} className="w-full accent-yellow-400" />
              </div>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.salary}</label>
              <div className="flex flex-wrap gap-2">
                {SALARY_PRESETS.map(p => (
                  <button key={p} onClick={() => setSalary(p)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${salary === p ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Current balance */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.balance}</label>
              <input type="number" placeholder="20000" value={customBalance}
                onChange={e => setCustomBalance(e.target.value)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>

            {/* Dividend */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs text-white/50 uppercase tracking-wider">{s.dividend}</label>
                <span className="text-yellow-400 font-black">{dividend.toFixed(1)}%</span>
              </div>
              <input type="range" min={3} max={8} step={0.25} value={dividend} onChange={e => setDividend(parseFloat(e.target.value))} className="w-full accent-yellow-400" />
              <div className="flex justify-between text-xs text-white/30 mt-1"><span>3%</span><span>{lang === "bm" ? "Purata sejarah ~5.5%" : "Historical avg ~5.5%"}</span><span>8%</span></div>
            </div>
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-yellow-500/20 to-yellow-800/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-yellow-300/70 uppercase tracking-wider mb-1">{s.totalAtRetirement}</div>
            <div className="text-5xl font-black text-white">{RM(result.totalAtRetirement)}</div>
            <div className="text-sm text-white/40 mt-1">{result.yearsLeft} {s.yearsLeft} · {retirementAge} {lang === "bm" ? "tahun" : "yrs old"}</div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white/5 rounded-xl py-2">
                <div className="text-xs text-white/40">{s.monthlyPayout} ({s.yr20})</div>
                <div className="text-lg font-black text-green-300">{RM(result.monthlyPayout20yr)}</div>
              </div>
              <div className="bg-white/5 rounded-xl py-2">
                <div className="text-xs text-white/40">{s.monthlyPayout} ({s.yr25})</div>
                <div className="text-lg font-black text-green-300">{RM(result.monthlyPayout25yr)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white">{s.breakdown}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.empContrib,   val: RM(result.monthlyEmployee) + "/bulan", cls: "text-white" },
                { label: s.erContrib,    val: RM(result.monthlyEmployer) + "/bulan", cls: "text-blue-300" },
                { label: s.totalMonthly, val: RM(result.monthlyTotal) + "/bulan",    cls: "text-yellow-300 font-bold" },
                { label: s.totalContrib, val: RM(result.totalContributed),            cls: "text-white" },
                { label: s.dividendEarned, val: RM(result.dividendEarned),           cls: "text-green-300" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/60">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/20 text-center px-4">{s.disclaimer}</p>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <KWSPArticle />
      </div>
    </div>
  );
}
