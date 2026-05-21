---
slug: "model-agnostic-working"
title: "Model-Agnostic Working — Architecture Layer"
teaser: "Ersatz für frühere E-Mail-Automation: eine stärkere Architekturleistung aus MosaicStacked, model-agnostic-workflow-system und MACL — für austauschbare Modelle, klare Contracts und backend-seitige Authority."
badge: "Model-Agnostic Architecture"
tags: ["Model-Agnostic", "Backend-first", "Contracts", "Validators"]
watermark: "AGNOSTIC"
facts: [{"label":"Rolle","text":"Dieses Showcase ersetzt die frühere E-Mail-Automation und zeigt die stärkere Logik: Modelle austauschbar machen, ohne Kontrolle zu verlieren."},{"label":"mosaicStacked","text":"Backend-first Console für Chat, GitHub-Workbench, Matrix-Workspace und Settings; Browser zeigt Intent, Backend besitzt Runtime-Wahrheit."},{"label":"Shared Core","text":"model-agnostic-workflow-system bündelt portable Skills, machine-readable Contracts, Registry, Provider Exports, Validators und Evals."},{"label":"Communication Layer","text":"model-agnostic-communication-layer / MACL strukturiert Agent-Priming, Review Cards und Handover, ohne Host-Wahrheit zu überschreiben."}]
order: 3
---
## Warum dieses Showcase Email Automation ersetzt
Die frühere E-Mail-Automation war ein praktischer Workflow-Beweis. Model-Agnostic Working ist deutlich stärker, weil es nicht nur eine einzelne Automatisierung zeigt, sondern eine Architekturfrage löst:

Wie können Menschen, Agenten, Modelle, Repositories und Kommunikationsräume zusammenarbeiten, ohne dass ein einzelnes Modell, eine UI-Fläche oder ein Chat-Verlauf zur versteckten Wahrheit wird?

## Die Kernlogik
Model-agnostic bedeutet hier nicht nur, dass verschiedene LLMs genutzt werden können. Es bedeutet, dass die Systemlogik nicht vom Modell abhängt.

Die stabile Wahrheit liegt in:

- Rollen und Boundaries.
- machine-readable Contracts.
- backend-seitigem Routing.
- Adapter- und Export-Grenzen.
- Validators und Evals.
- Review Cards und Promotion-Regeln.
- klaren Nicht-Claims.

Das Modell ist ausführender oder unterstützender Teil, aber nicht die Architektur.

## Ebene 1 — mosaicStacked
mosaicStacked ist die sichtbare Arbeitskonsole. Sie verbindet Chat, Repository-Arbeit, Matrix-gestützte Wissensräume und Settings in einer backend-first Console.

Wichtig ist die Authority-Trennung:

- Browser zeigt Absicht, Status, Auswahl und Review-Flächen.
- Backend besitzt Provider Calls, SSE-Framing, Modellrouting, Credentials, Planung, Ausführung und Verifikation.
- GitHub- und Matrix-Credentials bleiben serverseitig.
- Provider-IDs werden nicht zur UI-Wahrheit.
- Wiederhergestellter Browser-State ist nicht automatisch frische Backend-Wahrheit.
- Execute und Verify laufen approval-gated.

Damit wird die Oberfläche nicht zur impliziten Machtzentrale. Sie bleibt ein Operator- und Review-Raum.

## Ebene 2 — model-agnostic-workflow-system
Das model-agnostic-workflow-system ist der Shared Core. Es ist kein Endnutzerprodukt, sondern eine Core-, Contract-, Export- und Validierungsfläche.

Die starke Architekturleistung liegt in der Trennung:

- Portable Core: neutrale Semantik, Skills und Contracts.
- Compatibility Mirrors: Übergangsflächen für ältere Consumer.
- Provider Exports: generierte provider-spezifische Bundles.
- Governance und Authority: dokumentierte Claim- und Klassifikationslogik.
- Enforcement und Gates: Validators, Build Scripts und Certification Evals.
- Workflow Entry: Routing- und Surface-Entscheidungen über klare Arbeitsregeln.

Dadurch bleibt ein Workflow nicht an Codex, Claude, Qwen, Kimi, OpenRouter oder ein einzelnes Tool gebunden. Die Semantik wird zuerst definiert, die Provider-Projektion kommt danach.

## Ebene 3 — model-agnostic-communication-layer
model-agnostic-communication-layer / MACL ergänzt die Arbeitsweise um Kommunikation und Handover. Es nutzt MSPR-D: kleine, strukturierte Agent-Prime-Pakete und menschlich lesbare Review Cards.

Die wichtige Grenze:

- MACL ersetzt keine host-eigenen Canonical Docs.
- MACL ist keine Permission-Schicht.
- MACL ist keine versteckte Memory-Datenbank.
- MACL promotet abgeleitetes Wissen nicht automatisch.
- Host-Projekte behalten ihre Wahrheit.

Damit wird Agentenarbeit anschlussfähig, ohne dass Zusammenfassungen oder Priming-Pakete fälschlich zur Autorität werden.

## Was daran meine Arbeitsweise zeigt
Dieses Showcase zeigt eine andere Seite derselben Logik wie Unitera:

- Ich trenne UI-Absicht von Backend-Wahrheit.
- Ich baue Systeme so, dass Modelle austauschbar bleiben.
- Ich mache Claims, Reifegrad und Validierung explizit.
- Ich unterscheide canonical, operational, derived und archive statt alles in eine flache Dokumentation zu mischen.
- Ich denke Handover, Review und Promotion als Governance-Problem, nicht als reine Prompting-Frage.

## Visuelle Darstellung auf der Portfolio-Seite
Die Projektkarte sollte nicht wie ein Tool-Stack wirken, sondern wie ein Kontrollmodell für agentisches Arbeiten.

Empfohlene visuelle Logik:

- drei Ebenen: Console → Shared Core → Communication Layer.
- Pfeil: Intent → Plan → Approval → Execute → Verify → Journal.
- Chips: Backend Authority, Portable Core, Provider Exports, Validators, Review Cards.
- Boundary-Linie: Model output is not truth.
- Outcome-Claim: austauschbare Modelle, stabile Contracts, prüfbare Übergaben.

## Boundary
Dieses Showcase behauptet kein autonomes Runtime-Framework, keine produktive Enterprise-Berechtigungsschicht, keinen Live-Matrix-Proof und keine universelle Agentenplattform. Es zeigt eine Architektur- und Arbeitslogik für kontrollierbares, provider-neutrales Arbeiten.
