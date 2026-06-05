"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919014249898?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property.%20Please%20provide%20more%20information.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 group hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
      
      <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
