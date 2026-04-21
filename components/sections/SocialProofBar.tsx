const platforms = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Zapier",
  "Make",
  "HubSpot",
  "GA4",
  "Shopify",
  "Klaviyo",
  "Claude",
  "Cursor",
];

export function SocialProofBar() {
  return (
    <div className="border-y border-border/40 bg-bg-secondary/30 py-5 overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-4">
          Platforms and tools
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {platforms.map((p) => (
            <span
              key={p}
              className="text-sm font-medium text-text-muted/70 hover:text-text-secondary transition-colors"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
