import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

function InlineCta() {
  return (
    <div className="my-10 rounded-xl border border-[rgba(232,124,12,0.25)] bg-[rgba(232,124,12,0.05)] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <p className="text-text-primary font-semibold text-sm mb-1">
          Working on paid campaigns or automations?
        </p>
        <p className="text-text-muted text-xs leading-relaxed">
          I&apos;m not taking new client projects right now. More writing and examples live on the
          blog and projects page.
        </p>
      </div>
      <Link
        href="/blog"
        className="flex-shrink-0 inline-flex items-center justify-center h-9 px-5 rounded-lg bg-[#E87C0C] text-bg-primary text-sm font-semibold hover:bg-[#FF9520] transition-colors whitespace-nowrap"
      >
        More posts
      </Link>
    </div>
  );
}

export function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <div className="prose-custom">
      <p className="text-text-secondary text-lg leading-relaxed mb-10">{post.intro}</p>

      {post.sections.map((section, i) => (
        <div key={i}>
          <div className="mb-10">
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              {section.heading}
            </h2>
            <p className="text-text-secondary leading-relaxed">{section.body}</p>
          </div>
          {/* Insert inline CTA after the second section */}
          {i === 1 && <InlineCta />}
        </div>
      ))}
    </div>
  );
}
