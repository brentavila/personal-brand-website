import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

          <Separator className="mt-16 mb-8" />

          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" size="sm" className="-ml-2">
              <Link href="/blog" className="flex items-center gap-2 text-text-muted">
                <ArrowLeft size={14} />
                All posts
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/#contact">Work with me</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
