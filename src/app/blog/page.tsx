import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Placeholder articles on design, AI, and engineering from UX Core Technologies.",
};

export default function BlogPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Exploring the wonders of tech"
            description="Placeholder articles — swap for real published content."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold leading-snug">{post.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-2">
                  <span>{post.readTime}</span>
                  <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
