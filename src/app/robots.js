export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "PerplexityBot", "Googlebot", "Bingbot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot", "Bytespider", "Applebot-Extended"],
        disallow: "/",
      }
    ],
    sitemap: "https://gamingbanner.com/sitemap.xml",
  };
}
