import Faqs from "@/componets/landing/Faqs";
import Header from "@/componets/landing/Header";
import Hero from "@/componets/landing/Hero";
import MovingBanner from "@/componets/landing/MovingBanner";
import Services from "@/componets/landing/Services";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <MovingBanner />
      <Services />
      <Faqs />
    </div>
  );
}
