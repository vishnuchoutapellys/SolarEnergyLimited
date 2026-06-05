"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Goud",
      role: "Home Owner",
      location: "Korutla, Jagityal",
      text: "Switching to Rudra Solar is the best decision I've made. My monthly electricity bill dropped from ₹6,500 to just ₹450! The installation was done in 3 days, and they took care of all the subsidy paperwork.",
      rating: 5,
    },
    {
      name: "Srinivas Reddy",
      role: "Factory Manager",
      location: "Karimnagar",
      text: "We installed a 50kW solar system for our rice mill. The system performance is excellent. We are saving over ₹50,000 every month on operations. The team is professional, and the 5-year service support gives us peace of mind.",
      rating: 5,
    },
    {
      name: "Anitha Rao",
      role: "Residential Client",
      location: "Jagityal Town",
      text: "Excellent service and support by Rudra Solar! The bank loan process was smooth. They helped us set up the EMI, and the panels are performing exceptionally well even during high heat.",
      rating: 5,
    },
    {
      name: "Venkatesh K.",
      role: "Supermarket Owner",
      location: "Nizamabad",
      text: "Lower operational cost is critical for commercial buildings. Our supermarket rooftop solar setup has given us huge savings. The investment has already paid itself back in just 3 years.",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      role: "Villa Owner",
      location: "Korutla PIN 505326",
      text: "Very professional installation team. Neat wiring and heavy structural alignment. The panels look premium and are producing optimal power. High recommendation for anyone switching to solar in Telangana.",
      rating: 5,
    },
    {
      name: "P. Radhika",
      role: "School Administrator",
      location: "Jagityal District",
      text: "We went solar with Rudra Solar for our school building. Excellent power backup and savings. The team educated us on maintenance, though their free service support handles all regular cleaning.",
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Hear from our residential, commercial, and industrial solar clients across Telangana who have experienced massive savings and reliable power.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-solar-blue/5 group-hover:text-solar-orange/10 transition-colors" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xs text-slate-600 leading-relaxed italic mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-slate-200/60 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 font-heading">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mt-0.5">
                    {t.role}
                  </span>
                </div>
                <span className="text-[10px] bg-solar-blue/5 text-solar-blue font-bold px-2 py-1 rounded-md">
                  {t.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
