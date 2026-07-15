import type { GuideArticle } from "./types";

export const GUIDE_EFILING_LHDN: GuideArticle = {
  slug: "panduan-e-filing-lhdn",
  title: "Panduan e-Filing LHDN: Cara Isytihar Cukai Pendapatan Kali Pertama",
  titleEn: "LHDN e-Filing Guide: How to File Your Income Tax for the First Time",
  description:
    "Langkah demi langkah memfailkan cukai pendapatan melalui MyTax — daftar nombor cukai, dapatkan sijil digital, pilih borang yang betul (e-BE/e-B), dan elak kesilapan biasa.",
  descriptionEn:
    "Step-by-step guide to filing income tax via MyTax — register a tax number, get your digital certificate, choose the right form (e-BE/e-B), and avoid common mistakes.",
  icon: "🧾",
  category: "Cukai",
  categoryEn: "Tax",
  updated: "2026-07-15",
  readMins: 8,
  intro: [
    "Memfailkan cukai pendapatan buat kali pertama boleh terasa menakutkan, tetapi sistem e-Filing LHDN melalui portal MyTax sebenarnya agak mudah setelah anda faham alirannya. Kebanyakan pekerja boleh melengkapkan pengisytiharan dalam masa 30 hingga 60 minit sahaja, terutamanya kerana maklumat pendapatan daripada majikan kini diprapopulasi dalam borang.",
    "Panduan ini merangkumi siapa yang perlu memfailkan cukai, cara mendaftar akaun MyTax, memilih borang yang betul, dan perkara yang perlu disediakan sebelum anda bermula.",
  ],
  sections: [
    {
      h: "Siapa yang wajib failkan cukai?",
      paras: [
        "Secara umum, anda perlu mendaftar fail cukai dan memfailkan borang tahunan jika pendapatan tahunan anda melepasi paras yang menyebabkan cukai kena dibayar selepas mengambil kira pelepasan asas dan caruman KWSP. Sebagai panduan kasar yang sering dipetik, pekerja bergaji sekitar RM3,000 ke atas sebulan wajar mendaftar. Walaupun pendapatan anda di bawah paras bercukai, memfailkan cukai tetap berguna — rekod cukai sering diperlukan untuk permohonan pinjaman rumah dan kad kredit.",
        "Penting: mempunyai PCB (potongan bulanan) tidak bermakna anda terlepas daripada kewajipan memfailkan. e-Filing tahunan ialah proses memuktamadkan cukai sebenar anda — anda mungkin layak menerima bayaran balik jika PCB terlebih potong.",
      ],
    },
    {
      h: "Langkah 1: Daftar nombor cukai & akaun MyTax",
      paras: [
        "Jika anda belum mempunyai nombor cukai pendapatan (TIN), daftar melalui portal MyTax di mytax.hasil.gov.my menggunakan e-Daftar. Sediakan MyKad dan maklumat majikan. Selepas nombor cukai diperoleh, anda perlu mendapatkan sijil digital untuk log masuk kali pertama — pilih 'First Time Login', masukkan PIN e-Filing (boleh dipohon dalam talian melalui e-CP55D atau di cawangan LHDN), dan tetapkan kata laluan.",
        "Pengesahan identiti kini turut boleh dibuat sepenuhnya dalam talian melalui padanan MyKad dan pengecaman wajah dalam kebanyakan kes, tanpa perlu ke kaunter.",
      ],
    },
    {
      h: "Langkah 2: Pilih borang yang betul",
      paras: [
        "Borang yang anda isi bergantung pada jenis pendapatan:",
      ],
      list: [
        "e-BE — individu pemastautin yang hanya ada pendapatan penggajian (majoriti pekerja). Tarikh akhir lazim: 30 April (dengan tempoh lanjutan bagi e-Filing).",
        "e-B — individu pemastautin yang ada pendapatan perniagaan (termasuk kerja bebas / gig). Tarikh akhir lazim: 30 Jun (dengan lanjutan e-Filing).",
        "e-M — individu bukan pemastautin.",
        "e-BT / e-MT — individu berstatus pekerja berpengetahuan/pakar yang diluluskan.",
      ],
    },
    {
      h: "Langkah 3: Semak maklumat & isi pelepasan",
      paras: [
        "Dalam borang e-Filing, maklumat penggajian dan PCB biasanya telah diprapopulasi daripada penyata EA yang dihantar majikan — namun anda tetap bertanggungjawab menyemak ketepatannya berbanding borang EA yang diberikan majikan anda (majikan wajib memberikannya setiap awal tahun).",
        "Bahagian paling penting ialah pelepasan cukai (tax relief). Masukkan pelepasan yang anda layak — pelepasan individu, KWSP dan insurans, perubatan, gaya hidup, pendidikan anak dan sebagainya — kerana inilah yang mengurangkan cukai anda. Pastikan anda menyimpan resit selama tujuh tahun kerana LHDN boleh membuat audit.",
      ],
    },
    {
      h: "Langkah 4: Hantar dan bayar (atau tunggu bayaran balik)",
      paras: [
        "Selepas semua maklumat lengkap, sistem mengira sama ada anda mempunyai baki cukai perlu dibayar atau lebihan untuk dikembalikan. Bayaran boleh dibuat melalui perbankan internet (FPX) di ByrHASiL. Jika terlebih bayar, bayaran balik biasanya dikreditkan ke akaun bank berdaftar anda dalam tempoh beberapa minggu selepas pemfailan e-Filing yang lengkap.",
        "Simpan pengesahan penghantaran (acknowledgement) sebagai rekod. Kegagalan memfailkan dalam tempoh ditetapkan boleh dikenakan penalti di bawah Akta Cukai Pendapatan 1967.",
      ],
    },
    {
      h: "Kesilapan biasa yang perlu dielakkan",
      paras: ["Berikut kesilapan yang paling kerap dilakukan pemfail kali pertama:"],
      list: [
        "Menuntut pelepasan tanpa resit atau bukti — berisiko penalti jika diaudit.",
        "Terlupa melaporkan pendapatan sampingan (kerja bebas, sewa, komisen) — semua pendapatan bercukai wajib diisytihar.",
        "Tersalah borang (e-BE sedangkan ada pendapatan perniagaan/gig — sepatutnya e-B).",
        "Tidak mengemas kini nombor akaun bank — melambatkan bayaran balik cukai.",
        "Menunggu saat akhir — portal MyTax sesak menjelang tarikh akhir setiap tahun.",
      ],
    },
  ],
  faq: [
    {
      q: "Bilakah tarikh akhir e-Filing?",
      a: "Bagi individu tanpa pendapatan perniagaan (Borang BE), tarikh akhir lazim ialah 30 April, dengan tempoh lanjutan tambahan bagi pemfailan elektronik. Bagi Borang B (ada pendapatan perniagaan), 30 Jun. Sentiasa sahkan tarikh tepat tahun semasa di portal LHDN.",
    },
    {
      q: "Apa beza borang EA dan borang BE?",
      a: "Borang EA ialah penyata gaji tahunan yang disediakan majikan kepada anda sebagai rujukan — ia tidak dihantar kepada LHDN oleh anda. Borang BE pula ialah borang pengisytiharan cukai yang anda failkan kepada LHDN melalui e-Filing.",
    },
    {
      q: "Saya kerja gig / freelance sepenuh masa. Borang apa saya guna?",
      a: "Pendapatan bebas dikira sebagai pendapatan perniagaan, jadi anda memfailkan Borang B (e-B), bukan e-BE. Anda juga boleh menolak perbelanjaan perniagaan yang dibenarkan daripada pendapatan kasar.",
    },
    {
      q: "Adakah zakat mengurangkan cukai saya?",
      a: "Ya. Bagi individu Muslim, zakat pendapatan yang dibayar kepada pihak berkuasa zakat negeri diberikan sebagai rebat cukai — ia mengurangkan cukai anda secara ringgit ke ringgit, sehingga jumlah cukai yang dikenakan.",
    },
    {
      q: "Berapa lama saya perlu simpan resit pelepasan cukai?",
      a: "Tujuh tahun dari tarikh pemfailan, seperti dikehendaki Akta Cukai Pendapatan 1967. LHDN boleh meminta bukti dalam tempoh tersebut jika fail anda diaudit.",
    },
  ],
  sources: [
    { label: "Portal MyTax LHDN", url: "https://mytax.hasil.gov.my" },
    { label: "Laman rasmi LHDN", url: "https://www.hasil.gov.my" },
  ],
  related: [
    { label: "Kalkulator Cukai Pendapatan", href: "/cukai-pendapatan" },
    { label: "Kalkulator Gaji Bersih", href: "/gaji-bersih" },
    { label: "Panduan: Pelepasan Cukai Individu", href: "/panduan/pelepasan-cukai-individu" },
  ],
};
