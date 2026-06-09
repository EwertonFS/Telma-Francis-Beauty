"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-lg px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        {/* Branding Column - Mudar para md:col-span-1 quando a newsletter for reativada */}
        <div className="col-span-2 md:col-span-2 space-y-6">
          <div className="relative h-16 w-36 block">
            <Image
              alt="Telma Francis Logo"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
              src="/logo.png"
            />
          </div>
          <p className="font-body-md text-on-surface-variant opacity-80 max-w-xs leading-relaxed">
            Excelência em beleza há mais de 15 anos no bairro Grageru em Aracaju.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h5 className="font-body-md font-semibold uppercase tracking-widest text-primary text-sm">Navegação</h5>
          <ul className="space-y-3">
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#sobre">
                Sobre Nós
              </a>
            </li>
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#galeria">
                Galeria
              </a>
            </li>
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#depoimentos">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h5 className="font-body-md font-semibold uppercase tracking-widest text-primary text-sm">Suporte & Contato</h5>
          <ul className="space-y-3">
            <li>
              <a
                className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#contato">
                Nossa Localização
              </a>
            </li>
          </ul>
          <div className="flex gap-4 pt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/telmafrancisbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-lg hover:shadow-pink-500/20"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-lg hover:shadow-[#25D366]/20"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.968 14.117.94 11.48.94 6.042.94 1.62 5.31 1.615 10.74c-.001 1.67.452 3.3 1.311 4.747l-.98 3.578 3.693-.97c1.425.77 2.923 1.17 4.408 1.17zM17.86 14.73c-.3-.15-1.785-.88-2.065-.98-.28-.1-.485-.15-.685.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.8 9.21 9.2 7.735 8.95 7.14c-.24-.58-.485-.5-.685-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 2.175-1.05 2.225 0 .05.15.325.475.65.65.65 1.76 1.6 3.47 2.22.41.15.82.25 1.12.35.41.13.785.11 1.08.067.33-.048 1.785-.73 2.035-1.435.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="space-y-4">
          <h5 className="font-body-md font-semibold uppercase tracking-widest text-primary text-sm">Newsletter</h5>
          <p className="font-body-md text-on-surface-variant opacity-80 leading-relaxed">
            Receba ofertas, dicas de beleza e tendências globais.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b border-secondary text-on-surface px-4 py-2 w-full focus:outline-none focus:border-primary font-body-md transition-colors"
              placeholder="Seu e-mail"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary p-3 text-on-primary hover:text-on-secondary transition-all rounded"
              aria-label="Inscrever-se"
            >
              <span className="material-symbols-outlined text-xl leading-none block select-none">send</span>
            </button>
          </form>
          {submitted && (
            <p className="text-primary text-xs font-semibold animate-pulse mt-2">
              Inscrito com sucesso! Obrigado.
            </p>
          )}
        </div> */}
      </div>

      <div className="mt-16 text-center border-t border-outline-variant/5 pt-8 px-margin-mobile">
        <p className="font-body-md text-on-surface-variant opacity-50 text-sm">
          © {new Date().getFullYear()} Innovar Centro de Beleza. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
