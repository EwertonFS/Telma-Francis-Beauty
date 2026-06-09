"use client";

import React from "react";
import Image from "next/image";

export default function LinksPage() {
  const whatsappAgendarUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20os%20links%20da%20sua%20Bio%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";
  const whatsappConversarUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20os%20links%20da%20sua%20Bio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.";
  const instagramUrl = "https://www.instagram.com/telmafrancisbeauty/";
  const mapsUrl = "https://www.google.com/maps/place/Inovar-Centro+De+Beleza/@-10.910071,-37.0991559,14z/data=!4m10!1m2!2m1!1sInovar-Centro+De+Beleza!3m6!1s0x71ab3df08cee75f:0x2c275c42fbbef416!8m2!3d-10.9371253!4d-37.0581357!15sChdJbm92YXItQ2VudHJvIERlIEJlbGV6YZIBDGJlYXV0eV9zYWxvbuABAA!16s%2Fg%2F11y3x2rq8d?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

  const linkButtons = [
    {
      title: "Agendar Horário",
      subtitle: "Escolha o melhor dia e horário via WhatsApp",
      href: whatsappAgendarUrl,
      icon: "calendar_month",
      isPrimary: true,
    },
    {
      title: "Falar com Telma",
      subtitle: "Dúvidas ou atendimento personalizado",
      href: whatsappConversarUrl,
      icon: "chat",
      isPrimary: false,
    },
    {
      title: "Nosso Site Oficial",
      subtitle: "Conheça nossa história, equipe e valores",
      href: "/",
      icon: "language",
      isPrimary: false,
    },
    {
      title: "Conhecer Serviços",
      subtitle: "Cabelos, unhas, depilação e mais",
      href: "/#servicos",
      icon: "content_cut",
      isPrimary: false,
    },
    {
      title: "Nossa Localização",
      subtitle: "Bairro Grageru, Aracaju - SE",
      href: mapsUrl,
      icon: "location_on",
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-on-background relative overflow-hidden flex flex-col items-center justify-between py-12 px-margin-mobile">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">

        {/* Profile Logo & Name */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary p-1 bg-black shadow-2xl shadow-primary/20 mb-4 hover:scale-105 transition-transform duration-500">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Telma Francis"
                src="/TelmaFrancis.png"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Logo Brand Overlay */}
          <div className="relative h-12 w-44 mb-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Telma Francis Beauty"
              src="/TelmaFrancisLogo.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-Montserrat text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3">
            — BEAUTY —
          </p>
          <p className="font-body-md text-on-surface-variant/80 text-sm max-w-xs">
            Sua essência, nossa inspiração!
          </p>
        </div>

        {/* Social Icons Quick Row */}
        <div className="flex gap-4 mb-8">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-md hover:shadow-pink-500/10"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href={whatsappConversarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-md hover:shadow-[#25D366]/10"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.968 14.117.94 11.48.94 6.042.94 1.62 5.31 1.615 10.74c-.001 1.67.452 3.3 1.311 4.747l-.98 3.578 3.693-.97c1.425.77 2.923 1.17 4.408 1.17zM17.86 14.73c-.3-.15-1.785-.88-2.065-.98-.28-.1-.485-.15-.685.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.8 9.21 9.2 7.735 8.95 7.14c-.24-.58-.485-.5-.685-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 2.175-1.05 2.225 0 .05.15.325.475.65.65.65 1.76 1.6 3.47 2.22.41.15.82.25 1.12.35.41.13.785.11 1.08.067.33-.048 1.785-.73 2.035-1.435.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
            </svg>
          </a>
        </div>

        {/* Buttons List */}
        <div className="w-full space-y-4 px-2">
          {linkButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-300 group ${btn.isPrimary
                  ? "bg-primary border-primary text-on-primary hover:bg-[#eabda8] shadow-lg shadow-primary/20 animate-scale-pulse"
                  : "bg-surface-container/50 border-outline-variant/20 text-on-surface hover:bg-surface-container hover:border-primary/40 hover:scale-103 shadow-md"
                }`}
            >
              <div className="flex items-center gap-4 text-left">
                <span className={`material-symbols-outlined text-2xl ${btn.isPrimary ? "text-on-primary" : "text-primary"}`}>
                  {btn.icon}
                </span>
                <div>
                  <h2 className={`font-body-md font-semibold ${btn.isPrimary ? "text-on-primary" : "text-on-surface"}`}>
                    {btn.title}
                  </h2>
                  <p className={`text-xs ${btn.isPrimary ? "text-on-primary/80" : "text-on-surface-variant/80"}`}>
                    {btn.subtitle}
                  </p>
                </div>
              </div>
              <span className={`material-symbols-outlined text-lg opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${btn.isPrimary ? "text-on-primary" : "text-on-surface"}`}>
                chevron_right
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="w-full text-center mt-12 z-10 border-t border-outline-variant/10 pt-6">
        <p className="font-body-md text-on-surface-variant opacity-50 text-xs">
          © {new Date().getFullYear()} Telma Francis Beauty. Todos os direitos reservados.
        </p>
      </div>

    </div>
  );
}
