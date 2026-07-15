"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kira Bil & Bahagi Restoran",
    paras: [
      "Membahagi bil restoran antara rakan atau keluarga sepatutnya mudah, tetapi ia sering menimbulkan keraguan apabila terdapat tip, caj servis dan SST yang perlu diambil kira. Kalkulator Kira Bil ini direka khas untuk konteks Malaysia, membolehkan anda memasukkan jumlah bil makanan, menambah caj yang berkaitan, dan terus melihat berapa yang perlu dibayar oleh setiap orang — tanpa perlu mengira secara manual di atas meja makan.",
      "Cara menggunakannya sangat ringkas. Pilih jumlah bil daripada nilai pratetap (RM50, RM80, RM100 dan seterusnya) atau taipkan jumlah anda sendiri dalam kotak input. Kemudian pilih peratus tip jika anda mahu memberi tip, tetapkan bilangan orang yang berkongsi bil, dan tandakan kotak SST atau caj servis sekiranya resit anda mengenakan caj tersebut. Keputusan dikemas kini secara langsung apabila anda mengubah mana-mana nilai.",
      "Pengiraan dilakukan dengan teliti mengikut amalan biasa di restoran tempatan. Caj servis (lazimnya 10%) ditambah terlebih dahulu pada bil makanan. Peratus tip kemudian dikira berdasarkan jumlah bil makanan campur caj servis, manakala SST (6%) dikira berdasarkan bil makanan asal. Semua komponen ini dijumlahkan untuk membentuk jumlah keseluruhan, yang kemudiannya dibahagikan sama rata mengikut bilangan orang.",
      "Di Malaysia, penting untuk memahami perbezaan antara caj servis dan tip. Caj servis ialah caj tetap yang dikenakan oleh restoran dan tertera pada resit, manakala tip adalah sukarela. Banyak premis makan, terutamanya restoran berhawa dingin, sudah mengenakan caj servis 10% dan SST, jadi memberi tip tambahan bukanlah kelaziman. Untuk gerai, kedai kopi dan warung biasa pula, selalunya tiada caj tambahan dikenakan langsung.",
      "Selain jumlah setiap orang yang tepat, kalkulator turut memaparkan nilai 'Setiap Orang (Bulat)' yang dibundarkan ke atas kepada Ringgit terdekat. Ini amat berguna apabila membayar secara tunai atau melalui pemindahan ringkas, kerana ia mengelakkan baki sen yang menyusahkan. Lebihan kecil daripada pembundaran boleh dibiarkan sebagai tip atau diberikan kepada orang yang membayar dahulu kepada restoran.",
      "Semua pengiraan berlaku terus dalam pelayar anda dan tiada maklumat bil disimpan atau dihantar ke mana-mana pelayan. Anda boleh menggunakan butang kongsi untuk menghantar ringkasan bil dan bahagian setiap orang terus ke WhatsApp atau aplikasi lain, memudahkan urusan pembayaran sebelum meninggalkan restoran.",
    ],
  },
  en: {
    title: "Restaurant Bill Split & Tip Calculator Guide",
    paras: [
      "Splitting a restaurant bill among friends or family should be simple, but it often causes confusion once you factor in tips, service charges and SST. This Bill Calculator is built for the Malaysian context, letting you enter the food bill amount, add the relevant charges, and instantly see how much each person owes — without doing the maths by hand at the dinner table.",
      "Using it is straightforward. Pick a bill amount from the presets (RM50, RM80, RM100 and so on) or type your own figure into the input box. Then choose a tip percentage if you want to tip, set the number of people sharing the bill, and tick the SST or service charge boxes if your receipt includes those charges. The result updates live as you change any value.",
      "The calculation follows common local restaurant practice. The service charge (usually 10%) is added to the food bill first. The tip percentage is then calculated on the food bill plus the service charge, while SST (6%) is calculated on the original food bill. All of these components are summed to form the grand total, which is then divided equally by the number of people.",
      "In Malaysia it is important to understand the difference between a service charge and a tip. A service charge is a fixed charge imposed by the restaurant and printed on the receipt, whereas a tip is voluntary. Many eateries, particularly air-conditioned restaurants, already apply a 10% service charge and SST, so leaving an extra tip is not customary. At stalls, coffee shops and ordinary warungs, there are often no additional charges at all.",
      "Besides the exact per-person amount, the calculator also shows a 'Per Person (Rounded)' figure rounded up to the nearest Ringgit. This is handy when paying with cash or quick transfers, as it avoids awkward leftover cents. The small surplus from rounding can be left as a tip or given to whoever paid the restaurant first.",
      "All calculations happen directly in your browser and no bill information is stored or sent to any server. You can use the share button to send a summary of the bill and each person's share straight to WhatsApp or another app, making it easy to settle up before you leave the restaurant.",
    ],
  },
};

export default function BillArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-[15px] text-white/80 leading-relaxed">{p}</p>
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
              <p className="text-[15px] text-white/75 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
