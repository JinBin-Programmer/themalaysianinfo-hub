import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "../_lib/registry";

const BASE = "https://www.themalaysianinfo.online";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — The Malaysian Info`,
    description: guide.description,
    alternates: { canonical: `/panduan/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `${BASE}/panduan/${guide.slug}`,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  const months = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    inLanguage: "ms-MY",
    author: { "@type": "Organization", name: "The Malaysian Info", url: BASE },
    publisher: { "@type": "Organization", name: "The Malaysian Info", url: BASE },
    mainEntityOfPage: `${BASE}/panduan/${guide.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-white/40 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-white/70">Laman Utama</Link>
        <span>/</span>
        <Link href="/panduan" className="hover:text-white/70">Panduan</Link>
        <span>/</span>
        <span className="text-white/60">{guide.category}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center text-3xl">{guide.icon}</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-red-400/80 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
            {guide.category}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{guide.title}</h1>
        <p className="text-white/40 text-sm">
          Oleh pasukan editorial The Malaysian Info · Dikemas kini {formatDate(guide.updated)} · {guide.readMins} min bacaan
        </p>
      </header>

      {/* Intro */}
      <div className="space-y-4">
        {guide.intro.map((p, i) => (
          <p key={i} className="text-[15px] sm:text-base text-white/80 leading-relaxed">{p}</p>
        ))}
      </div>

      {/* Sections */}
      {guide.sections.map((s) => (
        <section key={s.h} className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{s.h}</h2>
          {s.paras.map((p, i) => (
            <p key={i} className="text-[15px] sm:text-base text-white/80 leading-relaxed">{p}</p>
          ))}
          {s.list && (
            <ul className="space-y-2 pl-1">
              {s.list.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] sm:text-base text-white/80 leading-relaxed">
                  <span className="text-red-400 shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* FAQ */}
      <section className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">Soalan Lazim (FAQ)</h2>
        <div className="divide-y divide-white/10">
          {guide.faq.map((f) => (
            <details key={f.q} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-[15px]">
                <span>{f.q}</span>
                <span className="text-red-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-[15px] text-white/75 leading-relaxed mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider">Sumber Rujukan Rasmi</h2>
        <ul className="space-y-1.5">
          {guide.sources.map((src) => (
            <li key={src.url}>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-red-400 hover:underline"
              >
                {src.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/35 leading-relaxed pt-1">
          Maklumat dalam artikel ini adalah untuk rujukan umum dan disemak pada tarikh kemas kini di atas.
          Kadar, syarat dan dasar rasmi boleh berubah — sila sahkan dengan sumber rasmi sebelum membuat keputusan.
        </p>
      </section>

      {/* Related */}
      <section className="card-glass rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-white">Berkaitan</h2>
        <div className="flex flex-wrap gap-2">
          {guide.related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="text-sm text-white/75 bg-white/8 hover:bg-white/12 border border-white/12 px-3.5 py-2 rounded-xl transition-colors"
            >
              {r.label} →
            </Link>
          ))}
        </div>
      </section>

      <div className="text-center pt-2">
        <Link href="/panduan" className="text-red-400 hover:underline text-sm">← Semua panduan</Link>
      </div>
    </div>
  );
}
