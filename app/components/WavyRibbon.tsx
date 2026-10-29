"use client";

import React from "react";

export default function WavyRibbon() {
  const marqueeItems = [
    "✦ OFERTAS ESPECIAIS DE LANÇAMENTO",
    "✦ 100% VEGANO & CRUELTY-FREE",
    "✦ FRETE GRÁTIS ACIMA DE R$ 199",
    "✦ BIOATIVOS PRENSADOS A FRIO",
    "✦ RESULTADOS CLÍNICOS COMPROVADOS",
    "✦ DERMATOLOGICAMENTE TESTADO",
    "✦ USE O CUPOM 'VERDURE15' PARA 15% OFF",
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 -my-4 z-20 pointer-events-none select-none">
      {/* Curved SVG Wave Ribbon */}
      <div className="relative w-full h-24 sm:h-28 flex items-center justify-center">
        
        {/* Soft Background Wave Shadow for Depth */}
        <svg
          className="absolute inset-0 w-full h-full text-[#2B351F]/10 transform translate-y-1"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,110 480,10 720,60 C960,110 1120,10 1440,60 L1440,110 C1120,60 960,160 720,110 C480,60 320,160 0,110 Z"
            fill="currentColor"
          />
        </svg>

        {/* The White/Cream Ribbon with Soft Green Outline */}
        <svg
          className="absolute inset-0 w-full h-full text-[#FAF7F2]"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Fill shape */}
          <path
            d="M0,50 C320,100 480,0 720,50 C960,100 1120,0 1440,50 L1440,100 C1120,50 960,150 720,100 C480,50 320,150 0,100 Z"
            fill="#FAF7F2"
            stroke="#D6CEBE"
            strokeWidth="1.5"
          />
        </svg>

        {/* Continuous Animated Marquee text running along the center */}
        <div className="relative z-10 w-full flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap text-[#344125] font-serif text-sm sm:text-base tracking-[0.2em] font-semibold py-1">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span
                key={idx}
                className="mx-6 sm:mx-10 flex items-center gap-3 drop-shadow-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

