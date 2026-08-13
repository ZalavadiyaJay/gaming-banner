// src/data/templates.js
// Centralized Registry for all GamingBanner.com Templates

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
    "story": "Set on a futuristic battlefield like Haven or Bind, this banner captures the tension of an intense overtime clutch. A tactical operative in combat armor stands ready with an energy-shielded rifle, while a swirling purple Radianite portal illuminates a destroyed skyline and glowing crystal shards.",
    "artAnalysis": "The operative and purple portal are positioned on the outer sides to frame the scene. The center is kept as a dark, clean field so your channel name and rank subtitle glow brightly without covering the character art.",
    "palette": [
      {
        "name": "Radianite Cyan",
        "hex": "#00d4ff",
        "desc": "Main Gamertag Glow"
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
    "fontTip": "We recommend using Orbitron in Italic mode. Its sharp angles and futuristic cutouts match the in-game Valorant HUD, killfeed, and agent select screens.",
    "faqs": [
      {
        "q": "What colors look best on this Valorant banner?",
        "a": "Electric cyan (#00d4ff) and bright purple (#7c3aed) provide the highest contrast against the dark skyline and glowing crystals."
      },
      {
        "q": "Will my gamertag get cut off on phone screens?",
        "a": "No. All text is automatically placed within the central 1546 x 423 pixel mobile safe zone, ensuring your name stays fully visible on iPhones and Androids."
      },
      {
        "q": "Can I use this banner on a monetized YouTube channel?",
        "a": "Yes! All artwork is 100% royalty-free with full commercial rights and zero watermarks."
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
        "q": "What is the best resolution for this Twitch offline screen?",
        "a": "This template exports at exactly 1920 x 1080 pixels (16:9 Full HD), which matches Twitch's official video player specification."
      },
      {
        "q": "How do I upload this to Twitch?",
        "a": "In Twitch Creator Dashboard, navigate to Settings > Channel > Brand > Video Player Banner and upload the downloaded PNG file."
      },
      {
        "q": "Can I use this scene in OBS Studio?",
        "a": "Yes! Add it as an Image Source in OBS Studio or Streamlabs for 'Starting Soon' and 'Be Right Back' scenes."
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
    "description": "Wide panoramic Minecraft 4K key art featuring a clean split-screen: a vibrant sunny Overworld castle and cyan gamer on the left, and a fiery Nether fortress with Ghast, gold-armored Steve, and lava oceans on the right.",
    "story": "This artwork captures the two iconic worlds of Minecraft in one panoramic split. On the left is a peaceful green Overworld castle under sunny skies; on the right is a dangerous Nether fortress with glowing lava, flying Ghasts, and a gold-armored adventurer.",
    "artAnalysis": "The split composition creates a balanced frame. The center transition zone is softened with ambient mist, leaving clean space for blocky gamertag text and survival series tags.",
    "palette": [
      {
        "name": "Emerald Green",
        "hex": "#10b981",
        "desc": "Overworld Grass & XP"
      },
      {
        "name": "Diamond Cyan",
        "hex": "#06b6d4",
        "desc": "Tool & Armor Highlights"
      },
      {
        "name": "Nether Lava",
        "hex": "#f97316",
        "desc": "Fiery Accent"
      },
      {
        "name": "Pure Quartz",
        "hex": "#ffffff",
        "desc": "Clean Subtitle Text"
      }
    ],
    "fontTip": "Use JetBrains Mono or blocky monospace fonts with stacked 3D drop shadows to replicate the authentic 16-bit voxel look of Minecraft.",
    "faqs": [
      {
        "q": "How do I make my gamertag look 3D and blocky?",
        "a": "Our editor automatically adds stacked green and dark-slate shadow layers that simulate 3D grass and stone blocks."
      },
      {
        "q": "What should I write in the subtitle for a Minecraft channel?",
        "a": "Popular choices include 'HARDCORE SURVIVAL', '100 DAYS IN MINECRAFT', or 'BUILDING & REDSTONE GUIDES'."
      },
      {
        "q": "Does this banner work for mobile YouTube viewers?",
        "a": "Yes! The characters and castle are positioned on the sides, keeping your name centered inside the phone safe area."
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
        "a": "Yes! You can put your SMP server name, IP address, and streaming hours right in the text inputs."
      },
      {
        "q": "What resolution does this download in?",
        "a": "It downloads as an uncompressed 1920 x 1080 pixel PNG file with zero watermarks."
      },
      {
        "q": "Is it easy to change the text later?",
        "a": "Yes, you can return anytime, type new stream hours, and download an updated banner in seconds."
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
    "artAnalysis": "Hero characters and building ramps frame the left and right borders. The center sky stays dark and open with purple atmospheric lighting, making bold white or neon magenta text pop.",
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
        "q": "How can I show my Victory Crown count?",
        "a": "Add a secondary text layer with '99 CROWN WINS' or 'UNREAL RANK' below your gamertag."
      },
      {
        "q": "Will the Battle Bus be visible on mobile phones?",
        "a": "Yes, the Battle Bus is placed near the top center so it shows on phones and computers alike."
      },
      {
        "q": "Is this banner free for Fortnite clan teams?",
        "a": "Yes, 100% free with full commercial rights and zero watermarks."
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
        "q": "How to set this as my Twitch offline screen?",
        "a": "Upload the downloaded 1920x1080 PNG in Twitch Creator Dashboard under Settings > Channel > Brand."
      },
      {
        "q": "Does this work in OBS Studio?",
        "a": "Yes! Add it as an Image Source for your stream waiting and intermission scenes."
      },
      {
        "q": "Can I add my TikTok and YouTube links?",
        "a": "Yes, you can add multiple text lines to show all your social handles."
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
    "artAnalysis": "Operators and heavy military equipment frame the sides. The center is bathed in warm tactical smoke, creating a high-contrast backdrop for bold, stencil-style lettering.",
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
        "q": "What is the best subtitle text for a Warzone channel?",
        "a": "Popular choices include 'WARZONE META LOADOUTS', 'DAILY REBIRTH CLIPS', or 'SEARCH & DESTROY SPECIALIST'."
      },
      {
        "q": "How do I make my text easy to read over smoke?",
        "a": "Our template includes a built-in dark outline around every letter so your name is always sharp and readable."
      },
      {
        "q": "Can I use this for my Call of Duty clan roster?",
        "a": "Yes! You can add your clan tag (like [FAZE] or [OPTIC]) right in front of your gamertag."
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
        "q": "What resolution is this stream banner?",
        "a": "Official 1920 x 1080 Full HD matching Twitch video players."
      },
      {
        "q": "Can I use this for OBS starting screens?",
        "a": "Yes, add it as a 1080p Image Source in OBS Studio."
      },
      {
        "q": "Are downloads free with no watermark?",
        "a": "Yes, 100% free lossless PNG export."
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
    "artAnalysis": "The CT operators and desert archways frame the left and right borders. The center bomb-site pavement provides an open, dark background where gold or cyan gamertags stand out with pin-sharp clarity.",
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
        "q": "What should I write in the subtitle for a CS2 channel?",
        "a": "Top creators write 'PREMIER RATING: 20K+', 'FACEIT LEVEL 10', or 'DAILY CS2 CLUTCHES & SMOKES'."
      },
      {
        "q": "Will this banner look sharp on 1440p and 4K monitors?",
        "a": "Yes! It exports at true 2560 x 1440 resolution (4K-ready) so it looks crisp on gaming monitors and TV displays."
      },
      {
        "q": "Is this CS2 banner free for YouTube channels?",
        "a": "Yes, completely free with zero watermarks and full commercial streaming rights."
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
    "artAnalysis": "The bustling city action frames the borders, while the dusky sunset sky in the center gives your channel name maximum contrast and style.",
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
        "q": "Is this banner good for FiveM GTA RP streamers?",
        "a": "Yes! Many roleplay creators use this banner by adding their character name and server (e.g. 'NOPIXEL 4.0 RP')."
      },
      {
        "q": "How do I match this banner with my stream overlays?",
        "a": "Use hex codes #10b981 (green) and #f43f5e (pink) for your webcam borders and alert popups."
      },
      {
        "q": "Are downloads free with no watermarks?",
        "a": "Yes, 100% free with full commercial rights for your gaming channel."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px matching Twitch offline video player dimensions."
      },
      {
        "q": "Can I use it on Kick or YouTube Gaming?",
        "a": "Yes! The 16:9 ratio works on Twitch, Kick, and YouTube Gaming streams."
      },
      {
        "q": "Is it free for commercial streaming?",
        "a": "Yes, 100% free with no watermarks."
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
    "artAnalysis": "Armored legends flank the left and right sides in ready stances. The central volcanic sky provides an open, high-energy backdrop for glowing red and orange gamertags.",
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
        "q": "How do I show my main legend or rank on this banner?",
        "a": "Add a subtitle line like 'WRAITH MAIN • APEX PREDATOR' or '30,000 LIFETIME KILLS'."
      },
      {
        "q": "Will this banner look sharp on mobile YouTube?",
        "a": "Yes! Text stays strictly inside the 1546 x 423 safe area so no words are clipped on phones."
      },
      {
        "q": "Can I use this banner for free?",
        "a": "Yes, 100% free with zero watermarks and full commercial rights."
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
        "q": "What size does this download in?",
        "a": "Standard 1920 x 1080 Full HD PNG format."
      },
      {
        "q": "Can I use it as an OBS intermission screen?",
        "a": "Yes, add it as an Image Source in OBS Studio or Streamlabs."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "Spell effects and champion silhouettes frame the sides. The center Nexus energy glow provides an atmospheric, magical backdrop for gold fantasy lettering.",
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
        "q": "What is the best subtitle for a League of Legends channel?",
        "a": "Creators often use 'CHALLENGER MID LANER', 'ADC MONTAGE & GUIDES', or 'ROAD TO GRANDMASTER'."
      },
      {
        "q": "How do I match this banner with my stream overlay?",
        "a": "Use hex code #dfc8a5 for your gold UI borders and scoreboard webcam frames."
      },
      {
        "q": "Is this banner free with full commercial rights?",
        "a": "Yes! 100% free with no watermarks and full commercial usage rights."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 pixel PNG format."
      },
      {
        "q": "Can I use it on Twitch and Kick?",
        "a": "Yes, standard 16:9 offline dimensions work on both platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "Flying cars and stadium spotlights frame the edges. The central stadium dome is kept clean and open for vibrant electric cyan or orange gamertags.",
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
        "q": "How to showcase my rank on this banner?",
        "a": "Add a subtitle line like 'GRAND CHAMPION II' or 'SUPERSONIC LEGEND'."
      },
      {
        "q": "Does this banner stay sharp on phone screens?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area so no letters are cut off on mobile."
      },
      {
        "q": "Is this free for esports tournament teams?",
        "a": "Yes, 100% free with full commercial rights and zero watermarks."
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
        "q": "What resolution is this stream card?",
        "a": "1920 x 1080 pixels (Full HD 16:9)."
      },
      {
        "q": "Can I use it as a BRB screen in OBS?",
        "a": "Yes, add it directly as an Image Source."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "Operators, vehicles, and air drops flank the sides. The warm sunset sky in the center provides clear contrast for bold yellow or white military text.",
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
        "q": "What subtitle works best for PUBG channels?",
        "a": "Try 'WINNER WINNER CHICKEN DINNER', 'CONQUEROR RANK PUSH', or 'SNIPER HIGHLIGHTS'."
      },
      {
        "q": "Will this banner look sharp on mobile YouTube?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area so no letters are cut off on phones."
      },
      {
        "q": "Is this banner free with no watermark?",
        "a": "Yes, 100% free with full commercial rights."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it in OBS Studio?",
        "a": "Yes, add as an Image Source for stream intermission scenes."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "Hero troops and fiery defense towers flank the sides. The center sky provides an open, illuminated area where bold gold or orange clan names glow prominently.",
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
        "q": "Can I show my Town Hall level and Clan Tag?",
        "a": "Yes! Add a subtitle line like 'TOWN HALL 16 MAX • CLAN: #LEGENDS'."
      },
      {
        "q": "Will this banner look sharp on mobile YouTube?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area so no letters are cut off on phones."
      },
      {
        "q": "Is this banner free with full commercial rights?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch video players."
      },
      {
        "q": "Can I use it on YouTube Gaming?",
        "a": "Yes, 16:9 works across all streaming platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The drifting hypercar and scenic mountain peaks frame the sides. The glowing sunset sky in the center gives your racing gamertag high visibility and speed aesthetic.",
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
        "q": "What subtitle works best for a Forza channel?",
        "a": "Try 'HORIZON FESTIVAL CHAMPION', 'STEERING WHEEL DRIFTING', or 'CUSTOM TUNING & BUILDS'."
      },
      {
        "q": "Will this banner look crisp on 4K TVs?",
        "a": "Yes! It exports in uncompressed 2560 x 1440 resolution, looking razor sharp on big screens."
      },
      {
        "q": "Is it free for commercial use?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it as a wheel cam starting screen?",
        "a": "Yes, add it to OBS Studio as an Image Source."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The hypercar and neon skyscrapers frame the edges. The dark wet asphalt and night sky in the center create a high-contrast zone for glowing pink and cyan lettering.",
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
        "q": "What subtitle works best for Asphalt 9 channels?",
        "a": "Popular choices include 'LEGENDS DIVISION • TOP 100', 'SHOCKWAVE NITRO SPECIALIST', or 'CAR UNLOCK GUIDES'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept strictly inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use?",
        "a": "Yes, 100% free with zero watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it as a BRB screen in OBS?",
        "a": "Yes, add directly as an Image Source in OBS Studio."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The anime characters and scenic landscape frame the sides. The starry twilight sky in the center leaves ample room for glowing gold or celestial cyan traveler names.",
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
        "q": "What subtitle works best for a Genshin channel?",
        "a": "Popular choices include 'ADVENTURE RANK 60', 'SPIRAL ABYSS 36 STARS', or 'PRIMOGEM & BANNER GUIDES'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept strictly inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on monetized channels?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it for wish-pulling stream schedules?",
        "a": "Yes, easily add your next wish-pulling stream date in the text inputs."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The animated avatars and floating islands frame the sides. The bright sky in the center leaves ample room for fun, chunky, drop-shadowed gamertags.",
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
        "q": "What subtitle works best for a Roblox channel?",
        "a": "Try 'TOP OBBY CREATOR', 'BEDWARS & BLOX FRUITS', or 'FUNNY MULTIPLAYER MOMENTS'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area so no words are cut off on phones."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it on YouTube and Kick?",
        "a": "Yes, standard 16:9 offline dimensions work across platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The cyber-mercenary and towering neon megastructures frame the sides. The center rainy sky provides a dark, glowing canvas where bright yellow and electric cyan gamertags shine intensely.",
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
        "q": "What subtitle works best for a Cyberpunk channel?",
        "a": "Try 'NIGHT CITY MERCENARY', 'NETRUNNER & SANDEVISTAN BUILDS', or 'EDGERUNNER HIGHLIGHTS'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it as a stream starting screen?",
        "a": "Yes, add directly as an Image Source in OBS Studio."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The gothic throne and demigod silhouette frame the sides. The burning Erdtree in the center provides an epic, mythic gold backdrop for glowing fantasy lettering.",
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
        "q": "What subtitle works best for an Elden Ring channel?",
        "a": "Try 'ELDEN LORD • LEVEL 1 RUNS', 'SHADOW OF THE ERDTREE', or 'LORE & BOSS GUIDES'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it for challenge run stream schedules?",
        "a": "Yes, add your run goals and schedule in the text inputs."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "Spaceship airlocks and crewmate characters frame the sides. The center corridor is bathed in moody red emergency lighting, providing a clean spot for funny gamertags.",
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
        "q": "What subtitle works best for an Among Us channel?",
        "a": "Try 'IMPOSTOR IQ 200', 'PRO DETECTIVE CREWMATE', or 'FUNNY LOBBY MOMENTS'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it as a BRB screen?",
        "a": "Yes, perfect for stream breaks and game lobby intervals."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The King Towers and fighting troops frame the left and right sides. The vibrant arena sky in the center gives your ladder gamertag and trophy count clean focus.",
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
        "q": "What subtitle works best for a Clash Royale channel?",
        "a": "Try 'ULTIMATE CHAMPION • TOP 100', 'BEST META DECKS 2025', or 'ROAD TO 9000 TROPHIES'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it on Kick and YouTube?",
        "a": "Yes, standard 16:9 offline dimensions work across platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The hero characters and payload robots frame the sides. The vibrant orange and cyan sky in the center provides an open, illuminated spot for esports gamertags.",
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
        "q": "What subtitle works best for an Overwatch 2 channel?",
        "a": "Try 'TOP 500 DPS MAIN', 'GRANDMASTER SUPPORT', or 'TANK CLUTCHES & HIGHLIGHTS'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it on Kick and YouTube?",
        "a": "Yes, standard 16:9 offline dimensions work across platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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
    "artAnalysis": "The acrobatic striker and cheering stadium crowds frame the sides. The glowing stadium lights in the center create a high-contrast backdrop for vibrant green and gold soccer gamertags.",
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
        "q": "What subtitle works best for an EA FC channel?",
        "a": "Try 'FUT CHAMPIONS RANK 1', 'WEEKEND LEAGUE REWARDS', or 'TACTICS & SQUAD BUILDERS'."
      },
      {
        "q": "Will this banner look sharp on mobile phones?",
        "a": "Yes! Text is kept inside the 1546 x 423 safe area."
      },
      {
        "q": "Is it free for commercial use on YouTube?",
        "a": "Yes, 100% free with no watermarks."
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
        "q": "What resolution does this download in?",
        "a": "Full HD 1920 x 1080 px for Twitch."
      },
      {
        "q": "Can I use it on Kick and YouTube?",
        "a": "Yes, standard 16:9 offline dimensions work across platforms."
      },
      {
        "q": "Are there any watermarks?",
        "a": "Zero watermarks and 100% free."
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

  // 5. Common aliases / shorthand mappings
  const aliasMap = {
    "valorant": "valorant-protocol",
    "minecraft": "minecraft-overworld-nether",
    "fortnite": "fortnite-mega-city",
    "cod": "cod-warzone",
    "call-of-duty": "cod-warzone",
    "warzone": "cod-warzone",
    "gta": "gta-street",
    "gtav": "gta-street",
    "gta-v": "gta-street",
    "apex": "apex-canyon",
    "apex-legends": "apex-canyon",
    "league": "league-rift",
    "league-of-legends": "league-rift",
    "lol": "league-rift",
    "rocket-league": "rocket-league",
    "pubg": "pubg-mobile",
    "pubg-mobile": "pubg-mobile",
    "coc": "clash-of-clans",
    "clash-of-clans": "clash-of-clans",
    "forza": "forza-horizon",
    "forza-horizon": "forza-horizon",
    "asphalt": "asphalt-9",
    "asphalt-9": "asphalt-9",
    "genshin": "genshin-impact",
    "genshin-impact": "genshin-impact",
    "roblox": "roblox-virtual",
    "cyberpunk": "cyberpunk-2077",
    "cyberpunk-2077": "cyberpunk-2077",
    "elden-ring": "elden-ring",
    "eldenring": "elden-ring",
    "among-us": "among-us",
    "amongus": "among-us",
    "clash-royale": "clash-royale",
    "clashroyale": "clash-royale",
    "overwatch": "overwatch-2",
    "overwatch-2": "overwatch-2",
    "cs2": "cs2-tactical",
    "counter-strike": "cs2-tactical",
    "counter-strike-2": "cs2-tactical",
    "fifa": "fifa-soccer",
    "ea-sports-fc": "fifa-soccer",
    "fc-25": "fifa-soccer"
  };

  const targetId = aliasMap[cleanId];
  if (targetId) {
    return TEMPLATES.find((t) => t.id === targetId);
  }

  return undefined;
}

export function getAllTemplatePaths() {
  return TEMPLATES.map((t) => ({
    game: t.game,
    banner: t.bannerSlug,
  }));
}

export function getTemplatesByGame(game) {
  return TEMPLATES.filter((t) => t.game === game);
}

export function getTemplatesByPlatform(platform) {
  return TEMPLATES.filter((t) => t.platform === platform);
}
