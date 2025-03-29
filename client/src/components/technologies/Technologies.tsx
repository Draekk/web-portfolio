import "./technologies.css";
import Technology from "./Technology";
import { useTechnology } from "../../hooks/useTechnology";
import TechViewer from "./TechViewer";

function Technologies() {
  const { techList, selectTech, toggleTech } = useTechnology();

  return (
    <section
      id="technologies"
      className="flex flex-col gap-y-3 text-white w-full transition-1s h-[80vh]"
    >
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        TECHNOLOGIES
      </h2>
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div
          className={`flex justify-center items-center ${
            selectTech ? "tech-selected" : "tech-unselected"
          }`}
        >
          {techList.length > 0 ? (
            techList.map((tech) => (
              <Technology
                key={tech.id}
                id={tech.id}
                name={tech.name}
                logoUrl={tech.logoUrl}
                selectTech={selectTech}
                toggleTech={() => toggleTech(tech.id)}
              ></Technology>
            ))
          ) : (
            <></>
          )}
        </div>
        {selectTech ? (
          <>{/* <TechViewer tech={tech} projects={projects}></TechViewer> */}</>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Technologies;
