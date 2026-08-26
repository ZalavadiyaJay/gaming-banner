// src/app/sitemap.js
import { TEMPLATES } from "@/data/templates";

export const dynamic = 'force-static';

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
    "/blog/complete-twitch-stream-branding-guide-2026",
    "/blog/best-youtube-banner-ideas-2025",
    "/blog/how-to-grow-your-gaming-channel",
    "/blog/best-obs-settings-for-streaming",
    "/blog/youtube-banner-safe-zone-mobile-tv-desktop",
    "/blog/best-gaming-color-palettes-for-streamers",
    "/blog/how-to-setup-obs-starting-soon-scenes",
    "/blog/how-to-design-esports-clan-logo-and-header",
    "/blog/free-vs-paid-banner-makers",
    "/blog/cool-gaming-names-generator-tips",
    "/blog/kick-vs-twitch-streaming-banner-sizes",
    "/blog/discord-server-banner-and-nitro-dimensions",
    "/blog/top-10-gaming-fonts-for-banners-and-thumbnails",
    "/blog/how-to-grow-on-twitch-without-followers",
    "/blog/free-tools-every-gaming-streamer-needs",
  ];

  const guides = [
    "/guides/youtube-banner-size",
    "/guides/twitch-banner-size",
    "/guides/discord-banner-size",
    "/guides/twitter-header-size",
    "/guides/kick-banner-size",
    "/guides/obs-stream-overlays-dimensions",
    "/guides/twitch-panels-dimensions-and-markdown",
    "/guides/youtube-thumbnail-size-and-click-through-rate",
    "/guides/tiktok-and-youtube-shorts-safe-zones",
    "/guides/how-to-make-gaming-banner",
    "/guides/upload-youtube-banner",
    "/guides/gaming-fonts",
    "/guides/gaming-color-palettes",
    "/guides/esports-jersey-and-social-banner-branding",
    "/guides/png-vs-webp-vs-jpeg-for-gaming-banners",
    "/guides/twitch-emotes-and-sub-badges-dimensions",
  ];

  // Dynamic canonical nested customizer URLs
  const customizers = TEMPLATES.map(
    (t) => `/customize/${t.game}/${t.bannerSlug}`
  );

  const allUrls = [...staticPages, ...guides, ...blogPosts, ...customizers];

  return allUrls.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/guides") ? 0.9 : route.startsWith("/blog") ? 0.8 : 0.5,
  }));
}
