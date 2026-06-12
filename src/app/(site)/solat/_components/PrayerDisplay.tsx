"use client";

import { useState, useEffect, useCallback } from "react";
import type { PrayerData } from "../_lib/prayer";
import { CITIES, PRAYER_LABELS } from "../_lib/prayer";
import { useLanguage } from "@/contexts/LanguageContext";

const PRAYER_ORDER = ["Imsak", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

function timeToMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function nowMYTMinutes(): number {
  const now = new Date();
  const myt = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }));
  return myt.getHours() * 60 + myt.getMinutes();
}

function getNextPrayer(timings: PrayerData["timings"]): string | null {
  const nowMin = nowMYTMinutes();
  const prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;
  for (const p of prayers) {
    if (timeToMinutes(timings[p]) > nowMin) return p;
  }
  return "Fajr";
}

function formatCountdown(nextPrayer: string, timings: PrayerData["timings"], lang: "bm" | "en"): string {
  if (nextPrayer === "Fajr" && timeToMinutes(timings.Isha) > nowMYTMinutes()) {
    // handled below
  }
  const nowMin = nowMYTMinutes();
  let targetMin = timeToMinutes(timings[nextPrayer as keyof typeof timings] ?? timings.Fajr);
  if (targetMin <= nowMin) targetMin += 24 * 60;
  const diff = targetMin - nowMin;
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  const hourUnit = lang === "bm" ? "j" : "h";
  return h > 0 ? `${h}${hourUnit} ${m}m` : `${m}m`;
}

interface Props {
  initial: PrayerData;
}

export default function PrayerDisplay({ initial }: Props) {
  const { lang } = useLanguage();
  const [data, setData] = useState<PrayerData>(initial);
  const [selectedCity, setSelectedCity] = useState(initial.city);
  const [loading, setLoading] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  const fetchCity = useCallback(async (city: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/prayer-times?city=${encodeURIComponent(city)}`);
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json() as PrayerData;
      setData(json);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    void fetchCity(city);
  };

  const nextPrayer = getNextPrayer(data.timings);
  const countdown = nextPrayer ? formatCountdown(nextPrayer, data.timings, lang) : "";

  void tick;

  return (
    <div className="space-y-4">
      {/* City selector */}
      <div className="animate-in">
        <label className="block text-xs text-indigo-300 mb-1.5 font-medium uppercase tracking-wider">
          {lang === "bm" ? "Pilih Bandar" : "Select City"}
        </label>
        <select
          value={selectedCity}
          onChange={(e) => handleCityChange(e.target.value)}
          disabled={loading}
          className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors disabled:opacity-50"
        >
          {CITIES.map((c) => (
            <option key={c.city} value={c.city} className="bg-indigo-900 text-white">
              {c.label} — {c.state}
            </option>
          ))}
        </select>
      </div>

      {/* Date + next prayer header */}
      <div className="animate-in delay-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-white font-semibold">{data.gregorian}</div>
          <div className="text-amber-300 text-sm">
            {data.hijri.day} {data.hijri.month.en} {data.hijri.year} H
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-indigo-300">
            {lang === "bm" ? "Solat seterusnya" : "Next prayer"}
          </div>
          {nextPrayer && (
            <div className="text-amber-400 font-bold text-lg">
              {lang === "bm"
                ? (PRAYER_LABELS[nextPrayer]?.malay ?? nextPrayer)
                : (PRAYER_LABELS[nextPrayer]?.english ?? nextPrayer)}{" "}
              <span className="text-sm font-normal text-indigo-200">
                {lang === "bm" ? "dalam" : "in"} {countdown}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Prayer times grid */}
      <div className={`grid gap-3 transition-opacity ${loading ? "opacity-50" : "opacity-100"}`}>
        {PRAYER_ORDER.map((prayer, i) => {
          const label = PRAYER_LABELS[prayer];
          const time = data.timings[prayer as keyof typeof data.timings];
          const isNext = prayer === nextPrayer;
          const prayerName = lang === "bm" ? label.malay : label.english;
          const prayerSub = lang === "bm" ? label.arabic : label.malay;

          return (
            <div
              key={prayer}
              className={`animate-in flex items-center justify-between rounded-2xl px-5 py-4 border transition-colors ${
                isNext
                  ? "bg-amber-500/20 border-amber-400/50 shadow-lg shadow-amber-900/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl w-8 text-center">{label.icon}</span>
                <div>
                  <div className={`font-bold text-base ${isNext ? "text-amber-300" : "text-white"}`}>
                    {prayerName}
                  </div>
                  <div className={`text-xs ${isNext ? "text-amber-400/70" : "text-indigo-300"}`}>
                    {prayerSub}
                  </div>
                </div>
              </div>
              <div className={`text-xl font-mono font-bold tabular-nums ${isNext ? "text-amber-300" : "text-white"}`}>
                {time}
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="text-center text-sm text-indigo-300 animate-pulse">
          {lang === "bm" ? "Memuatkan waktu solat…" : "Fetching prayer times…"}
        </div>
      )}
    </div>
  );
}
