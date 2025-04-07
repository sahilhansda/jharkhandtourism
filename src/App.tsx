import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import District from "./pages/District";
import Place from "./pages/Place";
import DistrictDetail from "./pages/DistrictDetail";
import AllDistricts from "./pages/AllDistricts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/district/:id" element={<DistrictDetail />} />
        <Route path="/place/:id" element={<Place />} />
        <Route path="/districts" element={<AllDistricts />} />
      </Routes>
    </Router>
  );
}
