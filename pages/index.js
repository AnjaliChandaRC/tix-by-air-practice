import Hero from "@/components/Hero";
import Header from "@/components/common/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
