"use client";

import React, { useState, useEffect } from "react";
import { X, Phone, User, MapPin, Send } from "lucide-react";
import { event } from "@/lib/analytics";

const WHATSAPP_NUMBER = "919666551104";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds if not dismissed previously in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenSolarPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenSolarPopup", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    if (!formData.city.trim()) newErrors.city = "City/Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    return [
      "🌞 *Free Solar Consultation Request*",
      "─────────────────────────",
      `👤 *Full Name:* ${formData.name}`,
      `📞 *Mobile Number:* ${formData.phone}`,
      `📍 *City / Town:* ${formData.city}`,
      "─────────────────────────",
      "I'm interested in a free solar consultation. Please get in touch with me. Thank you!",
    ].join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // GA Event Trigger
    event({
      action: "submit_lead_popup",
      category: "Lead Generation",
      label: `Popup Lead: ${formData.name} - ${formData.phone}`,
    });

    // Small delay for UX feedback
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Build WhatsApp URL with pre-filled message
    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset and close popup
    setFormData({ name: "", phone: "", city: "" });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-scale-in">

        {/* Header */}
        <div className="bg-gradient-to-r from-solar-blue to-solar-blue-light text-white p-5 sm:p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close popup"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block bg-solar-orange font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Limited Time Offer
          </span>
          <h3 id="popup-title" className="text-lg sm:text-xl font-bold font-heading">
            Get Free Solar Consultation
          </h3>
          <p className="text-sm text-blue-100 mt-1 leading-relaxed">
            Reduce electricity bills by up to 90%. Ask about zero-cost EMI bank loans!
          </p>
        </div>

        {/* Form Area */}
        <div className="p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${errors.name ? "border-red-500 bg-red-50" : "border-slate-200"
                    }`}
                />
              </div>
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${errors.phone ? "border-red-500 bg-red-50" : "border-slate-200"
                    }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                City / Town *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <MapPin className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Please type your place"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${errors.city ? "border-red-500 bg-red-50" : "border-slate-200"
                    }`}
                />
              </div>
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
            </div>

            {/* WhatsApp hint */}
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <p className="text-xs text-emerald-700 font-medium">
                Submits via WhatsApp — just press <strong>Send</strong>!
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-solar-orange to-solar-orange-dark text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-orange-500/20 focus:ring-4 focus:ring-orange-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  Request Free Consultation
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-xs text-slate-400 hover:text-slate-600 transition-colors py-1"
            >
              No thanks, maybe later
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
