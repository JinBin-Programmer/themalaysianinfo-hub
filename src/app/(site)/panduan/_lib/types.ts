export interface GuideSection {
  h: string;
  paras: string[];
  list?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideArticle {
  slug: string;
  /** BM title — used as H1 and <title> */
  title: string;
  titleEn: string;
  /** BM meta description */
  description: string;
  descriptionEn: string;
  icon: string;
  category: string;
  categoryEn: string;
  /** ISO date of last content review */
  updated: string;
  readMins: number;
  intro: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  sources: { label: string; url: string }[];
  related: { label: string; href: string }[];
}

/** Light shape passed to client components (homepage cards) — keeps article bodies out of the JS bundle */
export interface GuideCard {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  category: string;
  categoryEn: string;
  updated: string;
  readMins: number;
}
