interface PlateInfo {
  state: string;
  stateEn: string;
  district?: string;
  flag: string;
}

// Sorted longest-first so we match BA before B, etc.
const PLATE_MAP: [string, PlateInfo][] = [
  // Kuala Lumpur / WP
  ["WA", { state: "W.P. Kuala Lumpur", stateEn: "W.P. Kuala Lumpur", flag: "🏙️" }],
  ["W",  { state: "W.P. Kuala Lumpur", stateEn: "W.P. Kuala Lumpur", flag: "🏙️" }],
  ["V",  { state: "W.P. Kuala Lumpur", stateEn: "W.P. Kuala Lumpur", district: "Siri baru", flag: "🏙️" }],
  // Selangor
  ["BA", { state: "Selangor", stateEn: "Selangor", district: "Shah Alam", flag: "🔵" }],
  ["BB", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BC", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BD", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BE", { state: "Selangor", stateEn: "Selangor", district: "Ulu Langat", flag: "🔵" }],
  ["BF", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BG", { state: "Selangor", stateEn: "Selangor", district: "Gombak", flag: "🔵" }],
  ["BH", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BJ", { state: "Selangor", stateEn: "Selangor", district: "Petaling Jaya", flag: "🔵" }],
  ["BK", { state: "Selangor", stateEn: "Selangor", district: "Klang", flag: "🔵" }],
  ["BL", { state: "Selangor", stateEn: "Selangor", district: "Sepang", flag: "🔵" }],
  ["BM", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BN", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BP", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BQ", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BR", { state: "Selangor", stateEn: "Selangor", district: "Sabak Bernam", flag: "🔵" }],
  ["BS", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BT", { state: "Selangor", stateEn: "Selangor", district: "Hulu Selangor", flag: "🔵" }],
  ["BU", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BV", { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  ["BW", { state: "Selangor", stateEn: "Selangor", district: "Kuala Langat", flag: "🔵" }],
  ["B",  { state: "Selangor", stateEn: "Selangor", flag: "🔵" }],
  // Johor
  ["JA", { state: "Johor", stateEn: "Johor", district: "Kluang", flag: "🟡" }],
  ["JB", { state: "Johor", stateEn: "Johor", district: "Johor Bahru", flag: "🟡" }],
  ["JC", { state: "Johor", stateEn: "Johor", district: "Batu Pahat", flag: "🟡" }],
  ["JD", { state: "Johor", stateEn: "Johor", district: "Segamat", flag: "🟡" }],
  ["JE", { state: "Johor", stateEn: "Johor", district: "Muar", flag: "🟡" }],
  ["JF", { state: "Johor", stateEn: "Johor", district: "Mersing", flag: "🟡" }],
  ["JG", { state: "Johor", stateEn: "Johor", district: "Pontian", flag: "🟡" }],
  ["JH", { state: "Johor", stateEn: "Johor", district: "Kota Tinggi", flag: "🟡" }],
  ["JJ", { state: "Johor", stateEn: "Johor", district: "Johor Bahru City", flag: "🟡" }],
  ["J",  { state: "Johor", stateEn: "Johor", flag: "🟡" }],
  // Kedah
  ["KA", { state: "Kedah", stateEn: "Kedah", district: "Kota Setar", flag: "🔴" }],
  ["KB", { state: "Kedah", stateEn: "Kedah", district: "Kubang Pasu", flag: "🔴" }],
  ["KC", { state: "Kedah", stateEn: "Kedah", district: "Baling", flag: "🔴" }],
  ["KD", { state: "Kedah", stateEn: "Kedah", district: "Sik", flag: "🔴" }],
  ["K",  { state: "Kedah", stateEn: "Kedah", flag: "🔴" }],
  // Kelantan
  ["DA", { state: "Kelantan", stateEn: "Kelantan", district: "Kota Bharu", flag: "⚪" }],
  ["D",  { state: "Kelantan", stateEn: "Kelantan", flag: "⚪" }],
  // Melaka
  ["MA", { state: "Melaka", stateEn: "Melaka", district: "Melaka Tengah", flag: "🟤" }],
  ["MB", { state: "Melaka", stateEn: "Melaka", district: "Alor Gajah", flag: "🟤" }],
  ["MC", { state: "Melaka", stateEn: "Melaka", district: "Jasin", flag: "🟤" }],
  ["M",  { state: "Melaka", stateEn: "Melaka", flag: "🟤" }],
  // Negeri Sembilan
  ["NA", { state: "Negeri Sembilan", stateEn: "Negeri Sembilan", district: "Seremban", flag: "🔶" }],
  ["N",  { state: "Negeri Sembilan", stateEn: "Negeri Sembilan", flag: "🔶" }],
  // Pahang
  ["CA", { state: "Pahang", stateEn: "Pahang", district: "Kuantan", flag: "🟣" }],
  ["CB", { state: "Pahang", stateEn: "Pahang", district: "Bentong", flag: "🟣" }],
  ["CC", { state: "Pahang", stateEn: "Pahang", district: "Temerloh", flag: "🟣" }],
  ["C",  { state: "Pahang", stateEn: "Pahang", flag: "🟣" }],
  // Penang
  ["PA", { state: "Pulau Pinang", stateEn: "Penang", flag: "🟠" }],
  ["PB", { state: "Pulau Pinang", stateEn: "Penang", flag: "🟠" }],
  ["P",  { state: "Pulau Pinang", stateEn: "Penang", flag: "🟠" }],
  // Perak
  ["AA", { state: "Perak", stateEn: "Perak", district: "Ipoh", flag: "⚫" }],
  ["AB", { state: "Perak", stateEn: "Perak", district: "Taiping", flag: "⚫" }],
  ["AC", { state: "Perak", stateEn: "Perak", flag: "⚫" }],
  ["A",  { state: "Perak", stateEn: "Perak", flag: "⚫" }],
  // Perlis
  ["R",  { state: "Perlis", stateEn: "Perlis", flag: "🟢" }],
  // Sabah
  ["QA", { state: "Sabah", stateEn: "Sabah", district: "Kota Kinabalu", flag: "🏔️" }],
  ["QB", { state: "Sabah", stateEn: "Sabah", flag: "🏔️" }],
  ["Q",  { state: "Sabah", stateEn: "Sabah", flag: "🏔️" }],
  // Sarawak
  ["SA", { state: "Sarawak", stateEn: "Sarawak", district: "Kuching", flag: "🦅" }],
  ["SB", { state: "Sarawak", stateEn: "Sarawak", district: "Miri", flag: "🦅" }],
  ["S",  { state: "Sarawak", stateEn: "Sarawak", flag: "🦅" }],
  // Terengganu
  ["TA", { state: "Terengganu", stateEn: "Terengganu", district: "Kuala Terengganu", flag: "🌊" }],
  ["T",  { state: "Terengganu", stateEn: "Terengganu", flag: "🌊" }],
  // Labuan
  ["L",  { state: "W.P. Labuan", stateEn: "W.P. Labuan", flag: "🏝️" }],
  // Putrajaya
  ["F",  { state: "W.P. Putrajaya", stateEn: "W.P. Putrajaya", flag: "🏛️" }],
  // VRU/VTW - special vehicles
  ["VRU", { state: "W.P. Kuala Lumpur", stateEn: "W.P. Kuala Lumpur", district: "Kenderaan Khas", flag: "🚐" }],
];

export function decodePlate(plate: string): PlateInfo | null {
  const clean = plate.toUpperCase().replace(/[\s\-\.]/g, "");
  const letters = clean.match(/^([A-Z]+)/)?.[1];
  if (!letters) return null;

  for (const [prefix, info] of PLATE_MAP) {
    if (!letters.startsWith(prefix)) continue;
    const suffix = letters.slice(prefix.length);
    // Allow 0, 1, or 2 extra series letters (W1234 / BJA1234 / JVK4970)
    if (suffix.length > 2) continue;
    const afterLetters = clean[letters.length];
    if (afterLetters === undefined || /\d/.test(afterLetters)) {
      return info;
    }
  }
  return null;
}

export const STATE_LIST = [
  { state: "W.P. Kuala Lumpur", prefixes: ["W", "WA", "V"], flag: "🏙️" },
  { state: "Selangor", prefixes: ["B", "BA–BW"], flag: "🔵" },
  { state: "Johor", prefixes: ["J", "JA–JJ"], flag: "🟡" },
  { state: "Kedah", prefixes: ["K", "KA–KD"], flag: "🔴" },
  { state: "Kelantan", prefixes: ["D", "DA"], flag: "⚪" },
  { state: "Melaka", prefixes: ["M", "MA–MC"], flag: "🟤" },
  { state: "Negeri Sembilan", prefixes: ["N", "NA"], flag: "🔶" },
  { state: "Pahang", prefixes: ["C", "CA–CC"], flag: "🟣" },
  { state: "Pulau Pinang", prefixes: ["P", "PA–PB"], flag: "🟠" },
  { state: "Perak", prefixes: ["A", "AA–AC"], flag: "⚫" },
  { state: "Perlis", prefixes: ["R"], flag: "🟢" },
  { state: "Sabah", prefixes: ["Q", "QA–QB"], flag: "🏔️" },
  { state: "Sarawak", prefixes: ["S", "SA–SB"], flag: "🦅" },
  { state: "Terengganu", prefixes: ["T", "TA"], flag: "🌊" },
  { state: "W.P. Labuan", prefixes: ["L"], flag: "🏝️" },
  { state: "W.P. Putrajaya", prefixes: ["F"], flag: "🏛️" },
];
