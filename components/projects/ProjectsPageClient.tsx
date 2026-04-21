"use client";

import { useMemo, useState } from "react";
import {
  INDUSTRY_IDS,
  INDUSTRY_LABELS,
  type IndustryId,
  type PortfolioProject,
} from "@/lib/projects-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function industriesUsed(projects: PortfolioProject[]): IndustryId[] {
  const set = new Set<IndustryId>();
  for (const p of projects) {
    p.industries.forEach((id) => set.add(id));
  }
  return INDUSTRY_IDS.filter((id) => set.has(id));
}

function engagementLabel(engagement: PortfolioProject["engagement"]) {
  return engagement === "agency" ? "Agency" : "Freelance";
}

interface ProjectsPageClientProps {
  projects: PortfolioProject[];
}

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [selected, setSelected] = useState<IndustryId | "all">("all");

  const industryOptions = useMemo(() => industriesUsed(projects), [projects]);

  const filtered = useMemo(() => {
    if (selected === "all") return projects;
    return projects.filter((p) => p.industries.includes(selected));
  }, [projects, selected]);

  return (
    <div>
      <div
        className="mb-10"
        role="group"
        aria-label="Filter by industry"
      >
        <p className="text-sm text-text-muted mb-3">Industry</p>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={selected === "all" ? "default" : "outline"}
            onClick={() => setSelected("all")}
            aria-pressed={selected === "all"}
          >
            All industries
          </Button>
          {industryOptions.map((id) => (
            <Button
              key={id}
              type="button"
              size="sm"
              variant={selected === id ? "default" : "outline"}
              onClick={() => setSelected(id)}
              aria-pressed={selected === id}
            >
              {INDUSTRY_LABELS[id]}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-text-secondary mb-8" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {selected !== "all" ? ` in ${INDUSTRY_LABELS[selected]}` : ""}.
      </p>

      {filtered.length === 0 ? (
        <p className="text-text-secondary">No projects match this filter yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="glass-card h-full flex flex-col hover:border-[rgba(232,124,12,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(232,124,12,0.08)] transition-all duration-300"
            >
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="font-medium">
                    {engagementLabel(project.engagement)}
                  </Badge>
                  {project.industries.map((ind) => (
                    <Badge
                      key={ind}
                      className="bg-[rgba(232,124,12,0.12)] text-[#E87C0C] border-[rgba(232,124,12,0.25)]"
                    >
                      {INDUSTRY_LABELS[ind]}
                    </Badge>
                  ))}
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{project.summary}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
