import React from "react";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import SolarCalculator from "@/components/home/SolarCalculator";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/VideoSection";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Benefits />
      <SolarCalculator />
      <Testimonials />
      <VideoSection />
      <Gallery />
      <FAQ />
      <CTABanner />
    </>
  );
}
