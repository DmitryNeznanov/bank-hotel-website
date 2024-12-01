import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const miracle = localFont({
  src: "./fonts/Miracle Personal use.otf",
  variable: "--font-miracle",
})
const helvetica = localFont({
  src: "./fonts/HelveticaNeueLTStd-Bd.otf",
  variable: "--font-helvetica",
})

export const metadata: Metadata = {
  title: "BankHotel",
  description: "BankHotel page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${miracle.variable} ${helvetica.variable}`}>
        {children}
      </body>
    </html>
  )
}
