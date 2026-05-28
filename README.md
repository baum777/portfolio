# Cheikh Kai Portfolio

Dynamische Website auf Basis von Next.js App Router mit Fokus auf kontrollierbare KI-Systeme, AI Governance, Automatisierung und Systemdenken.

## Architektur

- `app/` — Routen (`/`, `/projekte/[slug]`)
- `components/` — Seitenkomponenten
- `hooks/` — Theme- und Scroll-Interaktionen
- `content/site.de.json` — globale Inhalte auf Deutsch
- `content/site.en.json` — globale Inhalte auf Englisch
- `content/projects/*.md` — deutsche Projektdetails mit Frontmatter + Markdown-Body
- `content/projects/en/*.md` — englische Projektdetails mit gleichem Slug-Set
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

<!-- workspace-root-sync:readme:start -->
## Workspace Integration

This repository lives under `/home/baum/Schreibtisch/workspace/main_projects`. Its local `README.md`, `AGENTS.md`, `docs/`, manifests, contracts, validators, tests, and workflow files remain the authority for repo-specific product, runtime, archive, and implementation truth.

The workspace root is a routing and orientation layer. It points agents and humans to the correct authority surface; it must not be treated as a replacement for this repository's local truth.

### Workspace Work Path

```text
frontdoor -> authority check -> scope check -> reusable-surface check -> smallest safe work -> verification -> evidence / next gate
```

When work enters from the workspace root:

1. Read root `README.md` and root `AGENTS.md`.
2. Read this repository's `README.md`, `AGENTS.md`, and relevant local docs or contracts.
3. Identify the owning authority, scope, next gate, expected write targets, and validation path.
4. Check whether existing repo-local or shared-core assets already cover the task.
5. Make the smallest safe change and verify it locally.
6. Close with evidence, unresolved gaps, and the next re-entry pointer.

### Cross-Repo And Reusable Work

- Use portfolio surfaces for workspace inventory, cross-repo coordination, intake, disposition, daily notes, commit evidence, and re-entry tracking.
- Use `model-agnostic-workflow-system/` for reusable skills, contracts, templates, validators, provider exports, and workflow routing patterns.
- Do not duplicate root, portfolio, shared-core, or chat-room governance here unless this repository deliberately adopts a local copy.
- If this repository is `model-agnostic-workflow-system`, its own `AGENTS.md` and `WORKFLOW.md` are the local shared-core authority before reusable behavior is exported elsewhere.

### Evidence And Closure

Close meaningful work with:

- `Observed` facts from exact paths or commands;
- `Inferred` conclusions clearly labelled;
- `Applied` changes with exact paths;
- `Verified` checks or read-backs;
- `BLOCKED` items where authority, source, scope, validation, or permissions are insufficient;
- the next gate or re-entry pointer.

Do not treat summaries, imports, chat notes, MSPR packets, loose docs, archives, or derived knowledge as canonical truth until the owning surface has reviewed and promoted them.
<!-- workspace-root-sync:readme:end -->
