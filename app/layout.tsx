import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Tajawal as Tajwal } from "next/font/google"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-context"

const tajwal = Tajwal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajwal",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MUVU General Trading L.L.C",
  description: "Your trusted partner in general trading and marine services in UAE",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/MUVU-ICON.ico" type="image/x-icon" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

      </head>
      <body suppressHydrationWarning={true} className={`${tajwal.variable} ${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
