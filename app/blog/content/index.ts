import { highLevelArchitecturePost } from "./high-level-architecture";
import { whatIsKivoPost } from "./what-is-kivo";
import { whyGeneralAIStrugglesInEducationPost } from "./why-general-ai-struggles-in-education";
import type { BlogPost } from "../types";

const posts: BlogPost[] = [
  whyGeneralAIStrugglesInEducationPost,
  whatIsKivoPost,
  highLevelArchitecturePost,
];

export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
