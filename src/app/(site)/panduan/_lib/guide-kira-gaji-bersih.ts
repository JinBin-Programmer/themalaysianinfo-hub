import type { GuideArticle } from "./types";

export const GUIDE_KIRA_GAJI_BERSIH: GuideArticle = {
  slug: "cara-kira-gaji-bersih",
  title: "Cara Kira Gaji Bersih di Malaysia: KWSP, PERKESO, SIP & PCB",
  titleEn: "How to Calculate Take-Home Pay in Malaysia: EPF, SOCSO, EIS & PCB",
  description:
    "Faham setiap potongan pada slip gaji anda — caruman KWSP 11%, PERKESO, SIP/EIS dan Potongan Cukai Bulanan (PCB) — serta contoh pengiraan gaji bersih penuh.",
  descriptionEn:
    "Understand every deduction on your Malaysian payslip — EPF 11%, SOCSO, EIS and monthly tax deduction (PCB) — with a full net salary calculation example.",
  icon: "💵",
  category: "Kewangan",
  categoryEn: "Finance",
  updated: "2026-07-15",
  readMins: 7,
  intro: [
    "Tawaran kerja menyatakan gaji RM4,000, tetapi jumlah yang masuk ke akaun bank anda setiap bulan adalah kurang daripada itu. Ke mana perginya bakinya? Jawapannya: potongan berkanun — caruman wajib kepada KWSP, PERKESO dan Sistem Insurans Pekerjaan (SIP), serta Potongan Cukai Bulanan (PCB) jika pendapatan anda melepasi paras tertentu.",
    "Artikel ini menerangkan setiap potongan tersebut satu persatu, lengkap dengan contoh pengiraan, supaya anda tahu dengan tepat bagaimana gaji bersih (take-home pay) anda terhasil. Untuk pengiraan automatik, cuba Kalkulator Gaji Bersih kami.",
  ],
  sections: [
    {
      h: "Potongan 1: Caruman KWSP (11%)",
      paras: [
        "Potongan terbesar pada slip gaji kebanyakan pekerja ialah caruman KWSP sebanyak 11% daripada upah bulanan. Wang ini bukan 'hilang' — ia masuk ke akaun persaraan anda sendiri dan menerima dividen setiap tahun. Majikan pula menambah 12% atau 13% lagi (bergantung pada gaji anda) tanpa memotong daripada gaji anda. Amaun tepat ditentukan mengikut Jadual Ketiga Akta KWSP, jadi ia mungkin berbeza satu dua ringgit daripada pengiraan peratus langsung.",
      ],
    },
    {
      h: "Potongan 2: PERKESO (SOCSO)",
      paras: [
        "Caruman PERKESO melindungi anda daripada bencana pekerjaan (kemalangan semasa bekerja atau perjalanan ke tempat kerja) dan keilatan. Pekerja mencarum kira-kira 0.5% daripada gaji, manakala majikan mencarum kira-kira 1.75%. Caruman dikira berdasarkan jadual gaji PERKESO dan tertakluk kepada siling gaji bulanan yang ditetapkan (siling ini dinaikkan ke RM6,000 mulai Oktober 2024 — semak kadar semasa di laman PERKESO).",
      ],
    },
    {
      h: "Potongan 3: SIP / EIS (Sistem Insurans Pekerjaan)",
      paras: [
        "SIP ialah jaring keselamatan jika anda hilang pekerjaan — ia membiayai elaun mencari pekerjaan dan program penempatan semula di bawah PERKESO. Kadarnya kecil: 0.2% daripada pekerja dan 0.2% daripada majikan, tertakluk kepada siling gaji yang sama dengan PERKESO.",
      ],
    },
    {
      h: "Potongan 4: PCB (Potongan Cukai Bulanan)",
      paras: [
        "PCB ialah bayaran ansuran cukai pendapatan yang dipotong terus daripada gaji setiap bulan oleh majikan dan dihantar kepada LHDN. Ia dikira berdasarkan jadual PCB rasmi dengan mengambil kira status perkahwinan, bilangan anak dan pelepasan asas. Pekerja bergaji rendah (selepas ditolak caruman KWSP dan pelepasan) mungkin tidak dikenakan PCB langsung.",
        "Penting untuk faham: PCB hanyalah anggaran ansuran. Jumlah cukai sebenar anda dimuktamadkan semasa e-Filing tahunan — jika PCB terlebih potong, anda akan menerima bayaran balik daripada LHDN; jika terkurang, anda perlu membayar baki.",
      ],
    },
    {
      h: "Contoh pengiraan: gaji RM4,000 sebulan",
      paras: [
        "Berikut anggaran kasar bagi pekerja bujang warganegara Malaysia bergaji RM4,000 sebulan (angka sebenar bergantung pada jadual berkanun semasa):",
      ],
      list: [
        "Caruman KWSP pekerja (11%): sekitar RM440",
        "Caruman PERKESO pekerja (≈0.5%): sekitar RM20",
        "Caruman SIP pekerja (0.2%): sekitar RM8",
        "PCB: bergantung pada pelepasan; bagi individu bujang, kebiasaannya puluhan ringgit pada tahap gaji ini",
        "Anggaran gaji bersih: sekitar RM3,480 – RM3,530",
      ],
    },
    {
      h: "Potongan lain yang mungkin ada",
      paras: [
        "Sesetengah majikan turut membuat potongan tambahan dengan persetujuan pekerja — contohnya zakat pendapatan (yang kemudiannya menjadi rebat cukai bagi pekerja Muslim), yuran kesatuan sekerja, pinjaman koperasi, atau caruman skim persaraan swasta (PRS). Potongan zakat melalui gaji amat berbaloi kerana ia mengurangkan PCB secara terus dalam kebanyakan kes.",
      ],
    },
  ],
  faq: [
    {
      q: "Kenapa gaji bersih saya berbeza setiap bulan walaupun gaji pokok sama?",
      a: "Kebiasaannya kerana elaun berubah, kerja lebih masa (OT), atau bonus — semuanya mengubah asas pengiraan potongan berkanun dan PCB bulan berkenaan. Bonus khususnya boleh menyebabkan PCB bulan tersebut melonjak.",
    },
    {
      q: "Adakah kerja lebih masa (OT) dikenakan potongan KWSP?",
      a: "Tidak — bayaran kerja lebih masa dikecualikan daripada takrif upah KWSP. Namun ia tertakluk kepada caruman PERKESO dan SIP, dan dikira sebagai pendapatan bercukai.",
    },
    {
      q: "Gaji minimum sekarang berapa?",
      a: "Gaji minimum di Malaysia ialah RM1,700 sebulan, berkuat kuasa mulai Februari 2025 (dengan penangguhan pelaksanaan bagi majikan kecil sehingga pertengahan 2025). Semak pengumuman terkini Kementerian Sumber Manusia untuk sebarang perubahan.",
    },
    {
      q: "Saya baru mula kerja. Kenapa tiada potongan PCB?",
      a: "Jika pendapatan bercucai anda selepas caruman KWSP dan pelepasan asas berada di bawah paras minimum jadual PCB, majikan tidak perlu memotong PCB. Anda mungkin masih perlu memfailkan cukai jika jumlah pendapatan tahunan melepasi paras yang ditetapkan LHDN.",
    },
    {
      q: "Adakah elaun dan bonus dikira dalam gaji bersih?",
      a: "Ya. Elaun dan bonus menambah pendapatan kasar anda, tetapi juga menambah potongan (KWSP atas bonus, PCB atas kedua-duanya). Gunakan kalkulator gaji bersih untuk melihat kesan sebenarnya.",
    },
  ],
  sources: [
    { label: "KWSP — kadar caruman", url: "https://www.kwsp.gov.my" },
    { label: "PERKESO — jadual caruman", url: "https://www.perkeso.gov.my" },
    { label: "LHDN — kalkulator PCB (e-Jadual)", url: "https://www.hasil.gov.my" },
  ],
  related: [
    { label: "Kalkulator Gaji Bersih", href: "/gaji-bersih" },
    { label: "Kalkulator Overtime", href: "/ot" },
    { label: "Kalkulator Cukai Pendapatan", href: "/cukai-pendapatan" },
    { label: "Panduan: Kadar Caruman KWSP", href: "/panduan/kadar-caruman-kwsp" },
  ],
};
