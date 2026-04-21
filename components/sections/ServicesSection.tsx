"use client";

import { motion } from "framer-motion";
import { Home, Building2, Layers, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Home, tag: "Particuliers", color: "blue",
    title: "Installation à domicile",
    description: "Wallbox 7,4 à 22 kW installée en une journée, clé en main, par votre ingénieur référent.",
    features: ["Audit électrique offert", "Wallbox mono ou triphasée", "Conformité NF C 15-100", "Aide ADVENIR gérée pour vous"],
  },
  {
    icon: Building2, tag: "Entreprises", color: "green",
    title: "Solutions professionnelles",
    description: "Flottes de VE, avantage en nature, parking salarié : déploiement, supervision et facturation automatique.",
    features: ["Étude de faisabilité gratuite", "Supervision multi-bornes", "Facturation RFID par badge", "Load balancing intelligent"],
  },
  {
    icon: Layers, tag: "Copropriétés", color: "blue",
    title: "Déploiement collectif",
    description: "Du dossier AG au pré-câblage, nous gérons l'intégralité du projet collectif avec vous.",
    features: ["Accompagnement dossier AG", "Pré-câblage collectif", "Système de reréfacturation", "Bornes individuelles dédiées"],
  },
  {
    icon: BarChart3, tag: "Énergie", color: "green",
    title: "Gestion intelligente",
    description: "Smart charging, intégration solaire, pilotage de charge : optimisez chaque kilowattheure.",
    features: ["Smart charging & V2G ready", "Intégration photovoltaïque", "Supervision temps réel", "Rapports de consommation"],
  },
];

export default function ServicesSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <SectionHeader
            badge="Nos prestations"
            title="Tout votre projet IRVE,"
            titleHighlight="en un seul interlocuteur"
            subtitle="Particulier, professionnel ou copropriété — une expertise ingénierie complète, de l'analyse technique à la mise en service."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const blue = s.color === "blue";
            return (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => go("contact")}
                className="card group p-7 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                    blue ? "bg-primary-light border border-primary-border group-hover:bg-primary"
                         : "bg-green-light border border-green-border group-hover:bg-green"}`}>
                    <Icon className={`w-5 h-5 transition-colors ${
                      blue ? "text-primary group-hover:text-white"
                           : "text-green group-hover:text-white"}`} strokeWidth={1.8} />
                  </div>
                  <span className={`text-[11px] font-poppins font-semibold px-2.5 py-1 rounded-md ${
                    blue ? "bg-primary-light text-primary" : "bg-green-light text-green"}`}>
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg text-navy mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="font-poppins text-muted text-sm leading-relaxed mb-5">{s.description}</p>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-poppins text-ink">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${blue ? "text-primary" : "text-green"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-1.5 text-sm font-poppins font-semibold ${blue ? "text-primary" : "text-green"}`}>
                  Demander un devis <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
