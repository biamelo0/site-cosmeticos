"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Olive Card Container */}
        <div className="bg-[#3D4A2D] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl relative overflow-hidden border border-[#2F3A22]">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#5E7246]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#7A905E]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#CADBB7] block">
              Clube Verdure
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF7F2]">
              Receba 15% OFF na Sua Primeira Compra
            </h2>

            <p className="text-xs sm:text-sm text-[#D6E3C7] leading-relaxed">
              Junte-se à nossa comunidade para ter acesso antecipado a lançamentos, rituais sazonais e conteúdos exclusivos sobre cosmetologia botânica.
            </p>

            {subscribed ? (
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white font-medium text-sm animate-in fade-in duration-300">
                🎉 Bem-vindo(a) ao Clube Verdure! Seu cupom <strong>VERDURE15</strong> já está pronto para uso na sua sacola!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail..."
                  required
                  className="flex-1 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#242C19] placeholder-stone-500 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#CADBB7]"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#202716] hover:bg-[#151B0F] text-[#FAF7F2] text-xs font-bold tracking-[0.18em] uppercase transition shadow-lg shrink-0"
                >
                  Quero Meu Cupom
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#A8BA94] pt-2">
              🔒 Respeitamos sua privacidade. Cancele a inscrição quando quiser com 1 clique.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

