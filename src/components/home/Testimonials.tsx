"use client";

import React from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "GADDE SATHYANARAYANA",
    role: "Home Owner",
    location: "5-52 SRI NAGAR COLONY, DICHPALLY,505326",
    text: "Switching to RudraaSolar was one of the best decisions for my home. The team completed the installation in just 3 days and handled all the subsidy paperwork without any hassle. Everything was explained clearly, the work was neat and professional, and the entire process was smooth from start to finish. Highly recommended for anyone planning a 10kW residential solar installation.",
    rating: 5,
  },
  {
    name: "CH VINOD KUMAR",
    role: "Home Owner",
    location: "4-1-50/2 MUTHYALA WADA, KORUTLA,505326",
    text: "We recently installed a 5kW solar system for our home, and the experience has been excellent. The team was professional, punctual, and guided us through the entire process. The installation was smooth, and the system has been performing really well. The added service support gives us extra peace of mind. Highly satisfied with the overall experience.",
    rating: 5,
  },
  {
    name: "BATTU SUNIL KUMAR",
    role: "Home Owner",
    location: "1-2-236 PRAKASHAM ROAD KORUTLA,505326",
    text: "We installed a 5kW solar system with RudraaSolar, and the entire experience was smooth from start to finish. The team was very supportive throughout the bank loan and EMI process, making everything easy to understand. The installation was done professionally, and the system has been performing reliably even during the hottest days. Great service and excellent customer support!",
    rating: 5,
  },
  {
    name: "GANGISETTY KRISHNA",
    role: "Home Owner",
    location: "3-1-9 KALWAGADDA KORUTLA, 505326",
    text: "Installed a 5kW solar system with RudraaSolar and couldn't be happier. Smooth installation, great support, and excellent performance. Highly recommended!",
    rating: 5,
  },
  {
    name: "JANGILI GANGADHAR",
    role: "Home Owner",
    location: "7-5-1/A/E VIDYA NAGER JAGITAL, 505327",
    text: "We recently installed a 5kw system through RudraaSolar. The entire process was very smooth and transparent. The team handled all the technical explanations, subsidies, and wiring work professionally. The system has been running perfectly for the last 6 months with zero maintenance issues. Very satisfied with their service and quality work!",
    rating: 4,
  },
  {
    name: "PIDUGU GUNAKAR REDDY",
    role: "Home Owner",
    location: "2-6-133/1 SRINIVASA ROAD KORUTLA, 505326",
    text: "We went solar with RudraaSolar for our home. Excellent power backup and savings. The team educated us on maintenance, though their free service support handles all regular cleaning.",
    rating: 4,
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
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-solar-blue/5 rounded-full filter blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-solar-orange/5 rounded-full filter blur-3xl -z-10 animate-pulse pointer-events-none" style={{ animationDelay: "3s" }} />

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-white/50 to-slate-50/30 backdrop-blur-md border border-slate-300 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-md hover:from-slate-200 hover:to-slate-100/80 hover:border-slate-400 hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between h-full"
            >
              <div>
                {/* Top Row: Stars & Quote */}
                <div className="flex justify-between items-center mb-5">
                  {/* Stars (Always 5 total) */}
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < t.rating ? "text-amber-400 fill-current" : "text-slate-300"
                          }`}
                      />
                    ))}
                  </div>
                  {/* Quote Mark */}
                  <Quote className="w-8 h-8 text-solar-blue/5 group-hover:text-solar-orange/10 transition-colors shrink-0" />
                </div>

                {/* Review Text */}
                <p className="text-slate-600 leading-relaxed italic mb-6 relative z-10" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-slate-200/60 pt-4 flex flex-col gap-2 mt-auto">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solar-blue to-solar-blue/80 flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-sm">
                    {t.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-solar-blue font-heading leading-tight text-sm truncate">
                      {t.name}
                    </h4>
                    <span className="text-solar-orange font-bold uppercase tracking-wider block text-[10px] mt-0.5">
                      {t.role}
                    </span>
                  </div>
                </div>
                {t.location && (
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs mt-1 pl-1">
                    <MapPin className="w-3.5 h-3.5 text-solar-orange shrink-0" />
                    <span className="truncate" title={t.location}>
                      {t.location}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
