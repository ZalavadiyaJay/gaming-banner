// src/components/TableOfContents.js
"use client";

import { useState } from "react";

export default function TableOfContents({ items = [] }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-surface-container/80 border border-outline-variant/60 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-lg my-6">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2.5">
          <span className="text-lg">📑</span>
          <h3 className="font-extrabold text-sm md:text-base text-on-background tracking-tight">
            Table of Contents
          </h3>
          <span className="text-[10px] font-data-mono px-2 py-0.5 rounded bg-surface-container-high text-outline">
            {items.length} Sections
          </span>
        </div>
        <button
          type="button"
          className="text-xs text-outline hover:text-primary-container font-semibold transition-colors"
        >
          {isOpen ? "Hide ▲" : "Show ▼"}
        </button>
      </div>

      {isOpen && (
        <ol className="mt-4 space-y-2 text-xs md:text-sm border-t border-outline-variant/30 pt-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="font-data-mono text-primary-container font-bold text-xs mt-0.5">
                {(idx + 1).toString().padStart(2, "0")}.
              </span>
              <a
                href={`#${item.id}`}
                className="text-outline hover:text-primary-container hover:underline transition-colors leading-relaxed"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
