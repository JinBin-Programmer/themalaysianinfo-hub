export interface Holiday {
  name_ms: string;
  name_en: string;
  date: string; // YYYY-MM-DD
  isNational: boolean;
  states?: string[];   // undefined = all states
  isApproximate?: boolean;
  type: "national" | "religious" | "state";
}

// State codes
export const STATES = [
  { code: "ALL",  name_ms: "Semua Negeri",   name_en: "All States" },
  { code: "JHR",  name_ms: "Johor",          name_en: "Johor" },
  { code: "KDH",  name_ms: "Kedah",          name_en: "Kedah" },
  { code: "KTN",  name_ms: "Kelantan",       name_en: "Kelantan" },
  { code: "MLK",  name_ms: "Melaka",         name_en: "Melaka" },
  { code: "NSN",  name_ms: "Negeri Sembilan",name_en: "Negeri Sembilan" },
  { code: "PHG",  name_ms: "Pahang",         name_en: "Pahang" },
  { code: "PNG",  name_ms: "Pulau Pinang",   name_en: "Penang" },
  { code: "PRK",  name_ms: "Perak",          name_en: "Perak" },
  { code: "PLS",  name_ms: "Perlis",         name_en: "Perlis" },
  { code: "SBH",  name_ms: "Sabah",          name_en: "Sabah" },
  { code: "SWK",  name_ms: "Sarawak",        name_en: "Sarawak" },
  { code: "SGR",  name_ms: "Selangor",       name_en: "Selangor" },
  { code: "TRG",  name_ms: "Terengganu",     name_en: "Terengganu" },
  { code: "KUL",  name_ms: "Kuala Lumpur",   name_en: "Kuala Lumpur" },
  { code: "LBN",  name_ms: "Labuan",         name_en: "Labuan" },
  { code: "PJY",  name_ms: "Putrajaya",      name_en: "Putrajaya" },
] as const;

export type StateCode = typeof STATES[number]["code"];

export const HOLIDAYS_2026: Holiday[] = [
  // ── National ──
  { name_ms: "Tahun Baru",                  name_en: "New Year's Day",             date: "2026-01-01", isNational: true,  type: "national" },
  { name_ms: "Hari Wilayah Persekutuan",    name_en: "Federal Territory Day",      date: "2026-02-01", isNational: false, states: ["KUL","PJY","LBN"], type: "state" },
  { name_ms: "Tahun Baru Cina (Hari 1)",    name_en: "Chinese New Year (Day 1)",   date: "2026-02-17", isNational: true,  type: "religious" },
  { name_ms: "Tahun Baru Cina (Hari 2)",    name_en: "Chinese New Year (Day 2)",   date: "2026-02-18", isNational: true,  type: "religious" },
  { name_ms: "Hari Raya Aidilfitri (Hari 1)",name_en:"Hari Raya Aidilfitri (Day 1)","date":"2026-03-20",isNational:true,  type:"religious", isApproximate: true },
  { name_ms: "Hari Raya Aidilfitri (Hari 2)",name_en:"Hari Raya Aidilfitri (Day 2)","date":"2026-03-21",isNational:true,  type:"religious", isApproximate: true },
  { name_ms: "Hari Buruh",                  name_en: "Labour Day",                 date: "2026-05-01", isNational: true,  type: "national" },
  { name_ms: "Hari Wesak",                  name_en: "Wesak Day",                  date: "2026-05-24", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Raya Aidiladha",         name_en: "Hari Raya Aidiladha",        date: "2026-05-27", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Keputeraan YDPA",        name_en: "Yang di-Pertuan Agong's Birthday", date: "2026-06-01", isNational: true, type: "national" },
  { name_ms: "Awal Muharram",               name_en: "Awal Muharram (Islamic New Year)", date: "2026-06-17", isNational: true, type: "religious", isApproximate: true },
  { name_ms: "Hari Kebangsaan",             name_en: "National Day (Merdeka)",     date: "2026-08-31", isNational: true,  type: "national" },
  { name_ms: "Hari Malaysia",               name_en: "Malaysia Day",               date: "2026-09-16", isNational: true,  type: "national" },
  { name_ms: "Maulidur Rasul",              name_en: "Prophet Muhammad's Birthday",date: "2026-08-26", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Deepavali",                   name_en: "Deepavali",                  date: "2026-11-05", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Krismas",                name_en: "Christmas Day",              date: "2026-12-25", isNational: true,  type: "religious" },

  // ── State-specific ──
  { name_ms: "Hari Thaipusam",              name_en: "Thaipusam",                  date: "2026-02-08", isNational: false, states: ["KUL","PJY","SGR","PNG","PRK","JHR"], type: "religious", isApproximate: true },
  { name_ms: "Nuzul Al-Quran",              name_en: "Nuzul Al-Quran",             date: "2026-03-08", isNational: false, states: ["KUL","PJY","PNG","PRK","SGR","TRG","KDH","KTN","PHG","PLS"], type: "religious", isApproximate: true },
  { name_ms: "Hari Keputeraan Sultan Johor",name_en: "Sultan of Johor's Birthday", date: "2026-03-23", isNational: false, states: ["JHR"], type: "state" },
  { name_ms: "Hari Peristiwa Pahang",       name_en: "Pahang Day",                 date: "2026-05-22", isNational: false, states: ["PHG"], type: "state" },
  { name_ms: "Pesta Menuai (Hari 1)",       name_en: "Harvest Festival (Day 1)",   date: "2026-05-30", isNational: false, states: ["SBH"], type: "state" },
  { name_ms: "Pesta Menuai (Hari 2)",       name_en: "Harvest Festival (Day 2)",   date: "2026-05-31", isNational: false, states: ["SBH"], type: "state" },
  { name_ms: "Hari Gawai (Hari 1)",         name_en: "Gawai Day (Day 1)",          date: "2026-06-01", isNational: false, states: ["SWK"], type: "state" },
  { name_ms: "Hari Gawai (Hari 2)",         name_en: "Gawai Day (Day 2)",          date: "2026-06-02", isNational: false, states: ["SWK"], type: "state" },
  { name_ms: "Hari Keputeraan Yang di-Pertua Negeri Pulau Pinang", name_en: "Penang Governor's Birthday", date: "2026-07-11", isNational: false, states: ["PNG"], type: "state" },
  { name_ms: "Hari Sarawak",                name_en: "Sarawak Day",                date: "2026-07-22", isNational: false, states: ["SWK"], type: "state" },
  { name_ms: "Hari Keputeraan Sultan Kedah",name_en: "Sultan of Kedah's Birthday", date: "2026-06-21", isNational: false, states: ["KDH"], type: "state" },
  { name_ms: "Hari Keputeraan Sultan Kelantan", name_en: "Sultan of Kelantan's Birthday", date: "2026-11-11", isNational: false, states: ["KTN"], type: "state" },
  { name_ms: "Hari Keputeraan Sultan Perak",name_en: "Sultan of Perak's Birthday", date: "2026-11-27", isNational: false, states: ["PRK"], type: "state" },
  { name_ms: "Hari Keputeraan Sultan Selangor", name_en: "Sultan of Selangor's Birthday", date: "2026-12-11", isNational: false, states: ["SGR"], type: "state" },
  { name_ms: "Hari Keputeraan Yang di-Pertua Negeri Sabah", name_en: "Sabah Head of State's Birthday", date: "2026-10-03", isNational: false, states: ["SBH"], type: "state" },
  { name_ms: "Hari Keputeraan Sultan Terengganu", name_en: "Sultan of Terengganu's Birthday", date: "2026-04-26", isNational: false, states: ["TRG"], type: "state" },
  { name_ms: "Hari Keputeraan Raja Perlis",name_en: "Raja of Perlis's Birthday",   date: "2026-05-17", isNational: false, states: ["PLS"], type: "state" },
  { name_ms: "Hari Keputeraan Yang Dipertuan Besar Negeri Sembilan", name_en: "Yang Dipertuan Besar of N. Sembilan's Birthday", date: "2026-01-14", isNational: false, states: ["NSN"], type: "state" },
  { name_ms: "Hari Keputeraan Yang Dipertuan Agong Melaka", name_en: "Melaka Governor's Birthday", date: "2026-10-10", isNational: false, states: ["MLK"], type: "state" },
];

export const HOLIDAYS_2027: Holiday[] = [
  { name_ms: "Tahun Baru",                  name_en: "New Year's Day",             date: "2027-01-01", isNational: true,  type: "national" },
  { name_ms: "Hari Wilayah Persekutuan",    name_en: "Federal Territory Day",      date: "2027-02-01", isNational: false, states: ["KUL","PJY","LBN"], type: "state" },
  { name_ms: "Tahun Baru Cina (Hari 1)",    name_en: "Chinese New Year (Day 1)",   date: "2027-02-06", isNational: true,  type: "religious" },
  { name_ms: "Tahun Baru Cina (Hari 2)",    name_en: "Chinese New Year (Day 2)",   date: "2027-02-07", isNational: true,  type: "religious" },
  { name_ms: "Hari Thaipusam",              name_en: "Thaipusam",                  date: "2027-01-27", isNational: false, states: ["KUL","PJY","SGR","PNG","PRK","JHR"], type: "religious", isApproximate: true },
  { name_ms: "Hari Raya Aidilfitri (Hari 1)",name_en:"Hari Raya Aidilfitri (Day 1)","date":"2027-03-09",isNational:true, type:"religious", isApproximate: true },
  { name_ms: "Hari Raya Aidilfitri (Hari 2)",name_en:"Hari Raya Aidilfitri (Day 2)","date":"2027-03-10",isNational:true, type:"religious", isApproximate: true },
  { name_ms: "Hari Buruh",                  name_en: "Labour Day",                 date: "2027-05-01", isNational: true,  type: "national" },
  { name_ms: "Hari Wesak",                  name_en: "Wesak Day",                  date: "2027-05-13", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Raya Aidiladha",         name_en: "Hari Raya Aidiladha",        date: "2027-05-17", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Keputeraan YDPA",        name_en: "Yang di-Pertuan Agong's Birthday", date: "2027-06-07", isNational: true, type: "national" },
  { name_ms: "Awal Muharram",               name_en: "Awal Muharram (Islamic New Year)", date: "2027-06-07", isNational: true, type: "religious", isApproximate: true },
  { name_ms: "Maulidur Rasul",              name_en: "Prophet Muhammad's Birthday",date: "2027-08-16", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Kebangsaan",             name_en: "National Day (Merdeka)",     date: "2027-08-31", isNational: true,  type: "national" },
  { name_ms: "Hari Malaysia",               name_en: "Malaysia Day",               date: "2027-09-16", isNational: true,  type: "national" },
  { name_ms: "Deepavali",                   name_en: "Deepavali",                  date: "2027-10-25", isNational: true,  type: "religious", isApproximate: true },
  { name_ms: "Hari Krismas",                name_en: "Christmas Day",              date: "2027-12-25", isNational: true,  type: "religious" },
];

export function getHolidaysForState(year: number, stateCode: string): Holiday[] {
  const all = year === 2026 ? HOLIDAYS_2026 : HOLIDAYS_2027;
  return all
    .filter(h => {
      if (stateCode === "ALL") return h.isNational;
      return !h.states || h.states.includes(stateCode);
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getNextHoliday(holidays: Holiday[]): Holiday | null {
  const today = new Date().toISOString().split("T")[0];
  return holidays.find(h => h.date >= today) ?? null;
}

export function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}
