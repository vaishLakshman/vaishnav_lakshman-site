"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface PixelCardType {
  key: number;
  type: string;
  asset: any;
  title: string;
  desc: string;
  created_on: string;
}

const PixelCard = ({ type, asset, title, desc, created_on }: PixelCardType) => {
  const [assetFlag, setAssetFlag] = useState(true);
  //   const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (type == "img" || type == "gif") setAssetFlag(true);
    else setAssetFlag(false);
  }, [type]);
  return (
    <div className="card-container size-fit mx-auto relative cursor-pointer">
      {assetFlag ? (
        <div className="img-container size-[25rem] overflow-hidden rounded-4xl">
          <Image
            className="object-fill"
            src={asset}
            alt="image desc"
            height={400}
            width={400}
            unoptimized={true}
          />
        </div>
      ) : (
        <div className="vid-container">
          <iframe
            src={asset}
            height={400}
            width={400}
            allowFullScreen={false}
          />
        </div>
      )}
      {/* {hovered && ( */}
      <div className="desc-container absolute inset-0 size-[25rem] text-white rounded-4xl opacity-0 bg-white/20 backdrop-blur-md hover:opacity-100">
        <div className="relative  mx-5 my-20 grid grid-flow-col grid-rows-3 ">
          <h2 className="text-5xl font-jersey-sm">{title}</h2>
          <p className="h-24 font-jersey-sm text-2xl">
            {desc ? desc : "No description added."}
          </p>
          <span className="flex gap-2 items-center font-jersey-sm text-xl">
            <h3>Created on : </h3>
            <p>{created_on ? created_on : "--/--/--"}</p>
          </span>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default PixelCard;
