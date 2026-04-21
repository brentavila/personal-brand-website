import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#00bcd4] text-sm uppercase tracking-widest mb-4">404</p>
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-muted mb-8">
          That page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
