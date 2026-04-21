import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart2, Zap, Target, Settings } from "lucide-react";

const projects = [
  {
    icon: Target,
    title: "Paid Media and Funnel Strategy",
    description:
      "End-to-end paid campaigns across Google, Meta, and LinkedIn. Audience research, creative testing, conversion tracking, and ROAS optimization for ecommerce and lead gen.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn"],
  },
  {
    icon: Zap,
    title: "Marketing Automations",
    description:
      "Lead nurture sequences, abandoned-cart flows, and lifecycle emails powered by CRM and automation platforms. Behavior-based triggers and segmented messaging for higher conversion.",
    tags: ["Zapier", "Make", "CRM"],
  },
  {
    icon: BarChart2,
    title: "Analytics and Attribution",
    description:
      "Dashboard design and reporting setups for multi-touch attribution, campaign performance, and funnel analytics. Clean data pipelines so decisions are based on real numbers.",
    tags: ["GA4", "Looker Studio", "Pixels and Events"],
  },
  {
    icon: Settings,
    title: "Workflow and Ops Automation",
    description:
      "Internal automations for marketing ops: lead routing, sync between ad platforms and CRM, reporting schedules, and approval workflows so teams spend less time on manual work.",
    tags: ["Make", "Zapier", "APIs"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-16">What I Do</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="glass-card h-full hover:border-[rgba(0,188,212,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,188,212,0.08)] transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,188,212,0.1)] flex items-center justify-center mb-3">
                      <Icon size={20} className="text-[#00bcd4]" />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </CardFooter>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
