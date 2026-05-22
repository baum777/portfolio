---
slug: "model-agnostic-working"
title: "Model-Agnostic Working — Architecture Layer"
teaser: "Stronger architecture logic for provider-neutral work: mosaicStacked, model-agnostic-workflow-system, and MACL keep models swappable, Contracts clear, and Authority bounded on the Backend side."
badge: "Model-Agnostic Architecture"
tags: ["Model-Agnostic", "Backend-first", "Contracts", "Validators"]
watermark: "AGNOSTIC"
facts: [{"label":"Role","text":"This Showcase shows how system logic remains stable when models, providers, or work surfaces change."},{"label":"mosaicStacked","text":"Visible work console for chat, GitHub workbench, Matrix workspace, and settings; browser shows Intent, Backend owns Runtime Authority."},{"label":"Shared Core","text":"model-agnostic-workflow-system bundles portable skills, machine-readable Contracts, registry, Provider Exports, Validators, and evals."},{"label":"Communication Layer","text":"model-agnostic-communication-layer / MACL structures agent priming, Review Cards, and Handover without overwriting host source of truth."}]
order: 3
---
There is a moment when a system has stopped working for its purpose — and starts working for the model that happens to be available. Prompts adapt. Workflows realign. The logic follows the model, not the other way around.

Model-Agnostic Working is the answer to this dependency: how do you build systems that keep their logic when the model changes?

## Where this work comes from — and where it points
An earlier work sample showed a practical automation case. Model-Agnostic Working is the stronger version of that — because it does not show one single automation, but solves the architecture question behind it:

How do humans, agents, models, and repositories work together without a single UI surface or chat history becoming the hidden source of truth?

## The core logic
Model-agnostic here does not only mean that different LLMs can be used. It means that system logic does not depend on the model.

The stable source of truth lives in:

- roles and Boundaries.
- machine-readable Contracts.
- backend-side routing.
- Adapter and export boundaries.
- Validators and evals.
- Review Cards and promotion rules.
- clear non-claims.

The model is an executing or supporting part, but not the architecture.

## Term clarification
- mosaicStacked: the visible work console for chat, repositories, knowledge spaces, and settings.
- MACL (model-agnostic-communication-layer): structures how agents hand over and prime without replacing host source of truth.
- MSPR-D: compressed, machine-readable handover packets with human-readable Review Cards.

## Layer 1 — mosaicStacked
mosaicStacked is the visible work console. It connects chat, repository work, Matrix-supported knowledge spaces, and settings in a Backend-first Console.

The Authority separation is important:

- Browser shows intent, status, selection, and Review surfaces.
- Backend owns provider calls, SSE framing, model routing, credentials, planning, execution, and verification.
- GitHub and Matrix credentials remain server-side.
- Provider IDs do not become UI source of truth.
- Restored browser state is not automatically a fresh Backend decision.
- Execute and Verify run approval-gated.

This prevents the surface from becoming an implicit power center. It remains an operator and review space.

## Layer 2 — model-agnostic-workflow-system
The model-agnostic-workflow-system is the Shared Core. It is not an end-user product, but a Core, Contract, export, and validation surface.

The strong architecture achievement lies in the separation:

- Portable Core: neutral semantics, skills, and Contracts.
- Compatibility Mirrors: transition surfaces for older consumers.
- Provider Exports: generated provider-specific bundles.
- Governance and Authority: documented claim and classification logic.
- Enforcement and Gates: Validators, build scripts, and certification evals.
- Workflow Entry: routing and surface decisions through clear working rules.

This keeps a workflow from being bound to Codex, Claude, Qwen, Kimi, OpenRouter, or a single tool. The semantics are defined first; the provider projection comes afterward.

## Layer 3 — model-agnostic-communication-layer
model-agnostic-communication-layer / MACL complements the working method with communication and Handover. It uses MSPR-D: small, structured agent-prime packets and human-readable Review Cards.

The important boundary:

- MACL does not replace binding host documents.
- MACL is not a permission layer.
- MACL is not a hidden memory database.
- MACL does not automatically promote derived knowledge.
- Host projects keep their source of truth.

This makes agent work connectable without summaries or priming packets falsely becoming Authority.

## What this shows about my working method
This Showcase shows another side of the same logic as Unitera:

- I separate UI intent from backend-side execution authority.
- I build systems so that models remain swappable.
- I make claims, maturity level, and validation explicit.
- I distinguish binding, operational, derived, and archived layers instead of mixing everything into flat documentation.
- I think about Handover, Review, and Promotion as a governance problem, not as a pure prompting question.

If you notice that your system would need to be more stable than the model currently driving it — and you do not know where to begin drawing that boundary: that is exactly the kind of question I start with.

→ [twim.baum@proton.me](mailto:twim.baum@proton.me)

## Visual representation on the portfolio page
The project card should not look like a tool stack, but like a control model for agentic work.

Recommended visual logic:

- three layers: Console → Shared Core → Communication Layer.
- Arrow: Intent → Plan → Approval → Execute → Verify → Journal.
- Chips: Backend Authority, Portable Core, Provider Exports, Validators, Review Cards.
- Boundary line: Model output is not truth.
- Outcome claim: swappable models, stable Contracts, verifiable handovers.

## Boundary
Model-Agnostic Working shows architecture and governance logic for provider-neutral work — no production framework, no Enterprise approval, no live runtime claim. The concepts are real. The maturity level is intentionally made transparent.
