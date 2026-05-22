import { highLevelArchitecturePost } from "./high-level-architecture";
import { whatIsKivoPost } from "./what-is-kivo";
import { whyGeneralAIStrugglesInEducationPost } from "./why-general-ai-struggles-in-education";
import { whyKivoIsNotAnotherChatbot } from "./why-kivo-is-not-just-another-ai-chatbot";
import type { BlogPost } from "../types";

const posts: BlogPost[] = [
  whyKivoIsNotAnotherChatbot,
  whyGeneralAIStrugglesInEducationPost,
  whatIsKivoPost,
  highLevelArchitecturePost,
];

export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
