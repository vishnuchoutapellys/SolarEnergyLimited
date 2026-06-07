"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much can I save with solar?",
    answer: "Most residential users save between 80% to 90% on their monthly electricity bills. The exact savings depend on your system size, roof orientation, sunlight availability, and monthly consumption. With central subsidies up to ₹78,000, solar has become highly cost-effective.",
  },
  {
    question: "How long do solar panels last?",
    answer: "Premium tier-1 solar panels are built to last over 25 to 30 years. We offer a 25-year manufacturer linear performance warranty, which guarantees that the panels will continue to produce at least 80–85% of their original capacity even after 25 years.",
  },
  {
    question: "What maintenance is required?",
    answer: "Solar systems require very minimal maintenance. The primary requirement is regular cleaning every 1–2 weeks to ensure maximum sunlight absorption. We provide 5 years of free service support, which includes periodic system health checks and maintenance.",
  },
  {
    question: "Is financing available for solar installation?",
    answer: "Yes, we assist our customers in securing convenient solar bank loans and zero-cost EMI options. This allows you to pay for your solar setup in manageable monthly installments, often offset by the money you save on electricity bills.",
  },
  {
    question: "What warranties are provided by RudraaSolar?",
    answer: "We offer comprehensive warranties: a 25-Year Manufacturer Warranty on solar panels, a 7-Year Comprehensive Warranty on smart solar grid-tied inverters, and 5 Years of Free Service and On-Site Support after installation.",
  },
  {
    question: "How long does the installation process take?",
    answer: "Once the site assessment and designs are finalized, the physical installation on a residential rooftop takes only 2–3 days. Grid integration and net metering approvals from the local electricity board typically take another 1–2 weeks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Common Inquiries
          </span>
          <h2
            className="font-extrabold text-solar-blue font-heading tracking-tight mt-3 sm:mt-4 text-balance"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed font-medium" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Find answers to common questions about installation, maintenance, cost, and financing.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-solar-orange cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-solar-orange shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-900 font-heading text-left" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-slate-500 transition-all duration-300 shrink-0 ml-3 ${
                      isOpen ? "rotate-180 text-solar-orange bg-solar-orange/10" : "bg-slate-50"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div
                        className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-50 font-medium"
                        style={{ fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)" }}
                      >
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
