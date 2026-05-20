"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

function getDocumentTheme(): ThemeMode {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Kein Persistenzzugriff verfügbar.
  }
}

export function useThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    setTheme(getDocumentTheme());
  }, []);

  const toggleTheme = () => {
    const next = getDocumentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return { theme, toggleTheme };
}
