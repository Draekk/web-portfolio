import "../../App.css";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-start md:justify-center mt-10 md:gap-x-5 lg:gap-x-16 md:px-16 h-[80vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center">
          <img src="#" alt="profile-picture" />
        </div>
        <h2 className="text-white font-black text-nowrap lg:text-2xl pt-2 pb-5 md:pt-5 md:pb-0">
          DRAEKKDEV
        </h2>
      </div>
      <div className="overflow-scroll scroll-smooth">
        <p className="text-white text-sm md:text-lg lg:text-xl">
          Hola, soy <b>Gever Rodríguez</b>, aunque en el mundo del desarrollo me
          conocen como <b>Draekkdev</b>. Desde muy joven he sentido una gran
          curiosidad por la tecnología y especialmente por entender qué ocurre
          detrás de una pantalla o una interfaz.
          <br />
          <br />
          Me motiva profundamente resolver problemas, optimizar procesos y
          desarrollar soluciones que contribuyan a mejorar la funcionalidad, el
          rendimiento y la eficiencia de los sistemas con los que trabajo.
          <br />
          <br />
          Me considero una persona <b>responsable</b>, <b>autodidacta</b> y{" "}
          <b>perseverante</b>. Mantengo un compromiso constante con el
          aprendizaje, la exploración de nuevas ideas y la aplicación de
          soluciones creativas en cada proyecto en el que participo.
        </p>
      </div>
    </div>
  );
}

export default Hero;
