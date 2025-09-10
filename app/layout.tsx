import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mina Julantoro Asri - Wisata Edukasi Lingkungan Yogyakarta | Kampung Wisata Jogja",
  description:
    "Komunitas lingkungan yang mengubah selokan kotor menjadi pusat budidaya ikan dan wisata edukasi berkelanjutan di Yogyakarta. Paket edukasi untuk sekolah, mahasiswa, dan umum dengan harga terjangkau.",
  keywords:
    "kampung wisata Yogyakarta, wisata edukasi Jogja, budidaya ikan selokan, komunitas lingkungan, Mina Julantoro Asri, wisata edukasi Yogyakarta, kampung wisata Jogja, budidaya ikan berkelanjutan, transformasi lingkungan, eco tourism Yogyakarta",
  generator: "v0.app",
  openGraph: {
    title: "Mina Julantoro Asri - Wisata Edukasi Lingkungan Yogyakarta",
    description:
      "Dari selokan kumuh jadi wisata edukasi asri. Komunitas yang menginspirasi transformasi lingkungan berkelanjutan.",
    url: "https://minajulantoro.com",
    siteName: "Mina Julantoro Asri",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Julantoro Asri - Wisata Edukasi Lingkungan Yogyakarta",
    description:
      "Dari selokan kumuh jadi wisata edukasi asri. Komunitas yang menginspirasi transformasi lingkungan berkelanjutan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
