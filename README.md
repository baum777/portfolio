# Cheikh Kai Portfolio

Statische Onepage-Landingpage für Cheikh Kai mit Fokus auf kontrollierbare KI-Systeme, AI Governance, Automatisierung und Systemdenken.

## Inhalt

- `cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html` — vollständige statische HTML/CSS/JS-Seite ohne Build-System.
- `cheikh-kai-scroll-page-handoff.md` — kurzer Handoff zur Umsetzung, zum Scroll-Konzept und zu externen Font-Abhängigkeiten.
- `02-wiki/index.md` — flacher Projektindex.
- `02-wiki/log.md` — chronologisches Arbeitslog.

## Lokal öffnen

Direkt im Browser:

```bash
xdg-open cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html
```

Oder über einen lokalen Server:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Danach:

```text
http://127.0.0.1:8765/cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html
```

## Verifikation

Observed am 2026-05-18:

- Desktop und Mobile wurden im In-App-Browser geprüft.
- Horizontaler Seiten-Overflow wurde behoben.
- Dark und Light Theme wurden geprüft.
- Es gab keine App-Console-Errors; nur Electron-CSP-Warnungen aus der Prüf-Umgebung.

## Hinweise

Die Seite lädt Google Fonts über CDN:

- Syne
- DM Mono
- Instrument Serif

Bei Offline-Nutzung greifen System-Fallbacks.
