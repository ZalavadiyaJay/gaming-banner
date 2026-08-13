// src/data/templates.js
// Canonical template registry for GamingBanner.com

export const TEMPLATES = [
  {
    "id": "valorant-protocol",
    "game": "valorant",
    "bannerSlug": "protocol-agent-banner",
    "name": "Valorant Protocol Agent",
    "gameName": "Valorant",
    "platform": "youtube",
    "category": "Tactical Shooter",
    "sub": "IMMORTAL 3 • 450 RR",
    "legacyIds": [
      "valorant-protocol",
      "esports",
      "esports-v2"
    ],
    "image": "/banner_valorant_v3.jpg",
    "themeColor": "#00d4ff",
    "glow": "shadow-[#00d4ff]/10 border-[#00d4ff]/30",
    "gamertag": "RADIANT_PRO",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#00d4ff",
      "textShadow": "0 0 16px rgba(0, 212, 255, 0.7), 0 0 32px rgba(168, 85, 247, 0.5)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "High-octane tactical combat banner inspired by Valorant Radiant agents. Features a cell-shaded female operative holding an energy-shielded rifle against a destroyed city under a swirling purple portal with radianite crystals sprouting from the ground.",
    "story": "Set on a futuristic battleground reminiscent of Haven and Bind, this banner captures the intensity of an overtime match point. A tactical female operative stands ready with an energy-shielded assault rifle while a swirling purple Radianite rift illuminates a shattered city skyline and glowing crystal shards.",
    "artAnalysis": "The tactical operative and swirling purple Radianite rift are anchored on the outer left and right flanks to frame the scene. The central 1546 × 423 px safe zone is kept as a dark, clean carbon-fiber battlefield so your gamertag, VCT team tag, and ranked rating glow with maximum sharpness without covering character artwork on mobile screens.",
    "palette": [
      {
        "name": "Radianite Cyan",
        "hex": "#00d4ff",
        "desc": "Main Gamertag & Glow Aura"
      },
      {
        "name": "Void Violet",
        "hex": "#7c3aed",
        "desc": "Portal & Energy Highlights"
      },
      {
        "name": "Spike Crimson",
        "hex": "#ef4444",
        "desc": "Rank Badge & Alert Accent"
      },
      {
        "name": "Titanium White",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "We recommend using Orbitron in Italic weight. Its sharp geometry, diagonal cuts, and futuristic telemetry styling match the in-game Valorant HUD, agent select screen, and esports broadcast graphics.",
    "faqs": [
      {
        "q": "How do I match this banner's aesthetic to my main agent (Jett, Reyna, Omen, or Sova)?",
        "a": "You can customize the text styling and glow accents to mirror your main agent's ability colors — such as Radianite Cyan (#00d4ff) for Jett or Sova, Void Violet (#7c3aed) for Reyna or Omen, and Spike Crimson (#ef4444) for Phoenix or Brimstone."
      },
      {
        "q": "Will my Immortal/Radiant leaderboard rank text remain centered on mobile screens?",
        "a": "Yes! All custom gamertags, rank subtitles (like 'IMMORTAL 3 • 450 RR'), and VCT tags are locked inside the central 1546 × 423 px safe area, ensuring zero text clipping on iPhones and Android devices while the background fills 4K TVs."
      },
      {
        "q": "Can I add my VCT Premier team tag and competitive scrim schedule to this header?",
        "a": "Absolutely. You can type bracketed team tags (e.g. '[SEN] RADIANT') into the main name field and add your Premier match days or Twitch broadcast schedule in the subtitle input."
      },
      {
        "q": "Why is Orbitron Italic the recommended font for Valorant channel art?",
        "a": "Orbitron Italic features sharp geometric angles and diagonal chamfers that perfectly match Riot's in-game tactical HUD, agent select telemetry, and VCT Champions esports broadcast graphics."
      },
      {
        "q": "Are these Valorant graphics safe to use on YouTube channels with active AdSense monetization?",
        "a": "Yes, 100%. All banner backgrounds on GamingBanner.com are original fan-art digital illustrations created for content creators, granting full commercial broadcast and monetization rights without copyright claims."
      }
    ]
  },
  {
    "id": "twitch-valorant",
    "game": "valorant",
    "bannerSlug": "tactical-offline-banner",
    "name": "Valorant Radiant Offline",
    "gameName": "Valorant",
    "platform": "twitch",
    "category": "Tactical Shooter",
    "sub": "OFFLINE • Season 12 Live Soon",
    "legacyIds": [
      "twitch-valorant"
    ],
    "image": "/twitch_valorant.jpg",
    "themeColor": "#00d4ff",
    "glow": "shadow-[#00d4ff]/10 border-[#00d4ff]/30",
    "gamertag": "SHADOW_VAL",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#00d4ff",
      "textShadow": "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #005f73",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Sleek 1920x1080 Twitch offline screen featuring futuristic cyan HUD geometry and radiant agent silhouettes for professional Valorant stream schedules.",
    "story": "Designed for competitive Valorant streamers, this 1080p backdrop features sharp geometric HUD borders and glowing energy telemetry lines to announce when your next competitive stream begins.",
    "artAnalysis": "The design features a dark carbon-fiber mesh background with high-contrast cyan framing lines that highlight your offline schedule and social handles.",
    "palette": [
      {
        "name": "Neon Cyan",
        "hex": "#00d4ff",
        "desc": "Gamer Handle Glow"
      },
      {
        "name": "Deep Cobalt",
        "hex": "#005f73",
        "desc": "Border Shading"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron Bold with glowing drop shadows for an authentic esports broadcast aesthetic.",
    "faqs": [
      {
        "q": "What is the official resolution for this Twitch offline screen?",
        "a": "This template exports at native 1920 × 1080 pixels (16:9 Full HD), perfectly matching Twitch's video player offline banner specification."
      },
      {
        "q": "How do I upload this banner to my Twitch channel?",
        "a": "Go to your Twitch Creator Dashboard > Settings > Channel > Brand tab. Scroll down to 'Video Player Banner' and upload your downloaded 1080p PNG file."
      },
      {
        "q": "Can I use this graphic in OBS Studio or Streamlabs?",
        "a": "Yes! Add the image as an Image Source in OBS Studio or Streamlabs to create starting soon, intermission, or stream ending scenes."
      },
      {
        "q": "How do I display my weekly streaming schedule?",
        "a": "Use the secondary subtitle input to type your broadcast days (e.g., 'STREAMING MON-FRI 7PM EST') with high-contrast glowing text."
      },
      {
        "q": "Are these Twitch offline banners royalty-free?",
        "a": "Yes, 100% royalty-free with full commercial rights for Twitch Affiliates, Partners, and Kick streamers."
      }
    ]
  },
  {
    "id": "minecraft-overworld-nether",
    "game": "minecraft",
    "bannerSlug": "overworld-nether-split-banner",
    "name": "Minecraft Overworld vs Nether",
    "gameName": "Minecraft",
    "platform": "youtube",
    "category": "Sandbox",
    "sub": "HARDCORE SURVIVAL • Day 100",
    "legacyIds": [
      "minimalist",
      "minimalist-v2",
      "minecraft-sunset",
      "sunset-voxel-banner"
    ],
    "image": "/banner_minecraft_v3.jpg",
    "themeColor": "#10b981",
    "glow": "shadow-[#10b981]/10 border-[#10b981]/30",
    "gamertag": "CRAFT_LEGEND",
    "textStyle": {
      "fontFamily": "var(--font-data-mono)",
      "color": "#10b981",
      "textShadow": "2px 2px 0px #064e3b, 4px 4px 0px #022c22, 0 0 16px rgba(16, 185, 129, 0.6)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Create a custom Minecraft banner 4K (2560×1440 UHD) for your YouTube channel art. Features a vibrant split-screen panoramic scene of a sunny Overworld castle and fiery Nether fortress with lava, Ghasts, and a gold-armored warrior.",
    "story": "This artwork captures the two most iconic dimensions of Minecraft in a panoramic split-screen. On the left, a peaceful green Overworld castle stands under sunny skies; on the right, a dangerous Nether fortress glows with red-hot lava, flying Ghasts, and a gold-armored adventurer.",
    "artAnalysis": "The panoramic split-screen composition places the sunny Overworld castle and diamond builder on the left, and the fiery Nether fortress with Ghasts on the right. Ambient atmospheric mist softens the central transition zone, leaving a clean, high-contrast focal area for blocky 3D gamertags and survival channel titles on all devices.",
    "palette": [
      {
        "name": "Emerald Green",
        "hex": "#10b981",
        "desc": "Overworld Grass & XP Aura"
      },
      {
        "name": "Diamond Cyan",
        "hex": "#06b6d4",
        "desc": "Armor & Tool Highlights"
      },
      {
        "name": "Nether Lava",
        "hex": "#f97316",
        "desc": "Fiery Portal Accent"
      },
      {
        "name": "Pure Quartz",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use JetBrains Mono or blocky monospace fonts with layered drop shadows. This gives your letters the authentic 16-bit voxel look of Minecraft grass and stone blocks.",
    "faqs": [
      {
        "q": "Can I customize this banner for a multiplayer SMP series or Hardcore 100 Days challenge?",
        "a": "Yes! Enter your series name (such as 'HARDCORE 100 DAYS SURVIVAL', 'LIFESTEAL SMP SEASON 4', or 'REDSTONE ACADEMY') in the subtitle field to give viewers an instant preview of your content format."
      },
      {
        "q": "How do the 3D voxel drop shadows keep my gamertag readable against the Nether background?",
        "a": "Our generator renders dual-layer dark moss (#064e3b) and obsidian drop shadows behind your text, creating high-contrast depth that stays razor-sharp whether viewed against bright Overworld grass or glowing Nether lava."
      },
      {
        "q": "What is the best way to display my Java/Bedrock server IP address on this YouTube header?",
        "a": "Use the secondary subtitle box to write your server connection address (e.g. 'PLAY.MYSERVER.NET • JAVA & BEDROCK'). The monospace font preserves clean character spacing for easy typing."
      },
      {
        "q": "Does the split Overworld vs Nether artwork stay balanced on smartphone displays?",
        "a": "Yes. The castle and Nether fortress flank the outer borders while the central atmospheric fog creates a clean, uncluttered canvas for your gamertag inside the 1546 × 423 px mobile safe zone."
      },
      {
        "q": "Is this Minecraft channel art royalty-free for content creators uploading modded gameplay?",
        "a": "100% royalty-free. All artwork is custom digital painting with zero official in-game textures, granting full commercial rights for monetized YouTube channels, Twitch streams, and community Discord servers."
      }
    ]
  },
  {
    "id": "twitch-minecraft",
    "game": "minecraft",
    "bannerSlug": "cozy-voxel-offline-banner",
    "name": "Minecraft Voxel Offline",
    "gameName": "Minecraft",
    "platform": "twitch",
    "category": "Sandbox",
    "sub": "BE RIGHT BACK • Building spawn",
    "legacyIds": [
      "twitch-minecraft"
    ],
    "image": "/twitch_minecraft.jpg",
    "themeColor": "#10b981",
    "glow": "shadow-[#10b981]/10 border-[#10b981]/30",
    "gamertag": "MINER_PRO",
    "textStyle": {
      "fontFamily": "var(--font-data-mono)",
      "color": "#10b981",
      "textShadow": "2px 2px 0px #064e3b, 4px 4px 0px #022c22",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Cozy voxel sunset Twitch offline screen designed for Minecraft SMP stream channels and creative builder communities.",
    "story": "A warm, peaceful voxel sunset card created for Minecraft SMP streamers, builders, and survival explorers.",
    "artAnalysis": "Clean voxel geometric terrain with soft amber sunset gradients that make green and gold gamertags pop.",
    "palette": [
      {
        "name": "Voxel Emerald",
        "hex": "#10b981",
        "desc": "Primary Text"
      },
      {
        "name": "Warm Amber",
        "hex": "#f59e0b",
        "desc": "Sunset Accent"
      },
      {
        "name": "Deep Moss",
        "hex": "#064e3b",
        "desc": "3D Shadow"
      }
    ],
    "fontTip": "Use JetBrains Mono with 3D drop-shadow extrusion for classic Minecraft voxel charm.",
    "faqs": [
      {
        "q": "Can I use this for my Minecraft SMP server banner?",
        "a": "Yes! Add your SMP server name, server IP address, and streaming hours directly into the customizer text fields."
      },
      {
        "q": "What resolution does this download in?",
        "a": "It downloads as a crisp 1920 × 1080 px Full HD PNG file matching Twitch's video player banner standards."
      },
      {
        "q": "How do I add this to OBS Studio as a BRB screen?",
        "a": "In OBS Studio, add a new 'Image' source in your Scene collection and select the downloaded PNG file."
      },
      {
        "q": "Is it easy to update the stream schedule later?",
        "a": "Yes! You can return anytime, modify your stream hours, and download an updated banner in seconds."
      },
      {
        "q": "Is this free for Twitch Affiliates and Partners?",
        "a": "Yes, 100% free with zero watermarks and full commercial streaming rights."
      }
    ]
  },
  {
    "id": "fortnite-mega-city",
    "game": "fortnite",
    "bannerSlug": "mega-city-rift-battle-banner",
    "name": "Fortnite Mega City Rift Battle",
    "gameName": "Fortnite",
    "platform": "youtube",
    "category": "Battle Royale",
    "sub": "VICTORY ROYALE • Crown Wins: 99",
    "legacyIds": [
      "streaming",
      "streaming-v2",
      "fortnite-storm",
      "storm-rift-banner"
    ],
    "image": "/banner_fortnite_v3.jpg",
    "themeColor": "#8b5cf6",
    "glow": "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30",
    "gamertag": "ROYALE_CHAMP",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ffffff",
      "textShadow": "0 0 20px rgba(139, 92, 246, 0.9), 0 0 40px rgba(236, 72, 153, 0.7)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Epic wide panoramic battle royale key art featuring an all-star character lineup across building ramp towers, a neon cyberpunk skyline under a purple rift sky with the Battle Bus and dragon glider.",
    "story": "Under a glowing Zero Point rift sky, an all-star battle royale squad charges into combat. A cyberpunk skyscraper city sparkles in the background while the Battle Bus and a mechanical dragon glide through the clouds.",
    "artAnalysis": "Hero characters and building ramp towers frame the left and right borders beneath a glowing Zero Point rift sky and flying Battle Bus. The central twilight sky provides an open, dark atmospheric canvas where bold white and neon magenta gamertags pop cleanly across both desktop monitors and mobile phones.",
    "palette": [
      {
        "name": "Rift Purple",
        "hex": "#8b5cf6",
        "desc": "Storm Glow"
      },
      {
        "name": "Slurp Cyan",
        "hex": "#00d4ff",
        "desc": "Shield Highlights"
      },
      {
        "name": "Victory Gold",
        "hex": "#f59e0b",
        "desc": "Crown Wins Badge"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Main Gamertag"
      }
    ],
    "fontTip": "Choose Inter or Heavy Sans with boldest weight. Chunky bold lettering fits Fortnite's fun, animated art style.",
    "faqs": [
      {
        "q": "How can I highlight my FNCS tournament placements or Unreal rank in this header?",
        "a": "Type your competitive standing into the subtitle field (e.g. 'UNREAL RANK #42 • FNCS FINALIST' or '99 VICTORY CROWN WINS') and apply glowing Victory Gold (#f59e0b) to match championship badges."
      },
      {
        "q": "Why does the bold comic-style font outline work best for high-energy Battle Royale channels?",
        "a": "Inter Heavy with stacked purple and magenta glow shadows captures the playful comic aesthetic of Fortnite's UI, ensuring your name stays prominent over complex ramp building structures."
      },
      {
        "q": "Can I include my Support-A-Creator (SAC) code and daily item shop stream schedule on the banner?",
        "a": "Yes! You can add text lines such as 'CODE: CREATOR (AD) • DAILY ITEM SHOP 8PM EST' to maximize creator code earnings from your channel audience."
      },
      {
        "q": "Will the purple rift sky and cyberpunk Mega City buildings look sharp on 4K TVs?",
        "a": "Yes. Our studio exports at full uncompressed 2560 × 1440 4K UHD, ensuring glowing storm rift portals and neon skyscrapers render with zero compression artifacts on living room screens."
      },
      {
        "q": "Do I need Epic Games permission to use this Fortnite-inspired art for my monetized channel?",
        "a": "No permission is needed. The artwork is original digital concept art that contains no copyrighted 3D game models, granting 100% royalty-free commercial usage for YouTube and Twitch creators."
      }
    ]
  },
  {
    "id": "twitch-fortnite",
    "game": "fortnite",
    "bannerSlug": "rift-royale-offline-banner",
    "name": "Fortnite Royale Offline",
    "gameName": "Fortnite",
    "platform": "twitch",
    "category": "Battle Royale",
    "sub": "OFFLINE • Follow for Rank Push",
    "legacyIds": [
      "twitch-fortnite"
    ],
    "image": "/twitch_fortnite.jpg",
    "themeColor": "#8b5cf6",
    "glow": "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30",
    "gamertag": "ROYALE_KING",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ffffff",
      "textShadow": "0 0 10px #c084fc, 0 0 20px #8b5cf6, 0 0 30px #6d28d9",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Purple rift sky offline screen for Battle Royale Twitch content creators and tournament competitors.",
    "story": "A high-energy 1080p offline stream screen featuring purple Zero Point lightning storms and neon city silhouettes.",
    "artAnalysis": "Dark purple gradient center ensures clear readability for stream schedules and tournament results.",
    "palette": [
      {
        "name": "Neon Purple",
        "hex": "#8b5cf6",
        "desc": "Energy Aura"
      },
      {
        "name": "Electric Pink",
        "hex": "#ec4899",
        "desc": "Secondary Glow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Text Core"
      }
    ],
    "fontTip": "Use Inter Extra-Bold or Impact with vibrant purple glow.",
    "faqs": [
      {
        "q": "What resolution does this Fortnite offline screen export in?",
        "a": "Standard 1920 × 1080 pixels (Full HD 16:9), matching Twitch video player standards."
      },
      {
        "q": "How to set this as my Twitch offline screen?",
        "a": "Upload the downloaded 1920x1080 PNG in Twitch Creator Dashboard under Settings > Channel > Brand > Video Player Banner."
      },
      {
        "q": "Does this work in OBS Studio for stream intermission?",
        "a": "Yes! Add it as an Image Source for stream waiting, BRB, or intermission screens."
      },
      {
        "q": "Can I add my TikTok and YouTube links?",
        "a": "Yes, you can add multiple text lines to showcase all your social handles."
      },
      {
        "q": "Are there any watermarks or hidden fees?",
        "a": "Zero watermarks and 100% free for all streamers."
      }
    ]
  },
  {
    "id": "cod-warzone",
    "game": "call-of-duty",
    "bannerSlug": "warzone-special-ops-banner",
    "name": "Call of Duty Warzone Special Ops",
    "gameName": "Call of Duty",
    "platform": "youtube",
    "category": "FPS",
    "sub": "TACTICAL LOADOUT • Global Elite",
    "legacyIds": [
      "cs2-tactical",
      "cs2-tactical-v2",
      "warzone-tactical-banner"
    ],
    "image": "/banner_cod_v3.jpg",
    "themeColor": "#de9b35",
    "glow": "shadow-[#de9b35]/10 border-[#de9b35]/30",
    "gamertag": "GHOST_ACTUAL",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#ffffff",
      "textShadow": "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b, 0 0 20px rgba(222, 155, 53, 0.7)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Action-packed military special forces battlefield scene featuring tactical operators advancing with assault rifles through a burning war-torn city with attack helicopters in the sky.",
    "story": "An elite special forces fireteam moves through a warzone. Military helicopters hover above burning skyscraper ruins while tactical operators aim suppressed assault rifles through flying embers and smoke.",
    "artAnalysis": "Tactical special forces operators aiming assault rifles and hovering attack helicopters frame the outer edges amidst burning city ruins. The center is bathed in warm, dark tactical smoke that creates a high-contrast backdrop, ensuring your clan tag, loadout title, and gamertag remain razor-sharp without obscuring the combat art.",
    "palette": [
      {
        "name": "Tactical Amber",
        "hex": "#f59e0b",
        "desc": "Muzzle Flash Glow"
      },
      {
        "name": "Gunmetal Slate",
        "hex": "#1e293b",
        "desc": "Armor & Shadow"
      },
      {
        "name": "Laser Crimson",
        "hex": "#ef4444",
        "desc": "Alert Accents"
      },
      {
        "name": "Bright White",
        "hex": "#ffffff",
        "desc": "Main Stencil Font"
      }
    ],
    "fontTip": "Use the Impact font in bold. Its tall, compressed letters give your channel an aggressive military esports look.",
    "faqs": [
      {
        "q": "How do I format military clan tags like [FAZE] or [TASK] on this Warzone banner?",
        "a": "Type your clan tag enclosed in brackets directly into the gamertag field (e.g. '[FAZE] GHOST_ACTUAL'). The customizer automatically renders high-contrast gunmetal drop shadows for military realism."
      },
      {
        "q": "What makes high-contrast stencil typography ideal for tactical FPS channels?",
        "a": "Impact bold stencil typography cuts through dense background smoke and muzzle flash lighting, ensuring your channel name remains instantly legible in small YouTube search thumbnails."
      },
      {
        "q": "Will my Rebirth Island kill records and Ranked Resurgence stats fit in the safe zone?",
        "a": "Yes! Subtitle lines such as 'REBIRTH ISLAND 30-BOMB • TOP 250 RANKED' are calibrated within the 1546 × 423 px safe boundary, preventing phone interface cut-offs."
      },
      {
        "q": "Can I export this header in lossless format to avoid YouTube's compression blur?",
        "a": "Yes. Our studio exports uncompressed 2560 × 1440 PNG files that bypass YouTube's re-compression artifacts, keeping edge lines sharp across both 1080p monitors and 4K screens."
      },
      {
        "q": "Are there any copyright restrictions when using this banner for paid sponsorships and tournament broadcasts?",
        "a": "None whatsoever. All background artwork is custom-illustrated military action concept art with full commercial monetization and brand sponsorship rights."
      }
    ]
  },
  {
    "id": "twitch-cod",
    "game": "call-of-duty",
    "bannerSlug": "warzone-offline-banner",
    "name": "Warzone Tactical Offline",
    "gameName": "Call of Duty",
    "platform": "twitch",
    "category": "FPS",
    "sub": "STARTING SOON • Mon-Fri 8PM",
    "legacyIds": [
      "twitch-cod"
    ],
    "image": "/twitch_cod.jpg",
    "themeColor": "#de9b35",
    "glow": "shadow-[#de9b35]/10 border-[#de9b35]/30",
    "gamertag": "SPEC_OPS",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#ffffff",
      "textShadow": "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Gunmetal grid overlay for tactical Warzone and search-and-destroy stream schedule announcements.",
    "story": "Tactical gunmetal stream screen designed for Call of Duty Warzone and Ranked Play streamers.",
    "artAnalysis": "Dark military mesh grid with clean stencil typography zones.",
    "palette": [
      {
        "name": "Desert Tan",
        "hex": "#de9b35",
        "desc": "Military Accent"
      },
      {
        "name": "Gunmetal",
        "hex": "#1e293b",
        "desc": "Background"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact font with dark outline for military precision.",
    "faqs": [
      {
        "q": "How do I format my Call of Duty Warzone scrim schedule on this offline card?",
        "a": "Enter your weekly squad scrim hours or tournament timetable (e.g. 'WARZONE RANKED • MON-FRI 8PM EST') in the subtitle field before downloading."
      },
      {
        "q": "Can I use this Warzone graphic as an OBS Starting Soon intermission scene?",
        "a": "Yes! Add the 1920 × 1080 px PNG file directly as an Image Source in OBS Studio or Streamlabs to create tactical stream intro scenes."
      },
      {
        "q": "How does the gunmetal grid texture stay readable behind white gamertag text?",
        "a": "Our generator applies quadruple-direction dark drop shadows (3px solid stroke) behind your letters to ensure high contrast against battleground smoke."
      },
      {
        "q": "Is this Call of Duty stream banner sized properly for Kick and YouTube Gaming?",
        "a": "Yes. The standard 16:9 Full HD (1920 × 1080 px) resolution works universally across Twitch video player banners, Kick offline screens, and YouTube stream breaks."
      },
      {
        "q": "Are commercial monetization rights included for Twitch Affiliates and Partners?",
        "a": "100% royalty-free with full commercial rights for monetized Twitch broadcasts, YouTube live streams, and sponsor overlays."
      }
    ]
  },
  {
    "id": "cs2-tactical",
    "game": "cs2",
    "bannerSlug": "tactical-dust-standoff-banner",
    "name": "Counter-Strike 2 Tactical Firefight",
    "gameName": "Counter-Strike 2",
    "platform": "youtube",
    "category": "Tactical FPS",
    "sub": "GLOBAL ELITE • 20,000+ Premier Rating",
    "legacyIds": [
      "cs2-tactical",
      "cs2-tactical-v2",
      "cs2-esports-banner"
    ],
    "image": "/banner_cs2_v3.jpg",
    "themeColor": "#f59e0b",
    "glow": "shadow-[#f59e0b]/10 border-[#f59e0b]/30",
    "gamertag": "GLOBAL_ELITE",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fbbf24",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(245, 158, 11, 0.9)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Action-packed tactical squad firefight on desert bomb site with Counter-Terrorists firing M4, AWP sniper, muzzle flash, glowing tracers, & volumetric smoke.",
    "story": "A tense standoff at Bomb Site A on an iconic desert map. Three tactical Counter-Terrorist operators hold the sandstone archway with M4 rifles and AWP snipers amidst orange muzzle flashes, flying bullet tracers, and drifting smoke.",
    "artAnalysis": "Counter-Terrorist operators holding M4 rifles and AWP snipers frame the sandstone archways of the desert bomb site amidst flying bullet tracers. The central pavement area is kept dark and clear of clutter so gold Premier ratings, FACEIT ranks, and esports team tags pop with tournament-grade clarity.",
    "palette": [
      {
        "name": "Premier Gold",
        "hex": "#f59e0b",
        "desc": "Primary Gamertag & Glow"
      },
      {
        "name": "CT Navy",
        "hex": "#1e3a8a",
        "desc": "Tactical Uniform Shade"
      },
      {
        "name": "Bomb Site Crimson",
        "hex": "#ef4444",
        "desc": "Site A Warning Red"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Rating & Subtitle Text"
      }
    ],
    "fontTip": "Use Impact or Orbitron in bold. These heavy fonts capture the high-stakes competitive esports feeling of CS2 Premier matches.",
    "faqs": [
      {
        "q": "How should I display my Premier Rating (20,000+) or FACEIT Level 10 on this CS2 banner?",
        "a": "Type your competitive rating into the subtitle field (e.g. '22,450 PREMIER RATING • FACEIT LVL 10' or 'AWP ENTRY FRAGGER') with glowing Premier Gold (#f59e0b) to match official Valve Major leaderboard graphics."
      },
      {
        "q": "Why is tactical gold and navy typography preferred for competitive esports rosters?",
        "a": "The high-contrast contrast between Premier Gold text and CT Navy drop shadows cuts through desert dust and bomb site smoke, ensuring crisp readability on both smartphone screens and PC monitors."
      },
      {
        "q": "Can I customize this banner for my 5-stack team or collegiate Counter-Strike squad?",
        "a": "Yes! You can format your team tag in brackets (such as '[NAVI] S1MPLE') and add your collegiate roster or tournament schedule in the secondary text layer."
      },
      {
        "q": "How does the safe zone prevent the CT operator and AWP sniper art from covering my handle?",
        "a": "The CT squad and sandstone archways are placed along the outer edges, leaving the central 1546 × 423 px safe zone completely clear for player names and clan tags."
      },
      {
        "q": "Is this CS2 header completely free to download without watermarks or subscription fees?",
        "a": "Yes, 100% free with zero watermarks. You receive an uncompressed 2560 × 1440 4K PNG file with full commercial rights for monetized YouTube channels and Twitch broadcasts."
      }
    ]
  },
  {
    "id": "gta-street",
    "game": "gta-v",
    "bannerSlug": "los-santos-heist-banner",
    "name": "GTA V Los Santos Heist",
    "gameName": "GTA V",
    "platform": "youtube",
    "category": "Open World",
    "sub": "LOS SANTOS • Heist Leader",
    "legacyIds": [
      "gta-street",
      "gta-street-v2",
      "los-santos-sunset-banner"
    ],
    "image": "/banner_gtav_v3.jpg",
    "themeColor": "#10b981",
    "glow": "shadow-[#10b981]/10 border-[#10b981]/30",
    "gamertag": "LOS_SANTOS",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#10b981",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 16px rgba(16, 185, 129, 0.7)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Iconic GTA comic-book panel collage featuring Los Santos skyline sunset, supercars, stunt bikes, heist operators, and high-speed police chases.",
    "story": "Set in the sun-drenched, high-crime streets of Los Santos, this artwork combines Vinewood hills sunsets, exotic supercars, heist crews, and speeding police cruisers in classic comic-book style.",
    "artAnalysis": "Comic-book style action panels featuring Vinewood hills, exotic supercars, stunt bikes, and speeding police cruisers frame the outer borders. A warm dusky Los Santos sunset sky fills the center, giving your channel handle, FiveM roleplay title, or crew name maximum contrast, depth, and retro synthwave style.",
    "palette": [
      {
        "name": "Cash Green",
        "hex": "#10b981",
        "desc": "Heist Money Theme"
      },
      {
        "name": "Vinewood Sunset",
        "hex": "#f43f5e",
        "desc": "Skyline Glow"
      },
      {
        "name": "Neon Cyan",
        "hex": "#00d4ff",
        "desc": "Underglow Accent"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use Impact or Orbitron Italic. They match the street-racing energy of GTA Online and FiveM roleplay communities.",
    "faqs": [
      {
        "q": "Can I customize this banner with my FiveM server name and NoPixel character persona?",
        "a": "Yes! Enter your character's alias or department role (e.g. 'NOPIXEL 4.0 • OFFICER BAIT' or 'LOS SANTOS HEIST CREW LEADER') to give your roleplay streams instant brand identity."
      },
      {
        "q": "What typography captures the vintage Los Santos comic book and Vinewood aesthetic?",
        "a": "Impact bold with stacked black drop shadows and Cash Green (#10b981) fill replicates Rockstar's iconic graphic novel illustration style used across GTA loading screens."
      },
      {
        "q": "How do I add my weekly roleplay streaming schedule and community Discord link?",
        "a": "Use the subtitle line to type your stream days (e.g. 'LIVE MON-FRI 8PM EST • DISCORD.GG/MYCREW'). It renders cleanly below your gamertag inside the mobile safe zone."
      },
      {
        "q": "Does the high-contrast Cash Green outline ensure text legibility over busy heist artwork?",
        "a": "Yes. The customizer applies double-stroke black borders behind the green lettering so your name pops whether viewed against Vinewood sunset skies or police cruiser sirens."
      },
      {
        "q": "Are FiveM content creators allowed to use this channel art for monetized RP streams?",
        "a": "100% yes. All graphics are original digital fan paintings with full commercial broadcast and monetization rights for YouTube, Twitch, Kick, and FiveM server hubs."
      }
    ]
  },
  {
    "id": "twitch-gtav",
    "game": "gta-v",
    "bannerSlug": "los-santos-rp-offline-banner",
    "name": "GTA RP Offline",
    "gameName": "GTA V",
    "platform": "twitch",
    "category": "Roleplay",
    "sub": "OFFLINE • Back at 7PM EST",
    "legacyIds": [
      "twitch-gtav"
    ],
    "image": "/twitch_gtav.jpg",
    "themeColor": "#f472b6",
    "glow": "shadow-[#f472b6]/10 border-[#f472b6]/30",
    "gamertag": "FIVEM_CHIEF",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#f472b6",
      "textShadow": "0 0 10px #f472b6, 0 0 20px #db2777, 0 0 30px #00d4ff",
      "letterSpacing": "0.12em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Los Santos skyline retro purple glow for GTA FiveM roleplay streamer schedules.",
    "story": "Retro synthwave sunset card over the Vinewood skyline designed for FiveM and GTA RP streamers.",
    "artAnalysis": "Dusky purple palm tree silhouettes with vibrant neon underglow for streamer timetables.",
    "palette": [
      {
        "name": "Neon Pink",
        "hex": "#f472b6",
        "desc": "Main Handle"
      },
      {
        "name": "Vice Cyan",
        "hex": "#00d4ff",
        "desc": "Glow Layer"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron Italic for retro 80s synthwave roleplay aesthetics.",
    "faqs": [
      {
        "q": "How do I display my FiveM roleplay character name and department on this screen?",
        "a": "Use the main gamertag box for your character alias (e.g. 'OFFICER_JOHNSON') and the subtitle field for your department or server (e.g. 'NOPLIX RP • PATROL SHIFT 7PM EST')."
      },
      {
        "q": "Can I use this retro Los Santos neon card on Kick and YouTube Gaming?",
        "a": "Yes! The 1920 × 1080 px canvas matches standard 16:9 stream viewports across Twitch, Kick, YouTube, and Facebook Gaming."
      },
      {
        "q": "What OBS scene transitions work best with this purple neon GTA RP backdrop?",
        "a": "A smooth 300ms stinger or fade transition between this offline card and your live gameplay camera creates a seamless retro atmosphere."
      },
      {
        "q": "How do I ensure the pink neon glow doesn't overpower my streaming timetable?",
        "a": "The editor balances the outer neon magenta halo while keeping the central font fill crisp white for maximum mobile legibility."
      },
      {
        "q": "Is this GTA V RP stream graphic watermark-free for partnered content creators?",
        "a": "Yes, zero watermarks and completely free for personal roleplay streams and monetized creator channels."
      }
    ]
  },
  {
    "id": "apex-canyon",
    "game": "apex-legends",
    "bannerSlug": "canyon-predator-banner",
    "name": "Apex Legends Canyon Predator",
    "gameName": "Apex Legends",
    "platform": "youtube",
    "category": "Battle Royale",
    "sub": "PREDATOR RANK • Season 22",
    "legacyIds": [
      "modern-apex",
      "modern-apex-v2"
    ],
    "image": "/banner_apex_v3.jpg",
    "themeColor": "#ff3e3e",
    "glow": "shadow-[#ff3e3e]/10 border-[#ff3e3e]/30",
    "gamertag": "APEX_CHAMP",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#ff3e3e",
      "textShadow": "0 0 16px rgba(255, 62, 62, 0.9), 0 0 32px rgba(234, 88, 12, 0.7)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Cinematic sci-fi legends battleground key art with five dynamic legends in combat stances across a volcanic canyon with glowing lava fissures, dropships, and embers.",
    "story": "Five legends prepare for the final ring standoff in a volcanic canyon. Glowing lava fissures cut through the rocky ground while dropships fly through a fiery orange sky filled with embers.",
    "artAnalysis": "Armored legends prepare for the final ring standoff along the left and right volcanic canyon walls. Glowing lava fissures illuminate the lower frame while the central sunset sky provides an open, high-energy backdrop for glowing red and orange gamertags, damage badges, and Predator rank callouts across all screen sizes.",
    "palette": [
      {
        "name": "Predator Crimson",
        "hex": "#ff3e3e",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Volcanic Orange",
        "hex": "#f97316",
        "desc": "Secondary Accent"
      },
      {
        "name": "Heirloom Gold",
        "hex": "#eab308",
        "desc": "Rank Badge"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use Orbitron Italic with a strong glow. The sharp slanted letters match Apex Legends' speed and movement mechanics.",
    "faqs": [
      {
        "q": "How can I showcase my Apex Predator rank badge, 4K Damage badge, or 20-bomb achievement?",
        "a": "Type your competitive stats into the subtitle field (e.g. 'TOP 50 PREDATOR • WRAITH & PATHFINDER MAIN' or '4K DAMAGE 20-BOMB GRINDER') with glowing Predator Crimson (#ff3e3e) to match in-game badges."
      },
      {
        "q": "Why does volcanic crimson and orange lighting suit aggressive movement legend mains?",
        "a": "The fiery volcanic palette mirrors World's Edge lava aesthetics, creating high energy that reflects fast-paced slide-jumping, wall-bouncing, and close-quarters shotgun duels."
      },
      {
        "q": "Will my gamertag stay centered between the flanking dropships on mobile phones?",
        "a": "Yes. The sci-fi dropships and combat legends frame the outer margins, keeping the center 1546 × 423 px safe area wide open so phone users see your full handle without obstruction."
      },
      {
        "q": "Can I use this banner art across both my YouTube channel and Twitch offline screens?",
        "a": "Yes. While this template is optimized for 2560 × 1440 YouTube headers, you can also export and scale the uncompressed file for Twitch offline cards, Twitter banners, and Discord hubs."
      },
      {
        "q": "Is this Apex Legends design 100% royalty-free for ALGS community commentators?",
        "a": "Yes! All digital art is custom-created fan concept work, granting full commercial monetization rights for ALGS watch-parties, tournament casters, and YouTube highlight creators."
      }
    ]
  },
  {
    "id": "twitch-apex",
    "game": "apex-legends",
    "bannerSlug": "predator-offline-banner",
    "name": "Apex Predator Offline",
    "gameName": "Apex Legends",
    "platform": "twitch",
    "category": "Battle Royale",
    "sub": "STREAMING SOON • Predator Grind",
    "legacyIds": [
      "twitch-apex"
    ],
    "image": "/twitch_apex.jpg",
    "themeColor": "#ff3e3e",
    "glow": "shadow-[#ff3e3e]/10 border-[#ff3e3e]/30",
    "gamertag": "PREDATOR_X",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#ff3e3e",
      "textShadow": "0 0 8px #ea580c, 3px 3px 0px #000000",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Volcanic hazard orange background for high-tier Apex Legends competitive stream channels.",
    "story": "Volcanic predator stream screen designed for competitive Apex Legends tournament broadcasters.",
    "artAnalysis": "Fiery orange and carbon slate layout designed for high-contrast stream schedule cards.",
    "palette": [
      {
        "name": "Predator Red",
        "hex": "#ff3e3e",
        "desc": "Main Handle"
      },
      {
        "name": "Lava Orange",
        "hex": "#ea580c",
        "desc": "Energy Glow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron Italic for high-velocity competitive stream graphics.",
    "faqs": [
      {
        "q": "How can I showcase my Apex Legends Predator rank push on this offline screen?",
        "a": "Write your current RP or seasonal goal (e.g. 'ROAD TO APEX PREDATOR • SEASON 22') in the subtitle box with high-voltage orange text glow."
      },
      {
        "q": "Can I use this volcanic World's Edge card as a Streamlabs BRB screen?",
        "a": "Yes! Import the uncompressed 1080p PNG into Streamlabs Desktop as an Image Source for high-intensity bio-hazard intermission scenes."
      },
      {
        "q": "How does the italic velocity font emphasize competitive shooter gameplay?",
        "a": "The angled Orbitron typography with black drop-shadow strokes mimics high-speed movement and tactical telemetry readouts."
      },
      {
        "q": "What resolution does this Apex stream banner export in for Twitch?",
        "a": "It exports in native 1920 × 1080 pixels (Full HD 16:9) to fit Twitch's video player offline banner specifications perfectly."
      },
      {
        "q": "Are there any licensing restrictions when broadcasting Apex tournament scrims?",
        "a": "None. You have full commercial rights to use this banner across tournament streams, clan broadcasts, and monetized VODs."
      }
    ]
  },
  {
    "id": "league-rift",
    "game": "league-of-legends",
    "bannerSlug": "summoners-rift-champions-banner",
    "name": "League of Legends Champions Clash",
    "gameName": "League of Legends",
    "platform": "youtube",
    "category": "MOBA",
    "sub": "CHALLENGER • Mid Lane Carry",
    "legacyIds": [
      "rpg",
      "rpg-v2",
      "summoners-rift-banner"
    ],
    "image": "/banner_league_v3.jpg",
    "themeColor": "#dfc8a5",
    "glow": "shadow-[#ffd8ae]/5 border-[#c8aa6e]/20",
    "gamertag": "SUMMONER_1",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#dfc8a5",
      "textShadow": "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(223, 200, 165, 0.7)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Cinematic MOBA fantasy team splash art featuring champions charging across a ruined stone bridge with fiery shotgun blasts, radiant arcane magic orbs, and nexus energy beams.",
    "story": "Champions charge across a ruined stone bridge on Summoner's Rift. Fiery shotgun blasts, radiant arcane magic orbs, and blue Nexus energy beams clash in an epic 5v5 teamfight.",
    "artAnalysis": "Explosive champion spell effects, fiery shotgun blasts, and arcane orbs frame the left and right stone archways of Summoner's Rift. A luminous blue Nexus energy beam illuminates the center, giving fantasy serif gamertags, lane roles, and Challenger rank badges mythic elegance on desktop and mobile displays.",
    "palette": [
      {
        "name": "Rune Gold",
        "hex": "#dfc8a5",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Arcane Blue",
        "hex": "#38bdf8",
        "desc": "Magic Energy Accent"
      },
      {
        "name": "Noxus Crimson",
        "hex": "#ef4444",
        "desc": "Rank & Badge Accent"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle & Role Text"
      }
    ],
    "fontTip": "Use Georgia or serif typography with subtle gold glow. Its classical fantasy elegance matches League of Legends' mythic champion lore.",
    "faqs": [
      {
        "q": "How do I style my Challenger rank title, lane role (Mid/ADC/Jungle), and summoner name?",
        "a": "Type your summoner name in the main input and add your lane role (e.g. 'CHALLENGER MID LANER • YASUO & AHRI MAIN') in the subtitle box. Choose Rune Gold (#dfc8a5) to replicate the in-game high-ELO client badge."
      },
      {
        "q": "Why do classical serif fonts and golden runic accents match League of Legends lore?",
        "a": "Serif typography (like Georgia) mirrors the parchment text, champion lore tomes, and official LEC/LCK tournament broadcast graphics used throughout Runeterra."
      },
      {
        "q": "Can I add my clash team roster and patch analysis schedule to this banner?",
        "a": "Yes! You can list your tier-1 Clash roster or weekly patch review days (e.g. 'PATCH BREAKDOWNS EVERY WEDNESDAY • CLASH TIER 1') in the secondary subtitle line."
      },
      {
        "q": "How does the composition keep Summoner's Rift champions visible without cluttering text?",
        "a": "The gunslinger, fox mage, and stone golem frame the far left and right archways while the luminous central Nexus beam leaves an open, high-contrast focal area for your summoner name."
      },
      {
        "q": "Can monetized League partner creators use this header art without copyright issues?",
        "a": "Yes. All artwork is custom fantasy digital concept art with full commercial broadcast and monetization rights for YouTube, Twitch, and esports team portals."
      }
    ]
  },
  {
    "id": "twitch-league",
    "game": "league-of-legends",
    "bannerSlug": "challenger-offline-banner",
    "name": "League Challenger Offline",
    "gameName": "League of Legends",
    "platform": "twitch",
    "category": "MOBA",
    "sub": "STARTING SOON • Mid Lane Carry",
    "legacyIds": [
      "twitch-league"
    ],
    "image": "/twitch_league.jpg",
    "themeColor": "#dfc8a5",
    "glow": "shadow-[#ffd8ae]/5 border-[#c8aa6e]/20",
    "gamertag": "MID_LANE_GOD",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#dfc8a5",
      "textShadow": "0 2px 4px #78350f, 0 0 12px rgba(223, 200, 165, 0.4)",
      "letterSpacing": "0.2em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Magical golden rune lines for League of Legends rank push schedules.",
    "story": "Golden arcane rune stream screen for League of Legends Challenger rank push broadcasts.",
    "artAnalysis": "Intricate gold rune borders over dark fantasy stone textures.",
    "palette": [
      {
        "name": "Rune Gold",
        "hex": "#dfc8a5",
        "desc": "Main Handle"
      },
      {
        "name": "Amber Glow",
        "hex": "#78350f",
        "desc": "Shadow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Georgia Serif with wide letter spacing for mythic fantasy elegance.",
    "faqs": [
      {
        "q": "How do I format my League of Legends rank and main role on this Twitch banner?",
        "a": "Type your summoner name in the primary field and your main role and rank (e.g. 'CHALLENGER MID • STREAMING CLASH CUPS') in the secondary subtitle field."
      },
      {
        "q": "Can I use this golden rune stream art on both Twitch and Kick channels?",
        "a": "Yes! Standard 1920 × 1080 px dimensions ensure seamless display across Twitch video players, Kick channel headers, and Discord stream pings."
      },
      {
        "q": "Why does classical serif typography work so well for League of Legends streams?",
        "a": "Refined serif letterforms with soft golden ambient glows match the mythic fantasy lore and orchestral aesthetic of Runeterra."
      },
      {
        "q": "How do I update my weekly Clash tournament schedule on this banner?",
        "a": "Re-open this template in our editor, type your new tournament schedule, and download an updated 1080p PNG in under 15 seconds."
      },
      {
        "q": "Is this League of Legends stream artwork royalty-free for content creators?",
        "a": "100% royalty-free. All artwork is original fan concept art with full commercial rights for stream monetization."
      }
    ]
  },
  {
    "id": "rocket-league",
    "game": "rocket-league",
    "bannerSlug": "aerial-stadium-clash-banner",
    "name": "Rocket League Aerial Stadium Clash",
    "gameName": "Rocket League",
    "platform": "youtube",
    "category": "Sports Action",
    "sub": "GRAND CHAMPION • Boost On",
    "legacyIds": [
      "rocket-league",
      "rocket-league-v2",
      "cyber-dome-banner"
    ],
    "image": "/banner_rocketleague_v3.jpg",
    "themeColor": "#00d4ff",
    "glow": "shadow-[#00d4ff]/10 border-[#00d4ff]/30",
    "gamertag": "AERO_DRIFT",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#00d4ff",
      "textShadow": "0 0 16px rgba(0, 212, 255, 0.9), 0 0 32px rgba(249, 115, 22, 0.7)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "High-octane rocket-powered cars in mid-air aerial collision around an explosive metallic game ball inside a futuristic sports stadium arena.",
    "story": "Rocket-powered cars launch into a mid-air aerial freestyle inside a packed neon sports stadium. Boost trails blaze in blue and orange as cars collide around an explosive metallic game ball.",
    "artAnalysis": "High-octane rocket cars and stadium floodlights frame the outer edges, creating dynamic aerial motion blur around the metallic game ball. The central stadium dome is kept dark and clear of clutter so electric cyan and orange boost gamertags glow with sharp readability against the arena crowd.",
    "palette": [
      {
        "name": "Nitro Cyan",
        "hex": "#00d4ff",
        "desc": "Blue Team Boost"
      },
      {
        "name": "Flame Orange",
        "hex": "#f97316",
        "desc": "Orange Team Boost"
      },
      {
        "name": "Grand Champ Purple",
        "hex": "#a855f7",
        "desc": "Rank Accent"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle Text"
      }
    ],
    "fontTip": "Use Orbitron Italic with strong neon glow. Its aerodynamic futuristic curves match high-speed aerial mechanics.",
    "faqs": [
      {
        "q": "How do I feature my Supersonic Legend (SSL) rank and RLCS freestyle credentials?",
        "a": "Type your rank into the subtitle field (e.g. 'SUPERSONIC LEGEND • AIR ROLL FREESTYLER' or 'RLCS OPEN QUALIFIER') and select Nitro Cyan (#00d4ff) or Flame Orange (#f97316) glow accents."
      },
      {
        "q": "Why does slanted aerodynamic typography fit high-speed aerial mechanics?",
        "a": "Orbitron Italic's forward-leaning velocity geometry echoes rocket booster trails and stadium speed telemetry, making high-speed plays feel dynamic right from your channel cover."
      },
      {
        "q": "Can I include my 2v2 competitive duo partner's name or team tag on this banner?",
        "a": "Yes! Format your squad tag (e.g. '[TEAM] AERO & FLIP') in the main input and use the subtitle line to list your 2v2 competitive rank or scrim schedule."
      },
      {
        "q": "How does the 4K UHD resolution prevent nitro boost trail blur on big displays?",
        "a": "Exporting at full 2560 × 1440 uncompressed PNG preserves the crisp particles of metallic game ball collisions and supersonic boost trails even when viewed on 65-inch smart TVs."
      },
      {
        "q": "Is this Rocket League banner free for collegiate esports teams and community casters?",
        "a": "Yes, 100% free with no watermarks and full commercial usage rights for collegiate clubs, community casters, Twitch affiliates, and monetized YouTube channels."
      }
    ]
  },
  {
    "id": "twitch-rocketleague",
    "game": "rocket-league",
    "bannerSlug": "grand-champ-offline-banner",
    "name": "Rocket League Offline",
    "gameName": "Rocket League",
    "platform": "twitch",
    "category": "Sports Action",
    "sub": "BE RIGHT BACK • Grand Champ ELO",
    "legacyIds": [
      "twitch-rocketleague"
    ],
    "image": "/twitch_rocketleague.jpg",
    "themeColor": "#06b6d4",
    "glow": "shadow-[#06b6d4]/10 border-[#06b6d4]/30",
    "gamertag": "BOOST_PRO",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#06b6d4",
      "textShadow": "0 0 15px #06b6d4, 0 0 25px #0891b2, 2px 2px 0px #000000",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Cyber dome stadium lights for Rocket League speed runs and tournament streaming.",
    "story": "High-octane stadium floodlight scene for Rocket League Grand Champion stream channels.",
    "artAnalysis": "Stadium lighting effects and speed streaks framing a clean center text area.",
    "palette": [
      {
        "name": "Electric Aqua",
        "hex": "#06b6d4",
        "desc": "Main Handle"
      },
      {
        "name": "Cyan Halo",
        "hex": "#0891b2",
        "desc": "Glow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron with wide tracking for high-velocity sports branding.",
    "faqs": [
      {
        "q": "How do I display my Rocket League competitive rank and 2v2 team name?",
        "a": "Enter your gamer handle and team rank (e.g. 'GRAND CHAMPION 2 • 2v2 ELO GRIND') in the customizer text fields before exporting."
      },
      {
        "q": "Can I add this cyber stadium banner to OBS Studio for stream intermission?",
        "a": "Yes! Place the 1920 × 1080 px PNG into your OBS scene collection for high-energy intermission and controller cam break scenes."
      },
      {
        "q": "How do the stadium floodlight accents highlight my gamertag?",
        "a": "Electric cyan spotlight beams frame the central text container, ensuring your name stays prominent against the cyber dome arena."
      },
      {
        "q": "What is the recommended font for Rocket League speed runners and freestylers?",
        "a": "Orbitron with cyan neon drop shadows delivers an aerodynamic, high-velocity look that matches supersonic rocket boosts."
      },
      {
        "q": "Is this Rocket League channel graphic free with no subscription required?",
        "a": "Completely free with no hidden fees, subscriptions, or watermarks for personal and commercial gaming broadcasts."
      }
    ]
  },
  {
    "id": "pubg-mobile",
    "game": "pubg-mobile",
    "bannerSlug": "erangel-air-drop-banner",
    "name": "PUBG Mobile Erangel Air Drop",
    "gameName": "PUBG Mobile",
    "platform": "youtube",
    "category": "Battle Royale",
    "sub": "WINNER WINNER • Conqueror Tier",
    "legacyIds": [
      "pubg-mobile",
      "pubg-mobile-v2",
      "air-drop-battlefield-banner"
    ],
    "image": "/banner_pubg_v3.jpg",
    "themeColor": "#eab308",
    "glow": "shadow-[#eab308]/10 border-[#eab308]/30",
    "gamertag": "PUBG_WARLORD",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#facc15",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 16px rgba(234, 179, 8, 0.8)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Tense Erangel sunset battleground illustration featuring Level 3 helmet operators, burning UAZ vehicle, and supply air-drop crate with smoke signals.",
    "story": "A tense final-circle battle on Erangel. Level 3 helmet operators advance past a burning UAZ vehicle toward a red supply air-drop crate billowing red smoke signals under a golden sunset sky.",
    "artAnalysis": "Level 3 helmet operators, a burning UAZ vehicle, and a billowing red supply air-drop crate frame the Erangel coastline on the flanks. The warm golden sunset sky in the center provides clear contrast for bold yellow or white military text, ensuring your Conqueror tier and clan tag remain readable on mobile and PC.",
    "palette": [
      {
        "name": "Winner Gold",
        "hex": "#eab308",
        "desc": "Chicken Dinner Glow"
      },
      {
        "name": "Air Drop Red",
        "hex": "#ef4444",
        "desc": "Crate Smoke Accent"
      },
      {
        "name": "Tactical Slate",
        "hex": "#1e293b",
        "desc": "Helmet Shadow"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle Text"
      }
    ],
    "fontTip": "Use Impact with black outlines. The heavy stencil lettering fits PUBG's realistic survival combat atmosphere.",
    "faqs": [
      {
        "q": "How do I format my Conqueror tier status and squad clan tag on this Erangel banner?",
        "a": "Enter your squad tag in brackets (e.g. '[SOUL] MORTAL') and write your tier status (e.g. 'CONQUEROR TIER • TOP 100 ASIA') in the subtitle box with Winner Gold (#eab308) lettering."
      },
      {
        "q": "Why does heavy stencil lettering with dark shadows work best for military battlegrounds?",
        "a": "Impact font with dual-layer black borders delivers high visibility over battleground smoke, burning UAZ wrecks, and sunset sky gradients on small mobile viewports."
      },
      {
        "q": "Can I add my BGMI / PMGC tournament achievements to the subtitle area?",
        "a": "Yes! You can list achievements like 'PMGC 2025 FINALIST • 1000+ WINS' or 'CUSTOM ROOM SCRIMS HOST' to showcase competitive esports authority."
      },
      {
        "q": "How does the safe zone ensure Level 3 helmet operators don't obscure my gamertag on mobile?",
        "a": "The tactical operators and supply drop crate flank the far left and right edges, leaving the central 1546 × 423 px safe box completely clear for your handle."
      },
      {
        "q": "Are mobile streamers on YouTube and Facebook Gaming free to monetize with this graphic?",
        "a": "Yes, 100% royalty-free with full monetization rights across YouTube Gaming, Facebook Gaming, Rooter, Loco, and Twitch."
      }
    ]
  },
  {
    "id": "twitch-pubg",
    "game": "pubg-mobile",
    "bannerSlug": "tactical-smoke-offline-banner",
    "name": "PUBG Offline",
    "gameName": "PUBG Mobile",
    "platform": "twitch",
    "category": "Royale",
    "sub": "OFFLINE • Winner Winner Dinner",
    "legacyIds": [
      "twitch-pubg"
    ],
    "image": "/twitch_pubg.jpg",
    "themeColor": "#eab308",
    "glow": "shadow-[#eab308]/10 border-[#eab308]/30",
    "gamertag": "CHICKEN_DINNER",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#eab308",
      "textShadow": "2px 2px 0px #451a03, -2px -2px 0px #451a03, 0px 4px 8px rgba(0,0,0,0.9)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Tactical military green smoke backdrop for battlegrounds stream schedules.",
    "story": "Tactical military smoke offline screen for PUBG streamers and tournament competitors.",
    "artAnalysis": "Olive green and amber smoke textures framing clean stencil typography.",
    "palette": [
      {
        "name": "Gold Winner",
        "hex": "#eab308",
        "desc": "Main Handle"
      },
      {
        "name": "Dark Shadow",
        "hex": "#451a03",
        "desc": "Drop Shadow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact font with dark outline for military survival aesthetics.",
    "faqs": [
      {
        "q": "How do I format my PUBG Mobile Conqueror tier and squad tag on this header?",
        "a": "Type your squad alias and competitive rank (e.g. 'CONQUEROR SQUAD • PMGC SCRIMS 9PM') in the high-contrast yellow text fields."
      },
      {
        "q": "Can I use this tactical smoke graphic as a stream countdown screen in OBS?",
        "a": "Yes! Add the 1080p image source into OBS Studio and overlay a live countdown timer widget for professional stream intros."
      },
      {
        "q": "How does the military camouflage contrast improve legibility on mobile devices?",
        "a": "Deep earth-brown outlines behind vibrant Winner Winner gold text ensure clear readability even on small smartphone screens."
      },
      {
        "q": "What resolution does this PUBG Mobile offline screen export in?",
        "a": "It renders at lossless 1920 × 1080 pixels (16:9 Full HD) for crisp display on desktop monitors and mobile Twitch apps."
      },
      {
        "q": "Is this PUBG banner safe to use on monetized YouTube and Twitch live streams?",
        "a": "Yes, 100% royalty-free with full commercial monetization rights for esports players and gaming streamers."
      }
    ]
  },
  {
    "id": "clash-of-clans",
    "game": "clash-of-clans",
    "bannerSlug": "clan-war-siege-banner",
    "name": "Clash of Clans Clan War Siege",
    "gameName": "Clash of Clans",
    "platform": "youtube",
    "category": "Strategy",
    "sub": "TOWN HALL 16 • Clan Leader",
    "legacyIds": [
      "clash-of-clans",
      "clash-of-clans-v2",
      "fortress-clan-banner"
    ],
    "image": "/banner_coc_v3.jpg",
    "themeColor": "#f59e0b",
    "glow": "shadow-[#f59e0b]/10 border-[#f59e0b]/30",
    "gamertag": "TOWN_HALL_16",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fbbf24",
      "textShadow": "3px 3px 0px #78350f, -3px -3px 0px #78350f, 0 0 20px rgba(245, 158, 11, 0.8)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Isometric fantasy siege illustration featuring Town Hall 12, Golems, Barbarian King, Archer Queen, Dragons, Wizards, and lightning strikes.",
    "story": "An epic Clan War attack underway! Giant Golems, the Barbarian King, and the Archer Queen storm a fortified village while Dragons and Wizards summon lightning strikes from the sky.",
    "artAnalysis": "The Barbarian King, Archer Queen, giant Golems, and fiery defense towers frame the outer boundaries of the village during a full-scale siege. The starry night sky above the village leaves ample room for bold cartoon clan tags, Town Hall levels, and war leader titles to shine brightly on all devices.",
    "palette": [
      {
        "name": "Gold Star",
        "hex": "#f59e0b",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Elixir Pink",
        "hex": "#ec4899",
        "desc": "Troop Energy Accent"
      },
      {
        "name": "Dark Elixir",
        "hex": "#7c3aed",
        "desc": "Hero Magic Accent"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle & Clan Tag"
      }
    ],
    "fontTip": "Use Impact with layered dark amber drop shadows. The bold cartoon lettering captures the playful, high-energy fantasy style of Clash of Clans.",
    "faqs": [
      {
        "q": "How do I display my Town Hall 16 level, Clan War League (CWL) division, and clan tag?",
        "a": "Type your clan credentials into the subtitle field (e.g. 'TOWN HALL 16 MAX • CWL CHAMPION I • CLAN: #LEGENDS') in glowing Gold Star (#f59e0b) or Elixir Pink (#ec4899) text."
      },
      {
        "q": "What color styling matches in-game gold resources and Dark Elixir troop upgrades?",
        "a": "Pair Gold Star (#f59e0b) for your main handle with Dark Elixir Purple (#7c3aed) and Elixir Magenta (#ec4899) for subtitle callouts to match Supercell's iconic color hierarchy."
      },
      {
        "q": "Can clan leaders customize this banner to recruit competitive war members on Discord?",
        "a": "Yes! You can format your header with recruitment calls like 'RECRUITING TH15+ WAR FIGHTERS • DISCORD.GG/MYCLAN' to convert channel visitors into active clan members."
      },
      {
        "q": "How does the starry night sky create optimal contrast for cartoon strategy typography?",
        "a": "The dark indigo night sky behind the defensive walls ensures bright yellow and pink text pops with extreme clarity without being obscured by troop battle effects."
      },
      {
        "q": "Can I use this Clash of Clans channel art for monetized attack strategy and base-building guides?",
        "a": "Yes. All artwork is custom fantasy digital concept art, providing 100% royalty-free commercial rights for monetized YouTube channels, Twitch streams, and gaming blogs."
      }
    ]
  },
  {
    "id": "twitch-coc",
    "game": "clash-of-clans",
    "bannerSlug": "fantasy-fortress-offline-banner",
    "name": "Clash of Clans Offline",
    "gameName": "Clash of Clans",
    "platform": "twitch",
    "category": "Strategy",
    "sub": "OFFLINE • Town Hall 15 Live",
    "legacyIds": [
      "twitch-coc"
    ],
    "image": "/twitch_coc.jpg",
    "themeColor": "#fbbf24",
    "glow": "shadow-[#fbbf24]/10 border-[#fbbf24]/30",
    "gamertag": "CLAN_WARLORD",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fbbf24",
      "textShadow": "0 4px 0px #b45309, 0 8px 0px #78350f, 0 12px 16px rgba(0,0,0,0.8)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Epic fantasy cartoon fort village for strategy builders and clan war stream schedules.",
    "story": "Warm cartoon fantasy fortress stream card for Clash of Clans stream schedules.",
    "artAnalysis": "Amber village fortress framing a clean center text area for stream hours.",
    "palette": [
      {
        "name": "Gold Trophy",
        "hex": "#fbbf24",
        "desc": "Main Handle"
      },
      {
        "name": "Amber Wood",
        "hex": "#b45309",
        "desc": "Shadow Extrusion"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact font with 3D stacked amber drop shadows.",
    "faqs": [
      {
        "q": "How do I announce our Clan War Leagues (CWL) timetable on this Twitch banner?",
        "a": "Write your clan name and CWL schedule (e.g. 'TOWN HALL 16 CWL • WAR STARTS 8PM EST') in the subtitle box with golden 3D text."
      },
      {
        "q": "Can I use this Clash of Clans fortress art for YouTube Gaming live streams?",
        "a": "Yes! Standard 1920 × 1080 px dimensions fit YouTube stream starting screens, Twitch offline players, and Discord community pings."
      },
      {
        "q": "How do the multi-tiered 3D drop shadows mimic cartoon village architecture?",
        "a": "Layered amber and dark brown text extrusion creates a chunky, playful 3D effect that matches the fantasy fortress aesthetic."
      },
      {
        "q": "Is this Clash of Clans banner optimized for tablet and mobile streamers?",
        "a": "Yes. Centralized typography guarantees full visibility whether viewers watch on iPads, smartphones, or desktop monitors."
      },
      {
        "q": "Are there any hidden watermarks on the downloaded Clash stream banner?",
        "a": "Zero watermarks. All downloads from GamingBanner are 100% clean and royalty-free for community clan use."
      }
    ]
  },
  {
    "id": "forza-horizon",
    "game": "forza-horizon",
    "bannerSlug": "alpine-mountain-drift-banner",
    "name": "Forza Horizon Alpine Mountain Drift",
    "gameName": "Forza Horizon",
    "platform": "youtube",
    "category": "Racing",
    "sub": "FESTIVAL CHAMPION • Horizon 5",
    "legacyIds": [
      "forza-horizon",
      "forza-horizon-v2",
      "horizon-speed-banner"
    ],
    "image": "/banner_forza_v3.jpg",
    "themeColor": "#f43f5e",
    "glow": "shadow-[#f43f5e]/10 border-[#f43f5e]/30",
    "gamertag": "HORIZON_DRIFT",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#f43f5e",
      "textShadow": "0 0 16px rgba(244, 63, 94, 0.9), 0 0 32px rgba(251, 146, 60, 0.7)"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "High-performance orange hypercar drifting at speed around a winding alpine mountain road with golden autumn trees and snow-capped peaks.",
    "story": "A hypercar powerslides around a mountain hairpin at sunset. Golden autumn trees line the asphalt while snow-capped alpine peaks and festival fireworks glow in the background.",
    "artAnalysis": "A high-performance orange hypercar drifting at speed and snow-capped alpine mountain peaks frame the winding asphalt borders. Warm sunset skies in the center highlight slanted racing typography, speed ratings, and festival champion badges with razor-sharp clarity across mobile and desktop displays.",
    "palette": [
      {
        "name": "Festival Rose",
        "hex": "#f43f5e",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Sunset Gold",
        "hex": "#f59e0b",
        "desc": "Mountain Sky Accent"
      },
      {
        "name": "Speed Cyan",
        "hex": "#00d4ff",
        "desc": "Tire Smoke Highlight"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use Orbitron Italic. The dynamic slanted angles match high-speed drift physics and modern supercar dashboards.",
    "faqs": [
      {
        "q": "How can I highlight my Horizon Festival Champion status, sim wheel setup, and car club?",
        "a": "Type your driving credentials into the subtitle line (e.g. 'FESTIVAL CHAMPION • FANATEC DD PRO WHEEL' or 'TANDEM DRIFT & ENGINE TUNING') with glowing Festival Rose (#f43f5e) styling."
      },
      {
        "q": "Why does italicized digital dashboard typography match realistic supercar drifting?",
        "a": "Orbitron Italic's slanted numbers and sharp angles mimic real-world telemetry displays, digital speedometers, and HUD tachometers used in modern GT racing cars."
      },
      {
        "q": "Can I list my custom engine tuning specs and weekly festival playlist schedule on this header?",
        "a": "Yes! You can specify your weekly festival playlist stream times or share tune codes (e.g. 'SEASONAL TUNES EVERY THURSDAY • DRIFT CLUB #1') in the secondary text input."
      },
      {
        "q": "How does the alpine mountain background preserve clean center focus for driver gamertags?",
        "a": "The powersliding orange hypercar and snow peaks frame the outer curves, while the central dusk sky provides a clean, open safe area calibrated to 1546 × 423 px for phone screens."
      },
      {
        "q": "Is this Forza Horizon banner free for racing sim streamers on YouTube and Twitch?",
        "a": "Yes, 100% free with no watermarks and full commercial monetization rights for sim racing creators, wheel cam streamers, and car review channels."
      }
    ]
  },
  {
    "id": "twitch-forza",
    "game": "forza-horizon",
    "bannerSlug": "mountain-summit-offline-banner",
    "name": "Forza Horizon Offline",
    "gameName": "Forza Horizon",
    "platform": "twitch",
    "category": "Racing",
    "sub": "STARTING SOON • Wheel Cam Setup",
    "legacyIds": [
      "twitch-forza"
    ],
    "image": "/twitch_forza.jpg",
    "themeColor": "#f43f5e",
    "glow": "shadow-[#f43f5e]/10 border-[#f43f5e]/30",
    "gamertag": "WHEEL_DRIFTER",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#f43f5e",
      "textShadow": "0 0 12px #f43f5e, 0 0 24px #be123c",
      "letterSpacing": "0.2em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Scenic mountain racing landscape for racing streams and wheel setup broadcasts.",
    "story": "Scenic alpine drift landscape card for racing wheel streamers and Forza drivers.",
    "artAnalysis": "Warm sunset mountain range framing high-speed racing typography.",
    "palette": [
      {
        "name": "Festival Coral",
        "hex": "#f43f5e",
        "desc": "Main Handle"
      },
      {
        "name": "Deep Ruby",
        "hex": "#be123c",
        "desc": "Shadow Glow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron Italic for aerodynamic supercar aesthetics.",
    "faqs": [
      {
        "q": "How do I display my steering wheel and pedal cam setup schedule on this screen?",
        "a": "Enter your racing rig details (e.g. 'LOGITECH G29 WHEEL CAM • HORIZON FESTIVAL 5') in the secondary text input with rose neon text."
      },
      {
        "q": "Can I use this scenic alpine mountain artwork as a stream starting scene in OBS?",
        "a": "Yes! Import the 1080p image into OBS Studio to create atmospheric starting scenes before your racing simulator stream begins."
      },
      {
        "q": "How does the italic velocity font complement racing and drifting broadcasts?",
        "a": "Slanted sports typography with glowing rose outlines conveys speed and precision timing across high-octane racing streams."
      },
      {
        "q": "What export format is used for this Forza Horizon stream card?",
        "a": "It exports as an uncompressed 24-bit PNG file at 1920 × 1080 pixels, eliminating compression noise on high-DPI displays."
      },
      {
        "q": "Is this Forza stream banner licensed for commercial esports racing broadcasts?",
        "a": "Yes, full commercial rights are included for competitive sim racers, Twitch Affiliates, and automotive content creators."
      }
    ]
  },
  {
    "id": "asphalt-9",
    "game": "asphalt-9",
    "bannerSlug": "times-square-night-drift-banner",
    "name": "Asphalt 9 Times Square Night Drift",
    "gameName": "Asphalt 9",
    "platform": "youtube",
    "category": "Racing",
    "sub": "LEGENDS DIVISION • Nitro On",
    "legacyIds": [
      "asphalt-9",
      "asphalt-9-v2",
      "neon-legends-banner"
    ],
    "image": "/banner_asphalt_v3.jpg",
    "themeColor": "#ec4899",
    "glow": "shadow-[#ec4899]/10 border-[#ec4899]/30",
    "gamertag": "ASPHALT_LEGEND",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#f472b6",
      "textShadow": "3px 3px 0px #831843, -3px -3px 0px #831843, 0 0 20px rgba(236, 72, 153, 0.9)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "High-octane night street race through Times Square featuring a blue hypercar drifting on wet asphalt with sparks, police pursuits, and neon billboards.",
    "story": "A hypercar drifts through Times Square at midnight on wet, reflective asphalt. Shockwave nitro flames erupt from the exhaust while neon skyscrapers and police pursuit lights reflect in the rain.",
    "artAnalysis": "A blue hypercar drifting on wet asphalt amidst nitro shockwave flames and neon Times Square skyscrapers frame the outer edges of the scene. The dark reflective asphalt in the center creates a high-contrast canvas for glowing magenta and cyan arcade speed gamertags and tournament ratings.",
    "palette": [
      {
        "name": "Nitro Magenta",
        "hex": "#ec4899",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Shockwave Cyan",
        "hex": "#00d4ff",
        "desc": "Nitro Flame Accent"
      },
      {
        "name": "Midnight Navy",
        "hex": "#0f172a",
        "desc": "Dark Asphalt Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle Text"
      }
    ],
    "fontTip": "Use Impact or Orbitron Italic with dual pink and cyan drop shadows for an authentic neon arcade racing look.",
    "faqs": [
      {
        "q": "How do I show off my Legends Division ranking, garage level, and club leaderboard status?",
        "a": "Type your club credentials into the subtitle input (e.g. 'LEGENDS DIVISION • GARAGE LVL 18 • TOP 50 CLUB') with glowing Nitro Magenta (#ec4899) and Shockwave Cyan (#00d4ff) neon outlines."
      },
      {
        "q": "Why do dual magenta and cyan neon drop shadows capture high-speed arcade drift racing?",
        "a": "The high-voltage pink and cyan contrast mirrors Times Square neon reflections, nitro flame bursts, and police pursuit strobe effects seen during multiplayer street races."
      },
      {
        "q": "Can I customize this banner for competitive multiplayer tournaments and car review guides?",
        "a": "Yes! Format your channel's focus (e.g. 'CAR REVIEWS & NITRO RUNS • MULTIPLAYER TOP 100') in the secondary text layer to instantly communicate your racing niche to new subscribers."
      },
      {
        "q": "How does the wet Times Square asphalt texture keep neon gamertags sharp on mobile?",
        "a": "The dark rain-slicked pavement in the center acts as a natural backdrop, allowing high-contrast neon text inside the 1546 × 423 px safe box to remain readable without clashing with background buildings."
      },
      {
        "q": "Are mobile racing creators allowed to use this artwork for monetized video uploads?",
        "a": "100% yes. All artwork on GamingBanner.com is custom digital art with full commercial rights for monetized YouTube channels, Twitch streams, and competitive mobile racing leagues."
      }
    ]
  },
  {
    "id": "twitch-asphalt",
    "game": "asphalt-9",
    "bannerSlug": "neon-drift-offline-banner",
    "name": "Asphalt Offline",
    "gameName": "Asphalt 9",
    "platform": "twitch",
    "category": "Racing",
    "sub": "BE RIGHT BACK • Custom Lobby Runs",
    "legacyIds": [
      "twitch-asphalt"
    ],
    "image": "/twitch_asphalt.jpg",
    "themeColor": "#ec4899",
    "glow": "shadow-[#ec4899]/10 border-[#ec4899]/30",
    "gamertag": "NITRO_KING",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#ec4899",
      "textShadow": "0 0 8px #db2777, 0 0 16px #4a044e, 3px 3px 0px #000",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Vibrant neon city drift backdrop for street arcade racing streams.",
    "story": "Neon street drift stream screen for Asphalt arcade racers and esports drivers.",
    "artAnalysis": "Vibrant neon pink and purple city skyline framing stream schedule text.",
    "palette": [
      {
        "name": "Neon Pink",
        "hex": "#ec4899",
        "desc": "Main Handle"
      },
      {
        "name": "Deep Magenta",
        "hex": "#db2777",
        "desc": "Glow Layer"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact font with bold neon magenta glow.",
    "faqs": [
      {
        "q": "How do I showcase our Asphalt Legends club recruitment info on this Twitch banner?",
        "a": "Add your club tag and daily milestone goal (e.g. 'LEGENDS CLUB TOP 100 • DAILY MILESTONES') in the glowing magenta text boxes."
      },
      {
        "q": "Can I use this Times Square neon drift scene for intermission breaks in OBS?",
        "a": "Yes! Place the 1920 × 1080 px image source into OBS Studio or Streamlabs Desktop for high-energy arcade stream breaks."
      },
      {
        "q": "How does the neon magenta city lighting enhance nighttime stream aesthetics?",
        "a": "Vibrant pink and purple reflections against wet asphalt create an electrifying cyberpunk atmosphere for arcade racing fans."
      },
      {
        "q": "What dimensions are recommended when uploading to Twitch Creator Dashboard?",
        "a": "Upload at 1920 × 1080 pixels under Settings > Channel > Brand > Video Player Banner for optimal full-screen scaling."
      },
      {
        "q": "Are all Asphalt 9 stream banners completely free to download?",
        "a": "Yes! 100% free with no subscriptions, watermark restrictions, or download limits."
      }
    ]
  },
  {
    "id": "genshin-impact",
    "game": "genshin-impact",
    "bannerSlug": "teyvat-archons-clash-banner",
    "name": "Genshin Impact Teyvat Archons",
    "gameName": "Genshin Impact",
    "platform": "youtube",
    "category": "RPG",
    "sub": "TEYVAT EXPLORER • AR 60",
    "legacyIds": [
      "genshin-impact",
      "genshin-impact-v2",
      "teyvat-meadow-banner"
    ],
    "image": "/banner_genshin_v3.jpg",
    "themeColor": "#38bdf8",
    "glow": "shadow-[#38bdf8]/10 border-[#38bdf8]/30",
    "gamertag": "TEYVAT_TRAVELER",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#fde047",
      "textShadow": "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(56, 189, 248, 0.9)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Lineup of six anime fantasy heroes on a cliff overlook with elemental abilities against a vast panoramic landscape of mountains, harbors, pagodas, and windmills under a twilight sky.",
    "story": "A party of anime heroes stands atop a scenic cliff overlooking the continent of Teyvat. Elemental energy shimmers around them as pagodas, windmills, and distant celestial islands glow under a starry twilight sky.",
    "artAnalysis": "A party of anime fantasy heroes on a scenic cliff overlook with elemental abilities frames the mountains, harbors, and distant pagodas. The starry twilight sky in the center leaves generous room for golden serif traveler names, Adventure Rank numbers, and spiral abyss milestones on all screen sizes.",
    "palette": [
      {
        "name": "Primogem Gold",
        "hex": "#fde047",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Anemo Cyan",
        "hex": "#38bdf8",
        "desc": "Elemental Energy Glow"
      },
      {
        "name": "Electro Purple",
        "hex": "#a855f7",
        "desc": "Abyssal Accent"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use Georgia or serif typography with soft golden glow. The elegant fantasy lettering matches Genshin Impact's orchestral and lore-rich world.",
    "faqs": [
      {
        "q": "How should I format my Adventure Rank (AR 60), Spiral Abyss 36-star clears, and Traveler handle?",
        "a": "Type your traveler name in the primary field and enter 'ADVENTURE RANK 60 • SPIRAL ABYSS 36★' into the subtitle field with glowing Primogem Gold (#fde047) typography."
      },
      {
        "q": "Why does golden serif lettering match Genshin Impact's orchestral and celestial fantasy world?",
        "a": "Georgia serif with celestial golden glow echoes the in-game archon quests, lore artifacts, and Hoyoverse's orchestral aesthetic, giving your channel an elegant, premium look."
      },
      {
        "q": "Can I use this banner to advertise Primogem farming guides and character wish livestreams?",
        "a": "Yes! Add text such as 'PRIMOGEM GUIDES & CHARACTER WISHES • NEW PATCH COVERAGE' to attract viewers searching for character build breakdowns and banner pull streams."
      },
      {
        "q": "How does the scenic Teyvat cliff overlook frame the central text without covering anime heroes?",
        "a": "The party of elemental archons and scenic windmills are positioned on the outer flanks, keeping the center 1546 × 423 px safe box completely unobstructed for mobile viewers."
      },
      {
        "q": "Is this Genshin Impact banner royalty-free for Hoyoverse content creators and guides?",
        "a": "Yes, 100% royalty-free with full commercial monetization rights for YouTube guides, Twitch partner livestreams, and Discord community servers."
      }
    ]
  },
  {
    "id": "twitch-genshin",
    "game": "genshin-impact",
    "bannerSlug": "floating-skies-offline-banner",
    "name": "Genshin Impact Offline",
    "gameName": "Genshin Impact",
    "platform": "twitch",
    "category": "RPG",
    "sub": "OFFLINE • Farming Materials",
    "legacyIds": [
      "twitch-genshin"
    ],
    "image": "/twitch_genshin.jpg",
    "themeColor": "#38bdf8",
    "glow": "shadow-[#38bdf8]/10 border-[#38bdf8]/30",
    "gamertag": "TEYVAT_TRAVELER",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#38bdf8",
      "textShadow": "0 0 10px #0284c7, 0 2px 4px rgba(0,0,0,0.8)",
      "letterSpacing": "0.25em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Fantasy anime floating skies for Genshin Impact travelers and wish pulling streams.",
    "story": "Anime fantasy twilight sky stream screen for Genshin Impact streamers and wish pulling events.",
    "artAnalysis": "Soft floating clouds and celestial islands framing elegant fantasy typography.",
    "palette": [
      {
        "name": "Celestial Cyan",
        "hex": "#38bdf8",
        "desc": "Main Handle"
      },
      {
        "name": "Deep Sky",
        "hex": "#0284c7",
        "desc": "Glow Shade"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Georgia Serif with wide letter spacing for anime fantasy elegance.",
    "faqs": [
      {
        "q": "How do I announce our character banner wish-pulling streams on this offline screen?",
        "a": "Type your wish-pulling event (e.g. 'C6 ARCHON WISH PULLS • FRIDAY 7PM EST') in the subtitle field with soft celestial cyan text."
      },
      {
        "q": "Can I use this floating skies artwork for Spiral Abyss Floor 12 clearing broadcasts?",
        "a": "Yes! The serene floating island landscape provides a magical, atmospheric backdrop for competitive Abyss speed-clears."
      },
      {
        "q": "Why is elegant serif typography recommended for Genshin Impact streamers?",
        "a": "Classical serif letterforms with soft azure glows match the majestic fantasy lore and orchestral soundtrack of Teyvat."
      },
      {
        "q": "Does this Genshin offline graphic download without watermarks or compression?",
        "a": "Yes. It downloads as a lossless, watermark-free 1920 × 1080 PNG file ready for immediate Twitch or Kick upload."
      },
      {
        "q": "Can I use this banner for monetized Genshin Impact YouTube and Twitch channels?",
        "a": "100% yes. You receive full commercial broadcasting rights for monetized streams, VODs, and community Discord servers."
      }
    ]
  },
  {
    "id": "roblox-virtual",
    "game": "roblox",
    "bannerSlug": "metaverse-parkour-banner",
    "name": "Roblox Metaverse Parkour",
    "gameName": "Roblox",
    "platform": "youtube",
    "category": "Sandbox",
    "sub": "TOP CREATOR • 1M Visits",
    "legacyIds": [
      "roblox-virtual",
      "roblox-virtual-v2",
      "roblox-parkour-banner"
    ],
    "image": "/banner_roblox_v3.jpg",
    "themeColor": "#3b82f6",
    "glow": "shadow-[#3b82f6]/10 border-[#3b82f6]/30",
    "gamertag": "BLOX_MASTER",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ffffff",
      "textShadow": "3px 3px 0px #1e3a8a, -3px -3px 0px #1e3a8a, 0 0 20px rgba(59, 130, 246, 0.9)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Sprawling Roblox multiverse key art featuring a heroic avatar party on a rocky cliff overlook with city skyline, floating parkour obby, and fantasy kingdom.",
    "story": "A party of colorful blocky avatars stands atop a cliff overlooking a massive virtual world. Floating obstacle courses (obbys), neon city skyscrapers, and fantasy castles stretch into the horizon.",
    "artAnalysis": "Heroic blocky avatars, floating obstacle course (obby) islands, and futuristic city skyscrapers frame the outer multiverse horizon. Bright open skies in the center allow chunky drop-shadowed gamertags, studio developer credits, and visit counters to pop with playful energy on all screen sizes.",
    "palette": [
      {
        "name": "Blox Blue",
        "hex": "#3b82f6",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Obby Yellow",
        "hex": "#facc15",
        "desc": "Star & Badge Accent"
      },
      {
        "name": "Admin Crimson",
        "hex": "#ef4444",
        "desc": "Live Accent"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle Text"
      }
    ],
    "fontTip": "Use Inter or heavy sans-serif with thick black or navy outlines. The chunky comic lettering captures Roblox's fun, creative multiplayer spirit.",
    "faqs": [
      {
        "q": "How do I showcase my Roblox studio group name, Blox Fruits level, or top obby game visits?",
        "a": "Type your achievements into the subtitle field (e.g. 'BLOX FRUITS MAX LEVEL 2550 • 1M+ VISITS' or 'STUDIO GAME DEV & OBBY BUILDER') in vibrant Obby Yellow (#facc15) or Blox Blue (#3b82f6)."
      },
      {
        "q": "Why does bold 3D blocky comic typography resonate with the Roblox metaverse audience?",
        "a": "Thick sans-serif fonts (like Inter Heavy) paired with stacked navy 3D drop shadows match the playful voxel geometry and user-generated games across Roblox."
      },
      {
        "q": "Can I add my developer portfolio link and weekly update schedule to this header?",
        "a": "Yes! You can add text lines like 'NEW MINI-GAMES EVERY SATURDAY • ROBLOX.COM/GROUPS/...' to drive group members and recurring players to your game experiences."
      },
      {
        "q": "How does the central safe area protect avatar text from mobile clipping in the Roblox YouTube app?",
        "a": "Floating obby platforms and avatar heroes frame the outer borders, ensuring your name and studio credits stay centered within the 1546 × 423 px safe box on phones."
      },
      {
        "q": "Are Roblox developers and UGC creators free to use this banner for monetized channels?",
        "a": "Yes, 100% free with full commercial monetization rights for Roblox YouTube creators, Twitch streamers, and developer studio group pages."
      }
    ]
  },
  {
    "id": "twitch-roblox",
    "game": "roblox",
    "bannerSlug": "metaverse-offline-banner",
    "name": "Roblox Offline",
    "gameName": "Roblox",
    "platform": "twitch",
    "category": "Sandbox",
    "sub": "STREAMING SOON • Custom Mini-games",
    "legacyIds": [
      "twitch-roblox"
    ],
    "image": "/twitch_roblox.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "BLOX_STREAMER",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ef4444",
      "textShadow": "4px 4px 0px #7f1d1d, 8px 8px 12px rgba(0,0,0,0.8)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Fun colorful metaverse stream card for Roblox community broadcasts and mini-game streams.",
    "story": "Playful colorful metaverse stream screen for Roblox content creators and community hosts.",
    "artAnalysis": "Chunky 3D block geometry with bold comic-book shadow outlines.",
    "palette": [
      {
        "name": "Roblox Red",
        "hex": "#ef4444",
        "desc": "Main Handle"
      },
      {
        "name": "Dark Crimson",
        "hex": "#7f1d1d",
        "desc": "Shadow Extrusion"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Inter Heavy with 3D drop-shadow for playful cartoon gaming.",
    "faqs": [
      {
        "q": "How do I share our Roblox VIP server codes and community stream times?",
        "a": "Write your private server access code or group name (e.g. 'BLOX FRUITS RAID • VIP SERVER LINK IN CHAT') in the subtitle box."
      },
      {
        "q": "Can I use this colorful metaverse background for YouTube and Kick streams?",
        "a": "Yes! Standard 16:9 Full HD dimensions (1920 × 1080 px) ensure crisp presentation across all streaming platforms."
      },
      {
        "q": "How does the chunky bold font help younger viewers read text easily on mobile?",
        "a": "Heavy sans-serif lettering with thick crimson drop-shadows maximizes letter contrast on compact phone and tablet screens."
      },
      {
        "q": "How quickly can I update my stream schedule when a new game update drops?",
        "a": "Open the template in our web studio, edit your text, and download an updated 1080p banner in less than 30 seconds."
      },
      {
        "q": "Is this Roblox offline screen safe for child-friendly family gaming streams?",
        "a": "Yes! The design is 100% family-friendly, watermark-free, and suitable for all content ratings."
      }
    ]
  },
  {
    "id": "cyberpunk-2077",
    "game": "cyberpunk-2077",
    "bannerSlug": "night-city-mercenary-banner",
    "name": "Cyberpunk 2077 Night City Mercenary",
    "gameName": "Cyberpunk 2077",
    "platform": "youtube",
    "category": "Action RPG",
    "sub": "NIGHT CITY LEGEND • Cyberware Maxed",
    "legacyIds": [
      "cyberpunk-2077",
      "cyberpunk-2077-v2",
      "neon-edgerunner-banner"
    ],
    "image": "/banner_cyberpunk_v3.jpg",
    "themeColor": "#facc15",
    "glow": "shadow-[#facc15]/10 border-[#facc15]/30",
    "gamertag": "CYBER_MERC",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#facc15",
      "textShadow": "3px 3px 0px #06b6d4, -3px -3px 0px #06b6d4, 0 0 24px rgba(250, 204, 21, 0.9)",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Gritty rainy Night City skyline key art featuring a mercenary in a demon Oni jacket with thermal mantis blade and assault rifle on a reflective rooftop platform.",
    "story": "High above a rainy, neon-drenched Night City, a cyber-enhanced mercenary stands on a reflective rooftop. Glowing yellow Oni cyberware flares as flying AV transports cruise between towering megabuildings.",
    "artAnalysis": "A cyber-enhanced mercenary with thermal mantis blades and towering neon megabuildings frame the outer flanks of rainy Night City. The dark reflective rooftop platform in the center creates a high-voltage backdrop for neon yellow and matrix cyan cyberware gamertags without covering character art.",
    "palette": [
      {
        "name": "Cyber Yellow",
        "hex": "#facc15",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Matrix Cyan",
        "hex": "#06b6d4",
        "desc": "Secondary Glow Outline"
      },
      {
        "name": "Neon Magenta",
        "hex": "#ec4899",
        "desc": "Night City Accent"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle & Build Text"
      }
    ],
    "fontTip": "Use Impact or Orbitron Italic with yellow and cyan double shadows. It perfectly captures the gritty high-tech aesthetic of Night City.",
    "faqs": [
      {
        "q": "How do I customize my Netrunner build specs, Sandevistan loadout, or mercenary street cred?",
        "a": "Type your build details into the subtitle input (e.g. 'NETRUNNER OVERCLOCK BUILD • TIER 5++ CYBERWARE' or 'SANDEVISTAN KATANA MERCENARY') with glowing Cyber Yellow (#facc15) and Matrix Cyan (#06b6d4) drop shadows."
      },
      {
        "q": "What neon color combinations best mirror Night City megastructures and in-game cyberware UI?",
        "a": "Electric Cyber Yellow paired with Matrix Cyan and Neon Magenta (#ec4899) captures the high-tech, low-life aesthetic of CD Projekt Red's dystopian metropolis."
      },
      {
        "q": "Can I use this header for Phantom Liberty DLC walk-throughs and lore breakdown channels?",
        "a": "Yes! You can add text callouts like 'PHANTOM LIBERTY LORE & SECRET ENDINGS' to establish instant authority in the cyberpunk RPG community."
      },
      {
        "q": "How does the dark reflective rooftop keep glowing yellow edgerunner gamertags readable?",
        "a": "The wet asphalt and rainy rooftop platform create a high-contrast dark floor in the center, ensuring yellow text glows with maximum sharpness without background noise."
      },
      {
        "q": "Is this Cyberpunk 2077 artwork 100% free with full commercial broadcast rights?",
        "a": "Yes. All graphics are custom digital concept art with full commercial rights for monetized YouTube channels, Twitch streams, and lore blogs."
      }
    ]
  },
  {
    "id": "twitch-cyberpunk",
    "game": "cyberpunk-2077",
    "bannerSlug": "netrunner-offline-banner",
    "name": "Cyberpunk Offline",
    "gameName": "Cyberpunk 2077",
    "platform": "twitch",
    "category": "Action RPG",
    "sub": "STARTING SOON • Netrunner Build",
    "legacyIds": [
      "twitch-cyberpunk"
    ],
    "image": "/twitch_cyberpunk.jpg",
    "themeColor": "#facc15",
    "glow": "shadow-[#facc15]/10 border-[#facc15]/30",
    "gamertag": "NIGHT_CITY_LEGEND",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#facc15",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 15px #facc15",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Vibrant yellow and black cybernetic stream screen for Night City streams and RPG walk-throughs.",
    "story": "Cybernetic high-tech stream screen for Cyberpunk 2077 and futuristic RPG broadcasters.",
    "artAnalysis": "Gritty dark tech textures with high-voltage yellow neon outlines.",
    "palette": [
      {
        "name": "Cyber Yellow",
        "hex": "#facc15",
        "desc": "Main Handle"
      },
      {
        "name": "Tech Black",
        "hex": "#000000",
        "desc": "Contrast Outline"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact with heavy contrast for cyberpunk aesthetic.",
    "faqs": [
      {
        "q": "How do I customize this banner for a Cyberpunk 2077 Netrunner build playthrough?",
        "a": "Enter your playthrough series title (e.g. 'NETRUNNER 2.0 PLAYTHROUGH • VERY HARD') in the high-voltage yellow subtitle field."
      },
      {
        "q": "Can I use this Night City neon scene as an OBS starting stream screen?",
        "a": "Yes! Import the 1920 × 1080 px PNG file into OBS Studio to establish an authentic sci-fi atmosphere before going live."
      },
      {
        "q": "How does the electric yellow neon glow stand out on dark Twitch interfaces?",
        "a": "Cyber yellow (#facc15) provides the highest contrast against dark-mode stream players, immediately catching viewers' attention."
      },
      {
        "q": "What font should I use to match the Cyberpunk dystopian aesthetic?",
        "a": "Impact or Orbitron Bold with black drop-shadow outlines simulates real neon signage across futuristic city skylines."
      },
      {
        "q": "Is this Cyberpunk stream card free for partnered and affiliate streamers?",
        "a": "Yes! 100% free with full commercial broadcasting and monetization rights."
      }
    ]
  },
  {
    "id": "elden-ring",
    "game": "elden-ring",
    "bannerSlug": "shadow-erdtree-throne-banner",
    "name": "Elden Ring Shadow of the Erdtree",
    "gameName": "Elden Ring",
    "platform": "youtube",
    "category": "Action RPG",
    "sub": "LORD OF BLASPHEMY • Erdtree Burned",
    "legacyIds": [
      "elden-ring",
      "elden-ring-v2",
      "erdtree-grace-banner"
    ],
    "image": "/banner_eldenring_v3.jpg",
    "themeColor": "#f59e0b",
    "glow": "shadow-[#f59e0b]/10 border-[#f59e0b]/30",
    "gamertag": "TARNISHED_LORD",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#fde047",
      "textShadow": "0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(245, 158, 11, 0.9), 0 0 40px rgba(239, 68, 68, 0.7)",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Dark fantasy digital painting featuring Messmer the Impaler seated on a gothic throne holding a coiled serpent staff before the burning Erdtree and misty candle-lit ruins.",
    "story": "In the misty realm of Shadow, a demigod sits atop a gothic stone throne with a coiled serpent staff. In the distance, the burning Erdtree casts an ominous golden-amber glow over gothic castle ruins.",
    "artAnalysis": "Messmer the Impaler seated on a gothic stone throne with a coiled serpent staff frames the candle-lit castle ruins on the flanks. The burning Erdtree in the distance casts a mythic golden glow across the center, giving dark fantasy serif titles and Elden Lord handles epic atmosphere across mobile and desktop displays.",
    "palette": [
      {
        "name": "Grace Gold",
        "hex": "#fde047",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Messmer Flame",
        "hex": "#ef4444",
        "desc": "Fire & Crimson Accent"
      },
      {
        "name": "Abyssal Slate",
        "hex": "#1e1b4b",
        "desc": "Dark Shadow Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle & Build Text"
      }
    ],
    "fontTip": "Use Georgia or serif typography with golden glow. The mythic classical lettering matches Elden Ring's epic dark fantasy tone.",
    "faqs": [
      {
        "q": "How can I highlight my Elden Lord title, Rune Level 1 challenge runs, or Shadow of the Erdtree builds?",
        "a": "Type your challenge stats into the subtitle field (e.g. 'ELDEN LORD • RUNE LEVEL 1 NO-HIT RUNS' or 'SHADOW OF THE ERDTREE • BLEED & FLAME BUILD') with glowing Grace Gold (#fde047) typography."
      },
      {
        "q": "Why does classical serif typography with golden grace aura suit dark fantasy Soulslike channels?",
        "a": "Georgia serif paired with warm golden grace glow echoes the ancient runes, item lore descriptions, and somber medieval tone of the Lands Between."
      },
      {
        "q": "Can I customize this banner for no-hit boss guides, speedruns, and lore commentary?",
        "a": "Yes! You can format your header to feature your channel specialty (e.g. 'NO-HIT BOSS GUIDES & EXPEDITIONS • ALL REMEMBRANCES') to establish credibility with Soulslike viewers."
      },
      {
        "q": "How does the atmospheric burning Erdtree background balance with dark gothic ruin borders?",
        "a": "Messmer and gothic ruins frame the outer margins, while the distant burning Erdtree casts a soft golden gradient behind the central safe area (1546 × 423 px) to keep text razor-sharp."
      },
      {
        "q": "Are FromSoftware creators permitted to use this channel art for monetized videos and streams?",
        "a": "Yes, 100% free with full commercial monetization rights for YouTube playthroughs, Twitch speedruns, and community Discord servers."
      }
    ]
  },
  {
    "id": "twitch-eldenring",
    "game": "elden-ring",
    "bannerSlug": "erdtree-offline-banner",
    "name": "Elden Ring Offline",
    "gameName": "Elden Ring",
    "platform": "twitch",
    "category": "Action RPG",
    "sub": "OFFLINE • Rune Level 1 runs",
    "legacyIds": [
      "twitch-eldenring"
    ],
    "image": "/twitch_eldenring.jpg",
    "themeColor": "#fbbf24",
    "glow": "shadow-[#fbbf24]/10 border-[#fbbf24]/30",
    "gamertag": "TARNISHED_KING",
    "textStyle": {
      "fontFamily": "Georgia, serif",
      "color": "#fbbf24",
      "textShadow": "0 2px 8px #78350f, 0 0 20px #b45309",
      "letterSpacing": "0.25em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Dark fantasy Erdtree grace scene for Elden Ring boss runs and Soulslike streams.",
    "story": "Dark fantasy Erdtree stream screen for Soulslike boss challenge streams.",
    "artAnalysis": "Golden Erdtree grace atmospheric lighting over gothic stone ruins.",
    "palette": [
      {
        "name": "Grace Gold",
        "hex": "#fbbf24",
        "desc": "Main Handle"
      },
      {
        "name": "Flame Amber",
        "hex": "#b45309",
        "desc": "Glow Shade"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Georgia Serif with wide spacing for dark fantasy atmosphere.",
    "faqs": [
      {
        "q": "How do I format our Elden Ring challenge run stream schedule on this card?",
        "a": "Write your current challenge rules (e.g. 'RUNE LEVEL 1 NO HIT • MALENIA GRIND') in the subtitle box with warm golden grace glow."
      },
      {
        "q": "Can I use this Erdtree scene for Shadow of the Erdtree DLC playthroughs?",
        "a": "Yes! The luminous golden Erdtree backdrop creates an epic, solemn atmosphere for Land of Shadow stream broadcasts."
      },
      {
        "q": "How does classical serif typography enhance dark fantasy soulslike branding?",
        "a": "Ornate serif lettering with golden halo glows reflects the medieval lore, ancient runes, and somber majesty of the Lands Between."
      },
      {
        "q": "What resolution does this Elden Ring offline screen export in?",
        "a": "It exports as a pristine 1920 × 1080 px Full HD PNG file matching official Twitch video player dimensions."
      },
      {
        "q": "Are commercial stream rights included for soulslike content creators?",
        "a": "100% royalty-free with full commercial rights for monetized Twitch streams, YouTube playthroughs, and Kick broadcasts."
      }
    ]
  },
  {
    "id": "among-us",
    "game": "among-us",
    "bannerSlug": "skeld-spaceship-sabotage-banner",
    "name": "Among Us Skeld Spaceship Sabotage",
    "gameName": "Among Us",
    "platform": "youtube",
    "category": "Party",
    "sub": "IMPOSTOR SUS • Tasks Completed",
    "legacyIds": [
      "among-us",
      "among-us-v2",
      "spaceship-crew-banner"
    ],
    "image": "/banner_amongus_v3.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "RED_IMPOSTOR",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#ef4444",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(239, 68, 68, 0.9)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Sci-fi spaceship corridor illustration featuring crewmates in spacesuits reacting to an emergency sabotage alarm with red flashing warning lights.",
    "story": "Inside the metallic corridors of The Skeld spaceship, a sabotage alarm flashes in emergency red. Astronaut crewmates scramble to complete tasks while an Impostor lurks near the vent.",
    "artAnalysis": "Cartoon space crewmates doing tasks and an impostor lurking in the ventilation shaft frame the metallic spaceship corridors on the sides. The deep starry cosmos and red emergency lighting in the center provide a clean, playful background for colorful creator names, discord handles, and stream roles.",
    "palette": [
      {
        "name": "Impostor Red",
        "hex": "#ef4444",
        "desc": "Emergency Alarm Glow"
      },
      {
        "name": "Crewmate Cyan",
        "hex": "#06b6d4",
        "desc": "Visor Glass Highlight"
      },
      {
        "name": "Space Black",
        "hex": "#0f172a",
        "desc": "Corridor Shadow"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle Text"
      }
    ],
    "fontTip": "Use Impact or Inter with thick black outlines. The chunky comic lettering matches Among Us' playful cartoon party vibe.",
    "faqs": [
      {
        "q": "How do I add funny Impostor callouts, detective IQ scores, or Discord party codes?",
        "a": "Type your custom title into the subtitle input (e.g. 'IMPOSTOR IQ 200 • MODDED TOWN OF US' or 'DISCORD.GG/CREWMATES • DAILY PROX LOBBIES') with glowing Impostor Red (#ef4444) or Crewmate Cyan (#06b6d4) text."
      },
      {
        "q": "Why do thick comic sticker outlines make cartoon spaceship names pop on mobile screens?",
        "a": "The 4-directional black comic outlines create strong separation between bright cartoon lettering and emergency red corridor lighting, preventing visual clutter on small smartphone displays."
      },
      {
        "q": "Can I customize this banner for modded Town of Us lobbies and animated short channels?",
        "a": "Yes! Format your channel's niche (such as 'ANIMATED SHORTS & DETECTIVE GAMEPLAY' or 'MODDED 15-PLAYER PROXIMITY CHAT') to give animation and party game fans an instant reason to subscribe."
      },
      {
        "q": "How does the emergency red alarm ambiance frame the center text without cluttering crewmates?",
        "a": "Crewmates running past vents and doing wiring tasks are positioned on the far left and right edges, keeping the central 1546 × 423 px safe box completely open for your gamertag."
      },
      {
        "q": "Is this Among Us channel art free to download with zero watermarks for gaming creators?",
        "a": "100% free with zero watermarks. You receive an uncompressed 2560 × 1440 4K PNG with full commercial rights for monetized YouTube channels, Twitch streams, and TikTok clips."
      }
    ]
  },
  {
    "id": "twitch-amongus",
    "game": "among-us",
    "bannerSlug": "emergency-offline-banner",
    "name": "Among Us Offline",
    "gameName": "Among Us",
    "platform": "twitch",
    "category": "Party",
    "sub": "BE RIGHT BACK • Who is Impostor?",
    "legacyIds": [
      "twitch-amongus"
    ],
    "image": "/twitch_amongus.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "SUS_IMPOSTOR",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ef4444",
      "textShadow": "3px 3px 0px #000, -3px -3px 0px #000, 3px -3px 0px #000, -3px 3px 0px #000",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Spaceship emergency alarm stream card for Among Us lobbies and party game streams.",
    "story": "Playful spaceship emergency stream card for Among Us streamers and discord party games.",
    "artAnalysis": "Flashing red alarm ambiance with thick comic-sticker character outlines.",
    "palette": [
      {
        "name": "Impostor Red",
        "hex": "#ef4444",
        "desc": "Main Handle"
      },
      {
        "name": "Space Navy",
        "hex": "#0f172a",
        "desc": "Shadow Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Inter Heavy with 4-directional sticker outlines for comic fun.",
    "faqs": [
      {
        "q": "How do I display our Among Us proximity chat lobby rules and stream schedule?",
        "a": "Add your voice lobby times (e.g. 'PROXIMITY CHAT WITH VIEWERS • SUNDAYS 8PM') in the bold red emergency alert subtitle box."
      },
      {
        "q": "Can I use this Skeld spaceship card as an OBS Be Right Back intermission screen?",
        "a": "Yes! Import the 1080p PNG into OBS Studio or Streamlabs to entertain your audience during break times."
      },
      {
        "q": "How does the comic sans-serif font maintain readability against space backgrounds?",
        "a": "Bold rounded lettering with quad-direction black borders ensures text stays crystal clear over deep space nebula textures."
      },
      {
        "q": "Does this template work across both desktop and mobile Twitch viewing apps?",
        "a": "Yes. Centered text safe-zones ensure your crewmate handle is never cropped on smartphone or tablet screens."
      },
      {
        "q": "Is this Among Us stream art free for community gaming lobbies?",
        "a": "Yes! 100% free with zero watermarks and unlimited downloads for all creators."
      }
    ]
  },
  {
    "id": "clash-royale",
    "game": "clash-royale",
    "bannerSlug": "arena-champions-clash-banner",
    "name": "Clash Royale Arena Champions",
    "gameName": "Clash Royale",
    "platform": "youtube",
    "category": "Strategy",
    "sub": "ULTIMATE CHAMPION • Top Ladder",
    "legacyIds": [
      "clash-royale",
      "clash-royale-v2",
      "arena-tower-banner"
    ],
    "image": "/banner_clashroyale_v3.jpg",
    "themeColor": "#3b82f6",
    "glow": "shadow-[#3b82f6]/10 border-[#3b82f6]/30",
    "gamertag": "ROYALE_KING",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fbbf24",
      "textShadow": "3px 3px 0px #1e3a8a, -3px -3px 0px #1e3a8a, 0 0 20px rgba(59, 130, 246, 0.9)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Packed esports stadium arena illustration with King Towers, Mega Knight, Princess, Electro Wizard, and flying spells exploding in mid-air.",
    "story": "Overtime in Legendary Arena! The King Towers fire cannonballs while Mega Knight leaps into the river bridge surrounded by Electro Wizard sparks, Princess arrows, and flying fireballs.",
    "artAnalysis": "Red and blue King Towers, attacking Mega Knights, and flying Electro Wizards frame the outer arena bridge. The illuminated center river creates a vibrant, high-contrast zone for ultimate champion ranks, trophy counts, and deck guide channel handles across all viewing devices.",
    "palette": [
      {
        "name": "Trophy Gold",
        "hex": "#fbbf24",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "King Tower Blue",
        "hex": "#3b82f6",
        "desc": "Tower & Spell Accent"
      },
      {
        "name": "Electro Cyan",
        "hex": "#06b6d4",
        "desc": "Lightning Spark Accent"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle & Deck Text"
      }
    ],
    "fontTip": "Use Impact or heavy sans fonts with gold and blue layered outlines for authentic competitive arena energy.",
    "faqs": [
      {
        "q": "How do I feature my Ultimate Champion rank, 9000 trophy record, or favorite meta deck archetype?",
        "a": "Type your stats into the subtitle field (e.g. 'ULTIMATE CHAMPION • 9000 TROPHIES • 2.6 HOG CYCLE') in glowing Trophy Gold (#fbbf24) and King Tower Blue (#3b82f6)."
      },
      {
        "q": "Why do layered gold and royal blue outlines mirror official CRL esports broadcast graphics?",
        "a": "The double-layer gold over deep royal blue (#1e3a8a) replicates Clash Royale League (CRL) championship trophy banners and in-game card evolution mastery badges."
      },
      {
        "q": "Can I list my ladder push streams, deck guide schedules, and clan tag on this banner?",
        "a": "Yes! Enter details such as 'TOP 200 LADDER PUSH DAILY • CLAN: #ROYAL' into the subtitle input to convert viewers into stream regulars."
      },
      {
        "q": "How does the illuminated arena river keep competitive rank titles sharp across all devices?",
        "a": "The King Towers and attacking troops frame the outer bridge boundaries, leaving the glowing river center clear for player names within the 1546 × 423 px safe area."
      },
      {
        "q": "Are mobile strategy creators free to use this Clash Royale header on monetized channels?",
        "a": "Yes, 100% royalty-free with full monetization rights for YouTube Gaming channels, Twitch streams, and clan Discord servers."
      }
    ]
  },
  {
    "id": "twitch-clashroyale",
    "game": "clash-royale",
    "bannerSlug": "trophy-push-offline-banner",
    "name": "Clash Royale Offline",
    "gameName": "Clash Royale",
    "platform": "twitch",
    "category": "Strategy",
    "sub": "OFFLINE • Midladder Trophy Push",
    "legacyIds": [
      "twitch-clashroyale"
    ],
    "image": "/twitch_clashroyale.jpg",
    "themeColor": "#3b82f6",
    "glow": "shadow-[#3b82f6]/10 border-[#3b82f6]/30",
    "gamertag": "TROPHY_CHAMP",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#3b82f6",
      "textShadow": "0 3px 0px #1d4ed8, 0 6px 0px #1e3a8a, 0 10px 12px rgba(0,0,0,0.8)",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Legendary Arena stream card for Clash Royale trophy push streams and tournament brackets.",
    "story": "Legendary Arena stream screen for Clash Royale ladder push broadcasts.",
    "artAnalysis": "Vibrant royal blue and gold arena lighting framing stream timetable text.",
    "palette": [
      {
        "name": "Royale Blue",
        "hex": "#3b82f6",
        "desc": "Main Handle"
      },
      {
        "name": "Deep Royal",
        "hex": "#1e3a8a",
        "desc": "Shadow Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Inter Heavy with blue 3D drop shadows.",
    "faqs": [
      {
        "q": "How do I showcase our Clash Royale Ultimate Champion trophy push schedule?",
        "a": "Type your ladder goal (e.g. 'ROAD TO ULTIMATE CHAMPION • TOP 1K PUSH') in the royal blue text container."
      },
      {
        "q": "Can I use this arena championship backdrop on Kick and YouTube Gaming?",
        "a": "Yes! The 1920 × 1080 px Full HD resolution fits video player offline containers across all major live streaming platforms."
      },
      {
        "q": "How do royal blue 3D drop shadows improve text contrast on mobile devices?",
        "a": "Layered dark navy (#1e3a8a) text shadows create sharp vertical depth that makes white text pop over bright arena lights."
      },
      {
        "q": "How do I upload this banner to Twitch Studio or OBS?",
        "a": "Download the PNG file and add it as an Image Source in your OBS scene or upload it under Twitch Channel Brand settings."
      },
      {
        "q": "Are there any fees or watermarks for Clash Royale tournament streams?",
        "a": "No fees and no watermarks. You receive a 100% royalty-free graphic for personal and commercial gaming broadcasts."
      }
    ]
  },
  {
    "id": "overwatch-2",
    "game": "overwatch-2",
    "bannerSlug": "rooftop-heroes-clash-banner",
    "name": "Overwatch 2 Rooftop Heroes Clash",
    "gameName": "Overwatch 2",
    "platform": "youtube",
    "category": "Hero Shooter",
    "sub": "GRANDMASTER • Top 500",
    "legacyIds": [
      "overwatch-2",
      "overwatch-2-v2",
      "rooftop-heroes-banner"
    ],
    "image": "/banner_overwatch_v3.jpg",
    "themeColor": "#f97316",
    "glow": "shadow-[#f97316]/10 border-[#f97316]/30",
    "gamertag": "HERO_GRANDMASTER",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#f97316",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(249, 115, 22, 0.9)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Futuristic city payload standoff illustration with cyber ninja, armored tank, flying support hero, and glowing laser beams.",
    "story": "A high-stakes payload push through a futuristic neon city. A cyber ninja and an armored tank hero clash on the front lines while a flying support hero casts healing light beams from above.",
    "artAnalysis": "A dynamic squad of frontline tanks and damage heroes using ultimate abilities frame the futuristic rooftop skyline. The open city sky in the center ensures your Grandmaster rank title, hero main callout, and gamertag glow stand out sharply on all screen sizes.",
    "palette": [
      {
        "name": "Hero Orange",
        "hex": "#f97316",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "Cyber Cyan",
        "hex": "#06b6d4",
        "desc": "Support Beam Accent"
      },
      {
        "name": "Top 500 Gold",
        "hex": "#facc15",
        "desc": "Rank Badge Accent"
      },
      {
        "name": "Clean White",
        "hex": "#ffffff",
        "desc": "Subtitle & Role Text"
      }
    ],
    "fontTip": "Use Impact or Orbitron Italic with bright orange and cyan glow. The sharp angles match Overwatch 2's high-mobility hero action.",
    "faqs": [
      {
        "q": "How should I format my Top 500 leaderboard standing, Grandmaster rank, or hero role main?",
        "a": "Type your competitive specs into the subtitle box (e.g. 'TOP 500 DPS • GENJI & TRACER MAIN' or 'GRANDMASTER 1 SUPPORT CARRY') with glowing Hero Orange (#f97316) and Top 500 Gold (#facc15) accents."
      },
      {
        "q": "Why does dynamic angular lettering with bright orange neon match fast-paced hero action?",
        "a": "Orbitron Italic and Impact bold feature sharp futuristic telemetry angles that match Overwatch's in-game hero select HUD and OWCS esports broadcast overlays."
      },
      {
        "q": "Can I customize this header for my collegiate esports team or OWCS tournament roster?",
        "a": "Yes! Enter your collegiate team tag in brackets (e.g. '[TEAM] AERO') and write your tournament scrim times or role designations in the subtitle field."
      },
      {
        "q": "How does the futuristic rooftop composition keep heroes flanking the safe zone neatly?",
        "a": "Reinhardt, Tracer, and Mercy frame the outer rooftop skyline, keeping the central 1546 × 423 px safe zone completely clear of character clutter on phone screens."
      },
      {
        "q": "Is this Overwatch 2 banner free for YouTube gaming channels and competitive Twitch casters?",
        "a": "Yes, 100% free with full commercial rights for monetized YouTube channels, Twitch streams, and OWCS community watch-parties."
      }
    ]
  },
  {
    "id": "twitch-overwatch",
    "game": "overwatch-2",
    "bannerSlug": "comp-grind-offline-banner",
    "name": "Overwatch Offline",
    "gameName": "Overwatch 2",
    "platform": "twitch",
    "category": "Hero Shooter",
    "sub": "OFFLINE • Comp Grind Tomorrow",
    "legacyIds": [
      "twitch-overwatch"
    ],
    "image": "/twitch_overwatch.jpg",
    "themeColor": "#f99e1a",
    "glow": "shadow-[#f99e1a]/10 border-[#f99e1a]/30",
    "gamertag": "HERO_TANK",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#f99e1a",
      "textShadow": "0 2px 0px #78350f, 0 4px 0px #451a03, 0 8px 12px rgba(0,0,0,0.8)",
      "letterSpacing": "0.05em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Hero shooter futuristic skyline stream card for competitive ranked broadcasts.",
    "story": "Futuristic hero shooter stream screen for Overwatch 2 competitive broadcasters.",
    "artAnalysis": "Vibrant orange and slate city skyline framing stream schedule text.",
    "palette": [
      {
        "name": "Overwatch Orange",
        "hex": "#f99e1a",
        "desc": "Main Handle"
      },
      {
        "name": "Dark Amber",
        "hex": "#78350f",
        "desc": "Shadow Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Impact font with 3D stacked amber drop shadows.",
    "faqs": [
      {
        "q": "How do I format our Overwatch 2 Grandmaster role-queue stream timetable?",
        "a": "Write your main role and rank (e.g. 'GRANDMASTER TANK & DPS • COMP GRIND 8PM') in the secondary text input with orange energy glow."
      },
      {
        "q": "Can I use this rooftop hero clash artwork as an OBS stream intro scene?",
        "a": "Yes! Import the 1080p PNG into OBS Studio or Streamlabs Desktop to build anticipation before your competitive matches begin."
      },
      {
        "q": "How does the Overwatch orange highlight color enhance streamer branding?",
        "a": "The signature warm hero orange (#f97316) creates high-energy contrast that matches competitive hero shooter aesthetics."
      },
      {
        "q": "What is the official Twitch resolution for this Overwatch offline screen?",
        "a": "It renders at exact 1920 × 1080 pixels (16:9 aspect ratio), fully matching Twitch video player banner standards."
      },
      {
        "q": "Is this Overwatch 2 banner safe for monetized esports and tournament streams?",
        "a": "100% royalty-free with full commercial broadcast rights for Twitch Affiliates, Partners, and esports teams."
      }
    ]
  },
  {
    "id": "fifa-soccer",
    "game": "ea-sports-fc",
    "bannerSlug": "stadium-bicycle-volley-banner",
    "name": "EA Sports FC 25 Stadium Volley",
    "gameName": "EA Sports FC 25",
    "platform": "youtube",
    "category": "Sports",
    "sub": "DIVISION RIVALS • Rank 1 FUT Champions",
    "legacyIds": [
      "fifa-soccer",
      "fifa-soccer-v2",
      "ea-fc-banner"
    ],
    "image": "/banner_fifa_v3.jpg",
    "themeColor": "#10b981",
    "glow": "shadow-[#10b981]/10 border-[#10b981]/30",
    "gamertag": "FUT_CHAMPION",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#34d399",
      "textShadow": "3px 3px 0px #064e3b, -3px -3px 0px #064e3b, 0 0 24px rgba(16, 185, 129, 0.9)",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 2560,
      "height": 1440,
      "safeWidth": 1546,
      "safeHeight": 423
    },
    "description": "Photorealistic soccer match key art featuring a high-flying bicycle kick strike towards a glowing match ball under dazzling mega-stadium floodlights and golden confetti.",
    "story": "90th-minute stoppage time in a mega-stadium! A superstar striker executes a mid-air bicycle kick volley toward the top corner as stadium floodlights blaze and golden confetti showers down on the pitch.",
    "artAnalysis": "A superstar striker executing a mid-air bicycle kick volley towards glowing match balls and roaring stadium crowds frame the outer flanks. Atmospheric stadium lighting in the center provides a clean, premium sports broadcast aesthetic for Ultimate Team division handles and club names.",
    "palette": [
      {
        "name": "Pitch Green",
        "hex": "#34d399",
        "desc": "Main Gamertag Glow"
      },
      {
        "name": "FUT Champions Gold",
        "hex": "#f59e0b",
        "desc": "Rank & Reward Accent"
      },
      {
        "name": "Floodlight Cyan",
        "hex": "#00d4ff",
        "desc": "Ball Energy Glow"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Subtitle & Division Text"
      }
    ],
    "fontTip": "Use Impact or bold athletic sans fonts with green and gold shadows. It gives your channel the high-energy look of televised championship soccer.",
    "faqs": [
      {
        "q": "How do I highlight my FUT Champions Rank 1 record (20-0), Division Rivals tier, or Ultimate Team club?",
        "a": "Type your competitive record into the subtitle input (e.g. 'FUT CHAMPIONS RANK 1 • 20-0 RECORD' or 'DIVISION 1 • SQUAD BUILDERS & PACKS') with Pitch Green (#34d399) or FUT Gold (#f59e0b) typography."
      },
      {
        "q": "What athletic font styling and emerald pitch colors capture televised soccer broadcast aesthetics?",
        "a": "Impact bold with Pitch Green (#34d399) and FUT Gold (#f59e0b) drop shadows mirrors televised Premier League, Champions League, and EA Sports FC tournament graphics."
      },
      {
        "q": "Can I include my Weekend League schedule, squad builder tactics, and pack opening times?",
        "a": "Yes! Format your schedule (e.g. 'WEEKEND LEAGUE LIVE SAT & SUN 2PM • REWARDS THURSDAY') in the secondary text layer to keep your community engaged."
      },
      {
        "q": "How does the stadium floodlight lighting maintain high contrast for club names on phone screens?",
        "a": "The striker and stadium stands frame the outer edges, while the dark turf in the center ensures your club handle stays sharp inside the 1546 × 423 px mobile safe zone."
      },
      {
        "q": "Are EA FC creators allowed to use this channel header for monetized YouTube and Twitch broadcasts?",
        "a": "Yes. All graphics are custom digital concept paintings, granting 100% royalty-free commercial rights for monetized YouTube channels, Twitch streams, and esports teams."
      }
    ]
  },
  {
    "id": "twitch-fifa",
    "game": "ea-sports-fc",
    "bannerSlug": "fut-champions-offline-banner",
    "name": "FC 24 Offline",
    "gameName": "EA Sports FC 25",
    "platform": "twitch",
    "category": "Sports",
    "sub": "OFFLINE • FUT Champions Weekend",
    "legacyIds": [
      "twitch-fifa"
    ],
    "image": "/twitch_fifa.jpg",
    "themeColor": "#10b981",
    "glow": "shadow-[#10b981]/10 border-[#10b981]/30",
    "gamertag": "FUT_CHAMP",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#10b981",
      "textShadow": "0 0 10px #10b981, 0 0 20px #047857, 2px 2px 0px #000000",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 1920,
      "height": 1080,
      "safeWidth": 1920,
      "safeHeight": 1080
    },
    "description": "Stadium pitch floodlight scene for FC 25 FUT Champions and Weekend League stream broadcasts.",
    "story": "Soccer stadium floodlight screen for EA FC 25 FUT Champions and Weekend League stream schedules.",
    "artAnalysis": "Green pitch glow and stadium floodlight beams framing stream timetable text.",
    "palette": [
      {
        "name": "Pitch Emerald",
        "hex": "#10b981",
        "desc": "Main Handle"
      },
      {
        "name": "Deep Turf",
        "hex": "#047857",
        "desc": "Shadow Base"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Orbitron or athletic sans for clean soccer broadcast typography.",
    "faqs": [
      {
        "q": "How do I display our EA Sports FC 25 FUT Champions 20-game schedule?",
        "a": "Type your Weekend League hours (e.g. 'FUT CHAMPIONS 20 GAMES • SATURDAY 6PM EST') in the emerald pitch text field."
      },
      {
        "q": "Can I use this soccer stadium floodlight graphic on Kick and YouTube Gaming?",
        "a": "Yes! Standard 1920 × 1080 px dimensions provide clean, uncropped display across all modern live streaming platforms."
      },
      {
        "q": "How do athletic sans-serif fonts elevate soccer broadcast branding?",
        "a": "Clean athletic letterforms with deep green pitch shadows give your stream the polished look of professional television sports coverage."
      },
      {
        "q": "How quickly can I edit this banner when Division Rivals rewards drop?",
        "a": "Open the editor on GamingBanner, update your reward opening hours, and download an updated 1080p PNG in seconds."
      },
      {
        "q": "Is this FC 25 stream graphic free for monetized Twitch and YouTube partners?",
        "a": "Yes, 100% free with zero watermarks and full commercial rights for content creators and esports competitors."
      }
    ]
  },
  {
    "id": "discord-cyber-red",
    "game": "discord",
    "bannerSlug": "cyber-red-mech-banner",
    "name": "Discord Cyber Red Mech",
    "gameName": "Discord",
    "platform": "discord",
    "category": "Mech",
    "sub": "CLAN RECRUITMENT • Level 3 Boosted",
    "legacyIds": [
      "discord-cyber-red",
      "discord-animated-cyber"
    ],
    "image": "/discord_cyber_red.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "CYBER_CORP",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#fca5a5",
      "textShadow": "0 0 10px #ef4444, 0 0 20px #991b1b, 2px 2px 0px #000000",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 960,
      "height": 540,
      "safeWidth": 960,
      "safeHeight": 540
    },
    "description": "Design a high-tech Cyber Red Mech banner for your Discord server header (960×540 px) or Nitro profile. Features glowing crimson circuit traces and armored mecha aesthetic with clean clan announcement typography.",
    "story": "Designed for hardcore gaming syndicates, competitive scrim servers, and tech communities, this crimson mech header features angular armored plating and laser circuitry. The dark carbon central viewport leaves ample space for guild rules, member rankings, and custom server invite tags.",
    "artAnalysis": "Crimson mechanical plating lines the upper and lower edges, leaving a high-contrast charcoal center. The upper 20% margin is darkened to ensure Discord server name titles and dropdown pills remain crisp and legible.",
    "palette": [
      {
        "name": "Crimson Laser",
        "hex": "#ef4444",
        "desc": "Core Mech Glow & Tag"
      },
      {
        "name": "Armored Silver",
        "hex": "#fca5a5",
        "desc": "Gamertag Lettering"
      },
      {
        "name": "Obsidian Steel",
        "hex": "#0f172a",
        "desc": "Background Carbon Plate"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Server Tier Callout"
      }
    ],
    "fontTip": "Use Orbitron Bold Italic or technical sans typefaces with wide letter-spacing (0.12em) and dual-layer crimson drop shadows to match the robotic mecha styling.",
    "faqs": [
      {
        "q": "What Discord server boost level is required to upload this Server Banner?",
        "a": "To upload static server banners (960 × 540 px), your Discord guild requires Server Boost Level 2 (7 boosts). Boost Level 3 unlocks animated GIF banner uploads."
      },
      {
        "q": "Can I use this Cyber Red Mech banner as a Discord Nitro user profile header?",
        "a": "Yes! While formatted at 960 × 540 px for server headers, this graphic scales down seamlessly to 600 × 240 px for Discord Nitro personal profile cards."
      },
      {
        "q": "How do I prevent the Discord server title dropdown from covering my clan name?",
        "a": "Discord overlays your guild name across the top 20% of the banner. Our customizer automatically centers your clan tag within the lower 80% safe zone."
      },
      {
        "q": "What is the maximum file size Discord accepts for banner uploads?",
        "a": "Discord allows banner files up to 10.0 MB. Our generator exports an optimized, lossless PNG file averaging under 1.2 MB for fast community loading."
      },
      {
        "q": "Can I customize the secondary subtitle for scrim schedules or invite links?",
        "a": "Yes! Enter your custom Discord vanity URL, community motto, or weekly tournament schedule directly into the subtitle field before exporting."
      }
    ]
  },
  {
    "id": "discord-gold-tactical",
    "game": "discord",
    "bannerSlug": "gold-tactical-grid-banner",
    "name": "Discord Gold Tactical Grid",
    "gameName": "Discord",
    "platform": "discord",
    "category": "Military",
    "sub": "ELITE ESPORTS • Scrim Hub",
    "legacyIds": [
      "discord-gold-tactical"
    ],
    "image": "/discord_gold_tactical.jpg",
    "themeColor": "#fbbf24",
    "glow": "shadow-[#fbbf24]/10 border-[#fbbf24]/30",
    "gamertag": "TACTICAL_ELITE",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fef08a",
      "textShadow": "3px 3px 0px #000, -1px -1px 0px #78350f, 0 0 15px #fbbf24",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 960,
      "height": 540,
      "safeWidth": 960,
      "safeHeight": 540
    },
    "description": "Create an authoritative Gold Tactical Grid banner for Discord esports servers (960×540 px). Features military telemetry lines, championship gold accents, and bold stencil lettering.",
    "story": "Engineered for competitive FPS clans and tournament organizers across CS2, Warzone, and Apex Legends. This gold-accented tactical grid background creates an elite, professional esports atmosphere for your community lounge.",
    "artAnalysis": "A brushed military titanium mesh with gold telemetry crosshairs and gridlines framing the central community title. Heavy drop-shadow outlines guarantee high legibility over dark Discord UI themes.",
    "palette": [
      {
        "name": "Championship Gold",
        "hex": "#fbbf24",
        "desc": "Primary Clan Text"
      },
      {
        "name": "Desert Amber",
        "hex": "#d97706",
        "desc": "Border Grid Accents"
      },
      {
        "name": "Gunmetal Slate",
        "hex": "#1e293b",
        "desc": "Base Armor Texture"
      },
      {
        "name": "Bright Yellow",
        "hex": "#fef08a",
        "desc": "Highlight Fill"
      }
    ],
    "fontTip": "Use Impact or condensed industrial typefaces with tight letter-spacing and dark amber outlines to give your esports clan an aggressive, disciplined look.",
    "faqs": [
      {
        "q": "Is this Gold Tactical Grid banner optimized for both desktop and mobile Discord apps?",
        "a": "Yes. The 960 × 540 px 16:9 aspect ratio maintains crisp proportions when viewed on Discord desktop client sidebars and the mobile app server overview."
      },
      {
        "q": "How do I upload this banner to my community Discord server?",
        "a": "Navigate to Server Settings > Overview > Server Banner Background > Upload Image, select the downloaded 960x540 PNG file, and click Save Changes."
      },
      {
        "q": "Can I add our tournament schedule or scrim prize pool to the text?",
        "a": "Yes! Use the secondary subtitle box to write your weekly scrim days (e.g., 'DAILY SCRIMS 8PM • $500 WEEKLY CUPS') or clan recruitment requirements."
      },
      {
        "q": "Does this template work as a Discord Invite Splash screen?",
        "a": "Yes! The high-resolution 16:9 composition looks stunning as a Server Invite Splash image for Level 1 boosted Discord communities."
      },
      {
        "q": "Is this tactical graphic watermark-free for public community servers?",
        "a": "100% watermark-free with full commercial rights for esports organizations, community hubs, and verified partnered Discord guilds."
      }
    ]
  },
  {
    "id": "discord-liquid-ice",
    "game": "discord",
    "bannerSlug": "liquid-ice-banner",
    "name": "Discord Liquid Ice",
    "gameName": "Discord",
    "platform": "discord",
    "category": "Tactical",
    "sub": "CHILL LOUNGE • 24/7 Voice",
    "legacyIds": [
      "discord-liquid-ice",
      "discord-animated-frost",
      "discord-frantox-blue"
    ],
    "image": "/discord_liquid_ice.jpg",
    "themeColor": "#0ea5e9",
    "glow": "shadow-[#0ea5e9]/10 border-[#0ea5e9]/30",
    "gamertag": "FROST_SYNDICATE",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "color": "#ffffff",
      "textShadow": "0 0 8px #0ea5e9, 0 0 16px #0369a1, 3px 3px 0px #0f172a",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 960,
      "height": 540,
      "safeWidth": 960,
      "safeHeight": 540
    },
    "description": "Design a sub-zero Liquid Ice Discord banner (960×540 px). Features crystalline frost shards, glacial cyan ambient glow, and high-contrast glowing typography for community gaming servers.",
    "story": "Built for gaming lounges, Minecraft SMP communities, and variety streaming hubs. The crystalline ice textures and refreshing glacial cyan lighting create a cool, inviting aesthetic for active voice channels and community hangouts.",
    "artAnalysis": "Fractal ice crystal shards radiate outward from the borders toward a serene deep navy center, providing a pristine canvas for glowing white and cyan gamertags.",
    "palette": [
      {
        "name": "Glacial Cyan",
        "hex": "#0ea5e9",
        "desc": "Ice Glow Aura"
      },
      {
        "name": "Arctic Blue",
        "hex": "#38bdf8",
        "desc": "Crystalline Shards"
      },
      {
        "name": "Deep Abyssal",
        "hex": "#0c4a6e",
        "desc": "Shadow Base"
      },
      {
        "name": "Pure Snow",
        "hex": "#ffffff",
        "desc": "Primary Text"
      }
    ],
    "fontTip": "Use Orbitron or modern geometric sans fonts with layered cyan text glows (0 0 16px #0ea5e9) to capture the frozen luminescence of arctic glaciers.",
    "faqs": [
      {
        "q": "What makes this Liquid Ice banner ideal for community voice servers?",
        "a": "The calming deep blue and glowing cyan color scheme creates a relaxed, welcoming atmosphere that stands out in Discord server list sidebars."
      },
      {
        "q": "How does this graphic look when downscaled inside Discord profile popouts?",
        "a": "The large, high-contrast central typography remains razor-sharp even when downscaled inside smaller Discord user profile modal cards."
      },
      {
        "q": "Can I customize the font color to match my Discord server role colors?",
        "a": "Yes! Our canvas customizer allows you to pick any custom hex color or neon glow preset to align with your server's VIP role palette."
      },
      {
        "q": "Is the exported PNG file compressed?",
        "a": "No, all downloads from GamingBanner are exported as lossless, high-definition 24-bit PNG files without loss of gradient quality."
      },
      {
        "q": "Can I use this banner for an anime or music Discord server?",
        "a": "Absolutely! The liquid ice crystal aesthetic pairs perfectly with chill lo-fi study servers, anime discussion hubs, and gaming guilds."
      }
    ]
  },
  {
    "id": "discord-synth-clouds",
    "game": "discord",
    "bannerSlug": "synth-horizon-banner",
    "name": "Discord Synth Horizon",
    "gameName": "Discord",
    "platform": "discord",
    "category": "Synthwave",
    "sub": "RETRO LOUNGE • Lo-Fi & Beats",
    "legacyIds": [
      "discord-synth-clouds"
    ],
    "image": "/discord_synth_clouds.jpg",
    "themeColor": "#ec4899",
    "glow": "shadow-[#ec4899]/10 border-[#ec4899]/30",
    "gamertag": "SYNTH_HORIZON",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#fbcfe8",
      "textShadow": "0 0 12px #ec4899, 0 0 24px #4a044e, 3px 3px 0px #000",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 960,
      "height": 540,
      "safeWidth": 960,
      "safeHeight": 540
    },
    "description": "Vibrant Synthwave Horizon Discord banner (960×540 px) featuring retro neon sunset clouds, wireframe perspective grid, and 80s outrun typography.",
    "story": "Inspired by 1980s synthwave aesthetics and retro outrun culture. Designed for music producers, retro gamers, and night owl community servers looking for an electric neon sunset aesthetic.",
    "artAnalysis": "A warm magenta and purple sunset gradient across stylized neon cloudscapes, anchored by an ambient wireframe horizon grid for retro visual depth.",
    "palette": [
      {
        "name": "Neon Magenta",
        "hex": "#ec4899",
        "desc": "Sunset Horizon"
      },
      {
        "name": "Soft Pink",
        "hex": "#fbcfe8",
        "desc": "Title Text Fill"
      },
      {
        "name": "Midnight Violet",
        "hex": "#4a044e",
        "desc": "Deep Contrast Shadow"
      },
      {
        "name": "Laser Orange",
        "hex": "#f97316",
        "desc": "Sunset Rim Glow"
      }
    ],
    "fontTip": "Use heavy sans-serif fonts (like Inter Black or Space Grotesk) with dual magenta (#ec4899) and deep violet drop shadows for that classic retro outrun look.",
    "faqs": [
      {
        "q": "Why is the Synthwave aesthetic so popular for Discord community headers?",
        "a": "The vibrant contrast between neon magenta and dark midnight violet provides eye-catching color pop that looks spectacular in dark-mode Discord clients."
      },
      {
        "q": "Can I add our community radio bot name or lo-fi stream link to the text?",
        "a": "Yes! Use the secondary text line to display your 24/7 music bot command (e.g. '/play lofi chill') or community member count."
      },
      {
        "q": "What dimensions are used when uploading to Discord Server Banner settings?",
        "a": "Upload at 960 × 540 pixels. Discord will automatically fit the image to the 16:9 server banner container without unwanted cropping."
      },
      {
        "q": "Will this banner look clear on high-DPI 4K monitors?",
        "a": "Yes. Our canvas renders with high pixel density, ensuring clean vector outlines and crisp text rendering on Retina and 4K screens."
      },
      {
        "q": "Is there any cost or watermark on this Discord graphic?",
        "a": "Zero cost and zero watermarks. You receive a 100% royalty-free PNG file for personal, server, and commercial usage."
      }
    ]
  },
  {
    "id": "discord-dark-anime",
    "game": "discord",
    "bannerSlug": "dark-crimson-mist-banner",
    "name": "Discord Dark Crimson Mist",
    "gameName": "Discord",
    "platform": "discord",
    "category": "Anime",
    "sub": "SHADOW GUILD • Anime & Gaming",
    "legacyIds": [
      "discord-dark-anime",
      "discord-purple-shorts",
      "discord-phase-freak",
      "discord-crimson-slayer"
    ],
    "image": "/discord_dark_anime.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "SHADOW_REIGN",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#ef4444",
      "textShadow": "0 0 15px #ef4444, 3px 3px 0px #000000",
      "letterSpacing": "0.12em"
    },
    "dimensions": {
      "width": 960,
      "height": 540,
      "safeWidth": 960,
      "safeHeight": 540
    },
    "description": "Create a Dark Crimson Mist Discord banner (960×540 px) for anime fandoms, dark fantasy RPG guilds, and shadow gaming syndicates.",
    "story": "Crafted for dark fantasy clans, Genshin Impact travelers, Elden Ring guilds, and anime discussion servers. Features swirling crimson smoke plumes and ominous obsidian mist for an intense, mysterious aura.",
    "artAnalysis": "Deep obsidian black backdrop with organic swirling crimson smoke trails framing the central gamertag area. Strong edge contrast ensures text remains readable even at low brightness.",
    "palette": [
      {
        "name": "Blood Crimson",
        "hex": "#ef4444",
        "desc": "Mist Aura & Handle"
      },
      {
        "name": "Obsidian Core",
        "hex": "#09090b",
        "desc": "Deep Background"
      },
      {
        "name": "Smoky Charcoal",
        "hex": "#27272a",
        "desc": "Atmospheric Layers"
      },
      {
        "name": "Silver Ash",
        "hex": "#e4e4e7",
        "desc": "Subtitle Details"
      }
    ],
    "fontTip": "Use stylized italicized gaming fonts with wide tracking and deep black drop shadows to give your dark fantasy guild an imposing presence.",
    "faqs": [
      {
        "q": "What types of Discord servers is this Dark Crimson Mist template best for?",
        "a": "It is ideal for anime guilds, dark fantasy RPG communities (Elden Ring, Dark Souls), competitive scrim clans, and esports syndicates."
      },
      {
        "q": "How does the dark theme enhance server readability in Discord?",
        "a": "The deep black-and-crimson contrast integrates natively with Discord's dark UI mode, preventing harsh glare while emphasizing your guild name."
      },
      {
        "q": "Can I use this as a Discord Nitro animated profile backdrop?",
        "a": "Yes, you can customize this graphic and set it as your Nitro profile banner card (600 × 240 px) or upload it to your server."
      },
      {
        "q": "How do I format our guild rank or level on the banner?",
        "a": "Enter your guild level or member requirements in the secondary text input (e.g. 'LEVEL 100 GUILD • RECRUITING TOP 500')."
      },
      {
        "q": "Are commercial rights included for partnered Discord servers?",
        "a": "Yes! All banner downloads come with full commercial rights for community monetization and official server events."
      }
    ]
  },
  {
    "id": "esports-pro",
    "game": "twitter",
    "bannerSlug": "tactical-reticle-pro-header",
    "name": "Twitter Tactical Reticle Pro",
    "gameName": "Twitter / X",
    "platform": "twitter",
    "category": "Esports",
    "sub": "PRO ESPORTS • CS2 & Valorant Roster",
    "legacyIds": [
      "esports-pro",
      "twitter-esports-pro"
    ],
    "image": "/banner_cs2_v3.jpg",
    "themeColor": "#00d4ff",
    "glow": "shadow-[#00d4ff]/10 border-[#00d4ff]/30",
    "gamertag": "PRO_AIM_ACADEMY",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#00d4ff",
      "textShadow": "0 0 10px #00d4ff, 0 0 20px #005f73, 2px 2px 0px #000000",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 1500,
      "height": 500,
      "safeWidth": 1200,
      "safeHeight": 500
    },
    "description": "Design a professional Tactical Reticle Pro gaming header for Twitter/X (1500×500 px). Features telemetry crosshairs, cyan energy glow, and avatar safe-zone alignment for competitive esports athletes.",
    "story": "Designed for competitive FPS creators, pro tournament rosters, and esports organizations across CS2, Valorant, and Warzone. Features crisp telemetry targeting reticles and right-aligned text zones to prevent Twitter avatar overlap.",
    "artAnalysis": "A 3:1 panoramic composition with tactical telemetry grids on the right wing, leaving the bottom-left area uncluttered so your circular Twitter profile photo does not block your name or sponsors.",
    "palette": [
      {
        "name": "Telemetry Cyan",
        "hex": "#00d4ff",
        "desc": "Reticle & Handle Glow"
      },
      {
        "name": "Tactical Cobalt",
        "hex": "#0284c7",
        "desc": "Outer Gridlines"
      },
      {
        "name": "Charcoal Mesh",
        "hex": "#0f172a",
        "desc": "Carbon Background"
      },
      {
        "name": "Pure White",
        "hex": "#ffffff",
        "desc": "Roster Callouts"
      }
    ],
    "fontTip": "Use Orbitron Bold Italic with wide letter-spacing. Keep text shifted toward the center-right to avoid the circular profile photo.",
    "faqs": [
      {
        "q": "What is the recommended Twitter / X header dimension for gamers?",
        "a": "The standard Twitter/X header size is 1500 × 500 pixels (3:1 aspect ratio). Our generator outputs exact 1500x500 PNG files ready for instant upload."
      },
      {
        "q": "How does this header prevent the circular profile photo from blocking my text?",
        "a": "Twitter overlays your circular avatar on the bottom-left corner. This template positions all primary gamertag text in the center and right-hand safe zones."
      },
      {
        "q": "Can I add team sponsors or social media tags to this Twitter banner?",
        "a": "Yes! Use the secondary subtitle field to list your team sponsors, Twitch handle, or YouTube channel link with crisp contrast."
      },
      {
        "q": "Why should I export in PNG instead of JPG for Twitter headers?",
        "a": "Twitter applies aggressive compression to JPG uploads, causing fuzziness around glowing text. Uncompressed PNG files preserve sharp vector lines."
      },
      {
        "q": "Is this Twitter header free for verified gaming creators and esports teams?",
        "a": "Yes, 100% free with no watermarks and full commercial rights for individual creators and professional esports organizations."
      }
    ]
  },
  {
    "id": "stream-schedule",
    "game": "twitter",
    "bannerSlug": "stream-schedule-minimal-header",
    "name": "Twitter Stream Schedule Minimal",
    "gameName": "Twitter / X",
    "platform": "twitter",
    "category": "Minimalist",
    "sub": "STREAMING LIVE • Mon / Wed / Fri 7PM EST",
    "legacyIds": [
      "stream-schedule",
      "twitter-stream-schedule"
    ],
    "image": "/banner_valorant_v3.jpg",
    "themeColor": "#8b5cf6",
    "glow": "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30",
    "gamertag": "TWITCH_STREAMER",
    "textStyle": {
      "fontFamily": "var(--font-sans)",
      "fontWeight": "900",
      "color": "#ffffff",
      "textShadow": "0 0 10px #c084fc, 0 0 20px #8b5cf6, 0 0 30px #6d28d9",
      "letterSpacing": "0.08em"
    },
    "dimensions": {
      "width": 1500,
      "height": 500,
      "safeWidth": 1200,
      "safeHeight": 500
    },
    "description": "Clean, modern Stream Schedule Twitter/X header (1500×500 px). Features a sleek right-side broadcast schedule grid and electric purple neon accents for variety streamers.",
    "story": "Built for variety streamers on Twitch, Kick, and YouTube. Displays your broadcast schedule and social media handles in clean, high-contrast typography that drives profile visitors directly to your live streams.",
    "artAnalysis": "A minimalist deep navy gradient with a glowing vertical divider separating your main creator brand on the left from your weekly streaming timetable on the right.",
    "palette": [
      {
        "name": "Neon Violet",
        "hex": "#8b5cf6",
        "desc": "Accent Glow & Border"
      },
      {
        "name": "Laser Lavender",
        "hex": "#c084fc",
        "desc": "Text Halo"
      },
      {
        "name": "Midnight Indigo",
        "hex": "#1e1b4b",
        "desc": "Background Base"
      },
      {
        "name": "Crisp White",
        "hex": "#ffffff",
        "desc": "Schedule Hours"
      }
    ],
    "fontTip": "Use Inter Black or Space Grotesk for maximum legibility on mobile Twitter feeds where users scroll quickly.",
    "faqs": [
      {
        "q": "How does displaying my stream schedule on Twitter increase live viewership?",
        "a": "When followers visit your Twitter profile, having your live broadcast days clearly displayed in the header informs them exactly when to tune in."
      },
      {
        "q": "How do I update my streaming hours if my weekly schedule changes?",
        "a": "Simply open this template in our free editor, update the timetable text, and download an updated 1500x500 PNG in seconds."
      },
      {
        "q": "Does this template fit both mobile and desktop Twitter layouts?",
        "a": "Yes. All text elements are centered within the 1200 × 400 px safe area, ensuring nothing gets cut off by mobile UI navigation bars."
      },
      {
        "q": "Can I add my Twitch, Kick, and Discord links to the banner?",
        "a": "Yes! Use the subtitle input to write your social handles (e.g. 'TWITCH.TV/NAME • DISCORD.GG/COMMUNITY') with clean spacing."
      },
      {
        "q": "Is there any watermark on the exported Twitter header?",
        "a": "No. All headers exported from GamingBanner are 100% watermark-free and free for personal and commercial branding."
      }
    ]
  },
  {
    "id": "clan-tag",
    "game": "twitter",
    "bannerSlug": "clan-roster-crimson-header",
    "name": "Twitter Clan Roster Crimson",
    "gameName": "Twitter / X",
    "platform": "twitter",
    "category": "Esports",
    "sub": "OFFICIAL ROSTER • Top 10 Scrims",
    "legacyIds": [
      "clan-tag",
      "twitter-clan-tag"
    ],
    "image": "/banner_cod_v3.jpg",
    "themeColor": "#ef4444",
    "glow": "shadow-[#ef4444]/10 border-[#ef4444]/30",
    "gamertag": "CRIMSON_SQUAD",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fca5a5",
      "textShadow": "3px 3px 0px #000, -2px -2px 0px #7f1d1d, 0 0 12px #ef4444",
      "letterSpacing": "0.06em"
    },
    "dimensions": {
      "width": 1500,
      "height": 500,
      "safeWidth": 1200,
      "safeHeight": 500
    },
    "description": "Aggressive Clan Roster Crimson Twitter/X banner (1500×500 px) featuring battle-hardened military carbon textures, crimson speed streaks, and bold esports lettering.",
    "story": "Designed for competitive Warzone, Call of Duty, and Apex Legends clans. The crimson speed flares and heavy military stencil font project dominance and teamwork across social media.",
    "artAnalysis": "Aggressive diagonal crimson energy streaks cutting across a textured carbon-fiber plate, creating strong forward momentum while framing team roster details on the right.",
    "palette": [
      {
        "name": "Blood Red",
        "hex": "#ef4444",
        "desc": "Speed Streaks & Glow"
      },
      {
        "name": "Crimson Silver",
        "hex": "#fca5a5",
        "desc": "Main Handle Fill"
      },
      {
        "name": "Dark Carbon",
        "hex": "#1f1015",
        "desc": "Armor Texture"
      },
      {
        "name": "Deep Maroon",
        "hex": "#7f1d1d",
        "desc": "Outline Shading"
      }
    ],
    "fontTip": "Use Impact or heavy military sans typefaces with deep black drop shadows to give your team roster a rugged, championship-ready appearance.",
    "faqs": [
      {
        "q": "What makes this Crimson Roster template ideal for competitive clan announcements?",
        "a": "The high-energy crimson streaks and heavy industrial typography create an imposing, professional look for team recruitment announcements and match results."
      },
      {
        "q": "How do I upload and align this cover on the Twitter / X web dashboard?",
        "a": "Go to your Profile > Edit profile > tap the camera icon on your header, select the downloaded 1500x500 PNG file, and click Save."
      },
      {
        "q": "Will the diagonal red streaks interfere with our clan tag text?",
        "a": "No. The text layers include multi-layered dark outlines (3px solid drop shadow) that keep letters razor-sharp against textured backgrounds."
      },
      {
        "q": "Can I use this header for Discord server banners as well?",
        "a": "While designed at 1500 × 500 px for Twitter, the 3:1 ratio also works cleanly for Discord Nitro user profile cards."
      },
      {
        "q": "Is this template free for tournament rosters and gaming organizations?",
        "a": "Yes, 100% royalty-free with full commercial rights for esports organizations, streamers, and tournament players."
      }
    ]
  },
  {
    "id": "neon-glow",
    "game": "twitter",
    "bannerSlug": "cyberpunk-neon-kanji-header",
    "name": "Twitter Cyberpunk Neon Kanji",
    "gameName": "Twitter / X",
    "platform": "twitter",
    "category": "Neon",
    "sub": "NIGHT CITY • Netrunner 2077",
    "legacyIds": [
      "neon-glow",
      "twitter-neon-glow"
    ],
    "image": "/banner_cyberpunk_v3.jpg",
    "themeColor": "#facc15",
    "glow": "shadow-[#facc15]/10 border-[#facc15]/30",
    "gamertag": "CYBER_GHOST",
    "textStyle": {
      "fontFamily": "Impact, sans-serif",
      "color": "#fef08a",
      "textShadow": "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 15px #facc15",
      "letterSpacing": "0.1em"
    },
    "dimensions": {
      "width": 1500,
      "height": 500,
      "safeWidth": 1200,
      "safeHeight": 500
    },
    "description": "Futuristic Cyberpunk Neon Twitter/X header (1500×500 px). Features electric yellow cyberware circuits, cyan laser flares, and high-voltage Night City atmosphere.",
    "story": "Inspired by Cyberpunk 2077, anime netrunners, and futuristic sci-fi cityscapes. Designed for technology streamers, FPS gamers, and cyber aesthetic creators looking to make a bold social media impression.",
    "artAnalysis": "High-contrast electric cyber yellow (#facc15) and laser cyan highlights illuminating a dark obsidian metropolis background, providing vibrant edge glow around your gamertag.",
    "palette": [
      {
        "name": "Cyber Yellow",
        "hex": "#facc15",
        "desc": "Night City Glow"
      },
      {
        "name": "Neon Cyan",
        "hex": "#00d4ff",
        "desc": "Circuit Accents"
      },
      {
        "name": "Obsidian Black",
        "hex": "#09090b",
        "desc": "Metropolis Backdrop"
      },
      {
        "name": "Laser Lemon",
        "hex": "#fef08a",
        "desc": "Text Fill Highlight"
      }
    ],
    "fontTip": "Use Impact or Orbitron Bold with electric yellow outer glows (0 0 15px #facc15) to simulate real neon signage against dark city shadows.",
    "faqs": [
      {
        "q": "Why is high-voltage cyber yellow so effective for Twitter header branding?",
        "a": "Electric yellow is the most visible color on dark social media feeds, creating instant visual contrast that grabs user attention immediately."
      },
      {
        "q": "How does the canvas editor handle safe zones for Twitter mobile apps?",
        "a": "Our editor leaves 60px of vertical buffer on top and bottom, ensuring your text remains fully visible even when the Twitter mobile app crops edges."
      },
      {
        "q": "Can I customize the subtitle text with my streaming platform links?",
        "a": "Yes! Write your Twitch or Kick handle in the subtitle field (e.g. 'LIVE EVERY NIGHT AT 9PM • KICK.COM/NAME') with high-contrast text."
      },
      {
        "q": "Does this template support special characters and gaming clan tags?",
        "a": "Yes! You can include brackets, numbers, and special characters (e.g. '[CYBER] GHOST_99') in both the gamertag and subtitle boxes."
      },
      {
        "q": "Are there any hidden fees or subscriptions to download this Twitter header?",
        "a": "Never. GamingBanner is 100% free with unlimited 4K PNG downloads and zero watermarks."
      }
    ]
  },
  {
    "id": "glacial-frost",
    "game": "twitter",
    "bannerSlug": "glacial-frost-speed-header",
    "name": "Twitter Glacial Frost Speed",
    "gameName": "Twitter / X",
    "platform": "twitter",
    "category": "Tactical",
    "sub": "SUB-ZERO • Apex Predator Grind",
    "legacyIds": [
      "glacial-frost",
      "synth-sunset",
      "acid-biohazard",
      "dark-singularity"
    ],
    "image": "/banner_apex_v3.jpg",
    "themeColor": "#06b6d4",
    "glow": "shadow-[#06b6d4]/10 border-[#06b6d4]/30",
    "gamertag": "ARCTIC_PREDATOR",
    "textStyle": {
      "fontFamily": "var(--font-gamertag)",
      "fontStyle": "italic",
      "color": "#e0f7fa",
      "textShadow": "0 0 8px #06b6d4, 0 0 16px #0891b2, 3px 3px 0px #000",
      "letterSpacing": "0.15em"
    },
    "dimensions": {
      "width": 1500,
      "height": 500,
      "safeWidth": 1200,
      "safeHeight": 500
    },
    "description": "Sub-zero Glacial Frost Speed Twitter/X header (1500×500 px) featuring icy crystal shards, arctic cyan telemetry lines, and velocity speed typography for competitive gamers.",
    "story": "Engineered for high-tempo FPS athletes and Apex Legends predators. The arctic ice textures and speed telemetry lines evoke cold, calculated precision and high-tier competitive gameplay.",
    "artAnalysis": "Glacial cyan crystal facets along the right flank with aerodynamic velocity lines drawing the viewer's eye toward your central gamer handle.",
    "palette": [
      {
        "name": "Ice Cyan",
        "hex": "#06b6d4",
        "desc": "Glacial Glow"
      },
      {
        "name": "Arctic Frost",
        "hex": "#e0f7fa",
        "desc": "Text Lettering"
      },
      {
        "name": "Deep Navy",
        "hex": "#031e2b",
        "desc": "Frozen Base"
      },
      {
        "name": "Deep Teal",
        "hex": "#0891b2",
        "desc": "Outer Aura"
      }
    ],
    "fontTip": "Use Orbitron Italic or velocity-angled typography with frosty cyan glows (0 0 16px #0891b2) to reflect high-speed competitive reflexes.",
    "faqs": [
      {
        "q": "What makes this Glacial Frost header stand out on Twitter / X profiles?",
        "a": "The crisp sub-zero cyan glow provides a clean, premium look that looks exceptional on both OLED smartphones and desktop monitors."
      },
      {
        "q": "How do I ensure my gamertag is not hidden by the Twitter profile picture?",
        "a": "All text elements in this template are positioned in the center and right-hand sections, keeping them completely clear of the bottom-left avatar area."
      },
      {
        "q": "Can I use this header for Apex Legends or Overwatch competitive profiles?",
        "a": "Yes! Add your current competitive rank (e.g. 'TOP 500 PREDATOR • SEASON 22') in the subtitle field to showcase your skill tier."
      },
      {
        "q": "How fast is the 1500x500 PNG download generated?",
        "a": "Your customized banner renders locally in your browser and downloads instantly within 1 second—no waiting or server queues."
      },
      {
        "q": "Is this graphic licensed for commercial esports and sponsored streams?",
        "a": "Yes, 100% royalty-free with full commercial licensing rights for streamers, esports players, and content creators."
      }
    ]
  }
];

// Helper Functions
export function getTemplate(game, bannerSlug) {
  return TEMPLATES.find((t) => t.game === game && t.bannerSlug === bannerSlug);
}

export function getTemplateByLegacyId(id) {
  if (!id) return undefined;
  const cleanId = id.toLowerCase().trim();

  // 1. Direct match on ID
  const direct = TEMPLATES.find((t) => t.id.toLowerCase() === cleanId);
  if (direct) return direct;

  // 2. Match on legacyIds
  const legacy = TEMPLATES.find((t) => t.legacyIds && t.legacyIds.some((lid) => lid.toLowerCase() === cleanId));
  if (legacy) return legacy;

  // 3. Match on game name / slug
  const byGame = TEMPLATES.find((t) => t.game.toLowerCase() === cleanId);
  if (byGame) return byGame;

  // 4. Match on bannerSlug
  const bySlug = TEMPLATES.find((t) => t.bannerSlug.toLowerCase() === cleanId);
  if (bySlug) return bySlug;

  return undefined;
}
