"use client";

import { COLORS } from "../_lib/elections";
import { SEATS, type Seat } from "../_lib/seats";
import { useLanguage } from "@/contexts/LanguageContext";

const COAL_SHORT: Record<string, string> = {
  PH: "PH", PN: "PN", BN: "BN", GPS: "GPS", GRS: "GRS", WARISAN: "WRS", OTHER: "BEBAS",
};

// Source names are ALL CAPS — render them in a friendlier title case.
const SMALL_WORDS = new Set(["BIN", "BINTI", "A/L", "A/P", "AL", "DR", "DR.", "DATO", "DATO'", "DATUK", "SERI", "HAJI", "HJ", "UST"]);
function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(" ")
    .map((w) => {
      const up = w.toUpperCase();
      if (SMALL_WORDS.has(up)) return w; // keep honorifics/particles lowercase
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

function SeatRow({ s, lang }: { s: Seat; lang: string }) {
  const c = COLORS[s.coalition] ?? COLORS.OTHER;
  return (
    <div className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.06] text-xs">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c }} />
      <span className="text-white/35 font-mono w-11 shrink-0">{s.code}</span>
      <div className="flex-1 min-w-0">
        <div className="text-white/90 truncate font-medium">{s.name}</div>
        <div className="text-white/40 truncate">{titleCase(s.winner)}</div>
      </div>
      <div className="text-right shrink-0 leading-tight">
        <div className="font-bold" style={{ color: c }}>{COAL_SHORT[s.coalition] ?? s.coalition}</div>
        <div className="text-white/30 tabular-nums">
          {s.uncontested
            ? (lang === "bm" ? "menang tanpa lawan" : "uncontested")
            : s.majority != null
              ? `+${s.majority.toLocaleString()}`
              : "—"}
        </div>
      </div>
    </div>
  );
}

function Section({ title, seats, lang }: { title: string; seats: Seat[]; lang: string }) {
  return (
    <details className="group rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-semibold text-white">
        <span>{title}</span>
        <span className="flex items-center gap-2 text-white/40 text-xs">
          {seats.length} {lang === "bm" ? "kerusi" : "seats"}
          <span className="text-yellow-400 transition-transform group-open:rotate-45">+</span>
        </span>
      </summary>
      <div className="px-4 pb-2 max-h-72 overflow-y-auto">
        {seats.map((s) => <SeatRow key={s.code} s={s} lang={lang} />)}
      </div>
    </details>
  );
}

export default function SeatList({ stateId }: { stateId: string }) {
  const { lang } = useLanguage();
  const data = SEATS[stateId];
  if (!data) return null;
  return (
    <div className="space-y-2">
      {data.parlimen.length > 0 && (
        <Section
          title={lang === "bm" ? "Kerusi Parlimen (PRU15)" : "Parliament seats (GE15)"}
          seats={data.parlimen}
          lang={lang}
        />
      )}
      {data.dun.length > 0 && (
        <Section
          title={lang === "bm" ? "Kerusi DUN (negeri)" : "State Assembly seats (DUN)"}
          seats={data.dun}
          lang={lang}
        />
      )}
    </div>
  );
}
