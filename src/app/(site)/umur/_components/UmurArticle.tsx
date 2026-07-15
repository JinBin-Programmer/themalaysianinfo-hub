"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { UMUR_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Umur",
    paras: [
      "Kalkulator umur ialah alat ringkas yang membantu anda mengetahui umur tepat anda dalam tahun, bulan dan hari, hanya dengan memasukkan tarikh lahir. Walaupun ramai orang tahu umur mereka dalam tahun, mengira baki bulan dan hari secara manual boleh mengelirukan kerana setiap bulan mempunyai bilangan hari yang berbeza dan tahun lompat menambah satu hari pada bulan Februari. Alat ini melakukan kiraan itu dengan tepat untuk anda dalam beberapa saat.",
      "Untuk menggunakannya, pilih hari, bulan dan tahun kelahiran anda daripada menu lungsur di atas. Hasil umur anda akan dikemas kini secara automatik. Anda akan melihat umur utama dalam tahun, diikuti dengan baki bulan dan hari, serta beberapa maklumat tambahan yang menarik seperti jumlah hari anda telah hidup, jumlah jam, hari dalam minggu anda dilahirkan, generasi anda, dan berapa hari lagi sehingga hari lahir seterusnya.",
      "Cara kiraan berfungsi adalah mudah tetapi teliti. Kalkulator membandingkan tarikh lahir dengan tarikh hari ini, mengira selisih tahun penuh terlebih dahulu, kemudian baki bulan, dan akhirnya baki hari. Apabila bilangan hari menjadi negatif, ia meminjam hari daripada bulan sebelumnya menggunakan bilangan hari sebenar bulan tersebut. Pendekatan ini memastikan umur yang dipaparkan sepadan dengan cara umur dikira dalam kehidupan seharian, di mana anda menjadi setahun lebih tua pada setiap hari lahir.",
      "Di Malaysia, mengetahui umur tepat berguna dalam pelbagai keadaan. Ia membantu menyemak kelayakan umur untuk peperiksaan seperti SPM, kemasukan ke universiti, permohonan lesen memandu, pendaftaran sebagai pengundi, atau syarat umur minimum untuk pekerjaan dan aktiviti tertentu. Ibu bapa juga sering menggunakannya untuk mengira umur anak bagi tujuan pendaftaran sekolah atau tadika.",
      "Maklumat generasi yang dipaparkan mengelompokkan tahun kelahiran kepada kategori demografi yang lazim seperti Baby Boomer, Generasi X, Millennial, Generasi Z dan Generasi Alpha. Perlu diingat bahawa julat tahun ini adalah berdasarkan takrifan umum dan bukan piawai rasmi, jadi ia mungkin berbeza sedikit antara sumber. Untuk sebarang urusan rasmi, sentiasa rujuk tarikh lahir yang tertera pada MyKad anda, kerana sesetengah agensi mengira umur mengikut tahun semasa atau tarikh tertentu.",
    ],
  },
  en: {
    title: "Age Calculator Guide",
    paras: [
      "An age calculator is a simple tool that helps you find your exact age in years, months and days, just by entering your date of birth. While most people know their age in years, working out the remaining months and days by hand can be confusing because each month has a different number of days and leap years add an extra day in February. This tool does that calculation precisely for you in a few seconds.",
      "To use it, pick your day, month and year of birth from the dropdown menus above. Your age result updates automatically. You will see your main age in years, followed by the remaining months and days, plus several extra pieces of interesting information such as the total number of days you have lived, total hours, the day of the week you were born on, your generation, and how many days remain until your next birthday.",
      "The way the calculation works is simple but careful. The calculator compares your birth date with today's date, computing the difference in full years first, then the remaining months, and finally the remaining days. When the day count goes negative, it borrows days from the previous month using that month's actual number of days. This approach ensures the displayed age matches how age is counted in everyday life, where you become a year older on each birthday.",
      "In Malaysia, knowing your exact age is useful in many situations. It helps check age eligibility for examinations such as SPM, university admission, driving licence applications, voter registration, or minimum age requirements for jobs and certain activities. Parents also often use it to work out a child's age for school or kindergarten registration purposes.",
      "The generation information shown groups birth years into common demographic categories such as Baby Boomer, Generation X, Millennial, Generation Z and Generation Alpha. Keep in mind that these year ranges are based on commonly accepted definitions rather than an official standard, so they may differ slightly between sources. For any official matters, always refer to the date of birth printed on your MyKad, since some agencies calculate age by the current year or a specific cut-off date.",
    ],
  },
};

export default function UmurArticle() {
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
          {UMUR_FAQ.map((f) => (
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
    </div>
  );
}
