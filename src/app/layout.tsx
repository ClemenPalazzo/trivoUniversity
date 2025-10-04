import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trivo University - Domina las habilidades más buscadas",
  description: "Encuentra cursos online de trail running, running, ciclismo y más. Domina las habilidades más buscadas del mercado laboral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased text-black`}
        style={{ backgroundColor: '#FCF8ED' }}
      >
        {children}
      </body>
    </html>
  );
}
