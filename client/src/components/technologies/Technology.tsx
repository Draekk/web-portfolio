import { tTechnology } from "../../types/tTechnology";

type TTechnologyProps = tTechnology & {
  selectTech: boolean;
  toggleTech: () => void;
};

function Technology({
  logoUrl,
  name,
  selectTech,
  toggleTech,
}: TTechnologyProps) {
  const ICON_ANIM: string = "icon-anim";
  const TRANSITION_1S: string = "transition-1s";
  const CARD_ANIM: string = "card-anim";
  const SPAN_SHADOW: string = "span-shadow";

  const cardEffectEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const ICON: HTMLElement | null = e.currentTarget.querySelector("figure");
    const SPAN: HTMLSpanElement | null = e.currentTarget.querySelector("span");

    ICON?.classList.add(ICON_ANIM);
    ICON?.classList.remove(TRANSITION_1S);
    SPAN?.classList.add(SPAN_SHADOW);
    e.currentTarget.classList.add(CARD_ANIM);
    e.currentTarget.classList.remove(TRANSITION_1S);
  };

  const cardEffectLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const ICON: HTMLElement | null = e.currentTarget.querySelector("figure");
    const SPAN: HTMLSpanElement | null = e.currentTarget.querySelector("span");

    ICON?.classList.remove(ICON_ANIM);
    ICON?.classList.add(TRANSITION_1S);
    SPAN?.classList.remove(SPAN_SHADOW);
    e.currentTarget.classList.remove(CARD_ANIM);
    e.currentTarget.classList.add(TRANSITION_1S);
  };

  return (
    <div
      onMouseEnter={(e) => (!selectTech ? cardEffectEnter(e) : null)}
      onMouseLeave={(e) => (!selectTech ? cardEffectLeave(e) : null)}
      onClick={(e) => {
        toggleTech();
        cardEffectLeave(e);
      }}
      className="flex flex-col justify-center items-center tech-card hover:cursor-pointer"
      title={"Ver proyectos con ".concat(name)}
    >
      <figure className="w-14 h-14 lg:w-28 md:h-28 rounded-full p-1 flex items-center justify-center">
        <img src={logoUrl} alt={name} className="w-[75%]" />
      </figure>
      <span className="text-white text-sm md:text-lg lg:text-xl capitalize">
        {name}
      </span>
    </div>
  );
}

export default Technology;
