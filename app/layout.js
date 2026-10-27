import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://abdelrhamanwael.vercel.app"),
  title: "Abdelrhaman Wael | AI Systems & Full-Stack Engineer",
  description:
    "AI Systems & Full-Stack Engineer specializing in Generative AI, Agentic RAG, FastAPI, .NET Core, and Next.js platforms.",
  keywords: [
    "AI Systems Engineer",
    "Full-Stack Engineer",
    "AI Agent Developer",
    "FastAPI Developer",
    ".NET Core Developer",
    "Next.js",
    "React",
    "LangChain",
    "RAG Systems",
    "Cairo",
    "Egypt",
    "Abdelrhaman Wael",
  ],
  authors: [{ name: "Abdelrhaman Wael" }],
  openGraph: {
    title: "Abdelrhaman Wael | AI Systems & Full-Stack Engineer",
    description:
      "Engineering autonomous AI agents, high-performance FastAPI/.NET backends, and production full-stack platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhaman Wael | AI Systems & Full-Stack Engineer",
    description:
      "Engineering autonomous AI agents, high-performance FastAPI/.NET backends, and production full-stack platforms.",
  },
  verification: {
    google: "Un2Pg5in0QqkzB0SlMXGXqNR7SbbDg2UODQ2-PtH9ew",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#090A0C] text-[#F4F5F7] font-sans selection:bg-[#F59E0B]/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}