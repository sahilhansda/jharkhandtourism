import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const places = [
  {
    title: "Netarhat",
    description: "The Queen of Chotanagpur - known for its stunning sunsets and cool climate.",
    image: "/images/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
  },
  {
    title: "Betla National Park",
    description: "A dense forest full of wild animals, waterfalls, and scenic beauty.",
    image: "/images/Palamu.jpg",
  },
  {
    title: "Hundru Falls",
    description: "A mesmerizing waterfall and one of the highest in Jharkhand.",
    image: "/images/baghmunda-waterfall.jpg",
  },
];

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ExplorePage() {
  return (
    <section className="bg-peach-50 min-h-screen">
      <Helmet>
        <title>Explore | Jharkhand Tourism Guide</title>
        <meta name="description" content="Explore Jharkhand's beautiful districts, tourist places, helplines and travel info in one place." />
        <meta name="keywords" content={`Jharkhand, tourism, travel`} />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Jharkhand Tourism Guide | Home" />
        <meta property="og:description" content="Explore Jharkhand's beautiful districts, tourist places, helplines and travel info in one place." />
        <meta property="og:image" content="http://jharkhand.sbs/images/places/324231134_183657027598723_50202459.jpeg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jharkhand.sbs/" />
        <link rel="canonical" href="https://jharkhand.sbs/" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/images/2018040392-1024x678.jpg"
          alt="Explore Jharkhand"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-bold text-center"
          >
            Explore Jharkhand
          </motion.h1>
        </div>
      </div>

      {/* Places Section */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        {places.map((place, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.img
              src={place.image}
              alt={place.title}
              className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover h-80"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-peach-700 mb-4">{place.title}</h2>
              <p className="text-lg text-gray-600">{place.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </section>
  );
}
