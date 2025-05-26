// app/ClientLayout.tsx
"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next" // <-- 1. BU SATIRI EKLE
import "./globals.css" // app klasöründeki globals.css'i kullanmalı
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

function Header() {
  return (
    // Header etiketine h-16 ve flex item-center eklendi
    <header className="sticky top-0 z-40 w-full border-b border-blue-200 bg-white/80 backdrop-blur h-16 flex items-center">
      {/* İç div'den h-16 kaldırıldı, w-full eklendi */}
      <div className="container flex items-center justify-between w-full">
        <div className="font-bold text-xl text-blue-900">
          <Link href="/" className="flex items-center gap-2">
            <span>Nurullah Kurnaz</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-muted-foreground hover:text-blue-600 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-blue-600 transition-colors">
            Hakkımda
          </Link>
          <Link href="/projects" className="text-muted-foreground hover:text-blue-600 transition-colors">
            Projeler
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
            İletişim
          </Link>
        </nav>
        <MobileNav />
        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/contact">İletişime Geç</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {open && (
        // Mobil menü, header'ın yüksekliği olan h-16 (top-16) kadar aşağıdan başlıyor.
        <div className="fixed inset-0 top-16 z-300 bg-white bg-opacity-100 p-4 flex flex-col gap-4"> // bg-white yerine bg-blue-800 deniyoruz
          <Link
            href="/"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Hakkımda
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            İletişim
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 mt-4" asChild onClick={() => setOpen(false)}>
            <Link href="/contact">İletişime Geç</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-blue-900 text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-blue-200">© {new Date().getFullYear()} Nurullah Kurnaz. Tüm hakları saklıdır.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/Nurullah649"
            target="_blank"
            className="text-blue-200 hover:text-white transition-colors"
            rel="noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nurullah-kurnaz/"
            target="_blank"
            className="text-blue-200 hover:text-white transition-colors"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:nurullahkurnaz47@gmail.com" className="text-blue-200 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-blue-50`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            {/* Ana içerik, header'ın yüksekliği (h-16) kadar yukarıdan boşluk bırakıyor (pt-16) */}
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights /> {/* <-- 2. BU SATIRI EKLE (</body>'dan hemen önce, Analytics'in altına) */}
      </body>
    </html>
  )
}
