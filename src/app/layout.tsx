import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { headers } from "next/headers";
import { LanguageProvider, type Lang } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themalaysianinfo.online"),
  title: {
    default: "The Malaysian Info — Portal Maklumat Malaysia",
    template: "%s — The Malaysian Info",
  },
  description:
    "Portal maklumat Malaysia terlengkap — harga petrol, waktu solat, kalkulator KWSP, cukai pendapatan, pinjaman rumah dan banyak alatan percuma. Malaysia's #1 free information hub.",
  keywords: [
    "portal maklumat malaysia",
    "malaysia information hub",
    "harga petrol malaysia",
    "harga lada malaysia",
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
    description: "Alatan percuma untuk rakyat Malaysia — harga, kalkulator, semakan dan lebih lagi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Malaysian Info — Portal Maklumat Malaysia",
  },
  other: {
    "google-adsense-account": "ca-pub-7019273666606982",
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in the deployment env once you add
  // this property in Google Search Console (Settings > Ownership verification > HTML tag)
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale: Lang = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  return (
    <html lang={locale === "en" ? "en" : "ms"}>
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics GA4 — set NEXT_PUBLIC_GA_ID in the deployment env to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "The Malaysian Info",
            "alternateName": "Portal Maklumat Malaysia",
            "url": "https://www.themalaysianinfo.online",
            "description": "Portal maklumat Malaysia terlengkap — alatan percuma untuk rakyat Malaysia",
            "inLanguage": ["ms", "en"],
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.themalaysianinfo.online/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a]">
        <LanguageProvider initialLang={locale}>
          <main className="flex-1">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
