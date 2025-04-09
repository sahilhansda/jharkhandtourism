import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Place";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DistrictDetail from "./pages/DistrictDetail";
import AllDistricts from "./pages/AllDistricts";
import Explore from "./pages/Explore";
import TourismType from "./pages/TourismType";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/district/:id" element={<DistrictDetail />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/districts" element={<AllDistricts />} />
          <Route path="/about/:section?" element={<About />} />
          <Route path="/tourism/:type" element={<TourismType />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
