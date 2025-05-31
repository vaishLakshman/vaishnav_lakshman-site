import BaseTemplate from "./baseTemplate";
import peep2 from "../../../public/assets/peeps/peep4.svg";
import { PageType } from "./landingPage";
import EmblaCarousel from "../UI/Carousal/ECarousal";
import { EmblaOptionsType } from "embla-carousel";
import assetList from "../data/pixelAssest";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const pixelsData = (theme: boolean) => {
  return (
    <div className="h-full pixel-container">
      <div className="font-jersey-sm text-6xl py-10 content-center">
        <h1>Pixel Art</h1>
      </div>
      <div
        className={`font-body-text ${
          theme ? "text-light-text" : "text-dark-text"
        } h-2/10 mb-5 lg:mb-5`}
      >
        <p>
          I have always been fan of art, in all its forms. Amongst the plethora
          of art forms that I enjoy, one that really got my attention was{" "}
          <b>Pixel Art</b> - Classic, simple yet stunning.{" "}
        </p>
        <br />
        <p>
          With a Pandemic-break & a cracked version of Photoshop(don&apos;t
          judge!), I ended up creating a few works of my own. You guys can be
          the judge of my artistic skills. :){" "}
        </p>
      </div>
      <div className="carousal-container relative pt-15">
        <EmblaCarousel slides={assetList} options={OPTIONS} />
        <Link
          className="absolute right-0 top-0 w-fit font-jersey-sm text-sm lg:text-lg underline underline-offset-2 opacity-40 hover:opacity-75  "
          href={"/pixel-art"}
        >
          view all
        </Link>
      </div>
    </div>
  );
};

const PixelArt = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={undefined}
      peep2={peep2}
      data={pixelsData(theme)}
      peep1_position={undefined}
      peep2_position={undefined}
    />
  );
};

export default PixelArt;
