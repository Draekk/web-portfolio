import "../../App.css";
import { tHero } from "../../types/tTextLang";

function Hero({ paragraph }: tHero) {
  return (
    <div id="home" className="flex flex-col md:flex-row md:items-start md:justify-center md:pt-10 pb-10 md:gap-x-5 lg:gap-x-16 md:px-16">
      <div className="flex flex-col items-center justify-center">
        <figure className="bg-white w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center">
          <img src="#" alt="profile-picture" />
        </figure>
        <h2 className="text-white font-black text-nowrap lg:text-2xl pt-2 pb-5 md:pt-5 md:pb-0">
          DRAEKKDEV
        </h2>
      </div>
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-white md:text-lg lg:text-xl min-h-screen"
        ></p>
    </div>
  );
}

export default Hero;
