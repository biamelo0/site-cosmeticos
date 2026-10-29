"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#242D1A] text-[#FAF7F2] pt-16 sm:pt-20 pb-12 border-t border-[#1C2314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#354127]">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl tracking-tight text-[#FAF7F2] font-normal block">
              Verdure Botanicals
            </span>
            <p className="text-xs text-[#CCD9BD] leading-relaxed max-w-sm">
              Cosméticos biotecnológicos e rituais botânicos formulados para restabelecer a vitalidade, elasticidade e o viço natural da sua pele através de ingredientes 100% puros e sustentáveis.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-[#B2C49F]">
              <span>🌿 100% Vegano</span>
              <span>•</span>
              <span>🐰 Cruelty-Free</span>
              <span>•</span>
              <span>♻️ Vidro Reciclável</span>
            </div>
          </div>

          {/* Column 1: Navegação */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#E3ECD7]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#B8C8A6]">
              <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition">Nossa Filosofia</a></li>
              <li><a href="#colecao" className="hover:text-white transition">Coleção em Destaque</a></li>
              <li><a href="#ritual" className="hover:text-white transition">O Ritual em 3 Passos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition">Avaliações Reais</a></li>
            </ul>
          </div>

          {/* Column 2: Coleções */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#E3ECD7]">
              Coleções
            </h4>
            <ul className="space-y-2 text-xs text-[#B8C8A6]">
              <li><a href="#colecao" className="hover:text-white transition">Loções Hidratantes</a></li>
              <li><a href="#colecao" className="hover:text-white transition">Séruns & Elixires</a></li>
              <li><a href="#colecao" className="hover:text-white transition">Kits Corporais</a></li>
              <li><a href="#colecao" className="hover:text-white transition">Cuidado Capilar Botânico</a></li>
              <li><a href="#colecao" className="hover:text-white transition">Edições Limitadas</a></li>
            </ul>
          </div>

          {/* Column 3: Atendimento */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#E3ECD7]">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs text-[#B8C8A6]">
              <li><span className="text-[#8E9F7B] block text-[11px]">E-mail de Suporte:</span> contato@verdurebotanicals.com.br</li>
              <li><span className="text-[#8E9F7B] block text-[11px]">WhatsApp Concierge:</span> (11) 98765-4321</li>
              <li><span className="text-[#8E9F7B] block text-[11px]">Horário:</span> Seg a Sex das 09h às 18h</li>
              <li><a href="#contato" className="hover:text-white transition">Política de Trocas & Devoluções</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer: Payment badges & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9BB087]">
          <div>
            © 2026 Verdure Botanicals Cosméticos Ltda. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-3 text-[11px] bg-[#1E2516] px-4 py-2 rounded-full border border-[#2D3820]">
            <span>Pagamento Seguro:</span>
            <span className="font-semibold text-white">PIX (5% OFF)</span>
            <span>•</span>
            <span className="font-semibold text-white">Cartões até 12x</span>
            <span>•</span>
            <span className="font-semibold text-white">Boleto</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

