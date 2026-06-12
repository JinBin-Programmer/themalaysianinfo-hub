"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RESULTS } from "../_lib/results";
import FourDArticle from "./FourDArticle";

export default function FourDContent() {
  const { lang } = useLanguage();
  const [checkNum, setCheckNum] = useState("");
  const [selectedOp, setSelectedOp] = useState(0);

  const t = {
    bm: {
      title: "🎰 Keputusan 4D Malaysia",
      subtitle: "Keputusan terkini Magnum 4D, Sports TOTO & Da Ma Cai",
      draw: "Cabutan", date: "Tarikh",
      first: "Hadiah 1", second: "Hadiah 2", third: "Hadiah 3",
      special: "Hadiah Khas", consolation: "Saguhati",
      checker: "Semak Nombor Anda",
      checkerPlaceholder: "Masukkan 4 digit (cth: 1234)",
      checkBtn: "Semak",
      won: "🎉 Tahniah! Nombor ini menang dalam cabutan ini!",
      notWon: "Nombor ini tidak menang dalam cabutan terkini.",
      official: "Keputusan Rasmi",
      officialDesc: "Untuk keputusan terkini dan rasmi, lawati:",
      disclaimer: "⚠️ Data yang dipaparkan adalah untuk tujuan demonstrasi. Sila semak laman web rasmi untuk keputusan sebenar.",
    },
    en: {
      title: "🎰 Malaysia 4D Results",
      subtitle: "Latest Magnum 4D, Sports TOTO & Da Ma Cai results",
      draw: "Draw", date: "Date",
      first: "1st Prize", second: "2nd Prize", third: "3rd Prize",
      special: "Special", consolation: "Consolation",
      checker: "Check Your Number",
      checkerPlaceholder: "Enter 4 digits (e.g. 1234)",
      checkBtn: "Check",
      won: "🎉 Congratulations! This number won in this draw!",
      notWon: "This number did not win in the latest draw.",
      official: "Official Results",
      officialDesc: "For latest and official results, visit:",
      disclaimer: "⚠️ Data shown is for demonstration purposes. Please check official websites for actual results.",
    },
  };
  const s = t[lang];
  const op = RESULTS[selectedOp];

  const checkWin = () => {
    if (checkNum.length !== 4) return null;
    const r = op.latest;
    if ([r.first, r.second, r.third].includes(checkNum)) return "prize";
    if (r.special.includes(checkNum)) return "special";
    if (r.consolation.includes(checkNum)) return "consolation";
    return "none";
  };
  const winResult = checkNum.length === 4 ? checkWin() : null;

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {/* Operator tabs */}
      <div className="flex gap-2 animate-in delay-1">
        {RESULTS.map((r, i) => (
          <button key={i} onClick={() => setSelectedOp(i)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${selectedOp === i ? "bg-yellow-500 text-black" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"}`}>
            {r.name}
          </button>
        ))}
      </div>

      {/* Results card */}
      <div className={`card-glass rounded-2xl overflow-hidden animate-in delay-2`}>
        <div className={`bg-gradient-to-r ${op.color} p-4 flex justify-between items-center`}>
          <div>
            <div className="text-white font-black text-lg">{op.name}</div>
            <div className="text-white/50 text-xs">{s.date}: {op.latest.date} · {s.draw} #{op.latest.drawNo}</div>
          </div>
          <a href={op.officialUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors">
            {s.official} ↗
          </a>
        </div>

        <div className="p-4 space-y-4">
          {/* Top 3 prizes */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: s.first, num: op.latest.first, color: "text-yellow-400", bg: "bg-yellow-500/10" },
              { label: s.second, num: op.latest.second, color: "text-blue-400", bg: "bg-blue-500/10" },
              { label: s.third, num: op.latest.third, color: "text-green-400", bg: "bg-green-500/10" },
            ].map((prize, i) => (
              <div key={i} className={`${prize.bg} rounded-xl p-3 text-center`}>
                <div className="text-white/50 text-xs mb-1">{prize.label}</div>
                <div className={`${prize.color} font-black text-2xl font-mono tracking-widest`}>{prize.num}</div>
              </div>
            ))}
          </div>

          {/* Special prizes */}
          <div>
            <div className="text-white/40 text-xs mb-2 uppercase tracking-wider">{s.special}</div>
            <div className="grid grid-cols-5 gap-1.5">
              {op.latest.special.map((n, i) => (
                <div key={i} className="bg-white/5 rounded-lg py-2 text-center text-white/80 text-sm font-mono font-bold">{n}</div>
              ))}
            </div>
          </div>

          {/* Consolation prizes */}
          <div>
            <div className="text-white/40 text-xs mb-2 uppercase tracking-wider">{s.consolation}</div>
            <div className="grid grid-cols-5 gap-1.5">
              {op.latest.consolation.map((n, i) => (
                <div key={i} className="bg-white/5 rounded-lg py-2 text-center text-white/60 text-sm font-mono">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Number checker */}
      <div className="card-glass rounded-2xl p-5 space-y-3 animate-in delay-3">
        <h2 className="text-white font-bold">{s.checker}</h2>
        <div className="flex gap-2">
          <input
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={checkNum}
            onChange={e => setCheckNum(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder={s.checkerPlaceholder}
            className="flex-1 bg-white/10 border border-white/20 text-white text-lg font-mono rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-yellow-400 text-center tracking-widest"
          />
          <button onClick={() => {}} className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition-colors">
            {s.checkBtn}
          </button>
        </div>
        {winResult && (
          <div className={`rounded-xl p-3 text-sm text-center font-bold ${winResult !== "none" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-white/5 text-white/50"}`}>
            {winResult !== "none" ? s.won : s.notWon}
          </div>
        )}
      </div>

      {/* Official links */}
      <div className="card-glass rounded-2xl p-5 space-y-3 animate-in delay-4">
        <h2 className="text-white font-bold">{s.officialDesc}</h2>
        <div className="space-y-2">
          {RESULTS.map((r, i) => (
            <a key={i} href={r.officialUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              <span className="text-white/70 font-medium">{r.name}</span>
              <span className="text-white/30 text-xs">{r.officialUrl.replace("https://", "")} ↗</span>
            </a>
          ))}
        </div>
      </div>

      <p className="text-white/30 text-xs text-center px-4">{s.disclaimer}</p>

      {/* Rich editorial content + FAQ */}
      <FourDArticle />
    </div>
  );
}
