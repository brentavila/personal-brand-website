import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="glass-card h-full flex flex-col hover:border-[rgba(232,124,12,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(232,124,12,0.08)] transition-all duration-300 group">
      <CardHeader>
        <Badge variant="outline" className="w-fit text-xs text-text-muted border-border mb-2">
          {post.dateFormatted}
        </Badge>
        <CardTitle className="text-base leading-snug group-hover:text-[#E87C0C] transition-colors">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm text-[#E87C0C] hover:text-[#FF9520] transition-colors font-medium"
        >
          Read more
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
