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
    a: "When I'm taking on new work, it usually starts with a strategy call to understand goals, current setup, and gaps—then a prioritized plan. Most past engagements ran on a monthly retainer with weekly check-ins, with some project-based scopes. I'm not accepting new clients right now.",
  },
  {
    q: "Do you handle the creative side too, or just the media buying?",
    a: "I can direct creative — copy angles, format recommendations, hooks, and performance analysis — but I don't produce videos or photo shoots. If you need a full creative production team, I can point you in the right direction and brief them on what the platform needs.",
  },
  {
    q: "How do you use AI on client work?",
    a: "Paid media and measurement stay human-led — strategy, guardrails, and accountability stay with me. I use Claude Code, LLMs, and agentic workflows to speed up research, briefs, specs, internal tooling, and QA so you get sharper execution without cutting corners on the numbers.",
  },
  {
    q: "What's your availability like and how do I get started?",
    a: "I'm not taking on new client engagements at the moment. You're welcome to read the blog, browse projects for examples of how I think, or send a short note through the contact form—I'll read it when I can, but I can't promise new work or a call.",
  },
  {
    q: "What does it cost to work with you?",
    a: "I'm not currently accepting new projects, so this is for reference only. Historically, retainers for ongoing paid media management have often started in the $2,500/month range, and automation builds were typically scoped as projects. If that changes in the future, I'll update the site.",
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
