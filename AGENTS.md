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

<!-- workspace-root-sync:agents:start -->
## Workspace Root Integration

Class: repo-local agent frontdoor extension.
Use rule: read after this repository's own opening instructions. The workspace root `README.md` and `AGENTS.md` route entry, authority checks, reusable-surface checks, evidence, and stop rules; this repository's local files remain the canonical source for repo-specific product, runtime, archive, contract, and implementation truth.

### Authority And Scope

- Repo-local `AGENTS.md`, `README.md`, `docs/`, manifests, contracts, validators, tests, and workflow files govern this repository.
- Workspace-root files provide routing and constraints only; they do not replace repo-local architecture, implementation, product, runtime, or archive truth.
- Portfolio surfaces may classify, coordinate, or record cross-repo work, but they do not override this repository unless this repository explicitly adopts them.
- Shared-core assets under `model-agnostic-workflow-system/` are the reusable authority for portable skills, contracts, templates, validators, provider exports, and workflow routing patterns.
- For non-trivial, cross-repo, governance-related, reusable, prompt/system-prompt, validator, template, skill, or workflow/path-routing work, check existing repo-local and shared-core assets before creating a new surface.

### Entry Sequence

1. When entering from `/home/baum/Schreibtisch/workspace/main_projects`, read the root `README.md` and root `AGENTS.md` first.
2. Read this repository's frontdoors next: `AGENTS.md`, `README.md`, relevant `docs/`, manifests, contracts, validators, tests, and local workflow files.
3. Identify owner, scope, canonical file, expected write targets, dirty/user-made changes, validation path, and next gate before editing.
4. Prefer existing repo-local or shared-core scripts, templates, validators, contracts, and docs over new files.
5. Apply the smallest safe change.
6. Verify by reading changed state and running the relevant local checks.
7. Report results with exact paths, evidence, unresolved gaps, and next gate.

### TTD-first / TDD-inside

For meaningful work, state a compact TTD frame before writing:

- Decision: what must become unambiguously true after the slice.
- Owner / Scope: which repo, surface, file family, or authority plane owns the change.
- Contract: which file, API behavior, UI state, schema, policy, or doc proves the decision.
- Gate / Test: the smallest check that would fail if the decision is false.
- Implementation Slice: the smallest safe change needed to make the gate pass.
- Evidence: the command, output, file, or log that proves the result.
- Next Gate: what remains deliberately not claimed or deferred.

Use TDD inside implementation-bearing slices. TDD tests code behavior; TTD tests whether the development claim is valid. A task is done only when the claimed decision state is locally verifiable with evidence, or when the result is explicitly reported as `partial` or `BLOCKED`.

### Evidence Language

Use exact paths and label claims as:

- `Observed`: directly read from files, commands, repo state, or tool output.
- `Inferred`: reasoned from observed evidence.
- `Recommended`: proposed next action.
- `Applied`: a real write occurred and the path is named.
- `Verified`: applied change was read back or checked with named evidence.
- `BLOCKED`: authority, source, scope, validation, permission, or preservation of existing work is insufficient.

Do not present imported, summarized, compressed, assumed, or loose-doc context as canonical repo truth unless the owning surface has reviewed and promoted it.

### Stop Conditions

Stop and report `BLOCKED` when:

- owner, scope, authority, source, or validation is unclear;
- root, portfolio, shared-core, and repo-local guidance conflict;
- a loose doc, chat summary, archive, or imported source would drive implementation without owning-surface approval;
- required checks or evidence cannot prove the claim;
- an edit would overwrite user or agent work that was not created by the current task.
<!-- workspace-root-sync:agents:end -->
