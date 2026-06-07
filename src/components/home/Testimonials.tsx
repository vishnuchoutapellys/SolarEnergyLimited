"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ramesh Goud",
    role: "Home Owner",
    location: "Korutla, Jagityal",
    text: "Switching to RudraaSolar is the best decision I've made. My monthly electricity bill dropped from ₹6,500 to just ₹450! The installation was done in 3 days, and they took care of all the subsidy paperwork.",
    rating: 5,
  },
  {
    name: "Srinivas Reddy",
    role: "Factory Manager",
    location: "Karimnagar",
    text: "We installed a 50kW solar system for our rice mill. The system performance is excellent. We are saving over ₹50,000 every month. The team is professional, and the 5-year service support gives us peace of mind.",
    rating: 5,
  },
  {
    name: "Anitha Rao",
    role: "Residential Client",
    location: "Jagityal Town",
    text: "Excellent service and support by RudraaSolar! The bank loan process was smooth. They helped us set up the EMI, and the panels are performing exceptionally well even during high heat.",
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
    text: "We went solar with RudraaSolar for our school building. Excellent power backup and savings. The team educated us on maintenance, though their free service support handles all regular cleaning.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Client Reviews
          </span>
          <h2
            className="font-extrabold text-solar-blue font-heading tracking-tight mt-3 sm:mt-4 text-balance"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed font-medium" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Hear from our residential, commercial, and industrial solar clients across Telangana.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-solar-blue/5 group-hover:text-solar-orange/10 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 leading-relaxed italic mb-4 relative z-10" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-slate-200/60 pt-3 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-extrabold text-slate-900 font-heading leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                    {t.name}
                  </h4>
                  <span className="text-slate-500 font-bold uppercase tracking-wider block" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)" }}>
                    {t.role}
                  </span>
                </div>
                <span className="bg-solar-blue/5 text-solar-blue font-bold px-2 py-1 rounded-md shrink-0 text-right" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)" }}>
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
