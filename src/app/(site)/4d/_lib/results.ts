export interface Operator {
  name: string;
  nameMs: string;
  color: string;
  officialUrl: string;
  resultsUrl: string;
}

export const OPERATORS: Operator[] = [
  {
    name: "Magnum 4D",
    nameMs: "Magnum 4D",
    color: "from-red-900/40 to-red-950/20",
    officialUrl: "https://www.magnum4d.my",
    resultsUrl: "https://www.magnum4d.my/en/results",
  },
  {
    name: "Sports Toto",
    nameMs: "Sports Toto",
    color: "from-blue-900/40 to-blue-950/20",
    officialUrl: "https://www.sportstoto.com.my",
    resultsUrl: "https://www.sportstoto.com.my/results",
  },
  {
    name: "Da Ma Cai",
    nameMs: "Da Ma Cai",
    color: "from-green-900/40 to-green-950/20",
    officialUrl: "https://www.damacai.com.my",
    resultsUrl: "https://www.damacai.com.my/past-draw-result",
  },
];

// Regular draw days: Wednesday (3), Saturday (6), Sunday (0).
// Results are announced from ~7:00 PM. Special draws fall on selected Tuesdays.
export const DRAW_DAYS = [0, 3, 6];

export function nextDrawDate(from: Date = new Date()): Date {
  const d = new Date(from);
  // If today is a draw day and it's before ~7pm MYT, today counts
  for (let i = 0; i < 8; i++) {
    const candidate = new Date(d);
    candidate.setDate(d.getDate() + i);
    if (DRAW_DAYS.includes(candidate.getDay())) {
      if (i === 0 && d.getHours() >= 19) continue;
      return candidate;
    }
  }
  return d;
}
