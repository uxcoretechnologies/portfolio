import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { posts } from "@/lib/data/blog";

export function BlogPreview() {
  const featured = posts.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Exploring the wonders of tech"
              description="Perspectives on design, AI, and engineering from our team."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/blog" variant="secondary">
              Read all articles <ArrowUpRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
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
