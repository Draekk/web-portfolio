import "./techViewer.css";
import ProjectSummary from "./projects/ProjectSummary";
import { tBtnScreenshot } from "../../types/tTextLang";
import { tTechnologyWithProjects, useData } from "../../hooks/useData";

type TTechViewerProps = tBtnScreenshot & {
  tech: tTechnologyWithProjects;
};

function TechViewer({ tech, text, closeText }: TTechViewerProps) {
  const { getProjectsWithTechnologies } = useData();

  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="uppercase pt-6 pb-3 font-black">{tech.name}</h1>
      <div className="overflow-y-scroll scroll-smooth grid grid-cols-1 gap-5 h-[85%] scroll-hidden">
        {tech.projects.length > 0 ? (
          getProjectsWithTechnologies(tech.projects).map((p) => (
            <ProjectSummary
              key={p.id}
              project={p}
              text={text}
              closeText={closeText}
            ></ProjectSummary>
          ))
        ) : (
          <p>No hay proyectos</p>
        )}
      </div>
    </div>
  );
}

export default TechViewer;
