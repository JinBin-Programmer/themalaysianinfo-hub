export interface FuelPrice {
  code: string;
  name: string;
  name_ms: string;
  price: number;
  market_price: number | null;
  unit: string;
  is_subsidised: boolean;
  note: string;
  note_ms: string;
}

export interface HistoryRow {
  date: string;
  ron97: number;
  diesel: number;
}

export interface PetrolData {
  fuels: FuelPrice[];
  history: HistoryRow[];
  effective_date: string;
  next_update: string;
  source: string;
  is_fallback: boolean;
  fetched_at: string;
}

// The API returns two rows per date (series_type "level" = actual prices,
// "change_weekly" = deltas), so limit=20 yields ~10 usable "level" rows:
// the latest week (current prices) + previous weeks (history table)
const DATA_GOV_URL =
  "https://api.data.gov.my/data-catalogue?id=fuelprice&limit=20&sort=-date";

// Next Thursday from a given date (petrol prices update every Thursday)
function nextThursday(from: Date = new Date()): string {
  const d = new Date(from);
  const day = d.getDay();
  const daysUntil = day <= 4 ? 4 - day : 7 - day + 4;
  d.setDate(d.getDate() + daysUntil);
  return d.toLocaleDateString("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const FALLBACK_FUELS: FuelPrice[] = [
  {
    code: "RON95",
    name: "RON 95",
    name_ms: "Petrol RON95",
    price: 1.99,
    market_price: 3.37,
    unit: "litre",
    is_subsidised: true,
    note: "BUDI95 subsidised price",
    note_ms: "Harga bersubsidi BUDI95",
  },
  {
    code: "RON97",
    name: "RON 97",
    name_ms: "Petrol RON97",
    price: 4.0,
    market_price: null,
    unit: "litre",
    is_subsidised: false,
    note: "Market price · Weekly update",
    note_ms: "Harga pasaran · Kemaskini mingguan",
  },
  {
    code: "DIESEL",
    name: "Euro 5 Diesel",
    name_ms: "Diesel Euro 5",
    price: 3.97,
    market_price: null,
    unit: "litre",
    is_subsidised: false,
    note: "Market price · Weekly update",
    note_ms: "Harga pasaran · Kemaskini mingguan",
  },
  {
    code: "DIESEL_B10",
    name: "Diesel (East M'sia)",
    name_ms: "Diesel (Malaysia Timur)",
    price: 2.15,
    market_price: 4.87,
    unit: "litre",
    is_subsidised: true,
    note: "East Malaysia subsidised",
    note_ms: "Harga bersubsidi Malaysia Timur",
  },
];

// 1 hour: prices change every Thursday — a short TTL means the new price
// shows up within the hour instead of up to a day late
let cache: { data: PetrolData; ts: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000;

async function fetchFromDataGov(): Promise<{ fuels: FuelPrice[]; history: HistoryRow[]; date: string } | null> {
  try {
    const res = await fetch(DATA_GOV_URL, { cache: "no-store" });
    if (!res.ok) return null;

    const raw: {
      date: string;
      series_type: string;
      ron95_budi95: number | null;
      ron95_skps: number | null;
      ron95: number | null;
      ron97: number | null;
      diesel: number | null;
      diesel_eastmsia: number | null;
    }[] = await res.json();

    // Keep only actual-price rows — "change_weekly" rows are deltas
    const levels = raw.filter((r) => r.series_type === "level");

    const latest = levels[0];
    if (!latest || latest.ron97 == null || latest.diesel == null) return null;

    // diesel_eastmsia is sometimes null on the newest row — fall back to the
    // most recent week that has it (the subsidised price rarely changes)
    const eastDiesel =
      latest.diesel_eastmsia ??
      levels.find((r) => r.diesel_eastmsia != null)?.diesel_eastmsia ??
      2.15;

    const fuels: FuelPrice[] = [
      {
        code: "RON95",
        name: "RON 95",
        name_ms: "Petrol RON95",
        price: latest.ron95_budi95 ?? 1.99,
        market_price: latest.ron95,
        unit: "litre",
        is_subsidised: true,
        note: "BUDI95 subsidised price",
        note_ms: "Harga bersubsidi BUDI95",
      },
      {
        code: "RON97",
        name: "RON 97",
        name_ms: "Petrol RON97",
        price: latest.ron97,
        market_price: null,
        unit: "litre",
        is_subsidised: false,
        note: "Market price · Weekly update",
        note_ms: "Harga pasaran · Kemaskini mingguan",
      },
      {
        code: "DIESEL",
        name: "Euro 5 Diesel",
        name_ms: "Diesel Euro 5",
        price: latest.diesel,
        market_price: null,
        unit: "litre",
        is_subsidised: false,
        note: "Market price · Weekly update",
        note_ms: "Harga pasaran · Kemaskini mingguan",
      },
      {
        code: "DIESEL_B10",
        name: "Diesel (East M'sia)",
        name_ms: "Diesel (Malaysia Timur)",
        price: eastDiesel,
        market_price: latest.diesel,
        unit: "litre",
        is_subsidised: true,
        note: "East Malaysia subsidised",
        note_ms: "Harga bersubsidi Malaysia Timur",
      },
    ];

    // Rows after the first are the previous weeks, newest first
    const history: HistoryRow[] = levels
      .slice(1)
      .filter((r) => r.ron97 != null && r.diesel != null)
      .map((r) => ({
        date: r.date,
        ron97: r.ron97 as number,
        diesel: r.diesel as number,
      }));

    return { fuels, history, date: latest.date };
  } catch {
    return null;
  }
}

export async function getPetrolData(): Promise<PetrolData> {
  if (cache && Date.now() - cache.ts < CACHE_TTL_MS) return cache.data;

  const result = await fetchFromDataGov();

  const effectiveDate = result
    ? new Date(result.date).toLocaleDateString("en-MY", {
        timeZone: "Asia/Kuala_Lumpur",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-MY", {
        timeZone: "Asia/Kuala_Lumpur",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

  const data: PetrolData = {
    fuels: result?.fuels ?? FALLBACK_FUELS,
    history: result?.history ?? [],
    effective_date: effectiveDate,
    next_update: nextThursday(),
    source: result ? "data.gov.my" : "Reference prices (data.gov.my)",
    is_fallback: !result,
    fetched_at: new Date().toISOString(),
  };

  cache = { data, ts: Date.now() };
  return data;
}
