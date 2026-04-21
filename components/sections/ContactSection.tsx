"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { CheckCircle, Clock, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const trustSignals = [
  { icon: Clock, text: "I read messages when I can; replies may be slower while I'm focused elsewhere" },
  { icon: MessageSquare, text: "Not taking new client projects at this time" },
  { icon: Phone, text: "Best for follow-ups with existing relationships or select inquiries" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    }, 800);
  }

  return (
    <section id="contact" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-bg-secondary border border-border rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-text-muted" aria-hidden />
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Not accepting new clients
              </span>
            </div>
          </div>
          <h2 className="section-title mb-4">Get in touch</h2>
          <p className="text-center text-text-muted max-w-lg mx-auto mb-16 leading-relaxed">
            I&apos;m not taking on new client engagements right now. You can still send a message—I
            may not be able to start new work, but I read thoughtful notes when I have bandwidth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="budget">Monthly budget range</Label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="e.g. $3k–$10k/mo, or just getting started"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">What are you working on?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your goals, what's working, what's not..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="full" disabled={loading || sent}>
                    {sent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        Sent — I&apos;ll be in touch soon
                      </span>
                    ) : loading ? (
                      "Sending..."
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-card p-6">
              <p className="text-text-primary font-semibold text-sm mb-4">What to expect</p>
              <ul className="space-y-4">
                {trustSignals.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[rgba(232,124,12,0.1)] flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#E87C0C]" />
                      </div>
                      <span className="text-text-secondary text-sm">{s.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="glass-card p-6">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Direct email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#E87C0C] hover:text-[#FF9520] transition-colors text-sm font-medium break-all"
              >
                {siteConfig.email}
              </a>

              <p className="text-xs text-text-muted uppercase tracking-wider mt-5 mb-3">Connect</p>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-[#E87C0C] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-[#E87C0C] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-[#E87C0C] transition-colors"
                  aria-label="X"
                >
                  <XIcon size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
