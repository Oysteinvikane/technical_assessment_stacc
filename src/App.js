import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Heatmap from "./pages/heatmap";
import ElectricityPrices from "./pages/electricityprices";
import "./styles/darkmode.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/electricityprices" element={<ElectricityPrices />} />
      </Routes>
    </Router>
  );
}

export default App;
