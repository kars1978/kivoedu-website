
import { getAllPosts } from "./content";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = getAllPosts();

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export type { BlogPost };
