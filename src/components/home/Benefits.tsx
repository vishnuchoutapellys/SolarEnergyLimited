"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingDown, Lightbulb, Leaf, Coins, Home, Globe } from "lucide-react";

const benefitsList = [
  {
    icon: TrendingDown,
    title: "Lower Electricity Bills",
    description: "Generate your own electricity, reducing reliance on utility providers and saving up to 90% on monthly power bills.",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Energy Independence",
    description: "Protect your home or business from grid outages, load shedding, and ever-rising electricity tariffs.",
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solution",
    description: "Solar is 100% clean and renewable. Reduce greenhouse gas emissions and lower your carbon footprint.",
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Coins,
    title: "Long-Term Savings",
    description: "Average payback in just 3–5 years, then free electricity for 25+ years of your system's lifespan.",
    color: "from-teal-500/10 to-emerald-500/10",
    iconColor: "text-teal-500",
  },
  {
    icon: Home,
    title: "Increased Property Value",
    description: "Homes and businesses with solar systems enjoy higher resale values and sell faster.",
    color: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "Contribute to India's green energy target and help build sustainable power grids for future generations.",
    color: "from-sky-500/10 to-blue-500/10",
    iconColor: "text-sky-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Key Advantages
          </span>
          <h2
            className="font-extrabold text-solar-blue font-heading tracking-tight mt-3 sm:mt-4 text-balance"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Why Switch to Solar Energy?
          </h2>
          <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed font-medium" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Solar energy is one of the smartest financial decisions you can make for your home or business.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7"
        >
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 sm:p-6 md:p-7 hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center ${benefit.iconColor} mb-4`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3
                  className="font-bold font-heading text-slate-900 mb-2"
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}>
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <div className="mt-10 sm:mt-14 md:mt-16 bg-gradient-to-r from-solar-blue to-solar-blue-light text-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="max-w-xl">
            <h3
              className="font-bold font-heading"
              style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
            >
              Make the Switch Today &amp; Save Up to 90%
            </h3>
            <p className="text-slate-200 mt-1.5 font-medium" style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)" }}>
              Start generating your own free energy, reduce grid dependence, and secure subsidies up to ₹78,000.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-solar-orange hover:bg-solar-orange-dark text-white font-extrabold px-7 py-3.5 rounded-xl hover:scale-105 active:scale-98 transition-all shrink-0 text-center w-full sm:w-auto touch-target"
          >
            Calculate Savings
          </Link>
        </div>
      </div>
    </section>
  );
}
