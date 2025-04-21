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
          A lo largo de mi formación y práctica como desarrollador, he trabajado
          principalmente en el desarrollo de aplicaciones web, con un enfoque en
          el backend. Me especializo en Java y utilizo Spring Boot como
          framework principal. También tengo experiencia con Hibernate y JPA
          para la gestión de datos, lo que me ha permitido desarrollar APIs REST
          eficientes y estructuradas.
          <br />
          <br />
          En el frontend, he trabajado con React.js, junto con tecnologías como
          HTML, CSS y Node.js, lo que me ha permitido construir interfaces
          funcionales y conectadas a servicios backend de manera efectiva. Si
          bien mi interés principal está en la lógica del lado del servidor,
          también me desenvuelvo con soltura en el desarrollo del lado del
          cliente.
          <br />
          <br />
          He participado en proyectos como sistemas de inventario, plataformas
          de ventas, gestión de usuarios y este mismo portafolio, el cual cuenta
          con una API REST desarrollada por mí. Disfruto especialmente diseñar
          estructuras sólidas y escalables que simplifiquen procesos y mejoren
          el rendimiento general de las aplicaciones.
          <br />
          <br />
          Si bien mi experiencia se ha centrado principalmente en el backend,
          tengo como propósito desarrollar un perfil fullstack, fortaleciendo
          mis competencias tanto en el desarrollo del lado del servidor como en
          el frontend, con el fin de entregar soluciones integrales, eficientes
          y bien estructuradas.
        </p>
      </div>
    </section>
  );
}

export default PExperience;
