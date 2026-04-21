import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote:
      "Brent rebuilt our entire paid media strategy from scratch. Within 60 days our cost per acquisition dropped by 38% and we were scaling ad spend confidently for the first time. He doesn't just run campaigns — he teaches you why it works.",
    name: "Sarah M.",
    title: "Head of Growth",
    company: "SaaS startup, Series A",
    initials: "SM",
  },
  {
    quote:
      "We hired Brent to connect our CRM, ad platforms, and email stack. What used to take our team 15 hours a week now runs automatically. The ROI on that alone paid for his fee inside the first month.",
    name: "James T.",
    title: "Founder",
    company: "E-commerce brand, $4M revenue",
    initials: "JT",
  },
  {
    quote:
      "I was skeptical about hiring a freelancer for something this important. Brent's process, communication, and results shut that down fast. He thinks like an owner, not a vendor. Highly recommend.",
    name: "Priya K.",
    title: "VP Marketing",
    company: "B2B services company",
    initials: "PK",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-[#E87C0C]"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-3">
            What clients say
          </p>
          <h2 className="section-title mb-16">Trusted by Growth-Focused Teams</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-7 flex flex-col h-full hover:border-[rgba(232,124,12,0.25)] transition-all duration-300">
                <StarRating />
                <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E87C0C]/30 to-[#8B2500]/30 border border-[rgba(232,124,12,0.3)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#E87C0C]">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">{t.name}</p>
                    <p className="text-text-muted text-xs">
                      {t.title} &middot; {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-text-muted mt-8 italic">
            * Placeholder testimonials — replace with real client quotes before publishing.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
