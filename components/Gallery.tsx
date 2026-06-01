"use client";

import React from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
  gridClass: string;
}

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = React.useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Luzes",
      src: "/Telma-Francis-imagens/galeria-luzes-cliente-reais.webp",
      gridClass: "md:row-span-2 h-[500px] md:h-auto",
    },
    {
      id: 2,
      title: "Coloração & Luzes",
      src: "/Telma-Francis-imagens/galeria-luzes-cliente-real.webp",
      gridClass: "md:col-span-2 h-[250px] md:h-auto",
    },
    {
      id: 3,
      title: "Corte",
      src: "/Telma-Francis-imagens/galeria-corte-cliente-real.webp",
      gridClass: "h-[250px] md:h-auto",
    },
    {
      id: 4,
      title: "Progressiva",
      src: "/Telma-Francis-imagens/galeria-alisamento-cliente-real.png",
      gridClass: "md:col-span-1 h-[250px] md:h-auto",
    },
    {
      id: 5,
      title: "Selagem",
      src: "/Telma-Francis-imagens/galeria-selagem-cliente-real.webp",
      gridClass: "md:row-span-1 h-[250px] md:h-auto",
    },
    {
      id: 6,
      title: "Hidratação",
      src: "/Telma-Francis-imagens/galeria-hidratacao-cliente-real.png",
      gridClass: "md:col-span-1 h-[250px] md:h-auto",
    },
    {
      id: 7,
      title: "Francesinha",
      src: "/galeria-francesinha.png",
      gridClass: "h-[250px] md:h-auto",
    },
    {
      id: 8,
      title: "Unha em Gel",
      src: "/galeria-unha-gel.png",
      gridClass: "md:col-span-2 h-[250px] md:h-auto",
    },
    {
      id: 9,
      title: "Design de Sobrancelha",
      src: "/galeria-design-sobrancelha.png",
      gridClass: "h-[250px] md:h-auto",
    },
  ];

  const handleNext = React.useCallback(() => {
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
  }, [activeImageIdx, galleryItems.length]);

  const handlePrev = React.useCallback(() => {
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
  }, [activeImageIdx, galleryItems.length]);

  const handleClose = React.useCallback(() => {
    setActiveImageIdx(null);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIdx === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIdx, handleNext, handlePrev, handleClose]);

  return (
    <section className="py-xl bg-surface-container-lowest" id="galeria">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-sm text-primary tracking-[0.4em] uppercase mb-4 block">
            Transformações Reais
          </span>
          <h2 className="font-display-lg text-headline-xl text-on-background">Nossa Galeria</h2>
          <div className="w-20 h-px bg-primary/40 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIdx(idx)}
              className={`gallery-item cursor-pointer group relative overflow-hidden rounded-xl border border-outline-variant/10 ${item.gridClass}`}
            >
              <Image
                alt={item.title}
                src={item.src}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="gallery-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="font-label-sm text-primary uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 animate-fadeIn">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-default" onClick={handleClose}></div>

          {/* Top Info Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <span className="text-white/80 font-display-sm font-medium tracking-wide pointer-events-auto">
              {galleryItems[activeImageIdx].title}
            </span>
            <button
              onClick={handleClose}
              className="pointer-events-auto text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 border border-white/10"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-10 text-white/75 hover:text-white bg-white/5 hover:bg-white/15 p-4 rounded-full backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Active Image Container */}
          <div className="relative w-[90vw] md:w-[75vw] h-[70vh] md:h-[80vh] select-none pointer-events-none flex items-center justify-center">
            <div className="relative w-full h-full pointer-events-auto">
              <Image
                key={activeImageIdx}
                alt={galleryItems[activeImageIdx].title}
                src={galleryItems[activeImageIdx].src}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                className="transition-all duration-500 transform animate-scaleIn"
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-10 text-white/75 hover:text-white bg-white/5 hover:bg-white/15 p-4 rounded-full backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Bottom Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/60 text-xs font-mono select-none">
            {activeImageIdx + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
}
