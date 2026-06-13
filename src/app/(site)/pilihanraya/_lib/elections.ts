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
