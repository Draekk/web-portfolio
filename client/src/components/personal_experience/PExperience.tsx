import "../../App.css";

function PExperience() {
  return (
    <section
      id="personal-experience"
      className="flex flex-col gap-y-3 text-white h-[80vh]"
    >
      <h2 className="font-black text-2xl lg:text-4xl">PERSONAL EXPERIENCE</h2>
      <div className="overflow-scroll scroll-smooth">
        <p className="text-sm md:text-lg lg:text-xl">
          Cuento con experiencia en el desarrollo de aplicaciones web,
          principalmente en el área de backend, utilizando <b>Java</b> junto con{" "}
          <b>Spring Boot</b>, <b>Hibernate</b> y <b>JPA</b>. También he
          trabajado con tecnologías frontend como <b>React.js</b>, <b>HTML</b>,{" "}
          <b>CSS</b> y <b>Node.js</b>, lo que me permite desenvolverme en
          proyectos de tipo <b>fullstack</b>.
          <br />
          <br />
          He desarrollado APIs REST, sistemas de inventario, plataformas de
          gestión de usuarios y este mismo portafolio. Mi enfoque está en
          construir soluciones sólidas, funcionales y bien estructuradas.
          <br />
          <br />
          En la siguiente sección se presentan los proyectos desarrollados,
          organizados según las tecnologías utilizadas en cada uno de ellos.
        </p>
      </div>
    </section>
  );
}

export default PExperience;
