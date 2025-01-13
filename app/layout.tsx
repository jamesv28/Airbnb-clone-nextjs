import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inconsolata } from "next/font/google";

const iconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={iconsolata.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
