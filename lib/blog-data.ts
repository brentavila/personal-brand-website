export interface BlogPostSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateFormatted: string;
  excerpt: string;
  intro: string;
  sections: BlogPostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "scaling-paid-campaigns",
    title: "Scaling Paid Campaigns Without Burning Budget",
    description:
      "How to structure tests, when to scale, and how to use incrementality and attribution so you grow ROAS instead of just spend.",
    date: "2026-01-15",
    dateFormatted: "January 15, 2026",
    excerpt:
      "Everyone wants to scale. The real question is how to do it without turning profitable campaigns into money pits.",
    intro:
      "Everyone wants to scale. The real question is how to do it without turning profitable campaigns into money pits. The answer is structure: how you test, when you scale, and how you measure.",
    sections: [
      {
        heading: "Structure your tests before you scale",
        body: "Scaling too fast on a single winning creative or audience is risky. What works at $500/day often falls apart at $5,000/day. Before you push the budget lever, lock in a testing rhythm: one variable at a time, enough volume for statistical significance, and a clear success metric (CPA, ROAS, or LTV-based). Run multiple cells (audiences, creatives, placements) so you're not dependent on one hero setup.",
      },
      {
        heading: "When to scale (and when to hold)",
        body: "A good rule of thumb: don't increase budget by more than 20% per week on a given campaign or ad set. Platforms need time to re-optimize. If you double spend overnight, delivery often goes to waste and efficiency tanks. Also scale only when you have a few winners, not one. If one ad set is carrying everything, find a second and third before you scale the first.",
      },
      {
        heading: "Use incrementality and attribution",
        body: "Last-click attribution usually overstates paid and understates other channels. Run geo tests, holdout tests, or use platform incrementality tools (Meta's Conversion Lift, Google's incrementality) to see what revenue you'd lose if you turned off paid. That number, incremental revenue, is what you should optimize for. ROAS on its own can be misleading. ROAS on incremental conversion is what actually tells you if scaling is worth it.",
      },
      {
        heading: "Bottom line",
        body: "Scale slowly, diversify winners, and measure incrementality. Grow ROAS and efficiency first, then let budget follow.",
      },
    ],
  },
  {
    slug: "marketing-automations-convert",
    title: "Marketing Automations That Actually Convert",
    description:
      "From lead capture to closed deal, designing sequences and triggers that move people through the funnel without feeling spammy.",
    date: "2025-12-08",
    dateFormatted: "December 8, 2025",
    excerpt:
      "Automation isn't about sending more emails. It's about sending the right message at the right time.",
    intro:
      "Automation isn't about sending more emails. It's about sending the right message at the right time so people move toward a purchase instead of tuning out. Here's how to design sequences and triggers that feel helpful, not spammy.",
    sections: [
      {
        heading: "Start with the outcome, not the tool",
        body: "Before you build a single workflow, define the outcome: what action do you want (a demo booked, a trial started, a cart completed)? Then map backward: what steps and data do you need? Only then pick triggers (form submit, page view, no open in 7 days) and build the flow. Automations that \"do something\" without a clear conversion goal rarely move the needle.",
      },
      {
        heading: "Segment by behavior, not just signup",
        body: "Treating every lead the same is a missed opportunity. Use behavior: pages visited, links clicked, content consumed, or stage in the funnel. Send different sequences for \"downloaded lead magnet\" vs \"visited pricing three times.\" One nurture path can't serve both. Segment and personalize so each path feels relevant.",
      },
      {
        heading: "Use triggers that respect the buyer",
        body: "Time-based triggers (email 3 days after signup) are easy but blunt. Combine them with behavior: if they opened the last email but didn't click, send a short follow-up in 2 days. If they didn't open, wait 5 days and try a different subject. Add exit conditions so people who convert are removed from sales sequences and moved into customer flows instead.",
      },
      {
        heading: "Measure conversion, not just opens and clicks",
        body: "Opens and clicks are inputs. Conversions are outcomes. Track which sequences and emails actually lead to demos, signups, or sales. Double down on what converts and trim or rewrite what doesn't. Automations that convert are the ones you keep refining with real conversion data.",
      },
      {
        heading: "Bottom line",
        body: "Design for one clear conversion per flow, segment by behavior, use smart triggers, and optimize for conversion, not just engagement.",
      },
    ],
  },
  {
    slug: "connecting-your-stack",
    title: "Connecting Your Stack: Zapier vs Make vs Custom",
    description:
      "When to use no-code automations, when to reach for APIs, and how to keep your marketing data in sync across platforms.",
    date: "2025-11-22",
    dateFormatted: "November 22, 2025",
    excerpt:
      "Marketing runs on more tools than ever. Keeping data in sync usually means choosing between no-code connectors and custom API work.",
    intro:
      "Marketing runs on more tools than ever: CRM, ads, email, analytics, support. Keeping data in sync and workflows running usually means choosing between no-code connectors (Zapier, Make) and custom API work. Here's when to use which, and how to keep everything talking.",
    sections: [
      {
        heading: "Zapier: speed and simplicity",
        body: "Zapier is best when you need a connection live in hours, with minimal logic. One trigger, one or two actions, straightforward mapping. It's great for \"when someone fills this form, add them to the CRM and send a welcome email.\" Tasks can get expensive at scale, and complex branching or multi-step logic gets messy. Use it for simple, high-value automations and for testing ideas before you invest in something heavier.",
      },
      {
        heading: "Make (Integromat): logic and control",
        body: "Make gives you a visual canvas with real branching, filters, and data transformation. You can build flows that route leads by source, retry on failure, and handle large batches more cost-effectively than Zapier in many cases. The learning curve is steeper, but for multi-step workflows (form to CRM to segment by lead score to different email sequence) Make is often the better fit. Use it when you need if/then logic, error handling, or more than a simple trigger-action chain.",
      },
      {
        heading: "Custom APIs: when no-code isn't enough",
        body: "Reach for custom code when the platform has no connector, you need real-time sync or high volume, or you're doing something the GUI can't express (custom attribution, complex transformations). A small script or serverless function that runs on a schedule or webhook can be more reliable and cheaper at scale than hundreds of Zapier tasks. The tradeoff is maintenance and dev time, so use custom where no-code clearly can't deliver.",
      },
      {
        heading: "Keeping data in sync",
        body: "Whatever you choose, treat one system as source of truth for each entity (CRM is source of truth for contact data). Push changes from there into other tools rather than syncing bidirectionally without a plan. Map fields once in a doc, handle edge cases (duplicates, unsubscribes, lead status changes), and monitor for failed runs. A few robust, well-mapped flows beat a web of overlapping zaps that conflict or duplicate data.",
      },
      {
        heading: "Bottom line",
        body: "Use Zapier for simple, fast connections. Make for logic-heavy workflows. Custom APIs when no-code can't do the job or doesn't scale. Design around a clear source of truth and keep your integration map simple.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
