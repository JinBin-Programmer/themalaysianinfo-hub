"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ExchangeData } from "../_lib/exchange";
import { CURRENCIES } from "../_lib/exchange";
import ExchangeArticle from "./ExchangeArticle";

function fmtRate(rate: number, code: string): string {
  if (code === "IDR" || code === "JPY") return rate.toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return rate.toLocaleString("en-MY", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

export default function ExchangeContent({ data }: { data: ExchangeData }) {
  const { lang } = useLanguage();
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("MYR");
  const [toCurrency, setToCurrency] = useState("USD");

  const t = {
    bm: {
      title: "💱 Kadar Tukaran Matawang",
      subtitle: "Kadar tukaran Ringgit Malaysia (MYR) terkini",
      updated: "Dikemas kini",
      rateTitle: "Kadar Semasa",
      per1myr: "1 MYR bersamaan",
      converter: "Penukar Matawang",
      from: "Dari", to: "Kepada", result: "Keputusan",
      note: "Kadar untuk rujukan sahaja. Kadar sebenar di bank mungkin berbeza.",
    },
    en: {
      title: "💱 Currency Exchange Rate",
      subtitle: "Latest Malaysian Ringgit (MYR) exchange rates",
      updated: "Updated",
      rateTitle: "Current Rates",
      per1myr: "1 MYR equals",
      converter: "Currency Converter",
      from: "From", to: "To", result: "Result",
      note: "Rates are for reference only. Actual bank rates may differ.",
    },
  };
  const s = t[lang];

  // Convert: amount fromCurrency → toCurrency (using MYR as pivot)
  // data.rates has rates as: 1 MYR = rates[X] X
  // So: 1 USD = 1/rates.USD MYR
  const getRateMYR = (code: string) => code === "MYR" ? 1 : (data.rates[code] ?? 1);

  const convert = () => {
    const amt = parseFloat(amount) || 0;
    if (fromCurrency === "MYR") {
      return amt * getRateMYR(toCurrency);
    } else if (toCurrency === "MYR") {
      return amt / getRateMYR(fromCurrency);
    } else {
      // fromCurrency → MYR → toCurrency
      const inMYR = amt / getRateMYR(fromCurrency);
      return inMYR * getRateMYR(toCurrency);
    }
  };

  const allCurrencies = [{ code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾" }, ...CURRENCIES];

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
        <p className="text-white/30 text-xs">{s.updated}: {data.date}</p>
      </div>

      {/* Rate cards */}
      <div className="space-y-3 animate-in delay-1">
        <h2 className="text-white/50 text-xs uppercase tracking-wider">{s.rateTitle}</h2>
        <div className="grid grid-cols-2 gap-3">
          {CURRENCIES.map(c => {
            const rate = data.rates[c.code];
            if (!rate) return null;
            const myrPerUnit = 1 / rate;
            return (
              <div key={c.code} className="card-glass rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{c.code}</div>
                    <div className="text-white/40 text-xs">{c.name}</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-black text-lg">
                  RM {myrPerUnit < 1 ? myrPerUnit.toFixed(4) : myrPerUnit.toFixed(2)}
                </div>
                <div className="text-white/30 text-xs">per 1 {c.code}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Converter */}
      <div className="card-glass rounded-2xl p-5 space-y-4 animate-in delay-2">
        <h2 className="text-white font-bold">{s.converter}</h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-white/50 block mb-1">{s.from}</label>
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400">
              {allCurrencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">{s.to}</label>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400">
              {allCurrencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
            </select>
          </div>
        </div>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white text-xl rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
          placeholder="100" />
        <div className="card-glass rounded-xl p-4 text-center">
          <div className="text-white/50 text-xs mb-1">{s.result}</div>
          <div className="text-yellow-400 font-black text-2xl">
            {fmtRate(convert(), toCurrency)} {toCurrency}
          </div>
          <div className="text-white/30 text-xs mt-1">{amount} {fromCurrency} = {fmtRate(convert(), toCurrency)} {toCurrency}</div>
        </div>
      </div>

      <p className="text-white/30 text-xs text-center">{s.note}</p>

      {/* Rich editorial content + FAQ */}
      <ExchangeArticle />
    </div>
  );
}
