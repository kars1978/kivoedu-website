import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kivoedu.ai"),
  title: {
    default: "KivoEdu | Curriculum-Grounded AI Tutoring",
    template: "%s | KivoEdu",
  },
  description:
    "KivoEdu is a curriculum-grounded AI tutor that helps students ask questions, practice, and revise with trusted school content.",
  openGraph: {
    title: "KivoEdu | Curriculum-Grounded AI Tutoring",
    description:
      "AI tutoring built for students, grounded in supported curriculum content.",
    url: "https://kivoedu.ai",
    siteName: "KivoEdu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
