"use client";

import React, { useState, useEffect } from "react";
import { DollarSign, Zap, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SolarCalculator() {
  const [bill, setBill] = useState<number>(5000);
  const [propertyType, setPropertyType] = useState<string>("residential");
  
  const [results, setResults] = useState({
    systemSize: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    paybackPeriod: 0,
    subsidy: 0,
  });

  useEffect(() => {
    // Formulas based on average Telangana solar parameters
    let tariff = 7.5; // Residential average rate
    if (propertyType === "commercial") tariff = 10.0;
    if (propertyType === "industrial") tariff = 8.5;

    // 1 kW produces ~120 units (kWh) per month in Telangana
    const monthlyUnits = bill / tariff;
    let systemSize = Math.ceil((monthlyUnits / 120) * 2) / 2; // Round to nearest 0.5 kW
    if (systemSize < 1) systemSize = 1;
    if (systemSize > 100) systemSize = 100; // Cap default calculator at 100 kW

    const monthlySavings = Math.round(systemSize * 120 * tariff);
    const yearlySavings = monthlySavings * 12;

    // Price estimates (approximate market rates in Telangana)
    const costPerKw = 65000;
    const totalCost = systemSize * costPerKw;

    // Subsidy estimates (PM Surya Ghar: Muft Bijli Yojana)
    let subsidy = 0;
    if (propertyType === "residential") {
      if (systemSize >= 3) {
        subsidy = 78000;
      } else if (systemSize === 2) {
        subsidy = 60000;
      } else if (systemSize === 1) {
        subsidy = 30000;
      } else {
        subsidy = Math.round(systemSize * 30000);
      }
    }

    const netCost = totalCost - subsidy;
    const paybackPeriod = Math.max(2.5, Math.round((netCost / yearlySavings) * 10) / 10);

    setResults({
      systemSize,
      monthlySavings,
      yearlySavings,
      paybackPeriod,
      subsidy,
    });
  }, [bill, propertyType]);

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Savings Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Interactive Solar Calculator
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Estimate your required solar system capacity, monthly savings, and payback period instantly. Slide to select your current bill.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Box */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-lg lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Property Type Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-800 font-heading mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "residential", name: "Home" },
                  { id: "commercial", name: "Commercial" },
                  { id: "industrial", name: "Industrial" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id)}
                    className={`py-3 px-4 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      propertyType === type.id
                        ? "bg-solar-blue border-solar-blue text-white shadow-md shadow-blue-500/10"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Bill Input Range */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800 font-heading">
                  2. Monthly Electricity Bill
                </label>
                <span className="text-lg font-extrabold text-solar-orange font-heading">
                  ₹{bill.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-orange"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-2">
                <span>₹1,000</span>
                <span>₹25,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Informational Hint */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-[11px] leading-relaxed text-slate-500 font-medium">
              {propertyType === "residential" ? (
                <p>
                  💡 <strong>PM Surya Ghar Scheme:</strong> You are eligible for a direct Central Government subsidy of up to <strong>₹78,000</strong> for installations up to 3kW.
                </p>
              ) : (
                <p>
                  💡 <strong>Tax Benefits:</strong> Commercial & industrial installations can claim a <strong>40% accelerated depreciation</strong> in the first year to lower income tax.
                </p>
              )}
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-gradient-to-br from-solar-blue to-solar-blue-light text-white rounded-2xl p-8 md:p-10 shadow-xl lg:col-span-7 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-solar-orange/15 rounded-full blur-2xl" />
            <div className="absolute top-10 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold font-heading mb-8">Estimated Solar Blueprint</h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* System Size */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-solar-orange">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold font-heading text-white">
                      {results.systemSize} kW
                    </span>
                    <span className="text-xs text-blue-200 font-medium">Recommended System Size</span>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-solar-orange">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold font-heading text-white">
                      ₹{results.monthlySavings.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-blue-200 font-medium">Estimated Monthly Savings</span>
                  </div>
                </div>

                {/* Yearly Savings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-solar-orange">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold font-heading text-white">
                      ₹{results.yearlySavings.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-blue-200 font-medium">Estimated Yearly Savings</span>
                  </div>
                </div>

                {/* Payback Period */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-solar-orange">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold font-heading text-white">
                      {results.paybackPeriod} Years
                    </span>
                    <span className="text-xs text-blue-200 font-medium">ROI Payback Period</span>
                  </div>
                </div>

              </div>

              {/* Subsidy Highlight for Home Users */}
              {propertyType === "residential" && results.subsidy > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-blue-200 font-semibold">Government Subsidy Applied:</span>
                  <span className="text-base font-bold bg-solar-orange px-3 py-1 rounded-full">
                    - ₹{results.subsidy.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
            </div>

            {/* Action CTA */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-blue-100 max-w-xs text-center sm:text-left leading-relaxed">
                * Estimations are calculated based on optimal roof alignment. Connect with our engineer for an audit.
              </span>
              <Link
                href={`/contact?bill=${bill}&size=${results.systemSize}&type=${propertyType}`}
                className="bg-solar-orange hover:bg-solar-orange-dark text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:scale-105 active:scale-98 transition-all shrink-0 text-center cursor-pointer shadow-lg"
              >
                Claim This Quote
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
