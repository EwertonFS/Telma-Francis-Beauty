"use client";

import React, { useState } from "react";
import Image from "next/image";
import ServiceModal from "./ServiceModal";

export default function ServicesBento() {
  const [activeModal, setActiveModal] = useState<"hair" | "nails" | null>(null);

  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20agendamento.";

  const hairServices = [
    {
      title: "Corte",
      description: "Cortes modernos e personalizados para valorizar sua beleza única e o formato do seu rosto.",
      image: "/servico-corte.png"
    },
    {
      title: "Coloração e Luzes",
      description: "Técnicas exclusivas com produtos premium para mechas sofisticadas, luzes e colorações brilhantes.",
      image: "/servico-coloracao-luzes.png"
    }
  ];

  const nailsServices = [
    {
      title: "Francesinha & Design",
      description: "Esmaltação de altíssima precisão com os melhores produtos para um acabamento clássico ou moderno.",
      image: "/servico-francesinha-design.png"
    },
    {
      title: "Alongamento em Gel",
      description: "Unhas em gel impecáveis, com resistência superior, aspecto natural e brilho duradouro.",
      image: "/servico-alongamento-gel.png"
    }
  ];

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-black" id="servicos">
      <div className="text-center mb-16">
        <h2 className="font-display-lg text-headline-xl text-primary mb-4">Nossos Serviços</h2>
        <div className="w-20 h-0.5 bg-primary mx-auto opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] max-w-7xl mx-auto">
        {/* Hair Card */}
        <div
          onClick={() => setActiveModal("hair")}
          className="bento-card md:col-span-2 relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/20 group"
        >
          <Image
            alt="Profissional de Cabelo"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            style={{ objectFit: "cover" }}
            src="/servico-cabelo-card.png"
            className="transition-transform duration-700 group-hover:scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-display-lg text-headline-lg text-primary mb-2">Cabelos</h3>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Cortes, colorações exclusivas, penteados para eventos e tratamentos de reconstrução capilar.
            </p>
          </div>
        </div>

        {/* Nails Card */}
        <div
          onClick={() => setActiveModal("nails")}
          className="bento-card relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/20 group"
        >
          <Image
            alt="Unhas Perfeitas"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            src="/servico-unhas-card.png"
            className="transition-transform duration-700 group-hover:scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-display-lg text-headline-lg text-primary mb-2">Nails</h3>
            <p className="font-body-md text-on-surface-variant">
              Manicure e pedicure com acabamento impecável e alongamentos de luxo.
            </p>
          </div>
        </div>

        {/* Waxing Card */}
        <div className="bento-card relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/20 group">
          <Image
            alt="Depilação Profissional"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            src="/servico-depilacao-card.png"
            className="transition-transform duration-700 group-hover:scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-display-lg text-headline-lg text-primary mb-2">Depilação</h3>
            <p className="font-body-md text-on-surface-variant">
              Depilação com cera de alta qualidade e técnicas suaves para sua pele.
            </p>
          </div>
        </div>

        {/* Custom Experience CTA Card */}
        <div className="bento-card md:col-span-2 bg-surface-container border border-outline-variant/20 rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 transition-transform duration-1000 group-hover:-translate-y-2 group-hover:translate-x-2">
            <span className="material-symbols-outlined text-[120px] text-primary">brush</span>
          </div>
          <h3 className="font-display-lg text-headline-lg text-primary mb-4 relative z-10">Agende sua Experiência</h3>
          <p className="font-body-md text-on-surface-variant max-w-xl mb-8 relative z-10 leading-relaxed">
            Clique no botão abaixo para escolher o melhor horário para seu atendimento. Oferecemos consultoria personalizada para todos os tipos de beleza.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-body-md font-semibold hover:brightness-110 transition-all z-10 uppercase tracking-widest text-sm shadow-md hover:shadow-secondary/20 animate-scale-pulse"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>

      {/* Hair Modal */}
      <ServiceModal
        isOpen={activeModal === "hair"}
        onClose={() => setActiveModal(null)}
        title="Nossos Serviços de Cabelo"
        services={hairServices}
      />

      {/* Nails Modal */}
      <ServiceModal
        isOpen={activeModal === "nails"}
        onClose={() => setActiveModal(null)}
        title="Nossos Serviços de Nails"
        services={nailsServices}
      />
    </section>
  );
}
