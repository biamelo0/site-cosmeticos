"use client";

import React from "react";

interface HeroProps {
  onCtaClick: () => void;
  onOpenQuiz: () => void;
}

export default function Hero({ onCtaClick, onOpenQuiz }: HeroProps) {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#E8E0D0] pt-4 pb-12 sm:pb-20 lg:py-24">
      {/* Background Ambience: warm botanical gradient & leaf shadow overlay */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#F4EFE6] via-[#E8E0D0] to-[#D5C8B4] opacity-90" />
      
      {/* Organic Leaf Background Silhouettes */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950 via-transparent to-transparent" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D5C9B4] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
          
          {/* Main Hero Background Image: Custom High-End Botanical Pedestal Staging */}
          <div className="absolute inset-0 bg-[#D8CEBA]">
            <img
              src="/hero-botanicals.jpg"
              alt="Cosméticos Botânicos Verdure em pedestais arquitetônicos com iluminação natural e sombras tropicais"
              className="w-full h-full object-cover object-[70%_center] sm:object-center transform scale-100 hover:scale-102 transition-transform duration-1000 ease-out"
            />
            {/* Subtle gentle vignette on mobile so text is crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 via-stone-950/20 to-transparent sm:from-stone-900/30 sm:via-transparent sm:to-transparent lg:hidden" />
          </div>

          {/* Floating Hero Card (exact recreation of the iconic white card in the reference image) */}
          <div className="relative z-10 p-5 sm:p-10 lg:p-14 max-w-xl">
            <div className="bg-[#FAF7F2]/95 backdrop-blur-md p-7 sm:p-10 rounded-3xl shadow-2xl border border-[#EDE5D8] max-w-md transition-all duration-300 hover:shadow-3xl">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7A905E] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#55693F] uppercase">
                  Lançamento Exclusivo
                </span>
              </div>

              {/* Title matching "This site could be yours" */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#222B18] leading-[1.15] mb-4">
                A essência pura da sua pele
              </h1>

              {/* Subtitle matching reference */}
              <p className="text-xs sm:text-sm text-[#4E5B3E] font-normal leading-relaxed mb-8">
                Fórmulas limpas, 100% veganas e ricas em bioativos botânicos prensados a frio. Desenvolvidas para restaurar a luminosidade natural e o equilíbrio da sua pele.
              </p>

              {/* CTA Button matching "SHOP NOW" */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onCtaClick}
                  className="px-8 py-3.5 rounded-full bg-[#344024] hover:bg-[#232C17] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  Comprar Agora
                </button>

                <button
                  onClick={onOpenQuiz}
                  className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#344024] text-xs font-semibold tracking-wider transition-all duration-300 border border-[#D7CCB8] text-center"
                >
                  Descubra seu Ritual
                </button>
              </div>

              {/* Trust Badges under CTA */}
              <div className="mt-6 pt-5 border-t border-[#E8DEC9] flex items-center justify-between text-[11px] text-[#55693F]">
                <span className="flex items-center gap-1">
                  🌿 100% Vegano
                </span>
                <span className="flex items-center gap-1">
                  🐰 Cruelty-Free
                </span>
                <span className="flex items-center gap-1">
                  ✨ Eficácia Clínica
                </span>
              </div>
            </div>
          </div>

          {/* Floating Subtle Botanical Label at Bottom Right */}
          <div className="hidden lg:flex items-center gap-2 absolute bottom-8 right-8 z-10 bg-white/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EDE5D8] shadow-lg text-xs text-[#344024] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A905E]" />
            ✦ Rituais diários com óleos botânicos puros
          </div>
        </div>
      </div>
    </section>
  );
}
