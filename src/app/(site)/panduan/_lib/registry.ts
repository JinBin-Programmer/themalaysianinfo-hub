import type { GuideArticle, GuideCard } from "./types";
import { GUIDE_SEMAK_BAKI_KWSP } from "./guide-semak-baki-kwsp";
import { GUIDE_KADAR_CARUMAN_KWSP } from "./guide-kadar-caruman-kwsp";
import { GUIDE_KIRA_GAJI_BERSIH } from "./guide-kira-gaji-bersih";
import { GUIDE_EFILING_LHDN } from "./guide-efiling-lhdn";
import { GUIDE_PELEPASAN_CUKAI } from "./guide-pelepasan-cukai";
import { GUIDE_RENEW_ROADTAX } from "./guide-renew-roadtax";
import { GUIDE_SEMAK_SAMAN } from "./guide-semak-saman";
import { GUIDE_ZAKAT_PENDAPATAN } from "./guide-zakat-pendapatan";
import { GUIDE_SEMAK_PTPTN } from "./guide-semak-ptptn";
import { GUIDE_HARGA_MINYAK } from "./guide-harga-minyak";
import { GUIDE_BELI_RUMAH_PERTAMA } from "./guide-beli-rumah-pertama";
import { GUIDE_PERKESO_SOCSO } from "./guide-perkeso-socso";

/** Ordered list — the hub page and homepage show them in this order */
export const GUIDES: GuideArticle[] = [
  GUIDE_SEMAK_BAKI_KWSP,
  GUIDE_KIRA_GAJI_BERSIH,
  GUIDE_EFILING_LHDN,
  GUIDE_PELEPASAN_CUKAI,
  GUIDE_HARGA_MINYAK,
  GUIDE_RENEW_ROADTAX,
  GUIDE_SEMAK_SAMAN,
  GUIDE_KADAR_CARUMAN_KWSP,
  GUIDE_ZAKAT_PENDAPATAN,
  GUIDE_SEMAK_PTPTN,
  GUIDE_BELI_RUMAH_PERTAMA,
  GUIDE_PERKESO_SOCSO,
];

export function getGuide(slug: string): GuideArticle | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** Light metadata only — safe to pass to client components without bundling article bodies */
export function toGuideCards(guides: GuideArticle[] = GUIDES): GuideCard[] {
  return guides.map(({ slug, title, titleEn, description, descriptionEn, icon, category, categoryEn, updated, readMins }) => ({
    slug, title, titleEn, description, descriptionEn, icon, category, categoryEn, updated, readMins,
  }));
}
