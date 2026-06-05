"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTABanner() {
  const whatsappUrl = "https://wa.me/919014249898?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property.%20Please%20provide%20more%20information.";

  return (
    <section className="relative py-20 bg-solar-blue-dark overflow-hidden text-white">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-orange/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-blue-light/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <span className="inline-block bg-solar-orange/15 border border-solar-orange/30 text-solar-orange font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider">
          Switch to Solar Today
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Reduce Your Electricity Bills by Up to 90%?
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
          Get in touch with Rudra Solar Energy Private Limited. Our engineers will perform a free site survey, shadow analysis, and energy audit for your property.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          
          {/* Call Now */}
          <a
            href="tel:+919014249898"
            className="flex items-center gap-2.5 bg-white text-solar-blue font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 hover:scale-105 active:scale-98 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5 text-solar-orange fill-current" />
            <span>Call +91 9014249898</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:scale-105 active:scale-98 transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          {/* Consultation Link */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-solar-orange hover:bg-solar-orange-dark text-white font-bold px-7 py-3.5 rounded-xl hover:scale-105 active:scale-98 transition-all shadow-lg group cursor-pointer"
          >
            <span>Request Call Back</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>

      </div>
    </section>
  );
}
