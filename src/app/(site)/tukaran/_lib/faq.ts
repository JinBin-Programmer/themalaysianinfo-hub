export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Berapakah kadar tukaran 1 USD ke Ringgit Malaysia hari ini?",
    qEn: "What is the USD to Malaysian Ringgit rate today?",
    a: "Kadar tukaran berubah-ubah sepanjang hari mengikut pasaran. Halaman ini memaparkan kadar rujukan terkini untuk 1 USD dalam Ringgit (MYR), bersama matawang utama lain seperti SGD, EUR, GBP dan JPY. Gunakan penukar di atas untuk pengiraan pantas, tetapi semak dengan bank atau pengurup wang untuk kadar urus niaga sebenar.",
    aEn: "Exchange rates fluctuate throughout the day with the market. This page shows the latest reference rate for 1 USD in Ringgit (MYR), alongside other major currencies such as SGD, EUR, GBP and JPY. Use the converter above for a quick calculation, but check with your bank or money changer for the actual transaction rate.",
  },
  {
    q: "Adakah kadar di halaman ini sama dengan kadar bank?",
    qEn: "Are the rates on this page the same as bank rates?",
    a: "Tidak semestinya. Kadar yang dipaparkan di sini ialah kadar pasaran tengah (mid-market) untuk rujukan. Bank dan pengurup wang biasanya menambah margin (spread) dan kadang-kadang yuran, jadi kadar belian dan jualan mereka akan berbeza sedikit daripada kadar rujukan ini. Sentiasa sahkan kadar urus niaga sebelum membuat pertukaran.",
    aEn: "Not necessarily. The rates shown here are mid-market reference rates. Banks and money changers usually add a margin (spread) and sometimes a fee, so their buy and sell rates will differ slightly from this reference rate. Always confirm the transaction rate before exchanging.",
  },
  {
    q: "Berapa kerap kadar tukaran di sini dikemas kini?",
    qEn: "How often are the exchange rates here updated?",
    a: "Data kadar di halaman ini diambil daripada sumber kadar tukaran dalam talian dan dikemas kini secara berkala (kira-kira setiap jam). Tarikh kemas kini terkini dipaparkan di bahagian atas halaman. Pasaran matawang antarabangsa beroperasi 24 jam pada hari bekerja, jadi kadar boleh berubah pada bila-bila masa.",
    aEn: "The rate data on this page is sourced from an online exchange-rate provider and refreshed periodically (roughly hourly). The latest update date is shown at the top of the page. International currency markets operate 24 hours on business days, so rates can change at any time.",
  },
  {
    q: "Bagaimana cara menggunakan penukar matawang ini?",
    qEn: "How do I use this currency converter?",
    a: "Pilih matawang asal dalam medan 'Dari' dan matawang sasaran dalam medan 'Kepada', kemudian masukkan jumlah yang ingin ditukar. Keputusan dikira secara automatik menggunakan MYR sebagai matawang pivot. Anda boleh menukar antara mana-mana dua matawang dalam senarai, termasuk MYR itu sendiri.",
    aEn: "Select the source currency in the 'From' field and the target currency in the 'To' field, then enter the amount you want to convert. The result is calculated automatically using MYR as a pivot currency. You can convert between any two currencies in the list, including MYR itself.",
  },
  {
    q: "Mengapa kadar untuk JPY dan IDR dipaparkan tanpa tempat perpuluhan?",
    qEn: "Why are JPY and IDR shown without decimal places?",
    a: "Yen Jepun (JPY) dan Rupiah Indonesia (IDR) mempunyai nilai per unit yang jauh lebih rendah berbanding Ringgit, jadi anda menerima ribuan unit untuk jumlah Ringgit yang kecil. Memaparkannya sebagai nombor bulat menjadikan keputusan lebih mudah dibaca, sementara matawang lain dipaparkan dengan empat tempat perpuluhan untuk ketepatan.",
    aEn: "The Japanese Yen (JPY) and Indonesian Rupiah (IDR) have a much lower per-unit value than the Ringgit, so you receive thousands of units for a small Ringgit amount. Showing them as whole numbers keeps the result readable, while other currencies are shown to four decimal places for precision.",
  },
  {
    q: "Bolehkah saya bergantung pada kadar ini untuk pelaburan atau dagangan forex?",
    qEn: "Can I rely on these rates for investment or forex trading?",
    a: "Tidak. Kadar di sini adalah untuk rujukan umum dan perancangan harian sahaja, seperti menganggar kos perjalanan atau pembelian dalam talian. Untuk dagangan forex, pelaburan, atau urus niaga bernilai besar, gunakan platform dagangan rasmi atau institusi kewangan berlesen yang menyediakan kadar masa nyata dan sebut harga yang sah.",
    aEn: "No. The rates here are for general reference and everyday planning only, such as estimating travel costs or online purchases. For forex trading, investments, or large-value transactions, use an official trading platform or a licensed financial institution that provides real-time rates and binding quotes.",
  },
];
