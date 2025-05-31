"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dark from "../../../public/assets/dark_mode.png";
import light from "../../../public/assets/light_mode.png";

interface NavBarType {
  theme: boolean;
  // eslint-disable-next-line
  setTheme: any;
}
const NavBar = ({ theme, setTheme }: NavBarType) => {
  const [image, setImage] = useState(light);

  useEffect(() => {
    if (theme) {
      setImage(light);
    } else {
      setImage(dark);
    }
  }, [theme]);

  return (
    <div className="relative w-full h-fit z-100">
      <div
        className="icon-holder absolute mr-2 mt-3 lg:mr-5 lg:mt-3 p-1 rounded-lg right-0 cursor-pointer"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        <Image
          className="opacity-50 lg:opacity-30 hover:opacity-70 hover:rotate-15 hover:scale-105"
          src={image}
          alt="dark mode image"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};

export default NavBar;
