"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Commitment to Quality",
      description: "We source only tier-1 solar panels and top-grade structural components to ensure maximum energy output and long-term durability.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Our customer-centric approach is backed by 5 years of free service support, quick callbacks, and direct executive support.",
    },
    {
      icon: Shield,
      title: "Reliability & Warranty",
      description: "All products come with robust, multi-year manufacturer warranties: 25 years on panels and 10 years on solar inverters.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Header */}
      <section className="relative pt-32 pb-20 bg-solar-blue-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')] opacity-15 scale-105" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 animate-fade-in-up">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-glow">
            About Rudra Solar Energy
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Pioneering sustainable and reliable clean solar energy solutions across Telangana to reduce carbon footprints and cut utility bills.
          </p>
        </div>
      </section>

      {/* Corporate Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-5 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
            <Image
              src="/images/consultation_solar.png"
              alt="Rudra Solar Consulting Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Core profile */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue font-heading tracking-tight leading-tight">
              Powering a Clean & Sustainable Future
            </h2>
            
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Rudra Solar Energy Private Limited is one of Telangana's premier solar installation and consultation firms. Based in Korutla, Jagityal, we serve residential, commercial, and industrial clients with tailored rooftop solar setups designed to maximize power yields and optimize ROI.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We manage the entire project lifecycle—from site assessment, shadow analysis, layout designs, net metering documentation, solar subsidy processing, to final integration and after-sales support.
            </p>

            {/* Mission / Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                <h3 className="font-bold text-sm text-solar-blue font-heading mb-2">Our Mission</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  To make clean solar energy accessible and affordable for every home and business, helping reduce carbon emissions and build energy independence.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                <h3 className="font-bold text-sm text-solar-blue font-heading mb-2">Our Vision</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  To become Telangana's most trusted solar installation partner, known for engineering excellence, reliable warranties, and premium client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue font-heading tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-slate-600 text-xs mt-3 leading-relaxed font-medium">
              We stand by our credentials, offering complete transparency, structural durability, and certified solar panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-solar-orange/10 rounded-xl flex items-center justify-center text-solar-orange">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-solar-blue to-solar-blue-light text-white rounded-2xl p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/10 rounded-full blur-2xl" />
          
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading">Our Quality Commitment</h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
              Rudra Solar Energy Private Limited ensures every installation complies with international electrical and safety guidelines. We perform comprehensive quality audits on earthing, surge protection, structure alignment, and net metering connectivity.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Tier-1 MNRE approved solar panels",
                "Rust-resistant hot-dip galvanized mounting structures",
                "Advanced Surge Protection Devices (SPD)",
                "Full assistance with net meter grid approvals",
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-[11px] text-slate-100 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-solar-orange shrink-0 fill-current" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex justify-center relative z-10">
            <Link
              href="/contact"
              className="bg-solar-orange hover:bg-solar-orange-dark text-white font-extrabold px-8 py-4 rounded-xl hover:scale-105 active:scale-98 transition-all shadow-lg"
            >
              Get Free Solar Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
