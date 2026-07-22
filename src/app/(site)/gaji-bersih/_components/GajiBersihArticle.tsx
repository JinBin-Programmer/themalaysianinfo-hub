"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Gaji Bersih Malaysia",
    paras: [
      "Ramai pekerja di Malaysia terkejut apabila gaji yang masuk ke akaun bank setiap bulan lebih rendah daripada angka dalam surat tawaran. Perbezaan ini berlaku kerana gaji kasar (gross) tertakluk kepada beberapa potongan wajib sebelum menjadi gaji bersih (net atau take-home). Kalkulator gaji bersih ini membantu anda memahami dengan jelas berapa banyak yang sebenarnya anda terima selepas semua potongan EPF, SOCSO, EIS dan cukai pendapatan PCB diambil kira.",
      "Cara menggunakannya sangat mudah. Pilih gaji kasar bulanan anda daripada butang pratetap atau masukkan jumlah sendiri dalam ruang yang disediakan. Kemudian tetapkan status perkahwinan anda, sama ada pasangan bekerja, dan bilangan anak di bawah umur 18 tahun. Kalkulator akan mengira semula keputusan secara automatik setiap kali anda mengubah sebarang input, dan memaparkan gaji bersih bulanan anda dengan serta-merta dalam kad hijau di bahagian atas.",
      "Potongan terbesar bagi kebanyakan pekerja ialah caruman EPF (KWSP) sebanyak 11% daripada gaji kasar, yang disimpan untuk persaraan anda. Selepas itu, SOCSO (Perkeso) dan EIS (Sistem Insurans Pekerjaan) dikira berdasarkan gaji boleh-insurans yang dihadkan pada RM5,000 sebulan, masing-masing pada kadar kecil 0.5% dan 0.2% untuk bahagian pekerja. Potongan terakhir ialah PCB, iaitu cukai pendapatan bulanan yang dipotong dan diserahkan kepada Lembaga Hasil Dalam Negeri (LHDN).",
      "Anggaran PCB dalam kalkulator ini dibuat dengan mengira cukai tahunan ke atas pendapatan bercukai anda, kemudian membahagikannya kepada 12 bulan. Pendapatan bercukai dikira selepas menolak pelepasan asas: pelepasan peribadi RM9,000, pelepasan caruman EPF (dihadkan RM4,000 setahun), pelepasan pasangan RM4,000 jika pasangan tidak bekerja, dan RM2,000 bagi setiap anak. Cukai dikira menggunakan kadar berperingkat — semakin tinggi pendapatan, semakin tinggi peratusan cukai pada lapisan teratas.",
      "Selain potongan daripada gaji anda, kalkulator turut menunjukkan caruman majikan untuk EPF (12% atau 13%), SOCSO dan EIS. Caruman ini bukan potongan daripada gaji anda — ia adalah kos tambahan yang ditanggung majikan, dan dalam kes EPF, ia masuk ke akaun KWSP anda untuk persaraan. Memahami nilai penuh ini membantu anda menilai pakej pampasan dengan lebih tepat semasa menerima tawaran kerja atau berunding gaji.",
      "Sila ingat bahawa keputusan ini adalah anggaran untuk tujuan rujukan sahaja. Cukai sebenar anda mungkin lebih rendah jika anda menuntut pelepasan tambahan seperti insurans hayat, perbelanjaan perubatan, yuran pendidikan, zakat atau sumbangan derma. Untuk angka rasmi, sentiasa rujuk slip gaji daripada majikan anda atau portal MyTax LHDN. Gunakan kalkulator ini sebagai titik permulaan untuk merancang bajet bulanan dan memahami struktur gaji anda.",
    ],
  },
  en: {
    title: "Malaysia Net Salary Calculator Guide",
    paras: [
      "Many employees in Malaysia are surprised when the money landing in their bank account each month is lower than the figure on their offer letter. This gap happens because gross salary is subject to several mandatory deductions before it becomes net (take-home) pay. This net salary calculator helps you clearly understand how much you actually receive after EPF, SOCSO, EIS and PCB income tax are all taken into account.",
      "Using it is very simple. Pick your monthly gross salary from the preset buttons or type your own amount in the field provided. Then set your marital status, whether your spouse is working, and the number of children under 18. The calculator recomputes the result automatically each time you change any input, and instantly displays your monthly take-home pay in the green card at the top.",
      "The largest deduction for most employees is the EPF (KWSP) contribution of 11% of gross salary, which is saved towards your retirement. After that, SOCSO (Perkeso) and EIS (Employment Insurance System) are calculated on an insurable wage capped at RM5,000 per month, at small rates of roughly 0.5% and 0.2% for the employee portion. The final deduction is PCB, the monthly income tax withheld and remitted to the Inland Revenue Board (LHDN).",
      "The PCB estimate in this calculator is produced by computing the annual tax on your taxable income, then dividing it across 12 months. Taxable income is worked out after subtracting basic reliefs: the RM9,000 personal relief, the EPF contribution relief (capped at RM4,000 a year), a RM4,000 spouse relief if your spouse is not working, and RM2,000 per child. Tax is applied using progressive bands — the higher your income, the higher the percentage charged on the top slice.",
      "Beyond deductions from your salary, the calculator also shows employer contributions for EPF (12% or 13%), SOCSO and EIS. These are not deductions from your pay — they are additional costs borne by your employer, and in the case of EPF, that money goes into your KWSP retirement account. Understanding this full value helps you assess a compensation package more accurately when accepting a job offer or negotiating salary.",
      "Please remember these results are estimates for reference only. Your actual tax may be lower if you claim additional reliefs such as life insurance, medical expenses, education fees, zakat or charitable donations. For official figures, always refer to the payslip from your employer or the LHDN MyTax portal. Use this calculator as a starting point for planning your monthly budget and understanding your salary structure.",
    ],
  },
};

export default function GajiBersihArticle() {
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
          {FAQ.map((f) => (
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
        {lang === "bm" ? "Rujukan kadar caruman" : "Contribution rate reference"}:{" "}
        <a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">kwsp.gov.my</a>
        {" · "}
        <a href="https://www.perkeso.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">perkeso.gov.my</a>
        {" · "}
        <a href="https://www.hasil.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">hasil.gov.my</a>
        {" ("}{lang === "bm" ? "Jadual PCB" : "PCB schedule"}{")"}
      </p>
    </div>
  );
}
