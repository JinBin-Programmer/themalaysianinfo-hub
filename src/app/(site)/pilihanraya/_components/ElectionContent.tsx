"use client";

import { useState } from "react";
import MalaysiaMap from "./MalaysiaMap";
import SeatList from "./SeatList";
import ElectionArticle from "./ElectionArticle";
import AdBanner from "@/components/AdBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  STATES, GE15, KEY_PEOPLE, LEGEND, COLORS,
  type StateInfo, type SeatResult,
} from "../_lib/elections";

const t = {
  bm: {
    badge: "Data Pilihan Raya",
    h1: "🗳️ Pilihan Raya Malaysia",
    subtitle: "Keputusan PRU15 & kerajaan setiap negeri",
    geTitle: "PRU15 — Dewan Rakyat",
    geSub: "222 kerusi · majoriti 112 · undi keluar",
    hung: "Parlimen Tergantung — Kerajaan Perpaduan",
    hungDesc: "Tiada gabungan mencapai 112 kerusi. Anwar Ibrahim dilantik Perdana Menteri ke-10 (24 Nov 2022) menerajui kerajaan perpaduan PH + BN + GPS + GRS.",
    seats: "kerusi",
    peopleTitle: "Tokoh Utama Kerajaan Persekutuan",
    mapTitle: "Kerajaan Negeri Mengikut Peta",
    mapHint: "Klik mana-mana negeri untuk butiran keputusan",
    tapState: "Pilih negeri pada peta untuk melihat keputusan penuh",
    lastElection: "Pilihan raya negeri terkini",
    leader: "Ketua Kerajaan",
    party: "Parti",
    since: "Memegang jawatan sejak",
    assembly: "Keputusan DUN",
    federal: "Kerusi Parlimen",
    ft: "Wilayah Persekutuan",
    source: "Sumber",
    disclaimer: "Maklumat untuk rujukan sahaja. Sahkan keputusan rasmi di SPR.",
    shareBtn: "📤 Kongsi ke WhatsApp",
    shareText: "Semak keputusan Pilihan Raya Malaysia & kerajaan setiap negeri:\nhttps://www.themalaysianinfo.online/pilihanraya",
  },
  en: {
    badge: "Election Data",
    h1: "🗳️ Malaysia Elections",
    subtitle: "GE15 results & each state's government",
    geTitle: "GE15 — Dewan Rakyat",
    geSub: "222 seats · majority 112 · turnout",
    hung: "Hung Parliament — Unity Government",
    hungDesc: "No coalition reached 112 seats. Anwar Ibrahim was appointed 10th Prime Minister (24 Nov 2022), leading a PH + BN + GPS + GRS unity government.",
    seats: "seats",
    peopleTitle: "Key Federal Government Figures",
    mapTitle: "State Governments Map",
    mapHint: "Tap any state for its result details",
    tapState: "Select a state on the map to see full results",
    lastElection: "Latest state election",
    leader: "Head of government",
    party: "Party",
    since: "In office since",
    assembly: "Assembly result",
    federal: "Parliament seats",
    ft: "Federal Territory",
    source: "Source",
    disclaimer: "Information for reference only. Confirm official results at SPR.",
    shareBtn: "📤 Share on WhatsApp",
    shareText: "Check Malaysia's election results & every state's government:\nhttps://www.themalaysianinfo.online/pilihanraya",
  },
};

/** Horizontal stacked bar for a set of seat results. */
function SeatBar({ results, total }: { results: SeatResult[]; total: number }) {
  return (
    <div className="flex w-full h-3 rounded-full overflow-hidden bg-white/5">
      {results.map((r, i) => (
        <div
          key={i}
          style={{ width: `${(r.seats / total) * 100}%`, backgroundColor: r.color }}
          title={`${r.label}: ${r.seats}`}
        />
      ))}
    </div>
  );
}

function StatePanel({ s }: { s: StateInfo }) {
  const { lang } = useLanguage();
  const tx = t[lang];
  const name = lang === "bm" ? s.nameBm : s.nameEn;
  const note = lang === "bm" ? s.noteBm : s.noteEn;
  const status = lang === "bm" ? s.statusBm : s.statusEn;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: COLORS[s.gov] ?? COLORS.OTHER }}
        />
        <h3 className="text-2xl font-black text-white">{name}</h3>
      </div>

      {status && (
        <div className="rounded-xl bg-amber-500/10 border border-amber-400/25 p-3 text-xs text-amber-200/90 leading-relaxed">
          ⚠️ {status}
        </div>
      )}

      {s.isFT ? (
        <p className="text-sm text-white/60 leading-relaxed">{note}</p>
      ) : (
        <>
          {/* Leader */}
          <div className="card-glass rounded-xl p-4 space-y-2">
            <div className="text-white/40 text-[11px] uppercase tracking-wider">
              {lang === "bm" ? s.leaderTitleBm : s.leaderTitleEn}
            </div>
            <div className="text-white font-bold text-base leading-snug">{s.leaderName}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/55">
              <span>🏛️ {s.leaderParty}</span>
              <span>📅 {tx.since}: {lang === "bm" ? s.leaderSinceBm : s.leaderSinceEn}</span>
            </div>
          </div>

          {/* Assembly result */}
          {s.results && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/45 uppercase tracking-wider">{tx.assembly}</span>
                <span className="text-white/60">{lang === "bm" ? s.electionBm : s.electionEn}</span>
              </div>
              <SeatBar results={s.results} total={s.stateSeats ?? 1} />
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                {s.results.map((r) => (
                  <span key={r.label} className="inline-flex items-center gap-1.5 text-xs text-white/70">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: r.color }} />
                    {r.label} <b className="text-white tabular-nums">{r.seats}</b>
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Federal seats */}
      <div className="flex items-center justify-between card-glass rounded-xl px-4 py-3">
        <span className="text-sm text-white/55">{tx.federal}</span>
        <span className="text-xl font-black text-white tabular-nums">{s.federalSeats}</span>
      </div>

      {note && !s.isFT && (
        <p className="text-xs text-white/45 leading-relaxed">💡 {note}</p>
      )}

      {/* Per-constituency winners (Parliament + DUN) */}
      <div className="pt-1">
        <div className="text-white/45 text-[11px] uppercase tracking-wider mb-2">
          {lang === "bm" ? "Pemenang setiap kawasan" : "Winner by constituency"}
        </div>
        <SeatList stateId={s.id} />
      </div>
    </div>
  );
}

export default function ElectionContent() {
  const { lang } = useLanguage();
  const tx = t[lang];
  const [selectedId, setSelectedId] = useState<string | null>("selangor");
  const selected = STATES.find((s) => s.id === selectedId) ?? null;

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(tx.shareText)}`;

  return (
    <div>
      {/* Hero */}
      <div className="hero-bg">
        <div className="max-w-3xl mx-auto px-4 pt-10 pb-14 space-y-6">
          <div className="animate-in text-center space-y-1 pt-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
              {tx.badge}
            </div>
            <h1 className="text-4xl font-black text-white drop-shadow-lg">{tx.h1}</h1>
            <p className="text-white/60 text-sm">{tx.subtitle}</p>
          </div>

          {/* National GE15 summary */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-white font-bold">{tx.geTitle}</h2>
              <span className="text-white/45 text-xs">{tx.geSub} {GE15.turnout}</span>
            </div>

            {/* Stacked seat bar */}
            <SeatBar results={GE15.results.map((r) => ({ label: r.key, seats: r.seats, color: r.color }))} total={GE15.totalSeats} />

            {/* Result rows */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {GE15.results.map((r) => (
                <div key={r.key} className="flex items-center gap-2.5 text-sm">
                  <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="text-white/70 flex-1 leading-tight">{lang === "bm" ? r.nameBm : r.nameEn}</span>
                  <span className="text-white font-bold tabular-nums">{r.seats}</span>
                </div>
              ))}
            </div>

            {/* Outcome */}
            <div className="rounded-xl bg-red-500/10 border border-red-400/20 p-3.5">
              <div className="text-red-300 font-bold text-sm mb-1">⚖️ {tx.hung}</div>
              <p className="text-white/60 text-xs leading-relaxed">{tx.hungDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8 bg-[#0a0a0a]">

        {/* Key people */}
        <section className="animate-in space-y-3">
          <h2 className="text-lg font-bold text-white">{tx.peopleTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {KEY_PEOPLE.map((p, i) => (
              <div key={i} className="card-glass rounded-xl p-4 text-center space-y-1">
                <div className="text-2xl">{p.emoji}</div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 leading-tight">
                  {lang === "bm" ? p.roleBm : p.roleEn}
                </div>
                <div className="text-white font-bold text-sm leading-snug">{p.name}</div>
                <div className="text-white/45 text-[11px]">{p.party}</div>
              </div>
            ))}
          </div>
        </section>

        <AdBanner slot="8888888888" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Interactive map + panel */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white">{tx.mapTitle}</h2>
            <p className="text-white/45 text-xs">{tx.mapHint}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-5">
            {/* Map */}
            <div className="lg:col-span-3 card-glass rounded-2xl p-4">
              <MalaysiaMap selectedId={selectedId} onSelect={setSelectedId} />
              {/* Legend */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-white/10">
                {LEGEND.map((l) => (
                  <span key={l.key} className="inline-flex items-center gap-1.5 text-[11px] text-white/60">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
                    {lang === "bm" ? l.bm : l.en}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2 card-glass rounded-2xl p-5 min-h-[260px]">
              {selected ? (
                <StatePanel s={selected} />
              ) : (
                <div className="h-full flex items-center justify-center text-center text-white/40 text-sm">
                  {tx.tapState}
                </div>
              )}
            </div>
          </div>

          {/* Quick state chips */}
          <div className="flex flex-wrap gap-2">
            {STATES.filter((s) => !s.isFT).map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  selectedId === s.id
                    ? "bg-white/15 border-white/30 text-white"
                    : "bg-white/5 border-white/10 text-white/55 hover:text-white/80 hover:border-white/20"
                }`}
              >
                {lang === "bm" ? s.nameBm : s.nameEn}
              </button>
            ))}
          </div>
        </section>

        <AdBanner slot="9999999999" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* WhatsApp share */}
        <div className="text-center">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-lg"
          >
            {tx.shareBtn}
          </a>
        </div>

        {/* Article + FAQ */}
        <ElectionArticle />

        {/* Sources */}
        <div className="text-center text-xs text-white/25 space-y-1">
          <p>
            {tx.source}:{" "}
            <a href="https://www.spr.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">SPR</a>
            {" · "}
            <a href="https://en.wikipedia.org/wiki/2022_Malaysian_general_election" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">GE15</a>
            {" · "}
            <a href="https://en.wikipedia.org/wiki/2023_Malaysian_state_elections" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">PRN 2023</a>
          </p>
          <p>{tx.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
