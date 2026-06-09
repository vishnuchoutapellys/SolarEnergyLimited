"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solar-blue-dark text-slate-300 pt-10 md:pt-16 pb-6 md:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top footer details  are added*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Company branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-lg bg-white p-1 overflow-hidden">
                <Image
                  src="/Logo1.png"
                  alt="Rudraa Solar Power Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-base font-extrabold font-heading leading-tight tracking-tight">
                  RUDRAA SOLAR POWER
                </span>
                <span className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase">
                  Private Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Powering homes, businesses, and industries across Telangana with premium solar systems, professional installation, and 5 years of free service support.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Solar Solutions", path: "/services" },
                { name: "Project Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm hover:text-solar-orange transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-solar-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 font-heading">
              Solar Solutions
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Industrial Solar",
                "Rooftop Installations",
                "Solar Maintenance",
                "Consultation & Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-solar-orange transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-solar-orange" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-solar-orange shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  D.No. 4-1-558/9, Korutla, PIN 505326, Jagityal District, Telangana, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919014249898"
                  className="flex items-center gap-3 text-sm hover:text-solar-orange transition-colors"
                >
                  <Phone className="w-5 h-5 text-solar-orange shrink-0 fill-current" />
                  <span>+91 9014249898</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rudraasolarpowerpvtltd@gmail.com"
                  className="flex items-start gap-3 text-sm hover:text-solar-orange transition-colors"
                >
                  <Mail className="w-5 h-5 text-solar-orange shrink-0 mt-0.5" />
                  <span className="break-all">rudraasolarpowerpvtltd@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Rudraa solar power private limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Warranties
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Quality Commitment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
