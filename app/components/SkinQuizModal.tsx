"use client";

import React, { useState } from "react";
import { Product } from "./data";

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function SkinQuizModal({
  isOpen,
  onClose,
  products,
  onAddToCart,
}: SkinQuizModalProps) {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState<string | null>(null);
  const [skinGoal, setSkinGoal] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSkinType(null);
    setSkinGoal(null);
  };

  const getRecommendation = () => {
    if (skinType === "Seca" || skinGoal === "Hidratação") {
      return products[0]; // Loção Hidratante
    }
    if (skinType === "Oleosa" || skinGoal === "Poros") {
      return products[1]; // Sabonete Botânico
    }
    return products[3]; // Sérum Vitamina C
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#DFD6C4] z-10 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 transition"
          >
            ✕
          </button>

          {/* Quiz Header */}
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#7A905E] uppercase block mb-1">
              Consultoria Personalizada
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#242C19]">
              Descubra seu Ritual Botânico
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Responda a 2 perguntas rápidas para encontrar a fórmula perfeita para sua pele.
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#EAE2D2] h-1.5 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-[#3D4A2D] h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step 1: Skin Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-serif text-base font-semibold text-[#242C19] text-center mb-3">
                1. Como você descreve a sua pele hoje?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Seca & Desidratada", id: "Seca", desc: "Sensação de repuxamento" },
                  { label: "Mista", id: "Mista", desc: "Brilho na zona T, seca nas bochechas" },
                  { label: "Oleosa / Acneica", id: "Oleosa", desc: "Poros aparentes e excesso de brilho" },
                  { label: "Sensível", id: "Sensível", desc: "Avermelhamento com facilidade" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSkinType(item.id);
                      setStep(2);
                    }}
                    className="p-4 rounded-2xl border border-[#DDD3C0] bg-white hover:border-[#3D4A2D] hover:bg-[#F3EFE6] text-left transition-all duration-200 group"
                  >
                    <span className="font-serif text-sm font-bold text-[#242C19] block group-hover:text-[#3D4A2D]">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Main Goal */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-serif text-base font-semibold text-[#242C19] text-center mb-3">
                2. Qual o seu principal objetivo de autocuidado?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Luminosidade & Glow", id: "Glow", desc: "Uniformizar manchas e viço" },
                  { label: "Hidratação Profunda", id: "Hidratação", desc: "Restaurar a barreira e maciez" },
                  { label: "Controle de Poros", id: "Poros", desc: "Limpeza e toque seco" },
                  { label: "Linhas & Firmeza", id: "Linhas", desc: "Estímulo de colágeno natural" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSkinGoal(item.id);
                      setStep(3);
                    }}
                    className="p-4 rounded-2xl border border-[#DDD3C0] bg-white hover:border-[#3D4A2D] hover:bg-[#F3EFE6] text-left transition-all duration-200 group"
                  >
                    <span className="font-serif text-sm font-bold text-[#242C19] block group-hover:text-[#3D4A2D]">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
              <div className="pt-2 text-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-500 underline hover:text-stone-800"
                >
                  ← Voltar à pergunta anterior
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result & Recommendation */}
          {step === 3 && (
            <div className="space-y-5 text-center">
              <div className="inline-block px-3 py-1 bg-[#EAE2D2] text-[#3D4A2D] text-xs font-bold rounded-full uppercase tracking-wider">
                Recomendação Sob Medida para Pele {skinType}
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#DDD3C0] flex items-center gap-4 text-left">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-20 h-24 object-cover rounded-xl bg-stone-100 flex-shrink-0"
                />
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-[#7A905E] uppercase tracking-wider">
                    Fórmula Ideal
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#242C19]">
                    {rec.name}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                    {rec.description}
                  </p>
                  <span className="font-serif text-sm font-bold text-[#242C19] block mt-1.5">
                    R$ {rec.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    onAddToCart(rec, 1);
                    onClose();
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#3D4A2D] text-white hover:bg-[#252E1B] text-xs font-bold tracking-widest uppercase shadow-md transition"
                >
                  Adicionar Recomendação à Sacola
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-1"
                >
                  Refazer o Quiz
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

