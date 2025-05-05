import "./techViewer.css";
import { tDetailedTechnology, tSelectedTech } from "../../types/tTechnology";
import ProjectSummary from "./projects/ProjectSummary";
import { useEffect, useRef, useState } from "react";
import { tBtnScreenshot } from "../../types/tTextLang";

type TTechViewerProps = tBtnScreenshot & {
  tech: tDetailedTechnology;
  selectTech: tSelectedTech;
  toggleTech: (id: number) => void;
};

function TechViewer({
  tech,
  text,
  closeText,
  selectTech,
  toggleTech,
}: TTechViewerProps) {
  const [picUrl, setPicUrl] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    selectTech.enabled && modalRef.current ? modalRef.current.focus() : null;
  }, [selectTech.enabled]);

  const onEscapeDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      toggleTech(selectTech.id);
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={onEscapeDown}
      className="w-full h-full overflow-hidden"
    >
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
    </div>
  );
}

export default TechViewer;
