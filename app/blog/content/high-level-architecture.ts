import type { BlogPost } from "../types";

export const highLevelArchitecturePost: BlogPost = {
  slug: "high-level-architecture",
  title: "A high-level look at the Kivo architecture",
  description:
    "Kivo is built on a simple principle: AI tutoring works best when responses are grounded in the exact curriculum a student is studying.",
  date: "2026-04-25",
  author: "Kivo Engineering",
  category: "Architecture",
  readingTime: "5 min read",
  tags: ["Architecture", "Retrieval", "AI design"],
  intro:
    "Kivo is built around a simple idea: AI tutoring becomes more useful when it is grounded in the exact curriculum context a student is learning from.",
  sections: [
    {
      heading: "Curriculum data as the foundation",
      body: [
        "The system begins with structured curriculum data organized by country, board, grade, subject, chapter, topic, and assessment style.",
        "This allows tutoring responses to stay relevant to what students are expected to learn-not just what a general model happens to know.",
      ],
    },
    {
      heading: "Retrieval before generation",
      body: [
        "When a student asks a question, Kivo first identifies the relevant curriculum scope and supporting learning material.",
        "Only then is a response generated.",
        "This retrieval-first approach helps improve syllabus alignment, explanation quality, and long-term scalability as new subjects and regions are added.",
      ],
    },
    {
      heading: "Tutor workflows",
      body: [
        "Learning support requires more than one-off answers. Kivo is designed for:",
        "- guided explanations",
        "- practice generation",
        "- revision sessions",
        "- topic-level feedback",
        "- structured academic support",
        "Internally, curriculum ingestion, indexing, tutoring logic, and reporting can evolve independently.",
      ],
    },
    {
      heading: "Responsible AI by design",
      body: [
        "For schools and families, trust matters as much as capability.",
        "That means building systems with clear boundaries around content sources, privacy, academic intent, and operational transparency.",
      ],
    },
  ],
};
