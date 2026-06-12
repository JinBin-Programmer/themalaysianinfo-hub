"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Kerja Lebih Masa (OT) Malaysia",
    paras: [
      "Kerja lebih masa atau overtime (OT) merujuk kepada masa bekerja yang melebihi jam kerja biasa yang ditetapkan dalam kontrak pekerjaan. Di Malaysia, bayaran kerja lebih masa dilindungi oleh Akta Kerja 1955, yang menetapkan kadar minimum yang mesti dibayar kepada pekerja yang layak. Kalkulator OT ini direka untuk membantu pekerja dan majikan menganggar bayaran lebih masa dengan cepat dan tepat, berdasarkan formula standard yang ditetapkan oleh undang-undang.",
      "Asas pengiraan bermula dengan menentukan kadar sejam pekerja. Mengikut Akta Kerja 1955, kadar harian biasa (Ordinary Rate of Pay) bagi pekerja bergaji bulanan dikira dengan membahagi gaji bulanan dengan 26 hari. Angka 26 ini ialah piawaian dalam Akta yang mewakili bilangan hari bekerja sebulan selepas mengambil kira hari rehat. Kadar sejam pula diperoleh dengan membahagi kadar harian itu dengan bilangan jam kerja biasa sehari, biasanya 8 jam.",
      "Setelah kadar sejam diketahui, bayaran lebih masa dikira mengikut tiga kategori utama. Kerja lebih masa pada hari biasa dibayar pada kadar 1.5 kali kadar sejam. Kerja yang dilakukan pada hari rehat (lazimnya hujung minggu) dikira pada kadar 2 kali, manakala kerja pada cuti umum berbayar dikira pada kadar 3 kali kadar sejam. Pengganda yang lebih tinggi ini mencerminkan nilai masa rehat pekerja yang dikorbankan untuk bekerja pada hari-hari tersebut.",
      "Untuk menggunakan kalkulator ini, masukkan gaji pokok bulanan anda, pilih jam kerja biasa sehari dan bilangan hari kerja seminggu, kemudian isikan bilangan jam OT bagi setiap kategori. Kalkulator akan secara automatik memaparkan kadar sejam, kadar harian, dan jumlah bayaran OT bagi setiap kategori serta jumlah keseluruhan. Ini memudahkan anda menyemak penyata gaji atau merancang pendapatan tambahan daripada kerja lebih masa.",
      "Penting untuk diingat bahawa keputusan kalkulator ini ialah anggaran sahaja. Terma sebenar bayaran lebih masa boleh berbeza bergantung pada kontrak pekerjaan, polisi syarikat, dan kategori pekerjaan. Sesetengah golongan pekerja mungkin tertakluk kepada had pendapatan tertentu di bawah peruntukan Akta. Jika anda menghadapi pertikaian atau memerlukan pengiraan rasmi, anda dinasihatkan untuk merujuk kepada majikan, penyata gaji rasmi, atau Jabatan Tenaga Kerja Semenanjung Malaysia (JTKSM).",
      "Memahami hak kerja lebih masa membantu pekerja memastikan mereka menerima bayaran yang adil, dan membantu majikan mematuhi keperluan undang-undang. Dengan menggunakan kalkulator ini secara berkala, anda boleh menjejaki pendapatan OT, membandingkannya dengan penyata gaji, dan membuat keputusan kewangan yang lebih bermaklumat berkenaan kerja tambahan yang anda lakukan.",
    ],
  },
  en: {
    title: "Malaysia Overtime (OT) Pay Calculator Guide",
    paras: [
      "Overtime (OT) refers to work performed beyond the normal working hours stated in an employment contract. In Malaysia, overtime pay is protected by the Employment Act 1955, which sets the minimum rates that must be paid to eligible employees. This OT calculator is designed to help employees and employers quickly and accurately estimate overtime pay, based on the standard formula prescribed by law.",
      "The calculation begins with determining the employee's hourly rate. Under the Employment Act 1955, the ordinary rate of pay per day for a monthly-rated employee is calculated by dividing the monthly salary by 26 days. The figure 26 is a standard in the Act, representing the number of working days in a month after accounting for rest days. The hourly rate is then derived by dividing that daily rate by the number of normal working hours per day, typically 8 hours.",
      "Once the hourly rate is known, overtime pay is calculated across three main categories. Overtime on an ordinary working day is paid at 1.5 times the hourly rate. Work performed on a rest day (usually the weekend) is calculated at 2 times, while work on a paid public holiday is calculated at 3 times the hourly rate. These higher multipliers reflect the value of the rest time an employee gives up to work on those days.",
      "To use this calculator, enter your basic monthly salary, choose your normal working hours per day and the number of working days per week, then fill in the number of OT hours for each category. The calculator automatically displays your hourly rate, daily rate, and the OT pay for each category as well as the grand total. This makes it easy to check your payslip or plan additional income from overtime work.",
      "It is important to remember that the calculator's results are estimates only. The actual terms of overtime pay can vary depending on your employment contract, company policy, and job category. Certain groups of employees may be subject to specific income thresholds under the Act's provisions. If you face a dispute or need an official calculation, you are advised to refer to your employer, official payslips, or the Department of Labour Peninsular Malaysia (JTKSM).",
      "Understanding overtime rights helps employees ensure they receive fair pay, and helps employers comply with legal requirements. By using this calculator regularly, you can track your OT income, compare it against your payslip, and make more informed financial decisions about the additional work you take on.",
    ],
  },
};

export default function OtArticle() {
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
