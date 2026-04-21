import type { Metadata } from "next";
import { PersonSchema } from "@/components/schema/PersonSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.shortName} — Digital Advertising, Marketing and Automations`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.shortName} — Digital Advertising, Marketing and Automations`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <PersonSchema />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
    </>
  );
}
