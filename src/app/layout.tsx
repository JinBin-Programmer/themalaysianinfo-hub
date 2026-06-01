import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themalaysianinfo.online"),
  title: {
    default: "The Malaysian Info — Portal Maklumat Malaysia",
    template: "%s — The Malaysian Info",
  },
  description:
    "Portal maklumat Malaysia terlengkap — harga petrol, harga emas, waktu solat, kalkulator KWSP, cukai pendapatan, pinjaman rumah dan 27 alatan percuma. Malaysia's #1 free information hub.",
  keywords: [
    "portal maklumat malaysia",
    "malaysia information hub",
    "harga petrol malaysia",
    "harga emas malaysia",
    "kalkulator malaysia",
    "waktu solat malaysia",
    "kwsp calculator",
    "cukai pendapatan",
    "the malaysian info",
    "alatan malaysia percuma",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇲🇾</text></svg>",
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    siteName: "The Malaysian Info",
    title: "The Malaysian Info — Portal Maklumat Malaysia",
    description: "27 alatan percuma untuk rakyat Malaysia — harga, kalkulator, semakan, cuaca dan lebih lagi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Malaysian Info — Portal Maklumat Malaysia",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a]">
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
