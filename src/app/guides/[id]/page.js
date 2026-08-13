import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: "youtube-banner-size" },
    { id: "twitch-banner-size" },
    { id: "discord-banner-size" },
    { id: "twitter-header-size" },
    { id: "how-to-make-gaming-banner" },
    { id: "upload-youtube-banner" },
    { id: "gaming-fonts" },
    { id: "gaming-color-palettes" }
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guidesContent = {
    "youtube-banner-size": {
      title: "YouTube Banner Size Guide: Dimensions & Safe Zones (2560x1440)",
      desc: "Complete guide to official YouTube banner dimensions, 1546×423 mobile safe zones, 4K TV scaling, and aspect ratios for gaming creators."
    },
    "twitch-banner-size": {
      title: "Twitch Banner Size Guide: Profile Headers & 1080p Offline Screens",
      desc: "Complete dimensions guide for Twitch offline screens (1920×1080) and profile banner headers (1200×480) with avatar overlap safe zones."
    },
    "discord-banner-size": {
      title: "Discord Banner Size Guide: Server Banners & Nitro Profile Headers",
      desc: "Official dimensions and requirements for Discord server banners (960×540) and Nitro profile headers (600×240) with animated GIF tips."
    },
    "twitter-header-size": {
      title: "Twitter / X Header Size Guide: 1500x500 Dimensions & Safe Zones",
      desc: "Learn exact Twitter/X header dimensions (1500×500 px), 3:1 aspect ratio, and how to avoid avatar photo overlap on desktop and mobile."
    },
    "how-to-make-gaming-banner": {
      title: "How to Make a Gaming Banner: Step-by-Step 4K Design Tutorial",
      desc: "Step-by-step masterclass on creating gaming banners from scratch. Choose fonts, layer neon glows, set safe zones, and export 4K PNGs."
    },
    "upload-youtube-banner": {
      title: "How to Upload & Change Your YouTube Banner in YouTube Studio",
      desc: "Step-by-step walkthrough to upload, update, and crop your channel art on YouTube Studio using desktop or mobile without blur."
    },
    "gaming-fonts": {
      title: "Top 10 Best Gaming Fonts for Esports, YouTube & Stream Banners",
      desc: "Discover the best gaming typography for esports logos, channel art, and stream headers. Orbitron, Impact, Space Grotesk, and styling tips."
    },
    "gaming-color-palettes": {
      title: "Gaming Color Palettes: Best Dark-Mode Schemes for Stream Banners",
      desc: "Curated dark mode color schemes, cyber neon combinations, and contrast rules to brand your YouTube, Twitch, and Discord channels."
    }
  };
  const guide = guidesContent[id] || { title: "Gaming Guide", desc: "Design resources, guides, and tutorials for creators." };
  return {
    title: `${guide.title} | Gaming Banner`,
    description: guide.desc,
    alternates: {
      canonical: `https://gamingbanner.com/guides/${id}`,
    },
  };
}

export default async function GuideArticle({ params }) {
  const { id } = await params;

  // Guides contents dictionary
  const guidesContent = {
    "youtube-banner-size": {
      title: "YouTube Banner Size Guide: Dimensions & Safe Zones (2560 × 1440 px)",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Designing YouTube channel art requires understanding responsive canvas scaling. YouTube serves a single image file across smartphones, tablets, desktop monitors, and 4K living room smart TVs, cropping the image dynamically depending on the viewer's device.
          </p>

          <div className="p-5 bg-surface-container-high border-l-4 border-primary-container rounded-r-xl font-data-mono text-xs my-2 flex flex-col gap-1">
            <span className="text-primary-container font-bold uppercase tracking-wider">Official Specifications</span>
            <span className="text-on-background font-bold">Standard Banner Size: 2560 × 1440 pixels (16:9 Aspect Ratio)</span>
            <span className="text-on-background">Mobile & Desktop Safe Area: 1546 × 423 pixels (Centered)</span>
            <span>Maximum File Upload Limit: 6.0 MB (PNG or JPG format)</span>
          </div>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. The Responsive Viewport Breakdown
          </h2>
          <p>
            When you upload a 2560 × 1440 px graphic, YouTube cuts different viewports out of the canvas. Here is the exact breakdown of what each device displays:
          </p>

          <div className="border border-outline-variant/60 rounded-xl overflow-hidden bg-surface-container shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant/60 text-on-background font-bold font-data-mono uppercase">
                  <th className="p-3.5">Device Platform</th>
                  <th className="p-3.5">Visible Canvas</th>
                  <th className="p-3.5">Display Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                <tr>
                  <td className="p-3.5 font-bold text-on-background">📱 Mobile (Phones)</td>
                  <td className="p-3.5 font-data-mono text-primary-container">1546 × 423 px</td>
                  <td className="p-3.5">Core safe zone. Over 75% of gaming channel views originate here.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-on-background">💻 Desktop & Laptops</td>
                  <td className="p-3.5 font-data-mono text-primary-container">2560 × 423 px</td>
                  <td className="p-3.5">Wide horizontal strip. The center 1546px is identical to mobile, with side wings exposed.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-on-background">📟 Tablets & iPads</td>
                  <td className="p-3.5 font-data-mono text-primary-container">1855 × 423 px</td>
                  <td className="p-3.5">Intermediate viewport with consistent 423px vertical height.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-on-background">📺 4K Smart TVs</td>
                  <td className="p-3.5 font-data-mono text-primary-container">2560 × 1440 px</td>
                  <td className="p-3.5">Displays the entire uncropped 16:9 canvas across the living room screen.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. The Central 1546 × 423 Safe Zone Rule
          </h2>
          <p>
            The most critical design rule for gaming creators is keeping all vital elements—including your gamertag, clan tag, social handles, and upload schedule—strictly positioned inside the central <strong>1546 × 423 pixel safe area</strong>.
          </p>
          <p>
            Background textures, smoke particles, and ambient lighting can safely extend across the full 2560 × 1440 canvas to provide an immersive backdrop for TV viewers. However, any text placed outside the 1546 × 423 box will be completely invisible to mobile users.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. How to Prevent Blurry Banner Uploads
          </h2>
          <p>
            Many creators complain that their banners look blurry once uploaded to YouTube. This occurs when users upload low-resolution 720p files or heavily compressed JPGs. When YouTube's processing servers apply secondary compression, fine text edges become pixelated.
          </p>
          <p>
            To guarantee razor-sharp clarity: always export your artwork as an <strong>uncompressed, lossless 2560 × 1440 PNG file</strong>. Our studio exports directly at this resolution, ensuring your channel branding remains crisp on Retina displays and 4K monitors.
          </p>
        </div>
      ),
    },
    "twitch-banner-size": {
      title: "Twitch Banner Size Guide: Profile Headers & 1080p Offline Screens",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Branding your Twitch channel involves two distinct graphical assets: your <strong>Profile Banner Header</strong> and your <strong>Video Player Offline Screen</strong>. Each plays a distinct role in turning stream visitors into followers.
          </p>

          <div className="p-5 bg-surface-container-high border-l-4 border-primary-container rounded-r-xl font-data-mono text-xs my-2 flex flex-col gap-1">
            <span className="text-primary-container font-bold uppercase tracking-wider">Twitch Graphic Specs</span>
            <span className="text-on-background font-bold">Twitch Video Player Banner (Offline Screen): 1920 × 1080 px (16:9 Full HD)</span>
            <span className="text-on-background font-bold">Twitch Profile Banner (Header Strip): 1200 × 480 px (5:2 Aspect Ratio)</span>
            <span>Maximum File Limit: 10.0 MB (PNG, JPG, or GIF)</span>
          </div>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. Video Player Banner (Offline Screen: 1920 × 1080 px)
          </h2>
          <p>
            When your stream is offline, Twitch replaces the video player with your Video Player Banner. This is prime real estate to communicate your weekly streaming schedule, social handles (Twitter, Discord, TikTok), and community milestones.
          </p>
          <p>
            Because it uses standard 16:9 Full HD resolution, you can design your offline screen with high-contrast centered typography and import it directly into OBS Studio as an intermission or "Be Right Back" screen.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. Profile Banner Header (1200 × 480 px) & Avatar Safe Zones
          </h2>
          <p>
            Your Profile Banner appears at the top of your channel page behind your stream title, username, and follower count. Because Twitch scales this header dynamically based on the viewer's browser width, positioning is critical:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li><strong>Left-Side Avatar Overlap:</strong> Twitch places your circular profile avatar and live status badge on the bottom-left corner of the header. Keep all important text shifted toward the center or right side.</li>
            <li><strong>Responsive Width Stretching:</strong> On ultra-wide monitors (1440p or 4K), Twitch crops the top and bottom margins of the header. Keep your main gamertag vertically centered.</li>
          </ul>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. Typography & Color Recommendations for Streamers
          </h2>
          <p>
            Dark mode is the default viewing experience for Twitch users. Use deep midnight slate (#0f172a) backgrounds paired with high-voltage neon accents like Electric Cyan (#00d4ff), Neon Magenta (#ec4899), or Vibrant Gold (#fbbf24) to make your schedule easily legible in low-light environments.
          </p>
        </div>
      ),
    },
    "discord-banner-size": {
      title: "Discord Banner Size Guide: Server Banners & Nitro Profile Headers",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Discord provides visual customization for both individual creator profiles and community servers. Understanding exact pixel requirements ensures your community branding looks polished across mobile and desktop apps.
          </p>

          <div className="p-5 bg-surface-container-high border-l-4 border-primary-container rounded-r-xl font-data-mono text-xs my-2 flex flex-col gap-1">
            <span className="text-primary-container font-bold uppercase tracking-wider">Discord Asset Specifications</span>
            <span className="text-on-background font-bold">Server Banner Header: 960 × 540 pixels (16:9 Aspect Ratio)</span>
            <span className="text-on-background font-bold">Nitro User Profile Banner: 600 × 240 pixels (5:2 Aspect Ratio)</span>
            <span className="text-on-background font-bold">Server Invite Splash Screen: 1920 × 1080 pixels (Full HD)</span>
            <span>Maximum File Limit: 10.0 MB (PNG, JPG, or Animated GIF)</span>
          </div>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. Discord Server Banner (960 × 540 px)
          </h2>
          <p>
            The Server Banner sits at the very top of your channel sidebar. To unlock static server banners, your community requires <strong>Server Boost Level 2</strong> (7 boosts). For animated GIF banners, your server requires <strong>Server Boost Level 3</strong> (14 boosts).
          </p>
          <p>
            <strong>Safe Zone Warning:</strong> Discord places the server name, notification bell, and dropdown settings pill across the top 20% of the banner. Keep this upper margin dark and clutter-free so text remains legible.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. Discord Nitro Profile Banner (600 × 240 px)
          </h2>
          <p>
            Users with an active Discord Nitro or Nitro Basic subscription can upload custom static or animated GIF headers to their user profile card.
          </p>
          <p>
            Because your circular profile avatar and status indicator overlay the bottom-left area of the profile card, align your name, pronouns, and clan logo toward the center or right-hand section of the canvas.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. File Optimization & Compression
          </h2>
          <p>
            Discord strictly enforces a 10.0 MB file size limit for all profile and server uploads. If creating animated GIF banners, keep loop sequences under 4 seconds with a 30 FPS frame rate to stay well within the size budget without sacrificing visual quality.
          </p>
        </div>
      ),
    },
    "twitter-header-size": {
      title: "Twitter / X Header Size Guide: 1500 × 500 Dimensions & Safe Zones",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Your Twitter / X header is the first visual element visitors see when checking your esports profile, stream announcements, and clip highlights. Sizing your cover correctly avoids awkward avatar cropping.
          </p>

          <div className="p-5 bg-surface-container-high border-l-4 border-primary-container rounded-r-xl font-data-mono text-xs my-2 flex flex-col gap-1">
            <span className="text-primary-container font-bold uppercase tracking-wider">Twitter / X Specifications</span>
            <span className="text-on-background font-bold">Recommended Dimensions: 1500 × 500 pixels (3:1 Aspect Ratio)</span>
            <span className="text-on-background font-bold">Avatar Safe Zone: Avoid bottom-left 400 × 200 px</span>
            <span>Maximum File Limit: 5.0 MB (PNG or JPG)</span>
          </div>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. The 3:1 Panoramic Ratio & Avatar Overlap
          </h2>
          <p>
            Twitter headers use an ultra-wide 3:1 panoramic aspect ratio. The most common mistake gaming creators make is placing their gamertag or sponsor logos in the bottom-left quadrant.
          </p>
          <p>
            On desktop web browsers and the mobile X app, your circular profile avatar overlaps the bottom-left corner of the header by approximately 40% of its height. Always position your primary handle, stream schedule, and team branding in the <strong>center or right two-thirds</strong> of the canvas.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. Mobile vs. Desktop Edge Cropping
          </h2>
          <p>
            Depending on screen scaling, the Twitter mobile app may crop approximately 60 pixels from the top and bottom edges of your header. To maintain full legibility across iPhone and Android devices, keep your typography vertically centered with at least 80px of top and bottom padding.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. Exporting Lossless PNG Graphics
          </h2>
          <p>
            Twitter applies heavy compression to JPG uploads, often introducing fuzzy artifacts around sharp typography. Always export your header as a 24-bit uncompressed PNG file at exactly 1500 × 500 pixels to preserve clean vector lines and neon text glows.
          </p>
        </div>
      ),
    },
    "how-to-make-gaming-banner": {
      title: "How to Make a Professional Gaming Banner: Step-by-Step 4K Tutorial",
      category: "Tutorials",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Building a high-impact gaming banner does not require expensive design degrees or complex software subscriptions. By following structured design principles, you can create a custom, esports-grade channel banner in minutes.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step 1: Choose an Authentic Game Theme
          </h2>
          <p>
            Select a background aesthetic that matches your channel's primary niche. If you are a competitive FPS streamer (Valorant, CS2, Warzone), opt for tactical military grids and neon radianite lighting. If you focus on sandbox survival (Minecraft, Roblox), blocky landscapes and 3D voxel shadows establish instant recognition.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step 2: Establish Visual Hierarchy with Typography
          </h2>
          <p>
            Your gamertag should be the dominant focal point. Use bold geometric typefaces (such as Orbitron, Impact, or Space Grotesk) and apply high-contrast double outlines with multi-layered text shadows to separate the letters from background smoke and explosions.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step 3: Add Clear Secondary Value (Schedules & Socials)
          </h2>
          <p>
            A great banner answers two questions immediately: <em>"Who are you?"</em> and <em>"When do you go live?"</em>. Use a secondary subtitle line with a clean sans-serif font to display your upload days (e.g., "NEW VIDEOS EVERY TUESDAY & FRIDAY") or competitive rank milestone.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step 4: Verify Mobile Safe-Zone Calibration
          </h2>
          <p>
            Before exporting, verify that all text elements are strictly centered within the 1546 × 423 px safe box. This guarantees your branding will look flawless on both smartphone apps and 4K smart TVs.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step 5: Export in Lossless 4K PNG
          </h2>
          <p>
            Always export your completed artwork as an uncompressed 2560 × 1440 PNG file to prevent compression blur when uploading to YouTube Studio or Twitch.
          </p>
        </div>
      ),
    },
    "upload-youtube-banner": {
      title: "How to Upload & Update Your YouTube Banner in YouTube Studio",
      category: "Tutorials",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Once you have downloaded your custom 4K PNG banner from GamingBanner, applying it to your YouTube channel takes less than 60 seconds through the official YouTube Studio dashboard.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Step-by-Step Desktop Upload Walkthrough:
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-on-surface-variant font-medium">
            <li>Open your web browser and navigate to <strong className="text-on-background">studio.youtube.com</strong>. Log in with your channel account.</li>
            <li>In the left-hand navigation sidebar, click on <strong className="text-on-background">Customization</strong> (magic wand icon).</li>
            <li>Click on the <strong className="text-on-background">Branding</strong> tab located at the top of the Customization page.</li>
            <li>Under the <strong className="text-on-background">Banner Image</strong> section, click <strong className="text-on-background">Upload</strong> (or <strong className="text-on-background">Change</strong> if replacing an existing banner).</li>
            <li>Select your downloaded 4K PNG file from your computer.</li>
            <li>A crop preview window will appear displaying three boxes: <em>"Viewable on TV"</em>, <em>"Viewable on Desktop"</em>, and <em>"Viewable on all devices"</em>. Because our templates are pre-aligned, your text will fit perfectly in the central box. Click <strong className="text-on-background">Done</strong>.</li>
            <li>Click the blue <strong className="text-on-background">Publish</strong> button in the top-right corner to push your new channel art live.</li>
          </ol>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Uploading via Mobile (YouTube App)
          </h2>
          <p>
            You can also update your banner on iPhone or Android by opening the YouTube app, tapping your profile icon in the bottom right, tapping <strong>View Channel</strong>, selecting the pencil icon (Channel Settings), and tapping the camera icon in the upper-right corner of your banner.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            Troubleshooting Common Upload Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li><strong>"File size too large":</strong> YouTube requires banner files to be 6 MB or less. All PNGs from GamingBanner are optimized to stay within 2–4 MB.</li>
            <li><strong>"Dimensions too small":</strong> YouTube requires a minimum resolution of 2048 × 1152 px. Our 2560 × 1440 4K output exceeds this minimum for pristine sharpness.</li>
          </ul>
        </div>
      ),
    },
    "gaming-fonts": {
      title: "Top 10 Best Gaming Fonts: Typography Secrets of Pro Esports Creators",
      category: "Design Resources",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Typography is the visual voice of your gaming brand. The right font communicates competitive authority, genre atmosphere, and high-energy excitement before a viewer even reads your gamertag.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. Orbitron (Sci-Fi & Competitive Shooters)
          </h2>
          <p>
            A geometric sans-serif typeface designed with high-velocity 90-degree angles and technical curves. It perfectly matches futuristic hero shooters like Valorant, Overwatch 2, and Apex Legends. Use it in <em>Bold</em> or <em>Black Italic</em> with wide letter-spacing.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. Impact & Heavy Sans (Battle Royale & Military FPS)
          </h2>
          <p>
            A compressed, ultra-thick industrial typeface. When styled with heavy black drop-shadows and white/gold fill colors, Impact delivers unmatched legibility over smoky Warzone, PUBG Mobile, and CS2 battleground backgrounds.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. Space Grotesk & Inter Heavy (Modern Sandbox & Metaverse)
          </h2>
          <p>
            Clean, chunky sans-serif fonts that excel in Roblox, Fortnite, and Minecraft channel art. Their open letterforms ensure gamertags stay playful and readable even on low-resolution smartphone viewports.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            4. Georgia & Mythic Serif (Fantasy & Soulslike RPGs)
          </h2>
          <p>
            Classical serif typography with sharp serifs and refined proportions. Paired with warm golden grace glows, serif lettering matches the orchestral, lore-heavy atmosphere of Elden Ring, Genshin Impact, and League of Legends.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            5. Pro Tip: Multi-Layered Drop Shadows
          </h2>
          <p>
            Never place flat colored text directly over detailed gaming artwork. Always apply a dual-layer text shadow: a tight 2–3px dark outline for border contrast, and a diffuse 16–24px neon glow matching your theme color to make your name pop off the screen.
          </p>
        </div>
      ),
    },
    "gaming-color-palettes": {
      title: "Gaming Color Palettes: Best Dark-Mode Schemes for Stream Banners",
      category: "Design Resources",
      body: (
        <div className="flex flex-col gap-6 text-sm text-outline leading-relaxed">
          <p className="text-base text-on-background font-medium">
            Color psychology plays a vital role in creator branding. A cohesive, high-contrast color palette establishes instant visual recognition across YouTube, Twitch, Twitter, and Discord.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            1. Cyber Neon: Electric Cyan (#00d4ff) & Radianite Violet (#a855f7)
          </h2>
          <p>
            The signature color combination of modern competitive esports. The high contrast between electric cyan and deep purple evokes futuristic city skylines and tactical energy abilities. Works best over deep obsidian navy (#0f172a) backdrops.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            2. Tactical Gold & Slate: Winner Gold (#facc15) & Charcoal Black (#18181b)
          </h2>
          <p>
            A premium military aesthetic used by top CS2, PUBG, and Call of Duty creators. Gold symbolizes championship victory and elite rankings, while charcoal slate ensures maximum readability.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            3. Synthwave Sunset: Neon Magenta (#ec4899) & Flame Orange (#f97316)
          </h2>
          <p>
            An energetic retro-futuristic palette popular in arcade racing (Asphalt 9, Forza Horizon) and variety gaming streams. The warm gradient provides vibrant energy that draws user attention in YouTube recommendation feeds.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            4. Emerald Overworld: Grass Emerald (#10b981) & Dark Forest (#064e3b)
          </h2>
          <p>
            The ultimate color combination for Minecraft survivalists and sandbox builders. Natural emerald green creates high contrast against dark Nether and deep cave textures.
          </p>

          <h2 className="text-xl font-bold text-on-background border-l-2 border-primary-container pl-3">
            5. The 60-30-10 Rule for Gaming Headers
          </h2>
          <p>
            For balanced visual appeal, follow the 60-30-10 design formula: <strong>60%</strong> dominant dark background (charcoal/navy), <strong>30%</strong> secondary game illustration artwork, and <strong>10%</strong> vibrant neon accent color reserved exclusively for your gamertag and key callouts.
          </p>
        </div>
      ),
    },
  };

  const currentGuide = guidesContent[id] || {
    title: "Guide Not Found",
    category: "Design Resources",
    body: <p>We could not find the guide article you are looking for.</p>,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": currentGuide.title,
    "author": {
      "@type": "Organization",
      "name": "GamingBanner Design Team",
      "url": "https://gamingbanner.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GAMINGBANNER",
      "url": "https://gamingbanner.com"
    },
    "description": currentGuide.title
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="text-xs text-outline/80 font-data-mono flex items-center gap-1.5">
          <Link href="/" className="hover:text-on-background transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-on-background transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-primary-container">{id}</span>
        </div>

        {/* Title block */}
        <header className="border-b border-outline-variant/65 pb-4 flex flex-col gap-3">
          <span className="text-xs bg-primary-container/10 border border-primary-container/30 px-3 py-1 rounded-full text-primary-container font-data-mono uppercase tracking-wider inline-block w-fit">
            {currentGuide.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-on-background tracking-tight leading-tight">
            {currentGuide.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-outline/70 font-data-mono">
            <span>Published by GamingBanner Editorial Team</span>
            <span>•</span>
            <span>Verified 2026 Guidelines</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-10 rounded-2xl shadow-md">
          {currentGuide.body}
        </article>

        {/* CTA */}
        <section className="bg-surface-container-high border border-outline-variant/60 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center gap-3 shadow-md">
          <h3 className="font-bold text-on-background text-lg md:text-xl">
            Design Your 4K Gaming Banner in Seconds
          </h3>
          <p className="text-xs md:text-sm text-outline max-w-[500px]">
            Choose from 21+ safe-zone calibrated gaming templates with custom 3D fonts and instant lossless PNG downloads.
          </p>
          <Link
            href="/youtube-banners"
            className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] mt-2"
          >
            Open 4K Banner Studio
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
