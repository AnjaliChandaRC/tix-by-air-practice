"use client";
import BackToTop from "@/components/common/BackToTop";
import CommonModal from "@/components/common/commonModal/CommonModal";
import Faqs from "@/components/landing/Faqs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MovingBanner from "@/components/landing/MovingBanner";
import Services from "@/components/landing/Services";
import { useState } from "react";
export default function Home() {
  const [currentModal, setCurrentModal] = useState(null);
  return (
    <div className="overflow-hidden">
      <BackToTop />
      <CommonModal
        currentModal={currentModal}
        setCurrentModal={setCurrentModal}
      />
      <Header setCurrentModal={setCurrentModal} />
      <Hero setCurrentModal={setCurrentModal} />
      <MovingBanner />
      <Services />
      <Faqs />
      <Footer />
    </div>
  );
}
