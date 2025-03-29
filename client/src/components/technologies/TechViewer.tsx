import { tProject } from "../../types/tProject";
import { tTechnology } from "../../types/tTechnology";
import ProjectSummary from "./projects/ProjectSummary";

type TTechViewerProps = {
  tech: tTechnology;
  projects: tProject[];
};

function TechViewer({ tech, projects }: TTechViewerProps) {
  return (
    <section className="w-full h-full overflow-hidden">
      <h1 className="uppercase">{tech.name}</h1>
      <div className="overflow-y-scroll scroll-smooth grid grid-cols-1 gap-5 h-[95%]">
        {projects.length > 0 ? (
          projects.map((p) => (
            <>
              <ProjectSummary></ProjectSummary>
            </>
          ))
        ) : (
          <p>No hay proyectos</p>
        )}
      </div>
    </section>
  );
}

export default TechViewer;
