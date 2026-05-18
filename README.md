# Cheikh Kai Portfolio

Datengetriebene Vanilla-JS-Landingpage für Cheikh Kai mit Fokus auf kontrollierbare KI-Systeme, AI Governance, Automatisierung und Systemdenken.

## Struktur

- `index.html` — Einstiegspunkt der Website.
- `assets/css/site.css` — ausgelagertes Stylesheet.
- `assets/js/app.js` — Interaktion, Theme-Handling und Scroll-Logik.
- `assets/js/render.js` — Renderer, der die Seite aus Daten aufbaut.
- `assets/data/site-content.js` — zentraler Content für Sections und Cards.
- `cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html` — ursprüngliche Single-File-Referenz.
- `02-wiki/index.md` — flacher Projektindex.
- `02-wiki/log.md` — chronologisches Arbeitslog.

## Lokal starten

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Danach:

```text
http://127.0.0.1:8765/index.html
```

## Hinweise

Die Seite lädt Google Fonts über CDN (`Syne`, `DM Mono`, `Instrument Serif`).
