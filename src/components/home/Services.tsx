"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      title: "Residential Solar Solutions",
      description: "Slash your home electricity bills by up to 90%. Enjoy clean power with grid subsidies.",
      image: "/images/residential_solar.png",
      benefits: ["Up to ₹78,000 Govt Subsidy support", "Zero-Cost Bank Loan / EMI options", "25-year panel warranty coverage"],
    },
    {
      title: "Commercial Solar Solutions",
      description: "Help your business lower operational overheads, secure depreciation benefits, and go green.",
      image: "/images/commercial_solar.png",
      benefits: ["40% Accelerated Depreciation tax benefit", "Substantial reduction in tariff bills", "High ROI & fast payback timeline"],
    },
    {
      title: "Industrial Solar Solutions",
      description: "Engineered high-capacity solar arrays to handle heavy machineries, lowering energy costs.",
      image: "/images/industrial_solar.png",
      benefits: ["High durability under heavy load factors", "End-to-end grid integration", "Massive long-term operational savings"],
    },
    {
      title: "Rooftop Solar Installations",
      description: "Turn idle roof space into an income-generating asset with custom rooftop solar arrays.",
      image: "/images/hero_background.png", // Reuse high-quality background
      benefits: ["Precision structural engineering", "Waterproof and wind-resistant mounts", "Optimal angle orientation for maximum yield"],
    },
    {
      title: "Solar Maintenance Services",
      description: "Keep your system operating at peak performance with cleaning, electrical audits, and repairs.",
      image: "/images/maintenance_solar.png",
      benefits: ["Includes 5 Years Free Service support", "Routine panel cleaning & wire checks", "Inverter inspection & performance optimization"],
    },
    {
      title: "Solar Consultation & Design",
      description: "Get a comprehensive site assessment, shadow analysis, and detailed system architecture layout.",
      image: "/images/consultation_solar.png",
      benefits: ["3D Shadow Analysis for maximum shade loss protection", "Detailed customized energy ROI report", "Optimal technology & capacity configuration"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Premium Solar Energy Services
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Discover customized solar installation and support options tailored for every property type. Turn your roof space into a source of savings and independence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-white font-extrabold text-lg leading-tight font-heading">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Bullet Benefits */}
                  <ul className="space-y-2.5 mb-6">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full flex items-center justify-center gap-2 border border-solar-blue text-solar-blue font-bold text-xs uppercase py-3 rounded-xl hover:bg-solar-blue hover:text-white transition-all duration-300 group/btn"
                >
                  Request Callback
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
