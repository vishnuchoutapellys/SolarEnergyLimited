"use client";

import React, { useState } from "react";
import { User, Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { event } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.location.trim()) {
      newErrors.location = "City / District is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // GA Event Trigger
      event({
        action: "submit_contact_form",
        category: "Lead Generation",
        label: `Contact: ${formData.name} - ${formData.phone}`,
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-solar-blue to-solar-blue-light"></div>
      
      <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Request a Free Callback</h3>
      <p className="text-sm text-slate-600 mb-6">
        Submit details below, and our solar panel installation experts will get in touch with you shortly.
      </p>

      {isSuccess ? (
        <div className="text-center py-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 font-heading mb-2">Inquiry Submitted!</h4>
          <p className="text-slate-600 max-w-sm mx-auto">
            Thank you for reaching out to Rudra Solar Energy. We have received your request and will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-sm font-semibold text-solar-blue hover:text-solar-blue-light transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="First and last name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                  errors.name ? "border-red-500 bg-red-50/10" : "border-slate-200"
                }`}
              />
            </div>
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Mobile & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address (Optional)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                    errors.email ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Location / District */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Location (City/Town/District) *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <MapPin className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="e.g. Korutla, Jagityal, Telangana"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm ${
                  errors.location ? "border-red-500 bg-red-50/10" : "border-slate-200"
                }`}
              />
            </div>
            {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Message / Property Details (Optional)
            </label>
            <div className="relative">
              <span className="absolute top-3 left-3 text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </span>
              <textarea
                rows={4}
                placeholder="Mention rooftop size, current bill amount, or specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-solar-orange focus:outline-none transition-all text-sm resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-solar-orange to-solar-orange-dark text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending Request...
              </>
            ) : (
              <>
                Submit Consultation Request
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
