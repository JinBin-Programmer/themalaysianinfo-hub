import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami — About The Malaysian Info",
  description:
    "The Malaysian Info ialah portal maklumat percuma untuk rakyat Malaysia — harga petrol, KWSP, cukai, waktu solat, kalkulator dan banyak lagi. Learn about our free Malaysia information hub.",
  alternates: { canonical: "/about" },
};

const SECTIONS = [
  {
    h: "Apa itu The Malaysian Info?",
    hEn: "What is The Malaysian Info?",
    p: "The Malaysian Info ialah sebuah portal maklumat dalam talian yang menyatukan alatan dan maklumat harian yang paling kerap dicari oleh rakyat Malaysia — semuanya di satu tempat, percuma, dan tanpa perlu mendaftar akaun. Daripada harga petrol mingguan, kadar caruman KWSP, kalkulator cukai pendapatan, sehingga waktu solat dan cuti umum, kami berusaha menjadikan maklumat rasmi lebih mudah difahami dan digunakan oleh orang awam.",
    pEn: "The Malaysian Info is an online information portal that brings together the everyday tools and information Malaysians search for most — all in one place, free of charge, and with no account required. From weekly petrol prices and EPF contribution rates to income tax calculators, prayer times and public holidays, we aim to make official information easier to understand and use.",
  },
  {
    h: "Apa yang kami tawarkan?",
    hEn: "What we offer",
    p: "Kami menyediakan lebih 25 alatan dan halaman maklumat dalam dua bahasa (Bahasa Melayu dan English), termasuk harga bahan api terkini, kalkulator kewangan (KWSP, gaji bersih, cukai, pinjaman rumah, PTPTN), alat semakan (poskod, nombor plat, IC), serta maklumat keagamaan dan kalendar. Setiap alat direka untuk berfungsi dengan pantas di telefon mahupun komputer.",
    pEn: "We provide over 25 tools and information pages in two languages (Malay and English), including the latest fuel prices, financial calculators (EPF, net salary, tax, home loan, PTPTN), lookup tools (postcode, car plate, IC), and religious and calendar information. Each tool is built to work quickly on both phone and desktop.",
  },
  {
    h: "Sumber data kami",
    hEn: "Our data sources",
    p: "Di mana berkenaan, kami menggunakan data daripada sumber rasmi seperti data.gov.my dan agensi kerajaan yang berkaitan. Harga dan kadar boleh berubah dari semasa ke semasa; oleh itu semua maklumat di laman ini disediakan untuk tujuan rujukan sahaja. Kami sentiasa menggalakkan pengguna mengesahkan maklumat penting dengan sumber rasmi sebelum membuat keputusan kewangan atau undang-undang.",
    pEn: "Where applicable, we use data from official sources such as data.gov.my and relevant government agencies. Prices and rates may change over time, so all information on this site is provided for reference purposes only. We always encourage users to verify important information with official sources before making financial or legal decisions.",
  },
  {
    h: "Untuk siapa laman ini?",
    hEn: "Who is this for?",
    p: "Laman ini dibina untuk semua rakyat Malaysia — pekerja yang ingin mengira gaji bersih, pemandu yang menyemak harga minyak sebelum mengisi, pelajar yang mengira bayaran balik PTPTN, atau sesiapa sahaja yang memerlukan jawapan pantas tentang maklumat harian di Malaysia. Tiada yuran, tiada log masuk, dan tiada iklan yang mengganggu pengalaman anda.",
    pEn: "This site is built for all Malaysians — workers calculating take-home pay, drivers checking fuel prices before filling up, students working out PTPTN repayments, or anyone who needs quick answers about everyday information in Malaysia. No fees, no logins, and no ads that disrupt your experience.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Tentang Kami / About Us</h1>
        <p className="text-white/45 text-sm">
          Portal maklumat percuma untuk rakyat Malaysia · Malaysia&apos;s free information hub
        </p>
      </header>

      {SECTIONS.map((s) => (
        <section key={s.h} className="card-glass rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-red-400">{s.h} <span className="text-white/30 font-normal text-sm">/ {s.hEn}</span></h2>
          <p className="text-sm text-white/70 leading-relaxed">{s.p}</p>
          <p className="text-sm text-white/45 leading-relaxed">{s.pEn}</p>
        </section>
      ))}

      <div className="text-center pt-2">
        <Link href="/" className="text-red-400 hover:underline text-sm">← Kembali ke semua alatan / Back to all tools</Link>
      </div>
    </div>
  );
}
