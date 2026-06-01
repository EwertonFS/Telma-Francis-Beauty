"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  services: ServiceItem[];
}

export default function ServiceModal({ isOpen, onClose, title, services }: ServiceModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-surface-container border border-primary/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-8 md:p-12 shadow-2xl transition-all duration-300 transform scale-100 z-10">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-primary hover:text-secondary transition-colors"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-display-lg text-headline-xl text-primary mb-4">{title}</h2>
          <div className="w-20 h-px bg-primary/35 mx-auto"></div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4 group">
              <div className="aspect-video relative overflow-hidden rounded-lg border border-outline-variant/20 bg-black">
                {service.image ? (
                  <Image
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                    src={service.image}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-container-low text-primary-container">
                    <span className="material-symbols-outlined text-4xl">brush</span>
                  </div>
                )}
              </div>
              <h4 className="font-display-lg text-xl text-primary font-semibold">{service.title}</h4>
              <p className="text-on-surface-variant text-body-md leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
