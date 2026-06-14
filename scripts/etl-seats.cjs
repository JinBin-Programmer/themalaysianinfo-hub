// ETL: build per-constituency WINNERS (Parliament + DUN) for the election page.
// Sources: Thevesh/analysis-election-msia (GE15 parlimen + PRN15 dun),
//          TindakMalaysia/HISTORICAL-ELECTION-RESULTS (other state elections).
// Output: src/app/(site)/pilihanraya/_lib/seats.ts  (winners only).

const fs = require("fs");
const OUT = require("path").join(__dirname, "../src/app/(site)/pilihanraya/_lib/seats.ts");
const THV = "https://raw.githubusercontent.com/Thevesh/analysis-election-msia/main/data";
const TDK = "https://raw.githubusercontent.com/TindakMalaysia/HISTORICAL-ELECTION-RESULTS/main";

// ---- helpers ----
async function get(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error("fetch " + url + " -> " + r.status);
  return await r.text();
}
function parseCSV(text) {
  // strip BOM
  text = text.replace(/^﻿/, "");
  const rows = [];
  let i = 0, field = "", row = [], inQ = false;
  const pushF = () => { row.push(field); field = ""; };
  const pushR = () => { rows.push(row); row = []; };
  while (i < text.length) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i += 2; continue; } inQ = false; i++; continue; }
      field += c; i++; continue;
    }
    if (c === '"') { inQ = true; i++; continue; }
    if (c === ",") { pushF(); i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { pushF(); pushR(); i++; continue; }
    field += c; i++;
  }
  if (field.length || row.length) { pushF(); pushR(); }
  return rows;
}
function toObjects(text) {
  const rows = parseCSV(text).filter(r => r.length > 1 || (r.length === 1 && r[0] !== ""));
  const head = rows[0].map(h => h.trim());
  return rows.slice(1).map(r => Object.fromEntries(head.map((h, idx) => [h, (r[idx] ?? "").trim()])));
}
const STATE_ID = (s) => {
  const u = s.toUpperCase().replace(/^W\.?P\.?\s*/, "").replace(/WILAYAH PERSEKUTUAN\s*/, "").trim();
  const m = {
    "PERLIS": "perlis", "KEDAH": "kedah", "PULAU PINANG": "penang", "PENANG": "penang",
    "KELANTAN": "kelantan", "TERENGGANU": "terengganu", "PERAK": "perak", "PAHANG": "pahang",
    "SELANGOR": "selangor", "NEGERI SEMBILAN": "negeri", "MELAKA": "melaka", "MALACCA": "melaka",
    "JOHOR": "johor", "SABAH": "sabah", "SARAWAK": "sarawak",
    "KUALA LUMPUR": "kl", "PUTRAJAYA": "putrajaya", "LABUAN": "labuan",
  };
  return m[u] || null;
};
// component party -> coalition (2021–2025 alignments)
const COMP = {
  PH: "PH", PKR: "PH", DAP: "PH", AMANAH: "PH", PAN: "PH", UPKO: "PH",
  PN: "PN", PAS: "PN", BERSATU: "PN", PPBM: "PN", GERAKAN: "PN",
  BN: "BN", UMNO: "BN", MCA: "BN", MIC: "BN", PBRS: "BN",
  GPS: "GPS", PBB: "GPS", SUPP: "GPS", PRS: "GPS", PDP: "GPS",
  GRS: "GRS", PGRS: "GRS",
  WARISAN: "WARISAN",
};
// normalise a party/coalition token to our colour key
function coal(token) {
  if (!token) return "OTHER";
  let t = token.toUpperCase().trim();
  const paren = t.match(/\(([^)]+)\)\s*$/);
  if (paren) t = paren[1].trim();        // "PARTI ISLAM SE MALAYSIA (PAS)" -> "PAS"
  t = t.split(/[-–]/)[0].trim();         // "BN - UMNO" -> "BN"
  if (COMP[t]) return COMP[t];
  if (/PAKATAN HARAPAN/.test(t)) return "PH";
  if (/PERIKATAN NASIONAL/.test(t)) return "PN";
  if (/BARISAN NASIONAL/.test(t)) return "BN";
  if (/GABUNGAN PARTI SARAWAK/.test(t)) return "GPS";
  if (/GABUNGAN RAKYAT SABAH/.test(t)) return "GRS";
  if (/WARISAN/.test(t)) return "WARISAN";
  return "OTHER";
}
const num = (s) => { const n = parseInt(String(s).replace(/[^\d-]/g, ""), 10); return Number.isFinite(n) ? n : null; };
const cleanCode = (s) => s.replace(/\s+/g, ""); // "N. 01" -> "N.01", "P. 167" -> "P.167"
const splitParl = (s) => { const m = s.match(/^(\S+)\s+(.*)$/); return m ? [cleanCode(m[1]), m[2].trim()] : [cleanCode(s), ""]; };

// ---- accumulators ----
const SEATS = {}; // id -> { parlimen:[], dun:[] }
const ensure = (id) => (SEATS[id] ||= { parlimen: [], dun: [] });

// ================= PARLIAMENT (GE15) =================
async function parliament() {
  const cand = toObjects(await get(THV + "/candidates_ge15.csv"));
  const res = toObjects(await get(THV + "/results_parlimen_ge15.csv"));
  const majByParl = Object.fromEntries(res.map(r => [r.parlimen, num(r.majoriti)]));
  // winner per parlimen = max votes (robust vs result encoding)
  const groups = {};
  for (const r of cand) (groups[r.parlimen] ||= []).push(r);
  for (const [parl, arr] of Object.entries(groups)) {
    arr.sort((a, b) => num(b.votes) - num(a.votes));
    const w = arr[0];
    const id = STATE_ID(w.state); if (!id) continue;
    const [code, name] = splitParl(parl);
    ensure(id).parlimen.push({
      code, name,
      winner: (w.name_display || w.name || "").trim(),
      coalition: coal(w.party),
      majority: majByParl[parl] ?? null,
    });
  }
}

// ================= DUN: 2023 six states (Thevesh prn15) =================
async function dun2023() {
  const cand = toObjects(await get(THV + "/candidates_prn15.csv"));
  // group by state|parlimen|dun to compute majority
  const groups = {};
  for (const r of cand) {
    const k = r.state + "|" + r.parlimen + "|" + r.dun;
    (groups[k] ||= []).push(r);
  }
  for (const [k, arr] of Object.entries(groups)) {
    arr.sort((a, b) => num(b.votes) - num(a.votes));
    const win = arr.find(r => (r.result || "").toLowerCase() === "won") || arr[0];
    const id = STATE_ID(win.state); if (!id) continue;
    const second = arr.find(r => r !== win);
    const maj = second ? (num(win.votes) - num(second.votes)) : null;
    const [code, name] = splitParl(win.dun);
    ensure(id).dun.push({
      code, name,
      winner: (win.name_ballot || win.name || "").trim(),
      coalition: coal(win.acronym || win.party),
      majority: maj,
    });
  }
}

// ===== DUN: wide RESULTS files (winner = max-vote group) =====
function parseWide(objs, opts = {}) {
  const out = [];
  for (const r of objs) {
    const id = STATE_ID(r.STATE); if (!id) continue;
    // discover party groups via "<G> VOTE" headers
    let best = null;
    for (const key of Object.keys(r)) {
      // vote columns are either "<G> VOTE" or "<G> CANDIDATE VOTE" — strip the longer suffix first
      let g = null;
      if (key.endsWith(" CANDIDATE VOTE")) g = key.slice(0, -" CANDIDATE VOTE".length);
      else if (key.endsWith(" VOTE") && !key.endsWith(" VOTES")) g = key.slice(0, -" VOTE".length);
      else continue;
      const v = num(r[key]);
      if (v == null) continue;
      if (!best || v > best.v) best = { g, v };
    }
    if (!best) continue;
    const g = best.g;
    const candName = (r[g + " CANDIDATE"] || "").trim();
    // coalition label: standard groups are coalitions; OTHER/INDEPENDENT -> read party label
    let label = g;
    if (/^OTHER PARTY/i.test(g)) label = (r[g] || "OTHER").trim();
    else if (/^INDEPENDENT/i.test(g)) label = "BEBAS";
    const [scode, sname] = [cleanCode(r[opts.codeCol]), (r[opts.nameCol] || "").trim()];
    out.push({
      id,
      code: scode, name: sname,
      winner: candName,
      coalition: coal(label),
      majority: num(r["WINNING MAJORITY"]),
      uncontested: /YES|UNCONTESTED|1/i.test(r["UNCONTESTED VICTORY"] || "") ? true : undefined,
    });
  }
  return out;
}
async function dunWide(url, codeCol, nameCol) {
  const objs = toObjects(await get(url));
  for (const s of parseWide(objs, { codeCol, nameCol })) {
    const { id, ...seat } = s;
    ensure(id).dun.push(seat);
  }
}

// ===== DUN: WINNING_CANDIDATES + majority join =====
async function dunWinners(winUrl, resUrl, cols) {
  const win = toObjects(await get(winUrl));
  const res = toObjects(await get(resUrl));
  const majByCode = Object.fromEntries(res.map(r => [cleanCode(r["UNIQUE CODE"]), num(r["WINNING MAJORITY"])]));
  for (const r of win) {
    const id = STATE_ID(r.STATE); if (!id) continue;
    const uc = cleanCode(r["UNIQUE CODE"]);
    const wp = r["WINNING PARTY"] || "";
    ensure(id).dun.push({
      code: cleanCode(r[cols.codeCol]),
      name: (r[cols.nameCol] || "").trim(),
      winner: (r["WINNING CANDIDATE"] || "").trim(),
      coalition: coal(wp.split(/[-–]/)[0]),
      majority: majByCode[uc] ?? null,
      uncontested: /YES|UNCONTESTED|1/i.test(r["UNCONTESTED VICTORY"] || "") ? true : undefined,
    });
  }
}

(async () => {
  await parliament();
  await dun2023();
  // Perlis / Perak / Pahang (2022, concurrent with GE15)
  await dunWide(TDK + "/2022-ELECTION-RESULTS/MALAYSIA_2022_DUN_RESULTS.csv",
    "STATE CONSTITUENCY CODE", "STATE CONSTITUENCY NAME");
  // Melaka 2021
  await dunWide(TDK + "/2021-MELAKA-STATE-ELECTIONS/MELAKA_2021_ELECTION_RESULTS.csv",
    "STATE CONSTITUENCY CODE", "STATE CONSTITUENCY NAME");
  // Sarawak 2021
  await dunWide(TDK + "/2021-SARAWAK-STATE-ELECTIONS/SARAWAK_2021_ELECTION_RESULTS.csv",
    "STATE CONSTITUENCY CODE", "STATE CONSTITUENCY NAME");
  // Johor 2022 (winning candidates + majority)
  await dunWinners(
    TDK + "/2022-JOHOR-STATE-ELECTIONS/JOHOR_2022_DUN_WINNING_CANDIDATES.csv",
    TDK + "/2022-JOHOR-STATE-ELECTIONS/JOHOR_2022_ELECTION_RESULTS.csv",
    { codeCol: "STATE CONSTITUENCY CODE", nameCol: "STATE CONSTITUENCY NAME" });
  // Sabah 2025 (winning candidates + majority)
  await dunWinners(
    TDK + "/2025-SABAH-STATE-ELECTIONS/SABAH_2025_WINNING_CANDIDATES.csv",
    TDK + "/2025-SABAH-STATE-ELECTIONS/2025_SABAH_DUN_RESULTS.csv",
    { codeCol: "STATE CONSTITUENCY CODE", nameCol: "STATE CONSTITUENCY NAME" });

  // dedupe by code within each list, then sort by code number
  const codeNum = (c) => num(c) ?? 0;
  for (const id of Object.keys(SEATS)) {
    for (const lvl of ["parlimen", "dun"]) {
      const seen = new Set();
      SEATS[id][lvl] = SEATS[id][lvl].filter(s => { if (seen.has(s.code)) return false; seen.add(s.code); return true; });
      SEATS[id][lvl].sort((a, b) => codeNum(a.code) - codeNum(b.code));
    }
  }
  // log blank-winner seats for inspection
  for (const id of Object.keys(SEATS)) for (const lvl of ["parlimen", "dun"]) for (const s of SEATS[id][lvl]) if (!s.winner) console.log("BLANK", id, lvl, s.code, s.name, "->", s.coalition, "maj", s.majority);

  // ---- diagnostics ----
  let tp = 0, td = 0;
  const lines = [];
  for (const id of Object.keys(SEATS).sort()) {
    const p = SEATS[id].parlimen.length, d = SEATS[id].dun.length;
    tp += p; td += d;
    lines.push(`${id.padEnd(12)} P:${String(p).padStart(3)}  N:${String(d).padStart(3)}`);
  }
  console.log(lines.join("\n"));
  console.log("TOTAL parlimen:", tp, " dun:", td);
  // coalition sanity
  const coals = {};
  for (const id of Object.keys(SEATS)) for (const lvl of ["parlimen", "dun"]) for (const s of SEATS[id][lvl]) coals[s.coalition] = (coals[s.coalition] || 0) + 1;
  console.log("coalitions:", JSON.stringify(coals));
  // missing-winner check
  let blank = 0; for (const id of Object.keys(SEATS)) for (const lvl of ["parlimen", "dun"]) for (const s of SEATS[id][lvl]) if (!s.winner) blank++;
  console.log("blank winners:", blank);

  const ts = `// AUTO-GENERATED — per-constituency winners (Parliament + State Assembly).
// Sources: Thevesh/analysis-election-msia (GE15 + PRN15 2023) and
// TindakMalaysia/HISTORICAL-ELECTION-RESULTS (Perlis/Perak/Pahang 2022,
// Johor 2022, Melaka 2021, Sarawak 2021, Sabah 2025). Winners only.
// Do not hand-edit; regenerate via scripts/etl-seats.cjs.

export interface Seat {
  code: string;
  name: string;
  winner: string;
  coalition: string;
  majority: number | null;
  uncontested?: boolean;
}
export interface StateSeats { parlimen: Seat[]; dun: Seat[]; }

export const SEATS: Record<string, StateSeats> = ${JSON.stringify(SEATS)};
`;
  fs.writeFileSync(OUT, ts);
  console.log("wrote", OUT, "bytes:", fs.statSync(OUT).size);
})();
