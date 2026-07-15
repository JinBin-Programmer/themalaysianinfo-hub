"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Cuti Umum Malaysia",
    paras: [
      "Cuti umum ialah hari yang diisytiharkan oleh kerajaan persekutuan atau kerajaan negeri sebagai hari rehat di mana kebanyakan pejabat, sekolah dan perniagaan ditutup. Halaman ini menyenaraikan semua cuti umum Malaysia bagi tahun 2026 dan 2027, dikelaskan kepada cuti kebangsaan, cuti agama dan cuti negeri, lengkap dengan kiraan hari sehingga cuti seterusnya supaya anda boleh merancang lebih awal.",
      "Untuk menggunakan kalkulator ini, pilih tahun yang anda mahu lihat, kemudian pilih negeri anda daripada senarai. Senarai akan dikemas kini secara automatik untuk memaparkan cuti kebangsaan yang dikongsi oleh semua negeri, bersama cuti khas negeri tersebut seperti hari keputeraan pemerintah negeri atau perayaan tempatan. Sepanduk 'Cuti Seterusnya' di bahagian atas menunjukkan berapa hari lagi sehingga cuti akan datang, manakala setiap cuti disusun mengikut bulan.",
      "Cuti umum di Malaysia terbahagi kepada tiga jenis utama. Cuti kebangsaan seperti Hari Kebangsaan (31 Ogos), Hari Malaysia (16 September), Hari Buruh dan Tahun Baru dikuatkuasakan di seluruh negara. Cuti agama mencerminkan kepelbagaian masyarakat Malaysia, termasuk Hari Raya Aidilfitri, Aidiladha, Tahun Baru Cina, Deepavali, Wesak dan Krismas. Cuti negeri pula khusus untuk negeri tertentu, contohnya Hari Gawai di Sarawak, Pesta Menuai (Kaamatan) di Sabah, dan pelbagai hari keputeraan sultan dan raja.",
      "Satu perkara penting untuk difahami ialah banyak cuti agama bergantung pada kalendar lunar atau penampakan anak bulan. Cuti Islam seperti Hari Raya Aidilfitri dan Awal Muharram mengikut kalendar Hijrah, manakala Tahun Baru Cina, Deepavali, Wesak dan Thaipusam ditetapkan mengikut kalendar lunar masing-masing. Oleh itu, tarikh yang ditandakan 'Anggaran' di halaman ini mungkin berubah satu atau dua hari selepas pengesahan rasmi oleh pihak berkuasa.",
      "Mengetahui tarikh cuti umum lebih awal membolehkan anda merancang cuti panjang dengan lebih bijak. Jika sesuatu cuti jatuh pada hari Selasa atau Khamis, mengambil cuti tahunan sehari pada hari Isnin atau Jumaat boleh menghasilkan percutian empat hari berturut-turut. Dengan memilih negeri anda terlebih dahulu, kiraan akan merangkumi cuti negeri yang berkaitan, memberi gambaran sebenar tentang bilangan hari rehat yang anda nikmati sepanjang tahun.",
      "Sila ambil perhatian bahawa maklumat di halaman ini disediakan sebagai rujukan umum. Tarikh sebenar, terutamanya bagi cuti agama dan cuti ganti apabila cuti jatuh pada hari rehat, disahkan melalui pengumuman rasmi kerajaan persekutuan dan negeri. Untuk perancangan rasmi seperti urusan kerja, perniagaan atau perjalanan, sentiasa sahkan tarikh dengan sumber rasmi sebelum membuat sebarang komitmen.",
    ],
  },
  en: {
    title: "Malaysia Public Holidays Guide",
    paras: [
      "A public holiday is a day declared by the federal or state government as a rest day, on which most offices, schools and businesses are closed. This page lists every Malaysian public holiday for 2026 and 2027, organised into national, religious and state holidays, complete with a countdown to the next holiday so you can plan ahead.",
      "To use this calculator, choose the year you want to view, then select your state from the list. The list updates automatically to show the national holidays shared by all states, together with that state's specific holidays such as the ruler's birthday or local celebrations. The 'Next Holiday' banner at the top shows how many days remain until the upcoming holiday, while each holiday is grouped by month for easy reference.",
      "Malaysian public holidays fall into three main types. National holidays such as National Day (31 August), Malaysia Day (16 September), Labour Day and New Year's Day apply across the whole country. Religious holidays reflect Malaysia's diverse society, including Hari Raya Aidilfitri, Aidiladha, Chinese New Year, Deepavali, Wesak and Christmas. State holidays are specific to particular states, for example Gawai Day in Sarawak, the Harvest Festival (Kaamatan) in Sabah, and the various birthdays of sultans and rulers.",
      "One important thing to understand is that many religious holidays depend on the lunar calendar or moon sighting. Islamic holidays such as Hari Raya Aidilfitri and Awal Muharram follow the Hijri calendar, while Chinese New Year, Deepavali, Wesak and Thaipusam follow their respective lunar calendars. For this reason, dates marked 'Approximate' on this page may shift by a day or two after official confirmation by the authorities.",
      "Knowing public holiday dates in advance lets you plan long weekends more cleverly. If a holiday falls on a Tuesday or Thursday, taking a single day of annual leave on the Monday or Friday can produce a four-day break. By selecting your state first, the count will include the relevant state holidays, giving you an accurate picture of how many rest days you enjoy throughout the year.",
      "Please note that the information on this page is provided as a general reference. The actual dates, especially for religious holidays and replacement holidays when a holiday falls on a rest day, are confirmed through official federal and state government announcements. For official planning such as work, business or travel, always verify the dates with official sources before making any commitments.",
    ],
  },
};

export default function CutiUmumArticle() {
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
