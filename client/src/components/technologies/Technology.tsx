import { TTech } from "../../types/tech";

function Technology({ logoUrl, name }: TTech) {
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
      onMouseEnter={cardEffectEnter}
      onMouseLeave={cardEffectLeave}
      className="flex flex-col justify-center items-center tech-card"
    >
      <figure className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
        <img src={logoUrl} alt={name} className="w-full" />
      </figure>
      <span className="text-white capitalize">{name}</span>
    </div>
  );
}

export default Technology;
