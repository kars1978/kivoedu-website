import type { BlogPost } from "../types";

export const whatIsKivoPost: BlogPost = {
  slug: "what-is-Kivo",
  title: "What is Kivo AI?",
  description:
    "A clear introduction to Kivo AI, the students it helps, and the learning problem it is built to solve.",
  date: "2026-04-15",
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
        "Kivo AI is building a smarter way for students to learn-with AI designed to support curriculum, not replace it.",
      ],
    },
  ],
};
