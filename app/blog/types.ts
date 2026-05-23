import type { StaticImageData } from "next/image";

export type BlogImage = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};

export type BlogGridItem = {
  title: string;
  description: string;
  icon: "book" | "notebook" | "check" | "help" | "brain" | "bot" | "user";
  tone: "clear" | "support" | "journey" | "interactive";
};

export type BlogContentBlock =
  | {
      type: "body";
      items: string[];
    }
  | {
      type: "image";
      image: BlogImage;
    }
  | {
      type: "grid";
      items: BlogGridItem[];
    };

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
  heroImage?: BlogImage;
  intro: string;
  sections: {
    heading: string;
    image?: BlogImage;
    grid?: BlogGridItem[];
    body?: string[];
    blocks?: BlogContentBlock[];
  }[];
};
