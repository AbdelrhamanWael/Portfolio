import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://abdelrhamanwael.vercel.app"),
  title: "Abdelrhaman Wael | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, .NET, and modern web technologies. Building exceptional digital experiences from Cairo, Egypt.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    ".NET Developer",
    "Web Developer",
    "Cairo",
    "Egypt",
    "Abdelrhaman Wael",
  ],
  authors: [{ name: "Abdelrhaman Wael" }],
  openGraph: {
    title: "Abdelrhaman Wael | Full Stack Developer",
    description:
      "Full Stack Developer building exceptional digital experiences with React, .NET, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhaman Wael | Full Stack Developer",
    description: "Full Stack Developer building exceptional digital experiences.",
  },
  verification: {
    google: "Un2Pg5in0QqkzB0SlMXGXqNR7SbbDg2UODQ2-PtH9ew",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased ${inter.className}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}