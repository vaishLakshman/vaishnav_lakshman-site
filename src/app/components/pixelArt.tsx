import BaseTemplate from "./baseTemplate";
import peep1 from "../../../public/assets/peeps/peep3.svg";
import peep2 from "../../../public/assets/peeps/peep4.svg";
import { PageType } from "./landingPage";
import EmblaCarousel from "../UI/Carousal/ECarousal";
import { EmblaOptionsType } from "embla-carousel";

import pic from "../../../public/assets/pixelcafe.gif";
import giff from "../../../public/assets/pixelcafe.gif";

const OPTIONS: EmblaOptionsType = { loop: true };
const assetList = [
  {
    key: 0,
    type: "img",
    asset: pic,
    title: "Title1",
    desc: "This is a description1",
    created_on: "02/05/2024",
  },
  {
    key: 1,
    type: "gif",
    asset: giff,
    title: "Title2",
    desc: "This is a description2",
    created_on: "03/05/2024",
  },
  {
    key: 2,
    type: "img",
    asset: pic,
    title: "Title3",
    desc: "This is a description3",
    created_on: "04/05/2024",
  },
  {
    key: 2,
    type: "gif",
    asset: giff,
    title: "Title4",
    desc: "This is a description4",
    created_on: "05/05/2024",
  },
];

const pixelsData = () => {
  return (
    <div className="h-full pixel-container">
      <div className="font-jersey-sm text-6xl py-10 content-center">
        <h1>Pixel Art</h1>
      </div>
      <div className="font-body-text h-2/10 mb-7">
        <p>Data</p>
      </div>
      <div className="carousal-container">
        <EmblaCarousel slides={assetList} options={OPTIONS} />
      </div>
    </div>
  );
};

const PixelArt = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={peep1}
      peep2={peep2}
      data={pixelsData()}
    />
  );
};

export default PixelArt;
