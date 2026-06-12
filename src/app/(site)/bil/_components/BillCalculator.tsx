"use client";

import { useState, useMemo } from "react";
import { calculateBill } from "../_lib/bil";
import { useLanguage } from "@/contexts/LanguageContext";

const RM = (n: number) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const TIP_PRESETS = [0, 5, 10, 15, 20];
const PEOPLE_PRESETS = [1, 2, 3, 4, 5, 6, 8, 10];

export default function BillCalculator() {
  const [subtotal, setSubtotal] = useState(100);
  const [customBill, setCustomBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(4);
  const [addSST, setAddSST] = useState(false);
  const [addSvc, setAddSvc] = useState(false);
  const { lang } = useLanguage();

  const effectiveBill = parseFloat(customBill) || subtotal;
  const result = useMemo(
    () => calculateBill(effectiveBill, tip, people, addSST, addSvc),
    [effectiveBill, tip, people, addSST, addSvc],
  );

  const BILL_PRESETS = [50, 80, 100, 150, 200, 300];

  const t = {
    bm: {
      title: "🍽️ Kira Bil & Bahagi",
      subtitle: "Kira tip dan bahagi bil restoran dengan mudah",
      billLabel: "Jumlah Bil (RM)",
      tipLabel: "Tip (%)",
      peopleLabel: "Bilangan Orang",
      sst: "SST 6%",
      serviceCharge: "Service Charge 10%",
      perPerson: "Setiap Orang",
      perPersonRounded: "Setiap Orang (Bulat)",
      totalBill: "Jumlah Keseluruhan",
      breakdown: "Pecahan",
      subtotal: "Bil Makanan",
      tipAmount: "Tip",
      sstAmount: "SST (6%)",
      svcAmount: "Caj Servis (10%)",
      share: (n: number) => `Kongsi: RM${n.toFixed(2)} setiap orang`,
    },
    en: {
      title: "🍽️ Bill Split & Tip Calculator",
      subtitle: "Calculate tip and split restaurant bills easily",
      billLabel: "Bill Amount (RM)",
      tipLabel: "Tip (%)",
      peopleLabel: "Number of People",
      sst: "SST 6%",
      serviceCharge: "Service Charge 10%",
      perPerson: "Per Person",
      perPersonRounded: "Per Person (Rounded)",
      totalBill: "Total Bill",
      breakdown: "Breakdown",
      subtotal: "Food Bill",
      tipAmount: "Tip",
      sstAmount: "SST (6%)",
      svcAmount: "Service Charge (10%)",
      share: (n: number) => `Share: RM${n.toFixed(2)} each`,
    },
  };
  const s = t[lang];

  const handleShare = () => {
    const text = `🍽️ Bil: ${RM(result.totalBill)}\n👥 ${people} orang\n💰 ${s.share(result.perPerson)}`;
    if (navigator.share) navigator.share({ text });
    else navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-5">
            {/* Bill */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.billLabel}</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {BILL_PRESETS.map(p => (
                  <button key={p} onClick={() => { setSubtotal(p); setCustomBill(""); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${subtotal === p && !customBill ? "bg-yellow-500 border-yellow-400 text-black font-bold" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    RM {p}
                  </button>
                ))}
              </div>
              <input type="number" placeholder={lang === "bm" ? "Jumlah lain" : "Other amount"} value={customBill}
                onChange={e => setCustomBill(e.target.value)}
                className="w-40 bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/30" />
            </div>

            {/* Tip */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.tipLabel}</label>
              <div className="flex gap-2 flex-wrap">
                {TIP_PRESETS.map(t => (
                  <button key={t} onClick={() => setTip(t)}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${tip === t ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {t}%
                  </button>
                ))}
              </div>
            </div>

            {/* People */}
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.peopleLabel}</label>
              <div className="flex gap-2 flex-wrap">
                {PEOPLE_PRESETS.map(p => (
                  <button key={p} onClick={() => setPeople(p)}
                    className={`w-12 h-10 rounded-xl border text-sm font-bold transition-colors ${people === p ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer">
                <input type="checkbox" checked={addSST} onChange={e => setAddSST(e.target.checked)} className="accent-yellow-400 w-4 h-4" />
                {s.sst}
              </label>
              <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer">
                <input type="checkbox" checked={addSvc} onChange={e => setAddSvc(e.target.checked)} className="accent-yellow-400 w-4 h-4" />
                {s.serviceCharge}
              </label>
            </div>
          </div>

          {/* Result */}
          <div className="animate-in delay-2 bg-gradient-to-br from-orange-600/30 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 text-center">
            <div className="text-xs text-orange-300/70 uppercase tracking-wider mb-1">{s.perPerson}</div>
            <div className="text-6xl font-black text-white">{RM(result.perPerson)}</div>
            <div className="text-sm text-white/40 mt-1">{s.totalBill}: {RM(result.totalBill)} ÷ {people}</div>
            <button onClick={handleShare}
              className="mt-4 px-6 py-2 bg-green-600/30 border border-green-500/40 rounded-xl text-green-300 text-sm font-semibold hover:bg-green-600/40 transition-colors">
              📲 {lang === "bm" ? "Kongsi via WhatsApp" : "Share via WhatsApp"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-5 bg-[#0a0a0a]">
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 font-bold text-white text-sm">{s.breakdown}</div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                { label: s.subtotal, val: RM(result.subtotal), cls: "text-white" },
                ...(addSvc ? [{ label: s.svcAmount, val: RM(result.serviceCharge), cls: "text-red-300" }] : []),
                ...(tip > 0 ? [{ label: `${s.tipAmount} (${tip}%)`, val: RM(result.tipAmount), cls: "text-yellow-300" }] : []),
                ...(addSST ? [{ label: s.sstAmount, val: RM(result.sstAmount), cls: "text-red-300" }] : []),
                { label: s.totalBill,         val: RM(result.totalBill),          cls: "text-white font-bold" },
                { label: `${s.perPerson}`,    val: RM(result.perPerson),          cls: "text-orange-300 font-black text-lg" },
                { label: s.perPersonRounded,  val: RM(result.perPersonRounded),   cls: "text-white/60" },
              ].map(row => (
                <tr key={row.label} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-white/60">{row.label}</td>
                  <td className={`px-5 py-3 text-right font-mono font-semibold ${row.cls}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
