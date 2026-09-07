import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
import { ContactCTA } from "@/components/sections/contact-cta";
import { posts } from "@/lib/data/blog";
import { pageMetadata, absoluteUrl } from "@/lib/seo";

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
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: { kind: "asset", url: post.image, alt: post.title },
    article: { publishedTime: new Date(post.date).toISOString(), authors: [post.author.name], section: post.category },
  });
}

function articleJsonLd(post: (typeof posts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Person", name: post.author.name },
    publisher: { "@type": "Organization", name: "UX Core Technologies" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const initial = post.author.name.trim().charAt(0);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <article className="pt-20 pb-16 sm:pt-28">
        <Container className="max-w-4xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> Back to insights
            </Link>

            <span className="mt-8 block w-fit rounded-full bg-surface-2 px-5 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-bold text-white">
                {initial}
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-2">
                  {post.author.role} ·{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-foreground/90">
              {post.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="mt-4 font-display text-xl font-semibold sm:text-2xl">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="flex flex-col gap-2.5">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-muted">
                          <Check className="mt-1 size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-muted">
                    {block.text}
                  </p>
                );
              })}
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
