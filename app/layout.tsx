import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daman Singh Batra — Software Engineer",
  description:
    "Software Engineer specializing in ML, AI, distributed systems, and data engineering. Incoming at AltaML, previously TD Securities, OMERS, Credwise.",
  keywords: [
    "Daman Singh Batra",
    "Software Engineer",
    "ML Engineer",
    "Data Engineer",
    "Distributed Systems",
    "AI",
    "University of Alberta",
    "Toronto",
  ],
  authors: [{ name: "Daman Singh Batra" }],
  openGraph: {
    title: "Daman Singh Batra — Software Engineer",
    description:
      "Software Engineer specializing in ML, AI, distributed systems, and data engineering.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
