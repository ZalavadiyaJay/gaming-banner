"use client";

export default function TemplatesNav({ selectedGame = "All", onSelectGame }) {
  const games = [
    "All",
    "Valorant",
    "Minecraft",
    "Fortnite",
    "Call of Duty",
    "GTA V",
    "Apex Legends",
    "League of Legends",
    "Rocket League",
    "PUBG Mobile",
    "Clash of Clans",
    "Forza Horizon",
    "Asphalt 9",
    "Genshin Impact",
    "Roblox",
    "EA Sports FC",
    "Cyberpunk 2077",
    "Elden Ring",
    "Among Us",
    "Clash Royale",
    "Overwatch 2"
  ];

  return (
    <div className="w-full border-b border-outline-variant/40 bg-surface-container/20 pb-sm mb-lg">
      <div className="w-full max-w-[1440px] mx-auto px-md md:px-xl flex items-center justify-start md:justify-center gap-xs overflow-x-auto scrollbar-hide py-xs">
        {games.map((game, idx) => {
          const isActive = (selectedGame || "All") === game;
          return (
            <button
              key={idx}
              onClick={() => onSelectGame && onSelectGame(game)}
              className={`px-md py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all tracking-wider cursor-pointer ${
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-md shadow-primary-container/10 scale-102"
                  : "bg-surface-container border border-outline-variant/60 text-outline hover:border-outline hover:text-on-background"
              }`}
            >
              {game}
            </button>
          );
        })}
      </div>
    </div>
  );
}
