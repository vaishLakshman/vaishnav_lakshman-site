import BaseTemplate from "./baseTemplate";
import { PageType } from "./landingPage";
import ProjectsList from "../data/Projects";
import ProjectCard, { ProjectCardType } from "../UI/Card/ProjectCard";
import peep from "../../../public/assets/peeps/peep5.svg";

const ProjectsData = () => {
  return (
    <div className="h-full projectspage-container">
      <div className="font-jersey-sm text-6xl py-10 content-center">
        <h1>Projects</h1>
      </div>
      <div className="font-body-text text-dark-text  mb-5">
        <p>
          Showcasing some of the ‘real’ projects I’ve done on data analysis
          using multiple tech domains.
        </p>
      </div>
      <div className="projects-container h-3/5 w-full relative bg-gray-100 rounded-xl px-7 py-5 overflow-y-auto">
        {ProjectsList &&
          ProjectsList.map((item: ProjectCardType, index: number) => (
            <ProjectCard
              key={index}
              index={item.index}
              title={item.title}
              desc={item.desc}
              url={item.url}
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
      data={ProjectsData()}
      peep1_position={"mid"}
      peep2_position={undefined}
    />
  );
};

export default Projects;
