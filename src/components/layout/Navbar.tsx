"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Solar Solutions", path: "/services" },
    { name: "Project Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 text-slate-800"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="flex items-center bg-white/90 p-1 sm:p-1.5 rounded-lg shadow-inner transition-transform group-hover:scale-105 shrink-0">
              <img
                src="/Logo1.png"
                alt="Rudra Solar Energy Logo"
                className="h-9 sm:h-[48px] md:h-[55px] lg:h-[60px] w-auto object-contain transition-all duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-[11px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-extrabold tracking-tight font-heading leading-tight transition-colors duration-300 whitespace-nowrap ${
                isScrolled ? "text-solar-blue" : "text-white"
              }`}>
                RUDRA SOLAR ENERGY
              </span>
              <span className={`text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${
                isScrolled ? "text-solar-orange" : "text-solar-orange-light"
              }`}>
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-xs lg:text-sm font-semibold transition-all duration-300 hover:text-solar-orange relative py-1 shrink-0 ${
                    isActive
                      ? "text-solar-orange"
                      : isScrolled
                      ? "text-slate-700 hover:text-solar-orange"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-solar-orange rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop / Tablet) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Phone (Shown as icon on md, and with text on lg+) */}
            <a
              href="tel:+919014249898"
              className={`flex items-center gap-2 text-xs lg:text-sm font-bold transition-all duration-300 ${
                isScrolled ? "text-solar-blue hover:text-solar-blue-light" : "text-white hover:text-slate-200"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-solar-orange text-solar-orange" />
              </div>
              <span className="hidden xl:inline">+91 9014249898</span>
              <span className="hidden lg:inline xl:hidden text-xs">+91 9014249898</span>
            </a>

            {/* Quick Quote Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-solar-orange to-solar-orange-dark text-white font-extrabold text-[10px] lg:text-xs uppercase px-4 lg:px-5 py-2 lg:py-2.5 rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-98 transition-all tracking-wider shrink-0"
            >
              GET FREE QUOTE
            </Link>
          </div>

          {/* Mobile Actions (Phone & Hamburger) */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href="tel:+919014249898"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-solar-orange/10 text-solar-orange hover:scale-105 active:scale-95 transition-transform"
              aria-label="Call Rudra Solar"
            >
              <Phone className="w-4 h-4 fill-solar-orange text-solar-orange" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-orange transition-all ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Menu Overlay) */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm h-full z-[70] bg-white shadow-2xl transition-transform duration-300 ease-out transform md:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img
                  src="/Logo1.png"
                  alt="Rudra Solar Logo"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-solar-blue leading-none">RUDRA SOLAR ENERGY</span>
                  <span className="text-[7px] font-bold text-solar-orange uppercase tracking-wider mt-0.5">PRIVATE LIMITED</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links inside drawer */}
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-bold py-2.5 px-3 rounded-lg flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-solar-orange/10 text-solar-orange"
                        : "text-slate-800 hover:bg-slate-50 animate-fade-in"
                    }`}
                  >
                    {link.name}
                    <span className={isActive ? "text-solar-orange" : "text-slate-400"}>→</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action CTAs at bottom of drawer */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <a
              href="tel:+919014249898"
              className="w-full flex items-center justify-center gap-2.5 border border-solar-blue text-solar-blue font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-all text-sm"
            >
              <Phone className="w-4 h-4 fill-solar-blue text-solar-blue" />
              Call +91 9014249898
            </a>
            
            <a
              href="https://wa.me/919014249898?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
            
            <Link
              href="/contact"
              className="w-full flex items-center justify-center bg-solar-orange hover:bg-solar-orange-dark text-white font-bold py-2.5 rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              GET FREE QUOTE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
