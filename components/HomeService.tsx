"use client";

import React from "react";
import Image from "next/image";

export default function HomeService() {
  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Gostaria%20de%20solicitar%20o%20servi%C3%A7o%20a%20domic%C3%ADlio%20em%20Aracaju.";

  return (
    <section className="py-xl bg-surface-container-lowest" id="servicosDomiciliares">
      <div className="px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center max-w-7xl mx-auto">
        {/* Left column - Rounded Image & Floating Badge */}
        <div className="relative max-w-md mx-auto md:mx-0 w-full">
          <div className="aspect-square rounded-full overflow-hidden border-2 border-primary/20 p-4 bg-black">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                alt="Especialista de Beleza - Serviço a Domicílio"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                style={{ objectFit: "cover" }}
                src="/atendimento-domiciliar.png"
                className="grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary p-6 md:p-8 rounded-xl shadow-2xl">
            <span className="font-display-lg text-headline-xl block leading-none font-bold">Aracaju</span>
            <p className="font-body-lg text-xs md:text-sm uppercase tracking-widest mt-1 text-on-primary/85">
              Atendimento Exclusivo
            </p>
          </div>
        </div>

        {/* Right column - Content & Features */}
        <div className="space-y-8 mt-10 md:mt-0">
          <h2 className="font-display-lg text-headline-xl text-primary leading-tight">
            Levamos a beleza <br className="hidden md:inline" /> até você!
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Sabemos que seu tempo é precioso. Pensando no seu conforto e praticidade, o{" "}
            <strong>Telma Francis Serviço a Domicílio</strong> oferece atendimento personalizado no conforto da sua residência em Aracaju.
          </p>
          
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-secondary">
              <span className="material-symbols-outlined text-3xl">home</span>
              <span className="font-body-md text-on-surface">Comodidade Total</span>
            </li>
            <li className="flex items-center gap-4 text-secondary">
              <span className="material-symbols-outlined text-3xl">schedule</span>
              <span className="font-body-md text-on-surface">Flexibilidade de Horários</span>
            </li>
            <li className="flex items-center gap-4 text-secondary">
              <span className="material-symbols-outlined text-3xl">verified</span>
              <span className="font-body-md text-on-surface">Mesmo Padrão de Luxo</span>
            </li>
          </ul>

          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b-2 border-primary text-primary font-display-lg text-headline-lg hover:text-secondary hover:border-secondary transition-all pb-1 font-semibold animate-scale-pulse"
            >
              Solicitar Serviço a Domicílio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
