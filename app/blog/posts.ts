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
    slug: "what-is-kivoedu",
    title: "What is KivoEdu?",
    description:
      "A clear introduction to KivoEdu, the students it helps, and the learning problem it is built to solve.",
    date: "2026-04-25",
    author: "KivoEdu Team",
    category: "Company",
    readingTime: "4 min read",
    tags: ["AI tutoring", "Curriculum", "Student support"],
    intro:
      "KivoEdu is a curriculum-grounded AI tutor for students. It helps learners ask questions, practice difficult topics, and revise with explanations that stay close to supported school content.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Students often need help after class, during revision, or while working through practice problems. General AI tools can be useful, but they may answer outside the student's syllabus, skip important steps, or explain concepts in a way that does not match the curriculum being taught.",
          "Teachers and schools need student support that reinforces their curriculum instead of replacing it.",
        ],
      },
      {
        heading: "Why KivoEdu",
        body: [
          "KivoEdu is designed around supported curriculum data organized by country, board, grade, subject, chapter, and topic. The goal is to give students a reliable study companion that explains, quizzes, and revises from content KivoEdu maintains.",
          "That makes the product useful for students who need step-by-step help, parents who want safer academic support, and schools that want AI tutoring aligned to the material students are expected to learn.",
        ],
      },
      {
        heading: "Who it helps",
        body: [
          "Students get accessible explanations and targeted practice when they are stuck.",
          "Teachers get a way to extend support beyond classroom hours while keeping learning anchored to curriculum coverage.",
          "Schools get an AI tutoring experience that can be introduced with clearer boundaries around content, privacy, and academic intent.",
        ],
      },
    ],
  },
  {
    slug: "high-level-architecture",
    title: "A high-level look at the KivoEdu architecture",
    description:
      "How KivoEdu thinks about curriculum ingestion, retrieval, tutoring workflows, and responsible AI boundaries.",
    date: "2026-04-25",
    author: "KivoEdu Engineering",
    category: "Architecture",
    readingTime: "5 min read",
    tags: ["Architecture", "Retrieval", "AI design"],
    intro:
      "KivoEdu is built around a simple idea: AI tutoring becomes more useful when it is grounded in the exact curriculum context a student is learning from.",
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
          "This retrieval-first pattern helps KivoEdu keep explanations aligned with supported content and makes it easier to expand coverage over time.",
        ],
      },
      {
        heading: "Tutor workflows",
        body: [
          "A tutoring product needs more than answers. KivoEdu is designed for guided explanations, practice generation, revision support, and topic-level feedback.",
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
