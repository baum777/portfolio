function renderSystemPanel(panel) {
  const nodes = panel.nodes
    .map(
      (node) => `
          <div class="node ${node.className}">
            <strong>${node.title}</strong>
            <span>${node.code}</span>
          </div>`
    )
    .join("");

  const terminalLines = panel.terminalLines
    .map((line, index) => {
      const number = String(index + 1).padStart(2, "0");
      const tail =
        index === panel.terminalLines.length - 1
          ? '<span class="cursor" aria-hidden="true"></span>'
          : "";

      return `<div class="terminal-line"><strong>${number}</strong><span>${line}${tail}</span></div>`;
    })
    .join("");

  return `
        <aside class="system-panel" aria-label="Abstraktes Systempanel für Governance-Architektur">
          <svg class="wires" viewBox="0 0 480 560" aria-hidden="true" preserveAspectRatio="none">
            <path class="wire" d="M92,96 C160,86 210,120 304,158" />
            <path class="wire violet" d="M352,170 C306,230 250,250 180,266" />
            <path class="wire" d="M172,302 C120,352 108,392 92,452" />
            <path class="wire violet" d="M196,294 C278,330 330,344 360,382" />
            <path class="wire" d="M110,474 C188,500 286,474 360,414" />
          </svg>
${nodes}
          <div class="terminal">
            <div class="terminal-head">
              <div class="traffic" aria-hidden="true"><i></i><i></i><i></i></div>
              <span>${panel.terminalTitle}</span>
            </div>
            <div class="terminal-body">${terminalLines}</div>
          </div>
        </aside>`;
}

function renderIcon(name, className = "icon") {
  if (name === "github") {
    return `
      <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
      </svg>`;
  }

  return `
      <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7 7h10v10h-2V10.41l-8.29 8.3-1.42-1.42 8.3-8.29H7V7Z" fill="currentColor"/>
      </svg>`;
}

function externalAttrs(item) {
  return item.external || /^https?:\/\//.test(item.href)
    ? ' target="_blank" rel="noopener noreferrer"'
    : "";
}

function renderProcessStep(step) {
  const lines = step.lines
    .map((lineClass) => `<div class="visual-line ${lineClass}"></div>`)
    .join("");
  const nodes = step.nodes
    .map((node) => `<div class="floating-node ${node.className}">${node.label}</div>`)
    .join("");
  const terminalLines = step.terminal.lines
    .map((line) => `<div><strong>${line.key}</strong> ${line.value}</div>`)
    .join("");
  const microList = step.microList.map((item) => `<span>${item}</span>`).join("");

  return `
          <article class="process-card" data-num="${step.num}">
            <div class="process-visual">
${lines}
${nodes}
              <div class="mini-terminal">
                <div class="mini-terminal-head"><span>${step.terminal.left}</span><span>${step.terminal.right}</span></div>
                <div class="mini-terminal-body">${terminalLines}</div>
              </div>
            </div>
            <div class="process-copy">
              <div class="step-label">${step.stepLabel}</div>
              <h3>${step.title}</h3>
              <p>${step.text}</p>
              <div class="micro-list">${microList}</div>
            </div>
          </article>`;
}

function renderProjectCard(project, index) {
  const facts = project.facts
    .map(
      (fact) =>
        `<div class="fact"><strong>${fact.key}</strong><span>${fact.value}</span></div>`
    )
    .join("");
  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const codeLink = `
          <a class="project-code-link" href="${project.codeLinkHref}" target="_blank" rel="noopener noreferrer">
            ${renderIcon("github", "icon small")}
            <span>${project.codeLinkLabel}</span>
          </a>`;

  return `
        <article class="project-card masked" data-watermark="${project.watermark}" data-project-index="${index}">
          <div>
            <div class="label">${project.label}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-text">${project.text}</p>
            <div class="project-facts">${facts}</div>
          </div>
          <div class="project-actions">
            <div class="tags">${tags}</div>
            ${codeLink}
          </div>
        </article>`;
}

export function renderPage(content) {
  const navLinks = content.nav
    .map((item) => `<a class="nav-link" href="${item.href}">${item.label}</a>`)
    .join("");
  const localeLinks = ["de", "en"]
    .map((locale) => {
      const active = locale === content.locale ? " active" : "";
      return `<a class="locale-link${active}" href="/${locale}/" hreflang="${locale}">${content.localeSwitch[locale]}</a>`;
    })
    .join("");
  const externalNavLinks = `
        <a class="nav-icon-link" href="${content.links.github}" target="_blank" rel="noopener noreferrer" aria-label="${content.externalNav.github}">
          ${renderIcon("github")}
        </a>
        <a class="nav-icon-link" href="${content.links.company}" target="_blank" rel="noopener noreferrer" aria-label="${content.externalNav.company}">
          ${renderIcon("external")}
        </a>`;
  const heroCtas = content.hero.ctas
    .map((cta) => `<a class="${cta.className}" href="${cta.href}"${externalAttrs(cta)}>${cta.label}</a>`)
    .join("");
  const processChain = content.process.chain.map((item) => `<span>${item}</span>`).join("");
  const whyParagraphs = content.why.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  const processCards = content.process.steps.map((step) => renderProcessStep(step)).join("");
  const principleCards = content.principles.items
    .map(
      (item) => `
        <article class="principle-card masked" data-num="${item.num}">
          <div class="label">Principle</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`
    )
    .join("");
  const stackGroups = content.stack.groups
    .map(
      (group) => `
        <article class="stack-card masked">
          <div class="label">${group.title}</div>
          <div class="stack-items">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>`
    )
    .join("");
  const projectCards = content.projects.items
    .map((project, index) =>
      renderProjectCard({ ...project, codeLinkHref: content.links.github }, index)
    )
    .join("");
  const valueItems = content.capabilities.valueList
    .map((item) => `<li>${item}</li>`)
    .join("");
  const capabilityRows = content.capabilities.rows
    .map(
      (row) => `
            <div class="capability-row">
              <strong>${row.key}</strong>
              <span>${row.value}</span>
            </div>`
    )
    .join("");
  const contactCtas = content.contact.ctas
    .map((cta) => `<a class="${cta.className}" href="${cta.href}"${externalAttrs(cta)}>${cta.label}</a>`)
    .join("");
  const contactFallback = content.contact.fallbackLabel
    ? `
            <a class="contact-fallback" href="mailto:${content.links.fallbackEmail}">
              <span>${content.contact.fallbackLabel}</span>
              ${content.links.fallbackEmail}
            </a>`
    : "";
  const contactExternalLinks = content.contact.externalLinks
    .map(
      (link) => `
              <a class="inline-muted-link" href="${link.href}" target="_blank" rel="noopener noreferrer">
                ${renderIcon(link.icon, "icon small")}
                <span>${link.label}</span>
              </a>`
    )
    .join("");
  const footerLinks = content.footer.links
    .map(
      (link) =>
        `<a class="footer-link" href="${link.href}"${externalAttrs(link)}>${link.label}</a>`
    )
    .join("");

  return `
  <div class="scroll-progress" aria-hidden="true"></div>
  <button class="theme-toggle" type="button" aria-label="Theme wechseln" data-theme-toggle>◑</button>

  <header class="site-header">
    <nav class="nav" aria-label="Hauptnavigation">
      <a href="#top" class="brand">${content.brand}</a>
      <div class="nav-right">
        <div class="nav-links">${navLinks}</div>
        <div class="locale-switch" aria-label="Sprache wechseln">${localeLinks}</div>
        <div class="nav-external">${externalNavLinks}</div>
      </div>
    </nav>
  </header>

  <div class="job-signal" aria-label="Aktuelle Rollensuche">
    <div class="wrap job-signal-inner">
      <span>${content.jobSignal.text}</span>
      <a href="${content.links.email}">→ ${content.jobSignal.email}</a>
    </div>
  </div>

  <main id="top">
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copyblock">
          <div class="kicker">${content.hero.kicker}</div>
          <h1 id="hero-title">
            ${content.hero.titlePrefix}
            <span class="highlight serif">${content.hero.titleHighlight}</span>
            ${content.hero.titleSuffix}
          </h1>
          <p class="subline">${content.hero.subline}</p>
          <div class="cta-row">${heroCtas}</div>
          <p class="hero-booking">
            ${content.hero.bookingPrefix}
            <a href="${content.links.email}">${content.hero.bookingLabel}</a>
          </p>
        </div>
${renderSystemPanel(content.systemPanel)}
      </div>
    </section>

    <section class="intro wrap" aria-label="Einführung">
      <div class="intro-card masked">
        <p><strong>${content.intro.lead}</strong> ${content.intro.text}</p>
      </div>
    </section>

    <section class="why-section wrap" id="why">
      <div class="why-panel masked">
        <div>
          <div class="section-kicker">${content.why.kicker}</div>
          <h2>${content.why.title}</h2>
        </div>
        <div class="why-copy">${whyParagraphs}</div>
      </div>
    </section>

    <section class="process-scroll" id="denken" aria-label="Denkweise als horizontale Scroll-Ausstellung">
      <div class="process-sticky">
        <div class="process-meta">
          <div class="process-title">
            <div class="section-kicker">${content.process.kicker}</div>
            <h2>${content.process.title}</h2>
            <p>${content.process.text}</p>
          </div>
          <div class="process-chain" aria-hidden="true">${processChain}</div>
        </div>
        <div class="process-track" data-process-track>${processCards}</div>
        <div class="process-progress" aria-hidden="true"></div>
      </div>
    </section>

    <section class="section wrap" id="arbeiten">
      <div class="section-head masked">
        <div class="section-kicker">${content.principles.kicker}</div>
        <div>
          <h2>${content.principles.title}</h2>
          <p class="section-copy">${content.principles.text}</p>
        </div>
      </div>
      <div class="principles">${principleCards}</div>
    </section>

    <section class="section wrap" id="stack">
      <div class="section-head masked">
        <div class="section-kicker">${content.stack.kicker}</div>
        <div>
          <h2>${content.stack.title}</h2>
          <p class="section-copy">${content.stack.text}</p>
        </div>
      </div>
      <div class="stack-grid">${stackGroups}</div>
      <p class="stack-note masked">${content.stack.note}</p>
    </section>

    <section class="section wrap" id="projekte">
      <div class="section-head masked">
        <div class="section-kicker">${content.projects.kicker}</div>
        <div>
          <h2>${content.projects.title}</h2>
          <p class="section-copy">${content.projects.text}</p>
        </div>
      </div>
      <div class="projects">${projectCards}</div>
    </section>

    <section class="section wrap" aria-labelledby="kompetenz-title">
      <div class="section-head masked">
        <div class="section-kicker">${content.capabilities.kicker}</div>
        <div>
          <h2 id="kompetenz-title">${content.capabilities.title}</h2>
          <p class="section-copy">${content.capabilities.text}</p>
        </div>
      </div>
      <div class="capabilities">
        <div class="value-zone masked">
          <div class="label">Value Zone</div>
          <h3>${content.capabilities.valueTitle}</h3>
          <p>${content.capabilities.valueText}</p>
          <ul class="value-list">${valueItems}</ul>
        </div>
        <div class="capability-panel masked">
          <div class="label">Capabilities</div>
          <div class="capability-list">${capabilityRows}</div>
        </div>
      </div>
    </section>

    <section class="contact wrap" id="kontakt">
      <div class="contact-box masked">
        <div class="contact-content">
          <div class="section-kicker">${content.contact.kicker}</div>
          <h2>${content.contact.title}</h2>
          <p>${content.contact.text}</p>
          <div class="contact-actions">
            <div class="cta-row" style="justify-content:center;">${contactCtas}</div>
            ${contactFallback}
            <div class="contact-links">${contactExternalLinks}</div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <span>${content.footer.left}</span>
      <span class="footer-links">${footerLinks}</span>
    </div>
  </footer>`;
}
