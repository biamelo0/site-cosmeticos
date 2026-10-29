"use client";

import React from "react";

export default function CommunityGrid() {
  const posts = [
    {
      image: "/community-1.jpg",
      handle: "@clarissaglow",
      caption: "Meu momento de paz matinal com a loção botânica ✨",
    },
    {
      image: "/community-2.jpg",
      handle: "@sofia.botanics",
      caption: "A textura desse creme batido é surreal de macia e nutritiva 🌿",
    },
    {
      image: "/community-3.jpg",
      handle: "@beatriz.skincare",
      caption: "Glow instantâneo com apenas 3 gotinhas do elixir natural 💧",
    },
    {
      image: "/community-4.jpg",
      handle: "@verdurebotanicals",
      caption: "O banho transformado em ritual de aromaterapia pura 🍃",
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
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold tracking-wide text-[#E3ECD7]">{post.handle}</span>
                <p className="text-[11px] text-stone-200 line-clamp-2 mt-1 leading-relaxed">
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
