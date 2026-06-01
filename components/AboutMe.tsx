"use client";

import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-xl bg-surface-container" id="sobre">
      <div className="px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center max-w-7xl mx-auto">
        {/* Left Column - Biography */}
        <div className="order-1 space-y-6">
          <span className="font-label-sm text-primary tracking-[0.4em] uppercase mb-4 block">
            A Fundadora
          </span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl text-on-background leading-tight">
            Telma Francis
          </h2>
          <h3 className="font-display-lg text-headline-lg text-primary italic">
            A Maestria por trás da Beleza
          </h3>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Com mais de 15 anos de atuação no mercado de luxo, Telma Francis transformou sua paixão em um centro de referência em Aracaju. Especialista em visagismo e saúde capilar, sua filosofia une técnica de ponta a um atendimento humanizado, focado em revelar a essence única de cada cliente.
          </p>
          <div className="pt-6 relative h-16 w-48 opacity-70">
            <Image
              alt="Assinatura Telma Francis"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
              src="/logo.png"
            />
          </div>
        </div>

        {/* Right Column - Portrait & Borders */}
        <div className="order-2 relative max-w-sm mx-auto md:mx-0 w-full mb-8 md:mb-0">
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-outline-variant/30 relative bg-black">
            <Image
              alt="Retrato de Telma Francis"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: "cover" }}
              src="/TelmaFrancis.png"
              className="hover:scale-102 transition-transform duration-700"
            />
          </div>
          {/* Decorative Copper Corners */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/40 pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/40 pointer-events-none"></div>
        </div>
      </div>

      {/* Elementos adicionados do componente About.tsx */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mt-20 pt-16 border-t border-outline-variant/20">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">workspace_premium</span>
        <h2 className="font-display-lg text-headline-xl text-on-background mb-8 italic">
          Há mais de 15 anos no Grageru...
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl mx-auto">
          Nossa jornada começou com um sonho de oferecer mais que serviços de beleza, mas sim uma experiência de renovação e autoestima. Localizado no tradicional bairro Grageru, o <strong>Innovar Centro de Beleza</strong> é o reflexo da dedicação de Telma Francis em buscar as melhores técnicas e tendências globais para suas clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-outline-variant/20 pt-12">
          <div className="group">
            <h4 className="font-display-lg text-headline-lg text-primary font-bold group-hover:scale-110 transition-transform duration-300 inline-block">15+</h4>
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant uppercase tracking-widest mt-2">
              Anos de Experiência
            </p>
          </div>
          <div className="group">
            <h4 className="font-display-lg text-headline-lg text-primary font-bold group-hover:scale-110 transition-transform duration-300 inline-block">5k+</h4>
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant uppercase tracking-widest mt-2">
              Clientes Satisfeitas
            </p>
          </div>
          <div className="group">
            <h4 className="font-display-lg text-headline-lg text-primary font-bold group-hover:scale-110 transition-transform duration-300 inline-block">100%</h4>
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant uppercase tracking-widest mt-2">
              Qualidade Profissional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
