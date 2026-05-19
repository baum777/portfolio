import { HomePageClient } from "@/components/home-page-client";
import { getProjectSummaries } from "@/lib/projects";
import { getSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const site = getSiteContent();
  const projects = getProjectSummaries();
  return <HomePageClient site={site} projects={projects} />;
}
