import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { getSiteContent } from "@/lib/site-content";

const site = getSiteContent();

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/site.webmanifest"
};

const themeInitScript = `
(() => {
  try {
    const saved = localStorage.getItem("theme") || localStorage.getItem("ck-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", saved === "dark" || saved === "light" ? saved : preferred);
  } catch (_) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
