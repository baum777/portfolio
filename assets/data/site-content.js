export const siteContent = {
  meta: {
    title: "Cheikh Kai — Kontrollierbare KI-Systeme",
    description:
      "Cheikh Kai — Kontrollierbare KI-Systeme. Persönliche Landingpage für AI Governance, Automatisierung, Systemdenken und kontrollierbare KI-Prozesse.",
  },
  brand: "CK — Cheikh Kai / Systems",
  nav: [
    { label: "Denken", href: "#denken" },
    { label: "Arbeiten", href: "#arbeiten" },
    { label: "Projekte", href: "#projekte" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    kicker: "AI Governance · Automation · Systems Thinking",
    titlePrefix: "Komplexe Zusammenhänge in",
    titleHighlight: "kontrollierbare",
    titleSuffix: "KI-Systeme.",
    subline:
      "Ich verbinde operative Erfahrung, Systemdenken und KI-Automatisierung, um Workflows zu entwickeln, die nachvollziehbar, prüfbar und verantwortbar bleiben.",
    ctas: [
      { label: "Arbeitsweise →", href: "#denken", className: "button primary" },
      { label: "Projekte", href: "#projekte", className: "button secondary" },
      { label: "Kontakt", href: "#kontakt", className: "button ghost" },
    ],
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
      "Die Projekte sind nicht als klassische Portfolio-Liste inszeniert, sondern als Fallbeispiele für Systemdenken, Governance und kontrollierbare Umsetzung.",
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
      },
      {
        watermark: "Gate",
        label: "Backend-first AI Console",
        title: "ModelGate / MosaicStack",
        text:
          "Agentische Arbeitsoberfläche mit Fokus auf backend-seitige Autorität und nachvollziehbare Aktionen.",
        facts: [
          {
            key: "Problem",
            value:
              "Viele AI-Tools sind UI-zentriert, kritische Entscheidungen brauchen kontrollierte Logik.",
          },
          {
            key: "Ansatz",
            value:
              "Chat, GitHub, Matrix, Credential-Flows und Review-Gates verbinden.",
          },
        ],
        tags: ["Backend", "Agents", "Credentials"],
      },
      {
        watermark: "Email AI",
        label: "Practical AI Workflow",
        title: "AI Email Automation",
        text:
          "Frühes Automatisierungsprojekt mit Fine-Tuning, FlutterFlow, Power Automate und eigenen Datensätzen.",
        facts: [
          {
            key: "Problem",
            value:
              "Wiederkehrende Kommunikation automatisieren, ohne Kontext und Qualität zu verlieren.",
          },
          {
            key: "Ansatz",
            value:
              "Datenstrukturen, Prompt-Logik und Automatisierungsflüsse praktisch aufbauen.",
          },
        ],
        tags: ["Automation", "Data Quality", "Workflow"],
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
    title: "Lass uns über kontrollierbare KI-Systeme sprechen.",
    text:
      "Ich interessiere mich für Projekte, in denen KI nicht nur produktiver machen soll, sondern strukturiert, erklärbar und verantwortbar eingesetzt wird.",
    ctas: [
      {
        label: "Kontakt aufnehmen →",
        href: "mailto:cheikh.witm@proton.me",
        className: "button primary",
      },
      { label: "Systeme ansehen", href: "#denken", className: "button ghost" },
    ],
  },
  footer: {
    left: "Cheikh Kai · AI Governance & Automation",
    right: "Signals → Patterns → Structure → Control → Execution",
  },
};
