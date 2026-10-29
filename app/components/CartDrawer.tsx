"use client";

import React from "react";
import { Product, CartItem } from "./data";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenQuickView: (product: Product) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 199;
  const progressPercent = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#242A1D] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E8E2D5] bg-[#F4EFE6]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#3D4A2D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h2 className="font-serif text-2xl tracking-tight text-[#2B351F]">
                  Sua Sacola
                </h2>
                <span className="text-xs bg-[#3D4A2D] text-white px-2 py-0.5 rounded-full font-medium">
                  {items.reduce((s, i) => s + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/50 transition"
                aria-label="Fechar carrinho"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="mt-4 pt-3 border-t border-[#E0D8CA]">
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span>
                  {remainingForFree > 0 ? (
                    <>
                      Faltam{" "}
                      <strong className="text-[#3D4A2D]">
                        R$ {remainingForFree.toFixed(2).replace(".", ",")}
                      </strong>{" "}
                      para <span className="underline">Frete Grátis</span>!
                    </>
                  ) : (
                    <span className="text-[#3D4A2D] font-bold flex items-center gap-1">
                      ✓ Parabéns! Você ganhou Frete Grátis!
                    </span>
                  )}
                </span>
                <span className="text-stone-600 font-semibold">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="w-full bg-[#E6DEC9] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#3D4A2D] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#7A905E] mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <p className="font-serif text-xl text-[#2B351F] mb-1">
                  Sua sacola está vazia
                </p>
                <p className="text-xs text-stone-500 max-w-xs mb-6">
                  Descubra os elixires e loções botânicas da nossa coleção para começar sua transformação.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#3D4A2D] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#2B351F] transition"
                >
                  Explorar Produtos
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white/70 rounded-2xl border border-[#EBE4D6] shadow-xs"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-xl bg-stone-100 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm font-semibold text-[#2B351F] leading-tight">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-stone-400 hover:text-red-600 transition p-1"
                          title="Remover item"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <span className="text-[11px] text-stone-500">
                        {product.volume}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-200 rounded-full bg-stone-50 px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="text-stone-500 hover:text-stone-900 w-5 h-5 flex items-center justify-center font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-stone-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="text-stone-500 hover:text-stone-900 w-5 h-5 flex items-center justify-center font-bold text-xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-semibold text-sm text-[#2B351F]">
                          R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E8E2D5] bg-[#F4EFE6] space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-800">
                    R$ {subtotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Frete estimado</span>
                  <span className="font-medium text-stone-800">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-[#3D4A2D] font-bold">Grátis</span>
                    ) : (
                      "Calculado no checkout"
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-[#2B351F] pt-2 border-t border-[#E0D8CA]">
                  <span>Total</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <div className="pt-1 space-y-2">
                <button
                  onClick={() =>
                    alert(
                      "Redirecionando para o Checkout Seguro! Obrigado por escolher a Verdure Botanicals."
                    )
                  }
                  className="w-full py-3.5 px-4 rounded-full bg-[#3D4A2D] text-white hover:bg-[#2B351F] text-xs font-bold tracking-widest uppercase shadow-md transition transform active:scale-98 flex items-center justify-center gap-2"
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Finalizar Compra Segura
                </button>
                <p className="text-[11px] text-center text-stone-500">
                  🔒 Pagamento 100% Criptografado • Pix & Até 12x no Cartão
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

