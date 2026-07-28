"use client";

import { useState, use, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";

// Template definitions static dictionary
const templateConfig = {
  // YouTube templates
  esports: {
    name: "Valorant",
    sub: "Ranked / K/D 2.5",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_valorant.jpg') center/cover no-repeat", color: "#ffffff" }
  },
  "cs2-tactical": {
    name: "CS2 / CS:GO",
    sub: "TACTICAL LOADOUT",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_cod.jpg') center/cover no-repeat", color: "#ffffff" }
  },
  streaming: {
    name: "Fortnite",
    sub: "STREAMING NOW",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_fortnite.jpg') center/cover no-repeat", color: "#ffffff" }
  },
  minimalist: {
    name: "Minecraft",
    sub: "Est. 2018",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_minecraft.jpg') center/cover no-repeat", color: "#ffffff" }
  },
  "modern-apex": {
    name: "Apex Legends",
    sub: "Ranked Master",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_apex.jpg') center/cover no-repeat", color: "#ff3e3e" }
  },
  "overwatch-hero": {
    name: "Overwatch 2",
    sub: "HERO SELECT",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_overwatch.jpg') center/cover no-repeat", color: "#f99e1a" }
  },
  "gta-street": {
    name: "GTA V / Roleplay",
    sub: "LOS SANTOS",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_gtav.jpg') center/cover no-repeat", color: "#ffffff" }
  },
  rpg: {
    name: "League of Legends",
    sub: "Lv 100 Mage",
    style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner_league.jpg') center/cover no-repeat", color: "#dfc8a5" }
  },
  "rocket-league": {
    name: "Rocket League",
    sub: "BOOST ON",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_rocketleague.jpg') center/cover no-repeat", color: "#00d4ff" }
  },
  "pubg-mobile": {
    name: "PUBG Mobile",
    sub: "Tactical Battlegrounds",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_pubg.jpg') center/cover no-repeat", color: "#eab308" }
  },
  "clash-of-clans": {
    name: "Clash of Clans",
    sub: "Clan Leader",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_coc_game.jpg') center/cover no-repeat", color: "#f59e0b" }
  },
  "forza-horizon": {
    name: "Forza Horizon",
    sub: "Horizon Festival",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_forza.jpg') center/cover no-repeat", color: "#f43f5e" }
  },
  "asphalt-9": {
    name: "Asphalt 9",
    sub: "Legendary Driver",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_asphalt.jpg') center/cover no-repeat", color: "#ec4899" }
  },
  "genshin-impact": {
    name: "Genshin Impact",
    sub: "Traveler of Teyvat",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_genshin.jpg') center/cover no-repeat", color: "#38bdf8" }
  },
  "roblox-virtual": {
    name: "Roblox",
    sub: "Vibrant Virtual World",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_roblox.jpg') center/cover no-repeat", color: "#f43f5e" }
  },
  "fifa-soccer": {
    name: "FIFA / FC 24",
    sub: "Ultimate Team",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_fifa.jpg') center/cover no-repeat", color: "#10b981" }
  },
  "cyberpunk-2077": {
    name: "Cyberpunk 2077",
    sub: "Night City Mercenary",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_cyberpunk.jpg') center/cover no-repeat", color: "#facc15" }
  },
  "elden-ring": {
    name: "Elden Ring",
    sub: "Tarnished Lord",
    style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner_eldenring.jpg') center/cover no-repeat", color: "#fbbf24" }
  },
  "among-us": {
    name: "Among Us",
    sub: "Spaceship Crewmate",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_amongus.jpg') center/cover no-repeat", color: "#ef4444" }
  },
  "clash-royale": {
    name: "Clash Royale",
    sub: "Arena Challenger",
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_clashroyale.jpg') center/cover no-repeat", color: "#3b82f6" }
  },

  // Twitch templates
  "twitch-valorant": {
    name: "Valorant Offline",
    sub: "OFFLINE • Season 12 Live Soon",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#00d4ff", textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #005f73", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_valorant.jpg') center/cover no-repeat" }
  },
  "twitch-cod": {
    name: "Warzone Offline",
    sub: "STARTING SOON • Mon-Fri 8PM",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_cod.jpg') center/cover no-repeat" }
  },
  "twitch-fortnite": {
    name: "Fortnite Offline",
    sub: "OFFLINE • Follow for Rank Push",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 10px #c084fc, 0 0 20px #8b5cf6, 0 0 30px #6d28d9", letterSpacing: "0.08em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_fortnite.jpg') center/cover no-repeat" }
  },
  "twitch-minecraft": {
    name: "Minecraft Offline",
    sub: "BE RIGHT BACK • Building spawn",
    textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_minecraft.jpg') center/cover no-repeat" }
  },
  "twitch-apex": {
    name: "Apex Legends Offline",
    sub: "STREAMING SOON • Predator Grind",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 8px #ea580c, 3px 3px 0px #000000", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_apex.jpg') center/cover no-repeat" }
  },
  "twitch-overwatch": {
    name: "Overwatch Offline",
    sub: "OFFLINE • Comp Grind Tomorrow",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#f99e1a", textShadow: "0 2px 0px #78350f, 0 4px 0px #451a03, 0 8px 12px rgba(0,0,0,0.8)", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_overwatch.jpg') center/cover no-repeat" }
  },
  "twitch-gtav": {
    name: "GTA RP Offline",
    sub: "OFFLINE • Back at 7PM EST",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f472b6", textShadow: "0 0 10px #f472b6, 0 0 20px #db2777, 0 0 30px #00d4ff", letterSpacing: "0.12em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_gtav.jpg') center/cover no-repeat" }
  },
  "twitch-league": {
    name: "League of Legends Offline",
    sub: "STARTING SOON • Mid Lane Carry",
    textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 4px #78350f, 0 0 12px rgba(223, 200, 165, 0.4)", letterSpacing: "0.2em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_league.jpg') center/cover no-repeat" }
  },
  "twitch-rocketleague": {
    name: "Rocket League Offline",
    sub: "BE RIGHT BACK • Grand Champ ELO",
    textStyle: { fontFamily: "var(--font-gamertag)", color: "#06b6d4", textShadow: "0 0 15px #06b6d4, 0 0 25px #0891b2, 2px 2px 0px #000000", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_rocketleague.jpg') center/cover no-repeat" }
  },
  "twitch-pubg": {
    name: "PUBG Offline",
    sub: "OFFLINE • Winner Winner Dinner",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 0px #451a03, -2px -2px 0px #451a03, 0px 4px 8px rgba(0,0,0,0.9)", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_pubg.jpg') center/cover no-repeat" }
  },
  "twitch-coc": {
    name: "Clash of Clans Offline",
    sub: "OFFLINE • Town Hall 15 Live",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fbbf24", textShadow: "0 4px 0px #b45309, 0 8px 0px #78350f, 0 12px 16px rgba(0,0,0,0.8)", letterSpacing: "0.06em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_coc.jpg') center/cover no-repeat" }
  },
  "twitch-forza": {
    name: "Forza Horizon Offline",
    sub: "STARTING SOON • Wheel Cam Setup",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f43f5e", textShadow: "0 0 12px #f43f5e, 0 0 24px #be123c", letterSpacing: "0.2em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_forza.jpg') center/cover no-repeat" }
  },
  "twitch-asphalt": {
    name: "Asphalt Offline",
    sub: "BE RIGHT BACK • Custom Lobby Runs",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 8px #db2777, 0 0 16px #4a044e, 3px 3px 0px #000", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_asphalt.jpg') center/cover no-repeat" }
  },
  "twitch-genshin": {
    name: "Genshin Impact Offline",
    sub: "OFFLINE • Farming Materials",
    textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 0 10px #0284c7, 0 2px 4px rgba(0,0,0,0.8)", letterSpacing: "0.25em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_genshin.jpg') center/cover no-repeat" }
  },
  "twitch-roblox": {
    name: "Roblox Offline",
    sub: "STREAMING SOON • Custom Mini-games",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "4px 4px 0px #7f1d1d, 8px 8px 12px rgba(0,0,0,0.8)", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_roblox.jpg') center/cover no-repeat" }
  },
  "twitch-fifa": {
    name: "FC 24 Offline",
    sub: "OFFLINE • FUT Champions Weekend",
    textStyle: { fontFamily: "var(--font-gamertag)", color: "#10b981", textShadow: "0 0 10px #10b981, 0 0 20px #047857, 2px 2px 0px #000000", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_fifa.jpg') center/cover no-repeat" }
  },
  "twitch-cyberpunk": {
    name: "Cyberpunk Offline",
    sub: "STARTING SOON • Netrunner Build",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#facc15", textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 15px #facc15", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_cyberpunk.jpg') center/cover no-repeat" }
  },
  "twitch-eldenring": {
    name: "Elden Ring Offline",
    sub: "OFFLINE • Rune Level 1 runs",
    textStyle: { fontFamily: "Georgia, serif", color: "#fbbf24", textShadow: "0 2px 8px #78350f, 0 0 20px #b45309", letterSpacing: "0.25em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_eldenring.jpg') center/cover no-repeat" }
  },
  "twitch-amongus": {
    name: "Among Us Offline",
    sub: "BE RIGHT BACK • Who is Impostor?",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "3px 3px 0px #000, -3px -3px 0px #000, 3px -3px 0px #000, -3px 3px 0px #000", letterSpacing: "0.08em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_amongus.jpg') center/cover no-repeat" }
  },
  "twitch-clashroyale": {
    name: "Clash Royale Offline",
    sub: "OFFLINE • Midladder Trophy Push",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#3b82f6", textShadow: "0 3px 0px #1d4ed8, 0 6px 0px #1e3a8a, 0 10px 12px rgba(0,0,0,0.8)", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_clashroyale.jpg') center/cover no-repeat" }
  },

  // Discord templates
  "discord-cyber-red": {
    name: "Cyber Red Mech",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#fca5a5", textShadow: "0 0 10px #ef4444, 0 0 20px #991b1b, 2px 2px 0px #000000", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/discord_cyber_red.jpg') center/cover no-repeat" }
  },
  "discord-gold-tactical": {
    name: "Gold Tactical Grid",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fef08a", textShadow: "3px 3px 0px #000, -1px -1px 0px #78350f, 0 0 15px #fbbf24", letterSpacing: "0.08em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_gold_tactical.jpg') center/cover no-repeat" }
  },
  "discord-liquid-ice": {
    name: "Liquid Ice",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", color: "#ffffff", textShadow: "0 0 8px #0ea5e9, 0 0 16px #0369a1, 3px 3px 0px #0f172a", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/discord_liquid_ice.jpg') center/cover no-repeat" }
  },
  "discord-synth-clouds": {
    name: "Synth Horizon",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#fbcfe8", textShadow: "0 0 12px #ec4899, 0 0 24px #4a044e, 3px 3px 0px #000", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/discord_synth_clouds.jpg') center/cover no-repeat" }
  },
  "discord-dark-anime": {
    name: "Dark Crimson Mist",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ef4444", textShadow: "0 0 15px #ef4444, 3px 3px 0px #000000", letterSpacing: "0.12em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/discord_dark_anime.jpg') center/cover no-repeat" }
  },
  "discord-purple-shorts": {
    name: "Amethyst Smoke",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "0 0 10px #c084fc, 0 0 20px #7e22ce, 2px 2px 0px #000000", letterSpacing: "0.05em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_purple_shorts.jpg') center/cover no-repeat" }
  },
  "discord-phase-freak": {
    name: "Phase Pink Lightning",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Georgia, serif", color: "#fca5a5", textShadow: "0 0 12px #f43f5e, 0 0 24px #9f1239, 3px 3px 0px #000", letterSpacing: "0.2em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_phase_freak.jpg') center/cover no-repeat" }
  },
  "discord-frantox-blue": {
    name: "Frantox Glacial Blue",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#e0f7fa", textShadow: "0 0 8px #06b6d4, 0 0 16px #0891b2, 3px 3px 0px #000", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_frantox_blue.jpg') center/cover no-repeat" }
  },
  "discord-zephyr-red": {
    name: "Zephyr Red Speed",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fca5a5", textShadow: "2px 2px 0px #000, -2px -2px 0px #7f1d1d, 0 0 10px #ef4444", letterSpacing: "0.06em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/discord_zephyr_red.jpg') center/cover no-repeat" }
  },
  "discord-thumb-green": {
    name: "Toxic Emerald Glow",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-data-mono)", color: "#a7f3d0", textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22, 0 0 12px #10b981", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_thumb_green.jpg') center/cover no-repeat" }
  },
  "discord-cyberpunk-yellow": {
    name: "Cyber Matrix Yellow",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fef08a", textShadow: "3px 3px 0px #000000, 0 0 12px #eab308", letterSpacing: "0.1em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/discord_cyberpunk_yellow.jpg') center/cover no-repeat" }
  },
  "discord-toxic-glow": {
    name: "Acid Biohazard",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#34d399", textShadow: "0 0 10px #10b981, 0 0 20px #047857", letterSpacing: "0.12em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_toxic_glow.jpg') center/cover no-repeat" }
  },
  "discord-angelic-grace": {
    name: "Angelic Light",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Georgia, serif", color: "#fef08a", textShadow: "0 2px 4px #78350f, 0 0 15px rgba(251, 191, 36, 0.5)", letterSpacing: "0.25em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_angelic_grace.jpg') center/cover no-repeat" }
  },
  "discord-abyssal-void": {
    name: "Abyssal Singularity",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#93c5fd", textShadow: "0 0 12px #3b82f6, 3px 3px 0px #1e3a8a", letterSpacing: "0.08em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_abyssal_void.jpg') center/cover no-repeat" }
  },
  "discord-crimson-slayer": {
    name: "Crimson Ninja",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fca5a5", textShadow: "3px 3px 0px #000000, 0 0 10px #dc2626", letterSpacing: "0.08em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_crimson_slayer.jpg') center/cover no-repeat" }
  },
  "discord-glitch-system": {
    name: "Green System Glitch",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-data-mono)", color: "#86efac", textShadow: "2px 2px 0px #14532d, 4px 4px 0px #052e16", letterSpacing: "0.12em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_glitch_system.jpg') center/cover no-repeat" }
  },
  "discord-frost-bite": {
    name: "Frost Bite Dragon",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ffffff", textShadow: "0 0 10px #06b6d4, 0 0 20px #0891b2", letterSpacing: "0.15em" },
    style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/discord_frost_bite.jpg') center/cover no-repeat" }
  },
  "discord-solar-flare": {
    name: "Solar Phoenix",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "Impact, sans-serif", color: "#fed7aa", textShadow: "2px 2px 0px #431407, 0 0 12px #f97316", letterSpacing: "0.06em" },
    style: { background: "radial-gradient(circle at 10% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 60%), radial-gradient(circle at 90% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), linear-gradient(135deg, #180500 0%, #030712 100%)" }
  },
  "discord-cosmic-nebula": {
    name: "Nebula Violet Space",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#e9d5ff", textShadow: "0 0 15px #c084fc, 0 0 30px #7e22ce, 3px 3px 0px #000", letterSpacing: "0.08em" },
    style: { background: "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(219, 39, 119, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0f0728 0%, #030712 100%)" }
  },
  "discord-phantom-spirit": {
    name: "Phantom Spectral",
    sub: "Discord Server Active",
    textStyle: { fontFamily: "var(--font-gamertag)", color: "#cffafe", textShadow: "0 0 12px #06b6d4, 0 0 24px #0891b2, 2px 2px 0px #000000", letterSpacing: "0.2em" },
    style: { background: "radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.25) 0%, transparent 70%), radial-gradient(circle at 50% 0%, rgba(13, 148, 136, 0.15) 0%, transparent 60%), linear-gradient(135deg, #040d12 0%, #01161b 100%)" }
  },

  // Twitter templates
  "esports-pro": {
    name: "Esports Pro",
    sub: "twitch.tv/username",
    style: { background: "radial-gradient(circle at 90% 50%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), linear-gradient(135deg, #111827 0%, #030712 100%)", color: "#00d4ff" }
  },
  "stream-schedule": {
    name: "Stream Schedule",
    sub: "twitch.tv/username",
    style: { background: "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), linear-gradient(135deg, #1e1b4b 0%, #030712 100%)", color: "#8b5cf6" }
  },
  "clan-tag": {
    name: "Clan Tag Esports",
    sub: "twitch.tv/username",
    style: { background: "radial-gradient(circle at 90% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 60%), linear-gradient(135deg, #1f2937 0%, #111827 100%)", color: "#ef4444" }
  },
  "neon-glow": {
    name: "Neon Glow",
    sub: "twitch.tv/username",
    style: { background: "radial-gradient(circle at 100% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 60%), linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)", color: "#00d4ff" }
  }
};

export default function CustomizeClient({ params }) {
  const { id } = use(params);

  // Editor states
  const [channelName, setChannelName] = useState("STORM");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryName = urlParams.get("name");
      if (queryName) {
        setChannelName(queryName.toUpperCase());
      }
    }
  }, []);

  const [subtitle, setSubtitle] = useState("RANKED / K/D 2.5");
  const [activeTab, setActiveTab] = useState("desktop");
  const [selectedFont, setSelectedFont] = useState("Orbitron");
  const [accentColor, setAccentColor] = useState("#00d4ff");
  const [exportSize, setExportSize] = useState("YouTube (2560 x 1440)");
  const [fontSizeScale, setFontSizeScale] = useState(1);
  const [bgOverlay, setBgOverlay] = useState(15); // Percentage background darkener
  const [glowIntensity, setGlowIntensity] = useState(70); // Percentage text glow intensity
  const [textPosX, setTextPosX] = useState(50); // Text X position percentage (0-100)
  const [textPosY, setTextPosY] = useState(50); // Text Y position percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDragMove = (clientX, clientY, containerRect) => {
    if (!containerRect) return;
    const x = ((clientX - containerRect.left) / containerRect.width) * 100;
    const y = ((clientY - containerRect.top) / containerRect.height) * 100;
    setTextPosX(Math.max(10, Math.min(90, x)));
    setTextPosY(Math.max(15, Math.min(85, y)));
  };

  // Initialize template defaults ONLY when template ID changes
  useEffect(() => {
    const tpl = templateConfig[id] || templateConfig.esports;
    if (tpl) {
      if (tpl.sub) setSubtitle(tpl.sub);

      // Guess font from style or textStyle
      let defaultFont = "Orbitron";
      if (tpl.textStyle?.fontFamily) {
        const family = tpl.textStyle.fontFamily;
        if (family.includes("Impact")) defaultFont = "Impact";
        else if (family.includes("sans")) defaultFont = "Inter";
        else if (family.includes("mono")) defaultFont = "JetBrains Mono";
        else if (family.includes("Georgia")) defaultFont = "Georgia";
      } else if (tpl.style?.fontFamily) {
        const family = tpl.style.fontFamily;
        if (family.includes("Impact")) defaultFont = "Impact";
        else if (family.includes("sans")) defaultFont = "Inter";
        else if (family.includes("mono")) defaultFont = "JetBrains Mono";
        else if (family.includes("Georgia")) defaultFont = "Georgia";
      }
      setSelectedFont(defaultFont);

      // Guess accent color
      let defaultColor = "#00d4ff";
      if (tpl.textStyle?.color) {
        defaultColor = tpl.textStyle.color;
      } else if (tpl.style?.color) {
        defaultColor = tpl.style.color;
      }
      setAccentColor(defaultColor);
    }
  }, [id]);

  const currentTemplate = templateConfig[id] || templateConfig.esports;

  // Aspect ratio calculator for live preview
  const getPreviewAspectStyle = () => {
    if (exportSize.includes("Twitch")) return { aspectRatio: "1200 / 480" };
    if (exportSize.includes("Discord")) return { aspectRatio: "960 / 540" };
    if (exportSize.includes("Twitter")) return { aspectRatio: "1500 / 500" };
    return { aspectRatio: "2560 / 1440" };
  };

  // Font family loader helper
  const fontStyles = {
    Orbitron: "var(--font-gamertag)",
    Inter: "var(--font-sans)",
    "JetBrains Mono": "var(--font-data-mono)",
    Georgia: "Georgia, serif",
    Impact: "Impact, sans-serif",
  };

  // Color Swatch grid
  const accentColorsList = [
    "#00d4ff",
    "#8b5cf6",
    "#ef4444",
    "#10b981",
    "#f59e0b",
    "#ec4899",
    "#f0f4f8",
    "#ff6b35",
  ];

  const handleDownload = () => {
    setIsDownloading(true);

    // 1. Resolve target dimensions
    let width = 2560;
    let height = 1440;
    if (exportSize.includes("Twitch")) {
      width = 1200;
      height = 480;
    } else if (exportSize.includes("Discord")) {
      width = 960;
      height = 540;
    } else if (exportSize.includes("Twitter")) {
      width = 1500;
      height = 500;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setIsDownloading(false);
      return;
    }

    const drawContentAndDownload = () => {
      // Determine font family
      let canvasFont = "bold 120px 'Space Grotesk', sans-serif";
      if (selectedFont === "Orbitron") {
        canvasFont = "900 110px 'Space Grotesk', sans-serif";
      } else if (selectedFont === "Inter") {
        canvasFont = "bold 90px 'Inter', sans-serif";
      } else if (selectedFont === "JetBrains Mono") {
        canvasFont = "bold 80px 'JetBrains Mono', monospace";
      } else if (selectedFont === "Georgia") {
        canvasFont = "bold 100px Georgia, serif";
      } else if (selectedFont === "Impact") {
        canvasFont = "bold 130px Impact, sans-serif";
      }

      // Scaling fonts relative to standard 1920px width reference
      const scale = (width / 1920) * fontSizeScale;
      ctx.font = canvasFont.replace(/(\d+)px/, (match, num) => `${Math.round(parseInt(num) * scale)}px`);
      ctx.textBaseline = "middle";

      let textX = (width * textPosX) / 100;
      let textY = (height * textPosY) / 100 - Math.round(15 * scale);
      ctx.textAlign = "center";

      // Add modern text glow based on user glow intensity slider
      if (glowIntensity > 0) {
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = Math.round(30 * scale * (glowIntensity / 50));
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = accentColor;

      ctx.fillText(channelName || "YOUR NAME", textX, textY);

      // Draw Subtitle without glow
      ctx.shadowBlur = 0;
      ctx.font = `bold ${Math.round(28 * scale)}px 'Inter', sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      
      // Handle letter spacing
      if ("letterSpacing" in ctx) {
        ctx.letterSpacing = `${Math.round(6 * scale)}px`;
      }
      ctx.fillText(subtitle || "GAMER / STREAMER", textX, textY + Math.round(55 * scale));

      // Trigger automatic file download
      try {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = `gamingbanner-${id || "custom"}-${(channelName || "storm").toLowerCase()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        console.error("Canvas export error: ", err);
      }

      setIsDownloading(false);
    };

    // Check if background is image based
    let imgUrl = null;
    if (currentTemplate && currentTemplate.style && currentTemplate.style.background) {
      const bgMatch = currentTemplate.style.background.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (bgMatch && bgMatch[1]) {
        imgUrl = bgMatch[1];
      }
    }

    if (imgUrl) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const imgAspect = img.width / img.height;
        const canvasAspect = width / height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspect > canvasAspect) {
          drawHeight = height;
          drawWidth = height * imgAspect;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = width;
          drawHeight = width / imgAspect;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // Draw dynamic dark overlay fill based on bgOverlay slider
        ctx.fillStyle = `rgba(0, 0, 0, ${bgOverlay / 100})`;
        ctx.fillRect(0, 0, width, height);

        drawContentAndDownload();
      };
      img.onerror = () => {
        console.error("Failed to load template image.");
        setIsDownloading(false);
      };
      img.src = imgUrl;
    } else {
      // Draw simulated CSS gradient background
      let gradient = ctx.createLinearGradient(0, 0, width, height);
      if (id.includes("neon") || id.includes("blurple")) {
        gradient.addColorStop(0, "#09090b");
        gradient.addColorStop(1, "#1e1b4b");
      } else if (id.includes("purple") || id.includes("wave")) {
        gradient.addColorStop(0, "#1e1b4b");
        gradient.addColorStop(1, "#030712");
      } else if (id.includes("cyberpunk")) {
        gradient.addColorStop(0, "#020617");
        gradient.addColorStop(1, "#172554");
      } else if (id.includes("horror")) {
        gradient.addColorStop(0, "#450a0a");
        gradient.addColorStop(1, "#020617");
      } else if (id.includes("pixel")) {
        gradient.addColorStop(0, "#064e3b");
        gradient.addColorStop(1, "#022c22");
      } else if (id.includes("sports") || id.includes("arena")) {
        gradient.addColorStop(0, "#082f49");
        gradient.addColorStop(1, "#020617");
      } else if (id.includes("esports") || id.includes("clan")) {
        gradient.addColorStop(0, "#111827");
        gradient.addColorStop(1, "#030712");
      } else {
        gradient.addColorStop(0, "#1e293b");
        gradient.addColorStop(1, "#0f172a");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add a subtle glowing radial overlay
      let radialGradient = ctx.createRadialGradient(width * 0.8, height * 0.5, 0, width * 0.8, height * 0.5, width * 0.7);
      radialGradient.addColorStop(0, "rgba(0, 212, 255, 0.08)");
      radialGradient.addColorStop(1, "transparent");
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      drawContentAndDownload();
    }
  };

  return (
    <>
      <Header />

      <main className="flex-1 pt-16 flex flex-col md:flex-row h-auto overflow-y-auto md:h-[calc(100vh-64px)] md:overflow-hidden">
        {/* Left Canvas Preview Panel (65%) */}
        <section className="w-full md:flex-1 bg-surface-container/60 p-lg flex flex-col justify-center gap-md border-b md:border-b-0 md:border-r border-outline-variant/65">
          {/* View Toggles */}
          <div className="flex items-center gap-sm self-start bg-surface-container-high border border-outline-variant/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("desktop")}
              className={`px-lg py-1.5 rounded text-xs font-bold transition-all ${
                activeTab === "desktop"
                  ? "bg-primary-container text-on-primary-container shadow"
                  : "text-outline hover:text-on-background"
              }`}
            >
              Desktop Layout
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-lg py-1.5 rounded text-xs font-bold transition-all ${
                activeTab === "mobile"
                  ? "bg-primary-container text-on-primary-container shadow"
                  : "text-outline hover:text-on-background"
              }`}
            >
              Mobile Safe Zone
            </button>
          </div>

          {/* Render Mockup Container */}
          <div className="w-full flex-1 flex items-center justify-center">
            <div className="w-full max-w-4xl border border-outline-variant rounded-xl overflow-hidden bg-surface-container shadow-2xl">
              {/* Mockup Canvas */}
              <div
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleDragMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
                }}
                onMouseMove={(e) => {
                  if (isDragging) {
                    handleDragMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
                  }
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={(e) => {
                  if (e.touches && e.touches[0]) {
                    setIsDragging(true);
                    handleDragMove(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget.getBoundingClientRect());
                  }
                }}
                onTouchMove={(e) => {
                  if (isDragging && e.touches && e.touches[0]) {
                    handleDragMove(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget.getBoundingClientRect());
                  }
                }}
                onTouchEnd={() => setIsDragging(false)}
                className={`w-full relative flex flex-col p-lg justify-center transition-all duration-300 select-none ${
                  isDragging ? "cursor-grabbing" : "cursor-crosshair"
                }`}
                style={{ ...currentTemplate.style, ...getPreviewAspectStyle(), containerType: "inline-size" }}
              >
                {/* Dynamic User Background Darkener / Overlay */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none transition-all duration-200"
                  style={{ backgroundColor: `rgba(0, 0, 0, ${bgOverlay / 100})` }}
                />

                {/* Additional Dimmer / Shading for Twitch Banners */}
                {id.startsWith("twitch-") && (
                  <>
                    <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-0" />
                    <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-0" />
                  </>
                )}

                {currentTemplate.decor}

                {/* Mobile crop guidelines overlay */}
                {activeTab === "desktop" && !id.startsWith("twitch-") && !id.includes("discord") && !id.includes("esports-pro") && !id.includes("schedule") && !id.includes("clan-tag") && !id.includes("glow") && !id.includes("blurple") && !id.includes("server") && !id.includes("guild") && !id.includes("portal") && !id.includes("rp") && !id.includes("music") && !id.includes("clan") && (
                  <div className="absolute inset-y-0 w-[60%] left-[20%] border-l border-r border-dashed border-white/25 bg-white/[0.01] pointer-events-none flex items-center justify-between px-xs z-10">
                    <span className="text-[1.5cqw] text-white/35 uppercase font-data-mono">Mobile Safe Edge</span>
                    <span className="text-[1.5cqw] text-white/35 uppercase font-data-mono">Mobile Safe Edge</span>
                  </div>
                )}

                {/* Drag-and-Drop Text Position Wrapper */}
                <div
                  style={{
                    position: "absolute",
                    left: `${textPosX}%`,
                    top: `${textPosY}%`,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                  className="z-20 p-2 rounded-lg border-2 border-dashed border-transparent hover:border-primary-container/70 transition-colors group cursor-grab active:cursor-grabbing pointer-events-auto"
                >
                  <span className="text-[10px] text-primary-container font-extrabold uppercase font-data-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -top-5 left-1/2 -translate-x-1/2 bg-black/90 px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap border border-primary-container/40">
                    🖐️ Drag to Reposition Text
                  </span>

                  {/* Main render name */}
                  <span
                    style={{
                      ...currentTemplate.textStyle,
                      fontFamily: fontStyles[selectedFont] || currentTemplate.textStyle?.fontFamily || "var(--font-gamertag)",
                      color: accentColor,
                      textShadow: glowIntensity > 0
                        ? `0 0 ${Math.round(15 * fontSizeScale * (glowIntensity / 50))}px ${accentColor}, 0 0 ${Math.round(35 * fontSizeScale * (glowIntensity / 50))}px ${accentColor}, 3px 3px 6px rgba(0,0,0,0.9)`
                        : "3px 3px 6px rgba(0,0,0,0.9)",
                      fontSize: `clamp(${14 * fontSizeScale}px, ${9 * fontSizeScale}cqw, ${52 * fontSizeScale}px)`
                    }}
                    className="font-black uppercase tracking-wider select-none relative z-10 transition-all leading-none drop-shadow-md"
                  >
                    {channelName || "YOUR NAME"}
                  </span>

                  {/* Subtitle name */}
                  {id.startsWith("twitch-") ? (
                    <span
                      style={{
                        fontSize: "clamp(6px, 2.2cqw, 12px)"
                      }}
                      className="font-bold tracking-widest uppercase mt-xs relative z-10 select-none font-sans px-2.5 py-0.5 rounded bg-black/70 border border-white/10 text-white/90 shadow-md whitespace-nowrap"
                    >
                      {subtitle || "STREAMING NOW"}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(6px, 2.5cqw, 14px)"
                      }}
                      className="font-bold text-white/90 tracking-widest uppercase mt-xs relative z-10 leading-none drop-shadow-sm whitespace-nowrap"
                    >
                      {subtitle || "RANKED / K/D 2.5"}
                    </span>
                  )}
                </div>
              </div>

              {/* Simulated Channel info strip */}
              <div className="p-md bg-surface-container-high border-t border-outline-variant/40 flex items-center gap-md">
                <div className="h-10 w-10 rounded-full bg-surface-container-low border border-outline-variant/60 flex items-center justify-center font-bold text-outline">
                  {channelName ? channelName[0] : "S"}
                </div>
                <div>
                  <span className="font-bold text-sm text-on-background block">{channelName || "STORM"}</span>
                  <span className="text-xs text-outline font-data-mono">12.4K subscribers &bull; 42 videos</span>
                </div>
              </div>
            </div>
          </div>

          <span className="text-xs text-outline/75 text-center font-data-mono">
            {activeTab === "desktop"
              ? "Tip: Click and drag text anywhere on the banner to reposition."
              : "Preview shows strict mobile display dimensions."}
          </span>
        </section>

        {/* Right Editor sidebar (35%) */}
        <section className="w-full md:w-[420px] bg-surface-container-high p-lg flex flex-col gap-lg md:overflow-y-auto border-t md:border-t-0 md:border-l border-outline-variant/60 min-h-[450px] md:min-h-0">
          <div>
            <h2 className="text-xl font-bold text-on-background">Customize Template</h2>
            <p className="text-xs text-outline mt-1 font-data-mono">Style: {currentTemplate.name}</p>
          </div>

          <div className="flex flex-col gap-lg">
            {/* Input 1 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-outline">Channel Name</label>
              <input
                type="text"
                value={channelName}
                placeholder="e.g. STORM"
                onChange={(e) => setChannelName(e.target.value.toUpperCase().slice(0, 15))}
                className="bg-surface-container border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container font-bold"
              />
            </div>

            {/* Input 2 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-outline">Subtitle Text</label>
              <input
                type="text"
                value={subtitle}
                placeholder="e.g. STREAMING NOW"
                onChange={(e) => setSubtitle(e.target.value.toUpperCase().slice(0, 25))}
                className="bg-surface-container border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container font-semibold"
              />
            </div>

            {/* Position Sliders & Reset */}
            <div className="flex flex-col gap-1.5 border-y border-outline-variant/30 py-md">
              <div className="flex justify-between items-center text-xs font-semibold text-outline">
                <span>Text Position (Drag Banner)</span>
                <button
                  type="button"
                  onClick={() => { setTextPosX(50); setTextPosY(50); }}
                  className="text-[10px] font-bold text-primary-container hover:underline"
                >
                  Reset Center
                </button>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-outline">Horizontal: {Math.round(textPosX)}%</span>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={textPosX}
                    onChange={(e) => setTextPosX(parseFloat(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer h-1.5 bg-surface-container rounded-lg appearance-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-outline">Vertical: {Math.round(textPosY)}%</span>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={textPosY}
                    onChange={(e) => setTextPosY(parseFloat(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer h-1.5 bg-surface-container rounded-lg appearance-none"
                  />
                </div>
              </div>
            </div>

            {/* Font selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-outline">Select Font</label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="bg-surface-container border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container font-semibold"
              >
                {Object.keys(fontStyles).map((font) => (
                  <option key={font}>{font}</option>
                ))}
              </select>
            </div>

            {/* Text Size Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-semibold text-outline">
                <span>Text Size</span>
                <span className="font-data-mono text-primary-container font-bold">{Math.round(fontSizeScale * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.6"
                max="1.5"
                step="0.05"
                value={fontSizeScale}
                onChange={(e) => setFontSizeScale(parseFloat(e.target.value))}
                className="w-full accent-primary-container cursor-pointer h-1.5 bg-surface-container rounded-lg appearance-none"
              />
            </div>

            {/* Text Glow / Shadow Intensity Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-semibold text-outline">
                <span>Text Glow & Shadow</span>
                <span className="font-data-mono text-primary-container font-bold">{glowIntensity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={glowIntensity}
                onChange={(e) => setGlowIntensity(parseInt(e.target.value))}
                className="w-full accent-primary-container cursor-pointer h-1.5 bg-surface-container rounded-lg appearance-none"
              />
              <span className="text-[10px] text-outline/70">Adjust text glow highlight & pop effect.</span>
            </div>

            {/* Background Darkener / Dimmer Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-semibold text-outline">
                <span>Poster Background Darkener</span>
                <span className="font-data-mono text-primary-container font-bold">{bgOverlay}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={bgOverlay}
                onChange={(e) => setBgOverlay(parseInt(e.target.value))}
                className="w-full accent-primary-container cursor-pointer h-1.5 bg-surface-container rounded-lg appearance-none"
              />
              <span className="text-[10px] text-outline/70">0% = Full bright original poster colors.</span>
            </div>

            {/* Accent Color picker */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-outline">Accent Color</label>
              <div className="flex flex-wrap gap-xs">
                {accentColorsList.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAccentColor(color)}
                    style={{ backgroundColor: color }}
                    className={`h-8 w-8 rounded-full border transition-all ${
                      accentColor === color
                        ? "border-white ring-2 ring-primary-container scale-105"
                        : "border-outline-variant/60 hover:scale-102"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Platform dimensions */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-outline">Export Size</label>
              <select
                value={exportSize}
                onChange={(e) => setExportSize(e.target.value)}
                className="bg-surface-container border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container font-semibold"
              >
                <option>YouTube (2560 x 1440)</option>
                <option>Twitch (1200 x 480)</option>
                <option>Discord (960 x 540)</option>
                <option>Twitter/X (1500 x 500)</option>
              </select>
            </div>
          </div>

          <div className="mt-auto border-t border-outline-variant/40 pt-lg flex flex-col gap-sm">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? "Generating High-Res PNG..." : "Download Free"}
            </button>
            <span className="text-[10px] text-outline/80 text-center font-data-mono">
              High-resolution PNG / No watermark / Commercial use permitted
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
