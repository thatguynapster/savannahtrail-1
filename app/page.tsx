'use client'

import TestimonialsSection from "@/components/testimonials-section";
import DestinationSection from "@/components/destination-section";
import CategoriesSection from "@/components/categories-section";
import ServicesSection from "@/components/services-section";
import PackagesSection from "@/components/packages-section";
import BookingSection from "@/components/booking-section";
import ToursSection from "@/components/tour-section";
import HeroSection from "@/components/hero-section";
import Brands from "@/components/brands";

export default function Home() {


  return (
    <>
      <HeroSection />

      {/* <Brands /> */}

      <ServicesSection />

      <DestinationSection />

      <BookingSection />

      <ToursSection />

      <CategoriesSection />

      <PackagesSection />

      <TestimonialsSection />

    </>
  );
}
