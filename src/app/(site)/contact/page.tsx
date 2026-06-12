import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami — Contact The Malaysian Info",
  description:
    "Hubungi The Malaysian Info untuk pertanyaan, maklum balas atau pembetulan maklumat. Contact us for questions, feedback or corrections.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Hubungi Kami / Contact Us</h1>
        <p className="text-white/45 text-sm">Kami sedia mendengar / We&apos;d love to hear from you</p>
      </header>

      <section className="card-glass rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-red-400">E-mel / Email</h2>
        <p className="text-sm text-white/70 leading-relaxed">
          Cara terbaik untuk menghubungi kami adalah melalui e-mel. Kami biasanya membalas dalam masa 2&ndash;3 hari bekerja.
        </p>
        <p className="text-sm text-white/45 leading-relaxed">
          The best way to reach us is by email. We usually reply within 2&ndash;3 working days.
        </p>
        <a
          href="mailto:jinbin@ioti.io"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          ✉️ jinbin@ioti.io
        </a>
      </section>

      <section className="card-glass rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-red-400">Apa boleh anda hubungi kami? / What can you contact us about?</h2>
        <ul className="text-sm text-white/70 leading-relaxed list-disc pl-5 space-y-1.5">
          <li>Pembetulan maklumat atau harga yang tidak tepat / Corrections to inaccurate information or prices</li>
          <li>Cadangan alat atau ciri baharu / Suggestions for new tools or features</li>
          <li>Pertanyaan media atau kerjasama / Media or partnership enquiries</li>
          <li>Isu teknikal pada laman web / Technical issues with the website</li>
        </ul>
      </section>

      <section className="card-glass rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-red-400">Nota Penting / Important Note</h2>
        <p className="text-sm text-white/70 leading-relaxed">
          The Malaysian Info ialah portal maklumat bebas dan tidak mewakili mana-mana agensi kerajaan. Untuk urusan rasmi (cukai, KWSP, dan sebagainya), sila hubungi agensi berkenaan secara langsung.
        </p>
        <p className="text-sm text-white/45 leading-relaxed">
          The Malaysian Info is an independent information portal and is not affiliated with any government agency. For official matters (tax, EPF, etc.), please contact the relevant agency directly.
        </p>
      </section>

      <div className="text-center pt-2">
        <Link href="/" className="text-red-400 hover:underline text-sm">← Kembali ke semua alatan / Back to all tools</Link>
      </div>
    </div>
  );
}
