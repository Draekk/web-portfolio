import "../../App.css";
import { tHeader } from "../../types/tTextLang";

type THeaderProps = {
  isMobile: boolean;
  navPopUp: boolean;
  contactPanel: boolean;
  setNavPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setContactPanel: React.Dispatch<React.SetStateAction<boolean>>;
  header: tHeader;
  toggleLang: () => void;
};

function Header({
  isMobile,
  navPopUp,
  contactPanel,
  setNavPopUp,
  setContactPanel,
  header: headerText,
  toggleLang,
}: THeaderProps) {
  return (
    <header
      className={`py-0 my-0 h-20 md:h-28 bg-none flex justify-between items-center px-2.5 w-full ${
        contactPanel ? "pointer-events-none" : ""
      }`}
    >
      <h1 className="text-nowrap font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white">
        {headerText.title}
      </h1>
      <nav className="flex justify-end items-center h-full w-full">
        {isMobile ? (
          <>
            {!navPopUp ? (
              <button disabled={contactPanel} className="disabled:hidden">
                <i
                  onClick={() => setNavPopUp(true)}
                  className="fa-solid fa-bars text-white text-2xl"
                ></i>
              </button>
            ) : (
              <>
                <ul
                  onClick={() => setNavPopUp(false)}
                  className="absolute top-16 right-0 grid pl-3 pr-2 py-2 border border-r-0 rounded-l-xl border-t-purple-600 border-purple-300 bg-black nav-shadow"
                >
                  <li className="h-full w-full border-b border-b-purple-300 flex justify-end pr-2 pb-1">
                    <a className="text-white font-semibold h-full" href="#home">
                      {headerText.navHome}
                    </a>
                  </li>
                  <li className="h-full w-full border-b border-b-purple-300 flex justify-end pr-2 py-1">
                    <a
                      className="text-white font-semibold h-full"
                      href="#personal-experience"
                    >
                      {headerText.navExperience}
                    </a>
                  </li>
                  <li className="h-full w-full border-b border-b-purple-300 flex justify-end pr-2 py-1">
                    <a
                      className="text-white font-semibold h-full"
                      href="#technologies"
                    >
                      {headerText.navTechnologies}
                    </a>
                  </li>
                  <li className="h-full w-full border-b border-b-purple-300 flex justify-end pr-2 py-1">
                    <a
                      className="text-white font-semibold h-full"
                      href="#"
                      onClick={() => setContactPanel(true)}
                    >
                      {headerText.navContact}
                    </a>
                  </li>
                  <li className="h-full w-full flex justify-end pr-2 pt-1">
                    <button
                      onClick={toggleLang}
                      className="text-white font-bold w-full text-right"
                    >
                      en/es
                    </button>
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          <>
            <ul className="flex justify-end gap-5 lg:gap-10 items-center h-full">
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#home"
                >
                  {headerText.navHome}
                </a>
              </li>
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#personal-experience"
                >
                  {headerText.navExperience}
                </a>
              </li>
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#technologies"
                >
                  {headerText.navTechnologies}
                </a>
              </li>
              <li className="h-full xl:hidden">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#"
                  onClick={() => setContactPanel(true)}
                >
                  {headerText.navContact}
                </a>
              </li>
              <li className="h-full flex items-center">
                <button
                  onClick={toggleLang}
                  className="text-white font-semibold flex items-center lg:text-lg xl:text-xl border-2 border-purple-600 hover:bg-purple-950 border-dashed p-3 rounded-full cursor-pointer"
                >
                  es/en
                </button>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
