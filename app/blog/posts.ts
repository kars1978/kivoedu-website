export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: "Company" | "Architecture" | "Product";
  readingTime: string;
  tags: string[];
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-Kivo",
    title: "What is Kivo AI?",
    description:
      "A clear introduction to Kivo AI, the students it helps, and the learning problem it is built to solve.",
    date: "2026-04-25",
    author: "Kivo Team",
    category: "Company",
    readingTime: "4 min read",
    tags: ["AI tutoring", "Curriculum", "Student support"],
    intro:
      "Kivo is a curriculum-grounded AI tutor built for students. It helps learners ask questions, practice difficult topics, and revise with explanations aligned to the school content they are expected to learn.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Students often need help after class, during revision, or while working through homework. General AI tools can be helpful, but they may go beyond the syllabus, skip important steps, or explain topics in ways that do not match the curriculum being taught.",
          "Teachers and schools need support tools that reinforce learning, not distract from it.",
        ],
      },
      {
        heading: "Why Kivo",
        body: [
          "Kivo is built around structured curriculum data organized by country, board, grade, subject, chapter, and topic.",
          "This helps students receive relevant explanations, targeted practice, and revision support based on the material they actually study.",
        ],
      },
      {
        heading: "Who it helps",
        body: [
          "Students get help when they are stuck",
          "Parents get safer academic support they can trust",
          "Teachers extend support beyond class hours",
          "Schools introduce AI with clearer academic and privacy boundaries.",
        ],
      },
      {
        heading: "Looking ahead",
        body: [
          "Kivo AI is building a smarter way for students to learn—with AI designed to support curriculum, not replace it.",
        ],
      },
    ],
  },
  {
    slug: "high-level-architecture",
    title: "A high-level look at the Kivo architecture",
    description:
      "KivoEdu is built on a simple principle: AI tutoring works best when responses are grounded in the exact curriculum a student is studying.",
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
          "This allows tutoring responses to stay relevant to what students are expected to learn—not just what a general model happens to know.",
        ],
      },
      {
        heading: "Retrieval before generation",
        body: [
          "When a student asks a question, KivoEdu first identifies the relevant curriculum scope and supporting learning material.",
          "Only then is a response generated.",
          "This retrieval-first approach helps improve syllabus alignment, explanation quality, and long-term scalability as new subjects and regions are added.",
        ],
      },
      {
        heading: "Tutor workflows",
        body: [
          "Learning support requires more than one-off answers. KivoEdu is designed for:",
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
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
