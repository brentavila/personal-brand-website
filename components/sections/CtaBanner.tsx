import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface CtaBannerProps {
  headline?: string;
  sub?: string;
}

export function CtaBanner({
  headline = "Ready to stop guessing and start scaling?",
  sub = "I'm currently accepting a small number of new clients. If your timing is right, let's talk.",
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
            <div className="inline-flex items-center gap-2 bg-[rgba(232,124,12,0.1)] border border-[rgba(232,124,12,0.3)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E87C0C] animate-pulse" />
              <span className="text-xs font-medium text-[#E87C0C] uppercase tracking-wider">
                Now accepting new clients
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
                <Link href="/#contact">Let&apos;s Talk</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#projects">See My Work First</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
