"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useScrollEffects } from "@/hooks/use-scroll-effects";
import { ThemeMode, useThemeToggle } from "@/hooks/use-theme";
import { ProjectSummary, SiteContent } from "@/lib/types";

interface HomePageClientProps {
  site: SiteContent;
  projects: ProjectSummary[];
}

type VisualNode = { className: string; label: string; emphasized?: boolean };
type VisualTerminal = { left: string; right: string; lines: Array<{ strong: string; text: string }> };

const PROCESS_VISUALS: Array<{ lines: string[]; nodes: VisualNode[]; terminal: VisualTerminal }> = [
  {
    lines: ["vl1", "vl2"],
    nodes: [
      { className: "fn1", label: "Input" },
      { className: "fn2", label: "Context", emphasized: true },
      { className: "fn3", label: "Friction" }
    ],
    terminal: {
      left: "signal.scan",
      right: "live",
      lines: [
        { strong: "capture", text: "information / problems" },
        { strong: "detect", text: "process gaps" },
        { strong: "output", text: "raw signal map" }
      ]
    }
  },
  {
    lines: ["vl1", "vl3"],
    nodes: [
      { className: "fn1", label: "Patterns" },
      { className: "fn2", label: "Risks", emphasized: true },
      { className: "fn3", label: "Roles" },
      { className: "fn4", label: "Dependencies", emphasized: true }
    ],
    terminal: {
      left: "pattern.map",
      right: "model",
      lines: [
        { strong: "map", text: "dependencies → owners" },
        { strong: "trace", text: "repeated risks" },
        { strong: "output", text: "relation graph" }
      ]
    }
  },
  {
    lines: ["vl1", "vl2", "vl3"],
    nodes: [
      { className: "fn1", label: "Flow" },
      { className: "fn2", label: "Rules", emphasized: true },
      { className: "fn3", label: "Interface" },
      { className: "fn4", label: "Backend", emphasized: true }
    ],
    terminal: {
      left: "system.compose",
      right: "draft",
      lines: [
        { strong: "define", text: "roles / states / permissions" },
        { strong: "compose", text: "workflow + data path" },
        { strong: "output", text: "controlled architecture" }
      ]
    }
  },
  {
    lines: ["vl2", "vl3"],
    nodes: [
      { className: "fn1", label: "Gate", emphasized: true },
      { className: "fn2", label: "Review" },
      { className: "fn3", label: "Evidence", emphasized: true },
      { className: "fn4", label: "Escalate" }
    ],
    terminal: {
      left: "control.layer",
      right: "armed",
      lines: [
        { strong: "require", text: "evidence + owner" },
        { strong: "stop", text: "if unverified" },
        { strong: "output", text: "accountable workflow" }
      ]
    }
  },
  {
    lines: ["vl1", "vl2"],
    nodes: [
      { className: "fn1", label: "Prototype" },
      { className: "fn2", label: "Validate", emphasized: true },
      { className: "fn3", label: "Operate" },
      { className: "fn4", label: "Improve", emphasized: true }
    ],
    terminal: {
      left: "execution.loop",
      right: "valid",
      lines: [
        { strong: "test", text: "with real constraints" },
        { strong: "measure", text: "reliability / traceability" },
        { strong: "output", text: "operational system" }
      ]
    }
  }
];

function parseStepLabel(stepLabel: string) {
  const match = stepLabel.match(/Step\s+(\d+)\s*\/\s*(.+)$/);
  return {
    number: match?.[1] ?? stepLabel.slice(0, 2),
    label: match?.[2] ?? stepLabel
  };
}

function heroTitleParts(site: SiteContent) {
  return {
    first: site.hero.titlePrefix.replace(/\s+in$/, ""),
    second: `in ${site.hero.titleHighlight}`,
    third: site.hero.titleSuffix
  };
}

function renderLines(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function ThemeToggle({ theme, onToggle }: { theme: ThemeMode; onToggle: () => void }) {
  return (
    <button className="theme-toggle" type="button" aria-label="Theme wechseln" data-current={theme} onClick={onToggle}>
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.5 15.2A7.6 7.6 0 0 1 8.8 4.5a8.2 8.2 0 1 0 10.7 10.7Z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.8v2.1M12 19.1v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
      </svg>
    </button>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image className="brand-logo brand-logo-light" src="/logo-light-round.png" width={34} height={34} alt="" priority />
      <Image className="brand-logo brand-logo-dark" src="/logo-dark-round.png" width={34} height={34} alt="" priority />
    </span>
  );
}

export function HomePageClient({ site, projects }: HomePageClientProps) {
  useScrollEffects();
  const { theme, toggleTheme } = useThemeToggle();
  const [openStepIndex, setOpenStepIndex] = useState(0);
  const heroTitle = heroTitleParts(site);

  return (
    <div className="site-shell">
      <aside className="side-nav" aria-label="Hauptnavigation">
        <a href="#top" className="side-brand" aria-label="Cheikh Fall — zur Startsektion">
          <BrandMark />
          <span>CF</span>
        </a>

        <nav className="side-nav-list">
          {site.nav.map((item, index) => (
            <a key={item.href} className="side-nav-link" href={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="side-email" href="mailto:twim.baum@proton.me">
          <span>twim.baum@</span>
          <span>proton.me</span>
        </a>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </aside>

      <header className="mobile-nav">
        <a href="#top" className="mobile-brand" aria-label="Cheikh Fall — zur Startsektion">
          <BrandMark />
          <span>CF</span>
        </a>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <a className="mobile-nav-link" href="#kontakt">
          Kontakt
        </a>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copyblock">
            <div className="hero-kicker">{site.hero.kicker}</div>
            <h1 id="hero-title">
              {heroTitle.first}
              <br />
              {heroTitle.second}
              <br />
              {heroTitle.third}
            </h1>
            <p className="hero-subline">{renderLines(site.hero.subline)}</p>
            <div className="cta-row">
              {site.hero.ctas.map((cta) => (
                <a key={cta.label} className={`button ${cta.variant}`} href={cta.href}>
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="process-scroll" id="denken" aria-label="Denkweise als horizontale Scroll-Ausstellung">
          <div className="process-sticky">
            <div className="process-meta wrap">
              <div className="process-title">
                <div className="section-kicker">{site.process.kicker}</div>
                <h2>{site.process.title}</h2>
                <p>{site.process.text}</p>
              </div>
              <div className="process-chain" aria-hidden="true">
                {site.process.chain.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="process-track" data-process-track>
              {site.process.steps.map((step, index) => {
                const visual = PROCESS_VISUALS[index] ?? PROCESS_VISUALS[0];
                const stepMeta = parseStepLabel(step.stepLabel);
                const isOpen = openStepIndex === index;

                return (
                  <article className={`process-card ${isOpen ? "open" : ""}`} data-num={stepMeta.number} key={step.stepLabel}>
                    <button
                      className={`step-header ${isOpen ? "open" : ""}`}
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenStepIndex(isOpen ? -1 : index)}
                    >
                      <span className="step-meta">
                        <span className="step-number">{stepMeta.number}</span>
                        <span className="step-title">{stepMeta.label}</span>
                      </span>
                      <span className="step-toggle" aria-hidden="true">
                        +
                      </span>
                    </button>

                    <div className="step-body">
                      <div className="process-copy">
                        <div className="step-label">{step.stepLabel}</div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                        <div className="process-tags">
                          {step.bullets.map((item) => (
                            <span className="tag" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="process-visual" aria-hidden="true">
                        {visual.lines.map((lineClass) => (
                          <div key={lineClass} className={`visual-line ${lineClass}`} />
                        ))}
                        {visual.nodes.map((node) => (
                          <div
                            key={`${node.className}-${node.label}`}
                            className={`floating-node ${node.emphasized ? "emphasized" : ""} ${node.className}`.trim()}
                          >
                            {node.label}
                          </div>
                        ))}

                        <div className="mini-terminal">
                          <div className="mini-terminal-head">
                            <span>{visual.terminal.left}</span>
                            <span>{visual.terminal.right}</span>
                          </div>
                          <div className="mini-terminal-body">
                            {visual.terminal.lines.map((line) => (
                              <div key={line.strong}>
                                <strong>{line.strong}</strong> {line.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="process-indicator" data-process-indicator aria-hidden="true">
              <div className="indicator-dots">
                {site.process.chain.map((item, index) => (
                  <span
                    key={item}
                    className={`indicator-dot ${index === 0 ? "active" : ""}`}
                    data-process-dot
                    data-label={`${String(index + 1).padStart(2, "0")} ${item}`}
                  />
                ))}
              </div>
              <span data-process-label>01 {site.process.chain[0]}</span>
            </div>
          </div>
        </section>

        <section className="section wrap" id="arbeiten">
          <div className="section-head masked">
            <div className="section-kicker">{site.principles.kicker}</div>
            <div>
              <h2>{site.principles.title}</h2>
              <p className="section-copy">{site.principles.text}</p>
            </div>
          </div>

          <div className="principles">
            {site.principles.items.map((principle, index) => (
              <article className="principle-card masked" key={principle.title}>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="projekte">
          <div className="section-head masked">
            <div className="section-kicker">{site.projects.kicker}</div>
            <div>
              <h2>{site.projects.title}</h2>
              <p className="section-copy">{site.projects.text}</p>
            </div>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project-card masked" key={project.slug}>
                <div className="label">{project.badge}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-text">{project.teaser}</p>
                <div className="project-facts">
                  {project.facts.map((fact) => (
                    <div className="fact" key={fact.label}>
                      <strong>{fact.label}</strong>
                      <span>{fact.text}</span>
                    </div>
                  ))}
                </div>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="text-link" href={`/projekte/${project.slug}`}>
                  Projektdetail öffnen →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="kompetenz" aria-labelledby="kompetenz-title">
          <div className="section-head masked">
            <div className="section-kicker">{site.capabilities.kicker}</div>
            <div>
              <h2 id="kompetenz-title">{site.capabilities.title}</h2>
              <p className="section-copy">{site.capabilities.text}</p>
            </div>
          </div>

          <div className="capabilities">
            <div className="value-zone masked">
              <div className="label">{site.capabilities.valueZoneLabel}</div>
              <h3>{site.capabilities.valueZoneTitle}</h3>
              <p>{site.capabilities.valueZoneText}</p>
              <ul className="value-list">
                {site.capabilities.valueList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="capability-panel masked">
              <div className="label">{site.capabilities.capabilitiesLabel}</div>
              <div className="capability-list">
                {site.capabilities.rows.map((row) => (
                  <div className="capability-row" key={row.title}>
                    <strong>{row.title}</strong>
                    <span>{row.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact wrap" id="kontakt">
          <div className="contact-content masked">
            <div className="section-kicker">{site.contact.kicker}</div>
            <h2>{site.contact.title}</h2>
            {site.contact.text.split("\n\n").map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
            <div className="cta-row center">
              {site.contact.ctas.map((cta) => (
                <a key={cta.label} className={`button ${cta.variant}`} href={cta.href}>
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Cheikh Fall · AI Governance &amp; Agentic Systems</span>
          <span>{site.meta.footerClaim}</span>
        </footer>
      </main>
    </div>
  );
}
