/**
 * Portfolio copy stays anonymous: no client names, employer names, or
 * identifiable business details. Replace starter entries with your real work.
 */

export const INDUSTRY_IDS = [
  "ecommerce",
  "saas",
  "healthcare",
  "professional-services",
  "home-services",
  "education",
] as const;

export type IndustryId = (typeof INDUSTRY_IDS)[number];

export const INDUSTRY_LABELS: Record<IndustryId, string> = {
  ecommerce: "Ecommerce",
  saas: "B2B SaaS",
  healthcare: "Healthcare",
  "professional-services": "Professional services",
  "home-services": "Home services",
  education: "Education",
};

export type Engagement = "agency" | "freelance";

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  industries: IndustryId[];
  engagement: Engagement;
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "paid-search-ecom",
    title: "Paid search and shopping for a DTC brand",
    summary:
      "Scaled Google Ads and Performance Max for a mid-size ecommerce retailer (fashion-adjacent). Restructured campaigns around margin-aware product groupings, feed hygiene, and seasonal pushes. Client and parent company kept confidential.",
    industries: ["ecommerce"],
    engagement: "agency",
    tags: ["Google Ads", "PMax", "Feed optimization"],
  },
  {
    id: "saas-lead-gen",
    title: "LinkedIn and Meta lead gen for a B2B SaaS",
    summary:
      "Built always-on demand gen for a Series B SaaS selling into ops teams. Audience layering, offer-led creative testing, and CRM-connected lead scoring so sales stopped drowning in low-intent MQLs.",
    industries: ["saas"],
    engagement: "freelance",
    tags: ["LinkedIn Ads", "Meta", "HubSpot"],
  },
  {
    id: "healthcare-local",
    title: "Local patient acquisition (HIPAA-aware)",
    summary:
      "Multi-location healthcare group needed compliant landing pages, call tracking, and geo-fenced search. No PHI in ads or pixels; strict conversion naming and restricted audiences. Engagement via agency roster.",
    industries: ["healthcare"],
    engagement: "agency",
    tags: ["Local SEO", "Google Ads", "Call tracking"],
  },
  {
    id: "ops-automation-mixed",
    title: "CRM automations across professional and field services",
    summary:
      "Lead routing, quote-follow-up sequences, and review-request flows for two unrelated SMBs: a regional professional services firm and a home-services operator. Same playbook, different stacks (Make + CRM).",
    industries: ["professional-services", "home-services"],
    engagement: "freelance",
    tags: ["Make", "Zapier", "Lifecycle email"],
  },
  {
    id: "education-enrollment",
    title: "Enrollment campaigns for an online program provider",
    summary:
      "Meta and YouTube prospecting with retargeting by module interest. Creative testing by persona (career switchers vs upskillers) and budget pacing around intake windows.",
    industries: ["education"],
    engagement: "agency",
    tags: ["Meta Ads", "YouTube", "Creative testing"],
  },
];
