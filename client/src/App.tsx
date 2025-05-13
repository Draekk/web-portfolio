import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PExperience from "./components/personal_experience/PExperience";
import Technologies from "./components/technologies/Technologies";
import ContactCard from "./components/contact/ContactCard";
import MailForm from "./components/contact/MailForm";
import "./App.css";
import { textAll } from "./types/tTextLang";

function App() {
  const [navPopUp, setNavPopUp] = useState(false);
  const [contactPanel, setContactPanel] = useState(false);
  const [mailModal, setMailModal] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 760px)").matches
  );
  const [isWide, setIsWide] = useState(
    window.matchMedia("(min-width: 1280px)").matches
  );
  const [lang, setLang] = useState(textAll.en);

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
      <div className="flex h-[85vh] md:h-[80vh]">
        <aside
          id="aside"
          className={`${
            contactPanel ? "block" : "hidden"
          } xl:inline-block lg:min-w-[240px] lg:w-[300px] pb-[2vh] z-50 w-screen sm:h-fit h-[85vh] xl:h-full sm:w-[300px] bg-black xl:bg-dark-transparent lg:mr-1 absolute left-0 xl:static border xl:border-b-0 border-purple-500 border-x-purple-300 border-l-0 xl:border-x border-r-0 sm:border-r sm:rounded-tr-xl sm:rounded-br-xl xl:rounded-t-xl xl:rounded-br-none ${
            isWide ? "aside-shadow-none" : "aside-shadow"
          }`}
        >
          <div className="flex items-center sm:justify-center py-[2vh] px-1 w-full">
            <h2 className="font-black text-xl text-white text-center ml-auto xl:mx-auto">
              {lang.contact.title}
            </h2>
            <button
              onClick={() => setContactPanel(false)}
              className="border-2 border-white rounded-full w-6 h-6 ml-auto xl:hidden cursor-pointer"
            >
              <i className="fa-solid fa-xmark lg:text-xl text-white"></i>
            </button>
          </div>
          <section className="grid grid-cols-1 gap-y-3 xl:gap-y-6 max-w-full justify-items-center px-4">
            <ContactCard
              imgUrl={
                "https://res.cloudinary.com/dhaha1ozm/image/upload/v1747064331/curriculum-vitae_pruzry.png"
              }
              url={
                "https://drive.google.com/uc?export=download&id=1t-mRDL6ktxKsRu5X--QNqvO3siV1bxKi"
              }
              text="Curriculum Vitae"
            ></ContactCard>
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
              imgUrl={
                "https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664245/whatsapp_ico_color_mntrzv.png"
              }
              url={"https://wa.me/56951706253"}
              text="WhatsApp"
            ></ContactCard>
            <button
              onClick={() => setMailModal(true)}
              className="flex items-center justify-start mx-5 w-full max-w-[350px] px-2 py-3 cursor-pointer border border-t-purple-500 border-purple-300 rounded-xl hover:scale-105 hover:border-dashed hover:bg-purple-950 hover:font-black hover:relative transition-all"
            >
              <figure className="w-8 h-8 overflow-hidden flex justify-center items-center">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dhaha1ozm/image/upload/v1744664245/gmail_ico_color_ktbaz5.png"
                  alt="Email"
                />
              </figure>
              <span className="text-lg lg:text-xl text-white w-full ml-3 text-left">
                Email
              </span>
            </button>
          </section>
        </aside>
        {mailModal ? (
          <MailForm
            title={lang.mailForm.title}
            name={lang.mailForm.name}
            email={lang.mailForm.email}
            send={lang.mailForm.send}
            mailModal={mailModal}
            setMailModal={setMailModal}
          ></MailForm>
        ) : (
          <></>
        )}
        <main
          onClick={() => {
            setNavPopUp(false);
            setContactPanel(false);
            setMailModal(false);
          }}
          className="
          
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
          <Hero title={lang.hero.title} paragraph={lang.hero.paragraph}></Hero>
          <PExperience
            title={lang.experience.title}
            paragraph={lang.experience.paragraph}
          ></PExperience>
          <Technologies
            title={lang.technologies.title}
            btnScreenshot={lang.btnScreenshot}
          ></Technologies>
        </main>
      </div>
    </>
  );
}

export default App;
