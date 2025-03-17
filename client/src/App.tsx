import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
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
      <main onClick={() => setNavPopUp(false)} className="h-full">
        <Hero></Hero>
      </main>
    </>
  );
}

export default App;
