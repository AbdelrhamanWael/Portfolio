import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}