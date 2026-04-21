"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const quickStats = [
  { value: "8+", label: "Years" },
  { value: "1,345+", label: "Campaigns" },
  { value: "$2.4M+", label: "Revenue driven" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-container mx-auto px-6 w-full py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 min-w-0">
            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="inline-flex items-center gap-2 bg-[rgba(232,124,12,0.1)] border border-[rgba(232,124,12,0.3)] rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E87C0C] animate-pulse" />
              <span className="text-xs font-medium text-[#E87C0C] uppercase tracking-wider">
                Open to new clients
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-text-muted text-sm uppercase tracking-[0.15em] mb-3 font-medium"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
              className="font-heading font-bold text-text-primary mb-5 leading-[1.05]"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
            >
              <span className="gradient-text">Brent Avila</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="text-text-secondary text-lg leading-relaxed mb-3 max-w-[520px]"
            >
              I help brands acquire customers and automate growth. Paid campaigns
              across Google, Meta, and LinkedIn — combined with marketing automations
              that keep working after the ad spend stops.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.42}
              className="text-text-muted text-sm mb-8 max-w-[480px]"
            >
              Based in Colorado. Working with teams across the US.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.52}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button asChild size="lg" variant="default">
                <Link href="#contact">Get a Free Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#projects">See My Work</Link>
              </Button>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.62}
              className="flex items-center gap-6 mb-8 pb-8 border-b border-border/40"
            >
              {quickStats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading font-bold text-[#E87C0C] text-lg leading-none">
                    {s.value}
                  </p>
                  <p className="text-text-muted text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex items-center gap-5"
            >
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
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-[#E87C0C] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-[#E87C0C] transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon size={20} />
              </a>
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden border border-[rgba(232,124,12,0.2)] shadow-[0_0_80px_rgba(232,124,12,0.08)]"
                style={{ width: "min(320px, 80vw)", height: "min(380px, 95vw)" }}
              >
                <Image
                  src="/images/brent-headshot.png"
                  alt="Brent Avila — Digital Marketing and Automation Specialist"
                  fill
                  priority
                  className="object-cover object-top"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1.05)" }}
                />
              </div>
              {/* Floating credential chip */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 border border-[rgba(232,124,12,0.25)] shadow-lg">
                <p className="text-xs font-semibold text-[#E87C0C]">Google Ads Certified</p>
                <p className="text-[10px] text-text-muted">Meta Blueprint Certified</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#E87C0C]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
