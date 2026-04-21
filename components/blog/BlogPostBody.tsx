import type { BlogPost } from "@/lib/blog-data";

export function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <div className="prose-custom">
      <p className="text-text-secondary text-lg leading-relaxed mb-10">{post.intro}</p>

      {post.sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
            {section.heading}
          </h2>
          <p className="text-text-secondary leading-relaxed">{section.body}</p>
        </div>
      ))}
    </div>
  );
}
