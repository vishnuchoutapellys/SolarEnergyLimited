"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Hammer, 
  ClipboardCheck 
} from "lucide-react";

export default function WhyChooseUs() {
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
      title: "10-Year Inverter Warranty",
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-solar-blue-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-blue-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight mt-4 text-glow">
            Setting the Standard in Solar Solutions
          </h2>
          <p className="text-slate-300 mt-4 leading-relaxed font-medium">
            Rudra Solar Energy Private Limited delivers reliable solar installations with premium components, financial ease, and unmatched long-term warranty support.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card-dark p-8 rounded-2xl border border-slate-800 hover:border-solar-orange/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange border border-solar-orange/20 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-solar-orange transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
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
