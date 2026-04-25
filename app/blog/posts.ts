import { highLevelArchitecturePost } from "./content/high-level-architecture";
import { whatIsKivoPost } from "./content/what-is-kivo";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  whatIsKivoPost,
  highLevelArchitecturePost,
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export type { BlogPost };
