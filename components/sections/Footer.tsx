import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Notre approche", href: "#accompagnement" },
  { label: "À propos", href: "#a-propos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legal = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo-white.png"
                alt="Borne Eng Solutions"
                width={130}
                height={142}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-poppins text-white/50 text-sm leading-relaxed max-w-sm mb-5">
              Expert IRVE pour l'installation de bornes de recharge. Un ingénieur référent à vos côtés —
              particuliers, entreprises et copropriétés.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+33758195547" className="flex items-center gap-2.5 font-poppins text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" /> +33 7 58 19 55 47
              </a>
              <a href="mailto:borne-eng@gmail.com" className="flex items-center gap-2.5 font-poppins text-white/60 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" /> borne-eng@gmail.com
              </a>
              <div className="flex items-start gap-2.5 font-poppins text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> Normandie · Hauts-de-France · Île-de-France · Centre · Grand Est · Bourgogne-Franche-Comté
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm mb-5">Navigation</h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-poppins text-white/50 hover:text-white transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm mb-5">Certifications</h4>
            <div className="space-y-2.5">
              {["QUALIFELEC IRVE", "RGE — Reconnu Garant Env.", "Habilitation B2V BR BC", "Décret IRVE 2023 conforme"].map((c) => (
                <div key={c} className="flex items-center gap-2 font-poppins text-white/50 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="font-poppins font-semibold text-white/40 text-xs uppercase tracking-wide mb-1.5">Zones d'intervention</div>
              <p className="font-poppins text-white/50 text-xs leading-relaxed">Normandie · Hauts-de-France · Île-de-France · Centre-Val de Loire · Grand Est · Bourgogne-Franche-Comté</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-white/30 text-xs">© {new Date().getFullYear()} Borne Engineering Solutions. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="font-poppins text-white/30 hover:text-white/60 transition-colors text-xs">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
