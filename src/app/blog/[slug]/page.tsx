import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Reveal } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
import { ContactCTA } from "@/components/sections/contact-cta";
import { posts } from "@/lib/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-20 pb-16 sm:pt-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> Back to insights
            </Link>

            <span className="mt-8 inline-block w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <PlaceholderMedia label="Article cover image" ratio="aspect-[16/9]" />
          </Reveal>

          <Reveal delay={0.1} className="prose prose-invert mt-10 max-w-none">
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/90">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </article>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
