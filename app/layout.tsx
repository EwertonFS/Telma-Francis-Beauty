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
  title: "Telma Francis Beauty",
  description: "Transformando a beleza através de 15 anos de maestria e inovação estética no coração de Aracaju. Cabelos, unhas, depilação e serviço home service exclusivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable} ${montserrat.variable} dark scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300..400,0..1,0"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md overflow-x-hidden bg-black text-[#e5e2e1]">
        {children}
      </body>
    </html>
  );
}
