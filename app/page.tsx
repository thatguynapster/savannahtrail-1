'use client'

import DestinationSection from "@/components/destination-section";
import ServicesSection from "@/components/services-section";
import BookingSection from "@/components/booking-section";
import HeroSection from "@/components/hero-section";
import Brands from "@/components/brands";
import ToursSection from "@/components/tour-section";
import CategoriesSection from "@/components/categories-section";
import PackagesSection from "@/components/packages-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {


  return (
    <>
      <HeroSection />

      <Brands />

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
