import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";
import { portfolioProjects } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across paid media, automations, and analytics—organized by industry. Client names are kept confidential.",
  openGraph: {
    title: `Projects — ${siteConfig.shortName}`,
    description:
      "Selected work across paid media, automations, and analytics—organized by industry. Client names are kept confidential.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-10">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
            <Link href="/" className="flex items-center gap-2 text-text-muted">
              <ArrowLeft size={14} />
              Back home
            </Link>
          </Button>

          <h1 className="font-heading font-bold text-4xl text-text-primary mb-3">Projects</h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed mb-2">
            A sample of work from agency engagements and freelance projects. Descriptions stay
            high-level so past clients and employers stay anonymous—use the industry filters to
            find work closest to yours.
          </p>
        </div>

        <ProjectsPageClient projects={portfolioProjects} />
      </div>
    </main>
  );
}
