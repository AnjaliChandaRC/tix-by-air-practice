import CommonModal from "@/componets/common/commonModal/CommonModal";
import Faqs from "@/componets/landing/Faqs";
import Footer from "@/componets/landing/Footer";
import Header from "@/componets/landing/Header";
import Hero from "@/componets/landing/Hero";
import MovingBanner from "@/componets/landing/MovingBanner";
import Services from "@/componets/landing/Services";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <CommonModal/>
      <Header />
      <Hero />
      <MovingBanner />
      <Services />
      <Faqs />
      <Footer />
    </div>
  );
}
