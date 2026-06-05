"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+919014249898"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-solar-blue-light text-white rounded-full shadow-lg hover:bg-solar-blue transition-all duration-300 group hover:scale-110 md:hidden"
      aria-label="Call Us Now"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
      <Phone className="w-6 h-6 relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Call +91 9014249898
      </span>
    </a>
  );
}
