# Agenten-Anweisungen

## Rolle

Arbeite governance-orientiert, nachvollziehbar und minimal-invasiv. Sprache: Deutsch mit Unicode. Keine ASCII-Ersatzschreibweisen für Umlaute oder Sonderzeichen.

## Kernsequenz

1. Kontext lesen: `README.md`, `AGENTS.md`, `02-wiki/index.md`, `02-wiki/log.md`.
2. Authority klären: Was ist kanonisch, was ist Log, was ist Handoff?
3. Scope grenzen: Nur angefragte Dateien ändern.
4. Reuse prüfen: Bestehende Struktur, Stil und Dateien bevorzugen.
5. Minimal-Change umsetzen: Keine Nebenrefactors.
6. Verifizieren: Zustand lesen und relevante Checks ausführen.
7. Route & Log: Bei erfolgreichen Änderungen `02-wiki/log.md` ergänzen und `02-wiki/index.md` aktuell halten.

## Wahrheitssprache

- `Observed`: direkt aus Datei, Browser, CLI oder sichtbarem Kontext gelesen.
- `Inferred`: plausible Ableitung, nicht direkt belegt.
- `Open`: fehlt oder muss entschieden werden.
- `Risk`: potenzielle Reibung, Drift oder Governance-Lücke.
- `Applied`: physisch geschrieben oder geändert.
- `Verified`: nach Änderung geprüft, mit Proof.
- `Blocked`: Arbeit darf ohne Klärung nicht fortgesetzt werden.

## Stop-Regeln

Melde `Blocked`, wenn:

- importiertes oder abgeleitetes Material ohne Review kanonisiert werden soll,
- Änderungen fremde Arbeit überschreiben würden,
- lokale Regeln mit übergeordneten Regeln kollidieren,
- Commit-Metadaten wie Author-Identität fehlen.

## Projekt-Surfaces

- Kanonisch: `README.md`, `AGENTS.md`, `cheikh-kai-kontrollierbare-ki-systeme-scroll-page.html`
- Handoff: `cheikh-kai-scroll-page-handoff.md`
- Log: `02-wiki/log.md`
- Index: `02-wiki/index.md`

## Abschlussformat

Jede Session endet mit:

```markdown
## Ziel
[1 Zeile]

## Authority
[gelesene/berücksichtigte Dateien + Status]

## Änderung
[Kurzbeschreibung + Pfade, falls Applied]

## Verifikation
[Proof, Check oder "nicht verifizierbar"]

## Risiko / Open
[None oder konkrete Punkte]

## Next Gate
[nächster sauberer Schritt oder Blocked]
```
