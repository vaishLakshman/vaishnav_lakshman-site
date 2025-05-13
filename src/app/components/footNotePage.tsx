import BaseTemplate from "./baseTemplate";
import beis from "../../../public/assets/peeps/beis.svg";
import Link from "next/link";
import Image from "next/image";
import { PageType } from "./landingPage";
import Dock from "./Dock/dock";

const FootNoteData = () => {
  return (
    <div className="h-full justify-items-center py-7 text-dark-text">
      <div className="footnote grid grid-flow-col grid-rows-4 gap-6 my-12 w-fit font-body-text text-xl">
        <p className="mx-auto">Thanks for checking this out.</p>
        <p className="mx-auto">If you have a project for me,</p>
        <p className="mx-auto">or just want to have a chat</p>
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
        <h3 className="mx-auto font-credits text-2xl w-fit">
          Vaishnav Lakshman
        </h3>
      </div>
      <div className="dock h-[12rem]">
        <Dock />
      </div>
      <div className="tech-credits font-body-text text-xs opacity-75 bottom-0">
        <div className="flex gap-2">
          <p>Character illustrations : </p>
          <Link
            href={"https://www.openpeeps.com/"}
            target="blank"
            className="hover:underline"
          >
            <b>Open Peeps</b>
          </Link>
        </div>
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
      data={FootNoteData()}
      peep1_position={undefined}
      peep2_position={undefined}
    />
  );
};

export default FooterPage;
