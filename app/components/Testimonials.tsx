"use client";

import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Mariana Alencar",
      location: "São Paulo, SP",
      rating: 5,
      date: "Há 3 dias",
      product: "Loção Hidratante Intensiva",
      verified: true,
      text: "Eu tinha a pele extremamente ressecada por causa do ar-condicionado no escritório. Em 5 dias usando a loção, a textura mudou completamente: ficou sedosa, iluminada e com um perfume botânico que acalma a mente.",
    },
    {
      name: "Dra. Carolina Mendes",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      date: "Há 1 semana",
      product: "Sérum Facial Antioxidante C+E",
      verified: true,
      text: "Como dermatologista, sou muito criteriosa com formulações. O sérum da Verdure Botanicals surpreendeu pela estabilidade e pela textura não-oleosa. A concentração de vitamina C é real e o efeito glow é imediato.",
    },
    {
      name: "Beatriz Vasconcelos",
      location: "Belo Horizonte, MG",
      rating: 5,
      date: "Há 2 semanas",
      product: "Kit Sabonete Botânico",
      verified: true,
      text: "O banho se transformou em uma sessão de spa. A fragrância de eucalipto e sálvia é relaxante e você sente que a pele fica hidratada mesmo antes de passar o creme corporal. Já virou meu presente favorito para as amigas!",
    },
  ];

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#F4EFE6] border-y border-[#E5DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pb-16 border-b border-[#DDD2BE]">
          <div className="p-4">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D4A2D] block">
              98%
            </span>
            <span className="text-xs text-[#5D6B4E] font-medium mt-1 block">
              Notaram a pele mais hidratada e viçosa em 7 dias
            </span>
          </div>
          <div className="p-4">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D4A2D] block">
              94%
            </span>
            <span className="text-xs text-[#5D6B4E] font-medium mt-1 block">
              Sentiram melhora visível na textura e poros
            </span>
          </div>
          <div className="p-4">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D4A2D] block">
              4.9★
            </span>
            <span className="text-xs text-[#5D6B4E] font-medium mt-1 block">
              Média de avaliação entre mais de 3.200 clientes
            </span>
          </div>
          <div className="p-4">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D4A2D] block">
              100%
            </span>
            <span className="text-xs text-[#5D6B4E] font-medium mt-1 block">
              Fórmulas veganas & Cruelty-Free comprovadas
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mt-14 mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Comunidade & Experiências Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242C19] tracking-tight">
            O Que Dizem Sobre Nós
          </h2>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#DFD6C4] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#C29B38] text-base tracking-widest">
                    {"★".repeat(rev.rating)}
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] bg-[#EAE2D2] text-[#4F5E3B] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                      ✓ Compra Verificada
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#4E5C3D] leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE4D5]">
                <span className="text-[11px] font-semibold text-[#7A905E] block">
                  Produto: {rev.product}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-serif text-sm font-bold text-[#242C19]">
                    {rev.name}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

