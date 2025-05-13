"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dark from "../../../public/assets/dark_mode.png";
import light from "../../../public/assets/light_mode.png";

interface NavBarType {
  theme: boolean;
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
        className="icon-holder  fixed mr-7 mt-2 w-fit h-fit p-1 rounded-lg right-0 cursor-pointer"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        <Image
          className="opacity-20 hover:opacity-50"
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
