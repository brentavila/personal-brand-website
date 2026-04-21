import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Digital Advertising",
    skills: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Programmatic",
      "Retargeting",
    ],
  },
  {
    title: "AI and agentic development",
    skills: [
      "Claude Code",
      "LLM workflows",
      "Agentic patterns",
      "Prompt and eval design",
      "Cursor",
      "APIs",
    ],
  },
  {
    title: "Marketing",
    skills: [
      "Funnel Strategy",
      "Email Marketing",
      "Landing Pages",
      "Conversion Optimization",
      "Audience Research",
    ],
  },
  {
    title: "Automations",
    skills: ["Zapier", "Make (Integromat)", "n8n", "CRM Workflows", "API Integrations"],
  },
  {
    title: "Analytics and Tools",
    skills: ["GA4", "Looker Studio", "Tag Manager", "Pixels and Events", "Attribution"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-16">Skills and Tools</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="glass-card h-full hover:border-[rgba(232,124,12,0.3)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
