import type { Metadata } from "next";
import { PersonSchema } from "@/components/schema/PersonSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FAQSection } from "@/components/sections/FAQSection";
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
        {/* 1. Hook — who you are, what you do, availability */}
        <HeroSection />
        {/* 2. Platform credibility */}
        <SocialProofBar />
        {/* 3. Proof — results before anything else */}
        <ResultsSection />
        {/* 4. Services — what they get */}
        <ProjectsSection />
        {/* 5. Social proof — other people's words */}
        <TestimonialsSection />
        {/* 6. Mid-page conversion push */}
        <CtaBanner />
        {/* 7. Who you are (after the case is made) */}
        <AboutSection />
        {/* 8. Why trust you */}
        <TrustBadgesSection />
        {/* 9. Depth / technical credibility */}
        <SkillsSection />
        {/* 10. Objection handling */}
        <FAQSection />
        {/* 11. Authority — content marketing */}
        <BlogPreviewSection />
        {/* 12. Final conversion */}
        <ContactSection />
      </main>
    </>
  );
}
