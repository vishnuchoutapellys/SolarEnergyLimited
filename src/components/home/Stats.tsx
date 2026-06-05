"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Smile, ShieldCheck } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      icon: Zap,
      number: "1,200+",
      label: "kW Installed",
      description: "Clean solar energy deployed",
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Completed",
      description: "Residential & commercial rooftops",
    },
    {
      icon: Smile,
      number: "100%",
      label: "Happy Customers",
      description: "5-star rated support & maintenance",
    },
    {
      icon: ShieldCheck,
      number: "25 Yrs",
      label: "Panel Warranty",
      description: "Guaranteed long-term performance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="stats" className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100"
      >
        {statsList.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-start gap-4 ${
                index > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-solar-blue font-heading tracking-tight">
                  {stat.number}
                </p>
                <p className="text-sm font-bold text-slate-800 mt-1 font-heading">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
