export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah perbezaan antara cuti umum kebangsaan dan cuti negeri?",
    qEn: "What is the difference between national and state public holidays?",
    a: "Cuti umum kebangsaan dikuatkuasakan di seluruh Malaysia, seperti Hari Kebangsaan, Hari Malaysia dan Hari Buruh. Cuti negeri pula hanya dikuatkuasakan di negeri tertentu, contohnya Hari Keputeraan Sultan bagi negeri masing-masing atau Hari Gawai di Sarawak. Pilih negeri anda di halaman ini untuk melihat senarai cuti yang berkaitan.",
    aEn: "National public holidays apply throughout Malaysia, such as National Day, Malaysia Day and Labour Day. State holidays apply only in specific states, for example a Sultan's birthday in the relevant state or Gawai Day in Sarawak. Select your state on this page to see the holidays that apply to you.",
  },
  {
    q: "Mengapa sesetengah tarikh ditandakan sebagai 'Anggaran'?",
    qEn: "Why are some dates marked as 'Approximate'?",
    a: "Cuti agama Islam seperti Hari Raya Aidilfitri, Aidiladha dan Awal Muharram bergantung pada penampakan anak bulan (kalendar Hijrah), manakala cuti seperti Tahun Baru Cina, Deepavali, Wesak dan Thaipusam ditetapkan mengikut kalendar lunar. Tarikh sebenar disahkan oleh pihak berkuasa lebih dekat dengan hari tersebut, jadi tarikh anggaran mungkin berubah satu atau dua hari.",
    aEn: "Islamic religious holidays such as Hari Raya Aidilfitri, Aidiladha and Awal Muharram depend on moon sighting (the Hijri calendar), while holidays like Chinese New Year, Deepavali, Wesak and Thaipusam follow the lunar calendar. The exact dates are confirmed by the authorities closer to the day, so approximate dates may shift by a day or two.",
  },
  {
    q: "Apa yang berlaku jika cuti umum jatuh pada hari Ahad?",
    qEn: "What happens if a public holiday falls on a Sunday?",
    a: "Di kebanyakan negeri, jika cuti umum jatuh pada hari yang sudah menjadi cuti rehat (seperti Ahad, atau Jumaat di negeri yang berkenaan), hari kerja berikutnya biasanya diisytiharkan sebagai cuti ganti. Amalan ini boleh berbeza mengikut negeri, jadi rujuk pengumuman rasmi kerajaan negeri anda untuk pengesahan.",
    aEn: "In most states, if a public holiday falls on a day that is already a rest day (such as Sunday, or Friday in the relevant states), the following working day is usually declared a replacement holiday. This practice can vary by state, so refer to your state government's official announcement for confirmation.",
  },
  {
    q: "Bagaimana saya boleh merancang cuti panjang menggunakan halaman ini?",
    qEn: "How can I plan long weekends using this page?",
    a: "Lihat tarikh cuti umum dan perhatikan hari dalam minggu ia jatuh. Jika cuti jatuh pada hari Selasa atau Khamis, anda boleh mengambil cuti tahunan pada hari Isnin atau Jumaat untuk mendapatkan cuti panjang. Pilih negeri anda dahulu supaya kiraan merangkumi cuti negeri yang berkaitan, kemudian gunakan kiraan 'hari lagi' untuk merancang lebih awal.",
    aEn: "Look at the public holiday dates and note which day of the week they fall on. If a holiday lands on a Tuesday or Thursday, you can take annual leave on the Monday or Friday to create a long weekend. Select your state first so the list includes the relevant state holidays, then use the 'days away' countdown to plan ahead.",
  },
  {
    q: "Adakah semua negeri mempunyai bilangan cuti umum yang sama?",
    qEn: "Do all states have the same number of public holidays?",
    a: "Tidak. Setiap negeri mempunyai gabungan cuti kebangsaan yang sama tetapi senarai cuti negeri yang berbeza, seperti hari keputeraan pemerintah negeri dan perayaan tempatan. Oleh itu jumlah cuti umum berbeza mengikut negeri. Halaman ini menunjukkan jumlah cuti bagi negeri yang anda pilih untuk tahun yang dipilih.",
    aEn: "No. Each state shares the same national holidays but has a different list of state holidays, such as the ruler's birthday and local celebrations. As a result the total number of public holidays differs by state. This page shows the holiday count for the state and year you select.",
  },
  {
    q: "Adakah maklumat cuti di halaman ini rasmi?",
    qEn: "Is the holiday information on this page official?",
    a: "Halaman ini disediakan sebagai rujukan dan disusun berdasarkan jadual cuti umum yang biasa diumumkan. Tarikh cuti agama dan sesetengah cuti negeri mungkin berubah selepas pengesahan rasmi. Untuk tujuan rasmi seperti perancangan kerja atau perniagaan, sila sahkan dengan pengumuman rasmi kerajaan persekutuan dan negeri.",
    aEn: "This page is provided for reference and is compiled from commonly announced public holiday schedules. Religious holiday dates and some state holidays may change after official confirmation. For official purposes such as work or business planning, please verify against the official federal and state government announcements.",
  },
];
