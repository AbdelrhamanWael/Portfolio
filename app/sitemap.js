import { projects } from "@/lib/data/projects";

export default function sitemap() {
  // Replace this with your production domain (or set NEXT_PUBLIC_SITE_URL in your environment)
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://abdelrhamanwael.vercel.app";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
