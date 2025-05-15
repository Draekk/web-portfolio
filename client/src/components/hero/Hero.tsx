import "../../App.css";
import { tHero } from "../../types/tTextLang";

function Hero({ title, paragraph }: tHero) {
  return (
    <div
      id="home"
      className="flex flex-col items-center md:gap-x-5 lg:gap-x-16 pt-3"
    >
      <h2 className="text-white w-full font-black text-2xl lg:text-4xl mb-5 uppercase">
        <span>
          <span></span>
        </span>
        <span>
          <span></span>
        </span>
        {title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="text-white md:text-lg lg:text-xl min-h-screen"
      ></p>
    </div>
  );
}

export default Hero;
