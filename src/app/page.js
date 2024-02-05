import CustomButton from "@/componets/common/button/CustomButton";
import Header from "@/componets/landing/Header";
import Hero from "@/componets/landing/Hero";
import MovingBanner from "@/componets/landing/MovingBanner";
import Image from "next/image"


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <div>
        <MovingBanner />
      </div>
    </>
  );
}
