"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PRAYER_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Waktu Solat Malaysia",
    paras: [
      "Waktu solat ialah jadual harian yang menjadi panduan kepada umat Islam di seluruh Malaysia untuk menunaikan lima solat fardhu pada masa yang ditetapkan. Halaman ini memaparkan waktu Subuh, Syuruk, Zohor, Asar, Maghrib dan Isyak untuk Kuala Lumpur dan bandar-bandar utama, lengkap dengan tarikh Hijri serta kiraan masa ke solat seterusnya supaya anda sentiasa bersedia.",
      "Untuk menggunakan alat ini, pilih bandar anda daripada menu pilihan di bahagian atas. Jadual waktu solat akan dikemas kini secara automatik untuk lokasi tersebut, dan kad solat yang seterusnya akan diserlahkan supaya anda dapat melihat dengan jelas solat mana yang akan datang dan berapa lama lagi masanya. Tarikh Gregorian dan tarikh Hijri turut dipaparkan untuk rujukan kalendar Islam anda.",
      "Waktu solat di laman ini dikira menggunakan kaedah Liga Dunia Islam (Muslim World League, Method 3), iaitu kaedah astronomi yang menentukan sudut matahari di bawah ufuk bagi waktu Subuh dan Isyak. Kaedah ini digunakan secara meluas di Malaysia dan menghasilkan waktu yang hampir dengan jadual rasmi. Walau bagaimanapun, JAKIM dan jabatan agama negeri mungkin menggunakan parameter yang sedikit berbeza, jadi waktu yang dipaparkan di sini patut dianggap sebagai rujukan.",
      "Malaysia merangkumi kawasan yang luas dari Perlis di utara hingga Johor di selatan, serta Sabah dan Sarawak di Borneo. Oleh kerana waktu solat bergantung pada kedudukan matahari yang berbeza mengikut latitud dan longitud, waktu di setiap bandar berbeza beberapa minit. Sebagai contoh, matahari terbit lebih awal di Kuching dan Kota Kinabalu berbanding Semenanjung, menjadikan waktu Subuh dan Maghrib mereka lebih awal.",
      "Syuruk dan Imsak sering menimbulkan kekeliruan. Syuruk ialah waktu matahari terbit dan menandakan tamatnya tempoh untuk menunaikan solat Subuh — ia bukan satu solat. Imsak pula menandakan permulaan tempoh berpuasa semasa Ramadan, biasanya sekitar sepuluh minit sebelum Subuh, sebagai amaran agar umat Islam berhenti makan dan minum sebelum azan Subuh berkumandang.",
      "Untuk waktu yang paling tepat dan rasmi bagi tujuan ibadah, kami sentiasa menggalakkan anda merujuk aplikasi e-Solat JAKIM, masjid berhampiran, atau jabatan agama negeri anda. Alat ini bertujuan memberikan rujukan pantas dan mudah, terutamanya apabila anda di luar rumah atau merancang perjalanan, supaya anda tidak terlepas waktu solat.",
    ],
  },
  en: {
    title: "Malaysia Prayer Times Guide",
    paras: [
      "Prayer times (waktu solat) form the daily schedule that guides Muslims across Malaysia in performing the five obligatory prayers at their appointed moments. This page displays the times for Subuh, Syuruk, Zohor, Asar, Maghrib and Isyak for Kuala Lumpur and other major cities, complete with the Hijri date and a countdown to the next prayer so you are always prepared.",
      "To use this tool, select your city from the dropdown menu at the top. The prayer time table updates automatically for that location, and the upcoming prayer card is highlighted so you can clearly see which prayer is next and how much time remains. The Gregorian and Hijri dates are also shown for your Islamic calendar reference.",
      "The prayer times on this page are calculated using the Muslim World League method (Method 3), an astronomical approach that defines the angle of the sun below the horizon for the Subuh and Isyak times. This method is widely used in Malaysia and produces times very close to the official schedules. However, JAKIM and state religious departments may use slightly different parameters, so the times shown here should be treated as a reference.",
      "Malaysia spans a wide area, from Perlis in the north to Johor in the south, plus Sabah and Sarawak on Borneo. Because prayer times depend on the position of the sun, which varies with latitude and longitude, the times in each city differ by a few minutes. For example, the sun rises earlier in Kuching and Kota Kinabalu than in the Peninsula, making their Subuh and Maghrib times earlier.",
      "Syuruk and Imsak often cause confusion. Syuruk is the moment of sunrise and marks the end of the window for performing the Subuh prayer — it is not a prayer in itself. Imsak marks the start of the fasting period during Ramadan, usually around ten minutes before Subuh, as a warning for Muslims to stop eating and drinking before the Subuh call to prayer.",
      "For the most accurate and official times for worship, we always encourage you to refer to the JAKIM e-Solat app, your local mosque, or your state religious department. This tool is designed to provide a quick and convenient reference, especially when you are out and about or planning a journey, so that you never miss a prayer time.",
    ],
  },
};

export default function PrayerArticle() {
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
          {PRAYER_FAQ.map((f) => (
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
