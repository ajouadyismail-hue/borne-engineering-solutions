"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  { q: "Quelle borne choisir pour mon domicile ?", a: "Cela dépend de votre véhicule et de vos habitudes. Une wallbox 7,4 kW mono suffit pour une recharge nocturne complète. Pour un grand VE ou un usage intensif, le 11–22 kW triphasé est préférable. Lors de notre premier appel, je vous conseille la solution exactement adaptée à votre usage." },
  { q: "Puis-je bénéficier d'aides financières ?", a: "Oui — et je m'en occupe avec vous. Crédit d'impôt pour les particuliers, programme ADVENIR pour les professionnels et copropriétés, aides régionales... Je monte le dossier pour maximiser vos subventions." },
  { q: "Combien de temps dure l'installation ?", a: "Pour une wallbox résidentielle, comptez 4 à 8h selon la distance entre le tableau et la borne. Pour des projets multi-bornes, nous planifions ensemble lors de l'audit technique." },
  { q: "Êtes-vous vraiment mon seul interlocuteur ?", a: "Oui — c'est notre engagement principal. Du premier appel à la maintenance post-installation, c'est le même ingénieur qui vous accompagne. Mon numéro direct est sur votre devis." },
  { q: "Mon installation électrique est-elle compatible ?", a: "C'est précisément ce que l'audit initial vérifie : capacité de votre abonnement ENEDIS, état du tableau, protections, nécessité éventuelle d'une mise à niveau. Vous recevez un bilan écrit avant tout engagement." },
  { q: "Intervenez-vous pour les entreprises et copropriétés ?", a: "Absolument. Droit à la prise, dossier AG, systèmes de reréfacturation RFID, load balancing — chaque projet collectif fait l'objet d'une étude dédiée et d'un accompagnement complet." },
  { q: "Que se passe-t-il après l'installation ?", a: "Garantie 2 ans pièces et main d'œuvre, hotline 5j/7, télémaintenance à distance. Et toujours le même ingénieur qui connaît votre installation." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-cream border-t border-border">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <SectionHeader badge="Questions fréquentes" title="Tout ce que vous" titleHighlight="devez savoir"
            subtitle="Des réponses directes pour bien préparer votre projet." />
        </motion.div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`border rounded-lg overflow-hidden transition-colors ${open === i ? "border-primary-border" : "border-border hover:border-primary-border"}`}
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-cream">
                <span className={`font-poppins font-semibold text-sm transition-colors ${open === i ? "text-primary" : "text-navy"}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                  open === i ? "border-primary bg-primary text-white" : "border-border text-muted"}`}>
                  {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                    <div className="px-5 pb-5 font-poppins text-muted text-sm leading-relaxed bg-cream border-t border-border pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }} className="text-center font-poppins text-muted text-sm mt-8">
          Une autre question ?{" "}
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:underline font-semibold">
            Posez-la à votre ingénieur →
          </button>
        </motion.p>
      </div>
    </section>
  );
}
