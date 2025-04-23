import "./techViewer.css";
import { tDetailedTechnology } from "../../types/tTechnology";
import ProjectSummary from "./projects/ProjectSummary";
import { useState } from "react";
import { tBtnScreenshot } from "../../types/tTextLang";

type TTechViewerProps = tBtnScreenshot & {
  tech: tDetailedTechnology;
};

function TechViewer({ tech, text, closeText }: TTechViewerProps) {
  const [picUrl, setPicUrl] = useState("");

  return (
    <section className="w-full h-full overflow-hidden">
      <h1 className="uppercase pt-6 pb-3 font-black">{tech.name}</h1>
      <div className="overflow-y-scroll scroll-smooth grid grid-cols-1 gap-5 h-[85%] scroll-hidden">
        {tech.projects.length > 0 ? (
          tech.projects.map((p) => (
            <ProjectSummary
              key={p.id}
              picUrl={picUrl}
              setPicUrl={setPicUrl}
              project={p}
              text={text}
              closeText={closeText}
            ></ProjectSummary>
          ))
        ) : (
          <p>No hay proyectos</p>
        )}
      </div>
    </section>
  );
}

export default TechViewer;
