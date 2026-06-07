export type ThemeMode = "dark" | "light";
export type LanguageMode = "de" | "en";
export type Localized<T> = Record<LanguageMode, T>;

export interface NavItem {
  href: string;
  label: string;
}

export interface HeroContent {
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subline: string;
  ctas: Array<{ href: string; label: string; variant: "primary" | "secondary" | "ghost" }>;
  bookingPrefix: string;
  bookingLabel: string;
}

export interface IntroContent {
  lead: string;
  text: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  text: string;
}

export interface JourneyContent {
  kicker: string;
  title: string;
  lead: string;
  items: JourneyItem[];
}

export interface ProcessStep {
  stepLabel: string;
  title: string;
  text: string;
  bullets: string[];
}

export interface Principle {
  title: string;
  text: string;
}

export interface CapabilityRow {
  title: string;
  text: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    brand: string;
    footerClaim: string;
    bookingUrl: string;
    githubUrl: string;
    companyUrl: string;
  };
  nav: NavItem[];
  hero: HeroContent;
  intro: IntroContent;
  journey: JourneyContent;
  process: {
    kicker: string;
    title: string;
    text: string;
    chain: string[];
    steps: ProcessStep[];
  };
  principles: {
    kicker: string;
    title: string;
    text: string;
    items: Principle[];
  };
  projects: {
    kicker: string;
    title: string;
    text: string;
  };
  capabilities: {
    kicker: string;
    title: string;
    text: string;
    valueZoneLabel: string;
    valueZoneTitle: string;
    valueZoneText: string;
    valueList: string[];
    capabilitiesLabel: string;
    rows: CapabilityRow[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    ctas: Array<{ href: string; label: string; variant: "primary" | "ghost" }>;
    fallbackLabel: string;
    fallbackEmail: string;
    externalLinks: Array<{ href: string; label: string; icon: "github" | "external" }>;
  };
  footer: {
    links: Array<{ href: string; label: string }>;
  };
}

export interface ProjectFact {
  label: string;
  text: string;
}

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  teaser: string;
  badge: string;
  tags: string[];
  watermark: string;
  facts: ProjectFact[];
  order: number;
}

export type ProjectSummary = ProjectFrontmatter;

export interface ProjectDetail extends ProjectFrontmatter {
  content: string;
}
