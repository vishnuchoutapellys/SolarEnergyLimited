"use client";

import React, { useState } from "react";
import { Play, X, Video } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const educationalVideos = [
    {
      title: "How Solar Panels Work",
      description: "Learn the science behind photovoltaic cells and how sunlight is converted into usable electricity for your property.",
      thumbnail: "/images/hero_background.png",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Open source sample video
    },
    {
      title: "Benefits of Solar Energy",
      description: "A comprehensive look at the financial, ecological, and economic advantages of adopting clean solar energy.",
      thumbnail: "/images/customer2.jpg",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "How Solar Reduces Electricity Bills",
      description: "Step-by-step breakdown of net metering and how on-grid solar offset reduces your monthly utility tariff.",
      thumbnail: "/images/commercial_solar.png",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Why Families Are Switching to Solar",
      description: "Real household reviews on operational ease, long-term savings, and high reliability of rooftop panels.",
      thumbnail: "/images/industrial_solar.png",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-orange font-bold text-xs uppercase tracking-widest bg-solar-orange/10 px-3.5 py-1.5 rounded-full">
            Solar Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-solar-blue font-heading tracking-tight mt-4">
            Learn About Solar Energy
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-medium">
            Explore our educational resources and videos to understand how solar power operates, saves you money, and powers a sustainable future.
          </p>
        </div>

        {/* Video Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {educationalVideos.map((video, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail with overlay */}
              <div 
                onClick={() => setActiveVideo({ title: video.title, url: video.videoUrl })}
                className="relative h-44 w-full bg-slate-200 cursor-pointer overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-solar-orange text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 relative">
                    <span className="absolute inset-0 rounded-full bg-solar-orange opacity-75 animate-ping"></span>
                    <Play className="w-5 h-5 fill-current ml-0.5 relative z-10" />
                  </div>
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 mb-2 font-heading leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {video.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo({ title: video.title, url: video.videoUrl })}
                  className="text-left text-xs font-bold text-solar-blue hover:text-solar-orange transition-colors flex items-center gap-1.5 mt-4 group/btn"
                >
                  <Video className="w-4 h-4 text-solar-orange" />
                  Watch Video
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Modal Header */}
            <div className="p-4 flex items-center justify-between text-white border-b border-slate-800">
              <h3 className="font-bold text-sm font-heading">{activeVideo.title}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-white/95 transition-all cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Video embed */}
            <div className="relative aspect-video w-full bg-black">
              <video 
                src={activeVideo.url} 
                controls 
                autoPlay 
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
