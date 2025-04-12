import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PExperience from "./components/personal_experience/PExperience";
import Technologies from "./components/technologies/Technologies";
import ContactCard from "./components/contact/ContactCard";
import "./App.css";

function App() {
  const [navPopUp, setNavPopUp] = useState(false);
  const [contactPanel, setContactPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 760px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");

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
        contactPanel={contactPanel}
        setNavPopUp={setNavPopUp}
        setContactPanel={setContactPanel}
      ></Header>
      <div className="flex m-auto">
        <aside
          className={`${
            contactPanel ? "block" : "hidden"
          } lg:inline-block lg:min-w-[240px] lg:w-[300px] w-screen sm:w-[300px] min-h-full bg-dark-transparent-2 lg:mr-1 absolute left-0 lg:static`}
        >
          <div className="flex items-center justify-between px-1">
            <h2 className="font-black lg:text-xl text-white text-center my-5">
              Let's Build Something
            </h2>
            <button className="border-2 border-white rounded-full w-6 h-6">
              <i className="fa-solid fa-xmark lg:text-xl text-white"></i>
            </button>
          </div>
          <section className="grid grid-cols-1 gap-y-5 max-w-full justify-items-center px-4">
            <ContactCard imgUrl={""} url={""} text="LinkedIn"></ContactCard>
            <ContactCard
              imgUrl={""}
              url={"https://wa.me/56951706253"}
              text="WhatsApp"
            ></ContactCard>
          </section>
        </aside>
        <main
          onClick={() => setNavPopUp(false)}
          className="
          flex
          flex-col
          items-center
          gap-y-20
          bg-dark-transparent 
          w-full 
          md:max-w-[780px] 
          lg:max-w-[900px] 
          lg:mx-0
          px-1 
          md:p-3 
          text-justify 
        "
        >
          <div className="scroll-section">
            <Hero></Hero>
          </div>
          <div className="scroll-section">
            <PExperience></PExperience>
          </div>
          <div className="scroll-section w-full">
            <Technologies></Technologies>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
