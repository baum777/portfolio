import { readFileSync } from "node:fs";
import path from "node:path";
import { LanguageMode, Localized, SiteContent } from "./types";

const contentPaths: Record<LanguageMode, string> = {
  de: path.join(process.cwd(), "content", "site.de.json"),
  en: path.join(process.cwd(), "content", "site.en.json")
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Schemafehler in site.de.json: ${message}`);
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function validateSiteContent(value: unknown): asserts value is SiteContent {
  assert(typeof value === "object" && value !== null, "Root muss ein Objekt sein.");
  const candidate = value as Record<string, unknown>;

  assert(typeof candidate.meta === "object" && candidate.meta !== null, "meta fehlt.");
  assert(Array.isArray(candidate.nav), "nav muss ein Array sein.");
  assert(typeof candidate.hero === "object" && candidate.hero !== null, "hero fehlt.");
  assert(typeof candidate.intro === "object" && candidate.intro !== null, "intro fehlt.");
  assert(typeof candidate.process === "object" && candidate.process !== null, "process fehlt.");
  assert(typeof candidate.principles === "object" && candidate.principles !== null, "principles fehlt.");
  assert(typeof candidate.projects === "object" && candidate.projects !== null, "projects fehlt.");
  assert(typeof candidate.capabilities === "object" && candidate.capabilities !== null, "capabilities fehlt.");
  assert(typeof candidate.contact === "object" && candidate.contact !== null, "contact fehlt.");

  const process = candidate.process as Record<string, unknown>;
  assert(Array.isArray(process.steps) && process.steps.length > 0, "process.steps muss gefüllt sein.");
  assert(isStringArray(process.chain), "process.chain muss string[] sein.");

  const principles = candidate.principles as Record<string, unknown>;
  assert(Array.isArray(principles.items) && principles.items.length > 0, "principles.items muss gefüllt sein.");

  const capabilities = candidate.capabilities as Record<string, unknown>;
  assert(isStringArray(capabilities.valueList), "capabilities.valueList muss string[] sein.");
  assert(Array.isArray(capabilities.rows), "capabilities.rows muss ein Array sein.");

  const contact = candidate.contact as Record<string, unknown>;
  assert(Array.isArray(contact.externalLinks), "contact.externalLinks muss ein Array sein.");
  assert(typeof candidate.footer === "object" && candidate.footer !== null, "footer fehlt.");
  const footer = candidate.footer as Record<string, unknown>;
  assert(Array.isArray(footer.links), "footer.links muss ein Array sein.");
}

export function getSiteContent(): SiteContent {
  const raw = readFileSync(contentPaths.de, "utf-8");
  const parsed = JSON.parse(raw) as unknown;
  validateSiteContent(parsed);
  return parsed;
}

export function getLocalizedSiteContent(): Localized<SiteContent> {
  return {
    de: getSiteContentForLanguage("de"),
    en: getSiteContentForLanguage("en")
  };
}

export function getSiteContentForLanguage(language: LanguageMode): SiteContent {
  const raw = readFileSync(contentPaths[language], "utf-8");
  const parsed = JSON.parse(raw) as unknown;
  validateSiteContent(parsed);
  return parsed;
}
