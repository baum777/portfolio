"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguageToggle } from "@/hooks/use-language";
import { parseSimpleMarkdown } from "@/lib/markdown";
import type { Localized, ProjectDetail } from "@/lib/types";
import type { ReactNode } from "react";

interface ProjectDetailClientProps {
  projects: Localized<ProjectDetail>;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    nodes.push(
      <a href={match[2]} key={`${match[1]}-${match.index}`}>
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function ProjectDetailClient({ projects }: ProjectDetailClientProps) {
  const { language, toggleLanguage } = useLanguageToggle();
  const project = projects[language];
  const blocks = parseSimpleMarkdown(project.content);

  return (
    <main className="project-detail-page">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      <div className="wrap project-detail-wrap">
        <Link href="/#projekte" className="project-back">
          {language === "de" ? "← Zurück zu Projekten" : "← Back to projects"}
        </Link>

        <header className="project-hero">
          <div className="label">{project.badge}</div>
          <h1>{project.title}</h1>
          <p>{project.teaser}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="project-facts project-facts-grid">
          {project.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <strong>{fact.label}</strong>
              <span>{fact.text}</span>
            </div>
          ))}
        </section>

        <article className="project-richtext">
          {blocks.map((block, index) => {
            if (block.type === "h2") return <h2 key={`h2-${index}`}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={`h3-${index}`}>{block.text}</h3>;
            if (block.type === "ul") {
              return (
                <ul key={`ul-${index}`}>
                  {block.items.map((item) => (
                    <li key={item}>{renderInlineMarkdown(item)}</li>
                  ))}
                </ul>
              );
            }
            return <p key={`p-${index}`}>{renderInlineMarkdown(block.text)}</p>;
          })}
        </article>
      </div>
    </main>
  );
}
