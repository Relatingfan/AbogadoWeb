import React from 'react';

interface SkewCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const cards: SkewCard[] = [
  {
    title: "Trato Exclusivo",
    desc: "Atención personalizada 1 a 1 con socios del despacho en todo momento.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <path d="M128 189.09l-55.4 32.35a8 8 0 0 1-11.93-8.68l14.54-63.29L24.84 103.6a8 8 0 0 1 4.56-14.06l64.67-5.27L120.66 24a8 8 0 0 1 14.68 0l26.59 60.27 64.67 5.27a8 8 0 0 1 4.56 14.06l-50.37 45.87 14.54 63.29a8 8 0 0 1-11.93 8.68Z" />
      </svg>
    ),
  },
  {
    title: "Visión Global",
    desc: "Soluciones legales que consideran el contexto internacional de los negocios.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="128" cy="128" r="96" />
        <ellipse cx="128" cy="128" rx="40" ry="96" />
        <line x1="32" y1="128" x2="224" y2="128" />
      </svg>
    ),
  },
  {
    title: "Ética Intachable",
    desc: "Transparencia total y honestidad en cada recomendación que hacemos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <line x1="24" y1="128" x2="232" y2="128" />
        <path d="M128 24l56 104H72Z" />
        <path d="M72 128l56 104 56-104" />
      </svg>
    ),
  },
  {
    title: "Estrategia de Vanguardia",
    desc: "Uso de herramientas y metodologías innovadoras para resolver casos complejos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="128" cy="128" r="96" />
        <polygon points="128,64 144,112 196,112 156,144 168,192 128,164 88,192 100,144 60,112 112,112" />
      </svg>
    ),
  },
];

export default function SkewCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-6 justify-items-center py-10 max-w-7xl mx-auto">
        {cards.map(({ title, desc, icon }, idx) => (
          <div
            key={idx}
            className="group relative w-[280px] h-[340px] transition-all duration-500"
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: 'linear-gradient(315deg, #1A3E1A, #4CAF50)',
              }}
            />
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: 'linear-gradient(315deg, #1A3E1A, #4CAF50)',
              }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(76,175,80,0.12)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(76,175,80,0.12)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Content */}
            <div className="relative z-20 left-0 p-[20px_30px] h-full bg-[rgba(26,62,26,0.35)] backdrop-blur-[10px] shadow-lg rounded-lg text-[#F2EFE9] transition-all duration-500 group-hover:left-[-25px] group-hover:p-[40px_30px] flex flex-col justify-center gap-4">
              <div className="text-[#C9A84C] transition-colors duration-300 group-hover:text-[#4CAF50]">
                {icon}
              </div>
              <h3 className="font-playfair text-xl font-normal leading-tight">{title}</h3>
              <p className="font-dmsans text-sm font-light leading-relaxed text-[#B0ADA8]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
