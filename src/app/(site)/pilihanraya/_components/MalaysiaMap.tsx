"use client";

import { STATES, COLORS, type StateInfo } from "../_lib/elections";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function govColor(s: StateInfo): string {
  return COLORS[s.gov] ?? COLORS.OTHER;
}

export default function MalaysiaMap({ selectedId, onSelect }: Props) {
  const { lang } = useLanguage();

  return (
    <svg
      viewBox="0 0 720 372"
      className="w-full h-auto select-none"
      role="img"
      aria-label={lang === "bm" ? "Peta negeri Malaysia mengikut kerajaan memerintah" : "Map of Malaysian states by ruling government"}
    >
      {/* Region labels */}
      <text x="120" y="362" textAnchor="middle" className="fill-white/30" style={{ fontSize: 11, fontWeight: 600 }}>
        {lang === "bm" ? "SEMENANJUNG" : "PENINSULAR"}
      </text>
      <text x="510" y="362" textAnchor="middle" className="fill-white/30" style={{ fontSize: 11, fontWeight: 600 }}>
        BORNEO
      </text>

      {STATES.map((s) => {
        const active = selectedId === s.id;
        const fill = govColor(s);
        const small = s.w < 46 || s.h < 28;
        return (
          <g
            key={s.id}
            onClick={() => onSelect(s.id)}
            className="cursor-pointer"
            style={{ transition: "opacity .15s" }}
          >
            <rect
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              rx={7}
              fill={fill}
              fillOpacity={active ? 1 : 0.82}
              stroke={active ? "#ffffff" : "rgba(255,255,255,0.18)"}
              strokeWidth={active ? 2.5 : 1}
              style={{ transition: "fill-opacity .15s, stroke-width .15s" }}
            />
            <text
              x={s.x + s.w / 2}
              y={s.y + s.h / 2 + (small ? 3 : 4)}
              textAnchor="middle"
              className="fill-white pointer-events-none"
              style={{ fontSize: small ? 9 : 12, fontWeight: 800, letterSpacing: 0.3 }}
            >
              {s.abbr}
            </text>
            {!small && (
              <text
                x={s.x + s.w / 2}
                y={s.y + s.h / 2 + 17}
                textAnchor="middle"
                className="fill-white/70 pointer-events-none"
                style={{ fontSize: 8.5, fontWeight: 600 }}
              >
                {s.results ? `${s.stateSeats}` : "WP"}
                {s.results ? (lang === "bm" ? " kerusi" : " seats") : ""}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
