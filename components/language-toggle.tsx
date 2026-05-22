"use client";

import type { LanguageMode } from "@/lib/types";

interface LanguageToggleProps {
  language: LanguageMode;
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={language === "de" ? "Switch to English" : "Zur deutschen Version wechseln"}
      onClick={onToggle}
    >
      <span className={language === "de" ? "active" : ""}>DE</span>
      <span className={language === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
