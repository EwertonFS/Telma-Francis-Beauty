"use client";

import React, { useState } from "react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  const mapsUrl = "https://www.google.com/maps/place/Telma+Francis+Beauty/@-10.93712,-37.0607106,17z/data=!3m1!4b1!4m23!1m16!4m15!1m6!1m2!1s0x71ab3df08cee75f:0x2c275c42fbbef416!2sTelma+Francis+Beauty,+R.+Leopoldo+Mesquita,+46+-+Grageru,+Aracaju+-+SE,+49025-380!2m2!1d-37.0581357!2d-10.9371253!1m6!1m2!1s0x71ab3df08cee75f:0x2c275c42fbbef416!2sTelma+Francis+Beauty,+R.+Leopoldo+Mesquita,+46+-+Grageru,+Aracaju+-+SE,+49025-380!2m2!1d-37.0581357!2d-10.9371253!3e2!3m5!1s0x71ab3df08cee75f:0x2c275c42fbbef416!8m2!3d-10.9371253!4d-37.0581357!16s%2Fg%2F11y3x2rq8d?entry=ttu";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=Telma+Francis+Beauty,R.+Leopoldo+Mesquita,+46+-+Grageru,+Aracaju+-+SE&t=m&z=17&output=embed";
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section className="py-xl bg-black" id="contato">
      <div className="px-margin-mobile md:px-margin-desktop max-w-6xl mx-auto grid md:grid-cols-2 gap-xl items-center">
        {/* Left Column - Contact Details */}
        <div className="space-y-10">
          <h2 className="font-display-lg text-headline-xl text-primary-container mb-12">Fale Conosco</h2>
          
          <div className="space-y-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group block"
            >
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1 group-hover:scale-110 transition-transform select-none">
                location_on
              </span>
              <div>
                <p className="font-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">Endereço</p>
                <p className="font-body-md text-on-surface-variant mt-1 group-hover:underline">R. Leopoldo Mesquita, 46 - Grageru, Aracaju - SE</p>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group cursor-pointer block"
            >
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1 group-hover:scale-110 transition-transform select-none">
                call
              </span>
              <div>
                <p className="font-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                  WhatsApp
                </p>
                <p className="font-body-md text-on-surface-variant mt-1 group-hover:underline">
                  (79) 99970-0631
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1 select-none">
                schedule
              </span>
              <div>
                <p className="font-body-md font-semibold text-on-surface">Horário</p>
                <p className="font-body-md text-on-surface-variant mt-1">Segunda a Sábado: 08:00 - 19:00</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/telmafrancisbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-lg hover:shadow-pink-500/20"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 shadow-lg hover:shadow-[#25D366]/20"
              aria-label="Fale no WhatsApp"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.968 14.117.94 11.48.94 6.042.94 1.62 5.31 1.615 10.74c-.001 1.67.452 3.3 1.311 4.747l-.98 3.578 3.693-.97c1.425.77 2.923 1.17 4.408 1.17zM17.86 14.73c-.3-.15-1.785-.88-2.065-.98-.28-.1-.485-.15-.685.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.8 9.21 9.2 7.735 8.95 7.14c-.24-.58-.485-.5-.685-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 2.175-1.05 2.225 0 .05.15.325.475.65.65.65 1.76 1.6 3.47 2.22.41.15.82.25 1.12.35.41.13.785.11 1.08.067.33-.048 1.785-.73 2.035-1.435.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Google Maps Embed */}
        <div className="relative w-full max-w-lg mx-auto md:mx-0">
          <div 
            onClick={() => setIsMapActive(true)}
            className={`relative rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container w-full aspect-[4/3] ${!isMapActive ? 'cursor-pointer group' : ''}`}
          >
            {/* Map Iframe */}
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Innovar Centro de Beleza no Google Maps"
              className={`w-full h-full transition-all duration-300 ${!isMapActive ? 'pointer-events-none blur-[2px] opacity-75' : ''}`}
            />
            {/* Click to Activate Overlay */}
            {!isMapActive && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white gap-3 p-4 text-center transition-all duration-300 hover:bg-black/50">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl text-primary animate-pulse select-none">
                    map
                  </span>
                </div>
                <div>
                  <p className="font-body-md font-semibold text-white">Clique para ativar o mapa interativo</p>
                  <p className="text-xs text-neutral-400 mt-1">Interaja com o mapa para ver a localização</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Link e indicação para abrir no Maps */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-body-md text-sm group"
            >
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">open_in_new</span>
              Ver no Google Maps
            </a>
            {!isMapActive && (
              <span className="text-xs text-on-surface-variant/75 flex items-center gap-1.5 select-none">
                <span className="material-symbols-outlined text-sm text-primary">touch_app</span>
                Clique no mapa para carregar a localização
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
