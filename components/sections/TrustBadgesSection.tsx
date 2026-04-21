import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ShieldCheck, Award, Clock, TrendingUp, Users, Zap } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Google Ads Certified",
    sub: "Search, Display, and Performance Max",
  },
  {
    icon: ShieldCheck,
    title: "Meta Blueprint Certified",
    sub: "Ads Manager and Creative Strategy",
  },
  {
    icon: Clock,
    title: "8+ Years Experience",
    sub: "Paid media and marketing automation",
  },
  {
    icon: TrendingUp,
    title: "1,345+ Campaigns",
    sub: "Across e-commerce, SaaS, and services",
  },
  {
    icon: Users,
    title: "B2B and B2C",
    sub: "Both sides of the funnel, all deal sizes",
  },
  {
    icon: Zap,
    title: "Full-Stack Marketing",
    sub: "From acquisition to automation to analytics",
  },
];

export function TrustBadgesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-4">Why Work With Me</h2>
          <p className="text-center text-text-muted max-w-md mx-auto mb-12 text-sm">
            Credentials matter less than results — but they tell you I know the platforms inside out.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="glass-card p-5 flex items-start gap-4 hover:border-[rgba(232,124,12,0.3)] transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(232,124,12,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#E87C0C]" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold leading-snug">
                      {badge.title}
                    </p>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">{badge.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
