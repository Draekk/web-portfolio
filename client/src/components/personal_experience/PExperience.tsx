import "../../App.css";
import { tExperience } from "../../types/tTextLang";

function PExperience({ title, paragraph }: tExperience) {
  return (
    <section
      id="personal-experience"
      className="flex flex-col gap-y-3 text-white h-[80vh]"
    >
      <h2 className="font-black text-2xl lg:text-4xl sticky top-0 bg-black">
        {title}
      </h2>
      <div className="overflow-scroll scroll-smooth">
        <p
          className="md:text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </div>
    </section>
  );
}

export default PExperience;
