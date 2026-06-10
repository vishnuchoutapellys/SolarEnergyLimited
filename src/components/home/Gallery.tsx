"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryProps {
  showHeader?: boolean;
}

export default function Gallery({ showHeader = true }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState("residential");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "8kW Residential Solar Panel",
      location: "Korutla, Jagityal",
      category: "residential",
      image: "/images/customer13_8kw.jpg",
    },
    {
      id: 2,
      title: "50kW Warehouse Installation",
      location: "Nizamabad Road",
      category: "commercial",
      image: "/images/commercial_solar.png",
    },
    {
      id: 3,
      title: "150kW Factory Power Grid",
      location: "Karimnagar Industrial Area",
      category: "industrial",
      image: "/images/industrial_solar.png",
    },
    {
      id: 4,
      title: "3kW Residential Solar Panel",
      location: "Jagityal Town Center",
      category: "residential",
      image: "/images/customer2.jpg",
    },
    {
      id: 5,
      title: "20kW Hospital Solar Grid",
      location: "Korutla",
      category: "commercial",
      image: "/images/consultation_solar.png",
    },
    {
      id: 6,
      title: "300kW Large Factory Farm",
      location: "Telangana Highway Zone",
      category: "industrial",
      image: "/images/industrial_solar.png",
    },
    {
      id: 7,
      title: "3kW Residential Solar Panel",
      location: "Jagityal Outskirts",
      category: "residential",
      image: "/images/customer3.jpg",
    },
    {
      id: 8,
      title: "15kW Showroom Rooftop",
      location: "Main Market Road",
      category: "commercial",
      image: "/images/maintenance_solar.png",
    },
    {
      id: 9,
      title: "3kW Residential Solar Panel",
      location: "Metpally, Jagityal",
      category: "residential",
      image: "/images/customer4.jpg",
    },
    {
      id: 10,
      title: "3kW Residential Solar Panel",
      location: "Dharmapuri, Jagityal",
      category: "residential",
      image: "/images/customer5_3kw.jpg",
    },
    {
      id: 11,
      title: "5kW Residential Solar Panel",
      location: "Raikal, Jagityal",
      category: "residential",
      image: "/images/customer6_5kw.jpg",
    },
    {
      id: 12,
      title: "5kW Residential Solar Panel",
      location: "Gollapalli, Jagityal",
      category: "residential",
      image: "/images/customer7_5kw.jpg",
    },
    {
      id: 13,
      title: "5kW Residential Solar Panel",
      location: "Mallial, Jagityal",
      category: "residential",
      image: "/images/customer8_5kw.jpg",
    },
    {
      id: 14,
      title: "5kW Residential Solar Panel",
      location: "Vemulawada, Rajanna Sircilla",
      category: "residential",
      image: "/images/customer9_5kw.jpg",
    },
    {
      id: 15,
      title: "5kW Residential Solar Panel",
      location: "Sircilla Town",
      category: "residential",
      image: "/images/customer10_5kw.jpg",
    },
    {
      id: 16,
      title: "5kW Residential Solar Panel",
      location: "Jagtial Road",
      category: "residential",
      image: "/images/customer11_5kw.jpg",
    },
    {
      id: 17,
      title: "3kW Residential Solar Panel",
      location: "Jagtial Road",
      category: "residential",
      image: "/images/customer1.jpg",
    },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
              Our Happy Customer's
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
              Recent Project Gallery
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-medium">
              Explore our real-world rooftop solar installations across Telangana, showcasing clean structural builds and high quality standards.
            </p>
          </div>
        )}

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`py-2 px-5 text-xs font-bold rounded-full border transition-all cursor-pointer ${activeFilter === filter.id
                ? "bg-solar-blue border-solar-blue text-white shadow-md shadow-blue-500/10"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveImage(item.image)}
                className="group relative h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-0 lg:translate-y-3 lg:group-hover:translate-y-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] bg-solar-orange text-white font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider block w-fit mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm font-heading leading-tight">{item.title}</h3>
                  <p className="text-[10px] text-slate-300 font-medium mt-0.5">{item.location}</p>
                </div>

                {/* Hover indicator icon */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <Plus className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            onClick={() => setActiveImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={activeImage}
              alt="Project View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
