"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Smile, ShieldCheck } from "lucide-react";

const statsList = [
  { icon: Zap,         number: "1,200+", label: "kW Installed",       description: "Clean solar energy deployed" },
  { icon: Award,       number: "500+",   label: "Projects Completed",  description: "Residential & commercial rooftops" },
  { icon: Smile,       number: "100%",   label: "Happy Customers",     description: "5-star rated support & maintenance" },
  { icon: ShieldCheck, number: "25 Yrs", label: "Panel Warranty",      description: "Guaranteed long-term performance" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Stats() {
  return (
    /* Full-width transparent wrapper so only the card is visible — no phantom second white box */
    <section id="stats" className="relative z-20 w-full -mt-8 sm:-mt-12 lg:-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
        >
          {statsList.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-extrabold text-solar-blue font-heading tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 1.875rem)" }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="font-bold text-slate-800 mt-1 font-heading leading-tight"
                    style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-slate-500 mt-0.5 leading-snug hidden sm:block"
                    style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)" }}
                  >
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
