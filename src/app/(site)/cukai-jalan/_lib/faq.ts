export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana kadar cukai jalan dikira di Malaysia?",
    qEn: "How is road tax calculated in Malaysia?",
    a: "Cukai jalan kenderaan persendirian di Malaysia dikira berdasarkan kapasiti enjin (CC) kenderaan. Semakin tinggi kapasiti enjin, semakin tinggi kadar cukai. Kadar ini juga berbeza mengikut jenis kenderaan (kereta atau motosikal) dan wilayah pendaftaran. Kalkulator ini menggunakan jadual kadar mengikut julat CC untuk memberi anggaran cukai tahunan dan enam bulan.",
    aEn: "Road tax for private vehicles in Malaysia is calculated based on the vehicle's engine capacity (CC). The higher the engine capacity, the higher the rate. The rate also varies by vehicle type (car or motorcycle) and region of registration. This calculator uses a band table by CC range to estimate your annual and six-month road tax.",
  },
  {
    q: "Mengapa cukai jalan di Sabah dan Sarawak lebih rendah?",
    qEn: "Why is road tax lower in Sabah and Sarawak?",
    a: "Kenderaan yang didaftarkan di Sabah dan Sarawak secara amnya menikmati kadar cukai jalan yang lebih rendah berbanding Semenanjung Malaysia. Ini mengambil kira faktor seperti keadaan jalan raya dan pertimbangan ekonomi di Borneo. Kalkulator ini menganggarkan kadar Sabah/Sarawak kira-kira 30% lebih rendah daripada kadar Semenanjung sebagai panduan kasar.",
    aEn: "Vehicles registered in Sabah and Sarawak generally enjoy lower road tax rates than in Peninsular Malaysia. This accounts for factors such as road conditions and economic considerations in Borneo. This calculator estimates the Sabah/Sarawak rate at roughly 30% lower than the Peninsular rate as a rough guide.",
  },
  {
    q: "Adakah kadar ini untuk kenderaan persendirian sahaja?",
    qEn: "Are these rates for private vehicles only?",
    a: "Ya. Kadar yang dipaparkan adalah untuk kenderaan persendirian (saloon, hatchback, motosikal peribadi). Kenderaan komersial, kenderaan syarikat, kenderaan OKU, dan kenderaan antik mempunyai kadar atau pelepasan yang berbeza. Sila semak dengan JPJ untuk kadar tepat bagi kategori khas.",
    aEn: "Yes. The rates shown are for private vehicles (saloons, hatchbacks, personal motorcycles). Commercial vehicles, company-registered vehicles, disabled (OKU) vehicles, and antique vehicles have different rates or exemptions. Please check with JPJ for exact rates for special categories.",
  },
  {
    q: "Di mana saya boleh memperbaharui cukai jalan?",
    qEn: "Where can I renew my road tax?",
    a: "Anda boleh memperbaharui cukai jalan secara dalam talian melalui portal MyEG, di kaunter JPJ, di Pejabat Pos terpilih, atau melalui aplikasi mudah alih tertentu. Pastikan insurans kenderaan anda sah sebelum memperbaharui cukai jalan kerana ia adalah syarat wajib.",
    aEn: "You can renew your road tax online via the MyEG portal, at JPJ counters, at selected Post Offices, or through certain mobile apps. Make sure your vehicle insurance is valid before renewing road tax, as it is a mandatory requirement.",
  },
  {
    q: "Apa yang berlaku jika cukai jalan saya tamat tempoh?",
    qEn: "What happens if my road tax expires?",
    a: "Memandu dengan cukai jalan yang tamat tempoh adalah satu kesalahan di bawah undang-undang Malaysia dan boleh dikenakan kompaun atau denda. Tanpa cukai jalan yang sah, perlindungan insurans anda juga mungkin terjejas semasa kemalangan. Disyorkan untuk memperbaharui sebelum tarikh tamat tempoh.",
    aEn: "Driving with expired road tax is an offence under Malaysian law and may result in a compound or fine. Without valid road tax, your insurance coverage may also be affected in the event of an accident. It is advisable to renew before the expiry date.",
  },
  {
    q: "Adakah kalkulator ini memberikan kadar rasmi yang tepat?",
    qEn: "Does this calculator give exact official rates?",
    a: "Kalkulator ini memberikan anggaran berdasarkan jadual kadar mengikut kapasiti enjin. Untuk kenderaan melebihi 2000cc, formula sebenar JPJ menggunakan kadar asas tambah kadar progresif setiap CC, jadi nilai yang dipaparkan adalah anggaran. Sentiasa sahkan jumlah tepat di MyEG atau JPJ sebelum membuat pembayaran.",
    aEn: "This calculator provides an estimate based on a band table by engine capacity. For vehicles above 2000cc, the actual JPJ formula uses a base rate plus a progressive rate per CC, so the figure shown is an approximation. Always confirm the exact amount at MyEG or JPJ before making payment.",
  },
];
