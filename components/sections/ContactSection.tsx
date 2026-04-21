"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FranceMap from "@/components/ui/FranceMap";

const schema = z.object({
  name:    z.string().min(2, "Veuillez saisir votre nom"),
  email:   z.string().email("Email invalide"),
  phone:   z.string().regex(/^[0-9\s\+\-\(\)]{6,}$/, "Numéro invalide").optional().or(z.literal("")),
  type:    z.enum(["particulier", "entreprise", "copropriete", "autre"], { errorMap: () => ({ message: "Choisissez un type" }) }),
  message: z.string().min(20, "Décrivez votre projet (min. 20 caractères)"),
  consent: z.boolean().refine((v) => v, "Consentement requis"),
});
type F = z.infer<typeof schema>;

const infos = [
  { icon: Phone, label: "Téléphone", val: "+33 7 58 19 55 47", href: "tel:+33758195547" },
  { icon: Mail,  label: "Email",     val: "borne-eng@gmail.com", href: "mailto:borne-eng@gmail.com" },
  { icon: Clock, label: "Réponse",   val: "Sous 24h ouvrées", href: null },
];

const promises = [
  "Réponse personnalisée sous 24h",
  "Bilan électrique offert",
  "Devis détaillé sans engagement",
  "Conseil sur les aides disponibles",
];

const zones = [
  "Normandie",
  "Hauts-de-France",
  "Île-de-France",
  "Centre-Val de Loire",
  "Grand Est",
  "Bourgogne-Franche-Comté",
];

export default function ContactSection() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    setErr(false);
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log(data);
      setOk(true); reset();
    } catch { setErr(true); }
  };

  return (
    <section id="contact" className="py-20 bg-surface-2 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <SectionHeader badge="Contact" title="Parlons de" titleHighlight="votre projet"
            subtitle="Décrivez votre besoin en 2 minutes. Votre ingénieur vous rappelle personnellement sous 24h." />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-5">

            {/* Coordonnées */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-poppins font-semibold text-navy text-sm mb-5">Coordonnées</h3>
              <div className="space-y-4">
                {infos.map(({ icon: Icon, label, val, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-light border border-primary-border flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="font-poppins text-soft text-xs">{label}</div>
                      {href ? <a href={href} className="font-poppins font-semibold text-navy text-sm hover:text-primary transition-colors">{val}</a>
                             : <div className="font-poppins font-semibold text-navy text-sm">{val}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte zones d'intervention */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-poppins font-semibold text-navy text-sm mb-1">Zones d'intervention</h3>
              <p className="font-poppins text-soft text-xs mb-4">
                {zones.join(" · ")}
              </p>
              <FranceMap className="w-full max-w-[260px] mx-auto" />
            </div>

            {/* Promesses */}
            <div className="bg-primary rounded-xl p-6">
              <div className="font-poppins font-semibold text-white text-sm mb-4">Ce que vous obtenez</div>
              {promises.map((p) => (
                <div key={p} className="flex items-center gap-2.5 py-2.5 border-b border-white/10 last:border-0">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="font-poppins text-white text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3">
            {ok ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-green-light border border-green-border flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-navy mb-2">Message envoyé !</h3>
                <p className="font-poppins text-muted text-sm leading-relaxed max-w-xs mb-7">
                  Votre ingénieur IRVE vous contactera personnellement sous 24h ouvrées.
                </p>
                <button onClick={() => setOk(false)}
                  className="border-2 border-primary text-primary font-poppins font-semibold px-5 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all text-sm">
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-border p-7 flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-semibold text-xs text-ink uppercase tracking-wide">Nom complet *</label>
                    <input {...register("name")} placeholder="Jean Dupont" className="input-field" />
                    {errors.name && <span className="text-red-500 text-xs font-poppins flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-semibold text-xs text-ink uppercase tracking-wide">Email *</label>
                    <input {...register("email")} type="email" placeholder="jean@exemple.fr" className="input-field" />
                    {errors.email && <span className="text-red-500 text-xs font-poppins flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-semibold text-xs text-ink uppercase tracking-wide">Téléphone</label>
                    <input {...register("phone")} type="tel" placeholder="+33 7 58 19 55 47" className="input-field" />
                    {errors.phone && <span className="text-red-500 text-xs font-poppins flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone.message}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins font-semibold text-xs text-ink uppercase tracking-wide">Type de projet *</label>
                    <select {...register("type")} className="input-field appearance-none">
                      <option value="">Choisir...</option>
                      <option value="particulier">Particulier (domicile)</option>
                      <option value="entreprise">Entreprise / Professionnel</option>
                      <option value="copropriete">Copropriété / Parking</option>
                      <option value="autre">Autre</option>
                    </select>
                    {errors.type && <span className="text-red-500 text-xs font-poppins flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.type.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins font-semibold text-xs text-ink uppercase tracking-wide">Votre projet *</label>
                  <textarea {...register("message")} rows={4} placeholder="Décrivez votre projet : type de logement, véhicule(s), usage prévu..." className="input-field resize-none" />
                  {errors.message && <span className="text-red-500 text-xs font-poppins flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message.message}</span>}
                </div>

                <div className="flex items-start gap-3">
                  <input {...register("consent")} type="checkbox" id="consent" className="w-4 h-4 mt-0.5 accent-primary flex-shrink-0" />
                  <label htmlFor="consent" className="font-poppins text-soft text-xs leading-relaxed cursor-pointer">
                    J'accepte que mes données soient utilisées pour traiter ma demande conformément à la politique de confidentialité. *
                  </label>
                </div>
                {errors.consent && <span className="text-red-500 text-xs font-poppins flex items-center gap-1 -mt-3"><AlertCircle className="w-3 h-3" />{errors.consent.message}</span>}

                {err && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm font-poppins flex items-center gap-2"><AlertCircle className="w-4 h-4" />Une erreur est survenue. Contactez-nous directement par téléphone.</div>}

                <button type="submit" disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-poppins font-semibold py-3.5 rounded-lg transition-colors shadow-btn disabled:opacity-60 text-base">
                  {isSubmitting ? "Envoi en cours..." : <><span>Envoyer ma demande</span><Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
