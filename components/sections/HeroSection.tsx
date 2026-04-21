"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Clock, Star, Zap } from "lucide-react";

const checks = [
  "Installation conforme NF C 15-100 et décret IRVE",
  "Un seul interlocuteur du premier appel à la mise en service",
  "Devis détaillé sous 48h, bilan électrique offert",
  "Accompagnement pour les aides et subventions",
];

const trust = [
  { icon: ShieldCheck, label: "QUALIFELEC IRVE" },
  { icon: Star,        label: "4.9/5 · 150+ avis" },
  { icon: Clock,       label: "Réponse sous 24h" },
];

export default function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-cream">

      {/* Bandeau d'urgence */}
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-center gap-6 flex-wrap">
          <span className="text-white text-xs font-poppins font-medium">
            ⚡ Intervention sous 72h
          </span>
          <span className="text-white/40 text-xs hidden sm:block">·</span>
          <span className="text-white text-xs font-poppins font-medium">
            📋 Étude gratuite
          </span>
          <a href="tel:+33758195547" className="text-white font-poppins font-semibold text-xs flex items-center gap-1 hover:text-orange-100 transition-colors">
            <Phone className="w-3 h-3" /> +33 7 58 19 55 47
          </a>
        </div>
      </div>

      {/* Hero principal */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Gauche */}
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-4">
              <span className="section-badge">Installateur IRVE certifié · Ingénieur diplômé</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07, duration: 0.45 }}
              className="font-poppins font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-navy leading-[1.2] mb-5"
            >
              Installation de borne<br />
              de recharge électrique —{" "}
              <span className="text-primary">un expert à vos côtés.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.4 }}
              className="text-muted text-base md:text-lg leading-relaxed mb-8 font-poppins max-w-lg"
            >
              Particulier, entreprise ou copropriété — Borne Engineering Solutions vous
              accompagne personnellement de l'audit électrique à la mise en service de
              votre borne IRVE, avec un ingénieur certifié comme interlocuteur unique.
            </motion.p>

            {/* Checks */}
            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22, duration: 0.35 }}
              className="space-y-2.5 mb-9"
            >
              {checks.map((item, i) => (
                <motion.li key={item} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.26 + i * 0.06 }}
                  className="flex items-start gap-2.5 text-sm font-poppins text-ink"
                >
                  <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button onClick={() => go("contact")}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-poppins font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-btn text-base">
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="tel:+33758195547"
                className="inline-flex items-center gap-2 border-2 border-border text-navy hover:border-primary hover:text-primary font-poppins font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 pt-8 border-t border-border"
            >
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-poppins font-semibold text-muted">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Droite — carte projet + borne visuelle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Carte principale */}
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              {/* Header bleu */}
              <div className="bg-primary p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-white text-sm">Projet en cours</div>
                      <div className="font-poppins text-white/60 text-xs">Wallbox 22 kW · Type 2</div>
                    </div>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-poppins font-semibold px-2.5 py-1 rounded-full">
                    En cours
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs font-poppins text-white/70 mb-1.5">
                    <span>Avancement</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: "75%" }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Corps */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Audit & bilan électrique", done: true },
                    { label: "Devis et choix du matériel", done: true },
                    { label: "Installation & câblage", done: true },
                    { label: "Mise en service & attestation IRVE", done: false, active: true },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${
                        s.done ? "bg-green border-green" : s.active ? "border-primary bg-primary-light" : "border-border"
                      }`}>
                        {s.done && (
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {s.active && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </div>
                      <span className={`text-sm font-poppins ${
                        s.done ? "text-muted line-through" : s.active ? "text-navy font-semibold" : "text-soft"
                      }`}>{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Interlocuteur */}
                <div className="bg-surface rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-mid border border-primary-border flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-primary text-sm">IE</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-poppins font-semibold text-navy text-sm">Votre ingénieur référent</div>
                    <div className="font-poppins text-muted text-xs">Disponible · Répond en &lt; 2h</div>
                  </div>
                  <a href="tel:+33758195547"
                    className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pill flottant */}
            <motion.div
              animate={{ y: [-4, 4, -4] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white border border-border rounded-xl px-4 py-3 shadow-card"
            >
              <div className="font-poppins font-bold text-2xl text-navy">150+</div>
              <div className="font-poppins text-muted text-xs">bornes installées</div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-3 -right-3 bg-white border border-border rounded-xl px-4 py-3 shadow-card"
            >
              <div className="font-poppins font-bold text-lg text-primary leading-none">72h</div>
              <div className="font-poppins text-muted text-xs">délai d'intervention</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-border" />
    </section>
  );
}
