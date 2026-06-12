"use client";

import { useState, useMemo } from "react";
import { calculateAge } from "../_lib/age";
import { useLanguage } from "@/contexts/LanguageContext";
import AdBanner from "@/components/AdBanner";
import UmurArticle from "./UmurArticle";

const MONTH_MS = ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"];
const MONTH_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function UmurContent() {
  const today = new Date();
  const [year, setYear] = useState(1995);
  const [month, setMonth] = useState(6);
  const [day, setDay] = useState(15);
  const { lang } = useLanguage();

  const birthDate = useMemo(() => new Date(year, month - 1, day), [year, month, day]);
  const result = useMemo(() => {
    if (birthDate > today) return null;
    return calculateAge(birthDate);
  }, [birthDate]);

  const years = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const t = {
    bm: {
      title: "🎂 Kalkulator Umur",
      subtitle: "Kira umur tepat anda dan maklumat hari lahir",
      selectBirth: "Tarikh Lahir",
      yearLabel: "Tahun", monthLabel: "Bulan", dayLabel: "Hari",
      yourAge: "Umur Anda",
      years: "tahun", months: "bulan", days: "hari",
      totalDays: "Jumlah Hari Hidup",
      totalHours: "Jumlah Jam",
      dayBorn: "Hari Dilahirkan",
      generation: "Generasi",
      nextBirthday: "Hari Lahir Seterusnya",
      daysAway: "hari lagi",
      todayBirthday: "🎉 Selamat Hari Lahir!",
      futureDate: "Tarikh lahir mestilah pada masa lalu.",
    },
    en: {
      title: "🎂 Age Calculator",
      subtitle: "Calculate your exact age and birthday information",
      selectBirth: "Date of Birth",
      yearLabel: "Year", monthLabel: "Month", dayLabel: "Day",
      yourAge: "Your Age",
      years: "years", months: "months", days: "days",
      totalDays: "Total Days Lived",
      totalHours: "Total Hours",
      dayBorn: "Day of Birth",
      generation: "Generation",
      nextBirthday: "Next Birthday",
      daysAway: "days away",
      todayBirthday: "🎉 Happy Birthday!",
      futureDate: "Date of birth must be in the past.",
    },
  };
  const s = t[lang];

  const nextBdFormatted = result
    ? `${result.nextBirthdayDate.getDate()} ${lang === "bm" ? MONTH_MS[result.nextBirthdayDate.getMonth()] : MONTH_EN[result.nextBirthdayDate.getMonth()]} ${result.nextBirthdayDate.getFullYear()}`
    : "";

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          {/* Header */}
          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
          </div>

          {/* Date picker */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            <label className="block text-xs text-white/50 uppercase tracking-wider">{s.selectBirth}</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-xs text-white/40 mb-1">{s.dayLabel}</div>
                <select value={day} onChange={e => setDay(+e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {days.map(d => <option key={d} value={d} className="bg-gray-900">{d}</option>)}
                </select>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-1">{s.monthLabel}</div>
                <select value={month} onChange={e => setMonth(+e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {months.map(m => <option key={m} value={m} className="bg-gray-900">
                    {lang === "bm" ? MONTH_MS[m - 1] : MONTH_EN[m - 1]}
                  </option>)}
                </select>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-1">{s.yearLabel}</div>
                <select value={year} onChange={e => setYear(+e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {years.map(y => <option key={y} value={y} className="bg-gray-900">{y}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Result */}
          {result ? (
            <div className={`animate-in delay-2 rounded-2xl p-6 text-center border ${result.isToday ? "bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 border-yellow-400/30" : "bg-gradient-to-br from-pink-600/20 to-purple-900/20 border-pink-500/20"}`}>
              {result.isToday ? (
                <div className="text-3xl font-black text-yellow-300">{s.todayBirthday}</div>
              ) : (
                <>
                  <div className="text-xs text-pink-300/70 uppercase tracking-wider mb-1">{s.yourAge}</div>
                  <div className="text-6xl font-black text-white">{result.years}</div>
                  <div className="text-lg text-white/60 font-semibold">{s.years}</div>
                  <div className="text-sm text-white/40 mt-1">
                    {result.months} {s.months} {result.days} {s.days}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="animate-in delay-2 card-glass rounded-2xl p-6 text-center">
              <p className="text-white/40">{s.futureDate}</p>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        {result && (
          <>
            <div className="card-glass rounded-2xl overflow-hidden animate-in delay-2">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/5">
                  {[
                    { label: s.totalDays,    val: result.totalDays.toLocaleString(),  cls: "text-blue-300 font-bold" },
                    { label: s.totalHours,   val: result.totalHours.toLocaleString(), cls: "text-white/70" },
                    { label: s.dayBorn,      val: lang === "bm" ? result.dayBornMs : result.dayBornEn, cls: "text-white" },
                    { label: s.generation,   val: lang === "bm" ? result.generation : result.generationEn, cls: "text-purple-300" },
                    {
                      label: s.nextBirthday,
                      val: result.isToday
                        ? s.todayBirthday
                        : `${nextBdFormatted} · ${result.daysToNextBirthday} ${s.daysAway}`,
                      cls: result.isToday ? "text-yellow-300" : "text-pink-300",
                    },
                  ].map(row => (
                    <tr key={row.label} className="hover:bg-white/5">
                      <td className="px-5 py-3 text-white/60">{row.label}</td>
                      <td className={`px-5 py-3 text-right font-semibold ${row.cls}`}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />
          </>
        )}

        {/* Rich editorial content + FAQ */}
        <UmurArticle />
      </div>
    </div>
  );
}
