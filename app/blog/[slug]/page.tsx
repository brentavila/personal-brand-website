import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost, getAllSlugs } from "@/lib/blog-data";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { BlogPostingSchema } from "@/components/schema/BlogPostingSchema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
      authors: [siteConfig.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostingSchema post={post} />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-narrow mx-auto px-6">
          <Button asChild variant="ghost" size="sm" className="-ml-2 mb-8">
            <Link href="/blog" className="flex items-center gap-2 text-text-muted">
              <ArrowLeft size={14} />
              All posts
            </Link>
          </Button>

          <header className="mb-10">
            <Badge variant="outline" className="text-text-muted border-border mb-4">
              <time dateTime={post.date}>{post.dateFormatted}</time>
            </Badge>
            <h1
              className="font-heading font-bold text-text-primary leading-tight mb-2"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              {post.title}
            </h1>
            <p className="text-text-muted text-base">{post.description}</p>
          </header>

          <Separator className="mb-10" />

          <BlogPostBody post={post} />

          <Separator className="mt-16 mb-10" />

          {/* Author bio CTA */}
          <div className="rounded-xl border border-[rgba(232,124,12,0.2)] bg-[rgba(232,124,12,0.04)] p-7">
            <div className="flex items-start gap-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[rgba(232,124,12,0.25)] flex-shrink-0">
                <Image
                  src="/images/brent-headshot.png"
                  alt="Brent Avila"
                  fill
                  className="object-cover object-top"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary font-semibold text-sm mb-0.5">Brent Avila</p>
                <p className="text-text-muted text-xs mb-3">
                  Digital advertising and marketing automation specialist based in Colorado.
                  8+ years helping brands grow through paid media and smart workflows.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  I&apos;m not taking on new client engagements right now. If this post was useful,
                  there&apos;s more on the blog—and examples of how I work on the projects page.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/projects">View projects</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/blog" className="text-text-muted">
                      Read more posts
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
