import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Borne Engineering Solutions | Installation IRVE Expert",
  description:
    "Expert en installation de bornes de recharge électrique (IRVE). Études techniques, solutions sur mesure et gestion énergétique pour particuliers, entreprises et copropriétés.",
  keywords: [
    "borne recharge",
    "IRVE",
    "installation borne électrique",
    "véhicule électrique",
    "wallbox",
    "smart charging",
    "ingénieur IRVE",
  ],
  openGraph: {
    title: "Borne Engineering Solutions",
    description: "Expert IRVE — Installation de bornes de recharge électrique",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
