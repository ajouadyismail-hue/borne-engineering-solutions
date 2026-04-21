"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Notre approche", href: "#accompagnement" },
  { label: "À propos", href: "#a-propos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-cream border-b border-border"
      }`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Borne Eng Solutions"
                width={140}
                height={153}
                className="h-12 w-auto object-contain"
                priority
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="font-poppins font-medium text-muted hover:text-navy hover:bg-surface px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+33758195547" className="flex items-center gap-1.5 font-poppins font-semibold text-sm text-navy hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +33 7 58 19 55 47
              </a>
              <button
                onClick={() => go("#contact")}
                className="bg-primary hover:bg-primary-dark text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-btn"
              >
                Devis gratuit
              </button>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-muted hover:bg-surface transition-colors">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/20 z-40 md:hidden" />
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="fixed top-[65px] left-3 right-3 bg-cream rounded-xl border border-border shadow-card z-50 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => go(link.href)}
                  className="w-full text-left px-5 py-3.5 font-poppins font-medium text-ink hover:bg-primary-light hover:text-primary border-b border-border last:border-0 transition-colors text-sm">
                  {link.label}
                </button>
              ))}
              <div className="p-4 bg-surface flex flex-col gap-2.5">
                <a href="tel:+33758195547" className="flex items-center gap-2 text-navy font-poppins font-semibold text-sm">
                  <Phone className="w-4 h-4 text-primary" /> +33 7 58 19 55 47
                </a>
                <button onClick={() => go("#contact")}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-poppins font-semibold text-sm py-3 rounded-lg transition-colors">
                  Devis gratuit
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
