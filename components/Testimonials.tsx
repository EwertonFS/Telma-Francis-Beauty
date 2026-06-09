"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carla Santos",
      role: "Cliente VIP",
      initials: "CS",
      text: `"O atendimento é impecável. A Telma tem um olhar artístico único, transformou meu visual com uma sofisticação que nunca encontrei em outro lugar de Aracaju."`,
    },
    {
      name: "Fernanda Lima",
      role: "Empresária",
      initials: "FL",
      text: `"O atendimento no salão é maravilhoso e super privativo. A pontualidade e o profissionalismo me encantam. É como ter um spa de alta categoria à minha disposição."`,
    },
    {
      name: "Juliana Alves",
      role: "Advogada",
      initials: "JA",
      text: `"Minhas unhas nunca estiveram tão perfeitas. O cuidado com os detalhes e a qualidade dos materiais utilizados é visível. Vale cada segundo da experiência."`,
    },
  ];

  return (
    <section className="relative py-xl overflow-hidden bg-black" id="depoimentos">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Testimonials Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src="/depoimentos-bg.png"
          className="opacity-25"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-xl text-primary mb-4">Depoimentos</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
            O que nossas clientes dizem sobre a experiência Telma Francis
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-6 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-surface-container/40 backdrop-blur-sm border border-outline-variant/20 p-8 rounded-xl hover:border-primary/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="font-body-md text-on-surface-variant italic mb-8 min-h-[96px] leading-relaxed">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-display-lg text-on-primary-container font-semibold text-lg">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body-md font-bold text-on-background">{t.name}</p>
                  <p className="font-body-md text-xs text-primary uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
