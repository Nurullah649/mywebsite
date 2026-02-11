"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext"
import { LanguageToggle } from "@/components/ui/LanguageToggle"
import { NeuralBackground } from "@/components/ui/NeuralBackground"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { name: t("nav", "home"), href: '/' },
    { name: t("nav", "about"), href: '/about' },
    { name: t("nav", "projects"), href: '/projects' },
    { name: t("nav", "contact"), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${scrolled ? 'border-border/50 shadow-lg shadow-black/5' : 'border-transparent'}`} style={{ backgroundColor: "hsla(222, 47%, 5%, 0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <div className="container flex h-14 md:h-16 items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">NK</span>
            <span className="hidden sm:inline">Nurullah Kurnaz</span>
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
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </motion.nav>
        <div className="flex items-center gap-1 md:gap-2">
          <LanguageToggle />
          <MobileNav />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/20" asChild>
              <Link href="/contact">{t("nav", "cta")}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: t("nav", "home"), href: '/' },
    { name: t("nav", "about"), href: '/about' },
    { name: t("nav", "projects"), href: '/projects' },
    { name: t("nav", "contact"), href: '/contact' },
  ];

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            inset: 0,
            top: 56,
            zIndex: 9999,
            backgroundColor: "#020817",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            overflowY: "auto",
          }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors block py-3 border-b border-border/20"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white" asChild onClick={() => setOpen(false)}>
              <Link href="/contact">{t("nav", "cta")}</Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {mounted && typeof document !== "undefined"
        ? require("react-dom").createPortal(overlay, document.body)
        : null}
    </div>
  )
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border/30 py-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nurullah Kurnaz. {t("footer", "copyright")}</p>
        <div className="flex gap-4">
          <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/Nurullah649" target="_blank" className="text-muted-foreground hover:text-blue-400 transition-colors" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/nurullah-kurnaz-49393924a/" target="_blank" className="text-muted-foreground hover:text-blue-400 transition-colors" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -2 }} href="mailto:nurullahkurnaz47@gmail.com" className="text-muted-foreground hover:text-blue-400 transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return (
      <html lang="tr" suppressHydrationWarning>
        <body className={spaceGrotesk.className}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col relative">
              <NeuralBackground />
              <div className="relative z-10 flex min-h-screen flex-col">
                <Header />
                <AnimatePresence mode="wait">
                  <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-1"
                  >
                    {children}
                  </motion.main>
                </AnimatePresence>
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
