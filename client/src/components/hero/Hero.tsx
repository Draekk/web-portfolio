import "../../App.css";
import { tHero } from "../../types/tTextLang";

function Hero({ paragraph }: tHero) {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-start md:justify-center mt-10 md:gap-x-5 lg:gap-x-16 md:px-16 h-[80vh] scroll-mt-[20vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center">
          <img src="#" alt="profile-picture" />
        </div>
        <h2 className="text-white font-black text-nowrap lg:text-2xl pt-2 pb-5 md:pt-5 md:pb-0">
          DRAEKKDEV
        </h2>
      </div>
      <div className="overflow-scroll scroll-smooth max-h-full">
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-white md:text-lg lg:text-xl"
        ></p>
      </div>
    </div>
  );
}

export default Hero;
