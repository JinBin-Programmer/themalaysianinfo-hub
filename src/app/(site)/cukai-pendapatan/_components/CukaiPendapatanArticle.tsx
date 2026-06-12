"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Cukai Pendapatan Malaysia",
    paras: [
      "Kalkulator Cukai Pendapatan ini membantu individu di Malaysia menganggar berapa banyak cukai pendapatan peribadi yang perlu dibayar bagi tahun taksiran. Dengan memasukkan pendapatan kasar tahunan dan relief yang layak anda tuntut, kalkulator akan menunjukkan pendapatan bercukai, jumlah cukai setahun, kadar cukai efektif, serta anggaran Potongan Cukai Berjadual (PCB) bulanan. Ia berguna untuk perancangan kewangan, anggaran bonus, atau sekadar memahami berapa banyak cukai yang dipotong daripada gaji anda.",
      "Cara menggunakannya mudah. Mula-mula, masukkan pendapatan kasar setahun anda — iaitu jumlah pendapatan kerja sebelum sebarang potongan. Kemudian tandakan atau isikan relief yang anda layak tuntut: relief diri sendiri RM9,000 sudah dikira secara automatik, dan anda boleh menambah relief pasangan, anak, caruman KWSP, insurans hayat dan perubatan, pendidikan diri, gaya hidup serta perubatan ibu bapa. Setiap relief mempunyai had maksimum yang dikuatkuasakan oleh kalkulator. Setelah selesai, tekan butang 'Kira Cukai' untuk melihat keputusan.",
      "Pengiraan cukai di Malaysia berfungsi secara progresif. Ini bermakna jumlah relief anda ditolak daripada pendapatan kasar untuk mendapatkan pendapatan bercukai (chargeable income). Pendapatan bercukai itu kemudian dipecahkan kepada beberapa peringkat (bracket), di mana setiap peringkat dikenakan kadar yang semakin tinggi. RM5,000 pertama tidak dikenakan cukai (0%), peringkat seterusnya dikenakan 1%, 3%, 8% dan seterusnya sehingga kadar tertinggi untuk pendapatan yang sangat tinggi. Hanya bahagian pendapatan dalam setiap peringkat dikenakan kadar peringkat itu — bukan keseluruhan pendapatan.",
      "Kadar efektif yang ditunjukkan ialah peratusan sebenar cukai berbanding pendapatan kasar anda, dan biasanya jauh lebih rendah daripada kadar peringkat tertinggi kerana sifat progresif sistem ini. Anggaran PCB bulanan pula dikira dengan membahagikan cukai tahunan kepada 12. PCB sebenar yang dipotong majikan mengikut jadual rasmi Lembaga Hasil Dalam Negeri (LHDN) mungkin berbeza sedikit, kerana ia mengambil kira faktor tambahan seperti caruman bulanan dan rebat.",
      "Dalam konteks Malaysia, relief cukai memainkan peranan besar dalam mengurangkan beban cukai golongan berpendapatan sederhana. Menyimpan resit untuk perbelanjaan seperti buku, peranti, insurans dan rawatan perubatan ibu bapa boleh menjimatkan cukai dengan ketara apabila dituntut sebagai relief. Ramai pembayar cukai juga memanfaatkan caruman tambahan kepada KWSP atau PRS untuk mengurangkan pendapatan bercukai.",
      "Perlu diingat bahawa kalkulator ini memberikan anggaran sahaja berdasarkan kadar dan had relief umum untuk YA2024/2025. Pengiraan rasmi, rebat cukai (seperti rebat individu untuk pendapatan bercukai yang rendah), dan keadaan peribadi anda mungkin mengubah jumlah sebenar. Untuk pemfailan rasmi dan pengiraan tepat, gunakan portal MyTax LHDN atau dapatkan nasihat daripada penasihat cukai bertauliah.",
    ],
  },
  en: {
    title: "Malaysia Income Tax Calculator Guide",
    paras: [
      "This Income Tax Calculator helps individuals in Malaysia estimate how much personal income tax they owe for the assessment year. By entering your annual gross income and the reliefs you are eligible to claim, the calculator shows your chargeable income, total annual tax, effective tax rate, and an estimated monthly Monthly Tax Deduction (PCB). It is useful for financial planning, estimating bonuses, or simply understanding how much tax is taken from your salary.",
      "Using it is straightforward. First, enter your annual gross income — the total of your employment income before any deductions. Then tick or fill in the reliefs you qualify for: the RM9,000 self relief is already counted automatically, and you can add spouse relief, children, EPF contributions, life and medical insurance, self-education, lifestyle, and parents' medical expenses. Each relief has a maximum limit enforced by the calculator. When you are done, press the 'Calculate Tax' button to view the results.",
      "Tax calculation in Malaysia works progressively. This means your total reliefs are deducted from gross income to obtain your chargeable income. That chargeable income is then broken into several brackets, where each bracket is taxed at an increasingly higher rate. The first RM5,000 is tax-free (0%), the next bands are taxed at 1%, 3%, 8% and so on up to the top rate for very high incomes. Only the portion of income within each bracket is taxed at that bracket's rate — not your entire income.",
      "The effective rate shown is the actual percentage of tax relative to your gross income, and it is usually far lower than the top bracket rate because of the progressive nature of the system. The estimated monthly PCB is calculated by dividing the annual tax by 12. The actual PCB deducted by employers under the official Inland Revenue Board (LHDN) schedule may differ slightly, as it accounts for additional factors such as monthly contributions and rebates.",
      "In the Malaysian context, tax reliefs play a big role in reducing the tax burden of middle-income earners. Keeping receipts for expenses such as books, devices, insurance and parents' medical treatment can save significant tax when claimed as reliefs. Many taxpayers also make additional contributions to EPF or PRS to reduce their chargeable income.",
      "Keep in mind that this calculator provides estimates only, based on general rates and relief limits for YA2024/2025. The official computation, tax rebates (such as the individual rebate for low chargeable income), and your personal circumstances may change the actual amount. For official filing and accurate calculation, use the LHDN MyTax portal or seek advice from a qualified tax adviser.",
    ],
  },
};

export default function CukaiPendapatanArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-sm text-white/65 leading-relaxed">{p}</p>
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
              <p className="text-sm text-white/55 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
