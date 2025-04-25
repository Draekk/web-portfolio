import "./technologies.css";
import Technology from "./Technology";
import { useTechnology } from "../../hooks/useTechnology";
import TechViewer from "./TechViewer";
import { tBtnScreenshot, tTechnologies } from "../../types/tTextLang";

type tTechnologiesProps = tTechnologies & {
  btnScreenshot: tBtnScreenshot;
};

function Technologies({ title, btnScreenshot }: tTechnologiesProps) {
  const { techList, tech, selectTech, toggleTech } = useTechnology();

  return (
    <section className="flex flex-col gap-y-3 text-white w-full transition-1s h-[85vh]">
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        {title}
      </h2>
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div
          className={`flex justify-center items-center overflow-y-scroll scroll-smooth ${
            selectTech.enabled ? "tech-selected" : "tech-unselected"
          }`}
        >
          {techList.length > 0 ? (
            techList.map((tech) => (
              <Technology
                key={tech.id}
                id={tech.id}
                name={tech.name}
                logoUrl={tech.logoUrl}
                selectTech={selectTech.enabled}
                toggleTech={() => toggleTech(tech.id)}
              ></Technology>
            ))
          ) : (
            <></>
          )}
        </div>
        {selectTech.enabled ? (
          <TechViewer
            tech={tech}
            text={btnScreenshot.text}
            closeText={btnScreenshot.closeText}
          ></TechViewer>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Technologies;
