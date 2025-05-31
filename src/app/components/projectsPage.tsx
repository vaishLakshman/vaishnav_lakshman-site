import BaseTemplate from "./baseTemplate";
import { PageType } from "./landingPage";
import ProjectsList from "../data/Projects";
import ProjectCard, { ProjectCardType } from "../UI/Card/ProjectCard";
import peep from "../../../public/assets/peeps/peep5.svg";

const ProjectsData = (theme: boolean) => {
  return (
    <div className="h-full projects-page-container">
      <div className="font-jersey-sm text-6xl py-10 content-center">
        <h1>Projects</h1>
      </div>
      <div
        className={`font-body-text mb-5 ${
          theme ? "text-light-text" : "text-dark-text"
        }`}
      >
        <p>Showcasing some real world projects I’ve created.</p>
      </div>
      <div
        className={`projects-container h-fit lg:h-3/5 w-full relative bg-zinc-200 lg:border- ${
          theme && "border-gray-400"
        } rounded-xl  px-3 lg:px-7  pb-5 lg:py-5 overflow-y-auto`}
      >
        {ProjectsList &&
          ProjectsList.map((item: ProjectCardType, index: number) => (
            <ProjectCard
              key={index}
              title={item.title}
              desc={item.desc}
              url={item.url}
              image={item.image}
              theme={theme}
            />
          ))}
      </div>
    </div>
  );
};

const Projects = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={peep}
      peep2={undefined}
      data={ProjectsData(theme)}
      peep1_position={"mid"}
      peep2_position={undefined}
    />
  );
};

export default Projects;
