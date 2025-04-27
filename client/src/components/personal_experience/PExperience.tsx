import "../../App.css";
import { tExperience } from "../../types/tTextLang";

function PExperience({ title, paragraph }: tExperience) {
  return (
    <section id="personal-experience" className="flex flex-col gap-y-3 text-white min-h-[85vh]">
      <h2 className="font-black text-2xl lg:text-4xl">{title}</h2>
        <p
          className="md:text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
    </section>
  );
}

export default PExperience;
