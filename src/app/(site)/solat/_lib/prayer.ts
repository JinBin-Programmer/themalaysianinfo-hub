export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
}

export interface HijriDate {
  day: string;
  month: { en: string; ar: string; number: number };
  year: string;
}

export interface PrayerData {
  timings: PrayerTimings;
  city: string;
  gregorian: string;
  hijri: HijriDate;
  timestamp: string;
}

export const CITIES: { label: string; city: string; state: string }[] = [
  { label: "Kuala Lumpur", city: "Kuala Lumpur", state: "Federal Territory" },
  { label: "Shah Alam", city: "Shah Alam", state: "Selangor" },
  { label: "Klang", city: "Klang", state: "Selangor" },
  { label: "Petaling Jaya", city: "Petaling Jaya", state: "Selangor" },
  { label: "George Town (Penang)", city: "George Town", state: "Penang" },
  { label: "Johor Bahru", city: "Johor Bahru", state: "Johor" },
  { label: "Ipoh", city: "Ipoh", state: "Perak" },
  { label: "Kuching", city: "Kuching", state: "Sarawak" },
  { label: "Kota Kinabalu", city: "Kota Kinabalu", state: "Sabah" },
  { label: "Melaka", city: "Melaka", state: "Melaka" },
  { label: "Alor Setar", city: "Alor Setar", state: "Kedah" },
  { label: "Kota Bharu", city: "Kota Bharu", state: "Kelantan" },
  { label: "Kuala Terengganu", city: "Kuala Terengganu", state: "Terengganu" },
  { label: "Seremban", city: "Seremban", state: "Negeri Sembilan" },
  { label: "Kangar", city: "Kangar", state: "Perlis" },
];

export const PRAYER_LABELS: Record<string, { malay: string; english: string; arabic: string; icon: string }> = {
  Imsak:   { malay: "Imsak",   english: "Imsak",    arabic: "إمساك",  icon: "🌙" },
  Fajr:    { malay: "Subuh",   english: "Fajr",     arabic: "الفجر",  icon: "🌅" },
  Sunrise: { malay: "Syuruk",  english: "Sunrise",  arabic: "الشروق", icon: "☀️" },
  Dhuhr:   { malay: "Zohor",   english: "Dhuhr",    arabic: "الظهر",  icon: "🌞" },
  Asr:     { malay: "Asar",    english: "Asr",      arabic: "العصر",  icon: "🌤" },
  Maghrib: { malay: "Maghrib", english: "Maghrib",  arabic: "المغرب", icon: "🌇" },
  Isha:    { malay: "Isyak",   english: "Isha",     arabic: "العشاء", icon: "🌃" },
};

// Cache keyed by "city::YYYY-MM-DD"
const cache = new Map<string, { data: PrayerData; ts: number }>();
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function todayMYT(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kuala_Lumpur" }); // YYYY-MM-DD
}

export async function getPrayerData(city = "Kuala Lumpur"): Promise<PrayerData> {
  const dateStr = todayMYT();
  const cacheKey = `${city}::${dateStr}`;

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) return cached.data;

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=Malaysia&method=3&date=${dateStr}`;

  const res = await fetch(url, { next: { revalidate: 43200 } });
  if (!res.ok) throw new Error(`Al Adhan API error: ${res.status}`);

  const json = await res.json() as {
    code: number;
    data: {
      timings: Record<string, string>;
      date: {
        readable: string;
        hijri: {
          day: string;
          month: { en: string; ar: string; number: number };
          year: string;
        };
      };
    };
  };

  if (json.code !== 200) throw new Error("Al Adhan API returned non-200");

  const raw = json.data.timings;

  const data: PrayerData = {
    timings: {
      Fajr:    raw.Fajr.replace(/ \(.*\)$/, ""),
      Sunrise: raw.Sunrise.replace(/ \(.*\)$/, ""),
      Dhuhr:   raw.Dhuhr.replace(/ \(.*\)$/, ""),
      Asr:     raw.Asr.replace(/ \(.*\)$/, ""),
      Maghrib: raw.Maghrib.replace(/ \(.*\)$/, ""),
      Isha:    raw.Isha.replace(/ \(.*\)$/, ""),
      Imsak:   raw.Imsak.replace(/ \(.*\)$/, ""),
    },
    city,
    gregorian: json.data.date.readable,
    hijri: json.data.date.hijri,
    timestamp: new Date().toISOString(),
  };

  cache.set(cacheKey, { data, ts: Date.now() });
  return data;
}
