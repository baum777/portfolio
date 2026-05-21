---
slug: "sol-trading-systems"
title: "Sparkfined / BobbyExecute — Kontrolliertes Trading auf Solana"
teaser: "Ein non-custodiales Solana Trading Terminal mit Dominance Layer, AI-Research und dokumentierten Execution-Gates. Architekturbeweis, kein Investment-Tool."
badge: "Architecture Proof · Built System"
tags: ["Sparkfined-TradeApp", "BobbyExecute", "Solana", "Dominance Layer", "TypeScript"]
watermark: "SOL"
facts: [{"label":"Problem","text":"Trading ist kein Informationsproblem, sondern ein Kontrollproblem: Folgen, Freigaben und Zustand müssen beherrscht werden."},{"label":"Terminal","text":"Swap-Execution mit Real-Time-Quotes, Fee Preview, Slippage-Kontrolle und Pre-Flight-Simulation vor jeder Signatur."},{"label":"Governance","text":"Backend ist die einzige Quelle der Wahrheit: Provider-Routing, Credentials und Execution laufen serverseitig."},{"label":"Boundary","text":"Kontrollierte Execution als Systemarchitektur; kein Investment-Tool, keine Finanzberatung, kein Live-Trading- oder Performance-Claim."}]
order: 2
---
## Einstieg
Schnelle Märkte erzeugen ein spezifisches Risiko: Entscheidungen entstehen aus Impuls, nicht aus Kontext. Ein Trade wird ausgeführt, weil sich die Bewegung richtig anfühlte. Weil kein System da war, das gefragt hätte: Warte — ist das wirklich das, was du willst?

Sparkfined und BobbyExecute sind der Versuch, genau diese Frage in Architektur zu übersetzen.

## Was es ist
Ein non-custodiales Trading Terminal für Solana, gebaut mit React/TypeScript im Frontend, Node/Express als Backend mit serverseitiger Ausführungslogik und Jupiter v6 für On-Chain-Execution.

Das Terminal umfasst drei Arbeitsflächen:

- Terminal: Swap-Execution mit Real-Time-Quotes, Fee Preview, Slippage-Kontrolle und Pre-Flight-Simulation vor jeder Signatur.
- Discover: Token-Discovery mit Filter-Engine, Ranking-Scoring und direktem Deep-Link in den Terminal-Kontext.
- Research / Journal: Strukturiertes Trade-Journal, Session Review und AI-gestützte Reflexion als strukturiertes Gedächtnis für vergangene Entscheidungen.

## Konzeptkern
- Kontrolle: lokale Datenhaltung, klare Backend-Grenzen und non-custodiale Ausführung bedeuten: du behältst Autorität über deine Daten und Aktionen — kein Dritter sitzt dazwischen.

## Die Architekturentscheidung, die das Projekt trägt
Das wichtigste Designprinzip steht im README:

> Backend is canonical. HTTP boundary is JSON, not TypeScript imports.

Das bedeutet: Die Oberfläche zeigt Absicht, sie besitzt keine Wahrheit. Credentials, Provider-Routing, Execution und Verification laufen serverseitig. Der Browser bekommt das Ergebnis, nicht die Kontrolle.

Diese Grenze ist nicht dokumentiert, um sie zu beschreiben. Sie ist architektonisch erzwungen.

## Dominance Layer
Das Backend besitzt einen eigenen Governance-Layer: den Dominance Layer.

Er regelt:

- Autonomy Tiers 1–4. Tier 2 ist der Standardbetrieb. Höhere Tiers erfordern explizite Freigabe.
- Risk Policy mit Approval-Gates für `core_engine`, `adapters`, `ci_deploy`, `large_diff`.
- Golden Tasks als Pflichtprüfungen vor jedem PR: `lint`, `tsc`, `build`, `test:backend`, `test:e2e`.
- Auto-Correct Loop mit begrenzter Iterationstiefe.

Kein Pull Request kommt ohne bestandene Golden Tasks in den Main-Branch. Das ist kein Prozess. Das ist ein Gate.

## Quote & Execution
Vier Mechanismen sichern die Swap-Execution gegen typische Fehlerquellen:

- Race Condition Protection: Jeder API-Call trägt eine Sequenz-ID. Ältere Antworten werden verworfen, sobald eine neuere unterwegs ist.
- Stale Quote Guard: Quotes älter als 25 Sekunden werden vor der Execution verworfen und neu abgerufen. Der Nutzer signiert nie auf veralteter Basis.
- Input Snapshot Pattern: Beim Klick auf „Swap“ wird der aktuelle State eingefroren. Änderungen während der Signing-Phase beeinflussen die laufende Transaktion nicht.
- Pre-Flight Simulation: Jede Transaktion wird gegen das Solana-Netzwerk simuliert, bevor der Nutzer signiert. Schlägt die Simulation fehl, wird abgebrochen, nicht signiert.

## Model Strategy
Research und AI-gestützte Reflexion laufen über einen Backend-Router mit vier Preistiers (`free` / `standard` / `pro` / `high`) und automatischem Fallback.

Provider: DeepSeek als Default, dazu OpenAI und Grok.

Die Prompts folgen dem RCTC-Schema:

- Task
- Rules
- Context
- Constraints

Sie liefern maschinenlesbare JSON-Outputs, keine freien Texte, die danach erst geparst werden müssen.

Wichtig: Prompt-Definitionen existieren an genau einem Ort: `shared/contracts/reasoning-prompts.ts`. Keine Duplikate.

## BobbyExecute
BobbyExecute stellt die eigentliche Ausführungsfrage:

Wann darf ein System wirklich handeln?

Die Antwort ist architektonisch, nicht konfigurativ:

- Die deterministische Runtime ist die einzige Ausführungsautorität.
- Intelligence, Forensics und Workflow-Flächen sind nicht-autoritär. Sie können vorschlagen, nicht entscheiden.
- Decision-Envelopes strukturieren die Entscheidungshistorie versioniert und rückverfolgbar.
- Environment-Proof und Live-Preflight sind keine optionalen Checks, sondern Readiness-Grenzen.

## Was das über die Arbeitsweise zeigt
Dieser Showcase ist kein Trading-Demo. Er ist ein Architekturnachweis für eine spezifische Denkweise:

Geschwindigkeit und Kontrolle schließen sich nicht aus, aber sie müssen bewusst getrennt werden. Wo die Grenze zwischen Oberfläche und Authority verläuft, zwischen Model-Output und Wahrheit, zwischen Quote und Commitment, das sind Designentscheidungen, keine Konfigurationen.

Wenn du an Systemen arbeitest, in denen Geschwindigkeit und Kontrolle gleichzeitig gefordert werden — und du weißt, dass die Antwort nicht mehr Prompts sind, sondern klarere Grenzen: dann ist das die Denkweise, die ich einbringe.

→ [twim.baum@proton.me](mailto:twim.baum@proton.me)

## Boundary
Sparkfined / BobbyExecute zeigt eine Systemarchitektur für kontrollierte Execution — kein Investment-Tool, keine Finanzberatung, kein Live-Trading-Claim, kein Performance-Nachweis. Der Code ist real. Der Betrieb ist nicht autorisiert behauptet.
