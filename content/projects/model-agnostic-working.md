---
slug: "model-agnostic-working"
title: "Model-Agnostic Working — Architecture Layer"
teaser: "Stärkere Architekturlogik für provider-neutrales Arbeiten: mosaicStacked, model-agnostic-workflow-system und MACL halten Modelle austauschbar, Contracts klar und Authority backend-seitig begrenzt."
badge: "Model-Agnostic Architecture"
tags: ["Model-Agnostic", "Backend-first", "Contracts", "Validators"]
watermark: "AGNOSTIC"
facts: [{"label":"Rolle","text":"Dieses Showcase zeigt, wie Systemlogik stabil bleibt, wenn Modelle, Provider oder Arbeitsflächen wechseln."},{"label":"mosaicStacked","text":"Sichtbare Arbeitskonsole für Chat, GitHub-Workbench, Matrix-Workspace und Settings; Browser zeigt Intent, Backend besitzt Runtime-Authority."},{"label":"Shared Core","text":"model-agnostic-workflow-system bündelt portable Skills, machine-readable Contracts, Registry, Provider Exports, Validators und Evals."},{"label":"Communication Layer","text":"model-agnostic-communication-layer / MACL strukturiert Agent-Priming, Review Cards und Handover, ohne Host-Wahrheit zu überschreiben."}]
order: 3
---
Es gibt einen Moment, in dem ein System aufgehört hat, für seinen Zweck zu arbeiten — und anfängt, für das Modell zu arbeiten, das gerade verfügbar ist. Prompts passen sich an. Workflows richten sich neu aus. Die Logik folgt dem Modell, nicht umgekehrt.

Model-Agnostic Working ist die Antwort auf diese Abhängigkeit: wie baut man Systeme, die ihre Logik behalten, wenn das Modell wechselt?

## Woher diese Arbeit kommt — und wohin sie zeigt
Eine frühere Arbeitsprobe zeigte einen praktischen Automatisierungsfall. Model-Agnostic Working ist die stärkere Version davon — weil es nicht eine einzelne Automatisierung zeigt, sondern die Architekturfrage löst, die dahinter liegt:

Wie arbeiten Menschen, Agenten, Modelle und Repositories zusammen, ohne dass eine einzelne UI-Fläche oder ein Chat-Verlauf zur versteckten Wahrheit wird?

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

## Begriffsklärung
- mosaicStacked: die sichtbare Arbeitskonsole für Chat, Repositories, Wissensräume und Settings.
- MACL (model-agnostic-communication-layer): strukturiert, wie Agenten übergeben und primen, ohne Host-Wahrheit zu ersetzen.
- MSPR-D: komprimierte, maschinenlesbare Übergabepakete mit menschlich lesbaren Review Cards.

## Ebene 1 — mosaicStacked
mosaicStacked ist die sichtbare Arbeitskonsole. Sie verbindet Chat, Repository-Arbeit, Matrix-gestützte Wissensräume und Settings in einer backend-first Console.

Wichtig ist die Authority-Trennung:

- Browser zeigt Absicht, Status, Auswahl und Review-Flächen.
- Backend besitzt Provider Calls, SSE-Framing, Modellrouting, Credentials, Planung, Ausführung und Verifikation.
- GitHub- und Matrix-Credentials bleiben serverseitig.
- Provider-IDs werden nicht zur UI-Wahrheit.
- Wiederhergestellter Browser-State ist nicht automatisch eine frische Backend-Entscheidung.
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

- MACL ersetzt keine verbindlichen Host-Dokumente.
- MACL ist keine Permission-Schicht.
- MACL ist keine versteckte Memory-Datenbank.
- MACL promotet abgeleitetes Wissen nicht automatisch.
- Host-Projekte behalten ihre Wahrheit.

Damit wird Agentenarbeit anschlussfähig, ohne dass Zusammenfassungen oder Priming-Pakete fälschlich zur Autorität werden.

## Was daran meine Arbeitsweise zeigt
Dieses Showcase zeigt eine andere Seite derselben Logik wie Unitera:

- Ich trenne UI-Absicht von backend-seitiger Ausführungsautorität.
- Ich baue Systeme so, dass Modelle austauschbar bleiben.
- Ich mache Claims, Reifegrad und Validierung explizit.
- Ich unterscheide verbindliche, operative, abgeleitete und archivierte Ebenen statt alles in eine flache Dokumentation zu mischen.
- Ich denke Handover, Review und Promotion als Governance-Problem, nicht als reine Prompting-Frage.

Wenn du merkst, dass dein System stabiler sein müsste, als das Modell, das es gerade antreibt — und du nicht weißt, wo du anfangen sollst, diese Grenze zu ziehen: dann ist das genau die Art Frage, mit der ich anfange.

→ [twim.baum@proton.me](mailto:twim.baum@proton.me)

## Visuelle Darstellung auf der Portfolio-Seite
Die Projektkarte sollte nicht wie ein Tool-Stack wirken, sondern wie ein Kontrollmodell für agentisches Arbeiten.

Empfohlene visuelle Logik:

- drei Ebenen: Console → Shared Core → Communication Layer.
- Pfeil: Intent → Plan → Approval → Execute → Verify → Journal.
- Chips: Backend Authority, Portable Core, Provider Exports, Validators, Review Cards.
- Boundary-Linie: Model output is not truth.
- Outcome-Claim: austauschbare Modelle, stabile Contracts, prüfbare Übergaben.

## Boundary
Model-Agnostic Working zeigt eine Architektur- und Governance-Logik für provider-neutrales Arbeiten — kein produktives Framework, keine Enterprise-Freigabe, kein Live-Runtime-Claim. Die Konzepte sind real. Der Reifegrad ist bewusst transparent gemacht.
