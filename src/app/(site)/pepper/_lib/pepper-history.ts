import axios from "axios";
import * as cheerio from "cheerio";
import https from "https";

export interface HistoryEntry {
  date: string;
  bps: number;
  wps: number;
}

const agent = new https.Agent({ rejectUnauthorized: false });
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
};

let cache: { data: HistoryEntry[]; ts: number } | null = null;
const TTL = 6 * 60 * 60 * 1000;

async function fetchPage(url: string): Promise<HistoryEntry[]> {
  const res = await axios.get(url, { httpsAgent: agent, timeout: 10000, headers: HEADERS });
  const $ = cheerio.load(res.data as string);
  const entries: HistoryEntry[] = [];

  $("table tr").each((_, row) => {
    const cells = $(row).find("td");
    if (cells.length < 3) return;

    const col0 = $(cells[0]).text().trim();
    const col1 = $(cells[1]).text().trim().replace(/[^0-9.]/g, "");
    const col2 = $(cells[2]).text().trim().replace(/[^0-9.]/g, "");

    const bps = parseFloat(col1);
    const wps = parseFloat(col2);

    // Rows with valid prices (>1000 = per tonne)
    if (bps > 1000 && wps > 1000 && col0.length > 0) {
      entries.push({ date: col0, bps, wps });
    }
  });

  return entries;
}

export async function getPepperHistory(): Promise<HistoryEntry[]> {
  if (cache && Date.now() - cache.ts < TTL) return cache.data;

  try {
    // MPB weekly average price — try up to 3 pages (each page ~10 rows)
    const pages = await Promise.allSettled([
      fetchPage("https://www.mpb.gov.my/mpb/index.php/en/average-pepper-price/140-purata-harga-belian-lada-mpb-mingguan"),
      fetchPage("https://www.mpb.gov.my/mpb/index.php/en/average-pepper-price?start=0"),
      fetchPage("https://www.mpb.gov.my/mpb/index.php/en/average-pepper-price?start=10"),
    ]);

    const all: HistoryEntry[] = [];
    for (const r of pages) {
      if (r.status === "fulfilled") all.push(...r.value);
    }

    // Deduplicate by date
    const seen = new Set<string>();
    const unique = all.filter((e) => {
      if (seen.has(e.date)) return false;
      seen.add(e.date);
      return true;
    });

    if (unique.length > 0) {
      const result = unique.slice(-52); // keep last ~52 weeks
      cache = { data: result, ts: Date.now() };
      return result;
    }
  } catch (err) {
    console.error("[pepper-history] fetch failed:", err);
  }

  // Fallback: return empty so chart falls back to localStorage
  cache = { data: [], ts: Date.now() };
  return [];
}
