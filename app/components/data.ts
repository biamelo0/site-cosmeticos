export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeColor?: string;
  image: string;
  description: string;
  volume: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "lot-01",
    name: "Loção Hidratante Intensiva",
    subtitle: "Buttery Smooth Lotion",
    category: "Corpo & Rosto",
    price: 149,
    originalPrice: 179,
    rating: 4.9,
    reviewCount: 142,
    badge: "Mais Amado",
    badgeColor: "bg-[#7A905E] text-white",
    image: "/featured-lotion.jpg",
    description: "Uma loção rica e aveludada infundida com manteiga de karité pura, esqualano vegetal e óleo de semente de uva. Proporciona hidratação de 48 horas com absorção instantânea sem deixar sensação pegajosa.",
    volume: "250ml",
    ingredients: ["Manteiga de Karité Orgânica", "Esqualano Vegetal 100% Puro", "Óleo de Semente de Uva", "Extrato de Camomila"],
    benefits: ["Barreira protetora restaurada", "Toque aveludado e sedoso", "Aroma botânico suave e calmante"],
    usage: "Aplique massageando suavemente em movimentos circulares sobre a pele limpa após o banho.",
  },
  {
    id: "bnd-02",
    name: "Kit Sabonete Botânico",
    subtitle: "Body Wash Bundle",
    category: "Banho & Rituais",
    price: 189,
    originalPrice: 220,
    rating: 5.0,
    reviewCount: 98,
    badge: "Mais Vendido",
    badgeColor: "bg-[#3D4A2D] text-[#FAF7F2]",
    image: "/featured-bodywash.jpg",
    description: "Duo purificante enriquecido com extratos de eucalipto, sálvia e óleo de jojoba. Limpa delicadamente a pele enquanto preserva a barreira lipídica e proporciona um verdadeiro banho de aromaterapia.",
    volume: "2x 300ml",
    ingredients: ["Óleo de Jojoba Prensado a Frio", "Extrato Botânico de Sálvia", "Óleo Essencial de Eucalipto", "Pantenol (Pró-Vitamina B5)"],
    benefits: ["Limpeza suave sem sulfatos pesados", "Equilíbrio do microbioma da pele", "Sensação refrescante de spa"],
    usage: "Espalhe sobre a pele úmida, respire os aromas botânicos profundos e enxágue com água morna.",
  },
  {
    id: "shm-03",
    name: "Kit Shampoo & Condicionador",
    subtitle: "Shampoo Bundle",
    category: "Cabelos Botânicos",
    price: 219,
    originalPrice: 260,
    rating: 4.8,
    reviewCount: 86,
    badge: "Edição Especial",
    badgeColor: "bg-[#C29B38] text-white",
    image: "/featured-shampoo.jpg",
    description: "Ritual capilar botânico desenvolvido com biotina vegetal, óleo de pracaxi e extrato de alecrim. Estimula o crescimento saudável, restaura o brilho espelhado e fortalece os fios da raiz às pontas.",
    volume: "2x 250ml",
    ingredients: ["Biotina Vegetal", "Óleo Amazônico de Pracaxi", "Extrato de Alecrim Orgânico", "Aminoácidos da Aveia"],
    benefits: ["Fios encorpados e resistentes", "Controle de frizz natural sem silicones", "Couro cabeludo desintoxicado"],
    usage: "Massageie o shampoo no couro cabeludo molhado. Enxágue e aplique o condicionador do comprimento às pontas.",
  },
  {
    id: "srm-04",
    name: "Sérum Facial Antioxidante C+E",
    subtitle: "Radiance Botanical Elixir",
    category: "Rosto & Tratamento",
    price: 169,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 214,
    badge: "Novo",
    badgeColor: "bg-[#7A905E] text-white",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    description: "Concentrado biotecnológico com 15% de Vitamina C estabilizada, Ácido Hialurônico botânico e Vitamina E natural. Uniformiza o tom da pele, reduz linhas finas e devolve o viço radiante.",
    volume: "30ml",
    ingredients: ["Vitamina C Estabilizada 15%", "Ácido Hialurônico de Triplo Peso Molecular", "Vitamina E Natural", "Ferulato de Soja"],
    benefits: ["Pele iluminada e viçosa", "Uniformização de manchas e textura", "Proteção celular contra poluição"],
    usage: "Aplique de 3 a 4 gotas pela manhã sobre a pele limpa e seca, antes do hidratante e protetor solar.",
  },
  {
    id: "crm-05",
    name: "Creme Noturno Reparador Bio-Flora",
    subtitle: "Overnight Renewal Crème",
    category: "Rosto & Tratamento",
    price: 185,
    originalPrice: 215,
    rating: 5.0,
    reviewCount: 165,
    badge: "Destaque",
    badgeColor: "bg-[#3D4A2D] text-[#FAF7F2]",
    image: "https://images.unsplash.com/photo-1608248545995-188849b29091?auto=format&fit=crop&w=800&q=80",
    description: "Fórmula regeneradora que atua durante o ciclo noturno de reparação celular. Com bakuchiol (alternativa botânica suave ao retinol) e ceramidas puras para regenerar a firmeza e elasticidade.",
    volume: "50ml",
    ingredients: ["Bakuchiol 1% (Retinol Botânico)", "Complexo de 3 Ceramidas Essenciais", "Óleo de Rosa Mosqueta Chilena"],
    benefits: ["Estimula síntese de colágeno", "Suaviza linhas de expressão sem irritar", "Nutrição profunda acordando com pele renovada"],
    usage: "À noite, espalhe delicadamente sobre o rosto, pescoço e colo como última etapa da sua rotina.",
  },
  {
    id: "oil-06",
    name: "Óleo Facial Puro de Rosa Mosqueta & Açaí",
    subtitle: "Pure Botanical Face Oil",
    category: "Óleos & Elixires",
    price: 139,
    originalPrice: 159,
    rating: 4.8,
    reviewCount: 92,
    badge: "100% Puro",
    badgeColor: "bg-[#C29B38] text-white",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    description: "Óleo 100% puro prensado a frio, rico em ácidos graxos essenciais ômega 3, 6 e 9. Sela a hidratação, confere luminosidade imediata e protege contra os danos oxidativos diários.",
    volume: "45ml",
    ingredients: ["Óleo de Rosa Mosqueta Selvagem Prensado a Frio", "Óleo Botânico de Açaí", "Extrato Antioxidante de Alecrim"],
    benefits: ["Acabamento luminoso não-oleoso", "Ação cicatrizante e regenerativa", "Sela a umidade natural da pele"],
    usage: "Aqueça 2 a 3 gotas nas palmas das mãos e pressione suavemente sobre o rosto ao final do ritual.",
  }
];

export interface CartItem {
  product: Product;
  quantity: number;
}

