import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { LanguageMode, Localized, ProjectDetail, ProjectFrontmatter, ProjectSummary } from "./types";

const projectDirs: Record<LanguageMode, string> = {
  de: path.join(process.cwd(), "content", "projects"),
  en: path.join(process.cwd(), "content", "projects", "en")
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Schemafehler in Projektdaten: ${message}`);
  }
}

function parseFrontmatterValue(raw: string): unknown {
  const trimmed = raw.trim();
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    return JSON.parse(trimmed);
  }
  if (trimmed === "true" || trimmed === "false") {
    return trimmed === "true";
  }
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }
  if (
    (trimmed.startsWith("\"") && trimmed.endsWith("\"")) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseMarkdownFile(filePath: string): { frontmatter: Record<string, unknown>; body: string } {
  const raw = readFileSync(filePath, "utf-8");
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  assert(fmMatch, `${path.basename(filePath)} enthält kein gültiges Frontmatter.`);

  const [, fmBlock, body] = fmMatch;
  const frontmatter: Record<string, unknown> = {};

  for (const line of fmBlock.split("\n")) {
    if (!line.trim()) continue;
    const separator = line.indexOf(":");
    assert(separator > 0, `${path.basename(filePath)} enthält ungültige Frontmatter-Zeile: ${line}`);
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    frontmatter[key] = parseFrontmatterValue(value);
  }

  return { frontmatter, body: body.trim() };
}

function validateFrontmatter(value: Record<string, unknown>, source: string): ProjectFrontmatter {
  const slug = value.slug;
  const title = value.title;
  const teaser = value.teaser;
  const badge = value.badge;
  const tags = value.tags;
  const watermark = value.watermark;
  const facts = value.facts;
  const order = value.order;

  assert(typeof slug === "string" && slug.length > 0, `${source}: slug fehlt.`);
  assert(typeof title === "string" && title.length > 0, `${source}: title fehlt.`);
  assert(typeof teaser === "string" && teaser.length > 0, `${source}: teaser fehlt.`);
  assert(typeof badge === "string" && badge.length > 0, `${source}: badge fehlt.`);
  assert(Array.isArray(tags) && tags.every((tag) => typeof tag === "string"), `${source}: tags muss string[] sein.`);
  assert(typeof watermark === "string" && watermark.length > 0, `${source}: watermark fehlt.`);
  assert(
    Array.isArray(facts) &&
      facts.every(
        (fact) =>
          typeof fact === "object" &&
          fact !== null &&
          typeof (fact as Record<string, unknown>).label === "string" &&
          typeof (fact as Record<string, unknown>).text === "string"
      ),
    `${source}: facts muss [{label,text}] sein.`
  );
  assert(typeof order === "number" && Number.isFinite(order), `${source}: order muss Zahl sein.`);

  return {
    slug,
    title,
    teaser,
    badge,
    tags,
    watermark,
    facts: facts as ProjectFrontmatter["facts"],
    order
  };
}

function getProjectFiles(language: LanguageMode): string[] {
  return readdirSync(projectDirs[language])
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "de"));
}

export function getAllProjectDetails(language: LanguageMode = "de"): ProjectDetail[] {
  const files = getProjectFiles(language);
  const projects = files.map((file) => {
    const fullPath = path.join(projectDirs[language], file);
    const { frontmatter, body } = parseMarkdownFile(fullPath);
    const valid = validateFrontmatter(frontmatter, file);
    return { ...valid, content: body };
  });

  const slugSet = new Set<string>();
  for (const project of projects) {
    assert(!slugSet.has(project.slug), `doppelter slug: ${project.slug}`);
    slugSet.add(project.slug);
  }

  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectSummaries(): ProjectSummary[] {
  return getProjectSummariesForLanguage("de");
}

export function getProjectSummariesForLanguage(language: LanguageMode): ProjectSummary[] {
  return getAllProjectDetails(language).map((project) => ({
    slug: project.slug,
    title: project.title,
    teaser: project.teaser,
    badge: project.badge,
    tags: project.tags,
    watermark: project.watermark,
    facts: project.facts,
    order: project.order
  }));
}

export function getLocalizedProjectSummaries(): Localized<ProjectSummary[]> {
  return {
    de: getProjectSummariesForLanguage("de"),
    en: getProjectSummariesForLanguage("en")
  };
}

export function getProjectBySlug(slug: string, language: LanguageMode = "de"): ProjectDetail | undefined {
  return getAllProjectDetails(language).find((project) => project.slug === slug);
}

export function getLocalizedProjectBySlug(slug: string): Localized<ProjectDetail> | undefined {
  const de = getProjectBySlug(slug, "de");
  const en = getProjectBySlug(slug, "en");

  if (!de || !en) {
    return undefined;
  }

  return { de, en };
}
