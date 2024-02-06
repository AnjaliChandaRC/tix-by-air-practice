import Header from "@/componets/landing/Header";
import Hero from "@/componets/landing/Hero";
import MovingBanner from "@/componets/landing/MovingBanner";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <MovingBanner />
    </div>
  );
}
