"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import PinjamanRumahArticle from "./PinjamanRumahArticle";

function RM(n: number) { return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function calcMonthly(principal: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcStampDuty(price: number): number {
  let duty = 0;
  if (price <= 100000) return price * 0.01;
  duty += 100000 * 0.01;
  if (price <= 500000) return duty + (price - 100000) * 0.02;
  duty += 400000 * 0.02;
  if (price <= 1000000) return duty + (price - 500000) * 0.03;
  duty += 500000 * 0.03;
  return duty + (price - 1000000) * 0.04;
}

function calcLegalFee(loanAmount: number): number {
  if (loanAmount <= 500000) return loanAmount * 0.01;
  return 5000 + (loanAmount - 500000) * 0.008;
}

export default function PinjamanRumahContent() {
  const { lang } = useLanguage();
  const [propertyPrice, setPropertyPrice] = useState("");
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [rate, setRate] = useState("4.5");
  const [tenure, setTenure] = useState(30);
  const [result, setResult] = useState<{
    loanAmount: number; monthly: number; totalPayment: number; totalInterest: number;
    stampDuty: number; legalFee: number; downPayment: number;
  } | null>(null);

  const t = {
    bm: {
      title: "🏠 Kalkulator Pinjaman Rumah",
      subtitle: "Kira ansuran bulanan, duti setem & kos keseluruhan pembelian rumah",
      priceLabel: "Harga Hartanah (RM)", downLabel: "Bayaran Pendahuluan",
      rateLabel: "Kadar Faedah Tahunan (%)", tenureLabel: "Tempoh Pinjaman (Tahun)",
      calcBtn: "Kira Sekarang",
      loanAmt: "Jumlah Pinjaman", monthly: "Ansuran Bulanan", totalPay: "Jumlah Bayaran",
      totalInt: "Jumlah Faedah", stampDuty: "Duti Setem (MOT)", legalFee: "Yuran Guaman (anggaran)",
      downPay: "Bayaran Pendahuluan", upfrontCost: "Kos Pendahuluan",
      disclaimer: "Anggaran sahaja. Kadar faedah, duti setem dan yuran guaman sebenar mungkin berbeza.",
    },
    en: {
      title: "🏠 Housing Loan Calculator",
      subtitle: "Calculate monthly installment, stamp duty & total purchase costs",
      priceLabel: "Property Price (RM)", downLabel: "Down Payment",
      rateLabel: "Annual Interest Rate (%)", tenureLabel: "Loan Tenure (Years)",
      calcBtn: "Calculate Now",
      loanAmt: "Loan Amount", monthly: "Monthly Installment", totalPay: "Total Payment",
      totalInt: "Total Interest", stampDuty: "Stamp Duty (MOT)", legalFee: "Legal Fee (estimate)",
      downPay: "Down Payment", upfrontCost: "Upfront Costs",
      disclaimer: "Estimates only. Actual interest rate, stamp duty and legal fees may vary.",
    },
  };
  const s = t[lang];

  const calculate = () => {
    const price = parseFloat(propertyPrice.replace(/,/g, "")) || 0;
    if (price <= 0) return;
    const down = price * downPaymentPct / 100;
    const loan = price - down;
    const r = parseFloat(rate) || 4.5;
    const monthly = calcMonthly(loan, r, tenure);
    const totalPayment = monthly * tenure * 12;
    const totalInterest = totalPayment - loan;
    const stampDuty = calcStampDuty(price);
    const legalFee = calcLegalFee(loan);
    setResult({ loanAmount: loan, monthly, totalPayment, totalInterest, stampDuty, legalFee, downPayment: down });
  };

  const tenureOptions = [10, 15, 20, 25, 30, 35];

  return (
    <div>
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
          <div className="text-center space-y-2 animate-in">
            <h1 className="text-3xl font-black text-white">{s.title}</h1>
            <p className="text-white/50 text-sm">{s.subtitle}</p>
          </div>

          <div className="card-glass rounded-2xl p-5 space-y-4 animate-in delay-1">
            {/* Property price */}
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider block mb-1">{s.priceLabel}</label>
              <div className="flex items-center gap-2">
                <span className="text-white/40 font-bold">RM</span>
                <input type="number" value={propertyPrice} onChange={e => setPropertyPrice(e.target.value)}
                  placeholder="500000" className="flex-1 bg-white/10 border border-white/20 text-white text-lg rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400" />
              </div>
            </div>

            {/* Down payment */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-white/50 uppercase tracking-wider">{s.downLabel}</label>
                <span className="text-yellow-400 font-bold text-sm">{downPaymentPct}%</span>
              </div>
              <div className="flex gap-2">
                {[10, 20, 30].map(p => (
                  <button key={p} onClick={() => setDownPaymentPct(p)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-colors ${downPaymentPct===p?"bg-yellow-500 border-yellow-400 text-black":"bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                    {p}%
                  </button>
                ))}
              </div>
            </div>

            {/* Rate & tenure */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider block mb-1">{s.rateLabel}</label>
                <input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider block mb-1">{s.tenureLabel}</label>
                <select value={tenure} onChange={e => setTenure(parseInt(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400">
                  {tenureOptions.map(y => <option key={y} value={y}>{y} {lang==="bm"?"tahun":"years"}</option>)}
                </select>
              </div>
            </div>

            <button onClick={calculate}
              className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
              {s.calcBtn}
            </button>
          </div>

          {result && (
            <div className="space-y-3 animate-in">
              {/* Monthly highlight */}
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="text-white/40 text-sm mb-1">{s.monthly}</div>
                <div className="text-yellow-400 font-black text-4xl">RM {RM(result.monthly)}</div>
                <div className="text-white/30 text-xs mt-1">{tenure} {lang==="bm"?"tahun":"years"} · {rate}% p.a.</div>
              </div>

              {/* Loan breakdown */}
              <div className="card-glass rounded-2xl p-5 space-y-3">
                {[
                  { label: s.loanAmt, value: `RM ${RM(result.loanAmount)}`, color: "text-white" },
                  { label: s.totalPay, value: `RM ${RM(result.totalPayment)}`, color: "text-white" },
                  { label: s.totalInt, value: `RM ${RM(result.totalInterest)}`, color: "text-red-400" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-white/50">{row.label}</span>
                    <span className={`font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Upfront costs */}
              <div className="card-glass rounded-2xl p-5 space-y-3">
                <div className="text-xs text-white/40 uppercase tracking-wider">{s.upfrontCost}</div>
                {[
                  { label: s.downPay, value: `RM ${RM(result.downPayment)}`, color: "text-white" },
                  { label: s.stampDuty, value: `RM ${RM(result.stampDuty)}`, color: "text-orange-400" },
                  { label: s.legalFee, value: `RM ${RM(result.legalFee)}`, color: "text-orange-400" },
                  { label: "Total", value: `RM ${RM(result.downPayment + result.stampDuty + result.legalFee)}`, color: "text-yellow-400" },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between text-sm ${i===3?"border-t border-white/10 pt-3":""}`}>
                    <span className="text-white/50">{row.label}</span>
                    <span className={`font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stamp duty table */}
          <div className="card-glass rounded-2xl p-5 animate-in delay-2">
            <h2 className="text-white font-bold text-sm mb-3">{lang==="bm"?"Kadar Duti Setem (MOT)":"Stamp Duty Rates (MOT)"}</h2>
            <div className="space-y-1 text-sm">
              {[["RM 0 – RM 100,000","1%"],["RM 100,001 – RM 500,000","2%"],["RM 500,001 – RM 1,000,000","3%"],["Melebihi RM 1,000,000","4%"]].map(([r,rate],i) => (
                <div key={i} className="flex justify-between"><span className="text-white/50">{r}</span><span className="text-yellow-400 font-bold">{rate}</span></div>
              ))}
            </div>
          </div>

          <p className="text-white/30 text-xs text-center">{s.disclaimer}</p>
        </div>
      </div>

      {/* Content below hero */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <PinjamanRumahArticle />

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />
      </div>
    </div>
  );
}
