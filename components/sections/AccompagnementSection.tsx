"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Wrench, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: MessageCircle, num: "01",
    title: "Premier contact & écoute",
    description: "Un appel de 15 minutes avec votre ingénieur pour comprendre vos besoins, votre installation et vos contraintes. Pas de formulaire impersonnel — une vraie conversation.",
    tags: ["Gratuit", "Sans engagement", "Réponse sous 24h"],
  },
  {
    icon: FileText, num: "02",
    title: "Audit & devis sur-mesure",
    description: "Visite technique ou audit à distance : analyse de votre tableau électrique, calcul de dimensionnement, sélection du matériel adapté. Devis remis sous 48h.",
    tags: ["Bilan électrique", "Devis HT/TTC", "Aides incluses"],
  },
  {
    icon: Wrench, num: "03",
    title: "Installation & conformité",
    description: "Pose par votre ingénieur référent ou sous sa supervision directe, dans le strict respect de la norme NF C 15-100 et du décret IRVE.",
    tags: ["NF C 15-100", "Attestation IRVE", "Photos de réception"],
  },
  {
    icon: HeartHandshake, num: "04",
    title: "Suivi & accompagnement",
    description: "Mise en service, formation, hotline — votre ingénieur reste disponible. Toujours le même contact, avant, pendant et après.",
    tags: ["Garantie 2 ans", "Hotline 5j/7", "Télémaintenance"],
  },
];

export default function AccompagnementSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="accompagnement" className="py-20 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <SectionHeader
            badge="Notre approche"
            title="Un accompagnement personnalisé,"
            titleHighlight="de A à Z"
            subtitle="Pas de sous-traitance, pas de centre d'appel. Votre ingénieur référent est votre unique interlocuteur tout au long du projet."
          />
        </motion.div>

        {/* Bloc différenciateur */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-primary rounded-xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-6 h-6 text-white" strokeWidth={1.8} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-poppins font-bold text-white text-lg mb-1.5">
              Un ingénieur. Un projet. Un numéro de téléphone.
            </h3>
            <p className="font-poppins text-orange-100 text-sm leading-relaxed">
              Chez Borne Engineering Solutions, vous avez un contact direct avec l'ingénieur qui connaît votre dossier.
              Joignable, réactif, impliqué — pas un technicien qui découvre votre installation à chaque appel.
            </p>
          </div>
          <button onClick={() => go("contact")}
            className="flex-shrink-0 bg-white hover:bg-primary-light text-primary font-poppins font-semibold text-sm px-5 py-3 rounded-lg transition-colors">
            Me contacter <ArrowRight className="inline w-4 h-4 ml-1" />
          </button>
        </motion.div>

        {/* Étapes */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl border border-border p-6 flex gap-4 hover:border-primary-border hover:shadow-card-hover transition-all duration-250"
              >
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary-light border border-primary-border flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="font-poppins font-bold text-border text-base leading-none">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-navy text-base mb-2">{step.title}</h4>
                  <p className="font-poppins text-muted text-sm leading-relaxed mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((t) => (
                      <span key={t} className="text-xs font-poppins font-medium text-primary bg-primary-light border border-primary-border px-2.5 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
