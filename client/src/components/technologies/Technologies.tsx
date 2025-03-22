import "./technologies.css";

function Technologies() {
  const ICON_ANIM: string = "icon-anim";
  const TRANSITION_1S: string = "transition-1s";
  const CARD_ANIM: string = "card-anim";
  const SPAN_SHADOW: string = "span-shadow";

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

  return (
    <section
      id="technologies"
      className="flex flex-col gap-y-3 text-white w-full"
    >
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        TECHNOLOGIES
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-9 gap-y-10 py-5">
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485841/java_rxaa44.png"
              alt="java"
              className="w-full"
            />
          </div>
          <span className="text-white">Java</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485839/spring_knayxv.png"
              alt="spring"
              className="w-full"
            />
          </div>
          <span className="text-white">Springboot</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485839/mysql_uhzu6l.png"
              alt="mysql"
              className="w-full"
            />
          </div>
          <span className="text-white">MySQL</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485839/hibernate_mkz7hc.png"
              alt="hibernate"
              className="w-full"
            />
          </div>
          <span className="text-white">Hibernate</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485839/js_cqpcd0.png"
              alt="javascript"
              className="w-full"
            />
          </div>
          <span className="text-white">JavaScript</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485837/html-5_yiuo6t.png"
              alt="html5"
              className="w-full"
            />
          </div>
          <span className="text-white">HTML5</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485837/node-js_vyjgxz.png"
              alt="nodejs"
              className="w-full"
            />
          </div>
          <span className="text-white">Node.js</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485837/css-3_wrhglx.png"
              alt="css3"
              className="w-full"
            />
          </div>
          <span className="text-white">CSS3</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/react_xqorqv.png"
              alt="reactjs"
              className="w-full"
            />
          </div>
          <span className="text-white">React.js</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/tailwind_mxvo3p.png"
              alt="tailwindcss"
              className="w-full"
            />
          </div>
          <span className="text-white">TailwindCSS</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/maven_r9ol6p.png"
              alt="maven"
              className="w-full"
            />
          </div>
          <span className="text-white">Maven</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/npm_wwqgmi.png"
              alt="npm"
              className="w-full"
            />
          </div>
          <span className="text-white">npm</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/sequelize_s73ljg.webp"
              alt="sequelize"
              className="w-full"
            />
          </div>
          <span className="text-white">Sequelize</span>
        </div>
        <div
          onMouseEnter={cardEffectEnter}
          onMouseLeave={cardEffectLeave}
          className="flex flex-col justify-center items-center tech-card"
        >
          <div className="w-28 h-28 bg-white rounded-full overflow-hidden p-1 flex items-center">
            <img
              src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1742485836/ts_lolyn4.png"
              alt="typescript"
              className="w-full"
            />
          </div>
          <span className="text-white">TypeScript</span>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
