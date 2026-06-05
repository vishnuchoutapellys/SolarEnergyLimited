"use client";

import React, { useState, useEffect } from "react";
import { X, Phone, User, MapPin } from "lucide-react";
import { event } from "@/lib/analytics";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const closePopup = () => {
    setIsOpen(false);
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // GA Event Trigger
      event({
        action: "submit_lead_popup",
        category: "Lead Generation",
        label: `Popup Lead: ${formData.name} - ${formData.phone}`,
      });

      setIsSuccess(true);
      setFormData({ name: "", phone: "", city: "" });
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header background with solar graphic */}
        <div className="bg-gradient-to-r from-solar-blue to-solar-blue-light text-white p-6 relative">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="inline-block bg-solar-orange font-semibold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Limited Time Offer
          </span>
          <h3 className="text-xl font-bold font-heading">Get Free Solar Consultation</h3>
          <p className="text-sm text-blue-100 mt-1">
            Reduce electricity bills by up to 90%. Ask about zero-cost EMI bank loans!
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Thank You!</h4>
              <p className="text-sm text-slate-600 mt-1">
                Our solar expert will call you shortly on the provided number.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                      errors.name ? "border-red-500 bg-red-50/10" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number
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
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                      errors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* City field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  City / Town
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g., Korutla, Jagityal"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                      errors.city ? "border-red-500 bg-red-50/10" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-solar-orange text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-solar-orange-dark focus:ring-4 focus:ring-orange-200 transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-500/10"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Request Free Callback"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
