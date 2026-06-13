// Malaysian election data — federal GE15 (2022) + most recent state (DUN) elections.
// Sources: Election Commission (SPR) results via Wikipedia / FMT / Bernama / MalaysiaNow.
// Per-state "last election" = the most recent state assembly election that state held.
// Reviewed: June 2026 (includes the 29 Nov 2025 Sabah state election).

export type CoalitionKey = "PH" | "PN" | "BN" | "GPS" | "GRS" | "WARISAN" | "OTHER" | "FT";

/** Shared coalition colours used by the map, legend and result bars. */
export const COLORS: Record<string, string> = {
  PH: "#e11d48",      // Pakatan Harapan — rose
  PN: "#4338ca",      // Perikatan Nasional — indigo
  BN: "#0284c7",      // Barisan Nasional — sky blue
  GPS: "#059669",     // Gabungan Parti Sarawak — emerald
  GRS: "#d97706",     // Gabungan Rakyat Sabah — amber
  WARISAN: "#0d9488", // Warisan — teal
  OTHER: "#64748b",   // Independents / others — slate
  FT: "#475569",      // Federal Territory — dark slate
  PH_BN: "#be123c",   // Unity bloc (PH + BN) — deep rose
};

export interface SeatResult {
  /** Short label shown on the bar, e.g. "PN", "PH+BN", "Warisan". */
  label: string;
  seats: number;
  color: string;
}

export interface StateInfo {
  id: string;
  nameBm: string;
  nameEn: string;
  abbr: string;
  /** Ruling coalition of the state government — used to colour the map. */
  gov: CoalitionKey;
  isFT?: boolean;
  /** Head of government */
  leaderTitleBm?: string;
  leaderTitleEn?: string;
  leaderName?: string;
  leaderParty?: string;
  leaderSinceBm?: string;
  leaderSinceEn?: string;
  /** Most recent state assembly (DUN) election */
  electionBm?: string;
  electionEn?: string;
  stateSeats?: number;
  results?: SeatResult[];
  /** Parliamentary (federal) seats this state sends to Dewan Rakyat */
  federalSeats: number;
  noteBm?: string;
  noteEn?: string;
  /** Map tile geometry (viewBox 0 0 720 372) */
  x: number;
  y: number;
  w: number;
  h: number;
}

export const STATES: StateInfo[] = [
  {
    id: "perlis", nameBm: "Perlis", nameEn: "Perlis", abbr: "PLS", gov: "PN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Abu Bakar Hamzah", leaderParty: "PAS · PN",
    leaderSinceBm: "28 Dis 2025", leaderSinceEn: "28 Dec 2025",
    electionBm: "PRN serentak PRU15 · 19 Nov 2022", electionEn: "Held with GE15 · 19 Nov 2022",
    stateSeats: 15,
    results: [
      { label: "PN", seats: 14, color: COLORS.PN },
      { label: "PH", seats: 1, color: COLORS.PH },
    ],
    federalSeats: 3,
    noteBm: "Kerajaan negeri bukan-BN pertama dalam sejarah Perlis.",
    noteEn: "First non-BN state government in Perlis history.",
    x: 66, y: 14, w: 52, h: 24,
  },
  {
    id: "kedah", nameBm: "Kedah", nameEn: "Kedah", abbr: "KDH", gov: "PN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Muhammad Sanusi Md Nor", leaderParty: "PAS · PN",
    leaderSinceBm: "17 Mei 2020", leaderSinceEn: "17 May 2020",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 36,
    results: [
      { label: "PN", seats: 33, color: COLORS.PN },
      { label: "PH+BN", seats: 3, color: COLORS.PH_BN },
    ],
    federalSeats: 15,
    x: 50, y: 42, w: 80, h: 56,
  },
  {
    id: "penang", nameBm: "Pulau Pinang", nameEn: "Penang", abbr: "PNG", gov: "PH",
    leaderTitleBm: "Ketua Menteri", leaderTitleEn: "Chief Minister",
    leaderName: "Chow Kon Yeow", leaderParty: "DAP · PH",
    leaderSinceBm: "14 Mei 2018", leaderSinceEn: "14 May 2018",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 40,
    results: [
      { label: "PH+BN", seats: 29, color: COLORS.PH_BN },
      { label: "PN", seats: 11, color: COLORS.PN },
    ],
    federalSeats: 13,
    x: 14, y: 86, w: 40, h: 30,
  },
  {
    id: "kelantan", nameBm: "Kelantan", nameEn: "Kelantan", abbr: "KTN", gov: "PN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Mohd Nassuruddin Daud", leaderParty: "PAS · PN",
    leaderSinceBm: "15 Ogos 2023", leaderSinceEn: "15 Aug 2023",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 45,
    results: [
      { label: "PN", seats: 43, color: COLORS.PN },
      { label: "BN", seats: 1, color: COLORS.BN },
      { label: "PH", seats: 1, color: COLORS.PH },
    ],
    federalSeats: 14,
    x: 142, y: 40, w: 76, h: 54,
  },
  {
    id: "terengganu", nameBm: "Terengganu", nameEn: "Terengganu", abbr: "TRG", gov: "PN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Ahmad Samsuri Mokhtar", leaderParty: "PAS · PN",
    leaderSinceBm: "10 Mei 2018", leaderSinceEn: "10 May 2018",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 32,
    results: [
      { label: "PN", seats: 32, color: COLORS.PN },
    ],
    federalSeats: 8,
    noteBm: "PN menyapu bersih kesemua 32 kerusi. Ahmad Samsuri kini Ketua Pembangkang Persekutuan (2026).",
    noteEn: "PN swept all 32 seats. Ahmad Samsuri is now federal Opposition Leader (2026).",
    x: 196, y: 98, w: 64, h: 64,
  },
  {
    id: "perak", nameBm: "Perak", nameEn: "Perak", abbr: "PRK", gov: "BN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Saarani Mohamad", leaderParty: "UMNO · BN",
    leaderSinceBm: "10 Dis 2022", leaderSinceEn: "10 Dec 2022",
    electionBm: "PRN serentak PRU15 · 19 Nov 2022", electionEn: "Held with GE15 · 19 Nov 2022",
    stateSeats: 59,
    results: [
      { label: "PN", seats: 26, color: COLORS.PN },
      { label: "PH", seats: 24, color: COLORS.PH },
      { label: "BN", seats: 9, color: COLORS.BN },
    ],
    federalSeats: 24,
    noteBm: "Dewan tergantung — kerajaan perpaduan PH+BN (33 kerusi).",
    noteEn: "Hung assembly — PH+BN unity government (33 seats).",
    x: 58, y: 104, w: 80, h: 82,
  },
  {
    id: "pahang", nameBm: "Pahang", nameEn: "Pahang", abbr: "PHG", gov: "BN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Wan Rosdy Wan Ismail", leaderParty: "UMNO · BN",
    leaderSinceBm: "15 Mei 2018", leaderSinceEn: "15 May 2018",
    electionBm: "PRN serentak PRU15 · 19 Nov 2022", electionEn: "Held with GE15 · 19 Nov 2022",
    stateSeats: 42,
    results: [
      { label: "PN", seats: 17, color: COLORS.PN },
      { label: "BN", seats: 16, color: COLORS.BN },
      { label: "PH", seats: 9, color: COLORS.PH },
    ],
    federalSeats: 14,
    noteBm: "Kerajaan perpaduan BN+PH (25 kerusi).",
    noteEn: "BN+PH unity government (25 seats).",
    x: 146, y: 146, w: 112, h: 88,
  },
  {
    id: "selangor", nameBm: "Selangor", nameEn: "Selangor", abbr: "SGR", gov: "PH",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Amirudin Shari", leaderParty: "PKR · PH",
    leaderSinceBm: "19 Jun 2018", leaderSinceEn: "19 Jun 2018",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 56,
    results: [
      { label: "PH", seats: 32, color: COLORS.PH },
      { label: "PN", seats: 22, color: COLORS.PN },
      { label: "BN", seats: 2, color: COLORS.BN },
    ],
    federalSeats: 22,
    noteBm: "Negeri terkaya & terpadat — kekal di bawah PH (PH+BN 34 kerusi).",
    noteEn: "Richest, most populous state — retained by PH (PH+BN 34 seats).",
    x: 52, y: 192, w: 64, h: 56,
  },
  {
    id: "kl", nameBm: "Kuala Lumpur", nameEn: "Kuala Lumpur", abbr: "KL", gov: "FT", isFT: true,
    leaderTitleBm: "Wilayah Persekutuan", leaderTitleEn: "Federal Territory",
    leaderName: "Ditadbir Kerajaan Persekutuan", leaderParty: "—",
    noteBm: "Wilayah Persekutuan — tiada Dewan Undangan Negeri. 11 kerusi Parlimen.",
    noteEn: "Federal Territory — no state assembly. 11 Parliament seats.",
    federalSeats: 11,
    x: 102, y: 206, w: 26, h: 22,
  },
  {
    id: "putrajaya", nameBm: "Putrajaya", nameEn: "Putrajaya", abbr: "PJY", gov: "FT", isFT: true,
    leaderTitleBm: "Wilayah Persekutuan", leaderTitleEn: "Federal Territory",
    leaderName: "Pusat pentadbiran Persekutuan", leaderParty: "—",
    noteBm: "Wilayah Persekutuan — pusat pentadbiran kerajaan. 1 kerusi Parlimen.",
    noteEn: "Federal Territory — federal administrative capital. 1 Parliament seat.",
    federalSeats: 1,
    x: 102, y: 232, w: 26, h: 14,
  },
  {
    id: "negeri", nameBm: "Negeri Sembilan", nameEn: "Negeri Sembilan", abbr: "NSN", gov: "PH",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Aminuddin Harun", leaderParty: "PKR · PH",
    leaderSinceBm: "12 Mei 2018", leaderSinceEn: "12 May 2018",
    electionBm: "PRN · 12 Ogos 2023", electionEn: "State election · 12 Aug 2023",
    stateSeats: 36,
    results: [
      { label: "PH+BN", seats: 31, color: COLORS.PH_BN },
      { label: "PN", seats: 5, color: COLORS.PN },
    ],
    federalSeats: 8,
    x: 72, y: 254, w: 62, h: 44,
  },
  {
    id: "melaka", nameBm: "Melaka", nameEn: "Malacca", abbr: "MLK", gov: "BN",
    leaderTitleBm: "Ketua Menteri", leaderTitleEn: "Chief Minister",
    leaderName: "Ab Rauf Yusoh", leaderParty: "UMNO · BN",
    leaderSinceBm: "31 Mac 2023", leaderSinceEn: "31 Mar 2023",
    electionBm: "PRN · 20 Nov 2021", electionEn: "State election · 20 Nov 2021",
    stateSeats: 28,
    results: [
      { label: "BN", seats: 21, color: COLORS.BN },
      { label: "PH", seats: 5, color: COLORS.PH },
      { label: "PN", seats: 2, color: COLORS.PN },
    ],
    federalSeats: 6,
    x: 84, y: 302, w: 50, h: 28,
  },
  {
    id: "johor", nameBm: "Johor", nameEn: "Johor", abbr: "JHR", gov: "BN",
    leaderTitleBm: "Menteri Besar", leaderTitleEn: "Menteri Besar",
    leaderName: "Onn Hafiz Ghazi", leaderParty: "UMNO · BN",
    leaderSinceBm: "15 Mac 2022", leaderSinceEn: "15 Mar 2022",
    electionBm: "PRN · 12 Mac 2022", electionEn: "State election · 12 Mar 2022",
    stateSeats: 56,
    results: [
      { label: "BN", seats: 40, color: COLORS.BN },
      { label: "PH", seats: 12, color: COLORS.PH },
      { label: "PN", seats: 3, color: COLORS.PN },
      { label: "MUDA", seats: 1, color: COLORS.OTHER },
    ],
    federalSeats: 26,
    noteBm: "BN menang besar dengan majoriti dua pertiga (40/56 kerusi).",
    noteEn: "BN won a two-thirds majority (40/56 seats).",
    x: 130, y: 274, w: 120, h: 82,
  },
  {
    id: "labuan", nameBm: "Labuan", nameEn: "Labuan", abbr: "LBN", gov: "FT", isFT: true,
    leaderTitleBm: "Wilayah Persekutuan", leaderTitleEn: "Federal Territory",
    leaderName: "Ditadbir Kerajaan Persekutuan", leaderParty: "—",
    noteBm: "Wilayah Persekutuan di Borneo — tiada DUN. 1 kerusi Parlimen.",
    noteEn: "Federal Territory off Borneo — no state assembly. 1 Parliament seat.",
    federalSeats: 1,
    x: 468, y: 146, w: 24, h: 18,
  },
  {
    id: "sabah", nameBm: "Sabah", nameEn: "Sabah", abbr: "SBH", gov: "GRS",
    leaderTitleBm: "Ketua Menteri", leaderTitleEn: "Chief Minister",
    leaderName: "Hajiji Noor", leaderParty: "Gagasan Rakyat · GRS",
    leaderSinceBm: "29 Sep 2020 (kekal 2025)", leaderSinceEn: "29 Sep 2020 (retained 2025)",
    electionBm: "PRN · 29 Nov 2025", electionEn: "State election · 29 Nov 2025",
    stateSeats: 73,
    results: [
      { label: "GRS", seats: 29, color: COLORS.GRS },
      { label: "Warisan", seats: 25, color: COLORS.WARISAN },
      { label: "BN", seats: 6, color: COLORS.BN },
      { label: "Bebas", seats: 5, color: COLORS.OTHER },
      { label: "UPKO", seats: 3, color: COLORS.OTHER },
      { label: "Lain", seats: 5, color: COLORS.OTHER },
    ],
    federalSeats: 25,
    noteBm: "PRN terbaharu (Nov 2025). GRS pimpin kerajaan dengan BN & PH.",
    noteEn: "Most recent election (Nov 2025). GRS leads government with BN & PH.",
    x: 556, y: 104, w: 150, h: 104,
  },
  {
    id: "sarawak", nameBm: "Sarawak", nameEn: "Sarawak", abbr: "SWK", gov: "GPS",
    leaderTitleBm: "Premier", leaderTitleEn: "Premier",
    leaderName: "Abang Johari Openg", leaderParty: "PBB · GPS",
    leaderSinceBm: "13 Jan 2017", leaderSinceEn: "13 Jan 2017",
    electionBm: "PRN · 18 Dis 2021", electionEn: "State election · 18 Dec 2021",
    stateSeats: 82,
    results: [
      { label: "GPS", seats: 76, color: COLORS.GPS },
      { label: "PSB", seats: 4, color: COLORS.OTHER },
      { label: "DAP", seats: 2, color: COLORS.PH },
    ],
    federalSeats: 31,
    noteBm: "Kemenangan padu GPS (76/82). Negeri terbesar Malaysia.",
    noteEn: "GPS landslide (76/82). Malaysia's largest state.",
    x: 384, y: 192, w: 248, h: 128,
  },
];

/* ── Federal — 15th General Election (PRU15), 19 November 2022 ── */

export interface NationalResult {
  key: string;
  nameBm: string;
  nameEn: string;
  seats: number;
  color: string;
}

export const GE15 = {
  dateBm: "19 November 2022",
  dateEn: "19 November 2022",
  totalSeats: 222,
  majority: 112,
  turnout: "73.9%",
  results: [
    { key: "PH", nameBm: "Pakatan Harapan", nameEn: "Pakatan Harapan", seats: 82, color: COLORS.PH },
    { key: "PN", nameBm: "Perikatan Nasional", nameEn: "Perikatan Nasional", seats: 74, color: COLORS.PN },
    { key: "BN", nameBm: "Barisan Nasional", nameEn: "Barisan Nasional", seats: 30, color: COLORS.BN },
    { key: "GPS", nameBm: "Gabungan Parti Sarawak", nameEn: "Gabungan Parti Sarawak", seats: 23, color: COLORS.GPS },
    { key: "GRS", nameBm: "Gabungan Rakyat Sabah", nameEn: "Gabungan Rakyat Sabah", seats: 6, color: COLORS.GRS },
    { key: "WARISAN", nameBm: "Warisan", nameEn: "Warisan", seats: 3, color: COLORS.WARISAN },
    { key: "OTHER", nameBm: "Lain-lain / Bebas", nameEn: "Others / Independents", seats: 4, color: COLORS.OTHER },
  ] as NationalResult[],
};

export interface Person {
  roleBm: string;
  roleEn: string;
  name: string;
  party: string;
  emoji: string;
}

export const KEY_PEOPLE: Person[] = [
  { roleBm: "Perdana Menteri ke-10", roleEn: "10th Prime Minister", name: "Anwar Ibrahim", party: "PKR · PH", emoji: "🇲🇾" },
  { roleBm: "Timbalan PM", roleEn: "Deputy Prime Minister", name: "Ahmad Zahid Hamidi", party: "UMNO · BN", emoji: "🤝" },
  { roleBm: "Timbalan PM", roleEn: "Deputy Prime Minister", name: "Fadillah Yusof", party: "PBB · GPS", emoji: "🤝" },
  { roleBm: "Ketua Pembangkang", roleEn: "Opposition Leader", name: "Ahmad Samsuri Mokhtar", party: "PAS · PN", emoji: "⚖️" },
];

/** Legend entries for the map. */
export const LEGEND: { key: CoalitionKey; bm: string; en: string; color: string }[] = [
  { key: "PH", bm: "Pakatan Harapan", en: "Pakatan Harapan", color: COLORS.PH },
  { key: "PN", bm: "Perikatan Nasional", en: "Perikatan Nasional", color: COLORS.PN },
  { key: "BN", bm: "Barisan Nasional (Perpaduan)", en: "Barisan Nasional (Unity)", color: COLORS.BN },
  { key: "GPS", bm: "GPS — Sarawak", en: "GPS — Sarawak", color: COLORS.GPS },
  { key: "GRS", bm: "GRS — Sabah", en: "GRS — Sabah", color: COLORS.GRS },
  { key: "FT", bm: "Wilayah Persekutuan", en: "Federal Territory", color: COLORS.FT },
];

/* ── Geographic SVG path data for the state map (world coords, reframed to Malaysia). ── */
/* Source: SVG-World-Map (raphaellepuschitz), plate/ISO ids remapped to our route ids. */
export interface GeoData {
  bbox: { minX: number; minY: number; w: number; h: number };
  centers: Record<string, { cx: number; cy: number }>;
  paths: Record<string, string>;
}

export const GEO: GeoData = {"bbox":{"minX":748.48,"minY":230.23,"w":54.51,"h":20.73},"centers":{"selangor":{"cx":753.58,"cy":243.41},"perak":{"cx":752.63,"cy":238.58},"perlis":{"cx":750.43,"cy":233.33},"kedah":{"cx":751.41,"cy":235.32},"penang":{"cx":750.9,"cy":236.88},"melaka":{"cx":755.8,"cy":246.22},"negeri":{"cx":755.65,"cy":244.64},"johor":{"cx":759.25,"cy":246.99},"terengganu":{"cx":757.61,"cy":238.14},"pahang":{"cx":756.51,"cy":242.31},"kelantan":{"cx":755.1,"cy":236.75},"sarawak":{"cx":784.7,"cy":244.38},"sabah":{"cx":797.37,"cy":236.04},"labuan":{"cx":791.7,"cy":236.85},"putrajaya":{"cx":754.2,"cy":244.27},"kl":{"cx":754.17,"cy":243.62}},"paths":{"selangor":"M751.91,241.474c0.067,0.062,0.153,0.109,0.184,0.182c0.263,0.655,0.993,1.114,1.282,1.759c0.089,0.206,0.303,0.621,0.146,0.842c-0.14,0.197-0.223,0.261,0.036,0.438c0.272,0.189,0.432,0.499,0.769,0.586c0.06,0.019,0.092,0.061,0.146,0.074c0.087-0.234,0.193-0.438,0.254-0.695c0.136-0.545,0.341-0.849,0.516-1.247c-0.205-0.022-0.411-0.025-0.699-0.293c-0.198-0.188-0.367-0.63-0.548-0.989c-0.116,0-0.21,0.099-0.329,0.074c-0.418-0.09-0.865-0.335-1.282-0.55C752.215,241.572,752.072,241.547,751.91,241.474L751.91,241.474z M754.146,243.306c0.07-0.013,0.127,0.02,0.184,0.073c0.112,0.111,0.112,0.513-0.074,0.55c-0.186,0.039-0.362-0.328-0.291-0.476C753.996,243.378,754.078,243.319,754.146,243.306L754.146,243.306z M754.146,244.112c0.08-0.033,0.186,0.024,0.184,0.109c-0.003,0.088-0.177,0.238-0.258,0.183S754.066,244.145,754.146,244.112L754.146,244.112z","perak":"M750.74,237.812c0.399,0.491,0.752,1.208,0.514,1.868c-0.123,0.339,0.341,1.311,0.809,1.244c-0.6,0.194-0.361,0.355-0.146,0.551c0.161,0.073,0.306,0.098,0.476,0.183c0.419,0.215,0.866,0.46,1.282,0.551c0.12,0.024,0.214-0.074,0.328-0.074c-0.134-0.267-0.287-0.421-0.401-0.731c-0.272-0.73-0.479-1.535-0.516-2.053c-0.07-1.032,0.221-1.665,0.516-2.089c0.294-0.42,0.565-0.046,0.768-0.513c0.146-0.328-0.077-0.965-0.222-1.501c-0.119-0.158-0.206-0.327-0.474-0.292c-0.434,0.056-0.566,0.667-0.843,0.729c-0.258,0.061-0.259-0.115-0.332-0.22c-0.035,0.101-0.111,0.116-0.145,0.22c-0.217,0.669-0.441,1.378-0.809,1.651c-0.294,0.22-0.544,0.337-0.807,0.439C750.744,237.779,750.734,237.803,750.74,237.812L750.74,237.812z","perlis":"M751.179,233.121c-0.218-0.031-0.447-0.031-0.661-0.111c-0.37-0.138-0.527-0.762-0.66-0.437c-0.091,0.224-0.055,0.547-0.183,0.768c0.148,0.355,0.238,0.719,0.402,1.062c0.064-0.146,0.057-0.293,0.146-0.438C750.414,233.659,750.833,233.396,751.179,233.121L751.179,233.121z","kedah":"M751.179,233.121\tc-0.346,0.272-0.765,0.533-0.953,0.842c-0.089,0.145-0.083,0.292-0.146,0.438c0.163,0.343,0.402,0.664,0.402,1.064\tc0,0.122,0.073,0.333,0.073,0.514c0.152,0.077,0.355,0.012,0.475,0.146c0.291,0.327,0.261,0.897,0.182,1.393\tc0.111-0.062,0.21-0.092,0.331-0.182c0.366-0.272,0.589-0.979,0.807-1.651c0.035-0.104,0.11-0.12,0.146-0.22\tc-0.163-0.233-0.111-0.618-0.037-0.806c0.272-0.681-0.492-0.655-0.696-0.916c-0.131-0.172-0.161-0.518-0.402-0.585\tC751.307,233.141,751.24,233.129,751.179,233.121L751.179,233.121z M748.924,233.219\tc-0.126,0.138-0.273,0.252-0.442,0.339C748.761,234.1,749.352,233.565,748.924,233.219","penang":"M751.217,237.517\tc0.074-0.495,0.108-1.064-0.183-1.393c-0.122-0.134-0.322-0.069-0.476-0.146c-0.007,0.624-0.073,1.442,0.182,1.797\tC750.895,237.714,751.06,237.606,751.217,237.517L751.217,237.517z M750.336,236.411\tc-0.32-0.139-0.353,0.162-0.329,0.393C750.044,237.292,750.397,236.732,750.336,236.411","melaka":"M756.638,245.87c-0.33-0.111-0.609-0.32-0.915-0.293c-0.241,0.023-0.523,0.058-0.768,0.146c0.21,0.31,0.575,0.688,0.843,0.879c0.206,0.148,0.458,0.208,0.697,0.293C756.555,246.543,756.585,246.217,756.638,245.87z","negeri":"M755.245,243.415c-0.175,0.397-0.377,0.701-0.514,1.245c-0.062,0.256-0.171,0.462-0.257,0.697c0.14,0.041,0.282,0.062,0.368,0.221c0.023,0.041,0.076,0.102,0.109,0.146c0.244-0.088,0.526-0.123,0.769-0.146c0.308-0.024,0.585,0.182,0.916,0.294c0.017-0.112,0.006-0.211,0.035-0.329c0.128-0.505,0.088-0.814,0.146-1.246c-0.205-0.26-0.425-0.52-0.658-0.661c-0.28-0.171-0.527-0.143-0.768-0.146C755.351,243.488,755.287,243.419,755.245,243.415L755.245,243.415z","johor":"M756.82,244.295\tc-0.059,0.435-0.019,0.741-0.146,1.248c-0.123,0.495-0.101,0.89-0.181,1.354c0.113,0.042,0.237,0.065,0.327,0.147\tc0.174,0.158,0.298,0.361,0.477,0.513c0.696,0.59,1.866,0.836,2.16,1.799c0.277-0.136,1.013-0.624,1.317-0.406\tc0.303,0.224,0.075-0.51,0.036-0.583c0.092,0.195,0.294,0.335,0.514,0.33c-0.568,0.399,0.681,0.991,0.403-0.11\tc-0.205-0.818-0.736-1.497-0.953-2.307c-0.13-0.488-0.56-0.764-0.916-1.1c-0.107,0.179-0.155,0.424-0.329,0.517\tc-0.329,0.17-0.624,0.148-0.916,0.036c-0.287-0.114-0.582-0.31-0.877-0.476C757.387,245.05,757.112,244.663,756.82,244.295\tL756.82,244.295z M761.379,244.524\tc-0.108,0.065-0.16,0.16-0.158,0.288C761.523,244.867,761.576,244.77,761.379,244.524","terengganu":"M756.563,235.137c-0.026,0.043-0.084,0.065-0.108,0.108c-0.174,0.321-0.289,0.677-0.369,0.991c-0.154,0.625-0.074,1.312,0.184,1.797c0.26,0.482,0.916,0.501,1.172,0.952c0.258,0.452-0.011,1.256,0.258,1.612c0.271,0.355,0.423,0.545,0.951,0.438c0.193-0.039,0.351-0.395,0.552-0.585c0.009-0.11,0.029-0.223,0.035-0.33c0.049-1.01-0.242-1.901-0.697-2.783c-0.45-0.875-1.112-1.446-1.868-2.052C756.622,235.242,756.606,235.184,756.563,235.137L756.563,235.137z","pahang":"M753.156,239.679c0.073,0.503,0.212,1.106,0.438,1.72c0.271,0.73,0.605,1.396,0.953,1.722c0.348,0.325,0.601,0.363,0.845,0.368c0.24,0.004,0.487-0.024,0.769,0.147c0.56,0.34,0.978,1.273,1.573,1.612c0.298,0.168,0.588,0.364,0.878,0.474c0.289,0.112,0.586,0.132,0.916-0.036c0.174-0.088,0.222-0.335,0.329-0.515c-0.142-0.133-0.272-0.278-0.367-0.439c-0.437-0.73,0.024-1.615-0.222-2.344c-0.165-0.487-0.287-0.558-0.184-1.099c0.054-0.273,0.083-0.561,0.109-0.844c-0.2,0.19-0.354,0.549-0.55,0.584c-0.526,0.107-0.682-0.081-0.953-0.438c-0.269-0.357,0-1.163-0.255-1.611c-0.057-0.1-0.17-0.152-0.256-0.221c-0.073,0.058-0.154,0.231-0.222,0.255c-0.195,0.073-0.418,0.042-0.698,0.11c-0.556,0.138-1.107-0.255-1.829-0.147c-0.362,0.054-0.769,0.393-1.173,0.661C753.23,239.665,753.197,239.655,753.156,239.679L753.156,239.679z","kelantan":"M753.156,239.679c0.037-0.026,0.073-0.012,0.109-0.037c0.403-0.268,0.813-0.607,1.172-0.66c0.723-0.108,1.275,0.283,1.831,0.146c0.277-0.07,0.499-0.038,0.696-0.11c0.069-0.025,0.149-0.199,0.222-0.254c-0.306-0.236-0.715-0.359-0.916-0.734c-0.257-0.482-0.336-1.167-0.183-1.795c0.076-0.314,0.19-0.669,0.369-0.989c0.024-0.045,0.078-0.067,0.109-0.11c-0.205-0.233-0.329-0.519-0.514-0.768c-0.224-0.305-0.729-0.443-1.064-0.551c0.37,0.315-0.274,1.507-0.55,1.613c-0.122,0.049-0.221-0.088-0.293-0.183c0.14,0.536,0.366,1.172,0.223,1.502c-0.205,0.466-0.475,0.09-0.77,0.514c-0.295,0.421-0.582,1.057-0.514,2.089C753.088,239.431,753.146,239.584,753.156,239.679L753.156,239.679z","sarawak":"M781.192,245.676\tc0.025,0.18,0.057,0.271,0.263,0.286c-0.141-0.362,0.043-0.828-0.313-1.098C781.12,245.137,781.208,245.402,781.192,245.676 M793.273,240.265\tc-0.263-0.181-0.578-0.332-0.662-0.584c-0.248-0.764,0.386-1.1,0.074-1.613c-0.065-0.106-0.272-0.105-0.369-0.183\tc-0.035,0.029-0.083,0.09-0.109,0.111c-0.203,0.163-0.959-0.201-0.515,0.402c0.295,0.397,0.312,1.011,0.369,1.539\tc-0.853-0.19-0.755-1.167-0.878-1.831c-0.365,0.401-0.798,0.421-0.552,1.209c0.095,0.299,0.067,1.602-0.292,1.502\tc-0.271-0.074-1.009-0.759-1.099-1.026c-0.152-0.439-0.082-0.678-0.845-0.697c-0.057,1.042-0.516,1.836-1.281,2.528\tc-0.6,0.54-0.607,1.503-1.283,1.978c-0.78,0.551-2.109,0.766-3.042,0.916c-0.585,0.094-2.009,0.938-1.062,1.649\tc-0.271-0.014-0.532-0.181-0.808-0.183c-0.074,0.285,0.179,0.568-0.074,0.808c0.183-0.017,0.368-0.02,0.55-0.037\tc-0.223,0.222-0.398,0.073-0.476,0.439c-0.03,0.153-0.083,0.295-0.146,0.439c-0.096,0.298-0.071,0.588,0.223,0.768\tc-0.304-0.303-0.603-0.018-0.514,0.329c0.136,0.533,0.69,0.229,0.953,0.584c-0.374-0.035-0.767-0.07-1.026-0.369\tc-0.285-0.327-0.471-0.061-0.806-0.182c-0.218-0.079-0.807-0.207-0.732-0.514c0.025-0.102-0.355-0.124-0.368-0.369\tc0.033,0.864-1.992,0.053-1.905-0.877c-0.059,0.388-0.465,0.667,0.037,0.953c0.121,0.167,0.158,0.688,0.328,0.878\tc0.281,0.319,0.626,0.559,1.024,0.878c0.157,0.125,0.361,0.599,0.514,0.66c0.277,0.111,0.689,0.593,1.246,0.33\tc0.462-0.22,0.853-0.485,1.393-0.439c0.541,0.045,1.15,0.271,1.648,0.074c0.031-0.012,0.705-0.384,0.732-0.438\tc0.149-0.279,0.157-0.602,0.328-0.843c0.35-0.486,1.893-0.719,2.091-0.293c0.154,0.33,0.907,0.678,1.501,0.769\tc0.561,0.084,0.74-0.119,1.174-0.476c0.268-0.223,0.574,0.139,0.876-0.073c0.525-0.373,0.471-0.004,0.878,0\tc-0.103-0.503,0.954-1.616,0.659-1.942c-0.505-0.563,0.639-1.282,1.064-1.429c-0.212-0.263-0.683-1.402,0.074-1.502\tc0.706-0.093,0.483-0.337,0.622-0.954c0.088-0.384,0.284-0.19,0.254-0.66c-0.016-0.276-0.141-0.829-0.107-1.099\tc0.041-0.338,0.134-0.76,0.291-1.064C793.246,240.312,793.253,240.289,793.273,240.265L793.273,240.265z","sabah":"M798.726,240.442\tc-0.019-0.096-0.035-0.192-0.053-0.288c0.254-0.023,0.46,0.126,0.655,0.263C799.125,240.407,798.925,240.415,798.726,240.442 M795.951,230.941\tc0.156-0.089,0.262-0.221,0.314-0.392C796.057,230.586,795.913,230.721,795.951,230.941 M796.576,230.603\tc-0.09,0.173-0.078,0.335,0.027,0.498C797.165,230.903,796.937,230.228,796.576,230.603 M797.359,232.566\tc0.108,0.02,0.205-0.008,0.292-0.077C797.554,232.512,797.456,232.538,797.359,232.566 M800.608,238.846\tc0.151,0.16,0.324,0.185,0.521,0.078C800.957,238.883,800.783,238.859,800.608,238.846 M795.798,231.51\tc-0.471,0.451-0.438,1.19-0.806,1.682c-0.17,0.225-0.279,0.54-0.439,0.734c-0.13,0.159-0.287,0.041-0.402,0.292\tc-0.202,0.439-0.292,0.923-0.516,1.355c-0.144,0.284-0.942,0.992-0.878,0.329c-0.239,0.336-1.004,0.942-0.22,1.245\tc0.452,0.174,0.024,0.533-0.221,0.731c0.096,0.078,0.302,0.077,0.366,0.182c0.313,0.515-0.322,0.851-0.074,1.611\tc0.083,0.255,0.4,0.406,0.662,0.587c0.125-0.183,0.348-0.264,0.401-0.515c0.427,0.146,0.596,0.36,1.099,0.073\tc0.253-0.139,0.758,0.61,0.77-0.146c0.591,0.557,1.467-0.008,1.943,0.329c0.206,0.147,0.777,0.567,1.062,0.37\tc0.188-0.13-0.025-0.545,0.037-0.733c0.697,0.589,1.046,0.361,1.866,0.293c0.258-0.023,0.648,0.043,0.807-0.222\tc0.151-0.243-0.071-0.491-0.328-0.33c0.071-0.44-0.764-0.587-0.916-0.953c-0.391-0.926,0.878-0.467,1.211-0.438\tc0.474,0.037,1.771-0.459,1.756-1.062c-0.009-0.421-0.73-0.681-0.988-0.331c-0.131-0.262-0.668-0.852-0.989-0.515\tc-0.046-0.402-0.601-1.102-1.063-0.806c-0.218,0.137-0.748,0.677-0.808,0.109c0.287-0.105,0.812-0.521,0.223-0.768\tc-0.314-0.131-0.403,0.205-0.621,0.329c-0.272,0.156-0.583-0.059-0.879,0.109c0.472-0.176,0.528-0.287,0.402-0.769\tc-0.106-0.41,0.297-0.285,0.33-0.583c0.051-0.456-0.649-0.648-0.698-1.025c-0.128,0.922-1.001-1.094-1.025-1.1\tc-0.37-0.067-0.653,1.093-0.953,1.282C795.735,232.406,796.163,231.941,795.798,231.51L795.798,231.51z","labuan":"M791.553,236.934c0.268,0.098,0.303,0.009,0.105-0.263C791.623,236.761,791.589,236.847,791.553,236.934","putrajaya":"M754.146,244.112c0.08-0.033,0.186,0.024,0.184,0.109c-0.003,0.088-0.177,0.238-0.258,0.183S754.066,244.145,754.146,244.112L754.146,244.112z","kl":"M754.331,243.379c0.112,0.111,0.112,0.511-0.074,0.548c-0.186,0.041-0.36-0.327-0.291-0.474C754.034,243.306,754.219,243.266,754.331,243.379L754.331,243.379z"}};
