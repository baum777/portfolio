import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/project-detail-client";
import { getAllProjectDetails, getLocalizedProjectBySlug, getProjectBySlug } from "@/lib/projects";
import { getSiteContent } from "@/lib/site-content";

interface ProjectPageProps {
  params: { slug: string };
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
  const projects = getLocalizedProjectBySlug(slug);

  if (!projects) notFound();

  return <ProjectDetailClient projects={projects} />;
}
