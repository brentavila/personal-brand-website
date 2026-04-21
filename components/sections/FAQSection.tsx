"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How quickly can I expect to see results?",
    a: "For paid campaigns, you'll typically see data worth acting on within the first 2 to 4 weeks. Meaningful ROAS improvements usually emerge in weeks 4 to 8, once we have enough test data to optimize. Automations are faster — most workflows go live within days and start saving time immediately.",
  },
  {
    q: "Do you work with small businesses or only larger companies?",
    a: "Both. I've worked with solo founders running $5k/month in ad spend and marketing teams at companies doing $50M+ in revenue. What matters is whether you're serious about growth, not how big your budget is right now.",
  },
  {
    q: "What does your process look like?",
    a: "We start with a strategy call to understand your goals, current setup, and where the biggest gaps are. From there I'll put together a plan with clear priorities. Most engagements run on a monthly retainer with weekly check-ins, though I also do project-based work for defined scopes.",
  },
  {
    q: "Do you handle the creative side too, or just the media buying?",
    a: "I can direct creative — copy angles, format recommendations, hooks, and performance analysis — but I don't produce videos or photo shoots. If you need a full creative production team, I can point you in the right direction and brief them on what the platform needs.",
  },
  {
    q: "What's your availability like and how do I get started?",
    a: "I take on a small number of clients at a time so I can actually focus on your results. The best first step is to reach out via the contact form below with a quick description of what you're working on. I'll respond within one business day.",
  },
  {
    q: "What does it cost to work with you?",
    a: "Pricing depends on scope. Retainers for ongoing paid media management start in the $2,500/month range. Automation builds are typically project-based. Send me a message with what you're thinking and I'll give you a straight answer.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-4">Common Questions</h2>
          <p className="text-center text-text-muted max-w-md mx-auto mb-12 text-sm">
            If something isn&apos;t answered here,{" "}
            <Link href="/#contact" className="text-[#E87C0C] hover:underline">
              just ask me directly
            </Link>
            .
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[rgba(232,124,12,0.04)] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-text-primary text-sm font-semibold leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-[#E87C0C]">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary text-sm leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
