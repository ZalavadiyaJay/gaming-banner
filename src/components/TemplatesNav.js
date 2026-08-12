"use client";

import { useRef } from "react";

export default function TemplatesNav({ selectedGame = "All", onSelectGame }) {
  const scrollRef = useRef(null);

  const games = [
    "All",
    "Valorant",
    "Minecraft",
    "Fortnite",
    "Call of Duty",
    "Counter Strike 2",
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

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full border-b border-outline-variant/40 bg-surface-container/20 py-1 mb-sm relative">
      <div className="w-full max-w-[1440px] mx-auto px-sm md:px-xl flex items-center relative">
        {/* Left Scroll Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant/60 text-on-background text-base font-bold shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all z-10 mr-xs flex-shrink-0 cursor-pointer"
          title="Scroll Left"
        >
          ‹
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-xs overflow-x-auto scroll-smooth py-xs px-xs w-full scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {games.map((game, idx) => {
            const isActive = (selectedGame || "All") === game;
            return (
              <button
                key={idx}
                onClick={() => onSelectGame && onSelectGame(game)}
                className={`px-md py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all tracking-wider cursor-pointer flex-shrink-0 ${
                  isActive
                    ? "bg-primary-container text-on-primary-container shadow-md shadow-primary-container/20 scale-102"
                    : "bg-surface-container border border-outline-variant/60 text-outline hover:border-outline hover:text-on-background"
                }`}
              >
                {game}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => handleScroll("right")}
          className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant/60 text-on-background text-base font-bold shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all z-10 ml-xs flex-shrink-0 cursor-pointer"
          title="Scroll Right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
