import type { MetadataRoute } from "next";

const BASE = "https://www.themalaysianinfo.online";

// All tool routes + info pages on the consolidated site
const ROUTES = [
  "", // home
  "petrol", "pepper",
  "kwsp", "gaji-bersih", "cukai-pendapatan", "cukai-jalan", "zakat",
  "ptptn", "pinjaman-rumah", "simpanan", "ot", "pinjaman",
  "bmi", "umur", "diskaun", "bil",
  "nombor-plat", "poskod", "semak-ic", "cuti-umum", "4d", "pilihanraya",
  "solat",
  "tukaran", "konversi", "tukar-fail",
  "about", "contact", "privacy-policy", "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: path ? `${BASE}/${path}` : BASE,
    lastModified: now,
    changeFrequency: path === "" || path === "petrol" || path === "pepper" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
