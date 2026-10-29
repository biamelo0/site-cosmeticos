import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verdure Botanicals | Cosméticos Naturais & Bioativos de Luxo",
  description:
    "Cosméticos botânicos 100% veganos, biotecnologia limpa e rituais de autocuidado para a saúde e viço natural da sua pele.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#242A1D] font-sans selection:bg-[#3B462C] selection:text-[#FAF7F2]">
        {children}
      </body>
    </html>
  );
}
