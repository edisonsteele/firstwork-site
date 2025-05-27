import type { Metadata } from 'next'
import { Inter, Cabinet_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cabinetGrotesk = Cabinet_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabinet-grotesk',
})

export const metadata: Metadata = {
  title: 'FirstWork - ABA Lesson Delivery App',
  description: 'Make learning on smart devices motivating and adaptive with FirstWork\'s ABA lesson delivery app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cabinetGrotesk.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 