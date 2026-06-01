"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-black" id="sobre">
      <div className="max-w-4xl mx-auto text-center relative z-10">
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
      
      {/* Ambient background blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
