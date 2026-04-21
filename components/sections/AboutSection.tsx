"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Cpu, Leaf, Award, ArrowRight, Quote } from "lucide-react";

const certs = [
  { icon: Shield, label: "QUALIFELEC IRVE" },
  { icon: Award,  label: "Habilitation B2V BR BC" },
  { icon: GraduationCap, label: "Ingénieur diplômé" },
];

const values = [
  { icon: Cpu,  title: "Rigueur d'ingénieur",    desc: "Dimensionnement calculé, rapport technique remis. Pas d'approximation." },
  { icon: Shield, title: "Conformité totale",     desc: "NF C 15-100, décret IRVE, ENEDIS — chaque point est vérifié et documenté." },
  { icon: Leaf, title: "Vision long terme",       desc: "Matériel V2G ready, compatible futures normes EU. Votre investissement dure." },
];

export default function AboutSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="a-propos" className="py-20 bg-surface-2 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Gauche */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {/* Citation */}
            <div className="bg-white rounded-xl border border-border p-7 mb-5 relative">
              <Quote className="w-7 h-7 text-border absolute top-5 right-5" />
              <div className="w-14 h-14 rounded-xl bg-primary-mid border border-primary-border flex items-center justify-center mb-5">
                <span className="font-poppins font-bold text-primary text-lg">IE</span>
              </div>
              <blockquote className="font-poppins text-ink text-sm leading-relaxed mb-5 italic">
                "J'ai fondé Borne Engineering Solutions après avoir constaté que trop
                d'installations IRVE étaient réalisées sans vrai audit technique —
                des sous-dimensionnements, des non-conformités, des déceptions.
                Mon objectif : apporter la rigueur de l'ingénierie à chaque projet."
              </blockquote>
              <div>
                <div className="font-poppins font-semibold text-navy text-sm">Votre ingénieur référent</div>
                <div className="font-poppins text-muted text-xs mt-0.5">Fondateur · Expert IRVE · 5 ans d'expérience</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              {certs.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3 bg-primary-light rounded-lg border border-primary-border">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.8} />
                  <span className="font-poppins font-semibold text-primary text-sm">{label}</span>
                </div>
              ))}
            </div>

            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-3 shadow-card mt-5">
              <div className="w-9 h-9 rounded-lg bg-green-light border border-green-border flex items-center justify-center">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-poppins font-bold text-navy text-xl leading-none">98%</div>
                <div className="font-poppins text-muted text-xs">de clients satisfaits</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Droite */}
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <span className="section-badge mb-4 inline-block">À propos</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-navy mb-3 leading-snug">
                Pourquoi choisir un <span className="text-primary">ingénieur</span> plutôt qu'un électricien généraliste ?
              </h2>
              <p className="font-poppins text-muted text-sm leading-relaxed mb-8">
                Une borne de recharge interagit avec votre réseau, votre compteur, votre production solaire éventuelle.
                La concevoir demande des calculs précis, pas des estimations. C'est là que l'approche ingénierie fait la différence.
              </p>
            </motion.div>

            <div className="space-y-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={v.title}
                    initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.09 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-light border border-primary-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors mt-0.5">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-navy text-sm mb-1">{v.title}</h4>
                      <p className="font-poppins text-muted text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8">
              <button onClick={() => go("contact")}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-all text-sm">
                Prendre contact <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
