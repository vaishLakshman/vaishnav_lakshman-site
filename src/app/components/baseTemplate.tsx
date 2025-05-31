import Image from "next/image";
import { useEffect, useState } from "react";

interface BaseTemplateType {
  theme: boolean;
  // eslint-disable-next-line
  peep1?: any;
  // eslint-disable-next-line
  peep2?: any;
  peep1_position?: string;
  peep2_position?: string;
  // eslint-disable-next-line
  data: any;
  isFooter?: boolean;
}

export default function BaseTemplate({
  theme,
  peep1,
  peep2,
  peep1_position,
  peep2_position,
  data,
  isFooter,
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
    <div className={`lg:flex w-full min-h-dvh lg:pb-5 lg:m-0 h-full ${bg} ${isFooter && "flex justify-center items-center"}`}>
      <div className={`hidden lg:block left-pane w-2/6 content-end ${p1_pos}`}>
        {peep1 && (
          <div className={`image-holder w-fit mx-auto mb-20`}>
            <Image src={peep1} alt="Open peeps character" width={230} />
          </div>
        )}
      </div>
      <div className={`mid-pane lg:m-0 w-full px-7 lg:w-5/6`}>
        {data}
      </div>
      <div className={`right-pane lg:w-2/6 content-end ${p2_pos} `}>
        {peep2 && (
          <div className={`image-holder mt-15 lg:mt-0 w-fit mx-auto lg:mb-12`}>
            <Image src={peep2} alt="Open peeps character" width={230} />
          </div>
        )}
      </div>
    </div>
  );
}
