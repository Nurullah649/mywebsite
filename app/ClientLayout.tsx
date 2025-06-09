"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımda', href: '/about' },
    { name: 'Projeler', href: '/projects' },
    { name: 'İletişim', href: '/contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-colors duration-300 ${scrolled ? 'bg-background/80 border-border' : 'bg-transparent border-transparent'}`}>
      <div className="container flex h-16 items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <span>Nurullah Kurnaz</span>
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex gap-1"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
        <div className="flex items-center gap-2">
            <MobileNav />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="hidden md:block"
            >
              <Button asChild>
                  <Link href="/contact">İletişime Geç</Link>
              </Button>
            </motion.div>
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
        <div className="fixed inset-0 top-16 z-50 bg-background p-4 flex flex-col gap-4">
          {navItems.map(item => (
            <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
            >
                {item.name}
            </Link>
          ))}
          <Button className="mt-4" asChild onClick={() => setOpen(false)}>
            <Link href="/contact">İletişime Geç</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-card py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nurullah Kurnaz. Tüm hakları saklıdır.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Nurullah649" target="_blank" className="text-muted-foreground hover:text-primary transition-colors" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/nurullah-kurnaz/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:nurullahkurnaz47@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <AnimatePresence mode="wait">
              <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-1"
              >
                {children}
              </motion.main>
            </AnimatePresence>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
