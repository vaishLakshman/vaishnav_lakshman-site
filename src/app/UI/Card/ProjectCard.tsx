export interface ProjectCardType {
  index: number;
  title: string;
  desc: string;
  url: string;
}

const ProjectCard = ({ index, title, desc, url }: ProjectCardType) => {
  return (
    <div className="project-card-container bg-gray-300 w-full h-1/3 py-3 px-5 my-5 rounded-xl">
      <div className="head flex gap-3 font-jersey-sm text-3xl text-black">
        <p>{index + 1}.</p>
        <a
          href={url}
          target="blank"
          className="hover:underline underline-offset-2 "
        >
          {title}
        </a>
      </div>
      <div className="desc ml-6  mt-3 my-auto font-body-text text-lg text-project-text">
        {desc}
      </div>
    </div>
  );
};

export default ProjectCard;
