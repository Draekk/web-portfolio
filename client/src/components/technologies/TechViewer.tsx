import "./techViewer.css";
import { tDetailedTechnology } from "../../types/tTechnology";
import ProjectSummary from "./projects/ProjectSummary";

type TTechViewerProps = {
  tech: tDetailedTechnology;
};

function TechViewer({ tech }: TTechViewerProps) {
  return (
    <section className="w-full h-full overflow-hidden">
      <h1 className="uppercase pt-6 pb-3 font-black">{tech.name}</h1>
      <div className="overflow-y-scroll scroll-smooth grid grid-cols-1 gap-5 h-[95%] scroll-hidden">
        {tech.projects.length > 0 ? (
          tech.projects.map((p) => (
            <ProjectSummary key={p.id} project={p}></ProjectSummary>
          ))
        ) : (
          <p>No hay proyectos</p>
        )}
      </div>
    </section>
  );
}

export default TechViewer;
