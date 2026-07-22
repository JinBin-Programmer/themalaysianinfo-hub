"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PTPTN_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Bayaran Balik Pinjaman PTPTN",
    paras: [
      "Perbadanan Tabung Pendidikan Tinggi Nasional (PTPTN) menyediakan pinjaman pendidikan kepada ratusan ribu pelajar Malaysia setiap tahun untuk membiayai pengajian di IPTA, IPTS dan politeknik. Selepas tamat pengajian, peminjam perlu membayar balik jumlah yang dipinjam. Kalkulator di halaman ini membantu anda menganggar bayaran bulanan yang sesuai, jumlah keseluruhan yang perlu dibayar, dan tempoh masa untuk menyelesaikan pinjaman anda.",
      "Berbeza dengan pinjaman bank konvensional, PTPTN tidak mengenakan faedah atau riba. Sebaliknya, ia mengenakan caj perkhidmatan (Ujrah) sebanyak 1% setahun atas baki tertunggak. Ini bermakna kos pinjaman PTPTN jauh lebih rendah berbanding pinjaman komersial. Kalkulator ini menggunakan kaedah baki berkurangan: setiap bulan, caj 1% setahun dikira atas baki semasa, kemudian bayaran anda mengurangkan baki tersebut.",
      "Untuk menggunakan kalkulator, mula-mula pilih atau masukkan jumlah pinjaman PTPTN anda. Anda boleh menyemak jumlah tepat melalui portal myPTPTN atau penyata rasmi. Seterusnya, pilih julat gaji bulanan anda — kalkulator akan mencadangkan bayaran bulanan yang berpatutan berdasarkan pendapatan tersebut. Anda juga boleh menulis sendiri jumlah bayaran bulanan jika anda ingin membayar lebih atau kurang daripada cadangan.",
      "Hasil pengiraan menunjukkan jumlah keseluruhan yang perlu dibayar (pinjaman pokok ditambah caj perkhidmatan), bayaran bulanan, jumlah caj perkhidmatan keseluruhan, serta tempoh bayaran dalam tahun dan bulan. Perhatikan bahawa semakin tinggi bayaran bulanan anda, semakin pendek tempoh bayaran dan semakin rendah jumlah caj perkhidmatan yang anda bayar secara keseluruhan.",
      "Membayar balik PTPTN secara konsisten amat penting. Bayaran tepat pada masanya membantu mengelakkan masalah seperti penyenaraian yang boleh menjejaskan permohonan pinjaman lain pada masa hadapan. PTPTN turut menyediakan kemudahan bayaran melalui potongan gaji, arahan tetap bank, FPX dalam talian dan kaunter. Dari semasa ke semasa, PTPTN turut menawarkan diskaun untuk penyelesaian penuh — semak portal rasmi untuk tawaran terkini.",
      "Ingat bahawa kalkulator ini memberikan anggaran sahaja berdasarkan caj perkhidmatan 1% setahun dan bayaran bulanan tetap. Jumlah sebenar mungkin berbeza sedikit bergantung kepada tarikh bayaran sebenar, sebarang bayaran tambahan dan polisi semasa PTPTN. Sentiasa rujuk penyata rasmi PTPTN anda di www.ptptn.gov.my untuk angka yang tepat sebelum membuat keputusan kewangan.",
    ],
  },
  en: {
    title: "Guide to PTPTN Study Loan Repayment",
    paras: [
      "The National Higher Education Fund Corporation (PTPTN) provides education loans to hundreds of thousands of Malaysian students each year to fund studies at public and private universities and polytechnics. After graduation, borrowers must repay the amount borrowed. The calculator on this page helps you estimate a suitable monthly payment, the total amount payable, and how long it will take to clear your loan.",
      "Unlike conventional bank loans, PTPTN does not charge interest or riba. Instead it applies a service charge (Ujrah) of 1% per year on the outstanding balance. This means a PTPTN loan is far cheaper than commercial borrowing. This calculator uses the reducing-balance method: each month, the 1% annual charge is computed on the current balance, then your payment reduces that balance.",
      "To use the calculator, first select or enter your PTPTN loan amount. You can check the exact figure through the myPTPTN portal or your official statement. Next, choose your monthly salary bracket — the calculator will suggest an affordable monthly payment based on that income. You can also type your own monthly payment if you wish to pay more or less than the suggestion.",
      "The results show the total amount payable (principal plus service charge), your monthly payment, the total service charge, and the repayment period in years and months. Note that the higher your monthly payment, the shorter the repayment period and the lower the total service charge you pay overall.",
      "Repaying PTPTN consistently is very important. Timely payments help you avoid issues such as being listed in records that could affect future loan applications. PTPTN offers several payment channels including salary deduction, bank standing instruction, online FPX and over-the-counter. From time to time, PTPTN also offers discounts for full settlement — check the official portal for current offers.",
      "Remember that this calculator provides an estimate only, based on the 1% annual service charge and a fixed monthly payment. The actual amount may vary slightly depending on your real payment dates, any extra payments and PTPTN's current policies. Always refer to your official PTPTN statement at www.ptptn.gov.my for exact figures before making financial decisions.",
    ],
  },
};

export default function PTPTNArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-[15px] text-white/80 leading-relaxed">{p}</p>
        ))}
      </article>

      <div className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {lang === "bm" ? "Soalan Lazim (FAQ)" : "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-white/10">
          {PTPTN_FAQ.map((f) => (
            <details key={f.qEn} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-sm">
                <span>{lang === "bm" ? f.q : f.qEn}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-[15px] text-white/75 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-white/25">
        {lang === "bm" ? "Rujukan rasmi" : "Official reference"}:{" "}
        <a href="https://www.ptptn.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">ptptn.gov.my</a>
      </p>
    </div>
  );
}
