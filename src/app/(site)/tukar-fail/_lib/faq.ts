export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Adakah fail saya dimuat naik ke pelayan?",
    qEn: "Are my files uploaded to a server?",
    a: "Tidak. Semua alat di halaman ini memproses fail anda sepenuhnya dalam pelayar (browser) menggunakan teknologi seperti Canvas API dan WebAssembly. Fail anda tidak pernah dihantar ke mana-mana pelayan, jadi data anda kekal peribadi dan selamat.",
    aEn: "No. Every tool on this page processes your files entirely inside your browser using technologies such as the Canvas API and WebAssembly. Your files are never sent to any server, so your data stays private and secure.",
  },
  {
    q: "Format imej apa yang boleh saya tukar?",
    qEn: "Which image formats can I convert between?",
    a: "Alat Tukar Format Imej menyokong output ke JPG, PNG dan WEBP. Anda boleh memuat naik kebanyakan format imej biasa (termasuk PNG, JPG, WEBP, BMP dan GIF) dan menukarnya kepada salah satu daripada tiga format output tersebut dengan satu klik.",
    aEn: "The Image Converter tool supports output to JPG, PNG and WEBP. You can upload most common image formats (including PNG, JPG, WEBP, BMP and GIF) and convert them to one of those three output formats with a single click.",
  },
  {
    q: "Bagaimana mampatan imej berfungsi tanpa merosakkan kualiti?",
    qEn: "How does image compression work without ruining quality?",
    a: "Pemampat imej melukis semula imej anda ke kanvas dan mengeksportnya pada tahap kualiti yang anda pilih melalui slaid (10% hingga 95%). Tahap kualiti yang lebih rendah membuang lebih banyak data visual yang halus untuk saiz fail yang lebih kecil. Tetapan sekitar 65–85% biasanya memberikan keseimbangan baik antara saiz dan kejelasan.",
    aEn: "The image compressor redraws your image onto a canvas and exports it at the quality level you choose with the slider (10% to 95%). Lower quality levels discard more fine visual detail for a smaller file size. A setting around 65–85% usually gives a good balance between size and clarity.",
  },
  {
    q: "Adakah penukar Word ke PDF mengekalkan semua pemformatan?",
    qEn: "Does the Word to PDF converter keep all formatting?",
    a: "Alat ini menyokong pemformatan asas seperti perenggan, tajuk, senarai dan teks tebal/condong. Dokumen yang sangat kompleks dengan jadual berlapis, lajur atau susun atur tersuai mungkin kelihatan berbeza daripada asal. Untuk dokumen ringkas, hasilnya biasanya sangat dekat dengan dokumen Word anda.",
    aEn: "The tool supports basic formatting such as paragraphs, headings, lists and bold/italic text. Very complex documents with nested tables, columns or custom layouts may look different from the original. For simple documents, the result is usually very close to your Word file.",
  },
  {
    q: "Mengapa pemampatan video mengambil masa lebih lama daripada imej?",
    qEn: "Why does video compression take longer than images?",
    a: "Pemampat video menggunakan FFmpeg yang dikompil ke WebAssembly dan mengekod semula keseluruhan video dalam pelayar anda. Ini memerlukan kuasa pemprosesan yang besar, jadi fail besar boleh mengambil masa beberapa minit bergantung pada kelajuan komputer anda. Biarkan tab terbuka sehingga selesai.",
    aEn: "The video compressor uses FFmpeg compiled to WebAssembly and re-encodes the entire video inside your browser. This is processing-intensive, so large files can take several minutes depending on your computer's speed. Keep the tab open until it finishes.",
  },
  {
    q: "Adakah alat ini percuma dan perlukah saya mendaftar?",
    qEn: "Are these tools free and do I need to sign up?",
    a: "Semua alat tukar dan mampat fail di halaman ini adalah percuma sepenuhnya dan tidak memerlukan pendaftaran atau log masuk. Tiada had muat naik harian kerana pemprosesan berlaku pada peranti anda sendiri, bukan pada pelayan kami.",
    aEn: "All the file conversion and compression tools on this page are completely free and require no sign-up or login. There is no daily upload limit because the processing happens on your own device, not on our servers.",
  },
];
