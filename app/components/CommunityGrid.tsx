"use client";

import React from "react";

export default function CommunityGrid() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      handle: "@clarissaglow",
      caption: "Meu momento de paz no café da manhã ✨",
    },
    {
      image: "https://images.unsplash.com/photo-1512290900672-1f4a9b6c0e5a?auto=format&fit=crop&w=600&q=80",
      handle: "@sofia.botanics",
      caption: "A textura dessa loção é surreal de macia 🌿",
    },
    {
      image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
      handle: "@beatriz.skincare",
      caption: "Sem químicas, só ingredientes da natureza 💧",
    },
    {
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      handle: "@verdurebotanicals",
      caption: "Detalhes do nosso frasco âmbar reciclável 🍃",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Comunidade #GlowVerdure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242C19] tracking-tight mb-2">
            Siga Nosso Ritual
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#54663E] hover:underline"
          >
            @verdurebotanicals no Instagram
          </a>
        </div>

        {/* 4 Image Grid with Smooth Hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-[#E8E0D0] border border-[#DDD3C0] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-bold">{post.handle}</span>
                <p className="text-[11px] text-stone-300 line-clamp-2 mt-1">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

