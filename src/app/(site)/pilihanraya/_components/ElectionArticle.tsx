"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ELECTION_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Pilihan Raya Malaysia",
    paras: [
      "Malaysia mengamalkan sistem demokrasi berparlimen di mana rakyat mengundi untuk memilih wakil di dua peringkat: Parlimen Persekutuan (Dewan Rakyat) dan Dewan Undangan Negeri (DUN). Pilihan Raya Umum (PRU) menentukan 222 kerusi Parlimen, dan gabungan parti yang menguasai majoriti mudah 112 kerusi berhak membentuk kerajaan Persekutuan serta melantik Perdana Menteri. Halaman ini merangkum keputusan PRU15 (2022) dan keputusan pilihan raya negeri terkini bagi setiap negeri.",
      "Pilihan Raya Umum ke-15 pada 19 November 2022 mencatat sejarah apabila buat pertama kalinya tiada satu gabungan pun memperoleh majoriti mudah, menghasilkan Parlimen tergantung. Pakatan Harapan memenangi 82 kerusi, Perikatan Nasional 74, Barisan Nasional 30, GPS 23, GRS 6 dan Warisan 3. Selepas rundingan, Anwar Ibrahim dilantik sebagai Perdana Menteri ke-10 pada 24 November 2022 dengan menerajui sebuah kerajaan perpaduan yang menggabungkan PH, BN, GPS, GRS dan beberapa parti lain.",
      "Berbeza dengan banyak negara, Dewan Undangan Negeri di Malaysia tidak semestinya dibubarkan serentak dengan Parlimen. Perlis, Perak dan Pahang membubarkan DUN serentak PRU15, manakala enam negeri — Selangor, Negeri Sembilan, Pulau Pinang, Kedah, Kelantan dan Terengganu — mengadakan pilihan raya negeri pada 12 Ogos 2023. Melaka dan Sarawak mengundi pada 2021, Johor pada 2022, dan yang terbaharu, Sabah pada 29 November 2025. Sebab itulah peta kerajaan negeri Malaysia berubah-ubah ikut kitaran berbeza.",
      "Gunakan peta interaktif di atas untuk meneroka setiap negeri. Klik mana-mana negeri untuk melihat gabungan yang memerintah, nama Menteri Besar atau Ketua Menteri serta partinya, keputusan DUN terkini mengikut gabungan, dan jumlah kerusi Parlimen yang disumbangkan negeri itu. Warna pada peta mewakili gabungan yang menerajui kerajaan negeri pada masa ini — PAS/Perikatan Nasional menguasai utara Semenanjung, Pakatan Harapan kuat di pantai barat tengah, manakala Sabah dan Sarawak kekal dengan parti tempatan masing-masing.",
      "Maklumat di halaman ini adalah untuk rujukan dan pendidikan sahaja. Keputusan rasmi dan terkini boleh disahkan melalui laman web Suruhanjaya Pilihan Raya Malaysia (SPR). Penggal Parlimen semasa dijangka berakhir menjelang 2027, jadi Pilihan Raya Umum ke-16 (PRU16) berkemungkinan diadakan antara lewat 2026 hingga 2027.",
    ],
  },
  en: {
    title: "Malaysia Election Guide",
    paras: [
      "Malaysia is a parliamentary democracy in which citizens vote to elect representatives at two levels: the federal Parliament (Dewan Rakyat) and the State Legislative Assemblies (DUN). A General Election decides all 222 parliamentary seats, and the coalition that controls a simple majority of 112 seats forms the federal government and appoints the Prime Minister. This page summarises the GE15 (2022) result and the most recent state election for every state.",
      "The 15th General Election on 19 November 2022 made history as the first time no single coalition won a simple majority, producing a hung Parliament. Pakatan Harapan won 82 seats, Perikatan Nasional 74, Barisan Nasional 30, GPS 23, GRS 6 and Warisan 3. After negotiations, Anwar Ibrahim was appointed the 10th Prime Minister on 24 November 2022, leading a unity government that combines PH, BN, GPS, GRS and several other parties.",
      "Unlike many countries, Malaysian State Assemblies are not necessarily dissolved at the same time as Parliament. Perlis, Perak and Pahang dissolved their assemblies together with GE15, while six states — Selangor, Negeri Sembilan, Penang, Kedah, Kelantan and Terengganu — held elections on 12 August 2023. Malacca and Sarawak voted in 2021, Johor in 2022, and most recently Sabah on 29 November 2025. That is why Malaysia's state-government map shifts on different cycles.",
      "Use the interactive map above to explore each state. Click any state to see the ruling coalition, the name and party of its Menteri Besar or Chief Minister, the latest assembly result by coalition, and how many parliamentary seats that state contributes. The map colours show which coalition currently leads each state government — PAS/Perikatan Nasional dominates the northern Peninsula, Pakatan Harapan is strong on the central west coast, while Sabah and Sarawak stay with their respective local parties.",
      "The information here is for reference and educational purposes only. Official and up-to-date results can be confirmed on the Election Commission of Malaysia (SPR) website. The current parliamentary term is expected to end by 2027, so the 16th General Election (GE16) is likely to be held between late 2026 and 2027.",
    ],
  },
};

export default function ElectionArticle() {
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
          {ELECTION_FAQ.map((f) => (
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
