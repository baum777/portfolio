# Arbeitslog

## [2026-05-18] add | Repo-Frontdoor und Wiki angelegt [[README]] [[AGENTS]] [[02-wiki/index]]

## [2026-05-18] import | Geprüfte Cheikh-Kai-Scroll-Landingpage in das Repo übernommen [[cheikh-kai-kontrollierbare-ki-systeme-scroll-page]] [[cheikh-kai-scroll-page-handoff]]

## [2026-05-18] update | Scroll-Verhalten der Prozess-Sektion an Referenz angeglichen (statische Meta-Ebene, horizontaler Track) [[cheikh-kai-kontrollierbare-ki-systeme-scroll-page]]

## [2026-05-18] fix | Root-404 auf Vercel durch index-Entry behoben (Redirect auf kanonische HTML-Seite) [[index]] [[cheikh-kai-kontrollierbare-ki-systeme-scroll-page]]

## [2026-05-18] update | Section-1-Scroll auf dynamischen Sticky-Pin mit präziser Horizontal-Progression umgestellt [[cheikh-kai-kontrollierbare-ki-systeme-scroll-page]]

## [2026-05-18] fix | Side-Scroll-Prozesskarten auf vollständige Lesbarkeit justiert (zentrierte Card-Laufbahn, größere Sticky-Lesezone, längere Step-Scrollzeit) [[cheikh-kai-kontrollierbare-ki-systeme-scroll-page]]

## [2026-05-19] migrate | Migration auf Next.js App Router mit dynamischer Startseite und Slug-basierten Projektseiten umgesetzt [[app/page]] [[app/projekte/[slug]/page]]

## [2026-05-19] add | Datenmodell für v1 angelegt (site.de.json + Projekt-Markdown mit Frontmatter) [[content/site.de]] [[content/projects]]

## [2026-05-19] verify | Lint und Build erfolgreich ausgeführt (SSG für Home und 3 Projektseiten bestätigt) [[README]] [[app/page]] [[app/projekte/[slug]/page]]

## [2026-05-19] cleanup | Legacy-Root-Redirect entfernt; `/` wird jetzt ausschließlich über Next.js App Router gerendert [[app/page]] [[README]]

## [2026-05-19] fix | Vercel-Deployment gegen veraltete Output-Directory-Einstellung `public` abgesichert [[vercel.json]]

## [2026-05-19] deploy | Preview-Deployment nach Vercel-Output-Fix erfolgreich wiederholt [[vercel.json]]

## [2026-05-19] deploy | Production-Deployment mit prebuilt Vercel-Output erfolgreich veröffentlicht [[vercel.json]]

## [2026-05-19] fix | Hero-Headline gegen Text-Overflow in mittleren Viewports abgesichert [[app/globals]]

## [2026-05-19] deploy | Production-Deployment mit Hero-Overflow-Fix veröffentlicht [[app/globals]] [[vercel.json]]

## [2026-05-19] fix | Prozesskarten in mittleren Viewports harmonisch ausgerichtet [[app/globals]]

## [2026-05-19] deploy | Production-Deployment mit Prozesskarten-Alignment-Fix veröffentlicht [[app/globals]] [[vercel.json]]

## [2026-05-20] fix | Systempanel-Nodes proportional am Data-Stream-Raster ausgerichtet [[app/globals]] [[components/home-page-client]]

## [2026-05-20] deploy | Production-Deployment mit Systempanel-Node-Fix veröffentlicht [[app/globals]] [[components/home-page-client]] [[vercel.json]]

## [2026-05-20] update | Kontextbezogene ruhige Motion-Layer für Prozesskarten 1 und 2 ergänzt [[app/globals]] [[components/home-page-client]]

## [2026-05-20] deploy | Production-Deployment mit Prozesskarten-Motion-Layern veröffentlicht [[app/globals]] [[components/home-page-client]] [[vercel.json]]

## [2026-05-20] update | Ruhige Kontext-Motion auf alle Prozesskarten erweitert [[app/globals]] [[components/home-page-client]]

## [2026-05-20] deploy | Production-Deployment mit Motion-Layern für alle Prozesskarten veröffentlicht [[app/globals]] [[components/home-page-client]] [[vercel.json]]

## [2026-05-20] update | Hero-Systempanel als Denkbewegung von losen Signalen zu kontrollierter Evidenz neu erzählt [[app/globals]] [[components/home-page-client]]

## [2026-05-20] deploy | Production-Deployment mit neu erzähltem Hero-Systempanel veröffentlicht [[app/globals]] [[components/home-page-client]] [[vercel.json]]

## [2026-05-20] update | Portfolio-Startseite nach v2-Spec beruhigt: DM-Typografie, warme Off-White-Palette, Sticky-Side-Nav, reduzierte Hero-Zone, Prozessindikator und Mobile-Accordion-Fallback umgesetzt [[app/layout]] [[app/globals]] [[components/home-page-client]] [[hooks/use-scroll-effects]] [[content/site.de]]

## [2026-05-20] update | Spec v1.2 umgesetzt: Lora/IBM-Plex-Typografie, Paper-Notepad/Tokyo-Night-Theme-System und Dark/Light-Toggle ergänzt [[app/layout]] [[app/globals]] [[components/home-page-client]] [[hooks/use-theme]]

## [2026-05-21] update | Portfolio-Showcase-Update aus bereitgestelltem Import-Paket übernommen: Cheikh-Fall-Content, drei Showcases, Hero-Subline, Kontakt-E-Mail und Footer aktualisiert [[content/site.de]] [[content/projects]] [[components/home-page-client]] [[app/globals]]

## [2026-05-21] update | Portfolio-Bundle 2 und Fokus-Sigil-Brandassets integriert: Unitera als Main Development, Model-Agnostic Architecture Layer, CF-Logo-Navigation, Favicons und Webmanifest ergänzt [[content/site.de]] [[content/projects]] [[components/home-page-client]] [[app/globals]] [[app/layout]] [[public/brand-assets]]

## [2026-05-21] deploy | Production-Deployment von Commit b1c76bb auf Vercel veröffentlicht und Alias `portfolio.uniterasystems.com` als Ready verifiziert [[vercel.json]]

## [2026-05-21] update | SOL-Trading-Showcase auf kontrolliertes Solana-Trading mit Dominance Layer, Governance, Execution-Gates und Architekturbeweis umgestellt [[content/projects/sol-trading-systems]] [[02-wiki/index]]

## [2026-05-21] update | Patch Spec v2 umgesetzt: Startseite und drei Showcase-Detailseiten mit emotionaler Handlungslogik, Sprachkorrekturen, Kontaktbrücken und konsistenten Boundaries geschärft [[content/site.de]] [[content/projects/unitera-systems]] [[content/projects/sol-trading-systems]] [[content/projects/model-agnostic-working]] [[components/home-page-client]] [[app/projekte/[slug]/page]] [[app/globals]] [[02-wiki/index]]

## [2026-05-21] verify+deploy | Browser-QA lokal und live für Startseite sowie drei Showcase-Detailseiten durchgeführt; Production-Deployment `dpl_4eJu2qAQyrvngTJ9aRR56sHBGHpW` als Ready auf `portfolio.uniterasystems.com` verifiziert [[content/site.de]] [[content/projects]] [[vercel.json]]

## [2026-05-21] deploy | Production-Deployment erneut über prebuilt Vercel-Output veröffentlicht; Deployment `dpl_3zWxeDBERRbCTErb8sUN4GvZMWdH` als Ready auf `portfolio.uniterasystems.com` verifiziert [[vercel.json]]

## [2026-05-22] update | Portfolio-Content von Deutsch nach Englisch übersetzt: Startseite, drei Showcase-Detailseiten, sichtbare UI-Texte, HTML-Lang und Frontdoor aktualisiert; Architekturbegriffe und Anchors beibehalten [[content/site.de]] [[content/projects]] [[components/home-page-client]] [[app/projekte/[slug]/page]] [[app/not-found]] [[app/layout]] [[README]] [[02-wiki/index]]

## [2026-05-22] deploy | Englischen Portfolio-Stand über prebuilt Vercel-Output nach Production veröffentlicht; Deployment `dpl_H4y2jFKyugHgG26kYVzhxoTh4Reh` als Ready auf `portfolio.uniterasystems.com` verifiziert [[content/site.de]] [[content/projects]] [[vercel.json]]

## [2026-05-22] update | Portfolio auf bilinguale DE/EN-Ausgabe mit clientseitigem Language-Toggle umgestellt; deutsche Inhalte als Default und englische Inhalte parallel in eigenen Content-Quellen gehalten [[content/site.de]] [[content/site.en]] [[content/projects]] [[content/projects/en]] [[components/home-page-client]] [[components/project-detail-client]] [[components/language-toggle]] [[hooks/use-language]] [[lib/site-content]] [[lib/projects]] [[app/globals]]

## [2026-05-22] fix | Language-Toggle-Hydration gegen localStorage-Überschreiben abgesichert und Mobile-Navigation für Toggle rechts oben freigestellt [[hooks/use-language]] [[app/globals]] [[02-wiki/index]]

## [2026-05-22] verify | Bilinguale Portfolio-Ausgabe lokal per Build, Lint und Playwright-Browser-QA geprüft: DE-Default, EN-Toggle, html-lang, localStorage-Persistenz, Detailseitenwechsel und Mobile-Toggle-Bounds verifiziert [[components/language-toggle]] [[hooks/use-language]] [[components/home-page-client]] [[components/project-detail-client]]

## [2026-05-22] deploy | Bilingualen Portfolio-Stand `ae2d232` nach Production veröffentlicht; Deployment `dpl_GK4DtAbPa1bw6E5bWws78YtdJi5u` als Ready auf `portfolio.uniterasystems.com` per Vercel-Inspect und Live-Browser-QA verifiziert [[vercel.json]] [[components/language-toggle]] [[hooks/use-language]]

## [2026-05-22] fix | EN-Principles-Cards nach Sprachwechsel wieder sichtbar gemacht: Scroll-/Reveal-Observer wird bei Language-Change neu initialisiert und bindet die aktuell gerenderten `.masked`-Elemente [[hooks/use-scroll-effects]] [[components/home-page-client]] [[02-wiki/index]]

## [2026-05-26] patch | Kontakt-CTA, externe Trust-Links, Showcase-GitHub-Links, konsistente Fallback-Mail und Open-Graph-Metadaten in der aktiven Next.js-Portfolio-Seite ergänzt [[content/site.de]] [[content/site.en]] [[components/home-page-client]] [[app/layout]] [[app/globals]] [[public/og-image]]
