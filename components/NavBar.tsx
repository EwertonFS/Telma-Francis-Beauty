"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
  id: string;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Sobre", href: "#sobre", id: "sobre" },
    { name: "Serviços", href: "#servicos", id: "servicos" },
    { name: "Galeria", href: "#galeria", id: "galeria" },
    { name: "Depoimentos", href: "#depoimentos", id: "depoimentos" },
    { name: "Serviços em Domicílio", href: "#servicosDomiciliares", id: "servicosDomiciliares" },
    { name: "Contato", href: "#contato", id: "contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic to detect active section
      const scrollPosition = window.scrollY + 120; // offset for nav bar height

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5579999700631?text=Ol%C3%A1%2C%20Telma!%20Vi%20o%20site%20do%20Telma%20Francis%20Beauty%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 border-b border-outline-variant/20 shadow-md backdrop-blur-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <a href="#home" className="relative h-10 w-24 md:h-12 md:w-24 block">
            <Image
              alt="Telma Francis Beauty Logo"
              fill
              style={{ objectFit: "cover" }}
              src="/TelmaFrancisLogo.webp"
              priority
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`font-body-md transition-all duration-300 pb-1 ${activeSection === item.id
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-on-background/70 hover:text-primary border-b-2 border-transparent"
                }`}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#servicos"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2 rounded-full font-body-md font-semibold scale-95 active:scale-100 transition-all hover:brightness-110 shadow-lg hover:shadow-primary/20"
          >
            Conhecer Serviços
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col items-center justify-center gap-6 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-body-lg transition-colors ${activeSection === item.id
              ? "text-primary font-semibold"
              : "text-on-background/80 hover:text-primary"
              }`}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#servicos"
          onClick={() => setIsOpen(false)}
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-body-md font-semibold text-lg hover:brightness-110 shadow-lg mt-4"
        >
          Conhecer Serviços
        </a>
      </div>
    </nav>
  );
}
