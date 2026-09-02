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
  const [featured, ...rest] = posts;

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

        {/* Featured — most recent post gets a larger treatment */}
        <Reveal delay={0.05} className="mt-14">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-primary/50 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2 lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-primary">
                {featured.category}
              </span>
              <h2 className="mt-4 text-balance font-display text-2xl font-semibold leading-snug sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-muted-2">
                  {featured.author.name} · {featured.readTime}
                </p>
                <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </div>
          </Link>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {rest.map((post) => (
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
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-2">
                    <span>
                      {post.author.name} · {post.readTime}
                    </span>
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
