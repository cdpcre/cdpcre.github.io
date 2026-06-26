import { getAllContent } from "@/lib/content";
import { MetadataRoute } from "next";

// Required for static export (GitHub Pages).
export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cdpcre.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllContent("blog");
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  for (const post of blogPosts) {
    routes.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}
