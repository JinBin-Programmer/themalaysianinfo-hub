import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dasar Privasi — Privacy Policy",
  description:
    "Dasar Privasi The Malaysian Info — bagaimana kami mengumpul dan menggunakan maklumat, termasuk kuki Google AdSense. Privacy Policy for The Malaysian Info.",
  alternates: { canonical: "/privacy-policy" },
};

const SECTIONS = [
  {
    h: "1. Maklumat yang Kami Kumpul / Information We Collect",
    body: "Kami tidak meminta atau menyimpan maklumat peribadi seperti nama, alamat atau nombor telefon anda. Anda tidak perlu mendaftar akaun untuk menggunakan laman ini. Pelayan kami merekod data penggunaan web standard (alamat IP, jenis pelayar, halaman yang dilawati, dan tarikh/masa) untuk tujuan keselamatan dan analitik agregat.",
    bodyEn: "We do not request or store personal information such as your name, address or phone number. You do not need to register an account to use this site. Our servers log standard web usage data (IP address, browser type, pages visited, and date/time) for security and aggregate analytics purposes.",
  },
  {
    h: "2. Kuki / Cookies",
    body: "Laman ini menggunakan kuki untuk analitik dan pengiklanan. Kuki ialah fail teks kecil yang disimpan pada peranti anda. Anda boleh melumpuhkan kuki melalui tetapan pelayar anda, tetapi sesetengah ciri mungkin tidak berfungsi dengan sempurna.",
    bodyEn: "This site uses cookies for analytics and advertising. Cookies are small text files stored on your device. You may disable cookies through your browser settings, though some features may not work perfectly.",
  },
  {
    h: "3. Google AdSense & Pihak Ketiga / Google AdSense & Third Parties",
    body: "Kami memaparkan iklan melalui Google AdSense. Vendor pihak ketiga, termasuk Google, menggunakan kuki untuk menyajikan iklan berdasarkan lawatan terdahulu anda ke laman ini dan laman lain. Kuki DoubleClick membolehkan Google dan rakan kongsinya menyajikan iklan kepada anda berdasarkan lawatan anda. Anda boleh menarik diri daripada pengiklanan yang dipersonalisasi dengan melawati Tetapan Iklan Google (google.com/settings/ads) atau www.aboutads.info/choices.",
    bodyEn: "We display ads through Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's DoubleClick cookie enables Google and its partners to serve ads to you based on your visit. You may opt out of personalised advertising by visiting Google Ads Settings (google.com/settings/ads) or www.aboutads.info/choices.",
  },
  {
    h: "4. Google Analytics",
    body: "Kami mungkin menggunakan Google Analytics untuk memahami cara pengunjung menggunakan laman ini secara agregat (contohnya halaman paling popular). Data ini tidak digunakan untuk mengenal pasti individu.",
    bodyEn: "We may use Google Analytics to understand how visitors use this site in aggregate (for example, the most popular pages). This data is not used to identify individuals.",
  },
  {
    h: "5. Data Pihak Ketiga / Third-Party Data",
    body: "Sebahagian maklumat (seperti harga bahan api) diperoleh daripada sumber rasmi seperti data.gov.my. Tiada data peribadi pengguna dihantar kepada sumber-sumber ini.",
    bodyEn: "Some information (such as fuel prices) is obtained from official sources such as data.gov.my. No personal user data is sent to these sources.",
  },
  {
    h: "6. Privasi Kanak-kanak / Children's Privacy",
    body: "Laman ini tidak ditujukan kepada kanak-kanak di bawah umur 13 tahun. Kami tidak mengumpul data daripada kanak-kanak dengan sengaja.",
    bodyEn: "This site is not directed at children under the age of 13. We do not knowingly collect data from children.",
  },
  {
    h: "7. Perubahan / Changes",
    body: "Kami boleh mengemas kini dasar ini dari semasa ke semasa. Penggunaan berterusan laman ini menandakan penerimaan anda terhadap sebarang perubahan.",
    bodyEn: "We may update this policy from time to time. Continued use of this site indicates your acceptance of any changes.",
  },
  {
    h: "8. Hubungi / Contact",
    body: "Untuk sebarang pertanyaan berkaitan privasi, e-mel: jinbin@ioti.io",
    bodyEn: "For any privacy-related questions, email: jinbin@ioti.io",
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
        <p className="text-white/40 text-sm">Kemas kini terakhir / Last updated: 1 June 2026</p>
      </header>

      <p className="text-sm text-white/60 leading-relaxed">
        Dasar Privasi ini menerangkan bagaimana <strong className="text-white/80">The Malaysian Info</strong> (&ldquo;kami&rdquo;)
        mengumpul, menggunakan dan melindungi maklumat apabila anda melawati laman web ini. This Privacy Policy explains how
        The Malaysian Info collects, uses and protects information when you visit this website.
      </p>

      {SECTIONS.map((s) => (
        <section key={s.h} className="card-glass rounded-2xl p-6 space-y-2">
          <h2 className="font-bold text-white text-base">{s.h}</h2>
          <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
          <p className="text-sm text-white/40 leading-relaxed">{s.bodyEn}</p>
        </section>
      ))}

      <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
        <Link href="/" className="text-red-400 hover:underline">← Laman Utama / Home</Link>
        <Link href="/terms" className="text-red-400 hover:underline">Terma / Terms</Link>
      </div>
    </div>
  );
}
