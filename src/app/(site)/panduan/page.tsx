import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "./_lib/registry";

export const metadata: Metadata = {
  title: "Panduan & Artikel — The Malaysian Info",
  description:
    "Panduan lengkap hal ehwal harian rakyat Malaysia — KWSP, cukai pendapatan, roadtax, saman, zakat, PTPTN, harga minyak dan pembelian rumah pertama. Percuma dan dikemas kini.",
  alternates: { canonical: "/panduan" },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  const months = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function PanduanHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <header className="space-y-3 text-center">
        <p className="text-red-400 text-xs font-bold tracking-widest uppercase">Panduan / Guides</p>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Panduan &amp; Artikel</h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
          Panduan langkah demi langkah tentang hal ehwal harian rakyat Malaysia — KWSP, cukai,
          kenderaan, zakat dan kewangan. Setiap artikel disemak dan dikemas kini secara berkala
          dengan rujukan kepada sumber rasmi.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/panduan/${g.slug}`}
            className="card-glass group rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-red-500/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center text-2xl shrink-0">{g.icon}</span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-red-400/80 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                {g.category}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white leading-snug group-hover:text-red-300 transition-colors">
              {g.title}
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed flex-1">{g.description}</p>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs text-white/40">
              <span>Dikemas kini {formatDate(g.updated)}</span>
              <span>{g.readMins} min bacaan</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="card-glass rounded-2xl p-6 text-center space-y-2">
        <h2 className="text-lg font-bold text-white">Perlukan alatan pengiraan?</h2>
        <p className="text-[15px] text-white/60">
          Kami juga menyediakan lebih 25 kalkulator dan alat semakan percuma — daripada gaji bersih hingga cukai jalan.
        </p>
        <Link href="/" className="inline-block text-red-400 hover:underline text-sm font-semibold pt-1">
          Lihat semua alatan →
        </Link>
      </div>
    </div>
  );
}
