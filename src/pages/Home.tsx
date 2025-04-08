import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DistrictSelector from "../components/DistrictSelector";
import TourismTypes from "../components/TourismTypes";
import Helplines from "../components/Helplines";
import Footer from "../components/Footer";
import MissionSection from "../components/MissionSection"

export default function Home() {
  return (
    <div className="bg-[#fdf8f3] text-black font-sans">
      <Header />
      <Hero />
      <DistrictSelector />
      <TourismTypes />
      <Helplines />
      <MissionSection />
      <Footer />
    </div>
  );
}
