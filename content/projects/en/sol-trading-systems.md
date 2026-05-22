---
slug: "sol-trading-systems"
title: "Sparkfined / BobbyExecute — Controlled Trading on Solana"
teaser: "A non-custodial Solana trading terminal with Dominance Layer, AI Research, and documented Execution-Gates. Architecture Proof, not an investment tool."
badge: "Architecture Proof · Built System"
tags: ["Sparkfined-TradeApp", "BobbyExecute", "Solana", "Dominance Layer", "TypeScript"]
watermark: "SOL"
facts: [{"label":"Problem","text":"Trading is not an information problem, but a control problem: consequences, approvals, and state must be controlled."},{"label":"Terminal","text":"Swap Execution with real-time quotes, fee preview, slippage control, and pre-flight simulation before every signature."},{"label":"Governance","text":"Backend is the only source of truth: Provider Routing, credentials, and Execution run server-side."},{"label":"Boundary","text":"Controlled Execution as system architecture; no investment tool, no financial advice, no live trading or performance claim."}]
order: 2
---
## Entry
Fast markets create a specific risk: decisions arise from impulse, not from context. A trade is executed because the movement felt right. Because there was no system that would have asked: wait — is this really what you want?

Sparkfined and BobbyExecute are the attempt to translate exactly that question into architecture.

## What it is
A non-custodial trading terminal for Solana, built with React/TypeScript in the frontend, Node/Express as the Backend with server-side execution logic, and Jupiter v6 for on-chain Execution.

The terminal includes three work surfaces:

- Terminal: Swap Execution with real-time quotes, fee preview, slippage control, and pre-flight simulation before every signature.
- Discover: token discovery with filter engine, ranking scoring, and direct deep link into the terminal context.
- Research / Journal: structured trade journal, session review, and AI-supported reflection as structured memory for past decisions.

## Core concept
- Control: local data storage, clear Backend boundaries, and non-custodial Execution mean: you retain Authority over your data and actions — no third party sits in between.

## The architecture decision that carries the project
The most important design principle is in the README:

> Backend is canonical. HTTP boundary is JSON, not TypeScript imports.

That means: the surface shows intent; it does not own the source of truth. Credentials, Provider Routing, Execution, and Verification run server-side. The browser receives the result, not control.

This boundary is not documented merely to describe it. It is architecturally enforced.

## Dominance Layer
The Backend owns its own governance layer: the Dominance Layer.

It governs:

- Autonomy Tiers 1–4. Tier 2 is the default operating mode. Higher tiers require explicit approval.
- Risk Policy with Approval-Gates for `core_engine`, `adapters`, `ci_deploy`, `large_diff`.
- Golden Tasks as mandatory checks before every PR: `lint`, `tsc`, `build`, `test:backend`, `test:e2e`.
- Auto-Correct Loop with limited iteration depth.

No pull request reaches the main branch without passed Golden Tasks. This is not a process. This is a Gate.

## Quote & Execution
Four mechanisms secure Swap Execution against typical error sources:

- Race Condition Protection: every API call carries a sequence ID. Older responses are discarded as soon as a newer one is in flight.
- Stale Quote Guard: quotes older than 25 seconds are discarded before Execution and fetched again. The user never signs on stale basis.
- Input Snapshot Pattern: when clicking “Swap”, the current state is frozen. Changes during the signing phase do not influence the running transaction.
- Pre-Flight Simulation: every transaction is simulated against the Solana network before the user signs. If the simulation fails, execution aborts; it is not signed.

## Model Strategy
Research and AI-supported reflection run through a Backend router with four price tiers (`free` / `standard` / `pro` / `high`) and automatic fallback.

Providers: DeepSeek as default, plus OpenAI and Grok.

The prompts follow the RCTC schema:

- Task
- Rules
- Context
- Constraints

They deliver machine-readable JSON outputs, not free text that must be parsed afterward.

Important: prompt definitions exist in exactly one place: `shared/contracts/reasoning-prompts.ts`. No duplicates.

## BobbyExecute
BobbyExecute poses the actual execution question:

When is a system really allowed to act?

The answer is architectural, not configurational:

- The deterministic Runtime is the only execution authority.
- Intelligence, Forensics, and workflow surfaces are non-authoritative. They can suggest, not decide.
- Decision Envelopes structure the decision history in a versioned and traceable way.
- Environment Proof and Live Preflight are not optional checks, but readiness boundaries.

## What this shows about the working method
This Showcase is not a trading demo. It is an Architecture Proof for a specific way of thinking:

Speed and control do not exclude each other, but they must be consciously separated. Where the boundary runs between surface and Authority, between model output and source of truth, between Quote and Commitment: these are design decisions, not configurations.

If you work on systems where speed and control are required at the same time — and you know that the answer is not more prompts, but clearer boundaries: this is the thinking I bring in.

→ [twim.baum@proton.me](mailto:twim.baum@proton.me)

## Boundary
Sparkfined / BobbyExecute shows a system architecture for controlled Execution — no investment tool, no financial advice, no live trading claim, no performance proof. The code is real. Operation is not claimed as authorized.
