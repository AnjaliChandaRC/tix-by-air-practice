"use client";
import BackToTop from "@/componets/common/BackToTop";
import CommonModal from "@/componets/common/commonModal/CommonModal";
import Faqs from "@/componets/landing/Faqs";
import Footer from "@/componets/landing/Footer";
import Header from "@/componets/landing/Header";
import Hero from "@/componets/landing/Hero";
import MovingBanner from "@/componets/landing/MovingBanner";
import Services from "@/componets/landing/Services";
import { useState } from "react";
export default function Home() {
  const [currentModal, setCurrentModal] = useState(null);
  console.log("currentModalcurrentModal", currentModal);
  return (
    <div className="overflow-hidden">
      <BackToTop />
      <CommonModal
        currentModal={currentModal}
        setCurrentModal={setCurrentModal}
      />
      <Header setCurrentModal={setCurrentModal} />
      <Hero />
      <MovingBanner />
      <Services />
      <Faqs />
      <Footer />
    </div>
  );
}
