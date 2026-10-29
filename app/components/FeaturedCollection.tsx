"use client";

import React from "react";
import { Product } from "./data";

interface FeaturedCollectionProps {
  products: Product[];
  onOpenQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function FeaturedCollection({
  products,
  onOpenQuickView,
  onAddToCart,
}: FeaturedCollectionProps) {
  // We display the top 3 items matching the image (Lotion, Body Wash, Shampoo)
  const featured = products.slice(0, 3);

  // Badges matching the image: "Cult Favorite", "Great Value", "Scrub a Dub Dub"
  const badges = [
    { text: "Cult Favorite", labelPt: "Mais Amado", color: "bg-[#CCD8B8] text-[#29341B]" },
    { text: "Great Value", labelPt: "Melhor Escolha", color: "bg-[#D9E1CC] text-[#29341B]" },
    { text: "Scrub a Dub", labelPt: "Edição Especial", color: "bg-[#E6DECB] text-[#29341B]" },
  ];

  return (
    <section id="colecao" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "Featured Collection" */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Rituais em Destaque
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242C19] tracking-tight mb-4">
            Featured Collection
          </h2>
          <div className="w-16 h-[2px] bg-[#3D4A2D] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-[#576446] leading-relaxed">
            Formulado com os mais nobres óleos e extratos da flora, desenvolvidos para nutrir a pele em sua camada mais profunda.
          </p>
        </div>

        {/* 3 Arch-Shaped Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {featured.map((product, idx) => {
            const badge = badges[idx] || badges[0];
            return (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Arch-Shaped Image Container with Overlapping Badge */}
                <div className="relative w-full">
                  {/* Arched Window (overflow-hidden only for the image and overlay) */}
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-[#ECE4D4] border border-[#DDD3C0] shadow-md group-hover:shadow-xl transition-all duration-500">
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Quick Action Overlay on Hover */}
                    <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <button
                        onClick={() => onOpenQuickView(product)}
                        className="px-5 py-2.5 rounded-full bg-[#FAF7F2] text-[#242C19] text-xs font-bold tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
                      >
                        Visualização Rápida
                      </button>
                    </div>
                  </div>

                  {/* Circular Badge Floating Outside / Overlapping the Arch Curve (Not clipped) */}
                  <div className="absolute top-2 right-0 sm:top-4 sm:right-1 z-20 pointer-events-none">
                    <div
                      className={`w-16 h-16 sm:w-[76px] sm:h-[76px] rounded-full ${badge.color} border-2 border-[#FAF7F2] shadow-lg flex flex-col items-center justify-center text-center p-1.5 transform group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <span className="text-[10px] sm:text-[11px] font-serif font-bold uppercase tracking-tight leading-tight px-1">
                        {badge.text}
                      </span>
                      <span className="text-[8px] opacity-75 font-sans mt-0.5">
                        {badge.labelPt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Title below the Arch */}
                <div className="mt-6 flex flex-col items-center space-y-2 w-full">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7A905E]">
                    {product.subtitle}
                  </span>

                  <h3 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#232C19] uppercase leading-snug hover:text-[#56673F] transition cursor-pointer" onClick={() => onOpenQuickView(product)}>
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm sm:text-base font-bold text-[#232C19]">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>

                  {/* Dark Pill Button matching "VIEW PRODUCT" in reference */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onOpenQuickView(product)}
                      className="px-7 py-2.5 rounded-full bg-[#3B462C] hover:bg-[#252E1B] text-[#FAF7F2] text-[11px] font-bold tracking-[0.2em] uppercase shadow-sm transition-all duration-200 transform active:scale-95"
                    >
                      Ver Produto
                    </button>
                    
                    <button
                      onClick={() => onAddToCart(product, 1)}
                      className="w-9 h-9 rounded-full border border-[#D5CDBD] text-[#3B462C] hover:bg-[#3B462C] hover:text-white transition flex items-center justify-center"
                      title="Adicionar à sacola diretamente"
                      aria-label="Adicionar à sacola"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

