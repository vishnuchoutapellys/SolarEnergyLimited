"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/919014249898?text=Hi!%20I'm%20interested%20in%20a%20solar%20installation%20for%20my%20property.%20Please%20provide%20more%20information.";

  // Safe Google Maps Embed URL for Korutla location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.207901768407!2d78.7107775!3d18.8228399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ccd144d188339ab%3A0xc6cb1c4995c73bb1!2sKorutla%2C%20Telangana%20505326!5e0!3m2!1sen!2sin!4v1780645000000!5m2!1sen!2sin";

  return (
    <div className="bg-white">
      {/* Banner Header */}
      <section className="relative pt-32 pb-20 bg-solar-blue-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_background.png')] opacity-15 scale-105" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 animate-fade-in-up">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/20 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-glow">
            Contact Rudra Solar Energy
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about subsidies, EMI options, or panel layouts? Get in touch with our experts now.
          </p>
        </div>
      </section>

      {/* Main Info Block */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-solar-blue font-heading tracking-tight">
                Our Office Location
              </h2>
              <p className="text-slate-500 text-xs mt-2 font-medium">
                Visit our office or call us directly. We are open Monday to Saturday, 9:00 AM to 6:00 PM.
              </p>
            </div>

            {/* Address Cards */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 mt-0.5 border border-solar-orange/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-heading">Address</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                    D.No. 4-1-558/9, Korutla, PIN 505326,<br />
                    Jagityal District, Telangana, India
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 mt-0.5 border border-solar-orange/10">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-heading">Phone Numbers</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                    <a href="tel:+919014249898" className="hover:text-solar-orange transition-colors">
                      +91 9014249898
                    </a> (Direct Call / WhatsApp)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 mt-0.5 border border-solar-orange/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-heading">Email Address</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                    <a href="mailto:rudrasolarenergypvtlimited@gmail.com" className="hover:text-solar-orange transition-colors break-all">
                      rudrasolarenergypvtlimited@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-solar-orange/10 flex items-center justify-center text-solar-orange shrink-0 mt-0.5 border border-solar-orange/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-heading">Office Hours</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Connect */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-slate-900 font-heading flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-500 fill-current" />
                  Chat on WhatsApp
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 font-medium">
                  Connect instantly to clear queries or schedule site survey.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
              >
                Send Message
              </a>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-[400px] w-full bg-slate-100 relative overflow-hidden border-t border-slate-100">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rudra Solar Energy Location Map"
        />
      </section>
    </div>
  );
}
