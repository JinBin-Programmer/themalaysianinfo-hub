import axios from "axios";
import * as cheerio from "cheerio";
import https from "https";

export interface PepperPrice {
  type: string;
  code: string;
  price_per_tonne: number;
  price_per_kg: number;
  currency: string;
  unit: string;
}

export interface PepperData {
  prices: PepperPrice[];
  last_updated: string;
  source: string;
  is_fallback: boolean;
}

const FALLBACK: PepperData = {
  prices: [
    {
      type: "Black Pepper Sarawak (BPS)",
      code: "BPS",
      price_per_tonne: 27240,
      price_per_kg: 27.24,
      currency: "MYR",
      unit: "tonne",
    },
    {
      type: "White Pepper Sarawak (WPS)",
      code: "WPS",
      price_per_tonne: 37407,
      price_per_kg: 37.41,
      currency: "MYR",
      unit: "tonne",
    },
  ],
  last_updated: new Date().toISOString(),
  source: "Malaysia Pepper Board (fallback)",
  is_fallback: true,
};

let cache: { data: PepperData; ts: number } | null = null;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

export async function getPepperData(): Promise<PepperData> {
  if (cache && Date.now() - cache.ts < CACHE_TTL_MS) {
    return cache.data;
  }

  try {
    const agent = new https.Agent({ rejectUnauthorized: false });
    const res = await axios.get(
      "https://www.mpb.gov.my/mpb/index.php/en/page/60",
      {
        httpsAgent: agent,
        timeout: 8000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        },
      }
    );

    const $ = cheerio.load(res.data as string);
    const prices: PepperPrice[] = [];

    // MPB table: rows with price data in various table formats
    $("table tr").each((_, row) => {
      const cells = $(row).find("td");
      if (cells.length < 2) return;

      const text0 = $(cells[0]).text().trim();
      const text1 = $(cells[1]).text().trim();

      // Parse rows that look like pepper type + price
      if (/BPS|Black Pepper Sarawak/i.test(text0)) {
        const raw = text1.replace(/[^0-9.]/g, "");
        const val = parseFloat(raw);
        if (val > 1000) {
          prices.push({
            type: "Black Pepper Sarawak (BPS)",
            code: "BPS",
            price_per_tonne: val,
            price_per_kg: parseFloat((val / 1000).toFixed(2)),
            currency: "MYR",
            unit: "tonne",
          });
        }
      }
      if (/WPS|White Pepper Sarawak/i.test(text0)) {
        const raw = text1.replace(/[^0-9.]/g, "");
        const val = parseFloat(raw);
        if (val > 1000) {
          prices.push({
            type: "White Pepper Sarawak (WPS)",
            code: "WPS",
            price_per_tonne: val,
            price_per_kg: parseFloat((val / 1000).toFixed(2)),
            currency: "MYR",
            unit: "tonne",
          });
        }
      }
    });

    if (prices.length === 0) {
      // Try alternate pattern: look for RM values near pepper keywords
      const bodyText = $("body").text();
      const bpsMatch = bodyText.match(/BPS[^0-9]*([0-9,]+(?:\.[0-9]+)?)/i);
      const wpsMatch = bodyText.match(/WPS[^0-9]*([0-9,]+(?:\.[0-9]+)?)/i);

      if (bpsMatch) {
        const val = parseFloat(bpsMatch[1].replace(/,/g, ""));
        if (val > 1000) {
          prices.push({
            type: "Black Pepper Sarawak (BPS)",
            code: "BPS",
            price_per_tonne: val,
            price_per_kg: parseFloat((val / 1000).toFixed(2)),
            currency: "MYR",
            unit: "tonne",
          });
        }
      }
      if (wpsMatch) {
        const val = parseFloat(wpsMatch[1].replace(/,/g, ""));
        if (val > 1000) {
          prices.push({
            type: "White Pepper Sarawak (WPS)",
            code: "WPS",
            price_per_tonne: val,
            price_per_kg: parseFloat((val / 1000).toFixed(2)),
            currency: "MYR",
            unit: "tonne",
          });
        }
      }
    }

    if (prices.length === 0) {
      console.warn("[pepper] No prices parsed from MPB, using fallback");
      cache = { data: FALLBACK, ts: Date.now() };
      return FALLBACK;
    }

    const result: PepperData = {
      prices,
      last_updated: new Date().toISOString(),
      source: "Malaysia Pepper Board (mpb.gov.my)",
      is_fallback: false,
    };
    cache = { data: result, ts: Date.now() };
    return result;
  } catch (err) {
    console.error("[pepper] Fetch failed:", err);
    // Return stale cache if available, else fallback
    if (cache) return cache.data;
    return FALLBACK;
  }
}
