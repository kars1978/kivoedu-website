export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: "Company" | "Architecture" | "Education" | "Product";
  readingTime: string;
  tags: string[];
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};
