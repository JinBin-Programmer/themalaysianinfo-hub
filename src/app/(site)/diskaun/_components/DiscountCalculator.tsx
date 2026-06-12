"use client";

import { useState, useMemo } from "react";
import { calculateDiscount, reverseDiscount, stackedDiscount } from "../_lib/diskaun";
import { useLanguage } from "@/contexts/LanguageContext";
import DiskaunArticle from "./DiskaunArticle";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

type Mode = "normal" | "reverse" | "stacked";
const DISC_PRESETS = [10, 15, 20, 25, 30, 50, 70];

export default function DiscountCalculator() {
  const [mode, setMode] = useState<Mode>("normal");
  const [price, setPrice] = useState(100);
  const [disc1, setDisc1] = useState(20);
  const [disc2, setDisc2] = useState(10);
  const [qty, setQty] = useState(1);
  const [addSST, setAddSST] = useState(false);
  const { lang } = useLanguage();

  const normalResult = useMemo(
    () => calculateDiscount(price, disc1, qty, addSST),
    [price, disc1, qty, addSST],
  );
  const reverseResult = useMemo(() => reverseDiscount(price, disc1), [price, disc1]);
  const stackedResult = useMemo(() => stackedDiscount(price, disc1, disc2), [price, disc1, disc2]);

  const t = {
    bm: {
      title: "🛍️ Kalkulator Diskaun & SST",
      subtitle: "Kira harga selepas diskaun, SST dan bahagi kuantiti",
      normalTab: "Diskaun Biasa", reverseTab: "Cari Harga Asal", stackedTab: "Diskaun Berganda",
      priceLabel: "Harga Asal (RM)", finalPriceLabel: "Harga Akhir (RM)",
      discLabel: "Diskaun (%)", disc2Label: "Diskaun ke-2 (%)",
      qty: "Kuantiti",
      sst: "Tambah SST 6%",
      finalPrice: "Harga Akhir",
      savings: "Jimat",
      total: "Jumlah",
      originalWas: "Harga asal",
      stackedFinal: "Harga selepas diskaun berganda",
      effectivePct: "Diskaun efektif",
    },
    en: {
      title: "🛍️ Discount & SST Calculator",
      subtitle: "Calculate sale price, SST, and split by quantity",
      normalTab: "Normal Discount", reverseTab: "Find Original Price", stackedTab: "Stacked Discount",
      priceLabel: "Original Price (RM)", finalPriceLabel: "Final Price (RM)",
      discLabel: "Discount (%)", disc2Label: "2nd Discount (%)",
      qty: "Quantity",
      sst: "Add SST 6%",
      finalPrice: "Final Price",
      savings: "You Save",
      total: "Total",
      originalWas: "Original price was",
      stackedFinal: "Price after stacked discounts",
      effectivePct: "Effective discount",
    },
  };
  const s = t[lang];

  const stackedSavings = price - stackedResult;
  const stackedEffective = (stackedSavings / price) * 100;

  return (
    <div>
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Mode tabs */}
          <div className="animate-in delay-1 flex gap-1.5">
            {(["normal","reverse","stacked"] as const).map(m => (
              <button key={m} onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-colors ${mode === m ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"}`}>
                {s[`${m}Tab` as "normalTab" | "reverseTab" | "stackedTab"]}
              </button>
            ))}
          </div>

          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Price input */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                {mode === "reverse" ? s.finalPriceLabel : s.priceLabel}
              </label>
              <input type="number" value={price} onChange={e => setPrice(parseFloat(e.target.value) || 0)}
                className="w-48 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>

            {/* Discount presets */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.discLabel}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {DISC_PRESETS.map(d => (
                  <button key={d} onClick={() => setDisc1(d)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${disc1 === d ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {d}%
                  </button>
                ))}
              </div>
              <input type="number" value={disc1} onChange={e => setDisc1(parseFloat(e.target.value) || 0)}
                className="w-24 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>

            {mode === "stacked" && (
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.disc2Label}</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[5,10,15,20].map(d => (
                    <button key={d} onClick={() => setDisc2(d)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${disc2 === d ? "bg-blue-500 border-blue-400 text-white font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      {d}%
                    </button>
                  ))}
                </div>
              </div>
            )}

            {mode === "normal" && (
              <div className="flex gap-4 items-center flex-wrap">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.qty}</label>
                  <div className="flex gap-2">
                    {[1,2,3,5,10].map(q => (
                      <button key={q} onClick={() => setQty(q)}
                        className={`w-10 h-10 rounded-xl border text-sm font-bold transition-colors ${qty === q ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer">
                    <input type="checkbox" checked={addSST} onChange={e => setAddSST(e.target.checked)} className="accent-yellow-400 w-4 h-4" />
                    {s.sst}
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-pink-600/30 to-red-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
            {mode === "normal" && (
              <>
                <div className="text-xs text-pink-300/70 uppercase tracking-wider mb-1">{s.finalPrice}</div>
                <div className="text-5xl font-black text-white">{RM(normalResult.finalPrice)}</div>
                <div className="text-sm text-white/40 mt-1">{s.savings}: <span className="text-green-300 font-bold">{RM(normalResult.totalSavings)}</span></div>
                {qty > 1 && <div className="text-sm text-white/40">{s.total} ×{qty}: <span className="text-yellow-300 font-bold">{RM(normalResult.totalFinal)}</span></div>}
              </>
            )}
            {mode === "reverse" && (
              <>
                <div className="text-xs text-pink-300/70 uppercase tracking-wider mb-1">{s.originalWas}</div>
                <div className="text-5xl font-black text-white">{RM(reverseResult)}</div>
                <div className="text-sm text-white/40 mt-1">{lang === "bm" ? "Selepas" : "After"} {disc1}% → {RM(price)}</div>
              </>
            )}
            {mode === "stacked" && (
              <>
                <div className="text-xs text-pink-300/70 uppercase tracking-wider mb-1">{s.stackedFinal}</div>
                <div className="text-5xl font-black text-white">{RM(stackedResult)}</div>
                <div className="text-sm text-white/40 mt-1">
                  {s.effectivePct}: <span className="text-green-300 font-bold">{stackedEffective.toFixed(1)}%</span>
                  {" "}· {s.savings}: <span className="text-green-300 font-bold">{RM(stackedSavings)}</span>
                </div>
                <div className="text-xs text-white/30 mt-1">{RM(price)} → {disc1}% → {disc2}% → {RM(stackedResult)}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content below widget */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <DiskaunArticle />
      </div>
    </div>
  );
}
