import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on design, AI, and engineering from UX Core Technologies.",
};

export default function BlogPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Exploring the wonders of tech"
            description="Perspectives on design, AI, and engineering from our team."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-auto pt-6 flex items-center justify-between text-xs text-muted-2">
                    <span>{post.readTime}</span>
                    <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
