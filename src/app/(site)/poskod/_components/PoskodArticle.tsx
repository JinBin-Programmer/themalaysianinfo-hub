"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Semak Poskod Malaysia",
    paras: [
      "Poskod ialah kod pos lima digit yang digunakan di seluruh Malaysia untuk membantu mengisih dan menghantar mel ke kawasan yang betul. Setiap poskod mewakili sebuah kawasan penghantaran tertentu, dan ia menjadi sebahagian penting daripada setiap alamat surat-menyurat, borang dalam talian, penghantaran beli-belah, dan urusan rasmi. Alat semak poskod di halaman ini membolehkan anda memasukkan nombor 5 digit dan dengan segera melihat negeri serta bandar atau kawasan yang berkaitan.",
      "Cara menggunakan alat ini sangat mudah. Taipkan poskod 5 digit ke dalam kotak input, kemudian tekan butang 'Semak' atau kekunci Enter. Hasilnya akan memaparkan negeri dan bandar atau kawasan. Anda juga boleh klik salah satu butang poskod popular seperti Kuala Lumpur, Petaling Jaya, Pulau Pinang atau Johor Bahru untuk melihat contoh dengan pantas tanpa perlu menaip.",
      "Di sebalik tabir, alat ini berfungsi dalam dua peringkat. Pertama, ia memadankan poskod yang anda masukkan dengan senarai poskod utama yang diketahui, supaya bandar tepat seperti KLCC, Shah Alam atau Kuching dapat dipaparkan. Jika poskod itu tiada dalam senarai khusus, alat ini menggunakan julat nombor poskod untuk menentukan negeri — kerana setiap negeri di Malaysia mempunyai julat poskod tersendiri. Sebagai contoh, poskod bermula dengan 0 dan 1 merangkumi Perlis, Kedah dan Pulau Pinang, manakala 50000 hingga 60000 merujuk kawasan Kuala Lumpur.",
      "Memahami struktur poskod Malaysia berguna dalam banyak situasi harian. Apabila anda mengisi alamat penghantaran untuk pembelian dalam talian, poskod yang betul memastikan barang sampai ke destinasi yang dimaksudkan. Apabila mengisi borang rasmi, bank, atau pendaftaran, poskod yang tepat mengelakkan kesilapan dan kelewatan. Pemandu penghantaran dan perkhidmatan logistik juga bergantung kepada poskod untuk merancang laluan yang cekap.",
      "Perlu diingat bahawa data poskod dalam alat ini adalah untuk rujukan umum dan meliputi poskod utama serta julat negeri, bukan pangkalan data rasmi yang lengkap. Sesetengah poskod khas seperti peti surat (PO Box), institusi besar, atau kawasan baharu mungkin tidak dipadankan dengan tepat. Untuk pengesahan rasmi atau poskod yang baru dikeluarkan, sila rujuk laman web Pos Malaysia yang menyimpan pangkalan data poskod kebangsaan yang sah dan dikemas kini.",
      "Secara ringkas, alat semak poskod ini direka untuk menjadi pantas, mudah dan berfungsi sepenuhnya dalam pelayar anda tanpa menghantar data ke mana-mana pelayan. Sama ada anda ingin mengesahkan negeri bagi sesuatu alamat, mengenal pasti kawasan rakan, atau sekadar ingin tahu poskod sesuatu lokasi, alat ini memberikan jawapan dalam beberapa saat sahaja.",
    ],
  },
  en: {
    title: "Malaysia Postcode Lookup Guide",
    paras: [
      "A postcode (poskod) is the five-digit postal code used throughout Malaysia to help sort and deliver mail to the correct area. Each postcode represents a specific delivery zone and forms an essential part of every mailing address, online form, shopping delivery, and official transaction. The postcode checker on this page lets you enter a 5-digit number and instantly see the corresponding state and the city or area.",
      "Using the tool is very simple. Type a 5-digit postcode into the input box, then press the 'Check' button or the Enter key. The result will display the state and the town or area. You can also click one of the popular postcode buttons such as Kuala Lumpur, Petaling Jaya, Penang or Johor Bahru to quickly see an example without typing anything.",
      "Behind the scenes, the tool works in two stages. First, it matches the postcode you entered against a list of known major postcodes, so that exact towns such as KLCC, Shah Alam or Kuching can be shown. If the postcode is not in the specific list, the tool falls back to postcode number ranges to determine the state — because every state in Malaysia has its own range of postcodes. For example, postcodes starting with 0 and 1 cover Perlis, Kedah and Penang, while 50000 to 60000 point to the Kuala Lumpur area.",
      "Understanding the structure of Malaysian postcodes is useful in many everyday situations. When filling in a delivery address for an online purchase, the correct postcode ensures items reach the intended destination. When completing official forms, banking, or registrations, an accurate postcode avoids errors and delays. Delivery drivers and logistics services also rely on postcodes to plan efficient routes.",
      "Keep in mind that the postcode data in this tool is for general reference and covers major postcodes plus state ranges, rather than being a complete official database. Some special-purpose postcodes such as PO boxes, large institutions, or newly developed areas may not match precisely. For official verification or recently issued postcodes, please refer to the Pos Malaysia website, which maintains the authoritative and regularly updated national postcode database.",
      "In short, this postcode checker is designed to be fast, easy, and to run entirely in your browser without sending data to any server. Whether you want to confirm the state of an address, identify a friend's area, or simply find out the postcode of a location, the tool gives you an answer in just a few seconds.",
    ],
  },
};

export default function PoskodArticle() {
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
