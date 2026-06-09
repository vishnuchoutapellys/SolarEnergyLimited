"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Residential Solar Solutions",
    description: "Slash your home electricity bills by up to 90%. Enjoy clean power with govt grid subsidies.",
    image: "/images/residential_solar.png",
    benefits: ["₹78,000 Govt Subsidy support", "Zero-Cost Bank Loan / EMI", "25-Year Panel Warranty"],
  },
  {
    title: "Commercial Solar Solutions",
    description: "Lower operational overheads, secure depreciation benefits, and transition to green energy.",
    image: "/images/commercial_solar.png",
    benefits: ["40% Accelerated Depreciation", "Substantial Tariff Reduction", "High ROI & Fast Payback"],
  },
  {
    title: "Industrial Solar Solutions",
    description: "Engineered high-capacity solar arrays to handle heavy machinery and lower costs.",
    image: "/images/industrial_solar.png",
    benefits: ["Heavy Load Durability", "End-to-End Grid Integration", "Massive Long-term Savings"],
  },
  {
    title: "Rooftop Solar Installations",
    description: "Turn idle roof space into an income-generating asset with custom rooftop solar arrays.",
    image: "/images/hero_background.png",
    benefits: ["Precision Engineering", "Waterproof & Wind-Resistant", "Optimal Panel Orientation"],
  },
  {
    title: "Solar Maintenance Services",
    description: "Keep your system operating at peak performance with cleanings, audits, and repairs.",
    image: "/images/maintenance_solar.png",
    benefits: ["5 Years Free Support included", "Routine Panel Cleaning", "Inverter Performance Audit"],
  },
  {
    title: "Solar Consultation & Design",
    description: "Get a comprehensive site assessment, 3D shadow analysis, and optimal capacity layout.",
    image: "/images/consultation_solar.png",
    benefits: ["3D Shadow Analysis protection", "Customized ROI Energy Report", "Optimal Capacity Configuration"],
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [delayTime, setDelayTime] = useState(2000); // Default auto-scroll interval (2s)

  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxIndex = servicesList.length - itemsPerView;

  // Helper to delay auto-scroll on manual interactions (hover, touch, clicks)
  const triggerInteractionDelay = () => {
    setDelayTime(6000); // Stay for 6s
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
    }
    delayTimeoutRef.current = setTimeout(() => {
      setDelayTime(2000); // Revert to 2s
    }, 6000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, delayTime);

    return () => clearInterval(timer);
  }, [delayTime, maxIndex]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    triggerInteractionDelay();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    triggerInteractionDelay();
  };

  // Hover handlers to pause/stay for 6 seconds
  const handleMouseEnter = () => {
    triggerInteractionDelay();
  };

  const handleMouseLeave = () => {
    setDelayTime(2000);
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
    }
  };

  // Touch Swipe Handlers for Mobile responsiveness
  const minSwipeDistance = 50;
  const handleTouchStart = (e: React.TouchEvent) => {
    triggerInteractionDelay();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Dots Calculation (Exactly 3 dots in the middle)
  const getActiveDot = () => {
    if (currentIndex < 2) return 0;
    if (currentIndex >= 2 && currentIndex < 4) return 1;
    return 2;
  };

  const handleDotClick = (dotIdx: number) => {
    if (dotIdx === 0) {
      setCurrentIndex(0);
    } else if (dotIdx === 1) {
      setCurrentIndex(Math.min(2, maxIndex));
    } else {
      setCurrentIndex(Math.min(4, maxIndex));
    }
    triggerInteractionDelay();
  };

  return (
    <section id="services" className="py-12 md:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Our Solutions
          </span>
          <h2
            className="font-extrabold text-solar-blue font-heading tracking-tight mt-3 sm:mt-4 text-balance"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Premium Solar Energy Services
          </h2>
          <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed font-medium" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Discover customized solar installation and support options tailored for every property type.
          </p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative px-2 md:px-12"
        >
          {/* Main Viewport */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                >
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="block relative h-[420px] rounded-3xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-slate-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/15 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10 select-none">
                      <h3 className="text-xl sm:text-2xl font-extrabold font-heading leading-tight tracking-tight mb-2 text-white">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4 line-clamp-2 max-w-sm">
                        {service.description}
                      </p>

                      <div className="w-full h-px bg-white/15 my-3" />

                      <ul className="space-y-1.5">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                            <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-slate-700 hover:bg-solar-blue hover:text-white active:scale-90 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-slate-700 hover:bg-solar-blue hover:text-white active:scale-90 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {[0, 1, 2].map((dotIdx) => {
            const isActive = getActiveDot() === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => handleDotClick(dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${isActive
                  ? "bg-solar-blue w-6"
                  : "bg-slate-300 hover:bg-slate-400 w-2"
                  }`}
                aria-label={`Go to slide page ${dotIdx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
