"use client";

import React from "react";

export default function PressBar() {
  const mediaList = [
    { name: "VOGUE", font: "font-serif text-2xl tracking-widest font-bold" },
    { name: "ELLE", font: "font-serif text-2xl tracking-[0.3em] font-light" },
    { name: "Marie Claire", font: "font-serif text-xl tracking-tight italic" },
    { name: "Traveler", font: "font-serif text-xl tracking-wider uppercase font-semibold" },
    { name: "BAZAAR", font: "font-serif text-2xl tracking-[0.25em] font-normal" },
    { name: "seventeen", font: "font-sans text-xl lowercase font-bold tracking-tight" },
    { name: "Saks Fifth Avenue", font: "font-serif text-lg tracking-wider font-light" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4EFE6] border-y border-[#E5DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle matching "AS SEEN IN" */}
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] text-[#7A905E] uppercase block mb-8">
          AS SEEN IN • EM DESTAQUE NA MÍDIA
        </span>

        {/* Media Brand Names Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 text-[#4D5A3A]/80">
          {mediaList.map((media, index) => (
            <div
              key={index}
              className={`${media.font} hover:text-[#242C19] hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default select-none`}
            >
              {media.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

