"use client";
import "./globals.css";
import { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import "./UI/Carousal/Ecss.css";
import NavBar from "./components/navBar";
import EmblaCarousel from "./UI/Carousal/ECarousal";
import FooterPage from "./components/footNotePage";
import PixelArt from "./components/pixelArt";

export default function Home() {
  

  const [theme, setTheme] = useState(false);
  console.log("check", theme);
  return (
    <div className={`text-${theme ? "white" : "black"}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      {/* <EmblaCarousel slides={assetList} options={OPTIONS} /> */}
      <PixelArt theme={theme} />
      <FooterPage theme={theme} />
    </div>
  );
}
