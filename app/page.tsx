"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import HowItWorks from "@/components/HowItWorks";
import TrustBadges from "@/components/TrustBadges";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/services";

export default function Home() {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);

  const handleSelect = (id: string) => {
    setServiceId(id);
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services onSelect={handleSelect} />
      <HowItWorks />
      <BookingForm serviceId={serviceId} />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <Footer />
    </main>
  );
}
