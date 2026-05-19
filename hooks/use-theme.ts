"use client";

import { useEffect } from "react";

type ThemeMode = "dark" | "light";

function setTheme(theme: ThemeMode, toggle: HTMLButtonElement | null) {
  document.documentElement.setAttribute("data-theme", theme);
  if (toggle) toggle.textContent = theme === "dark" ? "◑" : "☀";
  try {
    localStorage.setItem("ck-theme", theme);
  } catch {
    // Kein Persistenzzugriff verfügbar.
  }
}

export function useThemeToggle() {
  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
    const current = (document.documentElement.getAttribute("data-theme") as ThemeMode | null) ?? "dark";
    setTheme(current, toggle);

    const onClick = () => {
      const active = (document.documentElement.getAttribute("data-theme") as ThemeMode | null) ?? "dark";
      setTheme(active === "dark" ? "light" : "dark", toggle);
    };

    toggle?.addEventListener("click", onClick);
    return () => toggle?.removeEventListener("click", onClick);
  }, []);
}
