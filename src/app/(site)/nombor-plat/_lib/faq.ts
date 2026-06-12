export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana nombor plat kereta Malaysia menunjukkan negeri?",
    qEn: "How does a Malaysian car plate number indicate the state?",
    a: "Setiap nombor plat kenderaan di Malaysia bermula dengan awalan huruf yang dikeluarkan oleh JPJ mengikut negeri pendaftaran. Contohnya, huruf pertama 'B' merujuk kepada Selangor, 'J' kepada Johor, 'P' kepada Pulau Pinang, dan 'W' kepada Wilayah Persekutuan Kuala Lumpur. Alat ini membaca awalan tersebut untuk menentukan negeri asal plat.",
    aEn: "Every vehicle plate in Malaysia begins with a letter prefix issued by JPJ according to the state of registration. For example, the first letter 'B' refers to Selangor, 'J' to Johor, 'P' to Penang, and 'W' to the Federal Territory of Kuala Lumpur. This tool reads that prefix to determine the plate's originating state.",
  },
  {
    q: "Bolehkah alat ini menunjukkan nama pemilik kenderaan?",
    qEn: "Can this tool show the vehicle owner's name?",
    a: "Tidak. Alat ini hanya mengenal pasti negeri dan kadang-kadang kawasan berdasarkan kod plat sahaja. Maklumat pemilik adalah data peribadi yang dilindungi dan hanya boleh diakses melalui portal rasmi JPJ atau MyJPJ oleh pihak yang dibenarkan.",
    aEn: "No. This tool only identifies the state and sometimes the district based on the plate code alone. Owner information is protected personal data and can only be accessed through the official JPJ or MyJPJ portal by authorised parties.",
  },
  {
    q: "Apakah maksud huruf kedua pada plat seperti 'BA' atau 'JB'?",
    qEn: "What does the second letter on a plate like 'BA' or 'JB' mean?",
    a: "Huruf kedua biasanya menunjukkan siri pendaftaran dan, bagi sesetengah negeri, daerah keluaran asal. Contohnya 'JB' dikaitkan dengan Johor Bahru dan 'BK' dengan Klang di Selangor. Walau bagaimanapun, siri yang lebih baharu mungkin tidak lagi terikat ketat kepada daerah tertentu.",
    aEn: "The second letter usually indicates the registration series and, for some states, the district where it was originally issued. For example 'JB' is associated with Johor Bahru and 'BK' with Klang in Selangor. However, newer series may no longer be strictly tied to a specific district.",
  },
  {
    q: "Mengapa plat Sabah dan Sarawak menggunakan format berbeza?",
    qEn: "Why do Sabah and Sarawak plates use a different format?",
    a: "Sarawak menggunakan awalan 'S' dan Sabah menggunakan 'Q', dan kedua-dua negeri ini mempunyai sistem siri huruf yang tersendiri yang sering merangkumi daerah, contohnya 'SA' untuk Kuching (Sarawak) dan 'QA' untuk Kota Kinabalu (Sabah). Susun atur ini berbeza daripada Semenanjung kerana sejarah pentadbiran pendaftaran kenderaan di Borneo.",
    aEn: "Sarawak uses the 'S' prefix and Sabah uses 'Q', and both states have their own letter-series systems that often encode districts, for example 'SA' for Kuching (Sarawak) and 'QA' for Kota Kinabalu (Sabah). This layout differs from the Peninsula due to the administrative history of vehicle registration in Borneo.",
  },
  {
    q: "Adakah keputusan alat ini 100% tepat?",
    qEn: "Are this tool's results 100% accurate?",
    a: "Alat ini memberikan anggaran yang baik berdasarkan awalan plat standard JPJ, tetapi ia bukan sumber rasmi. Plat siri khas, plat vanity, plat kerajaan atau diplomatik mungkin tidak mengikut corak biasa. Untuk pengesahan rasmi, sila rujuk JPJ.",
    aEn: "The tool gives a good estimate based on standard JPJ plate prefixes, but it is not an official source. Special series, vanity plates, government or diplomatic plates may not follow the usual pattern. For official confirmation, please refer to JPJ.",
  },
  {
    q: "Apakah maksud plat dengan awalan 'V' atau 'VRU'?",
    qEn: "What do plates with a 'V' or 'VRU' prefix mean?",
    a: "Awalan 'V' ialah salah satu siri terkini yang dikeluarkan untuk Wilayah Persekutuan Kuala Lumpur selepas siri 'W' lama hampir habis. Plat seperti 'VRU' pula sering dikaitkan dengan kenderaan khas. Kebanyakan plat 'V' didaftarkan di Kuala Lumpur.",
    aEn: "The 'V' prefix is one of the newer series issued for the Federal Territory of Kuala Lumpur after the older 'W' series neared exhaustion. Plates such as 'VRU' are often associated with special vehicles. Most 'V' plates are registered in Kuala Lumpur.",
  },
];
