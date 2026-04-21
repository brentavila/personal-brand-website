import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "8+", label: "Years at this" },
  { value: "1,345", label: "Campaigns launched" },
  { value: "10+", label: "Tools I know cold" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-16">About Me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8">
              <div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E87C0C]/20 to-[#E87C0C]/5 border border-[rgba(232,124,12,0.3)] flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="font-heading font-bold text-2xl text-[#E87C0C]">B</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                I&apos;ve spent 8+ years in the ad platforms first — audience research, creative
                testing, and turning winning signals into scaled spend. That&apos;s still the core
                of what I do for brands.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Today I also lean hard into Claude Code, LLMs, and agentic patterns to ship
                internal tools, structured prompts, and automation specs faster. Pair that with
                analytics, attribution, and ops workflows, and you get systems that keep producing
                after the campaign calendar gets busy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-6 flex items-center gap-6 hover:border-[rgba(232,124,12,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="font-heading font-bold text-3xl gradient-text min-w-[80px]">
                    {stat.value}
                  </span>
                  <Separator orientation="vertical" className="h-10 bg-border" />
                  <span className="text-text-secondary text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
