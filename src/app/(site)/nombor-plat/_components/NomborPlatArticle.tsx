"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Semak Nombor Plat Kereta Malaysia",
    paras: [
      "Setiap kenderaan berdaftar di Malaysia membawa nombor plat yang dikeluarkan oleh Jabatan Pengangkutan Jalan (JPJ). Nombor plat ini bukan sekadar gabungan huruf dan angka rawak — huruf awalannya sebenarnya menunjukkan negeri tempat kenderaan itu mula-mula didaftarkan. Alat Semak Nombor Plat ini membaca awalan tersebut dan memberitahu anda negeri asal plat, serta kadang-kadang daerah keluarannya, dalam beberapa saat sahaja.",
      "Cara menggunakannya sangat mudah. Taipkan nombor plat dalam kotak input — contohnya 'WA1234B', 'BKL5566' atau 'JHT88' — dan tekan butang Semak Plat. Alat akan mengabaikan ruang dan sengkang, menukar huruf kepada huruf besar, dan memadankan awalannya dengan pangkalan data kod negeri. Anda akan melihat bendera negeri, nama negeri dalam Bahasa Melayu atau Inggeris, dan jika tersedia, nama daerah seperti Johor Bahru, Klang atau Kota Kinabalu.",
      "Sistem pengekodan plat Malaysia berfungsi mengikut huruf pertama. Huruf 'B' merujuk kepada Selangor, 'J' kepada Johor, 'P' kepada Pulau Pinang, 'A' kepada Perak, 'C' kepada Pahang, 'D' kepada Kelantan, 'K' kepada Kedah, 'M' kepada Melaka, 'N' kepada Negeri Sembilan, 'R' kepada Perlis, 'T' kepada Terengganu, manakala 'W' dan 'V' kepada Wilayah Persekutuan Kuala Lumpur, 'F' kepada Putrajaya dan 'L' kepada Labuan. Bagi Borneo, 'Q' digunakan untuk Sabah dan 'S' untuk Sarawak, kedua-duanya dengan sistem siri huruf yang lebih terperinci.",
      "Huruf kedua pada sesetengah plat menunjukkan siri pendaftaran dan, secara sejarah, daerah keluaran asal. Sebagai contoh, 'JB' dikaitkan dengan Johor Bahru, 'BK' dengan Klang, dan 'AA' dengan Ipoh. Memandangkan permintaan untuk nombor plat baharu sentiasa meningkat, JPJ memperkenalkan siri huruf baharu dari semasa ke semasa, jadi sesetengah siri terbaharu mungkin tidak lagi terikat ketat kepada daerah tertentu.",
      "Penting untuk difahami bahawa alat ini hanya mengenal pasti negeri dan kawasan daripada kod plat. Ia TIDAK boleh menunjukkan nama pemilik, sejarah kemalangan, status cukai jalan, atau maklumat peribadi lain — kerana data tersebut dilindungi undang-undang privasi dan hanya boleh diakses melalui portal rasmi JPJ atau aplikasi MyJPJ oleh pihak yang dibenarkan. Untuk plat siri khas, plat vanity, plat kerajaan atau diplomatik, corak biasa mungkin tidak terpakai, jadi keputusan harus dianggap sebagai panduan dan bukan pengesahan rasmi.",
    ],
  },
  en: {
    title: "Malaysia Car Plate Lookup Guide",
    paras: [
      "Every registered vehicle in Malaysia carries a number plate issued by the Road Transport Department (JPJ). These plates are not just random combinations of letters and numbers — the leading letters actually reveal the state where the vehicle was first registered. This Car Plate Checker reads that prefix and tells you the plate's originating state, and sometimes its issuing district, in just a few seconds.",
      "Using it is straightforward. Type a plate number into the input box — for example 'WA1234B', 'BKL5566' or 'JHT88' — and press the Decode Plate button. The tool ignores spaces and dashes, converts the letters to uppercase, and matches the prefix against a state-code database. You will see the state flag, the state name in Malay or English, and, where available, a district name such as Johor Bahru, Klang or Kota Kinabalu.",
      "Malaysia's plate coding system works from the first letter. 'B' refers to Selangor, 'J' to Johor, 'P' to Penang, 'A' to Perak, 'C' to Pahang, 'D' to Kelantan, 'K' to Kedah, 'M' to Melaka, 'N' to Negeri Sembilan, 'R' to Perlis, 'T' to Terengganu, while 'W' and 'V' belong to the Federal Territory of Kuala Lumpur, 'F' to Putrajaya, and 'L' to Labuan. For Borneo, 'Q' is used for Sabah and 'S' for Sarawak, both with more detailed letter-series systems.",
      "The second letter on some plates indicates the registration series and, historically, the district where it was originally issued. For example, 'JB' is associated with Johor Bahru, 'BK' with Klang, and 'AA' with Ipoh. As demand for new plate numbers keeps rising, JPJ introduces new letter series from time to time, so some of the newest series may no longer be strictly tied to a specific district.",
      "It is important to understand that this tool only identifies the state and area from the plate code. It does NOT show owner names, accident history, road-tax status, or any other personal information — that data is protected by privacy laws and can only be accessed through the official JPJ portal or the MyJPJ app by authorised parties. For special series, vanity, government or diplomatic plates, the usual pattern may not apply, so results should be treated as guidance rather than an official confirmation.",
    ],
  },
};

export default function NomborPlatArticle() {
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
    </div>
  );
}
