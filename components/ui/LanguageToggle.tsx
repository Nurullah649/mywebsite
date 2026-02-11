"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageToggle() {
    const { lang, setLang } = useLanguage();

    return (
        <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="relative flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-sm font-medium group"
            aria-label="Toggle language"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={lang}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                >
                    <span className="text-base leading-none">{lang === "tr" ? "🇹🇷" : "🇬🇧"}</span>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        {lang === "tr" ? "TR" : "EN"}
                    </span>
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
