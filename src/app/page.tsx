"use client";
import "./globals.css";
import { useState } from "react";
import "./UI/Carousal/Ecss.css";
import NavBar from "./components/navBar";
import FooterPage from "./components/footNotePage";
import PixelArt from "./components/pixelArt";
import LandingPage from "./components/landingPage";
import Projects from "./components/projectsPage";
import Credits from "./components/credits";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`text-${theme ? "white" : "black"}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <LandingPage theme={theme} />
      <Projects theme={theme} />
      <PixelArt theme={theme} />
      <FooterPage theme={theme} />
      <Credits theme={theme} />
    </div>
  );
}
