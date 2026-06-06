"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/919014249898?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property.%20Please%20provide%20more%20information.";
  /** vishnu is working on this development branch */
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-solar-blue-dark">
      {/* Background Image with animated parallax overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')] scale-105"
        style={{
          transform: "translateZ(0)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-solar-blue-dark/95 via-solar-blue-dark/85 to-transparent" />

      {/* Sun/Light Ray decoration effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-solar-orange/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-solar-blue-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-solar-orange/10 border border-solar-orange/20 rounded-full py-1.5 px-4 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-solar-orange animate-pulse" />
            <span className="text-xs font-bold text-solar-orange uppercase tracking-wider">
              Telangana's Leading Solar Provider
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.1]"
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed font-medium"
          >
            Reduce electricity costs by up to 90% and switch to sustainable energy solutions with professionally installed solar systems for homes, businesses, and industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-solar-orange to-solar-orange-dark text-white font-extrabold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 active:scale-98 transition-all flex items-center gap-2 group cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#calculator"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold px-8 py-4 rounded-xl hover:scale-105 active:scale-98 transition-all"
            >
              Request a Quote
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-slate-300 hover:text-white transition-colors py-3 px-4 group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 text-white/80"
          >
            <div>
              <p className="text-2xl font-bold font-heading text-solar-orange">25 Yrs</p>
              <p className="text-xs text-slate-400 mt-1">Panel Warranty</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-solar-orange">5 Yrs</p>
              <p className="text-xs text-slate-400 mt-1">Free Service Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-solar-orange">10 Yrs</p>
              <p className="text-xs text-slate-400 mt-1">Inverter Warranty</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
        <Link href="#stats" className="text-white/40 hover:text-white/80 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
