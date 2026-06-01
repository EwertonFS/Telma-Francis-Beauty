"use client";

import React from "react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      {/* Tooltip Label */}
      <span className="hidden md:inline-block bg-surface-container-lowest text-on-surface font-body-md text-sm py-2 px-4 rounded-xl shadow-lg border border-outline-variant/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none font-medium">
        Fale Conosco
      </span>
      
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0 aspect-square"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.968 14.117.94 11.48.94 6.042.94 1.62 5.31 1.615 10.74c-.001 1.67.452 3.3 1.311 4.747l-.98 3.578 3.693-.97c1.425.77 2.923 1.17 4.408 1.17zM17.86 14.73c-.3-.15-1.785-.88-2.065-.98-.28-.1-.485-.15-.685.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.8 9.21 9.2 7.735 8.95 7.14c-.24-.58-.485-.5-.685-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 2.175-1.05 2.225 0 .05.15.325.475.65.65.65 1.76 1.6 3.47 2.22.41.15.82.25 1.12.35.41.13.785.11 1.08.067.33-.048 1.785-.73 2.035-1.435.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>
    </div>
  );
}
