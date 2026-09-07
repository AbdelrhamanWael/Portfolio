export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://abdelrhamanwael.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
