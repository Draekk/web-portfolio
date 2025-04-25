import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PExperience from "./components/personal_experience/PExperience";
import Technologies from "./components/technologies/Technologies";
import ContactCard from "./components/contact/ContactCard";
import "./App.css";
import { textAll } from "./types/tTextLang";

function App() {
  const [navPopUp, setNavPopUp] = useState(false);
  const [contactPanel, setContactPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 760px)").matches
  );
  const [isWide, setIsWide] = useState(
    window.matchMedia("(min-width: 1280px)").matches
  );
  const [lang, setLang] = useState(textAll.es);

  const toggleLang: () => void = () => {
    setLang((prevLang) => (prevLang === textAll.es ? textAll.en : textAll.es));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const handleResize = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(e.matches);
      setNavPopUp(false);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const mediaQueryWide = window.matchMedia("(min-width: 1280px)");

    const handleResize = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsWide(e.matches);
    };
    mediaQueryWide.addEventListener("change", handleResize);

    return () => mediaQueryWide.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <Header
        isMobile={isMobile}
        navPopUp={navPopUp}
        contactPanel={contactPanel}
        setNavPopUp={setNavPopUp}
        setContactPanel={setContactPanel}
        header={lang.header}
        toggleLang={toggleLang}
      ></Header>
      <div className="flex m-auto">
        <aside
          className={`${
            contactPanel ? "block" : "hidden"
          } xl:inline-block lg:min-w-[240px] lg:w-[300px] w-screen sm:w-[300px] min-h-full bg-black xl:bg-dark-transparent lg:mr-1 absolute left-0 xl:static border border-b-0 border-purple-500 border-x-purple-300 border-l-0 xl:border-x border-r-0 sm:border-r sm:rounded-tr-xl xl:rounded-t-xl ${
            isWide ? "aside-shadow-none" : "aside-shadow"
          }`}
        >
          <div className="flex items-center sm:justify-center px-1 w-full">
            <h2 className="font-black text-xl text-white text-center my-5 ml-auto xl:mx-auto">
              {lang.contact.title}
            </h2>
            <button
              onClick={() => setContactPanel(false)}
              className="border-2 border-white rounded-full w-6 h-6 ml-auto xl:hidden cursor-pointer"
            >
              <i className="fa-solid fa-xmark lg:text-xl text-white"></i>
            </button>
          </div>
          <section className="grid grid-cols-1 gap-y-5 max-w-full justify-items-center px-4">
            <ContactCard
              imgUrl={
                "https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664244/linkedin_ico_color_lyeulq.png"
              }
              url={"https://linkedin.com/in/gever-rodriguez"}
              text="LinkedIn"
            ></ContactCard>
            <ContactCard
              imgUrl="https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664245/github_ico_color_t0abcq.png"
              url="https://github.com/Draekk"
              text="GitHub"
            ></ContactCard>
            <ContactCard
              imgUrl="https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664245/gmail_ico_color_ktbaz5.png"
              url="https://mail.google.com/mail/?view=cm&fs=1&to=rodriver1992@gmail.com"
              text="Email"
            ></ContactCard>
            <ContactCard
              imgUrl={
                "https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664245/whatsapp_ico_color_mntrzv.png"
              }
              url={"https://wa.me/56951706253"}
              text="WhatsApp"
            ></ContactCard>
          </section>
        </aside>
        <main
          onClick={() => {
            setNavPopUp(false);
            setContactPanel(false);
          }}
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
          md:px-3 
          text-justify 
        "
        >
          <div className="scroll-section scroll-mt-[15vh]">
            <Hero paragraph={lang.hero.paragraph}></Hero>
          </div>
          <div className="scroll-section scroll-mt-[15vh]">
            <PExperience
              title={lang.experience.title}
              paragraph={lang.experience.paragraph}
            ></PExperience>
          </div>
          <div className="scroll-section scroll-mt-[15vh] w-full">
            <Technologies
              title={lang.technologies.title}
              btnScreenshot={lang.btnScreenshot}
            ></Technologies>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
