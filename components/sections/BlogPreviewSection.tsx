import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";

export function BlogPreviewSection() {
  const preview = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 md:py-[100px]">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title mb-4">Writing</h2>
          <p className="text-center text-text-muted max-w-md mx-auto mb-16">
            Thoughts on paid media, marketing automations, and building systems that scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/blog">All posts</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
