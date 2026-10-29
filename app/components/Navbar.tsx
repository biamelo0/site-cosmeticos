"use client";

import React, { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenQuiz }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#2D3820] text-[#FAF7F2] text-[11px] sm:text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span>Frete grátis para compras acima de R$ 199 em todo o Brasil</span>
        <span className="opacity-80">→</span>
        <button
          onClick={onOpenQuiz}
          className="ml-2 underline hover:text-[#C29B38] transition font-semibold"
        >
          Faça o Quiz de Pele
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE3D5] px-4 sm:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-[11px] lg:text-xs font-semibold tracking-widest text-[#414E32] uppercase">
            <a
              href="#inicio"
              className="hover:text-[#1F2716] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#3D4A2D] after:transition-all"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-[#1F2716] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#3D4A2D] after:transition-all"
            >
              Sobre
            </a>
            <a
              href="#colecao"
              className="hover:text-[#1F2716] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#3D4A2D] after:transition-all"
            >
              Coleção
            </a>
            <a
              href="#ritual"
              className="hover:text-[#1F2716] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#3D4A2D] after:transition-all"
            >
              O Ritual
            </a>
            <a
              href="#contato"
              className="hover:text-[#1F2716] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#3D4A2D] after:transition-all"
            >
              Contato
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#2B351F] p-1.5 focus:outline-hidden"
              aria-label="Abrir menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center Brand Logo */}
          <div className="text-center">
            <a href="#inicio" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#2D3820] font-normal block">
                Verdure Botanicals
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#7A905E] uppercase block font-medium -mt-1 group-hover:tracking-[0.35em] transition-all duration-300">
                Puro • Vegano • Biotecnológico
              </span>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[#2D3820]">
            {/* Search Button */}
            <button
              onClick={() => {
                const el = document.getElementById("colecao");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-1.5 hover:text-[#7A905E] transition"
              title="Buscar produtos"
              aria-label="Buscar"
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
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Quiz Action Badge */}
            <button
              onClick={onOpenQuiz}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D5CDBD] text-[#3D4A2D] hover:bg-[#3D4A2D] hover:text-white transition"
            >
              <span>🌿</span> Quiz de Pele
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 hover:text-[#7A905E] transition group"
              title="Abrir sacola"
              aria-label="Sacola de compras"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#3D4A2D] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#E8E2D5] mt-3 space-y-3 text-center text-xs font-bold tracking-widest uppercase text-[#3D4A2D]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#1B2113]"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#1B2113]"
            >
              Sobre a Marca
            </a>
            <a
              href="#colecao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#1B2113]"
            >
              Coleção em Destaque
            </a>
            <a
              href="#ritual"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#1B2113]"
            >
              O Ritual Botânico
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#1B2113]"
            >
              Avaliações
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-2 bg-[#3D4A2D] text-white rounded-full uppercase tracking-wider text-[11px]"
            >
              Fazer Quiz de Pele
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

