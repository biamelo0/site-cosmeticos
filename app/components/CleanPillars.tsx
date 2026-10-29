"use client";

import React from "react";

export default function CleanPillars() {
  const pillars = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#56683F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9 4.14 0 7.63 2.81 8.68 6.64.12.44-.22.86-.68.86h-3.32c-.52 0-.96.38-1.03.9-.22 1.63-1.63 2.9-3.35 2.9h-1.3c-.55 0-1 .45-1 1v1.3c0 1.72-1.27 3.13-2.9 3.35-.52.07-.9.51-.9 1.03v.28c0 .46.42.8.86.68A8.96 8.96 0 0012 21z" />
        </svg>
      ),
      title: "100% Bioativo & Vegano",
      description: "Fórmulas puras, sem parabenos, sulfatos, silicones ou fragrâncias sintéticas. Respeito total ao microbioma cutâneo.",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#56683F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Embalagens Sustentáveis",
      description: "Frascos de vidro âmbar infinitamente recicláveis e sistema de refil que reduz em até 78% o uso de plástico.",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#56683F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Cruelty-Free Certificado",
      description: "Amor irrestrito à vida animal. Nenhum dos nossos ingredientes ou produtos finais jamais foi testado em animais.",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#56683F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Eficácia Clínica Comprovada",
      description: "Bioativos com testes dermatológicos rigorosos que comprovam aumento de hidratação e firmeza em até 14 dias.",
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-[#F4EFE6] border-y border-[#E6DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Nossa Promessa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242C19] tracking-tight mb-3">
            Pureza Botânica & Alta Performance
          </h2>
          <p className="text-xs sm:text-sm text-[#576446]">
            Unimos a sabedoria ancestral das plantas à biotecnologia cosmética verde para criar resultados reais e visíveis.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#E4DAC8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EBE3D3] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#3D4A2D] group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#242C19] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#5D6B4E] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

