"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/lib/site-config";

const RemotionPlayer = dynamic(
  () => import("@/components/animations/RemotionHero").then((m) => m.RemotionHero),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Remotion background layer */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <RemotionPlayer />
      </div>

      <div className="max-w-container mx-auto px-6 w-full py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 min-w-0">
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
              custom={0.25}
              className="font-heading font-bold text-text-primary mb-6 leading-[1.05]"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
            >
              <span className="gradient-text">Brent</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[520px]"
            >
              I run paid campaigns, build marketing automations, and help brands
              grow without the guesswork. Eight-plus years of figuring out what
              actually works and scaling it.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button asChild size="lg" variant="default">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="flex items-center gap-5"
            >
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-[#00bcd4] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-[#00bcd4] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-[#00bcd4] transition-colors"
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
            <div
              className="relative rounded-full overflow-hidden border-2 border-[rgba(0,188,212,0.2)] shadow-[0_0_60px_rgba(0,188,212,0.1)]"
              style={{ width: "min(300px, 70vw)", height: "min(300px, 70vw)" }}
            >
              <Image
                src="/images/brent-headshot.png"
                alt="Brent Avila"
                fill
                priority
                className="object-cover object-top"
                style={{ mixBlendMode: "multiply", filter: "contrast(1.05)" }}
              />
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
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#00bcd4]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
