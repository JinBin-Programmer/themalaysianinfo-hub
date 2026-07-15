"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { OPERATORS, nextDrawDate } from "../_lib/results";
import FourDArticle from "./FourDArticle";

export default function FourDContent() {
  const { lang } = useLanguage();

  const t = {
    bm: {
      title: "🎰 Keputusan 4D Malaysia",
      subtitle: "Jadual cabutan & pautan keputusan rasmi Magnum 4D, Sports TOTO & Da Ma Cai",
      nextDraw: "Cabutan Seterusnya",
      drawDays: "Hari Cabutan",
      drawDaysValue: "Rabu · Sabtu · Ahad",
      drawTime: "Waktu Keputusan",
      drawTimeValue: "Dari 7:00 malam",
      specialDraw: "Cabutan Khas",
      specialDrawValue: "Selasa terpilih",
      official: "Semak Keputusan Rasmi",
      officialDesc:
        "Keputusan penuh — hadiah pertama, kedua, ketiga, khas dan saguhati — diumumkan di laman rasmi setiap pengendali:",
      viewResults: "Lihat Keputusan",
      whyOfficial:
        "Kami memaut terus ke sumber rasmi supaya anda sentiasa melihat keputusan sebenar yang terkini. Jangan percaya laman yang memaparkan nombor tanpa sumber rasmi.",
    },
    en: {
      title: "🎰 Malaysia 4D Results",
      subtitle: "Draw schedule & official results links for Magnum 4D, Sports TOTO & Da Ma Cai",
      nextDraw: "Next Draw",
      drawDays: "Draw Days",
      drawDaysValue: "Wednesday · Saturday · Sunday",
      drawTime: "Results From",
      drawTimeValue: "7:00 PM onwards",
      specialDraw: "Special Draws",
      specialDrawValue: "Selected Tuesdays",
      official: "Check Official Results",
      officialDesc:
        "Full results — 1st, 2nd, 3rd, special and consolation prizes — are announced on each operator's official site:",
      viewResults: "View Results",
      whyOfficial:
        "We link directly to official sources so you always see the real, latest results. Don't trust sites that display numbers without an official source.",
    },
  };
  const s = t[lang];

  const next = nextDrawDate();
  const nextDrawLabel = next.toLocaleDateString(lang === "bm" ? "ms-MY" : "en-MY", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {/* Next draw + schedule */}
      <div className="card-glass rounded-2xl p-5 animate-in delay-1">
        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-4 text-center mb-4">
          <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{s.nextDraw}</div>
          <div className="text-yellow-300 font-black text-xl">{nextDrawLabel}</div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-white/40 mb-1">{s.drawDays}</div>
            <div className="text-white font-bold">{s.drawDaysValue}</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-white/40 mb-1">{s.drawTime}</div>
            <div className="text-white font-bold">{s.drawTimeValue}</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-white/40 mb-1">{s.specialDraw}</div>
            <div className="text-white font-bold">{s.specialDrawValue}</div>
          </div>
        </div>
      </div>

      {/* Official results links */}
      <div className="card-glass rounded-2xl p-5 space-y-3 animate-in delay-2">
        <h2 className="text-white font-bold">{s.official}</h2>
        <p className="text-white/50 text-sm">{s.officialDesc}</p>
        <div className="space-y-2">
          {OPERATORS.map((op, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${op.color} rounded-xl p-4 flex items-center justify-between`}
            >
              <div>
                <div className="text-white font-black">{op.name}</div>
                <div className="text-white/40 text-xs">{op.officialUrl.replace("https://", "")}</div>
              </div>
              <a
                href={op.resultsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg transition-colors"
              >
                {s.viewResults} ↗
              </a>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-xs">{s.whyOfficial}</p>
      </div>

      {/* Rich editorial content + FAQ */}
      <FourDArticle />
    </div>
  );
}
