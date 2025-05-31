import Image from "next/image";

export interface ProjectCardType {
  title: string;
  image?: any;
  desc: string;
  url: string;
  theme: boolean;
}

const ProjectCard = ({ image, title, desc, url, theme }: ProjectCardType) => {
  return (
    <div
      className={`project-card-container relative flex gap-5 font-credits ${
        theme ? "bg-teal-500" : "bg-teal-500"
      } w-full h-fit py-3 px-5 my-5 rounded-xl`}
    >
      <div className="img-container w-fit flex items-center ">
        <a href={url}>
          <Image
            src={image}
            alt=""
            width={150}
            className="rounded-2xl bg-white shadow-lg shadow-black/40"
          />
        </a>
      </div>
      <div className="write-up w-full relative flex lg:block items-center lg:m-0 my-2 text-white font-credits">
        <a
          href={url}
          target="blank"
          className=" text-lg lg:text-3xl font-bold hover:underline underline-offset-2 flex gap-2 items-center"
        >
          <p>{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
            </g>
          </svg>
        </a>
        <p className="hidden lg:block desc my-1 lg:mt-3  text-xs lg:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
