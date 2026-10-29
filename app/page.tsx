"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WavyRibbon from "./components/WavyRibbon";
import FeaturedCollection from "./components/FeaturedCollection";
import SplitHighlight from "./components/SplitHighlight";
import PressBar from "./components/PressBar";
import CategoryArches from "./components/CategoryArches";
import CleanPillars from "./components/CleanPillars";
import RitualSteps from "./components/RitualSteps";
import Testimonials from "./components/Testimonials";
import CommunityGrid from "./components/CommunityGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import QuickViewModal from "./components/QuickViewModal";
import SkinQuizModal from "./components/SkinQuizModal";
import { PRODUCTS, Product, CartItem } from "./components/data";

export default function Home() {
  // Cart State (Initialized with 1 item so the user immediately sees the functionality)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Quick View Modal State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Skin Quiz Modal State
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`✓ "${product.name}" adicionado à sacola!`);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item from cart
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Filter or scroll when category arch is clicked
  const handleSelectCategory = (categoryId: string) => {
    const el = document.getElementById("colecao");
    el?.scrollIntoView({ behavior: "smooth" });
    if (categoryId === "bestsellers") {
      setQuickViewProduct(PRODUCTS[1]);
    } else if (categoryId === "favorites") {
      setQuickViewProduct(PRODUCTS[4]);
    } else {
      setQuickViewProduct(PRODUCTS[3]);
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242A1D] selection:bg-[#3D4A2D] selection:text-[#FAF7F2]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#28341B] text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-2xl border border-[#485B31] text-xs sm:text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span>🌿</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-[#D5E3C5] font-bold hover:text-white"
          >
            Ver Sacola
          </button>
        </div>
      )}

      {/* 1. Header & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section (Recreates the exact visual & floating card) */}
        <Hero
          onCtaClick={() => {
            const el = document.getElementById("colecao");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Wavy Ribbon Marquee (Exact curved signature element) */}
        <WavyRibbon />

        {/* 4. Featured Collection (3 Arch Cards with circular badges) */}
        <FeaturedCollection
          products={PRODUCTS}
          onOpenQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Split Feature Showcase ("Your New Fave" / "O Seu Novo Favorito") */}
        <SplitHighlight
          products={PRODUCTS}
          onOpenProduct={(p) => setQuickViewProduct(p)}
        />

        {/* 6. Press & Media Logos ("AS SEEN IN") */}
        <PressBar />

        {/* 7. Category Arches (3 Tall Arches with Centered Pills) */}
        <CategoryArches onSelectCategory={handleSelectCategory} />

        {/* --- NOVAS SESSÕES ADICIONAIS & ATRATIVAS EM PORTUGUÊS --- */}

        {/* 8. Nossos Pilares de Pureza & Biotecnologia Limpa */}
        <CleanPillars />

        {/* 9. O Ritual Botânico em 3 Passos (Interativo) */}
        <RitualSteps
          products={PRODUCTS}
          onOpenProduct={(p) => setQuickViewProduct(p)}
        />

        {/* 10. Resultados Comprovados & Avaliações da Comunidade */}
        <Testimonials />

        {/* 11. Galeria da Comunidade & Instagram */}
        <CommunityGrid />

        {/* 12. Clube Verdure (Newsletter com 15% OFF) */}
        <Newsletter />
      </main>

      {/* 13. Footer Completo de Luxo */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenQuickView={(p) => setQuickViewProduct(p)}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SkinQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        products={PRODUCTS}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
