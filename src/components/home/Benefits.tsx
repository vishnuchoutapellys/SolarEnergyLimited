"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  TrendingDown, 
  Lightbulb, 
  Leaf, 
  Coins, 
  Home, 
  Globe 
} from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      icon: TrendingDown,
      title: "Lower Electricity Bills",
      description: "Switching to solar allows you to generate your own electricity, reducing your reliance on local utility providers and saving up to 90% on monthly power bills.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Energy Independence",
      description: "Produce your own power locally. Protect your household or industrial machinery from sudden grid power outages, load shedding, and rising electricity tariffs.",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solution",
      description: "Solar is a 100% clean, green, and renewable resource. It reduces greenhouse gas emissions, helping mitigate climate change and lowering your carbon footprint.",
      color: "from-emerald-500/10 to-green-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Coins,
      title: "Long-Term Savings",
      description: "With an average payback period of just 3 to 5 years, solar panel systems continue to generate free electricity for their entire 25+ year operational lifespan.",
      color: "from-teal-500/10 to-emerald-500/10",
      iconColor: "text-teal-500",
    },
    {
      icon: Home,
      title: "Increased Property Value",
      description: "Homes and commercial buildings equipped with high-yield solar systems enjoy higher resale values and sell faster compared to non-solar properties.",
      color: "from-indigo-500/10 to-purple-500/10",
      iconColor: "text-indigo-500",
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Contribute to India's green energy target. Help build clean cities and supply sustainable power grids for the benefit of future generations.",
      color: "from-sky-500/10 to-blue-500/10",
      iconColor: "text-sky-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Why Switch to Solar Energy?
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Solar energy isn't just an environmentally sound choice; it is one of the smartest financial decisions you will make for your home or business.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-50 hover:bg-white rounded-2xl p-8 hover:shadow-lg border border-slate-100 hover:border-slate-200/65 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center ${benefit.iconColor} mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fast Statistic Highlight */}
        <div className="mt-16 bg-gradient-to-r from-solar-blue to-solar-blue-light text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold font-heading">Make the Switch Today & Save Up to 90%</h3>
            <p className="text-slate-200 text-sm mt-2 font-medium">
              Start generating your own free energy, reduce grid dependence, and secure subsidies up to ₹78,000.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-solar-orange hover:bg-solar-orange-dark text-white font-extrabold px-8 py-3.5 rounded-xl hover:scale-105 active:scale-98 transition-all shrink-0 text-center"
          >
            Calculate Savings
          </Link>
        </div>
      </div>
    </section>
  );
}
