import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import Gallery from "@/components/Gallery";
import HomeService from "@/components/HomeService";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen">
        {/* 1. ATENÇÃO: Proposta de valor imediata */}
        <Hero />
        
        {/* 2. CONEXÃO E AUTORIDADE: A fundadora humaniza a marca e apresenta a história/estatísticas do centro */}
        <ScrollReveal animation="fade-up" delay={150}>
          <AboutMe />
        </ScrollReveal>
        
        {/* 4. DESEJO: Depois de confiar, o visitante quer o serviço */}
        <ScrollReveal animation="fade-up" delay={150}>
          <ServicesBento />
        </ScrollReveal>
        
        {/* 5. EVIDÊNCIA: Prova visual real dos resultados */}
        <ScrollReveal animation="scale-up" delay={200}>
          <Gallery />
        </ScrollReveal>
        
        {/* 6. PROVA SOCIAL: Clientes VIP validam a qualidade */}
        <ScrollReveal animation="fade-up" delay={150}>
          <Testimonials />
        </ScrollReveal>
        
        {/* 7. REMOÇÃO DE OBJEÇÃO: Elimina o "não tenho tempo" */}
        <ScrollReveal animation="fade-up" delay={150}>
          <HomeService />
        </ScrollReveal>
        
        {/* 8. AÇÃO: CTA final quando o visitante já está convencido */}
        <ScrollReveal animation="fade-up" delay={150}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

