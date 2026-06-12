"use client";

import { useState, useMemo } from "react";
import { STATES, getHolidaysForState, getNextHoliday, daysUntil } from "../_lib/holidays";
import type { StateCode } from "../_lib/holidays";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import CutiUmumArticle from "./CutiUmumArticle";

const MONTH_BM = ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"];
const MONTH_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatDate(dateStr: string, lang: "bm" | "en") {
  const d = new Date(dateStr);
  const months = lang === "bm" ? MONTH_BM : MONTH_EN;
  const days = ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"];
  const daysEn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dayName = lang === "bm" ? days[d.getDay()] : daysEn[d.getDay()];
  return `${dayName}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const TYPE_STYLE = {
  national:  { bg: "bg-blue-500/20 border-blue-400/30",  badge: "bg-blue-600",  dot: "bg-blue-400" },
  religious: { bg: "bg-purple-500/20 border-purple-400/30", badge: "bg-purple-600", dot: "bg-purple-400" },
  state:     { bg: "bg-teal-500/20 border-teal-400/30",  badge: "bg-teal-600",  dot: "bg-teal-400" },
};

export default function CutiUmumContent() {
  const [year, setYear] = useState<2026 | 2027>(2026);
  const [state, setState] = useState<StateCode>("ALL");
  const { lang } = useLanguage();

  const holidays = useMemo(() => getHolidaysForState(year, state), [year, state]);
  const nextHoliday = useMemo(() => getNextHoliday(holidays), [holidays]);

  const t = {
    bm: {
      title: "🏖️ Cuti Umum Malaysia",
      subtitle: "Senarai cuti umum mengikut negeri dengan kiraan hari",
      selectState: "Pilih Negeri",
      selectYear: "Tahun",
      nextHoliday: "Cuti Seterusnya",
      daysLeft: "hari lagi",
      today: "Hari ini!",
      yesterday: "Sudah berlalu",
      national: "Kebangsaan",
      religious: "Agama",
      state: "Negeri",
      approximate: "Anggaran",
      totalHolidays: "Jumlah cuti",
      days: "hari",
      noHolidays: "Tiada cuti lagi untuk tahun ini",
    },
    en: {
      title: "🏖️ Malaysia Public Holidays",
      subtitle: "Public holidays by state with day countdown",
      selectState: "Select State",
      selectYear: "Year",
      nextHoliday: "Next Holiday",
      daysLeft: "days away",
      today: "Today!",
      yesterday: "Past",
      national: "National",
      religious: "Religious",
      state: "State",
      approximate: "Approx.",
      totalHolidays: "Total holidays",
      days: "days",
      noHolidays: "No more holidays this year",
    },
  };
  const s = t[lang];

  // Group holidays by month
  const byMonth = useMemo(() => {
    const map: Record<number, typeof holidays> = {};
    holidays.forEach(h => {
      const m = new Date(h.date).getMonth();
      if (!map[m]) map[m] = [];
      map[m].push(h);
    });
    return map;
  }, [holidays]);

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Year + State selectors */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.selectYear}</label>
                <div className="flex gap-2">
                  {([2026, 2027] as const).map(y => (
                    <button key={y} onClick={() => setYear(y)}
                      className={`flex-1 py-2 rounded-xl border text-sm font-bold transition-colors ${year === y ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                      {y}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.selectState}</label>
              <select value={state} onChange={e => setState(e.target.value as StateCode)}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                {STATES.map(st => (
                  <option key={st.code} value={st.code} className="bg-gray-900">
                    {lang === "bm" ? st.name_ms : st.name_en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Next holiday banner */}
          {nextHoliday && (
            <div className="animate-in delay-2 bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 border border-yellow-400/30 rounded-2xl p-5">
              <div className="text-xs text-yellow-300/70 uppercase tracking-wider mb-1">{s.nextHoliday}</div>
              <div className="text-xl font-black text-white">{lang === "bm" ? nextHoliday.name_ms : nextHoliday.name_en}</div>
              <div className="text-sm text-white/60 mt-0.5">{formatDate(nextHoliday.date, lang)}</div>
              <div className="mt-3">
                {(() => {
                  const d = daysUntil(nextHoliday.date);
                  if (d === 0) return <span className="text-2xl font-black text-yellow-300">🎉 {s.today}</span>;
                  if (d < 0) return <span className="text-white/40">{s.yesterday}</span>;
                  return <span className="text-3xl font-black text-yellow-300">{d} <span className="text-base font-normal text-white/60">{s.daysLeft}</span></span>;
                })()}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="animate-in delay-2 flex gap-3 text-center">
            <div className="flex-1 card-glass rounded-xl py-3">
              <div className="text-2xl font-black text-white">{holidays.length}</div>
              <div className="text-xs text-white/40">{s.totalHolidays} {year}</div>
            </div>
            {(["national","religious","state"] as const).map(type => (
              <div key={type} className="flex-1 card-glass rounded-xl py-3">
                <div className="text-2xl font-black text-white">{holidays.filter(h => h.type === type).length}</div>
                <div className={`text-xs ${TYPE_STYLE[type].dot.replace("bg-","text-")}/80`}>{s[type]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holiday list by month */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-6 bg-[#0a0a0a]">
        {Object.entries(byMonth).map(([monthNum, monthHolidays]) => {
          const m = parseInt(monthNum);
          const monthName = lang === "bm" ? MONTH_BM[m] : MONTH_EN[m];
          return (
            <div key={m}>
              <div className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3 px-1">
                {monthName} {year} · {monthHolidays.length} {s.days}
              </div>
              <div className="space-y-2">
                {monthHolidays.map(h => {
                  const style = TYPE_STYLE[h.type];
                  const days = daysUntil(h.date);
                  const isPast = days < 0;
                  const isToday = days === 0;
                  return (
                    <div key={h.date + h.name_en}
                      className={`border rounded-2xl p-4 transition-colors ${style.bg} ${isPast ? "opacity-50" : ""}`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
                            <span className="font-semibold text-white text-sm">
                              {lang === "bm" ? h.name_ms : h.name_en}
                            </span>
                            {h.isApproximate && (
                              <span className="text-[10px] text-white/30 border border-white/20 px-1.5 py-0.5 rounded-full">
                                {s.approximate}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-white/50 mt-1 ml-4">{formatDate(h.date, lang)}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {isToday ? (
                            <span className="text-yellow-300 font-black text-sm">🎉 {s.today}</span>
                          ) : isPast ? (
                            <span className="text-white/20 text-xs">{s.yesterday}</span>
                          ) : (
                            <span className="text-white/60 text-xs">{days}d</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {holidays.length === 0 && (
          <div className="text-center text-white/30 py-12">{s.noHolidays}</div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center text-xs text-white/40">
          {(["national","religious","state"] as const).map(type => (
            <div key={type} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${TYPE_STYLE[type].dot}`} />
              {lang === "bm" ? t.bm[type] : t.en[type]}
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="border border-white/20 text-white/30 px-1 rounded text-[10px]">{s.approximate}</span>
            {lang === "bm" ? "Tarikh anggaran" : "Approximate date"}
          </div>
        </div>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <CutiUmumArticle />
      </div>
    </div>
  );
}
