import { PageType } from "./landingPage";

const Credits = ({ theme }: PageType) => {
  return (
    <div
      className={`tech-credits w-full pb-1  font-body-text lg:text-xs text-[11px] text-${
        theme ? "white bg-dark-theme" : "black bg-white"
      } bottom-0`}
    >
      <div className=" w-fit mx-auto opacity-70 mb-1">
        <p className="w-fit mx-auto mb-1">
          © 2025{" "}
          <a
            href={"https://bento.me/vaish-lakshman"}
            target="blank"
            className="underline underline-offset-2 decoration-1"
          >
            <b>Vaishnav Lakshman</b>
          </a>
        </p>

        <div className="flex gap-2 w-fit mx-auto ">
          <p>Character illustrations from </p>
          <a
            href={"https://www.openpeeps.com/"}
            target="blank"
            className="underline underline-offset-2 decoration-1"
          >
            <b>Open Peeps</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Credits;
