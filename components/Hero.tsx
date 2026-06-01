"use client";

import React from "react";

export default function Hero() {
  const whatsappFalarUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20falar%20com%20voc%C3%AA.";
  const whatsappAgendarUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_infinite]"
          src="/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto mt-16">
        <span className="font-label-sm text-label-sm text-primary tracking-[0.3em] uppercase mb-3 md:mb-6 block animate-[fadeIn_1s_ease-out]">
          Expertise &amp; Luxo
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 md:mb-8 leading-tight copper-glow text-primary animate-[fadeIn_1.2s_ease-out]">
          Telma{" "}
          <span
            className="font-GreatVibes text-5xl sm:text-6xl md:text-[4.5rem] font-normal bg-gradient-to-r from-[#e8b5a1] via-[#c58b76] to-[#e8b5a1] bg-clip-text text-transparent drop-shadow-md"
          >
            Francis
          </span>
          <span className="font-Montserrat text-xs md:text-sm font-medium tracking-[0.6em] uppercase text-[#eabda8]/90 block mt-1.5 md:mt-3 select-none">
            — BEAUTY —
          </span>
          <br />
          <span className="italic font-light text-on-background block mt-2 md:mt-4 text-3xl md:text-5xl">
            Sua essência, nossa inspiração!
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 md:mb-12 max-w-2xl mx-auto animate-[fadeIn_1.4s_ease-out]">
          Transformando a beleza através de 15 anos de maestria e inovação estética no coração de Aracaju.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center animate-[fadeIn_1.6s_ease-out]">
          <a
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-body-md font-semibold hover:scale-105 transition-transform w-full md:w-auto text-center shadow-lg hover:shadow-primary/35 animate-scale-pulse"
            href={whatsappAgendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Agora
          </a>
          <a
            className="border border-primary text-primary px-10 py-4 rounded-full font-body-md font-semibold hover:bg-primary/10 transition-all w-full md:w-auto text-center"
            href={whatsappFalarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Telma
          </a>
        </div>
      </div>
    </section>
  );
}
