"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919666551104?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property.%20Please%20provide%20more%20information.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-solar-blue-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')]"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      />
      {/* Multi-layer overlay for full readability on any background brightness */}
      <div className="absolute inset-0 bg-solar-blue-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-solar-blue-dark/95 via-solar-blue-dark/80 to-solar-blue-dark/50" />

      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-solar-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-solar-blue-light/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-solar-orange/10 border border-solar-orange/25 rounded-full py-1 sm:py-1.5 px-3 sm:px-4 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-solar-orange animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold text-solar-orange uppercase tracking-wider">
              Telangana's Leading Solar Provider
            </span>
          </motion.div>

          {/* Headline — clamp-based responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-extrabold text-white font-heading tracking-tight leading-[1.1] text-balance"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
          >
            Power Your Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-amber-400 text-glow">
              Clean Solar Energy
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-100 mt-4 sm:mt-6 leading-relaxed font-medium drop-shadow-sm"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)" }}
          >
            Reduce electricity costs by up to 90% and switch to sustainable energy
            solutions with professionally installed solar systems for homes, businesses,
            and industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-solar-orange to-solar-orange-dark text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group touch-target"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#calculator"
              className="bg-white/15 hover:bg-white/25 border-2 border-white/70 text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:scale-[1.03] active:scale-[0.98] transition-all text-center touch-target shadow-lg"
            >
              Request a Quote
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold text-white hover:text-emerald-300 transition-colors py-3 px-4 group touch-target drop-shadow-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform fill-current shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 grid grid-cols-3 pt-6 sm:pt-8 border-t border-white/30"
          >
            {[
              { value: "25 Yrs", label: "Panel Warranty" },
              { value: "5 Yrs", label: "Free Service" },
              { value: "7 Yrs", label: "Inverter Warranty" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-start py-2 pr-4 ${i > 0 ? "pl-4 border-l border-white/20" : ""
                  }`}
              >
                <p
                  className="font-extrabold font-heading text-solar-orange drop-shadow-sm leading-none"
                  style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-white mt-1 leading-tight font-semibold"
                  style={{ fontSize: "clamp(0.72rem, 1.8vw, 0.85rem)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block z-10">
        <Link href="#stats" className="text-white/40 hover:text-white/70 transition-colors" aria-label="Scroll to stats">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
