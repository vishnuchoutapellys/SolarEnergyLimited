"use client";

import React from "react";
import Gallery from "@/components/home/Gallery";
import Link from "next/link";
import { Camera } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Banner Header */}
      <section className="relative pt-32 pb-20 bg-solar-blue-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')] opacity-15 scale-105" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Our Happy Customer's
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-glow">
            Recent Projects Gallery
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Real installations of residential solar rooftops, commercial structures, and industrial power arrays across Telangana district.
          </p>
        </div>
      </section>

      {/* Render filterable gallery */}
      <Gallery />

      {/* Trust Callout Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange mx-auto">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-solar-blue font-heading tracking-tight">
            Switch Your Property to Clean Solar Power
          </h2>
          <p className="text-slate-600 text-xs max-w-lg mx-auto leading-relaxed font-medium">
            Join hundreds of satisfied home owners and business organizations saving thousands of rupees monthly on electricity costs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-solar-orange hover:bg-solar-orange-dark text-white font-extrabold px-8 py-3.5 rounded-xl hover:scale-105 active:scale-98 transition-all inline-block shadow-lg"
            >
              Get Free Solar Site Survey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
