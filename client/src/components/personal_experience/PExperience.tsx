import "../../App.css";
import "../../title-anim.css";
import { tExperience } from "../../types/tTextLang";

function PExperience({ title, paragraph }: tExperience) {
  return (
    <section
      id="personal-experience"
      className="flex flex-col gap-y-3 text-white min-h-[85vh] py-3"
    >
      <h2 className="font-black text-2xl lg:text-4xl mb-5">
        <span>
          <span></span>
        </span>
        <span>
          <span></span>
        </span>
        {title}
      </h2>
      <div className="overflow-y-auto">
        <p
          className="md:text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </div>
    </section>
  );
}

export default PExperience;
