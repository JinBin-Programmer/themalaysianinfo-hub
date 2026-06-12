export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana kalkulator ini membahagikan bil restoran?",
    qEn: "How does this calculator split a restaurant bill?",
    a: "Masukkan jumlah bil makanan, pilih peratus tip, dan tetapkan bilangan orang. Kalkulator akan menjumlahkan bil, caj servis (jika dipilih), SST (jika dipilih) dan tip, kemudian membahagikannya sama rata mengikut bilangan orang untuk memberikan jumlah setiap orang.",
    aEn: "Enter the food bill amount, choose a tip percentage, and set the number of people. The calculator adds up the bill, service charge (if selected), SST (if selected) and tip, then divides the total equally by the number of people to give the amount each person owes.",
  },
  {
    q: "Apakah kadar SST yang digunakan dalam kalkulator ini?",
    qEn: "What SST rate does this calculator use?",
    a: "Kalkulator ini menggunakan kadar 6% apabila pilihan SST diaktifkan, kadar yang lazim dikenakan pada banyak perkhidmatan makanan dan minuman di Malaysia. Kadar sebenar pada resit anda mungkin berbeza bergantung pada jenis premis, jadi rujuk resit rasmi untuk pengiraan muktamad.",
    aEn: "This calculator applies a 6% rate when the SST option is switched on, the rate commonly charged on many food and beverage services in Malaysia. The actual rate on your receipt may vary by establishment type, so refer to your official receipt for the final figure.",
  },
  {
    q: "Bagaimana caj servis 10% dikira?",
    qEn: "How is the 10% service charge calculated?",
    a: "Apabila caj servis diaktifkan, kalkulator menambah 10% daripada jumlah bil makanan. Tip pula dikira berdasarkan jumlah bil makanan campur caj servis, manakala SST dikira berdasarkan bil makanan asal sahaja.",
    aEn: "When the service charge is switched on, the calculator adds 10% of the food bill. The tip is then calculated on the food bill plus the service charge, while SST is calculated on the original food bill only.",
  },
  {
    q: "Adakah caj servis sama dengan tip?",
    qEn: "Is the service charge the same as a tip?",
    a: "Tidak. Caj servis ialah caj tetap (biasanya 10%) yang dikenakan oleh restoran dan tertera pada resit, manakala tip ialah jumlah pilihan yang anda berikan secara sukarela. Memberi tip bukan kelaziman di kebanyakan restoran Malaysia, terutamanya yang sudah mengenakan caj servis.",
    aEn: "No. A service charge is a fixed charge (usually 10%) imposed by the restaurant and printed on the receipt, while a tip is an optional amount you give voluntarily. Tipping is not customary at most Malaysian restaurants, especially those that already add a service charge.",
  },
  {
    q: "Apakah maksud jumlah 'setiap orang (bulat)'?",
    qEn: "What does the 'per person (rounded)' figure mean?",
    a: "Ia membundarkan jumlah setiap orang ke atas kepada Ringgit terdekat supaya pembayaran lebih mudah, terutama apabila membayar secara tunai. Sebagai contoh, RM23.40 setiap orang akan menjadi RM24, dan lebihan kecil itu boleh menampung pembundaran resit atau dibiarkan sebagai tip.",
    aEn: "It rounds each person's share up to the nearest Ringgit to make paying easier, especially with cash. For example, RM23.40 per person becomes RM24, and the small surplus can cover receipt rounding or be left as a tip.",
  },
  {
    q: "Adakah kalkulator ini menyimpan data atau memerlukan internet?",
    qEn: "Does this calculator store data or need the internet?",
    a: "Tidak. Semua pengiraan dilakukan terus dalam pelayar anda dan tiada data dihantar atau disimpan. Anda boleh menggunakannya secara percuma seberapa kerap yang dimahukan, dan butang kongsi hanya menyalin atau berkongsi teks ringkasan kepada aplikasi seperti WhatsApp.",
    aEn: "No. All calculations run directly in your browser and no data is sent or stored. You can use it free as often as you like, and the share button simply copies or shares a summary text to apps like WhatsApp.",
  },
];
