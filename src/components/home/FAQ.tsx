"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much can I save with solar?",
      answer: "Most residential users save between 80% to 90% on their monthly electricity bills. The exact savings depend on your system size, roof orientation, sunlight availability, and monthly consumption. With central subsidies up to ₹78,000, solar has become highly cost-effective.",
    },
    {
      question: "How long do solar panels last?",
      answer: "Premium tier-1 solar panels are built to last over 25 to 30 years. We offer a 25-year manufacturer linear performance warranty, which guarantees that the panels will continue to produce at least 80% to 85% of their original capacity even after 25 years.",
    },
    {
      question: "What maintenance is required?",
      answer: "Solar systems require very minimal maintenance. The primary requirement is regular cleaning (washing panels with water to remove dust/bird droppings) every 1-2 weeks to ensure maximum sunlight absorption. We provide 5 years of free service support, which includes periodic system health checks and maintenance support.",
    },
    {
      question: "Is financing available for solar installation?",
      answer: "Yes, we assist our customers in securing convenient solar bank loans and zero-cost EMI options. This allows you to pay for your solar setup in manageable monthly installments, often offset by the money you save on your electricity bills.",
    },
    {
      question: "What warranties are provided by Rudra Solar?",
      answer: "We offer comprehensive industry-leading warranties: a 25-Year Manufacturer Warranty on solar panels, a 10-Year Comprehensive Warranty on our smart solar grid-tied inverters, and 5 Years of Free Service and On-Site Support after installation.",
    },
    {
      question: "How long does the installation process take?",
      answer: "Once the site assessment and designs are finalized, the physical installation of the panels and inverters on a residential rooftop takes only 2 to 3 days. Grid integration and net metering approvals from the local electricity board typically take another 1 to 2 weeks.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Find answers to frequently asked questions about panel installation, maintenance, cost, financing, and savings.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-solar-orange shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-solar-orange bg-solar-orange/10" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
