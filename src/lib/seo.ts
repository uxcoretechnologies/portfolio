import type { Metadata } from "next";
import { site } from "@/lib/data/site";

/**
 * Resolve a site-relative path to a full URL against the canonical domain.
 * Accepts "/about" or "about" — always returns "https://www.…/about".
 */
export function absoluteUrl(path: string = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, site.url).toString();
}

type OgImageInput =
  | { kind: "generated"; title: string; eyebrow?: string }
  | { kind: "asset"; url: string; alt: string };

type PageSeoInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about" or "/blog/my-post". */
  path: string;
  /** Defaults to a branded, dynamically-generated card using the title. */
  image?: OgImageInput;
  type?: "website" | "article";
  /** Article-only fields, passed straight through to openGraph.article. */
  article?: { publishedTime?: string; authors?: string[]; section?: string };
  /** Set to hide the page from search engines (e.g. an intentional duplicate). */
  noIndex?: boolean;
};

/**
 * Builds a consistent Metadata object — title, description, canonical URL,
 * Open Graph, and Twitter card — for a single page. Every page's `metadata`
 * (or `generateMetadata`) should funnel through this instead of hand-rolling
 * openGraph/twitter blocks, so canonical URLs and image sizing stay correct
 * everywhere without repeating boilerplate.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  article,
  noIndex,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  // og:title/twitter:title aren't run through Next's title.template (that
  // only affects the <title> tag), so the site name is appended by hand —
  // otherwise a shared link's preview card shows a bare page title with no
  // brand context.
  const fullTitle = `${title} — ${site.name}`;
  const resolvedImage: { url: string; alt: string } =
    image?.kind === "asset"
      ? { url: image.url, alt: image.alt }
      : {
          url: `/api/og?title=${encodeURIComponent(image?.title ?? title)}${
            image?.eyebrow ? `&eyebrow=${encodeURIComponent(image.eyebrow)}` : ""
          }`,
          alt: title,
        };

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type,
      images: [{ url: resolvedImage.url, width: 1200, height: 630, alt: resolvedImage.alt }],
      ...(type === "article" && article
        ? {
            publishedTime: article.publishedTime,
            authors: article.authors,
            section: article.section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [resolvedImage.url],
    },
  };
}
