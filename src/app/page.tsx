"use client";
import "./globals.css";
import { useState } from "react";
import "./UI/Carousal/Ecss.css";
import NavBar from "./components/navBar";
import FooterPage from "./components/footNotePage";
import PixelArt from "./components/pixelArt";
import LandingPage from "./components/landingPage";
import Projects from "./components/projectsPage";

export default function Home() {
  const [theme, setTheme] = useState(false);
  console.log("check", theme);
  return (
    <div className={`text-${theme ? "white" : "black"}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <LandingPage theme={theme} />
      <PixelArt theme={theme} />
      <Projects theme={theme} />
      <FooterPage theme={theme} />
    </div>
  );
}
