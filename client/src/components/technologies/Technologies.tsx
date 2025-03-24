import "./technologies.css";
import { useFetchData } from "../../hooks/useFetchData";
import Technology from "./Technology";

function Technologies() {
  const { techs } = useFetchData();

  return (
    <section
      id="technologies"
      className="flex flex-col gap-y-3 text-white w-full"
    >
      <h2 className="font-black text-2xl lg:text-4xl justify-content-start">
        TECHNOLOGIES
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-9 gap-y-10 py-5">
        {techs.length > 0 ? (
          techs.map((tech) => (
            <Technology
              key={tech.id}
              id={tech.id}
              name={tech.name}
              logoUrl={tech.logoUrl}
            ></Technology>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Technologies;
