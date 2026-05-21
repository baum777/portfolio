import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { parseSimpleMarkdown } from "@/lib/markdown";
import { getAllProjectDetails, getProjectBySlug } from "@/lib/projects";
import { getSiteContent } from "@/lib/site-content";

interface ProjectPageProps {
  params: { slug: string };
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

export async function generateStaticParams() {
  return getAllProjectDetails().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Projekt nicht gefunden" };
  }

  const site = getSiteContent();
  return {
    title: `${project.title} — ${site.meta.title}`,
    description: project.teaser
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const blocks = parseSimpleMarkdown(project.content);

  return (
    <main className="project-detail-page">
      <div className="wrap project-detail-wrap">
        <Link href="/#projekte" className="project-back">
          ← Zurück zu Projekten
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
