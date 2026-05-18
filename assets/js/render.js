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

  return `
        <article class="project-card masked" data-watermark="${project.watermark}" data-project-index="${index}">
          <div>
            <div class="label">${project.label}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-text">${project.text}</p>
            <div class="project-facts">${facts}</div>
          </div>
          <div class="tags">${tags}</div>
        </article>`;
}

export function renderPage(content) {
  const navLinks = content.nav
    .map((item) => `<a class="nav-link" href="${item.href}">${item.label}</a>`)
    .join("");
  const heroCtas = content.hero.ctas
    .map((cta) => `<a class="${cta.className}" href="${cta.href}">${cta.label}</a>`)
    .join("");
  const processChain = content.process.chain.map((item) => `<span>${item}</span>`).join("");
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
  const projectCards = content.projects.items
    .map((project, index) => renderProjectCard(project, index))
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
    .map((cta) => `<a class="${cta.className}" href="${cta.href}">${cta.label}</a>`)
    .join("");

  return `
  <div class="scroll-progress" aria-hidden="true"></div>
  <button class="theme-toggle" type="button" aria-label="Theme wechseln" data-theme-toggle>◑</button>

  <header class="site-header">
    <nav class="nav" aria-label="Hauptnavigation">
      <a href="#top" class="brand">${content.brand}</a>
      <div class="nav-links">${navLinks}</div>
    </nav>
  </header>

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
        </div>
${renderSystemPanel(content.systemPanel)}
      </div>
    </section>

    <section class="intro wrap" aria-label="Einführung">
      <div class="intro-card masked">
        <p><strong>${content.intro.lead}</strong> ${content.intro.text}</p>
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
          <div class="cta-row" style="justify-content:center;">${contactCtas}</div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <span>${content.footer.left}</span>
      <span>${content.footer.right}</span>
    </div>
  </footer>`;
}
