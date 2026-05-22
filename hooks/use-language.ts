"use client";

import { useEffect, useState } from "react";
import type { LanguageMode } from "@/lib/types";

const STORAGE_KEY = "ck-language";

function readStoredLanguage(): LanguageMode {
  if (typeof window === "undefined") return "de";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "de" ? stored : "de";
}

export function useLanguageToggle() {
  const [language, setLanguage] = useState<LanguageMode>("de");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLanguage(readStoredLanguage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [hydrated, language]);

  const toggleLanguage = () => setLanguage((current) => (current === "de" ? "en" : "de"));

  return { language, toggleLanguage };
}
