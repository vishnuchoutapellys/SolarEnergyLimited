"use client";

import React, { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

export default function StickyQuoteBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#calculator";
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ top: "77%" }}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-solar-orange hover:bg-solar-orange-dark text-white font-bold py-3 px-4 rounded-l-xl shadow-2xl flex flex-col items-center gap-1.5 transition-all duration-300 transform group ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } `}
      aria-label="Calculate Solar Savings"
    >
      <Calculator className="w-5 h-5 animate-bounce" />
      {/* <span className="[writing-mode:vertical-lr] text-xs uppercase tracking-wider">
        Solar Calculator
      </span> */}

      {/* Premium hover tooltip */}
      <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-950/95 text-white text-xs font-bold whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg select-none">
        Solar Calculator
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-950/95" />
      </span>
    </button>
  );
}
