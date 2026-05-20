"use client";

import Link from "next/link";
import { useScrollEffects } from "@/hooks/use-scroll-effects";
import { useThemeToggle } from "@/hooks/use-theme";
import { ProjectSummary, SiteContent } from "@/lib/types";

interface HomePageClientProps {
  site: SiteContent;
  projects: ProjectSummary[];
}

type VisualNode = { className: string; label: string; violet?: boolean };
type VisualMotion = "scan" | "map" | "compose" | "gate" | "loop";
type VisualTerminal = { left: string; right: string; lines: Array<{ strong: string; text: string }> };

const CONTEXT_MOTION_PULSES = [0, 1, 2, 3];
const SIGNAL_CLOUD_DOTS = [0, 1, 2, 3, 4, 5, 6];

const PROCESS_VISUALS: Array<{ lines: string[]; nodes: VisualNode[]; terminal: VisualTerminal; motion?: VisualMotion }> = [
  {
    lines: ["vl1", "vl2"],
    motion: "scan",
    nodes: [
      { className: "fn1", label: "Input" },
      { className: "fn2", label: "Context", violet: true },
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
    motion: "map",
    nodes: [
      { className: "fn1", label: "Patterns" },
      { className: "fn2", label: "Risks", violet: true },
      { className: "fn3", label: "Roles" },
      { className: "fn4", label: "Dependencies", violet: true }
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
    motion: "compose",
    nodes: [
      { className: "fn1", label: "Flow" },
      { className: "fn2", label: "Rules", violet: true },
      { className: "fn3", label: "Interface" },
      { className: "fn4", label: "Backend", violet: true }
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
    motion: "gate",
    nodes: [
      { className: "fn1", label: "Gate", violet: true },
      { className: "fn2", label: "Review" },
      { className: "fn3", label: "Evidence", violet: true },
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
    motion: "loop",
    nodes: [
      { className: "fn1", label: "Prototype" },
      { className: "fn2", label: "Validate", violet: true },
      { className: "fn3", label: "Operate" },
      { className: "fn4", label: "Improve", violet: true }
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

export function HomePageClient({ site, projects }: HomePageClientProps) {
  useThemeToggle();
  useScrollEffects();

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />

      <button className="theme-toggle" type="button" aria-label="Theme wechseln" data-theme-toggle>
        ◑
      </button>

      <header className="site-header">
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#top" className="brand">
            {site.meta.brand}
          </a>
          <div className="nav-links">
            {site.nav.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copyblock">
              <div className="kicker">{site.hero.kicker}</div>
              <h1 id="hero-title">
                {site.hero.titlePrefix} <span className="highlight serif">{site.hero.titleHighlight}</span> {site.hero.titleSuffix}
              </h1>
              <p className="subline">{site.hero.subline}</p>
              <div className="cta-row">
                {site.hero.ctas.map((cta) => (
                  <a key={cta.label} className={`button ${cta.variant}`} href={cta.href}>
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="system-panel" aria-label="Abstraktes Systempanel für Governance-Architektur">
              <div className="system-panel-title">Controlled Thinking System</div>
              <div className="signal-cloud" aria-hidden="true">
                {SIGNAL_CLOUD_DOTS.map((dot) => (
                  <span key={dot} />
                ))}
              </div>
              <svg className="wires" viewBox="0 0 480 560" aria-hidden="true" preserveAspectRatio="none">
                <path className="wire" d="M74,124 C94,110 116,106 134,112" />
                <path className="wire violet" d="M134,112 C180,94 246,102 298,123" />
                <path className="wire" d="M298,123 C266,160 234,192 202,224" />
                <path className="wire violet" d="M202,224 C254,202 318,206 365,230" />
                <path className="wire" d="M365,230 C348,270 326,298 283,314" />
                <path className="wire violet" d="M283,314 C254,356 198,386 138,406" />
              </svg>

              <div className="node signals">
                <strong>Loose Signals</strong>
                <span>scan(signals)</span>
              </div>
              <div className="node violet patterns">
                <strong>Patterns</strong>
                <span>map(risks + deps)</span>
              </div>
              <div className="node structure">
                <strong>Structure</strong>
                <span>bind(roles + scope)</span>
              </div>
              <div className="node violet review">
                <strong>Review Gate</strong>
                <span>owner.approve()</span>
              </div>
              <div className="node execution">
                <strong>Execution</strong>
                <span>run_if(traceable)</span>
              </div>

              <div className="terminal">
                <div className="terminal-head">
                  <div className="traffic" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>evidence layer / audit.log</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <strong>01</strong>
                    <span>read.loose_signals()</span>
                  </div>
                  <div className="terminal-line">
                    <strong>02</strong>
                    <span>map.dependencies(<em>risks</em>, owners, decisions)</span>
                  </div>
                  <div className="terminal-line">
                    <strong>03</strong>
                    <span>structure.roles_risks_decisions()</span>
                  </div>
                  <div className="terminal-line">
                    <strong>04</strong>
                    <span>gate.with_owner_scope_evidence()</span>
                  </div>
                  <div className="terminal-line">
                    <strong>05</strong>
                    <span>
                      execute only_if accountable &amp;&amp; traceable<span className="cursor" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="intro wrap" aria-label="Einführung">
          <div className="intro-card masked">
            <p>
              <strong>{site.intro.lead}</strong> {site.intro.text}
            </p>
          </div>
        </section>

        <section className="process-scroll" id="denken" aria-label="Denkweise als horizontale Scroll-Ausstellung">
          <div className="process-sticky">
            <div className="process-meta">
              <div className="process-title">
                <div className="section-kicker">{site.process.kicker}</div>
                <h2>{site.process.title}</h2>
                <p>{site.process.text}</p>
              </div>
              <div className="process-chain" aria-hidden="true">
                {site.process.chain.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="process-track" data-process-track>
              {site.process.steps.map((step, index) => {
                const visual = PROCESS_VISUALS[index] ?? PROCESS_VISUALS[0];
                return (
                  <article className="process-card" data-num={String(index + 1).padStart(2, "0")} key={step.stepLabel}>
                    <div className="process-visual">
                      {visual.motion ? (
                        <div className={`context-motion context-motion-${visual.motion}`} aria-hidden="true">
                          {CONTEXT_MOTION_PULSES.map((pulse) => (
                            <span key={pulse} />
                          ))}
                        </div>
                      ) : null}
                      {visual.lines.map((lineClass) => (
                        <div key={lineClass} className={`visual-line ${lineClass}`} />
                      ))}
                      {visual.nodes.map((node) => (
                        <div key={`${node.className}-${node.label}`} className={`floating-node ${node.violet ? "violet" : ""} ${node.className}`.trim()}>
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

                    <div className="process-copy">
                      <div className="step-label">{step.stepLabel}</div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                      <div className="micro-list">
                        {step.bullets.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="process-progress" aria-hidden="true" />
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
              <article className="principle-card masked" data-num={String(index + 1).padStart(2, "0")} key={principle.title}>
                <div className="label">Principle</div>
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
              <article className="project-card masked" data-watermark={project.watermark} key={project.slug}>
                <div>
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
                </div>
                <div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-link">
                    <Link className="button ghost" href={`/projekte/${project.slug}`}>
                      Projektdetail öffnen →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" aria-labelledby="kompetenz-title">
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
          <div className="contact-box masked">
            <div className="contact-content">
              <div className="section-kicker">{site.contact.kicker}</div>
              <h2>{site.contact.title}</h2>
              <p>{site.contact.text}</p>
              <div className="cta-row center">
                {site.contact.ctas.map((cta) => (
                  <a key={cta.label} className={`button ${cta.variant}`} href={cta.href}>
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>Cheikh Kai · AI Governance &amp; Automation</span>
          <span>{site.meta.footerClaim}</span>
        </div>
      </footer>
    </>
  );
}
