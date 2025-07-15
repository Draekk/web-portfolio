import { projectData } from "../data/projectData";
import { technologyData } from "../data/technologyData";
import { tProject, tProjectData } from "../types/tProject";
import { tTechnology } from "../types/tTechnology";

export type tTechnologyWithProjects = tTechnology & {
  projects: tProjectData[];
};

export type tProjectWithTechnologies = tProject & {
  technologies: tTechnology[];
};

function useData() {
  const getTechnologiesWithProjects: () => tTechnologyWithProjects[] = () => {
    return technologyData.map((tech) => {
      return {
        ...tech,
        projects: projectData.filter((project) =>
          project.technologyIds.includes(tech.id)
        ),
      };
    });
  };

  const getProjectsWithTechnologies = (projects: tProjectData[]) => {
    return projects.map((p) => {
      return {
        ...p,
        technologies: technologyData.filter((tech) =>
          p.technologyIds.includes(tech.id)
        ),
      };
    });
  };

  return { getTechnologiesWithProjects, getProjectsWithTechnologies };
}

export { useData };
