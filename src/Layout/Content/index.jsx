import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../../Pages/AboutMe";
import Contact from "../../Pages/Contact";
import Portfolio from "../../Pages/Portfolio";
import Ugc from "../../Pages/Ugc";

function Content() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ugc" element={<Ugc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
