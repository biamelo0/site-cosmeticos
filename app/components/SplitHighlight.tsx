"use client";

import React from "react";
import { Product } from "./data";
import { getAssetPath } from "../utils/asset";

interface SplitHighlightProps {
  onOpenProduct: (product: Product) => void;
  products: Product[];
}

export default function SplitHighlight({ onOpenProduct, products }: SplitHighlightProps) {
  const favoriteProduct = products[4] || products[0];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column (Approx 60-65%): Wide Photographic Card */}
          <div className="lg:col-span-7 xl:col-span-8 relative rounded-3xl overflow-hidden shadow-xl border border-[#DFD5C2] min-h-[360px] sm:min-h-[460px] group">
            <img
              src={getAssetPath("/category-favorites.jpg")}
              alt="Composição de frascos e potes cosméticos em pedestais com luz natural e sombras botânicas"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            
            {/* Elegant overlay badge */}
            <div className="absolute top-6 left-6 bg-[#FAF7F2]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm">
              <span className="text-[11px] font-bold tracking-widest text-[#3B462C] uppercase">
                ✦ Bio-Formulação Exclusiva
              </span>
            </div>

            <div className="absolute bottom-6 right-6 hidden sm:block bg-stone-900/60 backdrop-blur-md text-[#FAF7F2] text-xs px-4 py-2 rounded-full">
              Luz natural & Frascos de vidro âmbar reciclável
            </div>
          </div>

          {/* Right Column (Approx 35-40%): Deep Forest Olive Card matching "Your New Fave" */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[#455334] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-xl border border-[#354027] relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6B8053]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#C4D4B1] block">
                Destaque da Estação
              </span>

              {/* Title matching "Your New Fave" */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-tight text-[#FAF7F2] tracking-tight">
                Your New Fave
              </h2>

              <p className="text-xs sm:text-sm text-[#D7E3C8] leading-relaxed font-light">
                Desenvolvido com esqualano botânico puro, óleo de rosa mosqueta prensado a frio e antioxidantes de alta potência. Uma textura sedosa que derrete na pele, nutrindo profundamente sem qualquer peso ou oleosidade.
              </p>

              {/* Key Features Bullet points */}
              <div className="pt-2 space-y-2 text-xs text-[#EAF2DE]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                  <span>Restaura o viço natural em minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                  <span>Hidratação prolongada de até 48 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                  <span>Toque aveludado com rápida absorção</span>
                </div>
              </div>
            </div>

            {/* White/Cream Pill CTA Button */}
            <div className="pt-8 relative z-10">
              <button
                onClick={() => onOpenProduct(favoriteProduct)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-white text-[#2B351F] text-xs font-bold tracking-[0.2em] uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Comprar Agora
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

