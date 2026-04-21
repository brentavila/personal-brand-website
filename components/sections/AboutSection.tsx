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
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00bcd4]/20 to-[#00bcd4]/5 border border-[rgba(0,188,212,0.3)] flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="font-heading font-bold text-2xl text-[#00bcd4]">B</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                I&apos;ve been running paid campaigns and building automations for 8+ years. From
                audience research and creative testing to funnel design and workflow builds, I help
                brands figure out what works and then scale it.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I combine analytics, creative testing, and automation tools into systems that keep
                producing results. When I&apos;m not in the platforms, I&apos;m learning new ones
                and writing about what I find.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-6 flex items-center gap-6 hover:border-[rgba(0,188,212,0.3)] hover:-translate-y-0.5 transition-all duration-300"
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
