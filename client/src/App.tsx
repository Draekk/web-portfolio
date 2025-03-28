import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PExperience from "./components/personal_experience/PExperience";
import Technologies from "./components/technologies/Technologies";
import "./App.css";

function App() {
  const [navPopUp, setNavPopUp] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleResize = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(e.matches); // Actualiza el estado cuando cambia el tamaño de la pantalla
      setNavPopUp(false);
    };

    mediaQuery.addEventListener("change", handleResize); // Escucha cambios de tamaño
    return () => mediaQuery.removeEventListener("change", handleResize); // Limpia el evento
  }, []);

  return (
    <>
      <Header
        isMobile={isMobile}
        navPopUp={navPopUp}
        setNavPopUp={setNavPopUp}
      ></Header>
      <main
        onClick={() => setNavPopUp(false)}
        className="
          flex
          flex-col
          items-center
          gap-y-10
          bg-dark-transparent 
          w-full 
          md:max-w-[780px] 
          lg:max-w-[900px] 
          mx-auto 
          p-1 
          md:p-3 
          text-justify 
          overflow-scroll 
          h-[85vh]
        "
      >
        <Hero></Hero>
        <PExperience></PExperience>
        <Technologies></Technologies>
      </main>
    </>
  );
}

export default App;
