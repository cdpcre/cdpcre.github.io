import { getAllContent } from "@/lib/content";
import { BlogClient } from "./blog-client";

export const metadata = {
  title: "Blog — Crescenzo De Palma",
  description:
    "Notes on computer vision, machine learning, and building algorithms that run in the real world.",
};

export default async function BlogListing() {
  const postsEn = await getAllContent("blog", "en");
  const postsIt = await getAllContent("blog", "it");

  return <BlogClient postsEn={postsEn} postsIt={postsIt} />;
}
