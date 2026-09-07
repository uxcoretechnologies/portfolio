import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { posts } from "@/lib/data/blog";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

const baseUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // "/afs-desk" is deliberately excluded — it's a standalone duplicate of
  // the canonical "/work/afs-desk" case study (kept noindexed, see that
  // page's metadata) and shouldn't be submitted for indexing.
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/careers",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];
}
