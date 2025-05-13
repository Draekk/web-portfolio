import "../../App.css";
import { tHero } from "../../types/tTextLang";

function Hero({ paragraph }: tHero) {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-start md:justify-center md:pt-10 pb-10 md:gap-x-5 lg:gap-x-16 md:px-16"
    >
      <p
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="text-white md:text-lg lg:text-xl min-h-screen"
      ></p>
    </div>
  );
}

export default Hero;
