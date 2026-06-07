"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Wrench, Cpu, Hammer, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Flexible Financing Options",
    description: "We assist customers with convenient bank loan and zero-cost EMI options, making solar adoption easier, affordable, and accessible for everyone.",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Solar Panel Warranty",
    description: "We provide premium-quality tier-1 solar panels backed by long-term linear performance manufacturer warranties for dependable energy production.",
  },
  {
    icon: Wrench,
    title: "5 Years Free Service Support",
    description: "Rest easy after your installation. Every customer receives five years of complimentary service, cleaning, and maintenance support.",
  },
  {
    icon: Cpu,
    title: "7-Year Inverter Warranty",
    description: "High-efficiency, smart grid-tied solar inverter systems backed by comprehensive warranty coverage for ultimate safety and performance.",
  },
  {
    icon: Hammer,
    title: "Expert Installation Team",
    description: "Our certified installation technicians and structural engineers ensure safe, durable, and highly efficient solar setups on any roof.",
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Project Execution",
    description: "From site survey, net metering documentation, solar subsidy application, to installation and final grid turn-on, we handle it all.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 md:py-20 lg:py-24 bg-solar-blue-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-solar-blue-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-solar-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2
            className="font-extrabold font-heading tracking-tight mt-3 sm:mt-4 text-balance text-glow"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Setting the Standard in Solar Solutions
          </h2>
          <p className="text-slate-300 mt-3 sm:mt-4 leading-relaxed font-medium" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Rudraa solar power private limited delivers reliable solar installations with premium components, financial ease, and unmatched long-term warranty support.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card-dark p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-solar-orange/30 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange border border-solar-orange/20 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Title */}
                <h3
                  className="font-bold font-heading mb-2 sm:mb-3 group-hover:text-solar-orange transition-colors"
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed font-medium" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
