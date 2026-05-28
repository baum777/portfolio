const sharedLinks = {
  email: "mailto:twim.baum@proton.me",
  github: "https://github.com/baum777/",
  company: "https://www.uniterasystems.com/",
  fallbackEmail: "twim.baum@proton.me",
};

const deContent = {
  locale: "de",
  links: sharedLinks,
  meta: {
    title: "Cheikh Fall — AI Governance & Agentic Systems",
    description:
      "AI Development, AI Automation und AI Engineering für kontrollierbare KI-Systeme in realen Prozessen.",
    ogUrl: "https://portfolio.uniterasystems.com",
    ogImage: "/og-image.png",
  },
  brand: "CF — Cheikh Fall / Systems",
  localeSwitch: {
    de: "DE",
    en: "EN",
  },
  externalNav: {
    github: "GitHub",
    company: "Unitera Systems",
  },
  nav: [
    { label: "Denken", href: "#denken" },
    { label: "Arbeiten", href: "#arbeiten" },
    { label: "Projekte", href: "#projekte" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  jobSignal: {
    text:
      "Ich suche eine Rolle in AI Development, AI Automation oder AI Engineering — für Teams, die KI nicht nur einsetzen, sondern kontrollierbar in Prozesse integrieren wollen.",
    email: "twim.baum@proton.me",
  },
  hero: {
    kicker: "AI Governance · Automation · Systems Thinking",
    titlePrefix: "Komplexe Zusammenhänge in",
    titleHighlight: "kontrollierbare",
    titleSuffix: "KI-Systeme.",
    subline:
      "Ich verbinde operative Erfahrung, Systemdenken und KI-Automatisierung, um Workflows zu entwickeln, die nachvollziehbar, prüfbar und verantwortbar bleiben.",
    ctas: [
      { label: "Denkweise →", href: "#denken", className: "button primary" },
      { label: "Meine Arbeit", href: "#projekte", className: "button secondary" },
      { label: "Kontakt", href: "#kontakt", className: "button ghost" },
    ],
    bookingPrefix: "Kontakt:",
    bookingLabel: "twim.baum@proton.me →",
  },
  systemPanel: {
    nodes: [
      { className: "signals", title: "Signals", code: "input.scan()" },
      { className: "violet patterns", title: "Patterns", code: "risk.map()" },
      { className: "workflow", title: "Workflow", code: "roles.flow()" },
      { className: "violet review", title: "Review Gate", code: "human.check()" },
      { className: "evidence", title: "Evidence", code: "audit.log()" },
    ],
    terminalTitle: "controlled-system.log",
    terminalLines: [
      "input.scan(<em>signals</em>)",
      "map.dependencies → roles / risks / decisions",
      "define.review_gate(scope, evidence, owner)",
      "execute only if: accountable && traceable",
    ],
  },
  intro: {
    lead: "Kein klassisches Profil.",
    text:
      "LinkedIn zeigt Stationen. Diese Seite zeigt meine Arbeitsweise: wie ich Muster erkenne, Systeme entwerfe und KI in kontrollierbare Prozesse übersetze.",
  },
  process: {
    kicker: "01 / Denkweise",
    title: "Von losen Signalen zu belastbaren Strukturen.",
    text:
      "Der vertikale Scroll bewegt die Prozesskette horizontal: wie ein kuratierter Denkraum, in dem jeder Schritt eine neue Systemebene freilegt.",
    chain: ["Signale", "Muster", "Struktur", "Kontrolle", "Umsetzung"],
    steps: [
      {
        num: "01",
        stepLabel: "Step 01 / Signale",
        title: "Informationen, Probleme und Möglichkeiten aufnehmen.",
        text:
          "Am Anfang steht kein perfektes Briefing, sondern eine Mischung aus Beobachtungen, Reibung, Tools, Ideen, Daten und offenen Entscheidungspunkten.",
        microList: [
          "operative Abläufe beobachten",
          "Reibung und Prozesslücken markieren",
          "relevante Eingangssignale sammeln",
        ],
        lines: ["vl1", "vl2"],
        nodes: [
          { className: "fn1", label: "Input" },
          { className: "violet fn2", label: "Context" },
          { className: "fn3", label: "Friction" },
        ],
        terminal: {
          left: "signal.scan",
          right: "live",
          lines: [
            { key: "capture", value: "information / problems" },
            { key: "detect", value: "process gaps" },
            { key: "output", value: "raw signal map" },
          ],
        },
      },
      {
        num: "02",
        stepLabel: "Step 02 / Muster",
        title: "Zusammenhänge, Risiken und Abhängigkeiten erkennen.",
        text:
          "Ich suche nicht nur Einzelpunkte, sondern wiederkehrende Strukturen: Wo entstehen Risiken? Wer entscheidet? Was hängt voneinander ab?",
        microList: [
          "Rollen und Übergaben klären",
          "Risiko- und Abhängigkeitsketten bilden",
          "wiederkehrende Muster isolieren",
        ],
        lines: ["vl1", "vl3"],
        nodes: [
          { className: "fn1", label: "Patterns" },
          { className: "violet fn2", label: "Risks" },
          { className: "fn3", label: "Roles" },
          { className: "violet fn4", label: "Dependencies" },
        ],
        terminal: {
          left: "pattern.map",
          right: "model",
          lines: [
            { key: "map", value: "dependencies → owners" },
            { key: "trace", value: "repeated risks" },
            { key: "output", value: "relation graph" },
          ],
        },
      },
      {
        num: "03",
        stepLabel: "Step 03 / Struktur",
        title: "Rollen, Regeln, Datenflüsse und Interfaces ableiten.",
        text:
          "Aus Mustern wird Architektur: Systemgrenzen, Zustände, Backend-Logik und Interfaces werden so definiert, dass Arbeit steuerbar wird.",
        microList: [
          "Verantwortlichkeiten modellieren",
          "Backend-first Logik definieren",
          "Interfaces als Arbeitsräume gestalten",
        ],
        lines: ["vl1", "vl2", "vl3"],
        nodes: [
          { className: "fn1", label: "Flow" },
          { className: "violet fn2", label: "Rules" },
          { className: "fn3", label: "Interface" },
          { className: "violet fn4", label: "Backend" },
        ],
        terminal: {
          left: "system.compose",
          right: "draft",
          lines: [
            { key: "define", value: "roles / states / permissions" },
            { key: "compose", value: "workflow + data path" },
            { key: "output", value: "controlled architecture" },
          ],
        },
      },
      {
        num: "04",
        stepLabel: "Step 04 / Kontrolle",
        title: "Reviews, Gates, Evidenz und Eskalationen einbauen.",
        text:
          "Kontrolle ist kein Add-on. Ein KI-Workflow ist erst belastbar, wenn Stop-Bedingungen, Review-Pfade und Evidenz sichtbar sind.",
        microList: [
          "Review Gates definieren",
          "Evidenz und Logs sichtbar machen",
          "Fail-Closed-Regeln integrieren",
        ],
        lines: ["vl2", "vl3"],
        nodes: [
          { className: "violet fn1", label: "Gate" },
          { className: "fn2", label: "Review" },
          { className: "violet fn3", label: "Evidence" },
          { className: "fn4", label: "Escalate" },
        ],
        terminal: {
          left: "control.layer",
          right: "armed",
          lines: [
            { key: "require", value: "evidence + owner" },
            { key: "stop", value: "if unverified" },
            { key: "output", value: "accountable workflow" },
          ],
        },
      },
      {
        num: "05",
        stepLabel: "Step 05 / Umsetzung",
        title: "Praxistauglichkeit prüfen.",
        text:
          "Die Umsetzung zeigt, ob ein System in echten Abläufen funktioniert: mit echten Menschen, echten Einschränkungen und echten Entscheidungen.",
        microList: [
          "Prototypen statt reine Theorie",
          "Validierung mit klaren Kriterien",
          "Verbesserung durch beobachtete Reibung",
        ],
        lines: ["vl1", "vl2"],
        nodes: [
          { className: "fn1", label: "Prototype" },
          { className: "violet fn2", label: "Validate" },
          { className: "fn3", label: "Operate" },
          { className: "violet fn4", label: "Improve" },
        ],
        terminal: {
          left: "execution.loop",
          right: "valid",
          lines: [
            { key: "test", value: "with real constraints" },
            { key: "measure", value: "reliability / traceability" },
            { key: "output", value: "operational system" },
          ],
        },
      },
    ],
  },
  principles: {
    kicker: "02 / Arbeitsprinzipien",
    title: "Kontrolle ist kein Add-on. Kontrolle ist Architektur.",
    text:
      "Die Prinzipien positionieren KI nicht als blinde Automatisierung, sondern als verantwortbaren Teil eines nachvollziehbaren Systems.",
    items: [
      {
        num: "01",
        title: "Erst verstehen, dann automatisieren",
        text:
          "Bevor ein Prozess automatisiert wird, müssen Verantwortung, Risiko und Entscheidungspunkte klar sein.",
      },
      {
        num: "02",
        title: "KI braucht Rollen und Grenzen",
        text:
          "Ein Agent ohne klare Aufgabe, Scope und Eskalationslogik ist kein System, sondern ein Risiko.",
      },
      {
        num: "03",
        title: "Nachvollziehbarkeit schlägt Geschwindigkeit",
        text:
          "Schnelle Ergebnisse sind wertlos, wenn später niemand erklären kann, wie sie entstanden sind.",
      },
      {
        num: "04",
        title: "Backend-seitige Autorität",
        text:
          "Kritische Aktionen gehören nicht nur ins Interface, sondern in kontrollierte Logik mit Berechtigungen.",
      },
      {
        num: "05",
        title: "Validierung statt Behauptung",
        text:
          "Outputs müssen prüfbar sein: mit Evidenz, Logs, Review-Pfaden und klaren Abschlusskriterien.",
      },
      {
        num: "06",
        title: "Praktische Umsetzbarkeit zählt",
        text:
          "Architektur muss mit echten Menschen, echten Workflows und echten Einschränkungen funktionieren.",
      },
    ],
  },
  projects: {
    kicker: "03 / Projekte",
    title: "Projekte als Beweise für Denkweise.",
    text:
      "Unitera als Hauptentwicklung. Model-Agnostic Working als Architekturbeweis. Beide zeigen dasselbe Prinzip: Systemlogik vor Oberfläche — Kontrolle vor Automatisierung.",
    items: [
      {
        watermark: "Unitera",
        label: "AI Governance Layer",
        title: "Unitera Systems",
        text:
          "Governance-Schicht zwischen KI-Agenten, menschlichen Entscheidungen und geschäftskritischen Prozessen.",
        facts: [
          {
            key: "Problem",
            value:
              "KI-Agenten übernehmen Aufgaben, aber ohne Review-Pfade entsteht Unsicherheit.",
          },
          {
            key: "Ansatz",
            value:
              "Commitments, Verantwortlichkeiten, Eskalationen und Evidenz sichtbar machen.",
          },
        ],
        tags: ["Governance", "Review Gates", "Evidence"],
        codeLinkLabel: "Code & Architektur auf GitHub",
      },
      {
        watermark: "Gate",
        label: "Architecture Proof",
        title: "Model-Agnostic Working",
        text:
          "Architekturbeweis für modellunabhängige Arbeitsweise, backend-seitige Autorität und nachvollziehbare Aktionen.",
        facts: [
          {
            key: "Problem",
            value:
              "AI-Workflows dürfen nicht an ein einzelnes Modell oder eine Oberfläche gebunden sein.",
          },
          {
            key: "Ansatz",
            value:
              "Systemlogik, Rollen, Gates und Evidenz so trennen, dass die Architektur steuerbar bleibt.",
          },
        ],
        tags: ["Architecture", "Model-Agnostic", "Control"],
        codeLinkLabel: "Code & Architektur auf GitHub",
      },
    ],
  },
  capabilities: {
    kicker: "04 / Kompetenzfelder",
    title: "Wo mein Wert am stärksten ist.",
    text:
      "Besonders relevant werde ich, wenn ein KI-Projekt noch keine klare Struktur hat: viele lose Punkte, aber noch kein belastbares Systemdesign.",
    valueTitle: "Unklare Probleme in klare Systeme übersetzen.",
    valueText:
      "Mein Beitrag beginnt oft dort, wo andere noch versuchen, das Problem überhaupt zu greifen.",
    valueList: [
      "KI-Projekte strukturieren",
      "Mensch-KI-Workflows kontrollierbar machen",
      "Review- und Entscheidungswege definieren",
      "technische Umsetzung und strategische Logik verbinden",
    ],
    rows: [
      {
        key: "Systemdenken",
        value: "Komplexe Zusammenhänge in Rollen, Regeln und Abläufe übersetzen.",
      },
      {
        key: "KI-Automatisierung",
        value: "KI sinnvoll in reale Workflows integrieren.",
      },
      {
        key: "AI Governance",
        value: "Kontrolle, Review, Evidenz und Verantwortung einbauen.",
      },
      { key: "Backend-Logik", value: "Systeme strukturell und technisch denken." },
      { key: "Validierung", value: "Ergebnisse prüfbar machen." },
    ],
  },
  contact: {
    kicker: "05 / Kontakt",
    title: "Kontrollierbare KI-Systeme im Team bauen.",
    text:
      "Ich suche ein Team, das kontrollierbare KI-Systeme ernst nimmt —<br>und das bereit ist, mit jemandem zu arbeiten, der das Thema<br>von Grund auf durchdrungen hat, auch ohne klassischen Engineering-Hintergrund.<br><br>Wenn das passt: <a href=\"mailto:twim.baum@proton.me\">twim.baum@proton.me</a><br><br>Kein Briefing nötig. Eine Zeile reicht.",
    ctas: [
      {
        label: "twim.baum@proton.me →",
        href: sharedLinks.email,
        className: "button primary",
      },
    ],
    fallbackLabel: "",
    externalLinks: [
      { label: "GitHub", href: sharedLinks.github, icon: "github" },
      { label: "Uniterasystems", href: sharedLinks.company, icon: "external" },
    ],
  },
  footer: {
    left: "Cheikh Fall · AI Governance & Agentic Systems",
    links: [
      { label: "GitHub ↗", href: sharedLinks.github },
      { label: "Unitera Systems ↗", href: sharedLinks.company },
      { label: "Kontakt aufnehmen ↗", href: sharedLinks.email },
    ],
  },
};

const enContent = {
  ...deContent,
  locale: "en",
  meta: {
    ...deContent.meta,
    title: "Cheikh Fall — Controllable AI Systems",
    description:
      "AI Development, AI Automation, and AI Engineering for controllable AI systems in real workflows.",
  },
  nav: [
    { label: "Thinking", href: "#denken" },
    { label: "Working", href: "#arbeiten" },
    { label: "Projects", href: "#projekte" },
    { label: "Contact", href: "#kontakt" },
  ],
  jobSignal: {
    text:
      "I am looking for a role in AI Development, AI Automation, or AI Engineering — for teams that do not just use AI, but integrate it into processes in a controllable way.",
    email: "twim.baum@proton.me",
  },
  hero: {
    ...deContent.hero,
    titlePrefix: "Complex contexts into",
    titleHighlight: "controllable",
    titleSuffix: "AI systems.",
    subline:
      "I combine operational experience, systems thinking, and AI automation to build workflows that remain traceable, auditable, and accountable.",
    ctas: [
      { label: "Thinking →", href: "#denken", className: "button primary" },
      { label: "My work", href: "#projekte", className: "button secondary" },
      { label: "Contact", href: "#kontakt", className: "button ghost" },
    ],
    bookingPrefix: "Contact:",
    bookingLabel: "twim.baum@proton.me →",
  },
  systemPanel: {
    ...deContent.systemPanel,
    terminalLines: [
      "input.scan(<em>signals</em>)",
      "map.dependencies → roles / risks / decisions",
      "define.review_gate(scope, evidence, owner)",
      "execute only if: accountable && traceable",
    ],
  },
  intro: {
    lead: "Not a conventional profile.",
    text:
      "LinkedIn shows roles. This page shows how I work: how I identify patterns, design systems, and translate AI into controllable processes.",
  },
  process: {
    ...deContent.process,
    kicker: "01 / Thinking",
    title: "From loose signals to resilient structures.",
    text:
      "Vertical scrolling moves the process chain horizontally: a curated thinking space where each step reveals a new system layer.",
    chain: ["Signals", "Patterns", "Structure", "Control", "Execution"],
    steps: [
      {
        ...deContent.process.steps[0],
        stepLabel: "Step 01 / Signals",
        title: "Capture information, problems, and opportunities.",
        text:
          "The starting point is not a perfect brief, but a mix of observations, friction, tools, ideas, data, and open decision points.",
        microList: [
          "observe operational workflows",
          "mark friction and process gaps",
          "collect relevant input signals",
        ],
        terminal: {
          ...deContent.process.steps[0].terminal,
          lines: [
            { key: "capture", value: "information / problems" },
            { key: "detect", value: "process gaps" },
            { key: "output", value: "raw signal map" },
          ],
        },
      },
      {
        ...deContent.process.steps[1],
        stepLabel: "Step 02 / Patterns",
        title: "Identify relationships, risks, and dependencies.",
        text:
          "I look beyond isolated points toward recurring structures: Where do risks emerge? Who decides? What depends on what?",
        microList: [
          "clarify roles and handoffs",
          "build risk and dependency chains",
          "isolate recurring patterns",
        ],
        terminal: {
          ...deContent.process.steps[1].terminal,
          lines: [
            { key: "map", value: "dependencies → owners" },
            { key: "trace", value: "repeated risks" },
            { key: "output", value: "relation graph" },
          ],
        },
      },
      {
        ...deContent.process.steps[2],
        stepLabel: "Step 03 / Structure",
        title: "Derive roles, rules, data flows, and interfaces.",
        text:
          "Patterns become architecture: system boundaries, states, backend logic, and interfaces are defined so work becomes steerable.",
        microList: [
          "model responsibilities",
          "define backend-first logic",
          "shape interfaces as workspaces",
        ],
        terminal: {
          ...deContent.process.steps[2].terminal,
          lines: [
            { key: "define", value: "roles / states / permissions" },
            { key: "compose", value: "workflow + data path" },
            { key: "output", value: "controlled architecture" },
          ],
        },
      },
      {
        ...deContent.process.steps[3],
        stepLabel: "Step 04 / Control",
        title: "Build in reviews, gates, evidence, and escalations.",
        text:
          "Control is not an add-on. An AI workflow is only resilient when stop conditions, review paths, and evidence are visible.",
        microList: [
          "define review gates",
          "make evidence and logs visible",
          "integrate fail-closed rules",
        ],
        terminal: {
          ...deContent.process.steps[3].terminal,
          lines: [
            { key: "require", value: "evidence + owner" },
            { key: "stop", value: "if unverified" },
            { key: "output", value: "accountable workflow" },
          ],
        },
      },
      {
        ...deContent.process.steps[4],
        stepLabel: "Step 05 / Execution",
        title: "Test practical viability.",
        text:
          "Execution shows whether a system works in real operations: with real people, real constraints, and real decisions.",
        microList: [
          "prototypes instead of pure theory",
          "validation with clear criteria",
          "improvement through observed friction",
        ],
        terminal: {
          ...deContent.process.steps[4].terminal,
          lines: [
            { key: "test", value: "with real constraints" },
            { key: "measure", value: "reliability / traceability" },
            { key: "output", value: "operational system" },
          ],
        },
      },
    ],
  },
  principles: {
    ...deContent.principles,
    kicker: "02 / Working Principles",
    title: "Control is not an add-on. Control is architecture.",
    text:
      "These principles position AI not as blind automation, but as an accountable part of a traceable system.",
    items: [
      {
        num: "01",
        title: "Understand first, then automate",
        text:
          "Before a process is automated, responsibility, risk, and decision points must be clear.",
      },
      {
        num: "02",
        title: "AI needs roles and boundaries",
        text:
          "An agent without a clear task, scope, and escalation logic is not a system. It is a risk.",
      },
      {
        num: "03",
        title: "Traceability beats speed",
        text:
          "Fast results are worthless if nobody can later explain how they were produced.",
      },
      {
        num: "04",
        title: "Backend-side authority",
        text:
          "Critical actions belong not only in the interface, but in controlled logic with permissions.",
      },
      {
        num: "05",
        title: "Validation instead of assertion",
        text:
          "Outputs must be verifiable: with evidence, logs, review paths, and clear completion criteria.",
      },
      {
        num: "06",
        title: "Practical usability matters",
        text:
          "Architecture must work with real people, real workflows, and real constraints.",
      },
    ],
  },
  projects: {
    ...deContent.projects,
    kicker: "03 / Projects",
    title: "Projects as evidence of working method.",
    text:
      "Unitera as the main development. Model-Agnostic Working as the architecture proof. Both show the same principle: system logic before interface — control before automation.",
    items: [
      {
        ...deContent.projects.items[0],
        text:
          "Governance layer between AI agents, human decisions, and business-critical processes.",
        facts: [
          {
            key: "Problem",
            value:
              "AI agents take over tasks, but uncertainty emerges without review paths.",
          },
          {
            key: "Approach",
            value:
              "Make commitments, responsibilities, escalations, and evidence visible.",
          },
        ],
        codeLinkLabel: "Code & architecture on GitHub",
      },
      {
        ...deContent.projects.items[1],
        label: "Architecture Proof",
        title: "Model-Agnostic Working",
        text:
          "Architecture proof for model-agnostic working, backend-side authority, and traceable actions.",
        facts: [
          {
            key: "Problem",
            value:
              "AI workflows must not depend on a single model or interface.",
          },
          {
            key: "Approach",
            value:
              "Separate system logic, roles, gates, and evidence so the architecture remains controllable.",
          },
        ],
        codeLinkLabel: "Code & architecture on GitHub",
      },
    ],
  },
  capabilities: {
    ...deContent.capabilities,
    kicker: "04 / Capability Fields",
    title: "Where my value is strongest.",
    text:
      "I become especially relevant when an AI project does not yet have a clear structure: many loose points, but no resilient system design yet.",
    valueTitle: "Translate unclear problems into clear systems.",
    valueText:
      "My contribution often starts where others are still trying to grasp the problem itself.",
    valueList: [
      "structure AI projects",
      "make human-AI workflows controllable",
      "define review and decision paths",
      "connect technical execution and strategic logic",
    ],
    rows: [
      {
        key: "Systems thinking",
        value: "Translate complex contexts into roles, rules, and workflows.",
      },
      {
        key: "AI automation",
        value: "Integrate AI meaningfully into real workflows.",
      },
      {
        key: "AI governance",
        value: "Build in control, review, evidence, and responsibility.",
      },
      { key: "Backend logic", value: "Think about systems structurally and technically." },
      { key: "Validation", value: "Make results verifiable." },
    ],
  },
  contact: {
    ...deContent.contact,
    kicker: "05 / Contact",
    title: "Build controllable AI systems with a team.",
    text:
      "I am looking for a team that takes controllable AI systems seriously —<br>and is ready to work with someone who has understood the topic from the ground up, even without a classic engineering background.<br><br>If that fits: <a href=\"mailto:twim.baum@proton.me\">twim.baum@proton.me</a><br><br>No brief needed. One line is enough.",
    ctas: [
      {
        label: "twim.baum@proton.me →",
        href: sharedLinks.email,
        className: "button primary",
      },
    ],
    fallbackLabel: "",
    externalLinks: [
      { label: "GitHub", href: sharedLinks.github, icon: "github" },
      { label: "Uniterasystems", href: sharedLinks.company, icon: "external" },
    ],
  },
  footer: {
    left: "Cheikh Fall · AI Governance & Agentic Systems",
    links: [
      { label: "GitHub ↗", href: sharedLinks.github },
      { label: "Unitera Systems ↗", href: sharedLinks.company },
      { label: "Get in touch ↗", href: sharedLinks.email },
    ],
  },
};

export const siteContentByLocale = {
  de: deContent,
  en: enContent,
};

export const siteContent = deContent;
