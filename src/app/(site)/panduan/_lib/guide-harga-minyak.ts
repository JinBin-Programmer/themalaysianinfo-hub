import type { GuideArticle } from "./types";

export const GUIDE_HARGA_MINYAK: GuideArticle = {
  slug: "bagaimana-harga-minyak-ditetapkan",
  title: "Bagaimana Harga Minyak Ditetapkan di Malaysia? APM, Subsidi & BUDI95",
  titleEn: "How Are Fuel Prices Set in Malaysia? APM, Subsidies & BUDI95 Explained",
  description:
    "Faham mekanisme harga runcit petrol dan diesel di Malaysia — formula APM, pengapungan mingguan RON97, penyasaran subsidi diesel, dan subsidi RON95 bersasar BUDI95.",
  descriptionEn:
    "Understand how Malaysian retail fuel prices work — the APM formula, weekly RON97 float, targeted diesel subsidy, and the BUDI95 targeted RON95 subsidy.",
  icon: "⛽",
  category: "Harga",
  categoryEn: "Prices",
  updated: "2026-07-15",
  readMins: 7,
  intro: [
    "Setiap kali harga minyak diumumkan, timbul persoalan sama: siapa yang menetapkannya, dan berdasarkan apa? Ramai menyangka stesen minyak bebas menentukan harga, sedangkan harga runcit petrol dan diesel di Malaysia dikawal kerajaan melalui mekanisme yang dipanggil Automatic Pricing Mechanism (APM).",
    "Artikel ini menerangkan cara APM berfungsi, kenapa sesetengah gred minyak berubah setiap minggu manakala yang lain kekal, dan bagaimana dasar subsidi bersasar — termasuk pengapungan harga diesel dan program subsidi RON95 bersasar — mengubah landskap harga minyak negara. Untuk harga minggu ini, lihat halaman Harga Petrol kami yang dikemas kini secara automatik daripada data rasmi.",
  ],
  sections: [
    {
      h: "Formula APM: kos sebenar + margin ditetapkan",
      paras: [
        "Di bawah APM, harga runcit setiap gred bahan api dikira daripada beberapa komponen: kos produk (berdasarkan harga pasaran serantau, lazimnya rujukan Means of Platts Singapore), kos pengangkutan dan pemasaran, margin pemborong (syarikat minyak) dan margin peruncit (pengusaha stesen) yang ditetapkan kerajaan. Hasil tambah komponen ini ialah 'harga pasaran sebenar' bahan api tersebut.",
        "Jika kerajaan mahu harga pam lebih rendah daripada harga pasaran sebenar, perbezaannya ditanggung sebagai subsidi. Sebaliknya, apabila harga pasaran jatuh di bawah harga siling yang ditetapkan, pengguna membayar harga pasaran (inilah sebab harga RON97 turun naik setiap minggu).",
      ],
    },
    {
      h: "Kenapa RON97 berubah setiap minggu tetapi RON95 tidak?",
      paras: [
        "RON97 ialah gred premium yang tidak disubsidi — harganya diapungkan sepenuhnya mengikut APM dan dikaji setiap minggu, berkuat kuasa hari Khamis. RON95 pula gred yang dikawal untuk rakyat: kerajaan menetapkan harga jualan dan menanggung (atau menyasarkan) perbezaan kos, jadi harganya tidak berubah mingguan seperti RON97.",
      ],
    },
    {
      h: "Diesel: penyasaran subsidi sejak Jun 2024",
      paras: [
        "Pada Jun 2024, kerajaan mengapungkan harga diesel di Semenanjung Malaysia mengikut harga pasaran, sambil mengekalkan bantuan melalui Skim Subsidi Diesel Bersasar (SKDS) untuk pengangkutan awam dan barangan, serta bantuan tunai Budi Madani bagi individu layak seperti pemilik kenderaan diesel persendirian, petani dan pekebun kecil. Harga diesel di Sabah dan Sarawak dikekalkan pada kadar terkawal.",
        "Rasionalnya: subsidi pukal sebelum itu banyak bocor kepada golongan berkemampuan, kegiatan penyeludupan, dan pengguna asing — penyasaran bertujuan memastikan subsidi sampai kepada yang benar-benar layak.",
      ],
    },
    {
      h: "RON95 bersasar: program BUDI95",
      paras: [
        "Mulai penghujung September 2025, kerajaan melaksanakan subsidi RON95 bersasar melalui program BUDI95 — rakyat Malaysia menikmati harga subsidi (diumumkan pada RM1.99 seliter semasa pelancaran) dengan pengesahan MyKad di pam, tertakluk kepada had isipadu bulanan, manakala bukan warganegara membayar harga tidak bersubsidi. Butiran pelaksanaan seperti had liter, mekanisme pengesahan dan harga tanpa subsidi tertakluk kepada pengumuman semasa Kementerian Kewangan — semak saluran rasmi untuk kadar terkini.",
      ],
    },
    {
      h: "Ke mana arah dasar harga minyak Malaysia?",
      paras: [
        "Trend jelas dasar fiskal negara ialah peralihan daripada subsidi pukal kepada subsidi bersasar — bermula dengan diesel, kemudian RON95. Bagi pengguna, ini bermakna harga pam semakin mencerminkan kos pasaran sebenar, dan bantuan diberikan terus kepada golongan sasar. Amalan terbaik: pantau harga mingguan (khususnya jika anda pengguna RON97 atau diesel), dan pastikan kelayakan anda didaftarkan bagi program subsidi yang berkenaan.",
      ],
    },
  ],
  faq: [
    {
      q: "Bilakah harga minyak dikemas kini?",
      a: "Harga runcit yang diapungkan (seperti RON97) dikaji setiap minggu dan berkuat kuasa hari Khamis, berdasarkan purata harga pasaran minggu sebelumnya. Halaman Harga Petrol kami memaparkan harga terkini secara automatik daripada data rasmi data.gov.my.",
    },
    {
      q: "Kenapa harga minyak Malaysia antara termurah di dunia?",
      a: "Gabungan dua faktor: Malaysia ialah pengeluar minyak, dan yang lebih penting, kerajaan menanggung subsidi ke atas gred yang dikawal. Tanpa subsidi, harga pasaran sebenar RON95 adalah lebih tinggi daripada harga pam bersubsidi.",
    },
    {
      q: "Adakah stesen minyak boleh mengenakan harga sesuka hati?",
      a: "Tidak. Harga runcit petrol dan diesel ialah harga kawalan di bawah Akta Kawalan Harga dan Antipencatutan; menjual melebihi harga ditetapkan adalah kesalahan yang boleh diambil tindakan oleh KPDN.",
    },
    {
      q: "Apa beza RON95 dan RON97?",
      a: "RON (Research Octane Number) mengukur rintangan bahan api terhadap ketukan enjin. Kebanyakan kereta di Malaysia direka untuk RON95; RON97 hanya perlu bagi enjin berprestasi tinggi yang mensyaratkannya. Menggunakan RON97 pada kereta biasa umumnya tidak memberi manfaat berbaloi dengan harganya.",
    },
    {
      q: "Bagaimana saya semak kelayakan subsidi bersasar?",
      a: "Melalui saluran rasmi Kementerian Kewangan / program berkenaan (contohnya portal Budi Madani bagi diesel individu). Pastikan maklumat anda dikemas kini dalam pangkalan data kerajaan yang digunakan untuk penyasaran.",
    },
  ],
  sources: [
    { label: "data.gov.my — data harga bahan api mingguan", url: "https://data.gov.my" },
    { label: "KPDN (Kementerian Perdagangan Dalam Negeri)", url: "https://www.kpdn.gov.my" },
    { label: "Kementerian Kewangan Malaysia", url: "https://www.mof.gov.my" },
  ],
  related: [
    { label: "Harga Petrol Minggu Ini", href: "/petrol" },
    { label: "Kalkulator Cukai Jalan", href: "/cukai-jalan" },
    { label: "Panduan: Renew Roadtax Online", href: "/panduan/cara-renew-roadtax-online" },
  ],
};
