"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { COLORS } from "../_lib/elections";
import { UPCOMING, type UpcomingElection as UE } from "../_lib/upcoming";

interface Props {
  onSelectState: (id: string) => void;
}

/** days/hours/mins/secs until target, or null once past */
function diff(target: number, now: number) {
  let ms = target - now;
  if (ms <= 0) return null;
  const d = Math.floor(ms / 86400000); ms -= d * 86400000;
  const h = Math.floor(ms / 3600000); ms -= h * 3600000;
  const m = Math.floor(ms / 60000); ms -= m * 60000;
  const s = Math.floor(ms / 1000);
  return { d, h, m, s };
}

function phase(e: UE, now: number, lang: "bm" | "en") {
  const t = (d: string) => new Date(d + "T00:00:00+08:00").getTime();
  const nom = t(e.dates[1].date);
  const poll = new Date(e.polling).getTime();
  const dayEnd = poll + 86400000;
  if (now >= dayEnd) return { bm: "Selesai", en: "Concluded", tone: "slate" as const };
  if (now >= poll) return { bm: "Hari Mengundi", en: "Polling Day", tone: "green" as const };
  if (now >= nom) return { bm: "Tempoh Berkempen", en: "Campaign Period", tone: "amber" as const };
  return { bm: "Menjelang Penamaan", en: "Pre-Nomination", tone: "blue" as const };
}

const TONE: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-300 border-blue-400/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  green: "bg-green-500/15 text-green-300 border-green-400/30",
  slate: "bg-white/10 text-white/60 border-white/20",
};

function Countdown({ e, now }: { e: UE; now: number }) {
  const { lang } = useLanguage();
  const c = diff(new Date(e.polling).getTime(), now);
  if (!c) {
    return (
      <div className="text-green-300 font-bold text-sm">
        {lang === "bm" ? "Pengundian sedang berlangsung / selesai" : "Polling under way / concluded"}
      </div>
    );
  }
  const unit = (n: number, bm: string, en: string) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-black text-white tabular-nums leading-none">{String(n).padStart(2, "0")}</span>
      <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1">{lang === "bm" ? bm : en}</span>
    </div>
  );
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {unit(c.d, "Hari", "Days")}
      <span className="text-white/20 text-xl -mt-2">:</span>
      {unit(c.h, "Jam", "Hrs")}
      <span className="text-white/20 text-xl -mt-2">:</span>
      {unit(c.m, "Min", "Min")}
      <span className="text-white/20 text-xl -mt-2">:</span>
      {unit(c.s, "Saat", "Sec")}
    </div>
  );
}

function Card({ e, now, onSelectState }: { e: UE; now: number; onSelectState: (id: string) => void }) {
  const { lang } = useLanguage();
  const ph = phase(e, now, lang);
  const inc = COLORS[e.incumbentCoalition] ?? COLORS.OTHER;

  const goToSeats = () => {
    onSelectState(e.stateId);
    document.getElementById("state-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="card-glass rounded-2xl p-5 space-y-4 border border-white/10">
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-black text-lg leading-tight">{e.nameBm.replace("PRN ", "🗳️ PRN ")}</h3>
          <p className="text-white/45 text-xs mt-0.5">
            {lang === "bm" ? e.editionBm : e.editionEn} · {e.totalSeats} {lang === "bm" ? "kerusi DUN" : "DUN seats"}
          </p>
        </div>
        <span className={`shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full border ${TONE[ph.tone]}`}>
          {lang === "bm" ? ph.bm : ph.en}
        </span>
      </div>

      {/* countdown */}
      <div className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-white/40 text-[10px] uppercase tracking-wider">{lang === "bm" ? "Mengundi pada" : "Polling on"}</div>
          <div className="text-white font-semibold text-sm">{lang === "bm" ? e.pollingDateBm : e.pollingDateEn}</div>
        </div>
        <Countdown e={e} now={now} />
      </div>

      {/* timeline */}
      <div className="flex items-center justify-between gap-1">
        {e.dates.map((d, i) => {
          const done = now >= new Date(d.date + "T23:59:59+08:00").getTime();
          const next = !done && (i === 0 || now >= new Date(e.dates[i - 1].date + "T23:59:59+08:00").getTime());
          return (
            <div key={d.labelEn} className="flex-1 flex flex-col items-center text-center">
              <div
                className={`w-3 h-3 rounded-full mb-1.5 ${done ? "bg-green-400" : next ? "bg-amber-400 ring-4 ring-amber-400/20" : "bg-white/20"}`}
              />
              <div className={`text-[10px] leading-tight ${done ? "text-white/50" : next ? "text-amber-300 font-semibold" : "text-white/35"}`}>
                {lang === "bm" ? d.labelBm : d.labelEn}
              </div>
              <div className="text-[10px] text-white/30 tabular-nums">
                {new Date(d.date + "T00:00:00+08:00").toLocaleDateString(lang === "bm" ? "ms-MY" : "en-GB", { day: "numeric", month: "short" })}
              </div>
            </div>
          );
        })}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 text-xs text-white/55">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: inc }} />
          {lang === "bm" ? "Penyandang: " : "Incumbent: "}
          <b className="text-white/80">{e.incumbentName}</b>
          <span className="text-white/40">· {lang === "bm" ? e.incumbentBm : e.incumbentEn}</span>
        </div>
        <button onClick={goToSeats} className="shrink-0 text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">
          {lang === "bm" ? `${e.totalSeats} kerusi →` : `${e.totalSeats} seats →`}
        </button>
      </div>

      {/* results note */}
      {!e.resultsReady && (
        <p className="text-[11px] text-white/35 leading-relaxed">
          📊 {lang === "bm"
            ? `Keputusan penuh akan dikemas kini selepas ${e.pollingDateBm}. Buat masa ini, senarai kerusi menunjukkan keputusan PRN terdahulu sebagai rujukan.`
            : `Full results will be updated after ${e.pollingDateEn}. For now, the seat list shows the previous election as a baseline.`}
        </p>
      )}
    </div>
  );
}

export default function UpcomingElection({ onSelectState }: Props) {
  const { lang } = useLanguage();
  // hydration-safe clock: null on server, set after mount, ticks each second
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (UPCOMING.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <h2 className="text-lg font-bold text-white">
          {lang === "bm" ? "Pilihan Raya Akan Datang" : "Upcoming Elections"}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {UPCOMING.map((e) => (
          <Card key={e.stateId} e={e} now={now ?? new Date(e.polling).getTime() - 999} onSelectState={onSelectState} />
        ))}
      </div>
      <a
        href="https://mysprsemak.spr.gov.my/semak/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors"
      >
        🔎 {lang === "bm"
          ? "Semak status pendaftaran & saluran mengundi anda (SPR)"
          : "Check your voter registration & polling channel (SPR)"}
      </a>
    </section>
  );
}
