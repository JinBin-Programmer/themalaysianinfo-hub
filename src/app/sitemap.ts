import type { MetadataRoute } from "next";
import { GUIDES } from "./(site)/panduan/_lib/registry";

const BASE = "https://www.themalaysianinfo.online";

// Tool routes that have genuine bilingual (BM+EN) article content — these get
// a second sitemap entry at ?lang=en since that URL now server-renders real,
// distinct English content (see middleware.ts + layout.tsx locale plumbing).
const BILINGUAL_ROUTES = [
  "petrol", "pepper",
  "kwsp", "gaji-bersih", "cukai-pendapatan", "cukai-jalan", "zakat",
  "ptptn", "pinjaman-rumah", "simpanan", "ot", "pinjaman",
  "bmi", "umur", "diskaun", "bil",
  "nombor-plat", "poskod", "semak-ic", "cuti-umum", "4d", "pilihanraya",
  "solat",
  "tukaran", "konversi", "tukar-fail",
];

// Info/legal pages — BM only, no ?lang=en variant.
const INFO_ROUTES = ["", "about", "contact", "privacy-policy", "terms"];

const ROUTES = [...INFO_ROUTES, ...BILINGUAL_ROUTES];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const toolRoutes: MetadataRoute.Sitemap = ROUTES.map((path) => ({
    url: path ? `${BASE}/${path}` : BASE,
    lastModified: now,
    changeFrequency: path === "" || path === "petrol" || path === "pepper" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const englishRoutes: MetadataRoute.Sitemap = BILINGUAL_ROUTES.map((path) => ({
    url: `${BASE}/${path}?lang=en`,
    lastModified: now,
    changeFrequency: path === "petrol" || path === "pepper" ? "daily" : "weekly",
    priority: 0.65,
  }));

  const guideRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/panduan`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...GUIDES.map((g) => ({
      url: `${BASE}/panduan/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [...toolRoutes, ...englishRoutes, ...guideRoutes];
}
