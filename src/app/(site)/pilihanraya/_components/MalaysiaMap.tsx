"use client";

import { useState } from "react";
import { STATES, COLORS, LEGEND, GEO } from "../_lib/elections";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const PATHS = GEO.paths;
const CENTERS = GEO.centers;
const B = GEO.bbox;

// state id -> meta lookups
const GOV: Record<string, string> = Object.fromEntries(STATES.map((s) => [s.id, s.gov]));
const ABBR: Record<string, string> = Object.fromEntries(STATES.map((s) => [s.id, s.abbr]));
const NAME_BM: Record<string, string> = Object.fromEntries(STATES.map((s) => [s.id, s.nameBm]));
const NAME_EN: Record<string, string> = Object.fromEntries(STATES.map((s) => [s.id, s.nameEn]));

// Coalition short label for the tooltip
const GOV_LABEL: Record<string, { bm: string; en: string }> = Object.fromEntries(
  LEGEND.map((l) => [l.key, { bm: l.bm, en: l.en }])
);

// States too small to carry an on-shape label — selectable, labelled via tooltip
const SMALL = new Set(["perlis", "penang", "kl", "putrajaya", "labuan", "melaka"]);

const PAD = 1.2;
const VIEWBOX = `${B.minX - PAD} ${B.minY - PAD} ${B.w + PAD * 2} ${B.h + PAD * 2}`;

export default function MalaysiaMap({ selectedId, onSelect }: Props) {
  const { lang } = useLanguage();
  const [hover, setHover] = useState<string | null>(null);

  const activeId = hover ?? selectedId;
  const govKey = activeId ? GOV[activeId] : null;
  const govTxt = govKey ? GOV_LABEL[govKey] : null;

  return (
    <div>
      {/* Tooltip banner */}
      <div className="flex items-center justify-center gap-2 h-7 mb-1 text-sm">
        {activeId ? (
          <>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: COLORS[GOV[activeId]] ?? COLORS.OTHER }}
            />
            <span className="text-white font-bold">
              {lang === "bm" ? NAME_BM[activeId] : NAME_EN[activeId]}
            </span>
            {govTxt && <span className="text-white/45 text-xs">· {lang === "bm" ? govTxt.bm : govTxt.en}</span>}
          </>
        ) : (
          <span className="text-white/35 text-xs">
            {lang === "bm" ? "Tuding atau klik negeri untuk butiran" : "Hover or tap a state for details"}
          </span>
        )}
      </div>

      <svg
        viewBox={VIEWBOX}
        className="w-full h-auto select-none"
        role="img"
        aria-label={lang === "bm" ? "Peta negeri Malaysia mengikut kerajaan memerintah" : "Map of Malaysian states by ruling government"}
      >
        {/* State shapes */}
        {Object.entries(PATHS).map(([id, d]) => {
          const isSel = selectedId === id;
          const isHov = hover === id;
          const fill = COLORS[GOV[id]] ?? COLORS.OTHER;
          return (
            <path
              key={id}
              d={d}
              fill={fill}
              fillOpacity={isSel || isHov ? 1 : 0.78}
              stroke={isSel ? "#ffffff" : isHov ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)"}
              strokeWidth={isSel ? 1.6 : isHov ? 1.1 : 0.6}
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              onClick={() => onSelect(id)}
              onMouseEnter={() => setHover(id)}
              onMouseLeave={() => setHover((h) => (h === id ? null : h))}
              className="cursor-pointer"
              style={{ transition: "fill-opacity .15s" }}
            />
          );
        })}

        {/* Abbreviation labels (larger states only) */}
        {Object.entries(CENTERS).map(([id, c]) =>
          SMALL.has(id) ? null : (
            <text
              key={id}
              x={c.cx}
              y={c.cy}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-white pointer-events-none"
              style={{ fontSize: 1.15, fontWeight: 800, letterSpacing: 0.1, paintOrder: "stroke" }}
              stroke="rgba(0,0,0,0.35)"
              strokeWidth={0.35}
            >
              {ABBR[id]}
            </text>
          )
        )}
      </svg>
    </div>
  );
}
