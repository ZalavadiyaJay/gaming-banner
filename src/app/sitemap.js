export default function sitemap() {
  const baseUrl = "https://gamingbanner.com";

  const staticPages = [
    "",
    "/youtube-banners",
    "/twitch-banners",
    "/discord-banners",
    "/twitter-headers",
    "/blog",
    "/guides",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const blogPosts = [
    "/blog/best-youtube-banner-ideas-2025",
    "/blog/how-to-grow-your-gaming-channel",
    "/blog/free-vs-paid-banner-makers",
    "/blog/cool-gaming-names-generator-tips",
    "/blog/best-obs-settings-for-streaming",
  ];

  const guides = [
    "/guides/youtube-banner-size",
    "/guides/twitch-banner-size",
    "/guides/discord-banner-size",
    "/guides/twitter-header-size",
    "/guides/how-to-make-gaming-banner",
    "/guides/upload-youtube-banner",
    "/guides/gaming-fonts",
    "/guides/gaming-color-palettes",
  ];

  const allUrls = [...staticPages, ...blogPosts, ...guides];

  return allUrls.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/blog") || route.startsWith("/guides") ? 0.7 : 0.5,
  }));
}
