import CustomizeClient from "./CustomizeClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: "esports" },
    { id: "cs2-tactical" },
    { id: "streaming" },
    { id: "minimalist" },
    { id: "modern-apex" },
    { id: "overwatch-hero" },
    { id: "gta-street" },
    { id: "rpg" },
    { id: "rocket-league" },
    { id: "pubg-mobile" },
    { id: "clash-of-clans" },
    { id: "forza-horizon" },
    { id: "asphalt-9" },
    { id: "genshin-impact" },
    { id: "roblox-virtual" },
    { id: "fifa-soccer" },
    { id: "cyberpunk-2077" },
    { id: "elden-ring" },
    { id: "among-us" },
    { id: "clash-royale" },
    { id: "twitch-valorant" },
    { id: "twitch-cod" },
    { id: "twitch-fortnite" },
    { id: "twitch-minecraft" },
    { id: "twitch-apex" },
    { id: "twitch-gtav" },
    { id: "discord-cyber-red" },
    { id: "discord-gold-tactical" },
    { id: "discord-liquid-ice" },
    { id: "discord-synth-clouds" },
    { id: "discord-dark-anime" },
    { id: "discord-purple-shorts" },
    { id: "discord-phase-freak" },
    { id: "discord-frantox-blue" },
    { id: "discord-zephyr-red" },
    { id: "discord-thumb-green" },
    { id: "discord-cyberpunk-yellow" },
    { id: "discord-toxic-glow" },
    { id: "discord-angelic-grace" },
    { id: "discord-abyssal-void" },
    { id: "discord-crimson-slayer" },
    { id: "discord-glitch-system" },
    { id: "discord-frost-bite" },
    { id: "discord-solar-flare" },
    { id: "discord-cosmic-nebula" },
    { id: "discord-phantom-spirit" },
    { id: "esports-pro" },
    { id: "stream-schedule" },
    { id: "clan-tag" },
    { id: "neon-glow" }
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const capitalized = id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `Customize ${capitalized} Gaming Banner | GAMINGBANNER`,
    description: `Edit and download your personalized ${capitalized} gaming channel art. Adjust colors, text tags, and export size.`,
  };
}

export default function CustomizePage({ params }) {
  return <CustomizeClient params={params} />;
}
