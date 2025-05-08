export type tTextAll = {
  es: tLang;
  en: tLang;
};

export type tLang = {
  header: tHeader;
  hero: tHero;
  experience: tExperience;
  technologies: tTechnologies;
  contact: tContact;
  btnScreenshot: tBtnScreenshot;
  mailForm: tMailForm;
};

export type tHeader = {
  title: string;
  navHome: string;
  navExperience: string;
  navTechnologies: string;
  navContact: string;
};

export type tHero = {
  paragraph: string;
};

export type tExperience = {
  title: string;
  paragraph: string;
};

export type tTechnologies = {
  title: string;
};

export type tContact = {
  title: string;
};

export type tMailForm = {
  title: string;
  name: string;
  email: string;
  send: string;
};

export type tBtnScreenshot = {
  text: string;
  closeText: string;
};

export const textAll: tTextAll = {
  es: {
    header: {
      title: "PORTAFOLIO WEB",
      navHome: "Inicio",
      navExperience: "Experiencia",
      navTechnologies: "Tecnologias",
      navContact: "Contáctame",
    },
    hero: {
      paragraph:
        "Hola, soy <b>Gever Rodríguez</b>, aunque en el mundo del desarrollo me conocen como <b>Draekkdev</b>. Desde muy joven he sentido una gran curiosidad por la tecnología y especialmente por entender qué ocurre detrás de una pantalla o una interfaz.<br /><br /> Me motiva profundamente resolver problemas, optimizar procesos y desarrollar soluciones que contribuyan a mejorar la funcionalidad, el rendimiento y la eficiencia de los sistemas con los que trabajo.<br /><br /> Me considero una persona <b>responsable</b>, <b>autodidacta</b> y <b>perseverante</b>. Mantengo un compromiso constante con el aprendizaje, la exploración de nuevas ideas y la aplicación de soluciones creativas en cada proyecto en el que participo.",
    },
    experience: {
      title: "EXPERIENCIA PERSONAL",
      paragraph:
        "Cuento con experiencia en el desarrollo de aplicaciones web, principalmente en el área de backend, utilizando <b>Java</b> junto con <b>Spring Boot</b>, <b>Hibernate</b> y <b>JPA</b>. También he trabajado con tecnologías frontend como <b>React.js</b>, <b>HTML</b>, <b>CSS</b> y <b>Node.js</b>, lo que me permite desenvolverme en proyectos de tipo <b>fullstack</b>. <br /><br />He desarrollado APIs REST, sistemas de inventario, plataformas de gestión de usuarios y este mismo portafolio. Mi enfoque está en construir soluciones sólidas, funcionales y bien estructuradas. <br /><br /> En la siguiente sección se presentan los proyectos desarrollados, organizados según las tecnologías utilizadas en cada uno de ellos.",
    },
    technologies: {
      title: "TECNOLOGIAS",
    },
    contact: {
      title: "¡Creemos Algo Increíble!",
    },
    btnScreenshot: {
      text: "Capturas",
      closeText: "Cerrar",
    },
    mailForm: {
      title: "Envíame un Correo",
      name: "Nombre",
      email: "Correo electrónico",
      send: "Enviar",
    },
  },
  en: {
    header: {
      title: "PORTFOLIO WEB",
      navHome: "Home",
      navExperience: "Experience",
      navTechnologies: "Technologies",
      navContact: "Contact me",
    },
    hero: {
      paragraph:
        "Hello, I'm <b>Gever Rodríguez</b>, although in the dev world I'm known as <b>Draekkdev</b>. Since I was young, I've been deeply curious about technology, especially about what happens behind a screen or an interface.<br /><br />I'm passionate about solving problems, optimizing processes, and building solutions that improve the functionality, performance, and efficiency of the systems I work with.<br /><br />I consider myself a <b>responsible</b>, <b>self-taught</b>, and <b>persistent</b> person. I'm constantly committed to learning, exploring new ideas, and applying creative solutions to every project I take part in.",
    },
    experience: {
      title: "PERSONAL EXPERIENCE",
      paragraph:
        "I have experience in web application development, mainly focused on the backend side, using <b>Java</b> along with <b>Spring Boot</b>, <b>Hibernate</b>, and <b>JPA</b>. I've also worked with frontend technologies like <b>React.js</b>, <b>HTML</b>, <b>CSS</b>, and <b>Node.js</b>, which allows me to contribute effectively to <b>fullstack</b> projects.<br /><br /> I've developed REST APIs, inventory systems, user management platforms, and this very portfolio. My focus is on building solid, functional, and well-structured solutions.<br /><br /> In the following section, you'll find the projects I've worked on, organized by the technologies used in each of them.",
    },
    technologies: {
      title: "TECHNOLOGIES",
    },
    contact: {
      title: "Let's Build Something",
    },
    btnScreenshot: {
      text: "Screenshots",
      closeText: "Close",
    },
    mailForm: {
      title: "Send me an Email",
      name: "Name",
      email: "Email",
      send: "Send",
    },
  },
};
