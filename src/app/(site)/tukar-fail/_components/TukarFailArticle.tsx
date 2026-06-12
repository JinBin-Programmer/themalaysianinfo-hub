"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Tukar & Mampat Fail Online",
    paras: [
      "Tukar Fail Online ialah satu set alat percuma yang membolehkan anda menukar format dan memampatkan fail terus dalam pelayar web anda. Dengan satu halaman, anda boleh menukar format imej (PNG, JPG, WEBP), memampatkan imej untuk menjimatkan saiz, mengubah saiz imej kepada dimensi tertentu, menukar dokumen Word (.docx) kepada PDF, dan memampatkan video MP4. Semua ini berguna untuk pelajar, pekerja pejabat, peniaga dalam talian dan sesiapa sahaja di Malaysia yang kerap berurusan dengan fail digital.",
      "Perkara yang membezakan alat ini ialah privasi. Berbeza dengan kebanyakan laman penukar fail dalam talian yang memuat naik fail anda ke pelayan jauh, semua pemprosesan di sini berlaku 100% dalam pelayar anda menggunakan Canvas API untuk imej dan teknologi WebAssembly (FFmpeg) untuk video. Ini bermakna dokumen sulit, gambar peribadi dan video keluarga anda tidak pernah meninggalkan komputer atau telefon anda — tiada muat naik, tiada simpanan di awan, tiada risiko kebocoran data.",
      "Untuk menukar atau memampat imej, pilih tab yang sesuai, seret dan lepaskan fail anda ke dalam kawasan muat naik (atau klik untuk memilih fail), laraskan tetapan seperti format output atau slaid kualiti, kemudian tekan butang untuk memproses. Hasilnya boleh dimuat turun serta-merta. Bagi pengubah saiz imej, anda boleh memilih saiz tetap seperti Full HD atau Instagram, atau memasukkan lebar dan tinggi tersuai sambil mengekalkan nisbah aspek.",
      "Bagi penukar Word ke PDF, alat ini membaca dokumen .docx anda, memaparkan pratonton, dan menjana PDF menggunakan pustaka jspdf dan html2canvas. Pemformatan asas seperti tajuk, perenggan dan senarai dikekalkan dengan baik. Untuk pemampat video, FFmpeg mengekod semula video anda dengan codec H.264 pada tetapan kualiti (CRF) pilihan anda — semakin tinggi CRF, semakin kecil fail tetapi semakin rendah kualiti.",
      "Dari segi praktikal di Malaysia, alat ini sangat berguna apabila anda perlu menghantar dokumen ke portal kerajaan yang mempunyai had saiz fail, memuat naik gambar produk ke platform e-dagang seperti Shopee atau Lazada, mengecilkan gambar untuk WhatsApp atau e-mel, atau berkongsi video tanpa mengisi storan telefon. Kerana semuanya percuma dan tiada had muat naik harian, anda boleh memproses seberapa banyak fail yang diperlukan.",
      "Ingat bahawa kualiti hasil bergantung pada tetapan yang anda pilih dan keupayaan peranti anda. Untuk fail video yang sangat besar, gunakan komputer dengan memori yang mencukupi dan bersabar kerana pengekodan dalam pelayar mengambil masa. Sentiasa simpan salinan asal fail penting anda sebelum memampat atau menukar formatnya.",
    ],
  },
  en: {
    title: "Online File Conversion & Compression Guide",
    paras: [
      "Tukar Fail Online is a set of free tools that let you convert formats and compress files directly inside your web browser. From a single page you can convert image formats (PNG, JPG, WEBP), compress images to save space, resize images to specific dimensions, convert Word documents (.docx) to PDF, and compress MP4 videos. These are useful for students, office workers, online sellers and anyone in Malaysia who regularly handles digital files.",
      "What sets these tools apart is privacy. Unlike most online file converters that upload your files to a remote server, all processing here happens 100% in your browser using the Canvas API for images and WebAssembly technology (FFmpeg) for video. This means your confidential documents, personal photos and family videos never leave your computer or phone — no uploads, no cloud storage, no risk of data leaks.",
      "To convert or compress an image, pick the relevant tab, drag and drop your file into the upload area (or click to select a file), adjust settings such as the output format or quality slider, then press the button to process. The result can be downloaded instantly. For the image resizer, you can choose presets like Full HD or Instagram, or enter a custom width and height while keeping the aspect ratio locked.",
      "For the Word to PDF converter, the tool reads your .docx document, shows a preview, and generates a PDF using the jspdf and html2canvas libraries. Basic formatting such as headings, paragraphs and lists is preserved well. For the video compressor, FFmpeg re-encodes your video with the H.264 codec at the quality (CRF) setting you choose — the higher the CRF, the smaller the file but the lower the quality.",
      "In practical Malaysian terms, these tools are handy when you need to submit documents to government portals that have file-size limits, upload product photos to e-commerce platforms like Shopee or Lazada, shrink pictures for WhatsApp or email, or share videos without filling up your phone storage. Because everything is free with no daily upload cap, you can process as many files as you need.",
      "Remember that output quality depends on the settings you choose and your device's capability. For very large video files, use a computer with enough memory and be patient because in-browser encoding takes time. Always keep an original copy of important files before compressing or converting their format.",
    ],
  },
};

export default function TukarFailArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-sm text-white/65 leading-relaxed">{p}</p>
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
              <p className="text-sm text-white/55 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
