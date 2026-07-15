"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { COLORS } from "../_lib/elections";
import { SEATS, type Seat } from "../_lib/seats";
import { UPCOMING } from "../_lib/upcoming";

const COAL_SHORT: Record<string, string> = {
  PH: "PH", PN: "PN", BN: "BN", GPS: "GPS", GRS: "GRS", WARISAN: "WRS", OTHER: "BEBAS",
};
const SMALL = new Set(["BIN", "BINTI", "A/L", "A/P", "AL", "DR", "DR.", "DATO", "DATO'", "DATUK", "SERI", "HAJI", "HJ", "UST"]);
const titleCase = (s: string) =>
  s.toLowerCase().split(" ").map((w) => (SMALL.has(w.toUpperCase()) ? w : w.charAt(0).toUpperCase() + w.slice(1))).join(" ");

const TOP = 6;

function marginals(stateId: string): Seat[] {
  const d = SEATS[stateId]?.dun ?? [];
  return d
    .filter((s) => !s.uncontested && s.majority != null)
    .sort((a, b) => (a.majority ?? 0) - (b.majority ?? 0))
    .slice(0, TOP);
}

function WatchCard({ stateId, nameBm, nameEn }: { stateId: string; nameBm: string; nameEn: string }) {
  const { lang } = useLanguage();
  const seats = marginals(stateId);
  if (seats.length === 0) return null;

  return (
    <div className="card-glass rounded-2xl p-5 space-y-3">
      <div>
        <h3 className="text-white font-bold text-base">{lang === "bm" ? nameBm : nameEn}</h3>
        <p className="text-white/40 text-xs">
          {lang === "bm"
            ? `${TOP} kerusi dengan majoriti tertipis pada PRN lepas`
            : `${TOP} seats with the thinnest majority last time`}
        </p>
      </div>
      <div className="space-y-1.5">
        {seats.map((s, i) => {
          const c = COLORS[s.coalition] ?? COLORS.OTHER;
          return (
            <div key={s.code} className="flex items-center gap-2.5 text-xs">
              <span className="text-white/25 font-mono w-4 shrink-0">{i + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c }} />
              <div className="flex-1 min-w-0">
                <div className="text-white/90 truncate font-medium">{s.name}</div>
                <div className="text-white/40 truncate">{titleCase(s.winner)}</div>
              </div>
              <div className="text-right shrink-0 leading-tight">
                <div className="font-bold" style={{ color: c }}>{COAL_SHORT[s.coalition] ?? s.coalition}</div>
                <div className="text-white/35 tabular-nums">
                  {lang === "bm" ? "majoriti " : "maj "}<b className="text-white/70">+{(s.majority ?? 0).toLocaleString()}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SeatsToWatch() {
  const { lang } = useLanguage();
  const races = UPCOMING.filter((e) => (SEATS[e.stateId]?.dun ?? []).length > 0);
  if (races.length === 0) return null;

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-white">
          🔥 {lang === "bm" ? "Kerusi Rentan untuk Diperhatikan" : "Marginal Seats to Watch"}
        </h2>
        <p className="text-white/45 text-xs">
          {lang === "bm"
            ? "Kerusi paling rapat dalam pilihan raya negeri lepas — medan utama PRN 2026."
            : "The closest seats in each state's last election — the key battlegrounds for 2026."}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {races.map((e) => (
          <WatchCard key={e.stateId} stateId={e.stateId} nameBm={e.nameBm} nameEn={e.nameEn} />
        ))}
      </div>
    </section>
  );
}
