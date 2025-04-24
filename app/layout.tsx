import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arti Thakur | Portfolio",
  description: "Full Stack Developer specializing in React, Node.js, and interactive web applications",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} bg-pink-50 text-pink-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
