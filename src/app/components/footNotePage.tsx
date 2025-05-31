import BaseTemplate from "./baseTemplate";
import beis from "../../../public/assets/peeps/beis.svg";
import Link from "next/link";
import Image from "next/image";
import { PageType } from "./landingPage";
import Dock from "./Dock/dock";

const FootNoteData = (theme: boolean) => {
  return (
    <div
      className={`h-full relative justify-items-center py-7 ${
        theme ? "text-light-text" : "text-dark-text"
      }`}
    >
      <div className="footnote grid grid-flow-col grid-rows-4 gap-6 my-12 w-fit font-body-text lg:text-xl">
        <p className="mx-auto">Thanks for checking this out.</p>
        <p className="mx-auto">If you have a project for me,</p>
        <p className="mx-auto">or want to have a chat,</p>
        <a
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavlakshman7@gmail.com"
          }
          className="mx-auto underline underline-offset-2"
          target="blank"
        >
          <p>I&apos;d love to hear from you.</p>
        </a>
      </div>
      <div className="credits">
        <div className="img-container">
          <Image src={beis} alt="" height={300} width={200} />
        </div>
        {/* <h3 className="mx-auto font-credits text-2xl w-fit">
          Vaishnav Lakshman
        </h3> */}
      </div>
      <div className="dock lg:h-3/13 pb-8 lg:p-0">
        <Dock theme={theme} />
      </div>
    </div>
  );
};

const FooterPage = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={undefined}
      peep2={undefined}
      data={FootNoteData(theme)}
      peep1_position={undefined}
      peep2_position={undefined}
      isFooter
    />
  );
};

export default FooterPage;
