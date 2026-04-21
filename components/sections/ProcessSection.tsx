"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, FileCheck, Headphones } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  { icon: ClipboardList, n: 1, title: "Audit technique", desc: "Analyse électrique, dimensionnement, devis sous 48h.", time: "J+1–2" },
  { icon: Wrench,        n: 2, title: "Installation",    desc: "Pose & câblage conforme NF C 15-100 par votre ingénieur.", time: "1 journée" },
  { icon: FileCheck,     n: 3, title: "Mise en service", desc: "Tests, paramétrage et remise de l'attestation IRVE.", time: "Inclus" },
  { icon: Headphones,    n: 4, title: "SAV & suivi",     desc: "Hotline 5j/7, télémaintenance, garantie 2 ans.", time: "Long terme" },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <SectionHeader badge="En pratique" title="De la demande à" titleHighlight="la première charge"
            subtitle="Un processus transparent, planifié avec vous, sans aucune surprise." />
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative text-center group"
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 right-0 w-full z-0">
                    <div className="h-px bg-border ml-5" />
                  </div>
                )}
                {/* Icon */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-primary-border flex items-center justify-center mx-auto mb-4 group-hover:border-primary group-hover:bg-primary-light transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-poppins font-bold flex items-center justify-center">{s.n}</div>
                </div>
                <h4 className="font-poppins font-semibold text-navy text-sm mb-1.5">{s.title}</h4>
                <p className="font-poppins text-muted text-xs leading-relaxed mb-2.5">{s.desc}</p>
                <span className="text-[11px] font-poppins font-semibold text-primary bg-primary-light border border-primary-border px-2.5 py-1 rounded-md">{s.time}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.n}
                initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white border border-border rounded-xl p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-light border border-primary-border flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-poppins font-bold text-soft">0{s.n}</span>
                    <h4 className="font-poppins font-semibold text-navy text-sm">{s.title}</h4>
                  </div>
                  <p className="font-poppins text-muted text-xs leading-relaxed mb-2">{s.desc}</p>
                  <span className="text-[11px] font-poppins font-semibold text-primary bg-primary-light border border-primary-border px-2 py-0.5 rounded-md">{s.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
