import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terma Penggunaan — Terms of Use",
  description:
    "Terma Penggunaan The Malaysian Info — syarat penggunaan laman web, penafian dan had liabiliti. Terms of Use for The Malaysian Info.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    h: "1. Penerimaan Terma / Acceptance of Terms",
    body: "Dengan mengakses dan menggunakan The Malaysian Info, anda bersetuju untuk terikat dengan Terma Penggunaan ini. Jika anda tidak bersetuju, sila berhenti menggunakan laman ini.",
    bodyEn: "By accessing and using The Malaysian Info, you agree to be bound by these Terms of Use. If you do not agree, please stop using this site.",
  },
  {
    h: "2. Maklumat untuk Rujukan Sahaja / Information for Reference Only",
    body: "Semua alatan, kalkulator dan maklumat di laman ini disediakan untuk tujuan rujukan dan pendidikan umum sahaja. Walaupun kami berusaha memastikan ketepatan, kami tidak menjamin bahawa semua maklumat adalah tepat, lengkap atau terkini. Sentiasa sahkan maklumat penting dengan sumber rasmi sebelum membuat keputusan kewangan, undang-undang atau peribadi.",
    bodyEn: "All tools, calculators and information on this site are provided for general reference and educational purposes only. While we strive for accuracy, we do not guarantee that all information is accurate, complete or current. Always verify important information with official sources before making financial, legal or personal decisions.",
  },
  {
    h: "3. Had Liabiliti / Limitation of Liability",
    body: "The Malaysian Info tidak akan bertanggungjawab atas sebarang kerugian atau kerosakan yang timbul daripada penggunaan atau pergantungan pada maklumat di laman ini. Penggunaan laman ini adalah atas risiko anda sendiri.",
    bodyEn: "The Malaysian Info shall not be liable for any loss or damage arising from the use of, or reliance on, the information on this site. Use of this site is at your own risk.",
  },
  {
    h: "4. Pautan Pihak Ketiga / Third-Party Links",
    body: "Laman ini mungkin mengandungi pautan ke laman web pihak ketiga. Kami tidak bertanggungjawab atas kandungan, dasar privasi atau amalan laman web tersebut.",
    bodyEn: "This site may contain links to third-party websites. We are not responsible for the content, privacy policies or practices of those websites.",
  },
  {
    h: "5. Harta Intelek / Intellectual Property",
    body: "Reka bentuk, teks dan susun atur asal laman ini adalah hak milik The Malaysian Info. Anda dialu-alukan untuk berkongsi pautan ke halaman kami, tetapi tidak boleh menyalin kandungan secara pukal tanpa kebenaran.",
    bodyEn: "The original design, text and layout of this site are the property of The Malaysian Info. You are welcome to share links to our pages, but may not copy content in bulk without permission.",
  },
  {
    h: "6. Pengiklanan / Advertising",
    body: "Laman ini disokong oleh pengiklanan, termasuk Google AdSense. Iklan membantu kami mengekalkan laman ini percuma untuk semua pengguna.",
    bodyEn: "This site is supported by advertising, including Google AdSense. Ads help us keep this site free for all users.",
  },
  {
    h: "7. Perubahan / Changes",
    body: "Kami boleh meminda Terma ini pada bila-bila masa. Perubahan berkuat kuasa sebaik sahaja diterbitkan di halaman ini.",
    bodyEn: "We may amend these Terms at any time. Changes take effect as soon as they are published on this page.",
  },
  {
    h: "8. Undang-undang Tadbir / Governing Law",
    body: "Terma ini ditadbir oleh undang-undang Malaysia.",
    bodyEn: "These Terms are governed by the laws of Malaysia.",
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
        <p className="text-white/40 text-sm">Kemas kini terakhir / Last updated: 1 June 2026</p>
      </header>

      {SECTIONS.map((s) => (
        <section key={s.h} className="card-glass rounded-2xl p-6 space-y-2">
          <h2 className="font-bold text-white text-base">{s.h}</h2>
          <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
          <p className="text-sm text-white/40 leading-relaxed">{s.bodyEn}</p>
        </section>
      ))}

      <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
        <Link href="/" className="text-red-400 hover:underline">← Laman Utama / Home</Link>
        <Link href="/privacy-policy" className="text-red-400 hover:underline">Dasar Privasi / Privacy</Link>
      </div>
    </div>
  );
}
