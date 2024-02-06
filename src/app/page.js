import Footer from "@/componets/landing/Footer";
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
      <Footer />
    </div>
  );
}
