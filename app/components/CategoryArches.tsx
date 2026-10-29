"use client";

import React from "react";

interface CategoryArchesProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function CategoryArches({ onSelectCategory }: CategoryArchesProps) {
  const categories = [
    {
      id: "bestsellers",
      title: "SHOP BESTSELLERS",
      titlePt: "MAIS VENDIDOS",
      image: "/category-bestsellers.jpg",
      shape: "rounded-[45px] sm:rounded-[65px]",
    },
    {
      id: "favorites",
      title: "SHOP FAVORITES",
      titlePt: "NOSSOS FAVORITOS",
      image: "/category-favorites.jpg",
      shape: "rounded-full", // Oval arch matching center of reference image
    },
    {
      id: "new",
      title: "SHOP NEW",
      titlePt: "LANÇAMENTOS",
      image: "/category-new.jpg",
      shape: "rounded-[45px] sm:rounded-[65px]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Navegue por Categoria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242C19] tracking-tight">
            Descubra Seu Próximo Cuidado
          </h2>
          <div className="w-12 h-[2px] bg-[#3D4A2D] mx-auto mt-3" />
        </div>

        {/* 3 Arches Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {/* Shaped Image Container */}
              <div
                className={`relative w-full aspect-[3/4] sm:aspect-[2/3] ${cat.shape} overflow-hidden bg-[#ECE4D4] border border-[#DDD3C0] shadow-md group-hover:shadow-2xl transition-all duration-500`}
              >
                <img
                  src={cat.image}
                  alt={cat.titlePt}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors duration-300" />

                {/* Center White Pill Button matching reference exactly */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-[#FAF7F2]/95 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-full shadow-xl border border-white/90 group-hover:bg-white group-hover:scale-105 transition-all duration-300 text-center">
                    <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.18em] text-[#28331B] uppercase block">
                      {cat.title}
                    </span>
                    <span className="text-[9px] tracking-wider text-[#697A52] uppercase font-sans font-semibold mt-0.5 block">
                      {cat.titlePt}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
