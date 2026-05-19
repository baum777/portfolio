# Cheikh Kai Portfolio

Dynamische Website auf Basis von Next.js App Router mit Fokus auf kontrollierbare KI-Systeme, AI Governance, Automatisierung und Systemdenken.

## Architektur

- `app/` — Routen (`/`, `/projekte/[slug]`)
- `components/` — Seitenkomponenten
- `hooks/` — Theme- und Scroll-Interaktionen
- `content/site.de.json` — globale Inhalte (Deutsch)
- `content/projects/*.md` — Projektdetails mit Frontmatter + Markdown-Body
- `lib/` — Typen, Validierung, Loader, Markdown-Parser

## Lokal starten

```bash
npm install
npm run dev
```

Danach:

```text
http://127.0.0.1:3000
```

## Qualitätssicherung

```bash
npm run lint
npm run build
```

## Referenz-Artefakte

Die frühere Single-File-Version bleibt als Referenz im Repository:

- `cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html`
- `cheikh-kai-scroll-page-handoff.md`

## Deployment

Deployment erfolgt über das bestehende Vercel-Projekt mit Root auf dieses Verzeichnis.
