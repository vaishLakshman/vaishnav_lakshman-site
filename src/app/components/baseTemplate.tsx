import Image from "next/image";
import { useEffect, useState } from "react";

interface BaseTemplateType {
  theme: boolean;
  // eslint-disable-next-line
  peep1: any | undefined;
  // eslint-disable-next-line
  peep2: any | undefined;
  peep1_position: string | undefined;
  peep2_position: string | undefined;
  // eslint-disable-next-line
  data: any;
}

export default function BaseTemplate({
  theme,
  peep1,
  peep2,
  peep1_position,
  peep2_position,
  data,
}: BaseTemplateType) {
  const [bg, setBg] = useState("bg-white");
  const [p1_pos, setP1_pos] = useState("");
  const [p2_pos, setP2_pos] = useState("");

  useEffect(() => {
    if (theme) {
      setBg("bg-dark-theme");
    } else {
      setBg("bg-white");
    }

    if (peep1_position == "mid") {
      setP1_pos("pb-64");
    } else {
      setP1_pos("");
    }

    if (peep2_position == "mid") {
      setP1_pos("pb-48");
    } else {
      setP2_pos("");
    }
  }, [theme, peep1_position, peep2_position]);

  return (
    <div className={`flex  w-full border-b-2 border-b-gray-100 h-screen ${bg}`}>
      <div className={`left-pane w-2/6 content-end ${p1_pos}`}>
        {peep1 && (
          <div className={`image-holder w-fit mx-auto mb-7`}>
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
      <div className={`right-pane w-2/6 content-end ${p2_pos} `}>
        {peep2 && (
          <div className={`image-holder w-fit mx-auto mb-5`}>
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
