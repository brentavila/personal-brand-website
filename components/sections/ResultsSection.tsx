import { ScrollReveal } from "@/components/animations/ScrollReveal";

const results = [
  {
    metric: "$2.4M+",
    label: "Revenue attributed to paid campaigns",
    sub: "Across e-commerce and lead gen clients",
  },
  {
    metric: "3.2x",
    label: "Average ROAS improvement",
    sub: "Within first 90 days of engagement",
  },
  {
    metric: "42%",
    label: "Average CPA reduction",
    sub: "Through creative testing and audience refinement",
  },
  {
    metric: "500+ hrs",
    label: "Saved per month via automation",
    sub: "For a mid-sized marketing team",
  },
];

export function ResultsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-3">
            Real outcomes, not vanity metrics
          </p>
          <h2 className="section-title mb-16">Results That Actually Matter</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card p-6 text-center hover:border-[rgba(232,124,12,0.3)] hover:-translate-y-1 transition-all duration-300">
                <div
                  className="font-heading font-bold gradient-text mb-2 leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                >
                  {r.metric}
                </div>
                <p className="text-text-primary text-sm font-medium mb-1">{r.label}</p>
                <p className="text-text-muted text-xs leading-relaxed">{r.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-text-muted mt-8 italic">
            * Results vary by client, industry, and starting point. These reflect representative engagements — replace with your actual numbers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
