import "./technologies.css";
import { useFetchData } from "../../hooks/useFetchData";
import Technology from "./Technology";
import { useTechnology } from "../../hooks/useTechnology";
import TechViewer from "./TechViewer";

function Technologies() {
  const { techs } = useFetchData();
  const { selectTech, toggleTech } = useTechnology();

  return (
    <section
      id="technologies"
      className="flex flex-col gap-y-3 text-white w-full transition-1s h-[80vh]"
    >
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        TECHNOLOGIES
      </h2>
      <div className="flex flex-col justify-start items-center w-full">
        <div
          className={`flex justify-center items-center ${
            selectTech ? "tech-selected" : "tech-unselected"
          }`}
        >
          {techs.length > 0 ? (
            techs.map((tech) => (
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
          <>
            <TechViewer></TechViewer>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Technologies;
