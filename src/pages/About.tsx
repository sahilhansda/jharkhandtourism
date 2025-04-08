import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MissionSection from "../components/MissionSection";
import aboutData from "../data/about.json";

export default function AboutPage() {
  const { section } = useParams();
  const data = aboutData[section as keyof typeof aboutData];

  if (!data) {
    return (
      <div className="bg-[#fffdf9] w-full text-black min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold text-peach-600 mb-4">Section Not Found</h1>
          <p className="text-gray-700 text-lg">Please select a valid topic from the About section.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#fffdf9] w-auto text-black min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-1 mx-auto p-6">
        <h1 className="text-4xl font-bold text-peach-600 mb-6 text-center">{data.title}</h1>
        <p className="text-gray-700 text-lg mb-8 text-center">{data.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img src="https://images.pexels.com/photos/14426756/pexels-photo-14426756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-peach-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <MissionSection />
      <Footer />
    </div>
  );
}
