import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on paid media, marketing automations, and building systems that scale.",
  openGraph: {
    title: `Writing — ${siteConfig.shortName}`,
    description:
      "Thoughts on paid media, marketing automations, and building systems that scale.",
    type: "website",
  },
};

export default function BlogListingPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-10">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
            <Link href="/" className="flex items-center gap-2 text-text-muted">
              <ArrowLeft size={14} />
              Back home
            </Link>
          </Button>

          <h1 className="font-heading font-bold text-4xl text-text-primary mb-3">Writing</h1>
          <p className="text-text-secondary">
            Thoughts on paid media, marketing automations, and building systems that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
