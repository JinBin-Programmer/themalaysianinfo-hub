"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { KWSP_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator KWSP / EPF",
    paras: [
      "Kumpulan Wang Simpanan Pekerja (KWSP) atau Employees Provident Fund (EPF) ialah dana simpanan persaraan wajib bagi kebanyakan pekerja sektor swasta di Malaysia. Setiap bulan, sebahagian daripada gaji anda dan caruman majikan disimpan dalam akaun KWSP, kemudian dilaburkan untuk menjana dividen tahunan. Kalkulator di halaman ini membantu anda menganggar berapa banyak simpanan yang mungkin terkumpul menjelang umur bersara.",
      "Cara menggunakannya mudah. Tetapkan umur semasa dan umur bersara anda menggunakan gelangsar, pilih atau masukkan gaji kasar bulanan, isikan baki KWSP semasa anda, dan laraskan andaian kadar dividen tahunan. Kalkulator akan terus mengira anggaran baki semasa bersara, pecahan caruman bulanan pekerja dan majikan, jumlah caruman keseluruhan, serta anggaran dividen yang diperoleh.",
      "Pengiraan ini berdasarkan kadar caruman standard: 11% daripada gaji bagi pekerja, dan 13% bagi majikan untuk gaji RM5,000 ke bawah atau 12% untuk gaji yang lebih tinggi. Baki sedia ada dan caruman bulanan dikompaun setiap bulan menggunakan kadar dividen yang anda pilih. Kerana faedah kompaun, walaupun perbezaan kecil dalam kadar dividen atau tempoh menyimpan boleh memberi kesan besar kepada jumlah akhir.",
      "Penting untuk diingat bahawa dividen KWSP tidak tetap. Ia diisytiharkan setiap tahun berdasarkan prestasi pelaburan dana, dan secara sejarah sering berada sekitar 5% hingga 6%, walaupun KWSP menjamin dividen minimum 2.5% bagi Akaun Konvensional. Oleh itu, gunakan kadar dividen sebagai anggaran sahaja, bukan jaminan.",
      "Anggaran 'sara hidup bulanan' membahagikan baki bersara anda kepada 20 atau 25 tahun untuk memberi gambaran kasar perbelanjaan bulanan yang mampu disokong selepas bersara. Ia tidak mengambil kira inflasi, kos perubatan yang meningkat, atau dividen yang masih diperoleh jika anda mengekalkan simpanan dalam KWSP selepas umur 55. Untuk perancangan sebenar, semak baki tepat anda melalui i-Akaun dan pertimbangkan untuk berunding dengan perancang kewangan.",
      "KWSP juga menawarkan pelbagai jenis pengeluaran — termasuk pengeluaran untuk pembelian rumah, pendidikan, kesihatan, dan persaraan pada umur 50, 55 dan 60. Memahami bagaimana simpanan anda berkembang membantu anda membuat keputusan yang lebih bijak tentang sama ada untuk mengeluarkan awal atau membiarkan simpanan terus bertambah melalui dividen.",
    ],
  },
  en: {
    title: "EPF / KWSP Calculator Guide",
    paras: [
      "The Employees Provident Fund (EPF), known locally as KWSP, is a mandatory retirement savings fund for most private-sector employees in Malaysia. Each month a portion of your salary together with your employer's contribution is set aside in your EPF account and invested to earn an annual dividend. The calculator on this page helps you estimate how much you might accumulate by the time you retire.",
      "Using it is straightforward. Set your current age and retirement age with the sliders, pick or enter your monthly gross salary, fill in your current EPF balance, and adjust the assumed annual dividend rate. The calculator instantly shows your estimated balance at retirement, the breakdown of monthly employee and employer contributions, total contributions, and the estimated dividends earned.",
      "The calculation uses standard contribution rates: 11% of salary from the employee, and 13% from the employer for wages of RM5,000 and below or 12% for higher wages. Your existing balance and monthly contributions are compounded monthly using the dividend rate you choose. Thanks to compounding, even small differences in dividend rate or saving duration can have a large effect on the final amount.",
      "It is important to remember that the EPF dividend is not fixed. It is declared each year based on the fund's investment performance and has historically often sat around 5% to 6%, although EPF guarantees a minimum dividend of 2.5% for the Conventional Account. Treat the dividend rate here as an estimate, not a guarantee.",
      "The 'monthly withdrawal' estimate divides your retirement balance over 20 or 25 years to give a rough sense of the monthly spending it could support after retirement. It does not account for inflation, rising medical costs, or dividends you would still earn if you keep your savings in the EPF past age 55. For real planning, check your exact balance via i-Akaun and consider speaking with a financial planner.",
      "EPF also offers various withdrawal types — including withdrawals for home purchase, education, health, and retirement at ages 50, 55 and 60. Understanding how your savings grow helps you make smarter decisions about whether to withdraw early or let your balance keep compounding through dividends.",
    ],
  },
};

export default function KWSPArticle() {
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
          {KWSP_FAQ.map((f) => (
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
