import type { Metadata } from "next";
import { Playfair_Display, Manrope, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Telma Francis Beauty | Salão de Beleza & Estética em Aracaju",
  description: "Transformando a beleza através de 15 anos de maestria e inovação estética no coração de Aracaju. Cabelos, unhas, depilação e serviço home service exclusivo.",
  keywords: ["salão de beleza Aracaju", "estética Aracaju", "unhas de gel Aracaju", "corte de cabelo Aracaju", "visagismo Aracaju", "Telma Francis Beauty", "home service beleza Aracaju", "depilação Aracaju", "Grageru Aracaju"],
  icons: {
    icon: "/TelmaFrancisFavicon.webp",
  },
  openGraph: {
    title: "Telma Francis Beauty | Salão de Beleza & Estética em Aracaju",
    description: "Transformando a beleza através de 15 anos de maestria e inovação estética no coração de Aracaju. Cabelos, unhas, depilação e serviço home service exclusivo.",
    url: "https://telmafrancisbeauty.com.br",
    siteName: "Telma Francis Beauty",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Telma Francis Beauty (Innovar Centro de Beleza)",
    "alternateName": "Innovar Centro de Beleza",
    "image": "https://telmafrancisbeauty.com.br/hero-bg.jpg",
    "priceRange": "$$",
    "telephone": "+5579999700631",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bairro Grageru",
      "addressLocality": "Aracaju",
      "addressRegion": "SE",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -10.9371253,
      "longitude": -37.0581357
    },
    "url": "https://telmafrancisbeauty.com.br",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/telmafrancisbeauty/"
    ]
  };

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable} ${montserrat.variable} dark scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300..400,0..1,0"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body-md overflow-x-hidden bg-black text-[#e5e2e1]">
        {children}
      </body>
    </html>
  );
}
