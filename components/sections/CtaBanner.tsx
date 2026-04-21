import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface CtaBannerProps {
  headline?: string;
  sub?: string;
}

export function CtaBanner({
  headline = "Thanks for being here",
  sub = "I'm not taking on new client engagements right now. Explore the blog and projects—or send a note through the contact form if something's a fit for later.",
}: CtaBannerProps) {
  return (
    <section className="py-16">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <div
            className="rounded-2xl border border-[rgba(232,124,12,0.25)] p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,124,12,0.08) 0%, transparent 70%), rgba(28,18,8,0.9)",
            }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-bg-secondary border border-border rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-text-muted" aria-hidden />
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Not accepting new clients
              </span>
            </div>

            <h2 className="font-heading font-bold text-text-primary mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
              {headline}
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 text-base leading-relaxed">
              {sub}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/blog">Read the blog</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">See my work</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
