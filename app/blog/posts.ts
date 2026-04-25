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
      "How Kivo thinks about curriculum ingestion, retrieval, tutoring workflows, and responsible AI boundaries.",
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
          "The architecture starts with structured curriculum content. Material is organized by education system, board, grade, subject, chapter, topic, and assessment style so the tutor can reason with the right learning context.",
          "This gives the product a clearer source of truth than a general chat experience.",
        ],
      },
      {
        heading: "Retrieval before generation",
        body: [
          "When a student asks a question, the system should first identify the relevant curriculum scope and supporting material. The tutoring response can then be generated from retrieved context rather than from an unconstrained model answer.",
          "This retrieval-first pattern helps Kivo keep explanations aligned with supported content and makes it easier to expand coverage over time.",
        ],
      },
      {
        heading: "Tutor workflows",
        body: [
          "A tutoring product needs more than answers. Kivo is designed for guided explanations, practice generation, revision support, and topic-level feedback.",
          "At a high level, the product separates curriculum ingestion, content indexing, student interaction, response generation, and teacher or school visibility so each layer can improve independently.",
        ],
      },
      {
        heading: "SEO and transparency",
        body: [
          "Publishing technical posts like this helps schools, parents, and future partners understand the decisions behind the product.",
          "Good architecture writing should explain the tradeoffs without exposing private implementation details or sensitive operational information.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
