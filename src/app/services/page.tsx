"use client";

import React from "react";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, Info, Zap } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Banner Header */}
      <section className="relative pt-32 pb-20 bg-solar-blue-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')] opacity-15 scale-105" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Our Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-glow">
            Solar Panel Solutions & Installations
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Professional high-efficiency on-grid solar systems, heavy load industrial arrays, and custom site designs with long-term maintenance.
          </p>
        </div>
      </section>

      {/* Render services grid block */}
      <Services />

      {/* Extended technical specifications banner */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue font-heading tracking-tight">
              Solar Tech & Components We Deploy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              At Rudraa Solar Power, we source and install state-of-the-art monocrystalline PERC solar panels and smart grid-tied string inverters from leading global manufacturers.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Monocrystalline PERC Solar Panels",
                  description: "High-efficiency panels (21%+ conversion rate) performing exceptionally well under high temperature coefficients, ensuring optimal yield during hot summer seasons.",
                },
                {
                  title: "Smart Grid-Tied Inverters",
                  description: "Features smart mobile application monitoring, allowing you to track daily, monthly, and yearly solar units generated on your smartphone.",
                },
                {
                  title: "Galvanized Mounting Structures",
                  description: "Custom-built, rust-resistant structure design to withstand strong wind velocities and securely mount panels on flat concrete roofs or sloped metal surfaces.",
                },
              ].map((tech, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 font-heading">{tech.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1 font-medium">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
            <Image
              src="/images/industrial_solar.png"
              alt="Industrial solar technical setup"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Render Why Choose Us warranties info */}
      <WhyChooseUs />
    </div>
  );
}
