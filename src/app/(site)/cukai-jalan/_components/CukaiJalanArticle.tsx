"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Cukai Jalan Malaysia",
    paras: [
      "Cukai jalan, atau road tax, ialah bayaran tahunan wajib yang dikenakan ke atas semua kenderaan bermotor yang didaftarkan di Malaysia oleh Jabatan Pengangkutan Jalan (JPJ). Pelekat cukai jalan yang sah, bersama insurans kenderaan, adalah syarat undang-undang sebelum sesebuah kenderaan boleh digunakan di jalan raya awam. Kalkulator di halaman ini membantu anda menganggar berapa banyak cukai jalan yang perlu dibayar untuk kereta atau motosikal anda dengan hanya memasukkan kapasiti enjin dan memilih wilayah pendaftaran.",
      "Cara menggunakannya mudah. Pertama, pilih jenis kenderaan anda — kereta atau motosikal. Kemudian pilih wilayah pendaftaran, sama ada Semenanjung Malaysia atau Sabah/Sarawak. Akhir sekali, pilih kapasiti enjin daripada nilai pratetap yang biasa, atau masukkan nilai CC khusus anda sendiri dalam kotak input. Kalkulator akan memaparkan anggaran cukai jalan tahunan serta jumlah enam bulan secara serta-merta, bersama pecahan ringkas dalam jadual di bawah.",
      "Bagaimanakah cukai jalan dikira? Di Malaysia, kadar cukai jalan untuk kenderaan persendirian adalah berdasarkan kapasiti enjin yang diukur dalam sentimeter padu (CC). Sistemnya bersifat progresif: kenderaan dengan enjin kecil membayar kadar rendah yang tetap, manakala enjin yang lebih besar dikenakan kadar yang jauh lebih tinggi. Sebagai contoh, kereta di bawah 1000cc membayar kadar minimum yang rendah, manakala kereta melebihi 2000cc memasuki kategori kadar progresif yang meningkat dengan ketara setiap CC tambahan. Kalkulator ini menggunakan jadual julat CC untuk memberi anggaran yang munasabah.",
      "Wilayah pendaftaran juga penting. Kenderaan yang didaftarkan di Sabah dan Sarawak umumnya menikmati kadar cukai jalan yang lebih rendah berbanding Semenanjung. Ini sebahagiannya mengambil kira keadaan jalan raya, jarak, dan pertimbangan ekonomi di Borneo. Dalam kalkulator ini, kadar Sabah/Sarawak dianggarkan kira-kira 30% lebih rendah daripada kadar Semenanjung sebagai panduan kasar — kadar rasmi sebenar mungkin berbeza sedikit.",
      "Perlu diingat bahawa kadar yang dipaparkan adalah untuk kenderaan persendirian sahaja. Kenderaan komersial, kenderaan yang didaftarkan atas nama syarikat, kenderaan untuk Orang Kurang Upaya (OKU), dan kenderaan antik mempunyai struktur kadar atau pelepasan yang berbeza. Untuk kenderaan elektrik (EV), kerajaan telah memberikan pengecualian cukai jalan bagi tempoh tertentu sebagai galakan. Sentiasa rujuk JPJ atau MyEG untuk maklumat terkini.",
      "Untuk memperbaharui cukai jalan, anda boleh berbuat demikian secara dalam talian melalui MyEG, di kaunter JPJ, di Pejabat Pos terpilih, atau melalui aplikasi mudah alih yang diluluskan. Pastikan insurans kenderaan anda sah terlebih dahulu, kerana ia adalah syarat wajib untuk pembaharuan. Memandu dengan cukai jalan tamat tempoh boleh dikenakan kompaun dan menjejaskan perlindungan insurans anda. Gunakan kalkulator ini untuk merancang bajet pembaharuan tahunan anda dengan lebih baik.",
    ],
  },
  en: {
    title: "Malaysia Road Tax Guide",
    paras: [
      "Road tax, or cukai jalan, is a mandatory annual fee imposed on all registered motor vehicles in Malaysia by the Road Transport Department (JPJ). A valid road tax disc, together with vehicle insurance, is a legal requirement before a vehicle can be used on public roads. The calculator on this page helps you estimate how much road tax you need to pay for your car or motorcycle by simply entering the engine capacity and selecting your region of registration.",
      "Using it is simple. First, select your vehicle type — car or motorcycle. Then choose your region of registration, either Peninsular Malaysia or Sabah/Sarawak. Finally, pick the engine capacity from the common preset values, or type your own custom CC value in the input box. The calculator instantly displays the estimated annual road tax along with the six-month amount, plus a quick breakdown in the table below.",
      "How is road tax calculated? In Malaysia, the road tax rate for private vehicles is based on engine capacity measured in cubic centimetres (CC). The system is progressive: vehicles with small engines pay a low fixed rate, while larger engines attract considerably higher rates. For example, cars below 1000cc pay a low minimum rate, while cars above 2000cc enter a progressive rate band that increases significantly per additional CC. This calculator uses a CC band table to give a reasonable estimate.",
      "Region of registration also matters. Vehicles registered in Sabah and Sarawak generally enjoy lower road tax rates than those in the Peninsula. This partly accounts for road conditions, distances, and economic considerations in Borneo. In this calculator, the Sabah/Sarawak rate is estimated at roughly 30% lower than the Peninsular rate as a rough guide — the actual official rate may differ slightly.",
      "Bear in mind that the rates shown are for private vehicles only. Commercial vehicles, company-registered vehicles, vehicles for persons with disabilities (OKU), and antique vehicles have different rate structures or exemptions. For electric vehicles (EVs), the government has granted road tax exemptions for a set period as an incentive. Always refer to JPJ or MyEG for the latest information.",
      "To renew your road tax, you can do so online via MyEG, at JPJ counters, at selected Post Offices, or through an approved mobile app. Make sure your vehicle insurance is valid first, as it is a mandatory requirement for renewal. Driving with expired road tax can result in a compound and may affect your insurance coverage. Use this calculator to better plan your annual renewal budget.",
    ],
  },
};

export default function CukaiJalanArticle() {
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
