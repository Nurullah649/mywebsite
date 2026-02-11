"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Language } from "./translations";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("tr");

    useEffect(() => {
        const stored = localStorage.getItem("site-language") as Language | null;
        if (stored && (stored === "tr" || stored === "en")) {
            setLangState(stored);
        }
    }, []);

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem("site-language", newLang);
    }, []);

    const t = useCallback((section: string, key: string): string => {
        try {
            const sectionData = (translations as any)[section];
            if (!sectionData) return key;
            const entry = sectionData[key];
            if (!entry) return key;
            if (typeof entry === "string") return entry;
            if (entry[lang]) return entry[lang];
            return key;
        } catch {
            return key;
        }
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
