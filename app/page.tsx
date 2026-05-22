import { HomePageClient } from "@/components/home-page-client";
import { getLocalizedProjectSummaries } from "@/lib/projects";
import { getLocalizedSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const sites = getLocalizedSiteContent();
  const projects = getLocalizedProjectSummaries();
  return <HomePageClient sites={sites} projects={projects} />;
}
