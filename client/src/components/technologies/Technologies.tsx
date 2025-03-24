import "./technologies.css";
import { useFetchData } from "../../hooks/useFetchData";
import { useEffect } from "react";

function Technologies() {
  const ICON_ANIM: string = "icon-anim";
  const TRANSITION_1S: string = "transition-1s";
  const CARD_ANIM: string = "card-anim";
  const SPAN_SHADOW: string = "span-shadow";
  const { techs } = useFetchData();

  const cardEffectEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const ICON: HTMLDivElement | null = e.currentTarget.querySelector("div");
    const SPAN: HTMLSpanElement | null = e.currentTarget.querySelector("span");
    ICON?.classList.add(ICON_ANIM);
    ICON?.classList.remove(TRANSITION_1S);
    SPAN?.classList.add(SPAN_SHADOW);
    e.currentTarget.classList.add(CARD_ANIM);
    e.currentTarget.classList.remove(TRANSITION_1S);
  };

  const cardEffectLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const ICON: HTMLDivElement | null = e.currentTarget.querySelector("div");
    const SPAN: HTMLSpanElement | null = e.currentTarget.querySelector("span");
    ICON?.classList.remove(ICON_ANIM);
    ICON?.classList.add(TRANSITION_1S);
    SPAN?.classList.remove(SPAN_SHADOW);
    e.currentTarget.classList.remove(CARD_ANIM);
    e.currentTarget.classList.add(TRANSITION_1S);
  };

  useEffect(() => {}, []);

  return (
    <section
      id="technologies"
      className="flex flex-col gap-y-3 text-white w-full"
    >
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        TECHNOLOGIES
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-9 gap-y-10 py-5">
        {techs.length > 0 ? (
          techs.map((tech) => (
            <div
              key={tech.id}
              onMouseEnter={cardEffectEnter}
              onMouseLeave={cardEffectLeave}
              className="flex flex-col justify-center items-center tech-card"
            >
              <figure className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
                <img src={tech.logoUrl} alt={tech.name} className="w-full" />
              </figure>
              <span className="text-white capitalize">{tech.name}</span>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Technologies;
