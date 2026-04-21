"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/lib/site-config";

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
      setTimeout(() => setSent(false), 4000);
    }, 800);
  }

  return (
    <section id="contact" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="text-center text-text-muted max-w-md mx-auto mb-16">
            Working on something interesting? Send me a message and I&apos;ll get back to you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">Say hello</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What's on your mind?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="full"
                    disabled={loading || sent}
                  >
                    {sent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        Message sent
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

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 py-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-secondary hover:text-[#E87C0C] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Find me</p>
                <div className="flex items-center gap-4">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-[#E87C0C] transition-colors text-sm"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-[#E87C0C] transition-colors text-sm"
                  >
                    <LinkedinIcon size={18} /> LinkedIn
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-[#E87C0C] transition-colors text-sm"
                  >
                    <XIcon size={18} /> X
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
