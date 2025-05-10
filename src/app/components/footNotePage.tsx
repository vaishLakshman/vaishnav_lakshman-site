import BaseTemplate from "./baseTemplate";
import beis from "../../../public/assets/peeps/beis.svg";
import Link from "next/link";
import Image from "next/image";
import { PageType } from "./landingPage";

const FootNoteData = () => {
  return (
    <div className="h-full justify-items-center py-7">
      <div className="footnote grid grid-flow-col grid-rows-4 gap-6 my-12 w-fit font-body-text text-xl">
        <p className="mx-auto">Thanks for checking this out.</p>
        <p className="mx-auto">If you have a project for me,</p>
        <p className="mx-auto">or just want to have a chat</p>
        <Link href={""} className="mx-auto underline underline-offset-2">
          <p>I'd love to hear from you.</p>
        </Link>
      </div>
      <div className="self-credit">
        <div className="img-container">
          <Image src={beis} alt="" height={300} width={200} />
        </div>
        <h3 className="mx-auto font-credits text-2xl w-fit">
          Vaishnav Lakshman
        </h3>
      </div>
      <div className="dock"></div>
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
    />
  );
};

export default FooterPage;
