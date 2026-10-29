"use client";

import React, { useState } from "react";
import { Product } from "./data";

interface RitualStepsProps {
  onOpenProduct: (product: Product) => void;
  products: Product[];
}

export default function RitualSteps({ onOpenProduct, products }: RitualStepsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      name: "Purificar & Equilibrar",
      role: "Limpeza Botânica Profunda",
      description: "Remove impurezas diárias, partículas de poluição e excesso de sebo sem agredir ou ressecar a camada lipídica protetora.",
      productIndex: 1, // Kit Sabonete / Gel
      tip: "Uso recomendado: Manhã e Noite com água morna.",
      highlight: "Extrato de Camomila & Sálvia",
    },
    {
      number: "02",
      name: "Tratar & Iluminar",
      role: "Elixir Antioxidante Ativo",
      description: "Penetra nas camadas celulares com Vitamina C pura e Esqualano para reativar o colágeno, clarear manchas e iluminar o viço.",
      productIndex: 3, // Sérum
      tip: "Uso recomendado: 3 a 4 gotas pela manhã antes do hidratante.",
      highlight: "Vitamina C 15% + Esqualano",
    },
    {
      number: "03",
      name: "Nutrir & Selar",
      role: "Hidratação de Barreira 48h",
      description: "Sela a umidade com ceramidas botânicas e manteiga de karité, conferindo toque aveludado e proteção o dia todo.",
      productIndex: 0, // Loção / Creme
      tip: "Uso recomendado: Diariamente após o sérum.",
      highlight: "Manteiga de Karité & Ceramidas",
    },
  ];

  const currentStep = steps[activeStep];
  const associatedProduct = products[currentStep.productIndex] || products[0];

  return (
    <section id="ritual" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-2">
            Metodologia Botânica
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242C19] tracking-tight mb-3">
            O Ritual em 3 Passos
          </h2>
          <p className="text-xs sm:text-sm text-[#576446]">
            Uma rotina minimalista e altamente potente. Menos passos, ingredientes superiores e resultados extraordinários.
          </p>
        </div>

        {/* Interactive Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EFE7D8] rounded-full border border-[#DDD3C0]">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`px-5 sm:px-8 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeStep === idx
                    ? "bg-[#3D4A2D] text-white shadow-md"
                    : "text-[#556740] hover:text-[#242C19]"
                }`}
              >
                <span>{step.number}</span>
                <span className="hidden sm:inline">{step.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content Card */}
        <div className="bg-[#F4EFE6] rounded-3xl border border-[#DFD5C2] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden bg-[#E7DEC9] shadow-inner border border-[#D5C9B2]">
              <img
                src={associatedProduct.image}
                alt={associatedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#3D4A2D] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Passo {currentStep.number}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase">
                {currentStep.role}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#242C19] font-normal">
                {currentStep.name}
              </h3>
            </div>

            <p className="text-sm text-[#4E5B3E] leading-relaxed">
              {currentStep.description}
            </p>

            {/* Step Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-[#DDD2BE]">
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block mb-1">
                  Ingrediente Chave
                </span>
                <span className="font-serif text-sm font-semibold text-[#242C19]">
                  🌿 {currentStep.highlight}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block mb-1">
                  Modo de Aplicação
                </span>
                <span className="text-xs text-[#4E5B3E] font-medium">
                  {currentStep.tip}
                </span>
              </div>
            </div>

            {/* Product Quick Buy Box */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <span className="text-xs text-stone-500 block">Produto Recomendado:</span>
                <span className="font-serif text-base font-bold text-[#242C19]">
                  {associatedProduct.name}
                </span>
                <span className="text-xs text-[#7A905E] font-semibold block">
                  R$ {associatedProduct.price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <button
                onClick={() => onOpenProduct(associatedProduct)}
                className="px-7 py-3 rounded-full bg-[#3D4A2D] hover:bg-[#252E1B] text-[#FAF7F2] text-xs font-bold tracking-[0.18em] uppercase shadow-md transition transform active:scale-95"
              >
                Conhecer o Produto
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

