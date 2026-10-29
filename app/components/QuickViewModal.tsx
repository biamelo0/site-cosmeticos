"use client";

import React, { useState } from "react";
import { Product } from "./data";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-[#FAF7F2] rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#E8E2D5] z-10 flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-100/80 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition"
          >
            ✕
          </button>

          {/* Product Image Column with Arch styling */}
          <div className="md:w-1/2 p-6 bg-[#F3ECE1] flex items-center justify-center relative">
            <div className="w-full aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-inner bg-white/50 border border-[#E0D7C6]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <span
                className={`absolute top-8 left-8 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Details Column */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-[#7A905E] uppercase">
                {product.category} • {product.volume}
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#2B351F] leading-snug">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#C29B38] text-sm">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs text-stone-600 font-medium">
                  {product.rating.toFixed(1)} ({product.reviewCount} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-serif text-2xl font-bold text-[#2B351F]">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
                <span className="text-xs text-stone-500">
                  ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed border-t border-[#E8E2D5] pt-3">
                {product.description}
              </p>

              {/* Ingredients tag cloud */}
              <div>
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  Bioativos Selecionados:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-[#EFE8DC] text-[#3D4A2D] px-2.5 py-1 rounded-full font-medium"
                    >
                      🌿 {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#E8E2D5] space-y-3 mt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-stone-300 rounded-full bg-white px-3 py-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-stone-500 hover:text-stone-900 w-6 h-6 flex items-center justify-center font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-stone-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-stone-500 hover:text-stone-900 w-6 h-6 flex items-center justify-center font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-[#3D4A2D] text-white hover:bg-[#2B351F] text-xs font-bold tracking-widest uppercase shadow-md transition transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Adicionar à Sacola
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500">
                <span>✓ 100% Vegano</span>
                <span>✓ Frete Rápido</span>
                <span>✓ Devolução em 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

