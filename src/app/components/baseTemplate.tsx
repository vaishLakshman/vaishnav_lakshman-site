import peep1 from "../../public/Guy sitting.svg";
import peep2 from "../../public/Girl standing.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BaseTemplateType {
  theme: boolean;
  peep1: any | undefined;
  peep2: any | undefined;
  data: any;
}

export default function BaseTemplate({
  theme,
  peep1,
  peep2,
  data,
}: BaseTemplateType) {
  const [bg, setBg] = useState("bg-white");

  useEffect(() => {
    if (theme) {
      setBg("bg-dark-theme");
    } else {
      setBg("bg-white");
    }
  }, [theme]);

  return (
    <div className={`flex  w-full h-screen ${bg}`}>
      <div className="left-pane w-2/6 content-end">
        {peep1 && (
          <div className="image-holder w-fit mx-auto mb-7">
            <Image
              src={peep1}
              alt="Open peeps character"
              height={500}
              width={230}
            />
          </div>
        )}
      </div>
      <div className="mid-pane w-5/6">{data}</div>
      <div className="right-pane w-2/6 content-end">
        {peep2 && (
          <div className="image-holder w-fit mx-auto mb-5">
            <Image
              src={peep2}
              alt="Open peeps character"
              height={350}
              width={230}
            />
          </div>
        )}
      </div>
    </div>
  );
}
