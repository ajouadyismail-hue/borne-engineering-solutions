"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Zap,   value: 150, suffix: "+",   label: "Bornes installées",   sub: "Résidentiel & professionnel" },
  { icon: Star,  value: 98,  suffix: "%",   label: "Clients satisfaits",  sub: "Note moyenne 4.9 / 5" },
  { icon: Clock, value: 72,  suffix: "h",   label: "Délai d'intervention",sub: "Sur devis accepté" },
  { icon: Users, value: 5,   suffix: " ans",label: "D'expertise IRVE",    sub: "Certifié depuis 2019" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1400, 1);
          setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [value]);
  return <span ref={ref} className="font-poppins font-bold text-3xl md:text-4xl text-navy">{n}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-surface py-14 border-y border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map(({ icon: Icon, value, suffix, label, sub }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center relative px-4"
            >
              {i > 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-border" />}
              <div className="w-10 h-10 rounded-lg bg-primary-light border border-primary-border flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <Counter value={value} suffix={suffix} />
              <div className="font-poppins font-semibold text-ink text-sm mt-1.5 mb-0.5">{label}</div>
              <div className="font-poppins text-soft text-xs">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
